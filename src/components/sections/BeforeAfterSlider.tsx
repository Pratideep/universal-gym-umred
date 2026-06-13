"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

export function BeforeAfterSlider({
  before,
  after,
  alt = "Transformation",
}: {
  before: string;
  after: string;
  alt?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClient = useCallback((clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent | TouchEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      updateFromClient(x);
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging, updateFromClient]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
  };

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-[20px] border border-ink-300/30 bg-surface-alt select-none cursor-ew-resize shadow-card"
      onMouseDown={(e) => { setDragging(true); updateFromClient(e.clientX); }}
      onTouchStart={(e) => { setDragging(true); updateFromClient(e.touches[0].clientX); }}
    >
      <Image src={after} alt={`${alt} — after`} fill sizes="(min-width:768px) 600px, 100vw" className="object-cover" unoptimized />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={`${alt} — before`} fill sizes="(min-width:768px) 600px, 100vw" className="object-cover" unoptimized />
      </div>

      <div className="absolute top-3 left-3 rounded-full bg-brand-navy/85 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Before</div>
      <div className="absolute top-3 right-3 rounded-full bg-brand-cyan px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-navy">After</div>

      <div
        role="slider"
        tabIndex={0}
        aria-label="Drag to compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
        className="absolute top-0 bottom-0 -translate-x-1/2 outline-none"
        style={{ left: `${pos}%` }}
      >
        <div className="h-full w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white text-brand-navy shadow-xl ring-4 ring-brand-cyan/30">
          <ChevronsLeftRight size={18} />
        </div>
      </div>
    </div>
  );
}
