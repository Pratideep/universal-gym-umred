import { SectionHeader } from "@/components/sections/SectionHeader";
import { TransformationGrid } from "@/components/sections/TransformationGrid";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { transformations } from "@/data/testimonials";

export const metadata = { title: "Transformations" };

export default function TransformationsPage() {
  const featured = transformations[0];
  return (
    <>
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            dark
            eyebrow="Real Results"
            title="Transformations & Success Stories"
            description="Real members. Real effort. Real results. Drag the slider below to see one of our recent transformations."
          />
        </div>
      </section>

      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <Reveal>
            <BeforeAfterSlider before={featured.before} after={featured.after} alt={featured.name} />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="eyebrow mb-3">Featured Member</div>
            <h3 className="h-display text-4xl md:text-5xl text-ink-900">{featured.name}</h3>
            <div className="mt-2 flex items-center gap-3 text-sm">
              <span className="rounded-full bg-brand-cyan/15 text-brand-cyan-dim px-3 py-1 font-semibold">{featured.result}</span>
              <span className="text-ink-500">in {featured.duration}</span>
            </div>
            <p className="mt-5 text-lg text-ink-800 italic">&ldquo;{featured.quote}&rdquo;</p>
            <p className="mt-3 text-sm text-ink-500">
              Drag the white handle (or use arrow keys when focused) to compare.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="section">
          <SectionHeader eyebrow="More Stories" title="A Wall of Wins" />
          <div className="mt-10">
            <TransformationGrid />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
