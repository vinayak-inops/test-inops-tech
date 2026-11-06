import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { hrisFaqItems } from "@/app/lib/hrisFaqItems";
import type { Metadata } from "next";

const PAGE_TITLE = "HRIS & Payroll Software for Manufacturing in India | InOps";
const PAGE_DESCRIPTION =
  "HRIS software for Indian manufacturers: biometric attendance, PF, ESI, PT and LWF payroll, leave and employee records across plants. Works with InOps CLMS.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/hris",
  extraKeywords: [
    "hr software",
    "hrms software",
    "human resource software",
    "cloud based hr software",
    "hr software india",
    "hris hr software",
    "attendance management software",
    "hr management software",
    "hrms for manufacturing",
    "HRIS software India",
    "HR information system",
    "statutory payroll software",
    "HRIS biometric attendance",
    "HRIS vs CLMS",
  ],
});

export default function LabourManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/hris" pageTitle={PAGE_TITLE} pageDescription={PAGE_DESCRIPTION} />
      <FAQPageJsonLd items={hrisFaqItems} />
      {children}
    </>
  );
}
