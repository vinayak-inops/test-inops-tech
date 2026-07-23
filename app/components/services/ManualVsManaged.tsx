"use client";

import { motion } from "framer-motion";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";
import type { ServiceConfig } from "@/app/lib/services";

const smoothEase = [0.33, 1, 0.68, 1] as const;

function XIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowConnector() {
  return (
    <div className="relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--inops-blue)] text-white shadow-lg lg:h-12 lg:w-12">
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </div>
  );
}

export function ManualVsManaged({ manualVsManaged }: { manualVsManaged: ServiceConfig["manualVsManaged"] }) {
  const { eyebrow, title, description, data } = manualVsManaged;

  return (
    <section className="relative bg-[#f5f7fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <FlyInText as="p" direction="down" className={inopsUi.eyebrowBrand}>
              {eyebrow}
            </FlyInText>
            <FlyInText as="h2" direction="left" delay={0.06} className={`mt-3 ${inopsUi.sectionHeading}`}>
              {title}
            </FlyInText>
          </div>
          <FlyInText as="p" direction="up" delay={0.1} className={`max-w-md text-right ${inopsUi.typeBody}`}>
            {description}
          </FlyInText>
        </div>

        <div className="relative mt-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-9 lg:mr-6"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={flyInViewport}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">Traditional process</p>
            <h3 className="mt-3 text-xl font-bold text-black">{data.manualTitle}</h3>
            <ul className="mt-6">
              {data.manualItems.map((line, idx) => (
                <li
                  key={line}
                  className={`flex items-center gap-3 py-3.5 text-sm leading-6 text-slate-600 ${
                    idx !== data.manualItems.length - 1 ? "border-b border-slate-100" : ""
                  }`}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                    <XIcon />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="hidden justify-self-center lg:relative lg:z-[2] lg:flex lg:-mx-6">
            <ArrowConnector />
          </div>
          <div className="flex justify-center lg:hidden">
            <ArrowConnector />
          </div>

          <motion.div
            className="rounded-2xl bg-gradient-to-br from-[#1d5fbf] to-[#123f85] p-8 text-white shadow-[0_24px_60px_-24px_rgba(29,95,191,0.55)] sm:p-9 lg:ml-6"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={flyInViewport}
            transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">InOps platform</p>
            <h3 className="mt-3 text-xl font-bold text-white">{data.managedTitle}</h3>
            <ul className="mt-6">
              {data.managedItems.map((line, idx) => (
                <li
                  key={line}
                  className={`flex items-center gap-3 py-3.5 text-sm leading-6 text-blue-50/95 ${
                    idx !== data.managedItems.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                    <CheckIcon />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}