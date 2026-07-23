import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllServiceSlugs, getServiceConfig } from "@/app/lib/services";
import { ServiceHero } from "@/app/components/services/ServiceHero";
import { ProblemGrid } from "@/app/components/services/ProblemGrid";
import { ProcessFlow } from "@/app/components/services/ProcessFlow";
import { CapabilitiesGrid } from "@/app/components/services/CapabilitiesGrid";
import { OutcomeStats } from "@/app/components/services/OutcomeStats";
import { IndustriesStrip } from "@/app/components/services/IndustriesStrip";
import { ManualVsManaged } from "@/app/components/services/ManualVsManaged";
import { EngagementTimeline } from "@/app/components/services/EngagementTimeline";
import { ServiceFAQ } from "@/app/components/services/ServiceFAQ";

import Footer from "@/app/components/Footer";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getServiceConfig(slug);
  if (!config) return {};
  return {
    title: `${config.hero.title} | InOps Technologies`,
    description: config.hero.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const config = getServiceConfig(slug);
  if (!config) notFound();

  return (
    <div className="inops-template solution-product-section-gap">
      <ServiceHero hero={config.hero} breadcrumb={config.breadcrumb} />
      <ProblemGrid problem={config.problem} />
      <ProcessFlow process={config.process} />
      <CapabilitiesGrid capabilities={config.capabilities} />
      <OutcomeStats outcomeStats={config.outcomeStats} />
      <IndustriesStrip />
      <ManualVsManaged manualVsManaged={config.manualVsManaged} />
      <EngagementTimeline engagement={config.engagement} />
      <ServiceFAQ faq={config.faq} />
      <Footer />
    </div>
  );
}
