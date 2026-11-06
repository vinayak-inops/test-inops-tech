import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Fixed Asset Management Software for Plants | InOps",
  description:
    "Track, maintain, and audit fixed assets across locations ,  depreciation visibility, custody, and maintenance workflows with fixed asset management.",
  path: "/fixed-asset-management",
  extraKeywords: ["fixed asset tracking India", "asset register software", "FAM enterprise"],
});

export default function FixedAssetManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/fixed-asset-management" />
      {children}
    </>
  );
}
