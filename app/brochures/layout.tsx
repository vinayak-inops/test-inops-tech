import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Product Brochures | CLMS, Biometric Attendance, HRIS | InOps",
  description:
    "Download PDF brochures for contract labour management (CLMS), biometric attendance, visitor management, HRIS, canteen systems, and fixed asset management — resources for Indian manufacturers and HR teams.",
  path: "/brochures",
  extraKeywords: [
    "CLMS brochure download",
    "biometric attendance brochure India",
    "contract labour management PDF",
    "CLRA compliance brochure",
    "workforce software datasheet",
  ],
});

export default function BrochuresLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd path="/brochures" />
      {children}
    </>
  );
}
