"use client";

import { motion } from "framer-motion";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";
import type { IndustryConfig } from "@/app/lib/industries";

const smoothEase = [0.33, 1, 0.68, 1] as const;

/** Outlined ring + checkmark — used in BOTH layouts now (with-image and no-image) */
function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12.5l2.5 2.5 5-5.5" />
    </svg>
  );
}

/**
 * Splits body copy into paragraphs on double newlines. If exactly one bold
 * phrase should be highlighted in a paragraph, wrap it with **asterisks** in
 * the source data (e.g. "...framework for **Workforce Governance**, enabling...")
 * and it will render bolded automatically. Falls back to plain text if no
 * markers are present.
 */
function renderParagraph(text: string, key: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <p key={key} className={inopsUi.typeBody}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-slate-800">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

export function MarketContext({
  marketContext,
  imageUrl,
}: {
  marketContext: IndustryConfig["marketContext"];
  imageUrl?: string;
}) {
  const hasImage = Boolean(imageUrl && imageUrl.trim().length > 0);
  const paragraphs = marketContext.body.split(/\n\s*\n/).filter(Boolean);

  const heading = (
    <>
      <FlyInText as="p" direction="down" className={inopsUi.eyebrowBrand}>
        {marketContext.eyebrow}
      </FlyInText>
      <FlyInText as="h2" direction="left" delay={0.06} className={`mt-3 ${inopsUi.sectionHeading}`}>
        {marketContext.title}
      </FlyInText>
      {/* Accent underline */}
      <motion.div
        className="mt-4 h-[3px] w-12 rounded-full bg-[var(--inops-blue)]"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={flyInViewport}
        transition={{ duration: 0.4, ease: smoothEase, delay: 0.15 }}
        style={{ transformOrigin: "left" }}
      />
    </>
  );

  const checklist = (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
      {marketContext.tags.map((tag) => (
        <span key={tag} className="flex items-start gap-2 text-sm font-medium text-slate-700">
          <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--inops-blue)]" />
          <span>{tag}</span>
        </span>
      ))}
    </div>
  );

  const bodyBlock = (
    <div className="mt-4 space-y-4">
      {paragraphs.map((p, i) => renderParagraph(p, `p-${i}`))}
    </div>
  );

  return (
    <section className="relative bg-white px-6 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {hasImage ? (
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-16">
            {/* Image with decorative offset corner-bracket + shadow block */}
            <div className="relative">
              <div
                className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-[var(--inops-blue)]/5"
                aria-hidden
              />

              <motion.div
                className="relative overflow-hidden rounded-2xl border border-slate-200"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={flyInViewport}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageUrl} alt="" className="aspect-[4/3] w-full object-cover" />
              </motion.div>

              {/* Corner-bracket accent: its (0,0) point anchors exactly to the image's top-right corner, then extends out into the gutter */}
                <svg
                className="pointer-events-none absolute left-full -ml-10 top-0 -mt-4 hidden h-20 w-20 text-[var(--inops-blue)]/40 sm:block"
                viewBox="0 0 64 64"
                fill="none"
                overflow="visible"
                aria-hidden
              >
                <path d="M0 0 H48 V48" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>

            <div>
              {heading}
              {bodyBlock}
              {checklist}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-16">
            <div>{heading}</div>

            <div>
              {bodyBlock}
              {checklist}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}