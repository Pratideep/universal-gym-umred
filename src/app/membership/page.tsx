import { SectionHeader } from "@/components/sections/SectionHeader";
import { PlansGrid } from "@/components/sections/PlansGrid";
import { Reveal } from "@/components/motion/Reveal";
import { Check, X } from "lucide-react";

export const metadata = { title: "Membership Plans" };

const compare = [
  { feature: "Full gym access", s: true, p: true, e: true },
  { feature: "Locker facility", s: true, p: true, e: true },
  { feature: "Fitness assessment", s: true, p: true, e: true },
  { feature: "Diet consultation", s: false, p: true, e: true },
  { feature: "Posing room access", s: false, p: true, e: true },
  { feature: "Monthly progress review", s: false, p: true, e: true },
  { feature: "Priority coach sessions", s: false, p: false, e: true },
  { feature: "Free t-shirt + supplements", s: false, p: false, e: true },
  { feature: "1-on-1 quarterly check-ins", s: false, p: false, e: true },
];

export default function MembershipPage() {
  return (
    <>
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            dark
            center
            eyebrow="Membership"
            title="Choose Your Plan"
            description="Honest pricing. No hidden charges. Cancel anytime."
          />
        </div>
      </section>

      <section className="section">
        <PlansGrid />
      </section>

      <section className="bg-surface-alt">
        <div className="section">
          <Reveal>
            <h3 className="h-display text-2xl text-ink-900 mb-6 text-center">Plan Comparison</h3>
            <div className="overflow-x-auto rounded-[20px] border border-ink-300/30 shadow-card bg-surface-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-ink-300/30">
                    <th className="text-left p-4 font-semibold text-ink-900">Feature</th>
                    <th className="p-4 font-semibold text-ink-800">Starter</th>
                    <th className="p-4 font-semibold text-brand-cyan-dim">Pro</th>
                    <th className="p-4 font-semibold text-ink-800">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((r, i) => (
                    <tr key={r.feature} className={i % 2 ? "bg-surface-alt/50" : ""}>
                      <td className="p-4 text-ink-800">{r.feature}</td>
                      {[r.s, r.p, r.e].map((v, j) => (
                        <td key={j} className="p-4 text-center">
                          {v ? <Check className="inline text-brand-cyan-dim" size={18} /> : <X className="inline text-ink-300" size={18} />}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
