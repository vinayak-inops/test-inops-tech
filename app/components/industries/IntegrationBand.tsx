"use client";

import { motion } from "framer-motion";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import type { IndustryConfig } from "@/app/lib/industries";

const smoothEase = [0.33, 1, 0.68, 1] as const;

// --- Icons -----------------------------------------------------------------
// integration.items only carry a title/description (no icon key), so we pick
// a sensible icon per item based on keywords in its title. This keeps every
// industry's row visually consistent without needing to touch industries.ts.

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
    </svg>
  );
}

function ShieldAlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4" />
      <circle cx="12" cy="15.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GearIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <circle cx="12" cy="12" r="3" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.4 13a7.6 7.6 0 0 0 0-2l2-1.2-2-3.4-2.3.8a7.6 7.6 0 0 0-1.7-1L15 3h-6l-.4 2.2a7.6 7.6 0 0 0-1.7 1l-2.3-.8-2 3.4L4.6 11a7.6 7.6 0 0 0 0 2l-2 1.2 2 3.4 2.3-.8a7.6 7.6 0 0 0 1.7 1L9 21h6l.4-2.2a7.6 7.6 0 0 0 1.7-1l2.3.8 2-3.4-2-1.2z"
      />
    </svg>
  );
}

function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 5-9 5-9-5 9-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l9 5 9-5" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function LightningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4.5l3 2" />
    </svg>
  );
}

function DocumentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v4h4M9 13l2 2 4-4" />
    </svg>
  );
}

function ChipIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2" />
    </svg>
  );
}

function pickIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("vault") || t.includes("centralized")) return SearchIcon;
  if (t.includes("availability")) return ClockIcon;
  if (t.includes("connectivity") || t.includes("wms") || t.includes("tms")) return LightningIcon;
  if (t.includes("hardware") || t.includes("agnostic") || t.includes("chip")) return ChipIcon;
  if (t.includes("command") || t.includes("multi-site") || t.includes("scalable")) return LayersIcon;
  if (t.includes("tolerance") || t.includes("compliance") || t.includes("gxp")) return ShieldAlertIcon;
  if (t.includes("audit") || t.includes("trail")) return DocumentIcon;
  if (t.includes("sync") || t.includes("integration") || t.includes("erp")) return GearIcon;
  return ShieldIcon;
}

export function IntegrationBand({
  integration,
  variant = "light",
}: {
  integration: IndustryConfig["integration"];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <section
      className={`relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24 ${
        isDark ? "bg-[#0b1220]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <FlyInText
            as="p"
            direction="down"
            className={`text-xs font-semibold uppercase tracking-[0.24em] ${
              isDark ? "text-[#7dd3fc]" : "text-[var(--inops-blue)]"
            }`}
          >
            {integration.eyebrow}
          </FlyInText>
          <FlyInText
            as="h2"
            direction="up"
            delay={0.06}
            className={`mt-3 text-2xl font-semibold sm:text-3xl ${isDark ? "text-white" : "text-black"}`}
          >
            {integration.title}
          </FlyInText>
          <FlyInText
            as="p"
            direction="up"
            delay={0.12}
            className={`mt-4 text-sm leading-7 sm:text-base sm:leading-7 ${
              isDark ? "text-blue-100/70" : "text-slate-600"
            }`}
          >
            {integration.description}
          </FlyInText>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {integration.items.map((item, i) => {
            const Icon = pickIcon(item.title);
            return (
              <motion.div
                key={item.title}
                className={
                  isDark
                    ? "rounded-2xl p-6 text-center"
                    : "rounded-xl border border-slate-200 bg-slate-50 p-6 text-left"
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={flyInViewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 * i }}
              >
                <span
                  className={
                    isDark
                      ? "mx-auto flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#7dd3fc] [&>svg]:h-5 [&>svg]:w-5"
                      : "flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[var(--inops-blue)] [&>svg]:h-5 [&>svg]:w-5"
                  }
                >
                  <Icon />
                </span>
                <h3 className={`mt-4 text-sm font-semibold sm:text-base ${isDark ? "text-white" : "text-black"}`}>
                  {item.title}
                </h3>
                <p
                  className={`mt-1.5 text-xs leading-5 sm:text-sm sm:leading-6 ${
                    isDark ? "text-blue-100/65" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div
          className={`mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-t pt-8 sm:mt-14 sm:gap-x-10 ${
            isDark ? "border-white/10" : "border-slate-100"
          }`}
        >
          {integration.certifications.map((cert) => (
            <span
              key={cert}
              className={`text-[11px] font-bold italic uppercase tracking-[0.08em] sm:text-xs ${
                isDark ? "text-blue-100/50" : "text-slate-400"
              }`}
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}