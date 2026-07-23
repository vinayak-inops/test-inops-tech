"use client";

import { motion } from "framer-motion";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";
import { industries } from "@/app/lib/services";

const smoothEase = [0.33, 1, 0.68, 1] as const;

export function IndustriesStrip() {
  return (
    <section className="relative bg-white px-4 pb-20 sm:px-6 sm:pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <FlyInText as="p" direction="down" className={inopsUi.eyebrowBrand}>
              Industries
            </FlyInText>
            <FlyInText as="h2" direction="left" delay={0.06} className={`mt-3 max-w-lg ${inopsUi.sectionHeading}`}>
              Built for high-volume industrial operations
            </FlyInText>
          </div>
          <FlyInText as="p" direction="up" delay={0.1} className={`max-w-sm sm:text-right ${inopsUi.typeBody}`}>
            Deployed across manufacturing, automotive, electronics, logistics and multi-tenant industrial environments.
          </FlyInText>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry, i) => {
            const isLowered = i % 2 === 1;
            return (
              <motion.div
                key={industry.name}
                className={`group relative flex min-h-[13rem] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d6fa8] via-[#155787] to-[#0a2e46] p-5 text-white shadow-lg shadow-slate-900/10 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-900/25 ${
                  isLowered ? "lg:mt-10" : ""
                }`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={flyInViewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 * i }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
                  aria-hidden
                />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-white">{industry.name}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-blue-50/80">{industry.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}