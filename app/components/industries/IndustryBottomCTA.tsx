"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FlyInText, flyInViewport } from "@/app/components/FlyInText";
import type { IndustryConfig } from "@/app/lib/industries";

const smoothEase = [0.33, 1, 0.68, 1] as const;

export function IndustryBottomCTA({
  bottomCta,
  imageUrl,
}: {
  bottomCta: IndustryConfig["bottomCta"];
  imageUrl?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--inops-blue,#0f5fc7)] px-4 sm:px-6 lg:px-12">
      {imageUrl && (
        <>
          <img
            src={imageUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-[var(--inops-blue,#0f5fc7)]/70" />
        </>
      )}

      <div className="relative mx-auto max-w-7xl py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <FlyInText
              as="h2"
              direction="left"
              className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-[2.15rem]"
            >
              {bottomCta.title}
            </FlyInText>
            {bottomCta.description && (
              <FlyInText
                as="p"
                direction="up"
                delay={0.08}
                className="mt-4 text-sm leading-6 text-blue-50/85 sm:text-base"
              >
                {bottomCta.description}
              </FlyInText>
            )}
          </div>

          <motion.div
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={flyInViewport}
            transition={{ duration: 0.5, ease: smoothEase, delay: 0.12 }}
          >
            <Link
              href={bottomCta.primaryCta.href}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-white px-5 py-3 text-sm font-semibold text-[var(--inops-blue,#0f5fc7)] transition-colors hover:bg-blue-50 focus:outline-none"
            >
              {bottomCta.primaryCta.label}
            </Link>
            <Link
              href={bottomCta.secondaryCta.href}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none"
            >
              {bottomCta.secondaryCta.label}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}