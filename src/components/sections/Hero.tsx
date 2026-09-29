"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Trophy, ChevronDown, Clock, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { Counter } from "@/components/motion/Counter";

const POSTER = "/images/general/gym-floor-high-ceiling-overview.jpeg";

export function Hero() {
  const proof = site.proof;

  return (
    <section className="relative min-h-[90vh] flex items-start lg:items-center pt-28 pb-16 lg:py-0 overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 -z-0">
        {/* Authentic Universal Gym Umred facility backdrop */}
        <div
          className="absolute inset-0 bg-cover bg-center saturate-[0.65] contrast-[1.05]"
          style={{ backgroundImage: `url('${POSTER}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/92 to-brand-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10 w-full grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-cyan border-l-2 border-brand-cyan pl-3 mb-6">
            <MapPin size={13} /> Main Road, Umred
          </div>

          <h1 className="h-display max-w-4xl text-5xl sm:text-7xl md:text-[5.25rem] leading-[0.92] text-white">
            Fitness for everyone.
            <br />
            <span className="text-brand-cyan">Starting at ₹{proof.startingPrice}.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
            We&apos;re not here to create an exclusive gym for a few, we&apos;re here
            to help more people discover the benefits of fitness. Our mission is to
            make quality training affordable, welcoming, and accessible to every
            student, worker, parent, and fitness enthusiast in Umred.
          </p>

          <p className="mt-4 text-base md:text-lg text-white/72 max-w-2xl">
            Train in a {proof.areaSqFt.toLocaleString("en-IN")} sq ft facility with{" "}
            {proof.machines}+ machines, supportive coaches, and memberships designed
            to fit real schedules and real budgets.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/free-trial" className="btn-primary min-h-[52px] text-base">
              Book Free Trial <ArrowRight size={18} />
            </Link>
            <Link href="/membership" className="btn-outline-light min-h-[52px] text-base">
              See Plans
            </Link>
          </div>

          <p className="mt-4 text-sm text-white/65">
            No joining fee · Beginner friendly · WhatsApp confirmation after booking
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/75">
            <div className="flex items-center gap-2">
              <div
                className="flex text-brand-cyan"
                aria-label={`${proof.googleRating} out of 5 stars`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="font-semibold text-white">{proof.googleRating}</span>
              <span className="text-white/50">from {proof.reviewCount}+ Google reviews</span>
            </div>
            <span className="hidden sm:block h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <Users size={16} className="text-brand-cyan" />
              <span>
                <strong className="text-white">{proof.activeMembers}+</strong> active members
              </span>
            </div>
            <span className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Trophy size={16} className="text-brand-cyan" />
              <span>
                <strong className="text-white">{proof.coachExperienceYears}+</strong> years coaching
              </span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: proof.areaSqFt, suffix: "+", l: "Sq Ft Space" },
              { n: proof.activeMembers, suffix: "+", l: "Active Members" },
              { n: proof.machines, suffix: "+", l: "Machines" },
            ].map((s) => (
              <div key={s.l}>
                <div className="h-display text-3xl md:text-4xl text-brand-cyan">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
                <div className="text-xs uppercase tracking-wider text-white/50">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 lg:hidden">
            <HeroInfoPanel />
          </div>
        </motion.div>

        {/* Real-info panel (replaces the fabricated "Next Class · 4 spots left" widget) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block lg:col-span-5"
        >
          <HeroInfoPanel />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#trust"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/45 hover:text-brand-cyan transition z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
}

function HeroInfoPanel() {
  const proof = site.proof;

  return (
    <div className="glass p-7">
      <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-white/45">
            Membership from
          </div>
          <div className="h-display text-5xl text-white leading-none mt-1">
            ₹{proof.startingPrice}
            <span className="text-xl text-white/50">/mo</span>
          </div>
        </div>
        {proof.noJoiningFee && (
          <div className="text-right text-xs text-brand-cyan font-semibold uppercase tracking-wider">
            No joining fee
          </div>
        )}
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/45">
          <Clock size={13} className="text-brand-cyan" /> Timings
        </div>
        {site.hours.map((h) => (
          <div key={h.day} className="flex items-baseline justify-between gap-4 text-sm">
            <span className="text-white/70">{h.day}</span>
            <span className="text-right text-white font-medium tabular-nums">{h.time}</span>
          </div>
        ))}
      </div>

      <Link href="/free-trial" className="btn-primary w-full mt-7 text-sm">
        Walk In For Free Trial <ArrowRight size={16} />
      </Link>
    </div>
  );
}
