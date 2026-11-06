import ProductSchemaInjector from "@/app/components/ProductSchemaInjector";
import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Biometric Attendance Machines | ZKTeco & eSSL | InOps";
const PAGE_DESCRIPTION =
  "Biometric devices for industrial attendance and access control — face terminals, fingerprint readers, RFID and turnstiles from ZKTeco, eSSL and Realtime. Supplied, installed, integrated and maintained across India. 3,000+ devices under management since 2014.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/biometric-devices",
  extraKeywords: [
    "biometric device",
    "biometric for attendance",
    "biometric attendance machine",
    "biometric machine",
    "fingerprint attendance machine",
    "face attendance machine",
    "biometric device for attendance",
    "biometric fingerprint scanner",
    "biometric attendance management system",
    "biometric companies India",
    "face recognition attendance system",
    "ZKTeco biometric",
    "eSSL biometric",
    "Realtime biometric",
    "biometric AMC",
  ],
});

const FAQ_ITEMS = [
  {
    question: "What is a biometric device and how does it work for attendance?",
    answer:
      "A biometric device identifies a person by a physical characteristic — most commonly face or fingerprint — rather than by a card or PIN. For attendance it captures that identity at entry and exit and records the timestamp, so working hours are tied to a verified person rather than a transferable credential. The device sends each event to attendance software, where it becomes a shift record and eventually a payroll input.",
  },
  {
    question: "Which is better for factories — fingerprint or face recognition?",
    answer:
      "Face recognition, in most industrial settings. Fingerprint readers fail on dry, damaged, oily or dirty fingers, which describes the hands of most manual workers by mid-shift. Every failed punch becomes a manual entry, and every manual entry becomes a payroll dispute. Fingerprint devices remain sensible for offices and low-throughput indoor points where hands are clean and volumes are modest.",
  },
  {
    question: "How much does a biometric attendance machine cost?",
    answer:
      "Cost depends on modality, throughput, environment rating and volume. Fingerprint readers sit at the entry level, face terminals cost more per unit, and turnstile-integrated installations carry civil and installation costs alongside the device. We quote against a site survey rather than a price list, because the same headcount at two different gates often needs different hardware.",
  },
  {
    question: "Which biometric device brands do you supply?",
    answer:
      "ZKTeco, eSSL and Realtime, plus turnstiles, flap barriers and access controllers. We also maintain and integrate mixed-brand estates originally supplied by others, which is the normal situation at plants that have bought hardware over several years.",
  },
  {
    question: "Can biometric devices integrate with our existing attendance or HR software?",
    answer:
      "Yes. Devices feed the InOps attendance engine, and verified data can be exported to existing HR and payroll systems. Where a plant already runs an HRMS, the devices become the capture layer rather than a parallel system.",
  },
  {
    question: "How many devices does a site need?",
    answer:
      "Determined by peak throughput, not headcount. A gate handling 800 workers within a 20-minute shift change needs several lanes or camera-based capture; the same 800 arriving across two hours may need one device. The site survey sizes this, and getting it wrong is the most common cause of queue complaints after deployment.",
  },
  {
    question: "Do biometric devices work without internet connectivity?",
    answer:
      "Yes. Devices store punches locally and sync when the connection returns, which matters at remote plants, project sites and locations with unreliable links.",
  },
  {
    question: "What happens if a device fails at a critical gate?",
    answer:
      "Multi-lane gates continue on the remaining readers. Single-reader gates are the real risk, which is why identifying single points of failure is part of both deployment planning and AMC onboarding. Sites running mobile or camera-based capture can also fall back to those methods while a terminal is down.",
  },
  {
    question: "Can one worker be enrolled once and recognised everywhere?",
    answer:
      "Yes. A single enrolment activates the worker's identity across every device on site — gate terminals, canteen counters, attendance points — and across plants in a multi-site deployment. Workers moving between sites or contractors are not re-enrolled, which matters most in contract workforces where movement is constant.",
  },
  {
    question: "How is worker consent and biometric data handled?",
    answer:
      "Consent is captured digitally at enrolment, in the worker's preferred language, before any biometric template is created. Templates are access-controlled with configurable retention, and handling aligns with DPDP Act obligations. Workers can raise queries through the same channel used for enrolment.",
  },
  {
    question: "Are biometric templates the same as storing fingerprints or photographs?",
    answer:
      "No. Devices store a mathematical template derived from the biometric, not the image itself, and the template cannot be reversed into a usable fingerprint or photograph. This distinction matters when explaining the system to workers and works committees.",
  },
  {
    question: "Who maintains the devices after installation?",
    answer:
      "Devices are covered under biometric AMC — preventive maintenance, remote monitoring, firmware updates and on-site engineer support across every site under one contract, including devices originally supplied by other vendors.",
  },
  {
    question: "Can we add devices later without redoing everything?",
    answer:
      "Yes. Devices are added to the existing estate and inherit the same worker identities and rules. Adding a gate does not mean re-enrolling a workforce, which is one of the practical reasons to standardise the platform even when hardware brands differ.",
  },
  {
    question: "What is a registered device (RD service) and do we need one?",
    answer:
      "Registered Device service applies to Aadhaar-based biometric authentication, where UIDAI requires devices to be registered and encrypted at source. It is relevant where Aadhaar authentication is specifically required; standard attendance and access control do not depend on it.",
  },
];

export default function BiometricDevicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SecondaryPageJsonLd
        path="/biometric-devices"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      />
      <ProductSchemaInjector path="/biometric-devices" />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
