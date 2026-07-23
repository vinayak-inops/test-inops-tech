"use client";

import { motion } from "framer-motion";
import type { SVGProps } from "react";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";
import type { ServiceConfig } from "@/app/lib/services";

const smoothEase = [0.33, 1, 0.68, 1] as const;

function BaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    />
  );
}

/** Step 1: upload arrow into tray (Submit / Onboard / Extract) */
function UploadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M12 15V4" />
      <path d="M8 8l4-4 4 4" />
      <path d="M4 15v3a2 2 0 002 2h12a2 2 0 002-2v-3" />
    </BaseIcon>
  );
}

/** Step 2: scan frame / corner brackets (Verify / Monitor / Audit) */
function ScanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M4 8V6a2 2 0 012-2h2" />
      <path d="M16 4h2a2 2 0 012 2v2" />
      <path d="M20 16v2a2 2 0 01-2 2h-2" />
      <path d="M8 20H6a2 2 0 01-2-2v-2" />
      <rect x="9" y="9" width="6" height="6" rx="1" strokeDasharray="2 2" />
    </BaseIcon>
  );
}

/** Step 3: document with checkmark (Report / Maintain / Remediate) */
function DocumentCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M6 3.5h9l3 3V19a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 19V5A1.5 1.5 0 017.5 3.5z" />
      <path d="M9 12.5l2 2 4-4.5" />
    </BaseIcon>
  );
}

/** Step 4: check inside circle (Deploy / Report / Certify) */
function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.3l2.4 2.4 4.6-5.4" />
    </BaseIcon>
  );
}

/** Fixed, position-based icon order — independent of step titles/copy. */
const stepIcons = [UploadIcon, ScanIcon, DocumentCheckIcon, CheckCircleIcon];

export function ProcessFlow({ process }: { process: ServiceConfig["process"] }) {
  return (
    <section className="relative overflow-hidden bg-[var(--inops-navy)] px-4 sm:px-6 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(57,189,232,0.18),transparent_32%),radial-gradient(circle_at_82%_78%,rgba(29,95,191,0.22),transparent_30%)]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <FlyInText as="p" direction="down" className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7dd3fc]">
              {process.eyebrow}
            </FlyInText>
            <FlyInText as="h2" direction="left" delay={0.06} className="mt-3 max-w-xl text-white">
              {process.title}
            </FlyInText>
          </div>
          <FlyInText as="p" direction="up" delay={0.12} className={`max-w-sm sm:text-right ${inopsUi.typeOnDarkBody}`}>
            {process.description}
          </FlyInText>
        </div>

        <div className="relative mt-20 grid grid-cols-2 gap-x-6 gap-y-16 sm:grid-cols-4 sm:gap-8">
          {/* dashed connector line — aligned with the "raised" (even-index) circles */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden border-t border-dashed border-white/25 sm:block"
            aria-hidden
          />

          {process.steps.map((step, i) => {
            const isLowered = i % 2 === 1;
            const StepIcon = stepIcons[i % stepIcons.length];
            return (
              <motion.div
                key={step.title}
                className={`relative flex flex-col items-center text-center ${isLowered ? "sm:mt-16" : ""}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={flyInViewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 * i }}
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#1a5a8a]">
                  <StepIcon className="h-6 w-6 text-white" />
                  <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--inops-navy)] bg-[#39bde8] text-[10px] font-bold text-[var(--inops-navy)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-white">{step.title}</h3>
                <p className="mt-2 max-w-[14rem] text-sm leading-6 text-blue-50/80">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}