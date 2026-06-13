import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { EquipmentTabs } from "@/components/sections/EquipmentTabs";
import { LadiesBatch } from "@/components/sections/LadiesBatch";
import { PlansGrid } from "@/components/sections/PlansGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { getEquipment } from "@/lib/equipment";

const GoogleReviews = dynamic(() =>
  import("@/components/sections/GoogleReviews").then((m) => m.GoogleReviews)
);
const TestimonialCarousel = dynamic(() =>
  import("@/components/sections/TestimonialCarousel").then((m) => m.TestimonialCarousel)
);
const TransformationGrid = dynamic(() =>
  import("@/components/sections/TransformationGrid").then((m) => m.TransformationGrid)
);
const FaqAccordion = dynamic(() =>
  import("@/components/sections/FaqAccordion").then((m) => m.FaqAccordion)
);

export default function Home() {
  const equipment = getEquipment();

  return (
    <>
      <Hero />
      <TrustBadges />
      <AboutTeaser />

      {/* Equipment — alt background */}
      <section className="bg-surface-alt">
        <div className="section">
          <SectionHeader
            eyebrow="The floor"
            title="Every muscle group, covered"
            description="Free weights, plate-loaded machines, cable stations and a full cardio row — laid out so you're never waiting on a rack. Organised below by muscle group."
          />
          <div className="mt-10">
            <EquipmentTabs data={equipment} />
          </div>
        </div>
      </section>

      <LadiesBatch />

      {/* Membership — left-aligned header to break the centred rhythm */}
      <section className="section">
        <SectionHeader
          eyebrow="Membership"
          title="Three plans. No joining fee."
          description="Pay monthly or save with annual. What you see is what you pay — no registration charge, no locker deposit, no surprises."
        />
        <div className="mt-12">
          <PlansGrid />
        </div>
      </section>

      {/* Reviews & Transformations — alt background */}
      <section className="bg-surface-alt">
        <div className="section">
          <SectionHeader
            eyebrow="Loved by locals"
            title="What members say on Google"
            description="Unedited reviews from people who actually train here — from Umred and across Nagpur."
          />
          <div className="mt-10">
            <GoogleReviews />
          </div>

          <div className="mt-20">
            <SectionHeader
              eyebrow="Member stories"
              title="Months of work, not weeks"
            />
            <div className="mt-8">
              <TestimonialCarousel />
            </div>
            <div className="mt-12">
              <TransformationGrid />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <SectionHeader
          center
          eyebrow="Before you join"
          title="Questions we get asked"
        />
        <div className="mt-10 max-w-3xl mx-auto">
          <FaqAccordion />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
