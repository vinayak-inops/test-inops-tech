import type { Metadata } from "next";
import { routeMetadata } from "@/app/lib/seoMetadata";
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import { jsonLdScriptProps } from "@/app/lib/jsonLd";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = routeMetadata({
  title: "Automotive OEM: Contract Workforce Visibility Across Multiple Plants | InOps Case Study",
  description:
    "How a leading Indian automotive OEM with 10,000+ contract workers and 150+ contractors eliminated proxy attendance, automated CLRA compliance, and cut contractor billing disputes using Iddion RegX CLMS and InOps face-recognition turnstiles.",
  path: "/case-studies/automotive-oem-multi-plant-clms",
  extraKeywords: [
    "automotive OEM contract labour management",
    "CLMS case study automotive",
    "Iddion RegX automotive",
    "contract workforce management multi-plant",
    "CLRA compliance automotive India",
    "proxy attendance elimination manufacturing",
  ],
  index: true,
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How a Leading Automotive OEM Brought Visibility & Control to Its Contract Workforce",
  description:
    "How a leading Indian automotive OEM with 10,000+ contract workers and 150+ contractors eliminated proxy attendance, automated CLRA compliance, and cut contractor billing disputes using Iddion RegX CLMS and InOps face-recognition turnstiles.",
  url: absoluteUrl("/case-studies/automotive-oem-multi-plant-clms"),
  publisher: {
    "@type": "Organization",
    name: "InOps IT Solutions",
    url: absoluteUrl("/"),
  },
  about: {
    "@type": "Product",
    name: "Iddion RegX Contract Labour Management System (CLMS)",
    url: absoluteUrl("/contract-labour-management"),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd path="/case-studies/automotive-oem-multi-plant-clms" />
      <script {...jsonLdScriptProps(articleJsonLd)} />
      {children}
    </>
  );
}
