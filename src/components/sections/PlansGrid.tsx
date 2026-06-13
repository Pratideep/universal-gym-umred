"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { plans, planPrice } from "@/data/plans";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "annual";
type Membership = "individual" | "couple";

export function PlansGrid() {
  const [billing, setBilling] = useState<Billing>("annual");
  const [membership, setMembership] = useState<Membership>("individual");

  return (
    <div>
      {/* Toggles */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
        <div
          role="tablist"
          aria-label="Membership type"
          className="relative inline-flex items-center rounded-full border border-ink-300 bg-surface-card p-1 shadow-card"
        >
          {(["individual", "couple"] as const).map((m) => {
            const active = membership === m;
            return (
              <button
                key={m}
                role="tab"
                aria-selected={active}
                onClick={() => setMembership(m)}
                className={cn(
                  "relative z-10 min-h-[40px] px-5 rounded-full text-sm font-semibold transition capitalize",
                  active ? "text-brand-navy" : "text-ink-500 hover:text-ink-800"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="membership-pill"
                    className="absolute inset-0 rounded-full bg-brand-cyan"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{m}</span>
              </button>
            );
          })}
        </div>

        <div
          role="tablist"
          aria-label="Billing period"
          className="relative inline-flex items-center rounded-full border border-ink-300 bg-surface-card p-1 shadow-card"
        >
          {(["monthly", "annual"] as const).map((b) => {
            const active = billing === b;
            return (
              <button
                key={b}
                role="tab"
                aria-selected={active}
                onClick={() => setBilling(b)}
                className={cn(
                  "relative z-10 min-h-[40px] px-5 rounded-full text-sm font-semibold transition",
                  active ? "text-brand-navy" : "text-ink-500 hover:text-ink-800"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="billing-pill"
                    className="absolute inset-0 rounded-full bg-brand-cyan"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {b === "monthly" ? "Monthly" : "Annual"}
                  {b === "annual" && (
                    <span className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                      active ? "bg-brand-navy text-brand-cyan" : "bg-brand-cyan/15 text-brand-cyan-dim"
                    )}>
                      Save up to 28%
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto items-start">
        {plans.map((p, i) => {
          const { display, unit, save, annualTotal } = planPrice(p, billing, membership);
          return (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className={cn(
                  "relative h-full flex flex-col rounded-[20px] p-7 transition",
                  p.highlight
                    ? "bg-brand-navy text-white md:scale-[1.04] shadow-lift border-t-4 border-brand-cyan"
                    : "card"
                )}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-cyan px-4 py-1 text-xs uppercase tracking-widest font-bold whitespace-nowrap text-brand-navy">
                    {p.badge}
                  </div>
                )}
                <h3 className={cn("h-display text-2xl", p.highlight ? "text-white" : "text-ink-900")}>
                  {p.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${p.name}-${billing}-${membership}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className={cn("h-display text-5xl tabular-nums", p.highlight ? "text-brand-cyan" : "text-brand-navy")}
                    >
                      {typeof display === "number" ? `₹${display.toLocaleString("en-IN")}` : display}
                    </motion.span>
                  </AnimatePresence>
                  <span className={p.highlight ? "text-white/60" : "text-ink-500"}>{unit}</span>
                </div>
                {billing === "annual" ? (
                  annualTotal > 0 ? (
                    <div className="mt-1 text-xs text-state-success font-semibold">
                      ₹{annualTotal.toLocaleString("en-IN")} billed yearly · Save ₹{save.toLocaleString("en-IN")}
                    </div>
                  ) : (
                    <div className="mt-1 text-xs text-ink-500">
                      Annual pricing to be announced
                    </div>
                  )
                ) : (
                  <div className={cn("mt-1 text-xs", p.highlight ? "text-white/50" : "text-ink-500")}>
                    Billed every month
                  </div>
                )}
                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className={cn("flex gap-2 text-sm", p.highlight ? "text-white/85" : "text-ink-800")}>
                      <Check size={18} className={cn("mt-0.5 shrink-0", p.highlight ? "text-brand-cyan" : "text-brand-cyan-dim")} /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/free-trial"
                  className={cn(
                    "mt-7 text-center min-h-[48px]",
                    p.highlight ? "btn-primary" : "btn-outline"
                  )}
                >
                  Join Now
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm text-ink-500">
        Cancel anytime · No registration fee · GST included
      </p>
    </div>
  );
}
