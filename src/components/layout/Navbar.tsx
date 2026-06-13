"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/coach", label: "Coach" },
  { href: "/equipment", label: "Equipment" },
  { href: "/ladies-batch", label: "Ladies Batch" },
  { href: "/transformations", label: "Results" },
  { href: "/membership", label: "Membership" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_3px_rgba(15,23,42,.08)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10 py-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="grid h-10 w-10 place-items-center rounded-[12px] bg-brand-navy text-brand-cyan shadow-lg group-hover:scale-105 transition">
            <Dumbbell size={22} strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className={cn(
              "h-display text-lg tracking-wider transition-colors",
              scrolled ? "text-brand-navy" : "text-white"
            )}>
              UNIVERSAL GYM
            </div>
            <div className={cn(
              "text-[10px] uppercase tracking-[0.25em] transition-colors",
              scrolled ? "text-ink-500" : "text-white/60"
            )}>
              Umred
            </div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "text-sm font-medium transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:transition-all",
                  scrolled ? "after:bg-brand-cyan-dim" : "after:bg-brand-cyan",
                  scrolled
                    ? "text-ink-800 hover:text-brand-cyan-dim"
                    : "text-white/85 hover:text-brand-cyan"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/free-trial" className="btn-primary animate-pulse-glow text-sm">
            Free Trial
          </Link>
        </div>

        <button
          aria-label="Menu"
          className={cn(
            "lg:hidden p-2 transition-colors",
            scrolled ? "text-brand-navy" : "text-white"
          )}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-ink-300/50">
          <ul className="flex flex-col px-5 py-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-ink-800 hover:text-brand-cyan-dim font-medium"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link href="/free-trial" onClick={() => setOpen(false)} className="btn-primary w-full">
                Free Trial
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
