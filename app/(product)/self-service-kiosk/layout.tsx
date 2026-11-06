import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";
import ProductSchemaInjector from "@/app/components/ProductSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Employee Self-Service Kiosk for Factories | InOps";
const PAGE_DESCRIPTION =
  "Employee self-service for workforces without laptops — attendance, payslips, leave and claims through a shop-floor kiosk, mobile app or web portal. Built for factory and contract workforces in India.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/self-service-kiosk",
  extraKeywords: [
    "employee self service portal",
    "hrms employee self service",
    "employee self service app",
    "employee self service application",
    "hrms self service",
    "employee self service software",
    "self service kiosk",
    "payslip kiosk factory",
    "shop floor self service",
    "biometric self service terminal",
    "employee kiosk India",
  ],
});

const FAQ_ITEMS = [
  {
    question: "What is employee self service?",
    answer:
      "Employee self service lets workers view and manage their own workforce records — attendance, payslips, leave, claims and personal details — without going through HR. In office environments it's delivered as a web portal or app; in factories it also needs a shared physical access point, because most workers have no company laptop and many have no smartphone.",
  },
  {
    question: "What is a self-service kiosk and where is it placed?",
    answer:
      "A self-service kiosk is a shared terminal — wall-mounted or floor-standing — where a worker identifies themselves biometrically and accesses their own records. Typical placements are the gate, the canteen, and near the shop-floor entrance, chosen so workers pass it during natural breaks rather than making a separate trip.",
  },
  {
    question: "How does a worker log in without a password?",
    answer:
      "By face or fingerprint. The kiosk uses the same biometric identity already enrolled for attendance, so there is no separate credential to issue, remember or reset. This is the single largest reason kiosk self-service works on a factory floor where password-based portals do not.",
  },
  {
    question: "What can workers actually do at the kiosk?",
    answer:
      "Check attendance and shift history, download payslips, apply for leave and see balances, raise attendance queries, submit claims, update personal details, and view document status such as induction validity, medical fitness and gate pass. Where enabled, they can also access earned wages before payday.",
  },
  {
    question: "Does it work for contract workers as well as permanent employees?",
    answer:
      "Yes. Contract workers see their own attendance and wage records mapped to the correct contractor, drawn from the same contract labour management engine that produces contractor invoices. That transparency removes a significant share of contractor payroll disputes, because the worker and the contractor are reading the same record.",
  },
  {
    question: "What languages does it support?",
    answer:
      "The interface is available in multiple Indian languages so workers use it in the language they read most comfortably.",
  },
  {
    question: "How many kiosks does a site need?",
    answer:
      "Fewer than most people expect, because usage is spread across shifts rather than concentrated. One kiosk per major gate or canteen is a common starting point, with additions based on observed queuing. Sizing depends on headcount, shift pattern and how many workers also use the mobile app.",
  },
  {
    question: "Do workers need smartphones?",
    answer:
      "No — that is the point of the kiosk. Workers with smartphones can use the mobile app for the same functions; workers without one use the kiosk. Both read from the same record, so a workforce with mixed phone ownership gets consistent access.",
  },
  {
    question: "Is worker data secure on a shared terminal?",
    answer:
      "Sessions are tied to biometric identification and end automatically after a short timeout or on completion, so the next person at the kiosk cannot see the previous worker's data. Access is limited to that worker's own records. Data handling aligns with DPDP Act obligations.",
  },
  {
    question: "Can workers correct wrong attendance through the kiosk?",
    answer:
      "They can raise a query against a specific day, which routes to their supervisor for review with the original record and the correction request both retained. The worker cannot edit their own attendance — the value is that discrepancies surface on the day rather than at month-end.",
  },
  {
    question: "How does this reduce HR workload?",
    answer:
      "Payslip requests, leave-balance queries and attendance disputes make up the majority of walk-ins at a plant HR desk. All three are self-serviceable. HR shifts from answering the same questions repeatedly to handling the exceptions that genuinely need a decision.",
  },
  {
    question: "Does it integrate with our existing HR or payroll system?",
    answer:
      "The kiosk reads from the InOps attendance and workforce record. Where an existing HRMS holds payroll, integration determines what the kiosk can display.",
  },
  {
    question: "What does deployment involve?",
    answer:
      "Kiosk placement and mounting, network connection, linking to existing biometric enrolment, and configuring which functions are enabled per worker category. Because workers are usually already enrolled for attendance, there is generally no new enrolment exercise.",
  },
];

export default function SelfServiceKioskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SecondaryPageJsonLd
        path="/self-service-kiosk"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      />
      <ProductSchemaInjector path="/self-service-kiosk" />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
