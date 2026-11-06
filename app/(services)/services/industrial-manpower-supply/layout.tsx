import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { industrialManpowerSupplyFaqItems } from "@/app/lib/industrialManpowerSupplyFaqItems";
import type { Metadata } from "next";

const PAGE_TITLE = "Industrial Manpower Supply India | Verified Contract Workers";
const PAGE_DESCRIPTION =
  "Industrial manpower supply and contract labour deployment built around a compliance-ready workforce — background-verified, digitally onboarded and biometrically enrolled before they report on site.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/industrial-manpower-supply",
  extraKeywords: [
    "industrial manpower supply India",
    "contract labour deployment",
    "compliance ready workforce",
    "BGV cleared workers",
    "skilled workforce supply India",
    "factory workforce supply",
    "industrial staffing India",
    "verified contract workers",
    "digital onboarding workforce",
    "biometric enrollment workers",
    "InOps workforce",
    "contract workforce supply",
  ],
});

export default function IndustrialManpowerSupplyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/industrial-manpower-supply"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
        faqItems={industrialManpowerSupplyFaqItems}
      />
      {children}
    </>
  );
}
