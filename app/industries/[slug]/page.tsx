import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllIndustrySlugs, getIndustryConfig } from "@/app/lib/industries";
import { IndustryHero } from "@/app/components/industries/IndustryHero";
import { MarketContext } from "@/app/components/industries/MarketContext";
import { RisksGrid } from "@/app/components/industries/RisksGrid";
import { GovernanceSection } from "@/app/components/industries/GovernanceSection";
import { OutcomesSection } from "@/app/components/industries/OutcomesSection";
import { IntegrationBand } from "@/app/components/industries/IntegrationBand";
import { IndustryBottomCTA } from "@/app/components/industries/IndustryBottomCTA";


const industryImages: Record<string, {hero: string; marketContext: string; governance: string; outcomes: string; risks?: string }> = {
  manufacturing: {
    hero: "/images/industries/manufacturing/hero-bg.jpg",
    marketContext: "/images/industries/manufacturing/market-context.jpg",
    governance: "/images/industries/manufacturing/governance.jpg",
    outcomes: "/images/industries/manufacturing/outcomes.jpg",
  },
  automotive: {
    hero: "/images/industries/automotive/hero-bg.jpg",
    marketContext: "/images/industries/automotive/market-context.jpg",
    governance: "/images/industries/automotive/governance.jpg",
    outcomes: "/images/industries/automotive/outcomes.jpg",
    risks: "/images/industries/automotive/risks.jpg",
  },
  electronics: {
    hero: "/images/industries/electronics/hero-bg.jpg",
    marketContext: "/images/industries/electronics/market-context.jpg",
    governance: "/images/industries/electronics/governance.jpg",
    outcomes: "/images/industries/electronics/outcomes.jpg",
  },
  "logistics-warehousing": {
    hero: "/images/industries/logistics-warehousing/hero-bg.jpg",
    marketContext: "/images/industries/logistics-warehousing/market-context.jpg",
    governance: "/images/industries/logistics-warehousing/governance.jpg",
    outcomes: "/images/industries/logistics-warehousing/outcomes.jpg",
  },
  pharmaceutical: {
    hero: "/images/industries/pharmaceutical/hero-bg.jpg",
    marketContext: "/images/industries/pharmaceutical/market-context.jpg",
    governance: "/images/industries/pharmaceutical/governance.jpg",
    outcomes: "/images/industries/pharmaceutical/outcomes.jpg",
  },
};

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getIndustryConfig(slug);
  if (!config) return {};
  return {
    title: `${config.hero.title} ${config.hero.highlight} | InOps Technologies`,
    description: config.hero.description,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const config = getIndustryConfig(slug);
  if (!config) notFound();

  const images = industryImages[slug] ?? industryImages.manufacturing;

  return (
    <div className="inops-template solution-product-section-gap">
      <IndustryHero hero={config.hero} breadcrumb={config.breadcrumb} bgImage={images.hero}/>
      <MarketContext
        marketContext={config.marketContext}
        imageUrl={config.marketContext.imageQuery.trim() ? images.marketContext : undefined}
      />
      <RisksGrid
        risks={config.risks}
        imageUrl={images.risks}
        calloutAlert={config.risks.calloutAlert}
      />
      <GovernanceSection
        governance={config.governance}
        imageUrl={images.governance}
        description={
          slug === "manufacturing"
            ? undefined
            : slug === "automotive"
            ? "Iddion RegX provides a modular suite designed to integrate with existing manufacturing execution systems (MES), digitizing the entire human layer of your plant."
            : slug === "electronics"
            ? "Our modular suite is purpose-built to integrate with MES and ERP systems, digitizing every worker touchpoint from the gate to the assembly station."
            : slug === "logistics-warehousing"
            ? "Our platform provides a modular architecture designed to digitize the entire contractor lifecycle, from the gatehouse to the loading dock."
            : "Iddion RegX provides a modular, high-trust architecture designed to digitize the entire contractor lifecycle, specifically mapped to life sciences regulatory demands."
        }
        layout={slug === "automotive" ? "grid" : slug === "electronics" ? "split-image" : "list-image"}
        imageAfterIndex={2}
      />
      <OutcomesSection outcomes={config.outcomes} imageUrl={images.outcomes} />
      <IntegrationBand
        integration={config.integration}
        variant={slug === "manufacturing" ? "dark" : "light"}
      />
      <IndustryBottomCTA bottomCta={config.bottomCta} imageUrl={images.governance} />
    </div>
  );
}
