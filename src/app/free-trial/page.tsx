import { SectionHeader } from "@/components/sections/SectionHeader";
import { TrialForm } from "@/components/sections/TrialForm";
import { BmiCalculator } from "@/components/sections/BmiCalculator";
import { Reveal } from "@/components/motion/Reveal";
import { Check } from "lucide-react";

export const metadata = { title: "Free Trial" };

const perks = [
  "1 full training session, no charges",
  "Personalised fitness assessment",
  "Walk-through of every gym zone",
  "Custom plan recommendation",
  "Zero commitment — try before you join",
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
            description="Book a no-obligation free trial session. Meet our head coach, tour the facility, and try the equipment."
          />
        </div>
      </section>

      <section className="section grid gap-12 lg:grid-cols-2 items-start">
        <Reveal>
          <ul className="space-y-3 mb-10">
            {perks.map((p) => (
              <li key={p} className="flex gap-3 text-ink-800">
                <Check className="text-brand-cyan-dim shrink-0 mt-0.5" /> {p}
              </li>
            ))}
          </ul>
          <BmiCalculator />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="h-display text-2xl text-ink-900 mb-6">Reserve Your Slot</h2>
          <p className="mb-4 text-sm text-ink-500">
            Choose your goal and preferred timing. We&apos;ll confirm your session on WhatsApp or by phone.
          </p>
          <TrialForm />
        </Reveal>
      </section>
    </>
  );
}
