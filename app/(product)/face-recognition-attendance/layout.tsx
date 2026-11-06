import ProductSchemaInjector from "@/app/components/ProductSchemaInjector";
import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Face Recognition Attendance System for Factories | InOps";
const PAGE_DESCRIPTION =
  "Face recognition attendance system for factory gates: biometric attendance machines with liveness detection, fingerprint readers, and RFID — supplied, installed and integrated with CLMS for Indian manufacturers.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/face-recognition-attendance",
  extraKeywords: [
    "face recognition attendance system",
    "face attendance machine",
    "biometric device for attendance",
    "fingerprint attendance system",
    "biometric attendance machine",
    "attendance machine face recognition",
    "face biometric attendance",
    "biometric attendance management system",
    "face recognition biometric device",
    "face reader factory",
    "biometric face terminal India",
    "ZKTeco face reader",
    "industrial face recognition",
  ],
});

const FAQ_ITEMS = [
  {
    question: "What is a face recognition attendance system?",
    answer:
      "A face recognition attendance system uses an industrial-grade terminal to identify workers by their facial geometry at the gate — recording entry and exit times without a card, PIN, or fingerprint press. InOps face terminals support liveness detection to prevent photo spoofing and are engineered for high-ambient-light factory environments. Each event is tagged to a worker, contractor, and shift, feeding payroll and CLRA compliance records in real time.",
  },
  {
    question: "What is a biometric attendance machine?",
    answer:
      "A biometric attendance machine is a hardware device that authenticates a worker's identity — by face, fingerprint, or both — and records a time-stamped attendance event. In industrial deployments the machine is mounted at the gate or shop-floor entry, operates without network dependency (events buffer locally and sync on reconnection), and integrates with workforce management software to produce payroll-ready attendance data.",
  },
  {
    question: "What is the difference between a face attendance machine and a fingerprint attendance system?",
    answer:
      "A face attendance machine is touchless — the worker looks at the terminal and is identified without physical contact, making it faster in high-traffic gate scenarios and more hygienic in food-processing or pharma environments. A fingerprint attendance system requires the worker to press their finger on a sensor, which is marginally slower per transaction but performs reliably across a wider range of lighting conditions. InOps supplies and integrates both; most plants use face terminals at gates and fingerprint readers at secondary access points.",
  },
  {
    question: "How does biometric attendance integrate with contract labour payroll?",
    answer:
      "InOps face and fingerprint terminals push attendance events in real time to the InOps CLMS platform. Each event is tagged to a contractor, site, and shift — the data flows directly into payroll calculation, eliminating manual timesheets and preventing buddy punching. Contractor invoices are reconciled line-by-line against the biometric record before payment.",
  },
  {
    question: "What biometric attendance machines does InOps supply?",
    answer:
      "InOps supplies ZKTeco, eSSL, and Realtime face recognition terminals, fingerprint readers, RFID and card readers, tripod turnstiles, flap barriers, full-height turnstiles, and CCTV-integrated AI attendance cameras. All hardware integrates with the InOps CLMS and HRIS attendance engine.",
  },
  {
    question: "Do face recognition terminals work in outdoor or high-light factory environments?",
    answer:
      "Yes. InOps biometric terminals are rated for industrial environments — they handle direct sunlight, high ambient light at factory gates, and wide temperature ranges. Liveness detection and infrared sensing ensure accurate reads regardless of lighting conditions.",
  },
  {
    question: "How does face recognition attendance prevent contractor overbilling?",
    answer:
      "Each face recognition event is tagged to a specific enrolled worker, their contractor agency, and their shift. When the contractor submits their invoice, InOps CLMS reconciles every line item against the biometric gate record. A worker billed but not present has no biometric event — the discrepancy is flagged before payment. Plants report invoice accuracy rising to near 100% from the first billing cycle on InOps.",
  },
  {
    question: "What happens if a biometric terminal goes offline at a factory gate?",
    answer:
      "InOps terminals store attendance events locally during network outages and sync automatically on reconnection. Offline buffer events are processed without creating duplicates or attendance gaps. For multi-gate plants, offline events from one gate do not affect attendance recording at other gates on the same deployment.",
  },
];

export default function FaceRecognitionAttendanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SecondaryPageJsonLd path="/face-recognition-attendance" title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProductSchemaInjector path="/face-recognition-attendance" />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
