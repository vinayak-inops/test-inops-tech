"use client";

import { motion } from "framer-motion";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";
import type { ServiceConfig } from "@/app/lib/services";
import { Icon } from "./Icons";

const smoothEase = [0.33, 1, 0.68, 1] as const;

export function ProblemGrid({ problem }: { problem: ServiceConfig["problem"] }) {
  return (
    <section className="relative bg-white px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <FlyInText as="p" direction="down" className={inopsUi.eyebrowBrand}>
              {problem.eyebrow}
            </FlyInText>
            <FlyInText as="h2" direction="left" delay={0.06} className={`mt-3 ${inopsUi.sectionHeading}`}>
              {problem.title}
            </FlyInText>
          </div>
          <FlyInText as="p" direction="up" delay={0.1} className={`max-w-md ${inopsUi.typeBody}`}>
            {problem.description}
          </FlyInText>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problem.cards.map((card, i) => (
            <motion.article
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={flyInViewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 * i }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Icon name={card.icon} title={card.title} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-black">{card.title}</h3>
              <p className={`mt-2 ${inopsUi.typeSmall}`}>{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}