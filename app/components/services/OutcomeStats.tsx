"use client";

import { motion } from "framer-motion";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";
import type { ServiceConfig } from "@/app/lib/services";

const smoothEase = [0.33, 1, 0.68, 1] as const;

export function OutcomeStats({ outcomeStats }: { outcomeStats: ServiceConfig["outcomeStats"] }) {
  return (
    <section className="relative overflow-hidden bg-[var(--inops-blue)] px-4 py-14 sm:px-6 sm:py-16 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(255,255,255,0.1),transparent_28%)]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <FlyInText as="p" direction="down" className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
              {outcomeStats.eyebrow}
            </FlyInText>
            <FlyInText as="h2" direction="left" delay={0.06} className="mt-3 max-w-xl text-white">
              {outcomeStats.title}
            </FlyInText>
          </div>
          <FlyInText as="p" direction="up" delay={0.12} className={`max-w-sm sm:text-right ${inopsUi.typeOnDarkBody}`}>
            {outcomeStats.description}
          </FlyInText>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
          {outcomeStats.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`relative pl-5 ${i % 2 === 1 ? "border-l border-white/15" : ""} ${
                i > 0 ? "sm:border-l" : ""
              } border-white/15`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={flyInViewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 * i }}
            >
              <p className="flex items-center gap-2 font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7dd3fc]" aria-hidden />
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-blue-50/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}