import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Canteen Management System for Factories | InOps";
const PAGE_DESCRIPTION =
  "Canteen and visitor management for industrial sites: biometric meal entitlement by shift and contractor, payroll-linked subsidies, and visitor pass management for Indian manufacturing plants.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/canteen-and-visitor",
  extraKeywords: [
    "canteen management system",
    "factory canteen software",
    "visitor management system India",
    "industrial visitor pass system",
  ],
});

export default function CanteenManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/canteen-and-visitor"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
      />
      {children}
    </>
  );
}
