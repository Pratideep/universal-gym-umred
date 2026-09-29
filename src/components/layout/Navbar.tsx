"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Menu, X, Dumbbell, ChevronDown, Heart, Phone, MessageCircle } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/membership", label: "Membership" },
  { href: "/equipment", label: "Equipment" },
  { href: "/ladies-batch", label: "Ladies Batch", badge: "Women Only" },
  { href: "/transformations", label: "Results" },
];

const exploreLinks = [
  { href: "/gallery", label: "Facility Gallery", desc: "Authentic floor & machine photos" },
  { href: "/coach", label: "Head Coach", desc: "10+ years coaching & credentials" },
  { href: "/about", label: "About Us", desc: "Largest 5,000+ sq ft gym in Umred" },
  { href: "/faq", label: "FAQ", desc: "Answers on timings, trials & plans" },
  { href: "/contact", label: "Contact & Location", desc: "Main Road Umred address & map" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(e.target as Node)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_4px_rgba(15,23,42,.08)] border-b border-ink-300/30"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10 py-3.5">
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

        {/* Desktop Primary Nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {primaryLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "text-sm font-semibold transition relative py-1 inline-flex items-center gap-1.5 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:transition-all",
                  scrolled ? "after:bg-brand-cyan-dim" : "after:bg-brand-cyan",
                  scrolled
                    ? "text-ink-800 hover:text-brand-cyan-dim"
                    : "text-white/90 hover:text-white"
                )}
              >
                {l.label}
                {l.badge && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                    {l.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}

          {/* Explore Dropdown */}
          <li className="relative" ref={exploreRef}>
            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              onMouseEnter={() => setExploreOpen(true)}
              className={cn(
                "text-sm font-semibold transition inline-flex items-center gap-1 py-1",
                scrolled ? "text-ink-800 hover:text-brand-cyan-dim" : "text-white/90 hover:text-white"
              )}
              aria-expanded={exploreOpen}
            >
              Explore
              <ChevronDown size={15} className={cn("transition-transform duration-200", exploreOpen ? "rotate-180" : "")} />
            </button>

            {exploreOpen && (
              <div
                onMouseLeave={() => setExploreOpen(false)}
                className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-surface-card p-2 shadow-card border border-ink-300/40 backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-150"
              >
                {exploreLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={() => setExploreOpen(false)}
                    className="block rounded-xl px-3.5 py-2.5 transition hover:bg-surface-alt group"
                  >
                    <div className="text-sm font-semibold text-ink-900 group-hover:text-brand-cyan-dim transition-colors">
                      {sub.label}
                    </div>
                    <div className="text-xs text-ink-500 line-clamp-1">{sub.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Desktop CTA Action */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/free-trial" className="btn-primary animate-pulse-glow text-sm py-2.5 px-5">
            Book Free Trial
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            scrolled ? "text-brand-navy hover:bg-black/5" : "text-white hover:bg-white/10"
          )}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Enhanced Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-surface-card border-t border-ink-300/40 shadow-card max-h-[85vh] overflow-y-auto">
          <div className="px-5 py-5 space-y-4">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-ink-300/30">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-surface-alt text-ink-900 text-xs font-semibold"
              >
                <Phone size={14} className="text-brand-cyan-dim" /> Call Gym
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500/10 text-emerald-800 text-xs font-semibold"
              >
                <MessageCircle size={14} className="text-emerald-600" /> WhatsApp
              </a>
            </div>

            {/* Main Links */}
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-ink-500 mb-2">Main</div>
              <ul className="space-y-1">
                {primaryLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-2.5 px-3 rounded-xl text-ink-800 hover:bg-surface-alt font-medium text-sm"
                    >
                      <span>{l.label}</span>
                      {l.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-cyan/15 text-brand-cyan-dim">
                          {l.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore Section */}
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-ink-500 mb-2">Explore Facility</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {exploreLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 px-3 rounded-xl text-ink-800 hover:bg-surface-alt text-sm font-medium"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Link
                href="/free-trial"
                onClick={() => setOpen(false)}
                className="btn-primary w-full text-center py-3 text-sm font-bold shadow-md"
              >
                Book Free Trial Session
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
