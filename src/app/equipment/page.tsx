import { SectionHeader } from "@/components/sections/SectionHeader";
import { EquipmentTabs } from "@/components/sections/EquipmentTabs";
import { Reveal } from "@/components/motion/Reveal";
import { getEquipment } from "@/lib/equipment";
import Image from "next/image";
import { HeartPulse, Wind } from "lucide-react";

export const metadata = { title: "Equipment" };

const cardioImages = [
  "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=800&q=70",
  "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&q=70",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=70",
];
const warmupImages = [
  "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&q=70",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=70",
];
const posingImages = [
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=70",
  "https://images.unsplash.com/photo-1583500178690-f7fd39b5cb04?w=800&q=70",
];

function ImageStrip({ images }: { images: string[] }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((src, i) => (
        <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-ink-300/20 shadow-card">
          <Image src={src} alt="" fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover hover:scale-105 transition duration-700" unoptimized />
        </div>
      ))}
    </div>
  );
}

export default function EquipmentPage() {
  const data = getEquipment();
  return (
    <>
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            dark
            eyebrow="Equipment Showcase"
            title="Every Machine. Every Muscle. Every Goal."
            description="Browse our complete equipment line-up, organised by muscle group. New machines added regularly."
          />
        </div>
      </section>

      <section className="section">
        <EquipmentTabs data={data} />
      </section>

      <section id="cardio" className="bg-surface-alt">
        <div className="section">
          <Reveal>
            <div className="flex items-center gap-3 text-brand-cyan-dim mb-2">
              <HeartPulse />
              <span className="eyebrow">Cardio Zone</span>
            </div>
            <h2 className="h-display text-3xl md:text-4xl text-ink-900">Cardio That Goes the Distance</h2>
            <p className="mt-3 text-ink-500 max-w-2xl">Treadmills, ellipticals, spin bikes, rowers, stair climbers — a dedicated cardio floor with everything you need for fat loss and endurance.</p>
          </Reveal>
          <ImageStrip images={cardioImages} />
        </div>
      </section>

      <section id="warmup" className="section">
        <Reveal>
          <div className="flex items-center gap-3 text-brand-cyan-dim mb-2">
            <Wind />
            <span className="eyebrow">Warm-Up Area</span>
          </div>
          <h2 className="h-display text-3xl md:text-4xl text-ink-900">Mobility & Stretching Zone</h2>
          <p className="mt-3 text-ink-500 max-w-2xl">A dedicated open space with mats, foam rollers, resistance bands and mobility tools to prep your body — and recover right.</p>
        </Reveal>
        <ImageStrip images={warmupImages} />
      </section>

      <section id="posing" className="bg-surface-alt">
        <div className="section">
          <Reveal>
            <span className="eyebrow mb-2 block">Posing Room</span>
            <h2 className="h-display text-3xl md:text-4xl text-ink-900">Competition-Ready Posing Room</h2>
            <p className="mt-3 text-ink-500 max-w-2xl">Full-length mirrors, professional stage lighting and a private space to perfect your posing — built for bodybuilders and physique athletes.</p>
          </Reveal>
          <ImageStrip images={posingImages} />
        </div>
      </section>
    </>
  );
}
