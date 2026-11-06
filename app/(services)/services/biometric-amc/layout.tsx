/**
 * /services/biometric-amc
 *
 * Serves both organic search and paid search (eSSL / ZKTeco / Realtime brand terms
 * + AMC/service/repair modifiers). Page has strong content (FAQs, SLA stats,
 * schema-ready structure) — indexed for organic reach.
 */

import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { biometricAmcFaqItems } from "@/app/lib/biometricAmcFaqItems";
import type { Metadata } from "next";

const PAGE_TITLE = "Biometric AMC & Repair Services | ZKTeco, eSSL | InOps";
const PAGE_DESCRIPTION =
  "SLA-backed AMC and repair for eSSL, ZKTeco, and Realtime biometric devices — face terminals, fingerprint readers, and RFID access hardware. Multi-site, single-vendor service across India.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/biometric-amc",
});

export default function BiometricAmcLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/biometric-amc"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
        faqItems={biometricAmcFaqItems}
      />
      {children}
    </>
  );
}
