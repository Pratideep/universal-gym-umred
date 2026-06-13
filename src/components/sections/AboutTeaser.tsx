import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "./SectionHeader";
import { Trophy, Heart, Users, Sparkles } from "lucide-react";

const why = [
  { icon: Trophy, title: "A coach on the floor", text: "Our head coach has 10+ years of experience and actually corrects your form — you're not left to figure it out from YouTube." },
  { icon: Sparkles, title: "Kit that's looked after", text: "Free weights, machines and a full cardio row for every muscle group, wiped down and serviced so nothing's out of order when you turn up." },
  { icon: Users, title: "A plan for your body", text: "Training and diet built around your goal, your schedule and what you'll actually stick to — not a generic printout." },
  { icon: Heart, title: "Diet help included", text: "Pro and Elite memberships come with a real diet consultation, not an upsell at the desk." },
];

export function AboutTeaser() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Why people stay"
        title="A serious gym that isn't intimidating"
        description="Universal Gym is where Umred's first-timers and its strongest lifters train under the same roof. Big enough to have everything, small enough that the coach knows your name."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {why.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.08}>
            <div className="card h-full group">
              <div className="grid h-14 w-14 place-items-center rounded-[14px] bg-brand-cyan/10 text-brand-cyan-dim mb-5 transition group-hover:bg-brand-cyan group-hover:text-brand-navy">
                <w.icon size={24} strokeWidth={1.75} />
              </div>
              <h3 className="h-display text-xl text-ink-900 mb-2">{w.title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{w.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/about" className="btn-outline">Read Our Story</Link>
      </div>
    </section>
  );
}
