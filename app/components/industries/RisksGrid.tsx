"use client";

import { motion } from "framer-motion";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import type { IndustryConfig } from "@/app/lib/industries";
import { riskIconMap } from "@/app/components/industries/Icons";

const smoothEase = [0.33, 1, 0.68, 1] as const;

type RiskCardData = IndustryConfig["risks"]["cards"][number];

function ShieldAlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function RiskCard({ card, index }: { card: RiskCardData; index: number }) {
  const Icon = card.icon ? riskIconMap[card.icon] : riskIconMap["alert-circle"];

  return (
    <motion.div
      className="rounded-2xl border border-slate-200 bg-white p-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={flyInViewport}
      transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 * index }}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
        <Icon className="h-4 w-4" />
      </span>
      <p className="mt-3 text-sm font-semibold text-slate-900">{card.title}</p>
      <p className="mt-1 text-xs leading-5 text-slate-500">{card.description}</p>
    </motion.div>
  );
}

export function RisksGrid({
  risks,
  imageUrl,
  calloutAlert,
}: {
  risks: IndustryConfig["risks"];
  imageUrl?: string;
  calloutAlert?: { title: string; description: string };
}) {
  // Only the automotive-style layout (image + risk alert) renders when both are supplied.
  const hasImageLayout = Boolean(imageUrl && calloutAlert);

  return (
    <section
      className={`relative px-6 py-16 sm:px-12 sm:py-20 lg:px-24 lg:py-24 xl:px-36 ${
        hasImageLayout ? "bg-white" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <FlyInText
            as="p"
            direction="down"
            className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600"
          >
            {risks.eyebrow}
          </FlyInText>
          <FlyInText as="h2" direction="up" delay={0.06} className="mt-3 text-slate-900">
            {risks.title}
          </FlyInText>
          {risks.description && (
            <FlyInText
              as="p"
              direction="up"
              delay={0.08}
              className="mt-4 text-sm leading-6 text-slate-600"
            >
              {risks.description}
            </FlyInText>
          )}
        </div>

        {hasImageLayout ? (
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-8">
            {/* Left column: image + dark risk-alert callout */}
            <div className="flex flex-col gap-5">
              <motion.div
                className="overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={flyInViewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <img src={imageUrl} alt="" className="aspect-[3/4] w-full object-cover" />
              </motion.div>

              {calloutAlert && (
                <motion.div
                  className="rounded-2xl border border-white/10 bg-[var(--inops-navy)] p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={flyInViewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#39bde8]/15 text-[#7dd3fc]">
                    <ShieldAlertIcon className="h-4 w-4" />
                  </span>
                  <p className="mt-2 text-sm font-semibold text-white">{calloutAlert.title}</p>
                  <p className="mt-1 text-xs leading-5 text-blue-100/70">{calloutAlert.description}</p>
                </motion.div>
              )}
            </div>

            {/* Right side: 2-column card grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {risks.cards.map((card, i) => (
                <RiskCard key={card.title} card={card} index={i} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {risks.cards.map((card, i) => (
              <RiskCard key={card.title} card={card} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}