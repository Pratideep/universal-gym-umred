import Link from "next/link";
import { Dumbbell, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { site, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-navy mt-0">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="grid h-10 w-10 place-items-center rounded-[12px] bg-brand-cyan text-brand-navy">
              <Dumbbell size={20} />
            </div>
            <div>
              <div className="h-display text-lg text-white">UNIVERSAL GYM</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">Umred</div>
            </div>
          </div>
          <p className="text-sm text-white/50">{site.tagline}</p>
        </div>

        <div>
          <h4 className="h-display text-base mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/about" className="hover:text-brand-cyan transition">About</Link></li>
            <li><Link href="/coach" className="hover:text-brand-cyan transition">Head Coach</Link></li>
            <li><Link href="/equipment" className="hover:text-brand-cyan transition">Equipment</Link></li>
            <li><Link href="/membership" className="hover:text-brand-cyan transition">Membership</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-cyan transition">Gallery</Link></li>
            <li><Link href="/faq" className="hover:text-brand-cyan transition">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="h-display text-base mb-4 text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex gap-2"><Phone size={16} className="text-brand-cyan mt-0.5" /> {site.phone}</li>
            <li className="flex gap-2"><Mail size={16} className="text-brand-cyan mt-0.5" /> {site.email}</li>
            <li className="flex gap-2"><MapPin size={16} className="text-brand-cyan mt-0.5" /> {site.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="h-display text-base mb-4 text-white">Follow</h4>
          <div className="flex gap-3">
            <a href="#" className="grid h-10 w-10 place-items-center rounded-[12px] bg-brand-slate border border-white/10 hover:border-brand-cyan hover:text-brand-cyan text-white/60 transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="grid h-10 w-10 place-items-center rounded-[12px] bg-brand-slate border border-white/10 hover:border-brand-cyan hover:text-brand-cyan text-white/60 transition">
              <Facebook size={18} />
            </a>
          </div>
          <a href={waLink()} target="_blank" rel="noopener" className="btn-primary mt-5 w-full text-sm">
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/30">
        &copy; {new Date().getFullYear()} Universal Gym, Umred. All rights reserved.
      </div>
    </footer>
  );
}
