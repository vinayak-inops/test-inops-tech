"use client";

import { motion } from "framer-motion";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import type { IndustryConfig } from "@/app/lib/industries";
import { outcomeIconMap } from "@/app/components/industries/Icons";

const smoothEase = [0.33, 1, 0.68, 1] as const;

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.2l2.4 2.4 4.6-4.9" />
    </svg>
  );
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden {...props}>
      <path strokeLinecap="round" d="M4 20V10m5 10V5m5 15v-7m5 7V8" />
    </svg>
  );
}

function PulseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l2.5-6 4 12 2.5-6h5" />
    </svg>
  );
}

export function OutcomesSection({
  outcomes,
  imageUrl,
}: {
  outcomes: IndustryConfig["outcomes"];
  imageUrl: string;
}) {
  const isLight = outcomes.variant === "light";
  const isTeal = outcomes.eyebrowColor === "teal" || !isLight;

  // Accent used by the eyebrow, stat icons and the callout bar.
  const accentText = isLight ? "text-blue-600" : "text-teal-300";
  const accentBg = isLight ? "bg-blue-600" : "bg-teal-400";
  const calloutBar = isTeal && !isLight ? "bg-teal-500" : "bg-blue-600";

  // Manufacturing-style callouts carry a phrase, not a metric — scale the type down.
  const calloutValue = outcomes.calloutStat.value ?? "";
  const isPhraseCallout = calloutValue.length > 12;
  // Electronics repeats badge + label; render an accent rule instead of duplicating it.
  const showCalloutLabel =
    Boolean(outcomes.calloutStat.label) &&
    outcomes.calloutStat.label !== outcomes.calloutStat.badge;
  const showCalloutRule =
    Boolean(outcomes.calloutStat.label) && !showCalloutLabel && !isLight;

  const header = (
    <div>
      <FlyInText
        as="p"
        direction="down"
        className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${accentText}`}
      >
        {outcomes.eyebrow}
      </FlyInText>
      <FlyInText
        as="h2"
        direction="left"
        delay={0.06}
        className={`mt-4 ${isLight ? "text-slate-900" : "text-white"}`}
      >
        {outcomes.title}
      </FlyInText>
      {outcomes.description && (
        <FlyInText
          as="p"
          direction="left"
          delay={0.08}
          className={`mt-4 text-sm leading-6 ${isLight ? "text-slate-600" : "text-blue-100/70"}`}
        >
          {outcomes.description}
        </FlyInText>
      )}
    </div>
  );

  const contentColumn = (
    <div className={isLight ? "order-1 lg:order-2" : ""}>
      {header}

      {/* 2 x 2 stat grid */}
      <div className="mt-10 grid grid-cols-2 gap-4">
        {outcomes.stats.map((stat, i) => {
          const Icon = stat.icon ? outcomeIconMap[stat.icon] : outcomeIconMap["arrow-up"];
          return (
            <motion.div
              key={stat.label}
              className={`rounded-lg border p-5 ${
                isLight
                  ? "border-slate-200 bg-slate-50/80"
                  : "border-white/[0.06] bg-white/[0.07]"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={flyInViewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 * i }}
            >
              <Icon className={`h-[18px] w-[18px] ${accentText}`} />
              <p
                className={`mt-4 text-[28px] font-bold leading-none tabular-nums ${
                  isLight ? "text-slate-900" : "text-white"
                }`}
              >
                {stat.value}
              </p>
              <p
                className={`mt-2.5 text-[11px] font-semibold uppercase leading-4 tracking-[0.08em] ${
                  isLight ? "text-slate-500" : "text-slate-400"
                }`}
              >
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Highlights — bordered cards on dark, plain rows on light */}
      <div className={`mt-8 ${isLight ? "space-y-3" : "space-y-4"}`}>
        {outcomes.highlights.map((h, i) => (
          <motion.div
            key={h.title}
            className={`flex gap-3 ${
              isLight ? "" : "rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5"
            }`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={flyInViewport}
            transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 * i }}
          >
            <CheckIcon
              className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${
                isLight ? "text-teal-500" : "text-teal-300"
              }`}
            />
            <p
              className={`text-[13px] leading-5 ${
                isLight ? "text-slate-600" : "text-blue-100/80"
              }`}
            >
              <span className={`font-bold ${isLight ? "text-slate-900" : "text-white"}`}>
                {h.title}:
              </span>{" "}
              {h.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const imageColumn = (
    <motion.div
      className={`relative self-center ${isLight ? "order-2 lg:order-1" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={flyInViewport}
      transition={{ duration: 0.6, ease: smoothEase }}
    >
      <div className="overflow-hidden rounded-md shadow-2xl shadow-black/30">
        {imageUrl && <img src={imageUrl} alt="" className="aspect-[3/2] w-full object-cover" />}
      </div>

      {calloutValue && (
        <div
          className={`absolute -right-4 top-7 min-w-[150px] max-w-[230px] rounded-sm px-4 py-3 shadow-xl sm:-right-6 ${
            isLight
              ? "bg-[var(--inops-navy)]"
              : "bg-white"
          }`}
        >
          {isLight ? (
            <div className="flex items-center gap-3">
              <BarChartIcon className="h-5 w-5 shrink-0 text-[#39bde8]" />
              <div>
                {outcomes.calloutStat.badge && (
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-blue-100/60">
                    {outcomes.calloutStat.badge}
                  </p>
                )}
                <p
                  className={`font-bold text-white ${
                    isPhraseCallout ? "mt-0.5 text-sm leading-5" : "text-xl leading-6"
                  }`}
                >
                  {calloutValue}
                </p>
              </div>
            </div>
          ) : (
            <>
              {outcomes.calloutStat.badge && (
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {outcomes.calloutStat.badge}
                </p>
              )}
              <div className="mt-1 flex items-center gap-2.5">
                <span className={`h-7 w-[3px] shrink-0 rounded-full ${calloutBar}`} />
                <p
                  className={`font-bold tabular-nums text-[var(--inops-navy)] ${
                    isPhraseCallout ? "text-sm leading-5" : "text-2xl leading-7"
                  }`}
                >
                  {calloutValue}
                </p>
              </div>
              {showCalloutLabel && (
                <p className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-blue-600">
                  <PulseIcon className="h-3.5 w-3.5 shrink-0" />
                  {outcomes.calloutStat.label}
                </p>
              )}
              {showCalloutRule && <span className={`mt-3 block h-[3px] w-full rounded-full ${accentBg}`} />}
            </>
          )}
        </div>
      )}
    </motion.div>
  );

  return (
    <section
      className={`relative overflow-hidden px-6 py-20 sm:px-12 sm:py-24 lg:px-24 lg:py-28 xl:px-36 ${
        isLight ? "bg-white" : "bg-[var(--inops-navy)]"
      }`}
    >
      <div className="relative z-[1] mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {isLight ? (
          <>
            {imageColumn}
            {contentColumn}
          </>
        ) : (
          <>
            {contentColumn}
            {imageColumn}
          </>
        )}
      </div>
    </section>
  );
}