import { SectionHeader } from "@/components/sections/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { site, waLink } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  const cards = [
    { i: Phone, label: "Call Us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { i: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: waLink() },
    { i: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { i: MapPin, label: "Visit", value: site.address, href: "#map" },
  ];

  return (
    <>
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            dark
            eyebrow="Get in Touch"
            title="We're Here to Help"
            description="Questions about plans, the ladies batch, or just want to drop by? Reach out — we reply fast."
          />
        </div>
      </section>

      <section className="section">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.07}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                className="card block hover:scale-[1.02] group"
              >
                <div className="grid h-12 w-12 place-items-center rounded-[12px] bg-brand-cyan/10 text-brand-cyan-dim mb-3 transition group-hover:bg-brand-cyan group-hover:text-brand-navy">
                  <c.i size={22} />
                </div>
                <div className="text-xs uppercase tracking-widest text-ink-500">{c.label}</div>
                <div className="mt-1 font-semibold text-ink-900">{c.value}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section pt-0 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div id="map" className="rounded-[20px] overflow-hidden border border-ink-300/30 aspect-[4/3] lg:aspect-auto lg:h-full shadow-card">
            <iframe
              src={site.mapsEmbed}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card">
            <Clock className="text-brand-cyan-dim mb-3" />
            <h3 className="h-display text-xl text-ink-900 mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 text-sm border-b border-ink-300/30 pb-2">
                  <span className="text-ink-800">{h.day}</span>
                  <span className="text-brand-cyan-dim font-semibold">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
