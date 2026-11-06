/**
 * /earned-wage-access (was /early-wage-access — 301 in next.config.ts)
 *
 * Organic volume: zero for any EWA variant in India. No organic market yet.
 * Role: sales collateral and AI-citation asset only. Do not invest further in SEO.
 * noindex is intentional.
 */

import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Earned Wage Access (EWA) for Factory Workers | Salary++";
const PAGE_DESCRIPTION =
  "Earned wage access for India's industrial workforce: workers withdraw wages already earned, verified against biometric attendance — no loans, no employer liability, settlement automated with payroll.";

export const metadata: Metadata = {
  ...routeMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/earned-wage-access",
  }),
};

const FAQ_ITEMS = [
  {
    question: "What is Earned Wage Access (EWA) for factory workers in India?",
    answer:
      "Earned Wage Access (EWA) lets workers draw a portion of their already-earned wages before the monthly payday. InOps EWA connects directly to attendance and payroll data, so workers can request only what they have genuinely earned — no loans, no interest, no new debt.",
  },
  {
    question: "Does EWA create financial liability for the employer?",
    answer:
      "No. InOps EWA is structured with an NBFC or banking partner who handles disbursement and collection. The employer bears zero financial liability or capital expenditure. Funds are recovered automatically at the next payroll cycle.",
  },
  {
    question: "How does EWA reduce worker attrition in manufacturing?",
    answer:
      "Financial stress from fixed 30-day pay cycles is one of the top drivers of blue-collar attrition. Workers facing medical emergencies or urgent repairs turn to high-interest informal lenders. On-demand access to earned wages removes this pressure — InOps EWA customers report a 40% reduction in workforce churn.",
  },
  {
    question: "Is Earned Wage Access compliant with Indian labour law?",
    answer:
      "Yes. InOps EWA is structured as an advance on earned wages — not a loan — and is disbursed through a regulated NBFC partner. Deductions are recovered at source through payroll, keeping the arrangement fully compliant with the Payment of Wages Act and applicable state labour rules.",
  },
  {
    question: "How does InOps EWA integrate with existing payroll and CLMS?",
    answer:
      "InOps EWA connects directly to the InOps CLMS attendance and payroll module. Every wage withdrawal is validated against actual attendance records, capped at a configurable percentage of earnings, and auto-reconciled at month end — no manual intervention needed.",
  },
];

export default function EwaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
