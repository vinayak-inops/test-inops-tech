import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { clmsFaqItems } from "@/app/lib/clmsFaqItems";
import type { Metadata } from "next";

const PAGE_TITLE = "Contract Labour Management System (CLMS) India | Iddion RegX";

const PAGE_DESCRIPTION =
  "Contract labour management system for Indian plants: gate pass, biometric attendance, PF/ESI, wages and CLRA registers on one platform. Book a demo.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/contract-labour-management",
  extraKeywords: [
    "labour management system software",
    "contract labour management system",
    "contract labour management",
    "contract labour attendance software",
    "contract labour attendance system",
    "contract workmen management",
    "casual labour management system",
    "e-contract labour management system",
    "contract manpower management system",
    "contract employee management system",
    "attendance management software",
    "compliance management software",
    "Form V Form XIII",
    "multi-site contractor management",
  ],
});

export default function PayrollSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SolutionSchemaInjector
        path="/contract-labour-management"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
      />
      <FAQPageJsonLd items={clmsFaqItems} />
      {children}
    </>
  );
}
