import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Enterprise Operations Platform | Asset, Warehouse & Delivery",
  description:
    "One platform for workforce compliance and access control: CLMS, HRIS, biometric attendance, gate management, and statutory compliance — unified across all your industrial sites.",
  path: "/enterprise-solution",
  extraKeywords: [
    "workforce compliance platform",
    "enterprise CLMS HRIS",
    "integrated workforce access control",
  ],
});

export default function EnterpriseSolutionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/enterprise-solution" />
      {children}
    </>
  );
}
