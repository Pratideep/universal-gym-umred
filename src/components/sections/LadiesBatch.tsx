import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Clock, Shield, Heart } from "lucide-react";

interface LadiesBatchProps {
  isPageHero?: boolean;
  ctaHref?: string;
  ctaText?: string;
}

export function LadiesBatch({
  isPageHero = false,
  ctaHref = "/ladies-batch",
  ctaText = "Reserve Your Slot",
}: LadiesBatchProps) {
  return (
    <section className={`relative overflow-hidden bg-brand-navy ${isPageHero ? "pt-28 pb-12" : ""}`}>
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/50" />

      <div className="section grid gap-10 lg:grid-cols-2 items-center">
        <Reveal>
          <div className="eyebrow inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 mb-5">
            <Heart size={14} /> Ladies Special
          </div>
          <h2 className="h-display text-4xl md:text-[3.25rem] text-white leading-tight">
            A <span className="text-gradient-cyan">women-only</span> hour, every evening
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl">
            From 4 to 5 PM the floor is reserved for women — same equipment, same coaching,
            no crowd. A comfortable place to start, whether it&apos;s your first week or your fiftieth.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 glass px-5 py-3">
              <Clock className="text-brand-cyan" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/50">Daily</div>
                <div className="h-display text-xl text-white">4:00 – 5:00 PM</div>
              </div>
            </div>
            <div className="flex items-center gap-3 glass px-5 py-3">
              <Shield className="text-brand-cyan" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/50">Privacy</div>
                <div className="h-display text-xl text-white">Women Only</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link href={ctaHref} className="btn-primary">
              {ctaText}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
