"use client";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { transformations } from "@/data/testimonials";

export function TransformationGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {transformations.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.1}>
          <div className="card group">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[t.before, t.after].map((src, idx) => (
                <div key={idx} className="relative aspect-[3/4] overflow-hidden rounded-[14px]">
                  <Image
                    src={src}
                    alt={idx === 0 ? "Before" : "After"}
                    fill
                    sizes="200px"
                    className="object-cover group-hover:scale-105 transition duration-700"
                    unoptimized
                  />
                  <div className="absolute top-2 left-2 rounded-full bg-brand-navy/80 backdrop-blur-sm px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-bold text-white">
                    {idx === 0 ? "Before" : "After"}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="h-display text-lg text-ink-900">{t.name}</div>
                <div className="text-xs text-ink-500">{t.duration}</div>
              </div>
              <div className="text-brand-cyan-dim font-semibold text-sm">{t.result}</div>
            </div>
            <p className="mt-3 text-sm text-ink-500 italic">&ldquo;{t.quote}&rdquo;</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
