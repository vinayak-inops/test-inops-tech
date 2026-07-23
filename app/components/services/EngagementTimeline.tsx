"use client";

import { motion } from "framer-motion";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";
import type { ServiceConfig } from "@/app/lib/services";

const smoothEase = [0.33, 1, 0.68, 1] as const;

export function EngagementTimeline({ engagement }: { engagement: ServiceConfig["engagement"] }) {
  return (
    <section className="relative bg-[#f8fafc] px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <FlyInText as="p" direction="down" className={inopsUi.eyebrowBrand}>
              {engagement.eyebrow}
            </FlyInText>
            <FlyInText as="h2" direction="left" delay={0.06} className={`mt-3 ${inopsUi.sectionHeading}`}>
              {engagement.title}
            </FlyInText>
          </div>
          <FlyInText as="p" direction="up" delay={0.1} className={`max-w-md ${inopsUi.typeBody}`}>
            {engagement.description}
          </FlyInText>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-5">
          <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-slate-200 sm:block" aria-hidden />

          {engagement.steps.map((step, i) => (
            <motion.div
              key={step.step}
              className="relative flex flex-col items-center text-center sm:items-start sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={flyInViewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 * i }}
            >
              <div className="relative z-[1] flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--inops-blue)] bg-white text-xs font-bold text-[var(--inops-blue)]">
                {step.step}
              </div>
              <h3 className="mt-4 text-base font-semibold text-black">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
