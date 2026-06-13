"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/sections/SectionHeader";

const categories = ["All", "Interior", "Equipment", "Cardio", "Warm-Up", "Posing", "Transformations"] as const;
type Cat = typeof categories[number];

const photos: { src: string; cat: Exclude<Cat, "All"> }[] = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=70", cat: "Interior" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=70", cat: "Equipment" },
  { src: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=900&q=70", cat: "Cardio" },
  { src: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=900&q=70", cat: "Warm-Up" },
  { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=70", cat: "Posing" },
  { src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=900&q=70", cat: "Transformations" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=70", cat: "Interior" },
  { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=70", cat: "Equipment" },
  { src: "https://images.unsplash.com/photo-1583500178690-f7fd39b5cb04?w=900&q=70", cat: "Transformations" },
  { src: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=900&q=70", cat: "Cardio" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=70", cat: "Interior" },
  { src: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=900&q=70", cat: "Equipment" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const filtered = filter === "All" ? photos : photos.filter((p) => p.cat === filter);

  return (
    <>
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            dark
            eyebrow="Gallery"
            title="Step Inside Universal Gym"
            description="A visual tour of our facility — equipment, zones, members and moments."
          />
        </div>
      </section>

      <section className="section">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={
                "px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition border " +
                (filter === c
                  ? "bg-brand-cyan text-brand-navy font-bold border-brand-cyan shadow-lg shadow-brand-cyan/20"
                  : "bg-surface-card text-ink-800 border-ink-300 hover:border-brand-cyan/60")
              }
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                layout
                key={p.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative overflow-hidden rounded-[20px] border border-ink-300/20 group shadow-card"
              >
                <Image
                  src={p.src}
                  alt={p.cat}
                  width={900}
                  height={i % 3 === 0 ? 1200 : i % 3 === 1 ? 700 : 900}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-700"
                  unoptimized
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-navy/90 to-transparent p-4">
                  <span className="text-xs uppercase tracking-widest text-brand-cyan">{p.cat}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
