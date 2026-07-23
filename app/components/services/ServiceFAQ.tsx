"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";
import type { ServiceConfig } from "@/app/lib/services";

const smoothEase = [0.33, 1, 0.68, 1] as const;

function PlusIcon({ open }: { open: boolean }) {
  return (
    <motion.span
      animate={{ rotate: open ? 45 : 0 }}
      transition={{ duration: 0.2 }}
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-sky-500"
    >
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
      </svg>
    </motion.span>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function ServiceFAQ({ faq }: { faq: ServiceConfig["faq"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">
          {/* Left column: heading, description, gradient card */}
          <div>
            <FlyInText as="p" direction="down" className={inopsUi.eyebrowBrand}>
              {faq.eyebrow}
            </FlyInText>
            <FlyInText as="h2" direction="left" delay={0.06} className={`mt-3 ${inopsUi.sectionHeading}`}>
              {faq.title}
            </FlyInText>
            <FlyInText as="p" direction="up" delay={0.1} className={`mt-3 ${inopsUi.typeBody}`}>
              {faq.description}
            </FlyInText>

            <motion.div
              className="mt-8 rounded-2xl bg-gradient-to-br from-sky-500 via-sky-600 to-blue-800 p-7 text-white shadow-lg shadow-sky-900/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={flyInViewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h3 className="text-white">{faq.sideCardTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-blue-50/85">{faq.sideCardDescription}</p>
              <Link
                href={faq.sideCardCta.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all"
              >
                {faq.sideCardCta.label}
                <ArrowRightIcon />
              </Link>
            </motion.div>
          </div>

          {/* Right column: accordion */}
          <div className="divide-y divide-slate-200 border-t border-slate-200 lg:border-t-0">
            {faq.items.map((item, i) => {
              const open = openIndex === i;
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={flyInViewport}
                  transition={{ duration: 0.4, ease: smoothEase, delay: 0.04 * i }}
                  className="border-b border-slate-200 first:border-t-0 lg:first:border-t lg:last:border-b-0"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">{item.question}</span>
                    <PlusIcon open={open} />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: smoothEase }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-8 text-sm leading-6 text-slate-600">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {faq.relatedTags && faq.relatedTags.length > 0 && (
          <motion.div
            className="mt-10 border-t border-slate-200 pt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={flyInViewport}
            transition={{ duration: 0.4, ease: smoothEase }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Related</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {faq.relatedTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 px-4 py-1.5 text-sm text-slate-600 transition-colors hover:border-sky-300 hover:text-sky-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}