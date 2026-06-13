import { SectionHeader } from "@/components/sections/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Target, Eye, Award, Users, MapPin, IndianRupee } from "lucide-react";
import { site } from "@/lib/site";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  const proof = site.proof;

  return (
    <>
      {/* Page hero band */}
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            dark
            eyebrow="About Us"
            title="More Than a Gym — A Movement"
            description="Universal Gym was born in Umred with a simple belief: world-class fitness should not be a luxury. Today, we are the largest and most affordable training facility serving Nagpur & Umred."
          />
        </div>
      </section>

      <section className="section grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="card h-full">
            <Eye className="text-brand-cyan-dim mb-3" />
            <h3 className="h-display text-2xl text-ink-900 mb-2">Our Vision</h3>
            <p className="text-ink-500">To become the most trusted fitness destination in Vidarbha — empowering every individual to achieve their strongest, healthiest self.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card h-full">
            <Target className="text-brand-cyan-dim mb-3" />
            <h3 className="h-display text-2xl text-ink-900 mb-2">Our Mission</h3>
            <p className="text-ink-500">Make professional coaching, premium equipment, and a supportive community accessible to every person in Nagpur & Umred — regardless of budget or experience.</p>
          </div>
        </Reveal>
      </section>

      <section className="section pt-0">
        <SectionHeader eyebrow="Why Choose Us" title="Reasons Members Love Universal Gym" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Award, t: "Certified Coaching", d: `Head coach with ${proof.coachExperienceYears}+ years experience and multiple national-level certifications.` },
            { i: Users, t: "Ladies Batch", d: `Dedicated ${proof.ladiesBatchTime} batch for women in a safe, comfortable environment.` },
            { i: MapPin, t: `${proof.areaSqFt.toLocaleString("en-IN")}+ Sq Ft`, d: "A large training floor with separate zones for strength, cardio, and functional work." },
            { i: IndianRupee, t: "Best Pricing", d: `Starting at just ₹${proof.startingPrice}/month with no joining fee and clear plan options.` },
          ].map((w, i) => (
            <Reveal key={w.t} delay={i * 0.08}>
              <div className="card h-full group">
                <div className="grid h-12 w-12 place-items-center rounded-[12px] bg-brand-cyan/10 text-brand-cyan-dim mb-4 transition group-hover:bg-brand-cyan group-hover:text-brand-navy">
                  <w.i size={22} />
                </div>
                <h4 className="h-display text-lg text-ink-900 mb-1">{w.t}</h4>
                <p className="text-sm text-ink-500">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
