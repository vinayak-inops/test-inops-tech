import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Case Studies: Contract Workforce Management in Indian Manufacturing | InOps",
  description:
    "Anonymised case studies of InOps and Iddion RegX at Indian manufacturers across automotive, cement, electronics, metal and steel, and pharma. Every figure is measured and approved by the customer.",
  path: "/case-studies",
  extraKeywords: [
    "contract labour management case study India",
    "CLMS case study manufacturing",
    "Iddion RegX customer story",
    "workforce management automotive OEM",
    "CLRA compliance case study",
  ],
  index: false, // keep noindex until first case study is approved
});

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd path="/case-studies" />
      {children}
    </>
  );
}
