import Link from "next/link";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { PlansGrid } from "@/components/sections/PlansGrid";
import { Reveal } from "@/components/motion/Reveal";
import { Check, X, ShieldCheck, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export const metadata = { title: "Membership Plans" };

const compare = [
  { feature: "Full gym floor & machines access", s: true, p: true },
  { feature: "50+ plate-loaded & pin-select machines", s: true, p: true },
  { feature: "Free weight dumbbells & barbell racks", s: true, p: true },
  { feature: "Secure locker facility included free", s: true, p: true },
  { feature: "Initial body assessment & machine induction", s: true, p: true },
  { feature: "Cardio lineup (treadmills, spin bikes, ellipticals)", s: true, p: true },
  { feature: "Posing room with stage lighting", s: false, p: true },
  { feature: "Mobility & stretching zone access", s: false, p: true },
  { feature: "Monthly workout & progress check-in", s: false, p: true },
  { feature: "Nutrition & diet guidance baseline", s: false, p: true },
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
            description="Honest pricing in Umred. No hidden charges, no registration fee, cancel anytime."
          />
        </div>
      </section>

      <section className="section">
        <PlansGrid />
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-surface-alt">
        <div className="section">
          <Reveal>
            <h3 className="h-display text-2xl text-ink-900 mb-2 text-center">Plan Comparison</h3>
            <p className="text-center text-sm text-ink-500 mb-8 max-w-xl mx-auto">
              Everything you need to train consistently. Upgrade or switch plans whenever your goals change.
            </p>
            <div className="overflow-x-auto rounded-[20px] border border-ink-300/30 shadow-card bg-surface-card max-w-3xl mx-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-ink-300/30">
                    <th className="text-left p-4 sm:p-5 font-semibold text-ink-900">Feature</th>
                    <th className="p-4 sm:p-5 font-semibold text-ink-800 text-center w-32">Starter<br/><span className="text-xs font-normal text-ink-500">₹700/mo</span></th>
                    <th className="p-4 sm:p-5 font-semibold text-brand-cyan-dim text-center w-32 bg-brand-cyan/5">Pro<br/><span className="text-xs font-normal text-brand-cyan-dim">₹1,200/mo</span></th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((r, i) => (
                    <tr key={r.feature} className={i % 2 ? "bg-surface-alt/40" : ""}>
                      <td className="p-4 sm:p-5 text-ink-800 font-medium">{r.feature}</td>
                      <td className="p-4 sm:p-5 text-center">
                        {r.s ? <Check className="inline text-brand-cyan-dim" size={18} /> : <X className="inline text-ink-300" size={18} />}
                      </td>
                      <td className="p-4 sm:p-5 text-center bg-brand-cyan/5">
                        {r.p ? <Check className="inline text-brand-cyan" size={18} /> : <X className="inline text-ink-300" size={18} />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Zero Hidden Fees & Personal Training Card */}
            <div className="mt-10 max-w-3xl mx-auto grid gap-4 sm:grid-cols-2">
              <div className="card flex items-start gap-3">
                <ShieldCheck className="text-brand-cyan-dim shrink-0 mt-0.5" size={24} />
                <div>
                  <h4 className="font-bold text-ink-900 text-sm">Zero Hidden Fees Guaranteed</h4>
                  <p className="text-xs text-ink-500 mt-1">
                    No locker deposit, no maintenance fees, no registration charges. What you see is what you pay.
                  </p>
                </div>
              </div>
              <div className="card flex items-start gap-3">
                <MessageCircle className="text-brand-cyan-dim shrink-0 mt-0.5" size={24} />
                <div>
                  <h4 className="font-bold text-ink-900 text-sm">Looking for 1-on-1 Personal Coaching?</h4>
                  <p className="text-xs text-ink-500 mt-1">
                    Specialized bodybuilding, fat loss, or contest prep packages available directly with our Head Coach.
                  </p>
                  <a
                    href={waLink("Hi Coach! I'm interested in personal coaching at Universal Gym.")}
                    target="_blank"
                    rel="noopener"
                    className="inline-block mt-2 text-xs font-bold text-brand-cyan-dim hover:underline"
                  >
                    Inquire on WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
