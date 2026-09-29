import Link from "next/link";
import { LadiesBatch } from "@/components/sections/LadiesBatch";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Heart, Shield, Sparkles, Users } from "lucide-react";

export const metadata = { title: "Ladies Special Batch" };

const benefits = [
  { i: Shield, t: "Women-Only Hour", d: "From 4 PM to 5 PM, the entire gym floor is reserved for women members." },
  { i: Heart, t: "Beginner Friendly", d: "Personal guidance with every machine — no judgement, no awkwardness." },
  { i: Sparkles, t: "Personalised Plans", d: "Goal-based workout and diet plans for fat loss, toning or strength." },
  { i: Users, t: "Supportive Community", d: "Train alongside a sisterhood that lifts each other up — literally." },
];

export default function LadiesBatchPage() {
  return (
    <>
      <LadiesBatch
        isPageHero
        ctaHref="/free-trial"
        ctaText="Book Free Trial for Ladies Batch"
      />
      <section className="section">
        <SectionHeader eyebrow="Why Women Love It" title="Designed Around You" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.t} delay={i * 0.08}>
              <div className="card h-full group">
                <div className="grid h-12 w-12 place-items-center rounded-[12px] bg-brand-cyan/10 text-brand-cyan-dim mb-4 transition group-hover:bg-brand-cyan group-hover:text-brand-navy">
                  <b.i size={22} />
                </div>
                <h4 className="h-display text-lg text-ink-900">{b.t}</h4>
                <p className="text-sm text-ink-500 mt-1">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/free-trial" className="btn-primary">Book a Free Trial</Link>
        </div>
      </section>
    </>
  );
}
