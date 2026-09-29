import Link from "next/link";
import { waLink } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 saturate-[0.7]"
        style={{ backgroundImage: "url('/images/general/gym-floor-cardio-mural.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/85" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="h-display text-3xl md:text-4xl text-white">Come try it for a day</h3>
          <p className="mt-2 text-white/60 font-medium">One free trial session. No card, no sign-up — just walk in on Main Road, Umred.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/free-trial" className="btn-primary">
            Book Free Trial
          </Link>
          <a href={waLink()} target="_blank" rel="noopener" className="btn-outline-light">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
