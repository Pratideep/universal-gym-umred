"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews, reviewStats } from "@/data/reviews";

function Stars({ value }: { value: number }) {
  return (
    <div className="flex text-brand-cyan-dim" aria-label={`${value} out of 5`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < value ? "currentColor" : "transparent"}
          strokeWidth={i < value ? 0 : 1.5}
          className={i < value ? "" : "text-ink-300"}
        />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = scrollerRef.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <div>
      {/* Aggregate strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-navy text-brand-cyan font-bold text-2xl shrink-0">
            G
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="h-display text-4xl text-brand-navy tabular-nums">{reviewStats.average}</span>
              <Stars value={Math.round(reviewStats.average)} />
            </div>
            <div className="text-sm text-ink-500">
              Based on <strong className="text-ink-900">{reviewStats.total}</strong> {reviewStats.source} reviews
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            aria-label="Previous reviews"
            disabled={!canPrev}
            onClick={() => scrollBy(-1)}
            className="grid h-10 w-10 place-items-center rounded-full bg-surface-card border border-ink-300 text-ink-800 hover:bg-brand-cyan hover:text-brand-navy hover:border-brand-cyan disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next reviews"
            disabled={!canNext}
            onClick={() => scrollBy(1)}
            className="grid h-10 w-10 place-items-center rounded-full bg-surface-card border border-ink-300 text-ink-800 hover:bg-brand-cyan hover:text-brand-navy hover:border-brand-cyan disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 -mx-5 px-5"
      >
        {reviews.map((r, i) => (
          <motion.article
            key={r.author}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="snap-start shrink-0 w-[300px] md:w-[340px] card flex flex-col"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-navy text-brand-cyan font-bold text-sm">
                {r.initial}
              </div>
              <div>
                <div className="font-semibold text-sm text-ink-900">{r.author}</div>
                <div className="text-xs text-ink-500">{r.date}</div>
              </div>
            </div>
            <div className="mt-3">
              <Stars value={r.rating} />
            </div>
            <p className="mt-3 text-sm text-ink-500 leading-relaxed flex-1">{r.text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
