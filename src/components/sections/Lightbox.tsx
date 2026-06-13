"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxItem = { src: string; name: string; caption?: string };

export function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, onClose, onPrev, onNext]);

  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx > 50) onPrev();
    else if (dx < -50) onNext();
    startX.current = null;
  };

  const current = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-brand-navy/95 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            ref={closeRef}
            aria-label="Close"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X size={22} />
          </button>

          {items.length > 1 && (
            <>
              <button
                aria-label="Previous"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 hover:bg-brand-cyan text-white hover:text-brand-navy transition"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                aria-label="Next"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 hover:bg-brand-cyan text-white hover:text-brand-navy transition"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative w-[92vw] max-w-5xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.name}
              fill
              sizes="92vw"
              className="object-contain"
              unoptimized={current.src.startsWith("http")}
              priority
            />
          </motion.div>

          <div className="absolute bottom-6 left-0 right-0 text-center text-white">
            <div className="h-display text-xl">{current.name}</div>
            {current.caption && <div className="text-xs uppercase tracking-wider text-brand-cyan mt-1">{current.caption}</div>}
            <div className="text-xs text-white/40 mt-2">{(index ?? 0) + 1} / {items.length}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
