import Image from "next/image";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { coach, certifications } from "@/data/coach";
import { Award, CheckCircle2 } from "lucide-react";

export const metadata = { title: "Head Coach" };

export default function CoachPage() {
  return (
    <>
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-white/10">
              <Image src={coach.photo} alt={coach.name} fill sizes="500px" className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-block rounded-full bg-brand-cyan px-4 py-1 text-xs uppercase tracking-widest font-bold text-brand-navy">
                  {coach.experience} Experience
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="eyebrow mb-3">Head Coach</div>
            <h1 className="h-display text-5xl md:text-6xl text-white">{coach.name}</h1>
            <p className="text-brand-cyan mt-1 font-semibold">{coach.title}</p>
            <p className="mt-5 text-white/70 text-lg">{coach.bio}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {coach.specializations.map((s) => (
                <span key={s} className="rounded-full border border-white/15 bg-brand-slate px-3 py-1 text-xs uppercase tracking-wider text-white/70">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Achievements" title="Recognition & Results" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {coach.achievements.map((a, i) => (
            <Reveal key={a} delay={i * 0.07}>
              <div className="flex items-start gap-3 card">
                <CheckCircle2 className="text-brand-cyan-dim shrink-0 mt-0.5" />
                <p className="text-ink-800">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="section">
          <SectionHeader
            eyebrow="Qualifications"
            title="Certifications & Credentials"
            description="Internationally and nationally recognised certifications backing every training session."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="card group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] mb-4">
                    <Image src={c.image} alt={c.title} fill sizes="300px" className="object-cover group-hover:scale-110 transition duration-700" unoptimized />
                  </div>
                  <Award className="text-brand-cyan-dim mb-2" size={20} />
                  <h4 className="h-display text-lg text-ink-900">{c.title}</h4>
                  <p className="text-xs text-ink-500 uppercase tracking-wider">{c.issuer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
