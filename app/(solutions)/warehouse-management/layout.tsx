import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Warehouse Management System for Factories | InOps";
const PAGE_DESCRIPTION =
  "Barcode and RFID-powered warehouse management for Indian manufacturers — inventory tracking, storage optimization, stock movement reporting, and real-time visibility across factory stores.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/warehouse-management",
  extraKeywords: [
    "warehouse management system India",
    "inventory management software India",
    "factory stock control",
    "RFID warehouse management",
    "WMS manufacturing India",
  ],
});

export default function WarehouseManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/warehouse-management" pageTitle={PAGE_TITLE} pageDescription={PAGE_DESCRIPTION} />
      {children}
    </>
  );
}
