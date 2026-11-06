import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Order Management System for Manufacturers | InOps";
const PAGE_DESCRIPTION =
  "Streamline order lifecycle from placement to fulfillment — integrated with inventory and dispatch workflows for Indian manufacturing and industrial operations.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/order-management",
  extraKeywords: [
    "order management system India",
    "manufacturing order tracking",
    "order fulfillment software",
    "inventory order management India",
  ],
});

export default function OrderManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/order-management" pageTitle={PAGE_TITLE} pageDescription={PAGE_DESCRIPTION} />
      {children}
    </>
  );
}
