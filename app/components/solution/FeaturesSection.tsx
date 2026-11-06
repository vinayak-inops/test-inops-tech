"use client";

import Link from "next/link";
import { FlyInText } from "@/app/components/FlyInText";
import { AnimatedCardGrid, AnimatedCardItem } from "@/app/components/AnimatedSection";

export type FeatureCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type FeaturesSectionProps = {
  eyebrow?: string;
  heading: string;
  description: string;
  cards: FeatureCard[];
  ctaLabel?: string;
  ctaHref?: string;
  columns?: 2 | 4;
  id?: string;
};

const DIRECTIONS = ["left", "right", "bottom", "top"] as const;

export default function FeaturesSection({
  eyebrow,
  heading,
  description,
  cards,
  ctaLabel,
  ctaHref = "#",
  columns = 4,
  id,
}: FeaturesSectionProps) {
  return (
    <section id={id} className="bg-black/85 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div className="max-w-xl">
            {eyebrow && (
              <FlyInText
                as="span"
                direction="up"
                className="inline-block rounded-full bg-blue-900/60 px-3 py-1 text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3"
              >
                {eyebrow}
              </FlyInText>
            )}
            <FlyInText as="h2" direction="up" delay={0.05} className="text-3xl font-extrabold text-white sm:text-4xl">
              {heading}
            </FlyInText>
            <FlyInText as="p" direction="up" delay={0.1} className="mt-3 text-sm text-gray-400 leading-relaxed">
              {description}
            </FlyInText>
          </div>

          {ctaLabel && (
            <Link
              href={ctaHref}
              className="shrink-0 self-start rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
            >
              {ctaLabel}
            </Link>
          )}
        </div>

        <AnimatedCardGrid
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${
            columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-2"
          }`}
        >
          {cards.map((card, i) => (
          <AnimatedCardItem
            key={card.title}
            direction={DIRECTIONS[i % DIRECTIONS.length]}
            className="rounded-2xl border border-white/10 bg-white/2 p-8 backdrop-blur-sm transition hover:bg-white/10"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700">
              <span style={{ color: "#ffffff" }}>
                {card.icon}
              </span>
            </div>

            <h3 className="text-base font-bold text-white mb-3">{card.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
          </AnimatedCardItem>
        ))} 
        </AnimatedCardGrid>
      </div>
    </section>
  );
} 