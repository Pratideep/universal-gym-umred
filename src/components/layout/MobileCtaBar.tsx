"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Zap } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCtaBar() {
  const pathname = usePathname();
  if (pathname === "/free-trial") return null;

  const tel = site.phone.replace(/\s/g, "");

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 lg:hidden border-t border-ink-300/30 bg-white/95 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2">
        <a
          href={`tel:${tel}`}
          className="flex items-center justify-center gap-2 py-4 text-ink-800 font-semibold border-r border-ink-300/30 active:bg-surface-alt min-h-[56px]"
        >
          <Phone size={18} /> Call Now
        </a>
        <Link
          href="/free-trial"
          className="flex items-center justify-center gap-2 py-4 bg-brand-cyan text-white font-bold min-h-[56px] transition active:scale-95"
        >
          <Zap size={18} /> Free Trial
        </Link>
      </div>
    </div>
  );
}
