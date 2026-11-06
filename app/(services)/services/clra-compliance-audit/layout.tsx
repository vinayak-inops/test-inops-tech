import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { clraComplianceAuditFaqItems } from "@/app/lib/clraComplianceAuditFaqItems";
import type { Metadata } from "next";

const PAGE_TITLE = "CLRA & Labour Code Compliance Audit | Principal Employers";
const PAGE_DESCRIPTION =
  "CLRA compliance audit built for principal employers — contractor licence validity, Form V/XIII accuracy, statutory register review, and principal-employer liability exposure assessment across industrial plants.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/clra-compliance-audit",
  extraKeywords: [
    "CLRA compliance audit India",
    "contract labour compliance",
    "principal employer compliance",
    "labour law compliance India",
    "CLRA audit readiness",
    "contractor documentation review",
    "labour compliance audit",
    "compliance gap analysis",
    "Form V Form XIII review",
    "factory labour compliance",
    "contractor compliance audit",
    "CLRA statutory compliance",
  ],
});

export default function CLRAComplianceAuditLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/clra-compliance-audit"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
        faqItems={clraComplianceAuditFaqItems}
      />
      {children}
    </>
  );
}
