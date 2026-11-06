/**
 * /services/background-verification
 *
 * Positioned as a per-check managed service, not a SaaS product.
 * "InOps RegX" is the Iddion CLMS module's sub-brand and does not belong on this
 * standalone service page — removed from title and description per audit #23.
 *
 * Primary kw: background verification services India (500/mo)
 * Secondary: background check service · contractor BGV · industrial background verification
 */

import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { bgvFaqItems } from "@/app/lib/bgvFaqItems";
import type { Metadata } from "next";

const PAGE_TITLE = "Blue-Collar Background Verification Services India | InOps";
const PAGE_DESCRIPTION =
  "InOps verifies contract and industrial workers before site entry — Aadhaar-linked identity, criminal records, employment history, and address checks, integrated with gate access and CLMS. Deployable within days.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/background-verification",
  extraKeywords: [
    "background verification software",
    "background check software",
    "verification solutions",
    "vendor verification",
    "background verification services India",
    "employee background check India",
    "contractor BGV solution",
    "digital background verification platform",
    "identity verification India",
    "pre-employment screening India",
    "gate access BGV integration",
    "industrial background verification",
  ],
});

export default function BGVLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/background-verification"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
        faqItems={bgvFaqItems}
      />
      {children}
    </>
  );
}
