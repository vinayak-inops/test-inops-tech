"use client";

import { motion } from "framer-motion";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";
import type { ServiceConfig } from "@/app/lib/services";
import { Icon } from "./Icons";

const smoothEase = [0.33, 1, 0.68, 1] as const;

export function CapabilitiesGrid({ capabilities }: { capabilities: ServiceConfig["capabilities"] }) {
  return (
    <section className="relative bg-white px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <FlyInText as="p" direction="down" className={inopsUi.eyebrowBrand}>
              {capabilities.eyebrow}
            </FlyInText>
            <FlyInText as="h2" direction="left" delay={0.06} className={`mt-3 ${inopsUi.sectionHeading}`}>
              {capabilities.title}
            </FlyInText>
          </div>
          <FlyInText as="p" direction="up" delay={0.1} className={`max-w-md ${inopsUi.typeBody}`}>
            {capabilities.description}
          </FlyInText>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <motion.article
            className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-[#2f8fd6] to-[#1a5a8a] p-7 text-white"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={flyInViewport}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"
              aria-hidden
            />
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                <Icon title={capabilities.featuredTitle} className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-white">{capabilities.featuredTitle}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-blue-50/85">{capabilities.featuredTag}</p>
            </div>
            <span className="mt-8 inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Core Capability
            </span>
          </motion.article>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {capabilities.items.map((item, i) => (
              <motion.article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={flyInViewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 * i }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <Icon title={item.title} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-black">{item.title}</h3>
                <p className={`mt-2 ${inopsUi.typeSmall}`}>{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}