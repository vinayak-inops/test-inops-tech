import ProductSchemaInjector from "@/app/components/ProductSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...routeMetadata({
    title: "Access Control Accessories | EM Locks, RFID Cards | InOps",
    description:
      "Access control accessories ,  wireless exit button, exit push button, and add-ons for request-to-exit and integrated security systems.",
    path: "/accessories",
    extraKeywords: ["exit button access control", "RTE button India", "proximity card accessories"],
  }),
};

export default function AccessoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductSchemaInjector path="/accessories" />
      {children}
    </>
  );
}
