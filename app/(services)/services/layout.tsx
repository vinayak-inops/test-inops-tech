import type { Metadata } from "next";
import { routeMetadata } from "@/app/lib/seoMetadata";
import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";

const PAGE_TITLE = "Workforce Compliance Services | BGV, AMC, CLRA Audit | InOps";
const PAGE_DESCRIPTION =
  "Background verification, biometric AMC, CLRA compliance audits, biometric database audits and industrial manpower supply for multi-site plants in India.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services",
  extraKeywords: [
    "workforce compliance services India",
    "industrial workforce solutions",
    "background verification services",
    "biometric AMC services",
    "CLRA compliance audit",
    "industrial manpower supply",
    "biometric database audit",
    "InOps services",
  ],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SecondaryPageJsonLd
        path="/services"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      />
      {children}
    </>
  );
}
