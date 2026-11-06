import ProductSchemaInjector from "@/app/components/ProductSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { turnstilesFaqItems } from "@/app/lib/turnstilesFaqItems";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Turnstiles & Flap Barriers for Factories | Access Control",
  description:
    "Tripod turnstiles and flap barriers with biometric integration for factory gates — stainless steel, smooth throughput, and CLMS-connected access control for Indian industrial sites.",
  path: "/turnstiles-access",
  extraKeywords: [
    "turnstile access control",
    "flap barrier factory",
    "industrial turnstile India",
    "biometric turnstile integration",
  ],
});

export default function TurnstilesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductSchemaInjector path="/turnstiles-access" faqItems={turnstilesFaqItems} />
      {children}
    </>
  );
}
