"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { transformations } from "@/data/testimonials";

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const total = transformations.length;
  const t = transformations[i];

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((x) => (x + 1) % total), 5500);
    return () => clearInterval(id);
  }, [total, reduce]);

  return (
    <div className="relative rounded-[20px] bg-brand-navy overflow-hidden shadow-lift">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-0 items-stretch min-h-[420px]"
        >
          <div className="relative grid grid-cols-2 gap-1 p-1">
            {[t.before, t.after].map((src, idx) => (
              <div key={idx} className="relative aspect-[3/4] overflow-hidden rounded-[16px]">
                <Image src={src} alt={idx === 0 ? "Before" : "After"} fill sizes="400px" className="object-cover" unoptimized />
                <div className="absolute top-3 left-3 rounded-full bg-brand-navy/85 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-white">
                  {idx === 0 ? "Before" : "After"}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <Quote className="text-brand-cyan mb-4" size={40} strokeWidth={1.5} />
            <p className="text-xl md:text-2xl text-white/95 leading-snug">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="h-display text-2xl text-white">{t.name}</div>
                <div className="text-xs uppercase tracking-wider text-white/50">{t.duration}</div>
              </div>
              <div className="text-right">
                <div className="text-brand-cyan font-bold text-lg">{t.result}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Outcome</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-2">
        <button
          aria-label="Previous testimonial"
          onClick={() => setI((x) => (x - 1 + total) % total)}
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-brand-cyan text-white hover:text-brand-navy border border-white/10 transition"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          aria-label="Next testimonial"
          onClick={() => setI((x) => (x + 1) % total)}
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-brand-cyan text-white hover:text-brand-navy border border-white/10 transition"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-6 flex gap-1.5">
        {transformations.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to testimonial ${idx + 1}`}
            onClick={() => setI(idx)}
            className={
              "h-1.5 rounded-full transition-all " +
              (idx === i ? "w-8 bg-brand-cyan" : "w-1.5 bg-white/30 hover:bg-white/60")
            }
          />
        ))}
      </div>
    </div>
  );
}
