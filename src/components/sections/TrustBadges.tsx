import { Star, Award, Maximize2, Calendar, Heart, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

export function TrustBadges() {
  const proof = site.proof;
  const badges = [
    { icon: Star, label: `${proof.googleRating} Google Rating`, sub: `${proof.reviewCount}+ reviews` },
    { icon: Award, label: "Certified Coach", sub: `${proof.coachExperienceYears}+ years exp.` },
    { icon: Maximize2, label: `${proof.areaSqFt.toLocaleString("en-IN")} Sq Ft`, sub: "Spacious training floor" },
    { icon: Calendar, label: "Mon-Sat Timings", sub: "Morning and evening batches" },
    { icon: Heart, label: "Ladies Batch", sub: proof.ladiesBatchTime },
    { icon: ShieldCheck, label: "Sanitised Daily", sub: "Hygiene first" },
  ];

  return (
    <section id="trust" className="bg-surface-alt border-y border-ink-300/30">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-8">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6">
          {badges.map((b) => (
            <li key={b.label} className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] bg-brand-cyan/10 text-brand-cyan-dim">
                <b.icon size={20} />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold leading-tight text-ink-900">{b.label}</div>
                <div className="text-[11px] text-ink-500 truncate">{b.sub}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
