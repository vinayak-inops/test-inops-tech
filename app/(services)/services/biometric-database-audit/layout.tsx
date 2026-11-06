import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { biometricDatabaseAuditFaqItems } from "@/app/lib/biometricDatabaseAuditFaqItems";
import type { Metadata } from "next";

const PAGE_TITLE = "Biometric Database Audit | Ghost Employee Detection | InOps";
const PAGE_DESCRIPTION =
  "Biometric database audit service built for ghost employee detection, duplicate biometric cleanup and payroll leakage prevention across industrial plants, warehouses and multi-site environments.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/biometric-database-audit",
  extraKeywords: [
    "biometric database audit India",
    "ghost employee detection",
    "duplicate biometric cleanup",
    "payroll leakage prevention",
    "biometric fleet audit",
    "ghost enrollment detection",
    "attendance audit India",
    "biometric health check",
    "identity audit India",
    "bulk de-enrollment",
    "biometric database cleanup",
    "payroll fraud prevention India",
  ],
});

export default function BiometricDatabaseAuditLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/biometric-database-audit"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
        faqItems={biometricDatabaseAuditFaqItems}
      />
      {children}
    </>
  );
}
