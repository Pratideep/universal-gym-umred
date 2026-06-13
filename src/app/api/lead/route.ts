import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  goal: z.string().min(1).max(40),
  timing: z.string().min(1).max(40),
});

// Tiny in-memory rate limiter — one lead per IP per 20s.
const recent = new Map<string, number>();
const WINDOW_MS = 20_000;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  const last = recent.get(ip) ?? 0;
  if (now - last < WINDOW_MS) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }
  recent.set(ip, now);

  const { name, phone, goal, timing } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_INBOX || "contact@universalgymumred.com";
  const from = process.env.LEAD_FROM || "Universal Gym Leads <onboarding@resend.dev>";

  // Graceful fallback: log to server console when no API key is configured.
  if (!apiKey) {
    console.log("[lead]", { name, phone, goal, timing, ip, ts: new Date().toISOString() });
    return NextResponse.json({ ok: true, delivered: false, mode: "console" });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      subject: `🔥 New Free Trial Lead — ${name}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;padding:24px;background:#0B1220;color:#f5f5f5;border-radius:12px">
          <h2 style="color:#00D4FF;margin:0 0 16px;font-family:'Space Grotesk',Arial,sans-serif;letter-spacing:0.5px">NEW FREE TRIAL LEAD</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#64748B">Name</td><td style="padding:8px 0;font-weight:600">${escape(name)}</td></tr>
            <tr><td style="padding:8px 0;color:#64748B">Phone</td><td style="padding:8px 0"><a href="tel:+91${phone}" style="color:#00D4FF;text-decoration:none">+91 ${escape(phone)}</a></td></tr>
            <tr><td style="padding:8px 0;color:#64748B">Goal</td><td style="padding:8px 0">${escape(goal)}</td></tr>
            <tr><td style="padding:8px 0;color:#64748B">Timing</td><td style="padding:8px 0">${escape(timing)}</td></tr>
          </table>
          <div style="margin-top:20px;padding-top:16px;border-top:1px solid #243B53;font-size:12px;color:#64748B">
            Received ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
          </div>
        </div>`,
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[lead] resend error", err);
    // Still return ok=true so the user experience doesn't break — the WhatsApp
    // fallback in the form has already captured the lead client-side.
    return NextResponse.json({ ok: true, delivered: false, mode: "error" });
  }
}

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}
