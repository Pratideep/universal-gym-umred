import { SectionHeader } from "@/components/sections/SectionHeader";
import { TrialForm } from "@/components/sections/TrialForm";
import { BmiCalculator } from "@/components/sections/BmiCalculator";
import { Reveal } from "@/components/motion/Reveal";
import { Check, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export const metadata = { title: "Free Trial" };

const perks = [
  "1 full training session, zero charges",
  "Personalised fitness assessment & machine induction",
  "Walk-through of all 50+ machines & floor zones",
  "Custom workout guidance for your body goal",
  "Zero commitment — try the facility before you join",
];

export default function FreeTrialPage() {
  return (
    <>
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            dark
            eyebrow="Free Trial"
            title="Experience Universal Gym"
            description="Book a no-obligation free trial session. Meet our head coach, tour the facility, and train on our floor in Umred."
          />
        </div>
      </section>

      <section className="section grid gap-12 lg:grid-cols-2 items-start">
        {/* Trial Form — top on mobile, right on desktop */}
        <div className="order-1 lg:order-2">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h2 className="h-display text-2xl text-ink-900">Reserve Your Slot</h2>
              <a
                href={waLink("Hi! I would like to book a 1-day free trial session at Universal Gym Umred.")}
                target="_blank"
                rel="noopener"
                className="text-xs font-semibold text-emerald-800 bg-emerald-500/15 hover:bg-emerald-500/25 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 transition"
              >
                <MessageCircle size={14} className="text-emerald-600" /> Book via WhatsApp
              </a>
            </div>
            <p className="mb-4 text-sm text-ink-500">
              Choose your goal and preferred timing. We&apos;ll confirm your session on WhatsApp or by phone.
            </p>
            <TrialForm />
          </Reveal>
        </div>

        {/* Perks & BMI Calculator — bottom on mobile, left on desktop */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <h3 className="h-display text-xl text-ink-900 mb-4">What Your Free Pass Includes</h3>
            <ul className="space-y-3 mb-10">
              {perks.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-ink-800 font-medium">
                  <Check className="text-brand-cyan-dim shrink-0 mt-0.5" size={18} /> {p}
                </li>
              ))}
            </ul>
            <BmiCalculator />
          </Reveal>
        </div>
      </section>
    </>
  );
}
