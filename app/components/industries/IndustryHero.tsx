"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FlyInText } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";
import type { IndustryConfig } from "@/app/lib/industries";

const smoothEase = [0.33, 1, 0.68, 1] as const;

export function IndustryHero({
  hero,
  breadcrumb,
  bgImage,
}: {
  hero: IndustryConfig["hero"];
  breadcrumb: string;
  bgImage: string;
}) {
  return (
    <section
      id="home-hero"
      className="hero-tight relative overflow-hidden bg-[var(--inops-navy)] px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40"
    >
      <img src={bgImage} alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(57,189,232,0.22),transparent_32%),radial-gradient(circle_at_86%_10%,rgba(29,95,191,0.28),transparent_30%),linear-gradient(180deg,#0f2f57_0%,#0b2444_60%,#0f2f57_100%)]"
        style={{ mixBlendMode: "multiply", opacity: 0.9 }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 [background:linear-gradient(90deg,rgba(6,18,36,0.92)_0%,rgba(6,18,36,0.75)_38%,rgba(6,18,36,0.35)_70%,rgba(6,18,36,0.15)_100%)]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
        {/* Left: copy */}
        <div>
          <FlyInText
            as="p"
            direction="down"
            trigger="mount"
            className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7dd3fc]"
          >
            {breadcrumb}
          </FlyInText>

          <div className="mt-8 max-w-2xl">
            <FlyInText as="h1" direction="left" delay={0.06} trigger="mount" className="text-white">
              {hero.title} <span className="text-[#7dd3fc]">{hero.highlight}</span>
            </FlyInText>
            <FlyInText
              as="p"
              direction="up"
              delay={0.14}
              trigger="mount"
              className="mt-6 max-w-xl text-base leading-8 text-blue-50/90"
            >
              {hero.description}
            </FlyInText>

            <FlyInText as="div" direction="up" delay={0.2} trigger="mount" className="mt-8 flex flex-wrap gap-4">
              <Link href={hero.primaryCta.href} className={inopsUi.btnOnDarkPrimary}>
                {hero.primaryCta.label}
              </Link>
              <Link href={hero.secondaryCta.href} className={inopsUi.btnGhostDark}>
                {hero.secondaryCta.label}
              </Link>
            </FlyInText>
          </div>
        </div>

        {/* Right: live status panel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: smoothEase }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-8">
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_60%)]"
              aria-hidden
            />

            <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Live Governance Feed
                </span>
              </div>
              <span className="font-mono text-[11px] text-blue-100/50">RegX</span>
            </div>

            <div className="relative mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {hero.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.08, ease: smoothEase }}
                >
                  <p className="text-xs uppercase tracking-wide text-blue-100/70">{stat.label}</p>
                  <p className="font-mono text-xl font-bold text-white sm:text-2xl">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-[11px] text-blue-100/50">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 flex-shrink-0 text-blue-100/50" fill="none" aria-hidden>
                <path
                  d="M8 1.5 2.5 4v4c0 3.5 2.3 5.9 5.5 6.5 3.2-.6 5.5-3 5.5-6.5V4L8 1.5Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path d="M5.7 8.1 7.3 9.7 10.4 6.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Synced across every registered site, updated in real time.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}