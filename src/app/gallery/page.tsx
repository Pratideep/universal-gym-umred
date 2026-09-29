"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Lightbox } from "@/components/sections/Lightbox";

const categories = [
  "All",
  "General",
  "Interior",
  "Equipment",
  "Cardio",
  "Warm-Up",
  "Posing",
  "Transformations",
] as const;

type Cat = (typeof categories)[number];

type PhotoItem = {
  src: string;
  cat: Exclude<Cat, "All">;
  title: string;
  caption?: string;
  alt: string;
};

const photos: PhotoItem[] = [
  {
    src: "/images/general/gym-floor-cardio-mural.jpeg",
    cat: "General",
    title: "Cardio Zone & Gym Mural",
    caption: "Treadmills, ellipticals, and custom 'Don't Stop When It Hurts' mural",
    alt: "Universal Gym cardio zone with treadmills and motivational wall mural in Umred",
  },
  {
    src: "/images/general/gym-floor-plate-loaded-row.jpeg",
    cat: "General",
    title: "Plate-Loaded Machine Row",
    caption: "Jaguar Series plate-loaded chest, back, and shoulder stations",
    alt: "Universal Gym heavy plate loaded strength equipment and machines",
  },
  {
    src: "/images/general/gym-floor-free-weights-training.jpeg",
    cat: "General",
    title: "Free Weights & Dumbbells Area",
    caption: "Complete dumbbell rack with multi-angle incline and flat benches",
    alt: "Universal Gym free weights training area with dumbbell rack and mirrors",
  },
  {
    src: "/images/general/gym-floor-high-ceiling-overview.jpeg",
    cat: "General",
    title: "Facility Floor Overview",
    caption: "Spacious training floor with acoustic high ceiling and full mirror wall",
    alt: "Wide overview of Universal Gym spacious workout floor in Umred",
  },
  {
    src: "/images/general/gym-floor-spin-core-zone.jpeg",
    cat: "General",
    title: "Spin Bikes & Core Conditioning",
    caption: "Spinning bikes, stair climber, and abdominal crunch benches",
    alt: "Universal Gym spin bikes and core conditioning zone",
  },
  {
    src: "/images/general/gym-floor-lat-pulldown-squat.jpeg",
    cat: "General",
    title: "Lat Pulldown & Power Stations",
    caption: "Lat pulldown machine, seated cable row, and squat racks",
    alt: "Universal Gym lat pulldown and compound lifting stations",
  },
  {
    src: "/images/general/gym-floor-squat-legpress-station.jpeg",
    cat: "General",
    title: "Heavy 45° Leg Press & Squats",
    caption: "Heavy-duty 45-degree leg press and power squat setup",
    alt: "Universal Gym 45 degree leg press machine and squat area",
  },
  {
    src: "/images/general/gym-floor-cardio-machines.jpeg",
    cat: "General",
    title: "Main Cardio & Strength Lineup",
    caption: "Cross-trainers, treadmills, and selectorized equipment",
    alt: "Universal Gym cardio line with treadmills and selectorized machines",
  },
  {
    src: "/images/general/gym-floor-cardio-lineup.jpeg",
    cat: "General",
    title: "Cardio Row Perspective",
    caption: "Endurance floor with ellipticals, spin bikes, and running tracks",
    alt: "Universal Gym cardio row perspective view",
  },
  {
    src: "/images/general/gym-floor-dumbbells-leg-extension.jpeg",
    cat: "General",
    title: "Dumbbell Rack & Leg Extension",
    caption: "Heavy dumbbell rack, adjustable benches, and leg extension",
    alt: "Universal Gym dumbbell rack array and leg extension stations",
  },
  {
    src: "/images/general/gym-floor-entrance-view.jpeg",
    cat: "General",
    title: "Entrance Floor View",
    caption: "Perspective from entrance lounge into the main workout arena",
    alt: "Universal Gym floor perspective seen from entrance lounge",
  },
  {
    src: "/images/general/gym-reception-lounge.jpeg",
    cat: "General",
    title: "Reception & Member Lounge",
    caption: "Front desk, waiting lounge, and member check-in counter",
    alt: "Universal Gym front desk reception and member lounge in Umred",
  },
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=70",
    cat: "Interior",
    title: "Main Floor Lighting",
    caption: "Spacious training zones with specialized ambient lighting",
    alt: "Gym floor interior lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=70",
    cat: "Equipment",
    title: "Heavy Free Weights",
    caption: "Barbells, bumper plates, and strength racks",
    alt: "Heavy duty barbell plates and racks",
  },
  {
    src: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=900&q=70",
    cat: "Cardio",
    title: "Cardio Deck",
    caption: "High-performance treadmills for steady-state training",
    alt: "Cardio row treadmills",
  },
  {
    src: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=900&q=70",
    cat: "Warm-Up",
    title: "Mobility & Stretching",
    caption: "Dedicated floor space for mobility drills and cool-downs",
    alt: "Warm up and mobility floor area",
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=70",
    cat: "Posing",
    title: "Physique Practice",
    caption: "Targeted lighting mirrors for competition prep",
    alt: "Bodybuilder posing area with mirrors",
  },
  {
    src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=900&q=70",
    cat: "Transformations",
    title: "Member Dedication",
    caption: "Athletes pushing limits every single session",
    alt: "Athlete strength training",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=70",
    cat: "Interior",
    title: "Clean & Organized",
    caption: "Maintained daily to medical-grade hygiene standards",
    alt: "Clean gym facility interior",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=70",
    cat: "Equipment",
    title: "Olympic Lifting Barrels",
    caption: "Reinforced rubber-matted platforms for safe lifting",
    alt: "Olympic barbell lifting station",
  },
  {
    src: "https://images.unsplash.com/photo-1583500178690-f7fd39b5cb04?w=900&q=70",
    cat: "Transformations",
    title: "Coached Progress",
    caption: "Guided technique for sustainable strength gains",
    alt: "Coach guiding member in workout",
  },
  {
    src: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=900&q=70",
    cat: "Cardio",
    title: "Endurance Lineup",
    caption: "Ellipticals and bikes tuned for low-impact conditioning",
    alt: "Low-impact elliptical trainers",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=70",
    cat: "Interior",
    title: "Strength Arena",
    caption: "Open floor plan designed to eliminate wait times",
    alt: "Wide open strength gym interior",
  },
  {
    src: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=900&q=70",
    cat: "Equipment",
    title: "Cable & Pulley Stations",
    caption: "Multi-angle adjustable cables for constant tension movements",
    alt: "Multi functional cable pulley machine",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = filter === "All" ? photos : photos.filter((p) => p.cat === filter);

  const lightboxItems = filtered.map((p) => ({
    src: p.src,
    name: p.title,
    caption: p.caption ? `${p.cat} • ${p.caption}` : p.cat,
  }));

  const getCategoryCount = (c: Cat) => {
    if (c === "All") return photos.length;
    return photos.filter((p) => p.cat === c).length;
  };

  return (
    <>
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            dark
            eyebrow="Gallery"
            title="Step Inside Universal Gym"
            description="A visual tour of our facility — real floor photos, equipment rows, cardio zone, and training moments in Umred."
          />
        </div>
      </section>

      <section className="section">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => {
            const count = getCategoryCount(c);
            const isActive = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                aria-pressed={isActive}
                className={
                  "px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition border inline-flex items-center gap-1.5 " +
                  (isActive
                    ? "bg-brand-cyan text-brand-navy font-bold border-brand-cyan shadow-lg shadow-brand-cyan/20"
                    : "bg-surface-card text-ink-800 border-ink-300 hover:border-brand-cyan/60")
                }
              >
                <span>{c}</span>
                <span className="text-[10px] opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                layout
                key={p.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="break-inside-avoid relative overflow-hidden rounded-[20px] border border-ink-300/20 group shadow-card cursor-pointer bg-brand-navy"
                onClick={() => setLightboxIdx(i)}
                role="button"
                tabIndex={0}
                aria-label={`View photo: ${p.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIdx(i);
                  }
                }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={1280}
                  height={960}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-700"
                  unoptimized={p.src.startsWith("http")}
                  priority={i < 3}
                />

                {/* Hover Expand Icon */}
                <div className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-brand-navy/60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <Expand size={16} />
                </div>

                {/* Bottom Gradient Overlay & Information */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-navy via-brand-navy/75 to-transparent p-4 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan">
                    {p.cat}
                  </span>
                  <div className="text-white text-base font-semibold leading-snug mt-0.5 line-clamp-1">
                    {p.title}
                  </div>
                  {p.caption && (
                    <p className="text-white/70 text-xs leading-normal mt-0.5 line-clamp-1">
                      {p.caption}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Fullscreen Interactive Lightbox */}
      <Lightbox
        items={lightboxItems}
        index={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onPrev={() =>
          setLightboxIdx((i) =>
            i === null ? null : (i - 1 + lightboxItems.length) % lightboxItems.length
          )
        }
        onNext={() =>
          setLightboxIdx((i) =>
            i === null ? null : (i + 1) % lightboxItems.length
          )
        }
      />
    </>
  );
}

