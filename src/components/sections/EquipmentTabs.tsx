"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, MoveRight } from "lucide-react";
import type { EquipmentCategory } from "@/lib/equipment";
import { Lightbox } from "./Lightbox";

export function EquipmentTabs({ data }: { data: EquipmentCategory[] }) {
  const [active, setActive] = useState(data[0]?.slug ?? "general");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const current = data.find((d) => d.slug === active) ?? data[0];

  const items = current.items.map((i) => ({
    src: i.src,
    name: i.name,
    caption: i.subtitle ? `${current.label} • ${i.subtitle}` : current.label,
  }));

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar">
        {data.map((c) => {
          const isActive = c.slug === active;
          return (
            <button
              key={c.slug}
              onClick={() => setActive(c.slug)}
              aria-pressed={isActive}
              className={
                "px-5 min-h-[44px] rounded-full text-sm uppercase tracking-wider font-semibold whitespace-nowrap transition border " +
                (isActive
                  ? "bg-brand-cyan text-brand-navy border-brand-cyan shadow-lg shadow-brand-cyan/20"
                  : "bg-surface-card text-ink-800 border-ink-300 hover:border-brand-cyan/60")
              }
            >
              {c.label}
              <span className="ml-2 text-xs opacity-60">{c.items.length}</span>
            </button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-6 mb-3 sm:hidden"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-800 shadow-card">
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center text-brand-cyan-dim"
          >
            <MoveRight size={14} />
          </motion.span>
          <span>Swipe right to see more machines</span>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-8 grid grid-flow-col auto-cols-[85vw] gap-5 overflow-x-auto pb-3 no-scrollbar snap-x snap-mandatory sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
        >
          {current.items.map((item, i) => (
            <motion.button
              key={item.src + i}
              type="button"
              onClick={() => setLightboxIdx(i)}
              aria-label={`View ${item.name}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group relative block overflow-hidden rounded-[20px] bg-brand-navy text-left aspect-[4/3] shadow-card transition-shadow hover:shadow-lift snap-start"
            >
              <Image
                src={item.src}
                alt={item.name}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized={item.src.startsWith("http")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/25 to-transparent" />
              <div className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition">
                <Expand size={16} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="max-w-[85%]">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan">
                      {current.label}
                    </div>
                    <div className="mt-1 h-display text-xl leading-tight text-white">
                      {item.name}
                    </div>
                    {item.subtitle && (
                      <div className="mt-2 max-w-xs text-sm leading-snug text-white/72">
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                  {item.qty && item.qty > 1 && (
                    <span className="rounded-full bg-brand-cyan/20 text-brand-cyan px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      x{item.qty}
                    </span>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>

      <Lightbox
        items={items}
        index={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onPrev={() =>
          setLightboxIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length))
        }
        onNext={() =>
          setLightboxIdx((i) => (i === null ? null : (i + 1) % items.length))
        }
      />
    </div>
  );
}
