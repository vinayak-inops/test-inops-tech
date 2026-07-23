"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";
import type { IndustryConfig } from "@/app/lib/industries";
import { governanceIconMap, ShieldIcon } from "@/app/components/industries/Icons";

const smoothEase = [0.33, 1, 0.68, 1] as const;

export function GovernanceSection({
  governance,
  imageUrl,
  description,
  imageAfterIndex,
  layout = "list-image",
  /** Width : height, e.g. "3 / 4" for portrait, "4 / 3" for landscape. Defaults to portrait to match the reference designs. */
  imageAspect = "3 / 4",
}: {
  governance: IndustryConfig["governance"];
  imageUrl?: string;
  description?: string;
  /** For electronics-style layout: place image after this item index (0-based) */
  imageAfterIndex?: number;
  /** "list-image": text+image side-by-side, tags below (manufacturing/pharma/logistics)
   *  "grid": full-width bottom card grid, no side image (automotive)
   *  "split-image": image inline after N items, then bottom card grid (electronics) */
  layout?: "list-image" | "grid" | "split-image";
  imageAspect?: string;
}) {
  const renderItem = (item: (typeof governance.items)[number], i: number) => {
    const Icon = item.icon ? governanceIconMap[item.icon] : ShieldIcon;
    return (
      <motion.li
        key={item.title}
        className="flex gap-4"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={flyInViewport}
        transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 * i }}
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[var(--inops-blue)]">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-black">{item.title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
        </div>
      </motion.li>
    );
  };

  // Shared card renderer used by both the "grid" layout (automotive) and the
  // bottom section of "split-image" (electronics) — matches the reference
  // designs where every item sits in its own bordered, rounded card with
  // breathing room around it, rather than a single divided table.
  const renderCard = (item: (typeof governance.items)[number], i: number) => {
    const Icon = item.icon ? governanceIconMap[item.icon] : ShieldIcon;
    return (
      <motion.div
        key={item.title}
        className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/60"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={flyInViewport}
        transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 * i }}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[var(--inops-blue)] transition-colors duration-300 group-hover:bg-[var(--inops-blue)] group-hover:text-white">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-sm font-semibold text-black">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.description}</p>
      </motion.div>
    );
  };

  const header = (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <FlyInText as="p" direction="down" className={inopsUi.eyebrowBrand}>
          {governance.eyebrow}
        </FlyInText>
        <FlyInText as="h2" direction="left" delay={0.06} className={`mt-3 max-w-xl ${inopsUi.sectionHeading}`}>
          {governance.title}
        </FlyInText>
        {description && (
          <FlyInText as="p" direction="up" delay={0.1} className={`mt-4 max-w-xl ${inopsUi.typeBody}`}>
            {description}
          </FlyInText>
        )}
      </div>
      <Link
        href={governance.resourceCta.href}
        className="inline-flex shrink-0 items-center rounded-md border border-[var(--inops-blue)] px-4 py-2 text-sm font-medium text-[var(--inops-blue)] transition-colors hover:bg-[var(--inops-blue)] hover:text-white focus:outline-none"
      >
        {governance.resourceCta.label}
      </Link>
    </div>
  );

  // Image column: sits in a grid cell equal in width to the text column, but is
  // itself capped and centered so it renders at a sensible portrait size instead
  // of stretching to fill the full (now-wider) column — matching the reference
  // designs where the image is noticeably narrower than the text block it sits beside.
  const imageBlock = imageUrl ? (
    <motion.div
      className="relative mx-auto h-fit w-full max-w-[320px] lg:mx-0"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={flyInViewport}
      transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
    >
      <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt=""
          className="w-full object-cover"
          style={{ aspectRatio: imageAspect }}
        />
      </div>
      {governance.calloutStat.value && (
        <motion.div
          className="absolute -bottom-5 left-5 right-5 flex flex-col gap-1 rounded-xl bg-[var(--inops-navy)] px-4 py-3 text-white shadow-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={flyInViewport}
          transition={{ duration: 0.45, ease: smoothEase, delay: 0.35 }}
        >
          <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-slate-300">
            <ShieldIcon className="h-3.5 w-3.5" />
            {governance.calloutStat.label || "Site Compliance Rating"}
          </span>
          <p className="text-sm font-semibold">{governance.calloutStat.value}</p>
        </motion.div>
      )}
    </motion.div>
  ) : null;

  return (
    <section className="relative bg-white px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {header}

        {layout === "grid" && (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {governance.items.map((item, i) => renderCard(item, i))}
          </div>
        )}

        {layout === "list-image" && (
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
            <ul className="space-y-6">{governance.items.map(renderItem)}</ul>
            {imageBlock}
          </div>
        )}

        {layout === "split-image" && (
          <>
            <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
              <ul className="space-y-6">
                {governance.items.slice(0, (imageAfterIndex ?? 3) + 1).map(renderItem)}
              </ul>
              {imageBlock}
            </div>
            {governance.items.length > (imageAfterIndex ?? 3) + 1 && (
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {governance.items
                  .slice((imageAfterIndex ?? 3) + 1)
                  .map((item, i) => renderCard(item, i))}
              </div>
            )}
          </>
        )}

        {governance.tags.length > 0 && layout !== "grid" && layout !== "split-image" && (
          <div className="mt-16 grid grid-cols-1 gap-5 border-t border-slate-100 pt-10 sm:grid-cols-3">
            {governance.tags.map((tag) => (
              <div key={tag.label} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--inops-navy)]/5 text-[var(--inops-navy)]">
                  <ShieldIcon className="h-4.5 w-4.5" />
                </span>
                {tag.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}