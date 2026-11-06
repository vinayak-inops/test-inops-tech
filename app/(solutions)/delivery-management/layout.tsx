import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Delivery Management Software | Last-Mile & Dispatch | InOps";
const PAGE_DESCRIPTION =
  "Real-time delivery tracking software for Indian manufacturers — route management, GPS tracking, proof of delivery, and dispatch analytics integrated with your factory operations.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/delivery-management",
  extraKeywords: [
    "delivery management system India",
    "last mile delivery tracking",
    "factory dispatch software",
    "proof of delivery software India",
  ],
});

export default function DeliveryManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/delivery-management" pageTitle={PAGE_TITLE} pageDescription={PAGE_DESCRIPTION} />
      {children}
    </>
  );
}
