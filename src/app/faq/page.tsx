import Link from "next/link";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faqs } from "@/data/faqs";
import { waLink } from "@/lib/site";

export const metadata = {
  title: "FAQ",
  description: "Answers to common questions about membership, timings, ladies batch, and more at Universal Gym, Umred.",
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            dark
            eyebrow="Help & Answers"
            title="Frequently Asked Questions"
            description="Everything you need to know before walking in. Still curious? WhatsApp us."
          />
        </div>
      </section>

      <section className="section">
        <FaqAccordion />

        <div className="mt-10 text-center">
          <p className="text-ink-500 mb-4">Didn&rsquo;t find your answer?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={waLink()} target="_blank" rel="noopener" className="btn-primary min-h-[48px]">
              Ask on WhatsApp
            </a>
            <Link href="/contact" className="btn-outline min-h-[48px]">
              Contact Page
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
