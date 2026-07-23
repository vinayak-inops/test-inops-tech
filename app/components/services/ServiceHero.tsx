"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FlyInText } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";
import type { ServiceConfig } from "@/app/lib/services";

const smoothEase = [0.33, 1, 0.68, 1] as const;

export function ServiceHero({ hero, breadcrumb }: { hero: ServiceConfig["hero"]; breadcrumb: string }) {
  return (
    <section
      id="home-hero"
      className="hero-tight relative overflow-hidden bg-[var(--inops-navy)] px-8 pb-20 pt-32 sm:px-6 sm:pt-20 lg:px-12 lg:pr-16 lg:pb-28 lg:pt-30"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(57,189,232,0.22),transparent_32%),radial-gradient(circle_at_86%_10%,rgba(29,95,191,0.28),transparent_30%),linear-gradient(180deg,#0f2f57_0%,#0b2444_60%,#0f2f57_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-7xl">
        <FlyInText as="p" direction="down" trigger="mount" className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7dd3fc]">
          {breadcrumb}
        </FlyInText>

        <div className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          <div className="lg:flex-1">
            <FlyInText as="h1" direction="left" delay={0.06} trigger="mount" className="max-w-2xl text-white">
              {hero.title}
            </FlyInText>
            <FlyInText as="p" direction="up" delay={0.14} trigger="mount" className="mt-6 max-w-xl text-base leading-8 text-blue-50/90">
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

            <FlyInText as="div" direction="up" delay={0.26} trigger="mount" className="mt-8 flex flex-wrap gap-2.5">
              {hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-blue-100/80"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#39bde8]" aria-hidden />
                  {tag}
                </span>
              ))}
            </FlyInText>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-sm flex-shrink-0 lg:mx-0 lg:w-[380px] xl:w-[420px]"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: smoothEase }}
          >
            <div className="rounded-[1.5rem] border border-white/15 bg-white/[0.06] p-5 pb-9 pr-16 shadow-[0_30px_80px_-30px_rgba(6,20,40,0.85)] backdrop-blur-md sm:pr-20">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/70">Live Overview</p>
              <p className="mt-2 text-sm font-semibold text-white">{hero.previewCardTitle}</p>
              <div className="mt-4 flex h-20 items-end gap-1.5" aria-hidden>
                {[40, 65, 50, 85, 60, 95, 70].map((h, i) => (
                  <span key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#39bde8]/50 to-[#39bde8]" style={{ height: `${h}%` }} />
                ))}
              </div>
              <ul className="mt-5 space-y-2.5">
                {hero.previewRows.map((row) => (
                  <li key={row.label} className="flex items-center gap-2 text-xs text-blue-50/85">
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[#7dd3fc]" aria-hidden />
                    <span className="truncate">{row.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              className="absolute right-0 top-6 z-10 translate-x-1/3 rounded-xl border border-white/15 bg-[#061428]/90 px-3.5 py-2.5 shadow-lg backdrop-blur-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: smoothEase }}
            >
              <p className="whitespace-nowrap text-[10px] uppercase tracking-wide text-blue-100/60">{hero.floatingStatTopRight.label}</p>
              <p className="text-lg font-bold text-white">{hero.floatingStatTopRight.value}</p>
            </motion.div>

            <motion.div
              className="absolute bottom-20 right-0 z-10 translate-x-1/3 rounded-xl border border-white/15 bg-[#061428]/90 px-3.5 py-2.5 shadow-lg backdrop-blur-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58, ease: smoothEase }}
            >
              <p className="whitespace-nowrap text-[10px] uppercase tracking-wide text-blue-100/60">{hero.floatingStatBottomRight.label}</p>
              <p className="text-lg font-bold text-white">{hero.floatingStatBottomRight.value}</p>
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-6 z-10 translate-y-1/2 rounded-xl border border-white/15 bg-[#061428]/90 px-3.5 py-2.5 shadow-lg backdrop-blur-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.66, ease: smoothEase }}
            >
              <p className="whitespace-nowrap text-[10px] uppercase tracking-wide text-blue-100/60">{hero.floatingStatBottomLeft.label}</p>
              <p className="text-lg font-bold text-white">{hero.floatingStatBottomLeft.value}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}