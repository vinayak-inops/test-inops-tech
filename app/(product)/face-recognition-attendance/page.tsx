"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";
import VideoLivePopups from "@/app/components/VideoLivePopups";
import SolutionHeroWaveDecor from "@/app/components/SolutionHeroWaveDecor";
import {
  SPLIT_HERO_COPY_ML,
  SPLIT_HERO_MEDIA_MR,
  SPLIT_HERO_MOBILE_COPY_ORDER,
  SPLIT_HERO_MOBILE_MEDIA_ORDER,
  SPLIT_HERO_MOBILE_STACK,
} from "@/app/lib/splitHeroWideInsets";
import { ThroughputMetricCard } from "@/app/components/ThroughputMetricCard";
import { mediaVideos } from "@/app/lib/mediaAssets";
import { inopsUi } from "@/app/lib/inopsUi";
const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.08, margin: "0px 0px -12% 0px" } as const;

const smartAccessShowcaseImage =
  "/WhatsApp Image 2026-04-29 at 3.18.32 PM.jpeg";
const smartAccessShowcaseVideo = mediaVideos.smartAccessShowcase;
const deviceCategoryCards = [
  {
    title: "Face Recognition",
    description: "Sub-second 3D facial authentication with anti-spoofing technology for touchless entry.",
    image:
      "/face reconiging.png",
    icon: "face",
  },
  {
    title: "Fingerprint Systems",
    description: "High-capacity optical sensors for reliable biometric logging in high-traffic zones.",
    image:
      "/fingerprintsystem.png",
    icon: "finger",
  },
  {
    title: "RFID & Card Access",
    description: "Standard proximity and smart card readers for quick, legacy-compatible entry points.",
    image:
      "/REID card.png",
    icon: "card",
  },
  {
    title: "Integrated Kiosks",
    description: "Multimodal pedestals combining face, QR, and thermal sensing for lobby management.",
    image:
      "/KIOSK.png",
    icon: "kiosk",
  },
] as const;

const touchlessFaceReaderShowcaseImage = "/images/Screenshot 2026-05-04 220326.png";
const touchlessFaceReaderShowcaseVideo = mediaVideos.touchlessFaceReaderDemo;

/** “Platform strengths” — same card language as solution pain/insight tiles */
const biometricPlatformStrengthCards = [
  {
    title: "Fast Face Recognition",
    description: "Proprietary algorithms deliver sub-second authentication for seamless movement.",
    icon: "face" as const,
    tone: "sky" as const,
    tag: "Speed",
  },
  {
    title: "Multi-mode Authentication",
    description: "Support for face, fingerprint, RFID, QR, and PIN in a single unified system.",
    icon: "grid" as const,
    tone: "indigo" as const,
    tag: "Flexibility",
  },
  {
    title: "Anti-spoofing Tech",
    description: "Liveness detection prevents unauthorized access via photos or 3D masks.",
    icon: "shieldCheck" as const,
    tone: "emerald" as const,
    tag: "Trust",
  },
  {
    title: "High User Capacity",
    description: "Storage for up to 100,000 users and millions of transaction logs locally.",
    icon: "users" as const,
    tone: "violet" as const,
    tag: "Scale",
  },
  {
    title: "Intuitive UI",
    description: "Crisp touchscreen interfaces with multi-language support and visual feedback.",
    icon: "monitor" as const,
    tone: "cyan" as const,
    tag: "Experience",
  },
  {
    title: "Extreme Durability",
    description: "Operational in low-light, high-humidity, and industrial dust environments.",
    icon: "layers" as const,
    tone: "amber" as const,
    tag: "Industrial",
  },
] as const;

type BiometricStrengthTone = (typeof biometricPlatformStrengthCards)[number]["tone"];
type BiometricStrengthIcon = (typeof biometricPlatformStrengthCards)[number]["icon"];

const biometricStrengthThroughput: Record<
  BiometricStrengthTone,
  { accentBar: string; iconWrap: string; hoverGlow: string }
> = {
  sky: {
    accentBar: "from-sky-500 via-cyan-400 to-teal-400",
    iconWrap:
      "bg-sky-50 text-sky-600 ring-sky-500/20 group-hover:bg-sky-500 group-hover:text-white group-hover:ring-sky-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(14,165,233,0.35)]",
  },
  indigo: {
    accentBar: "from-indigo-500 via-violet-500 to-purple-400",
    iconWrap:
      "bg-indigo-50 text-indigo-600 ring-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(99,102,241,0.32)]",
  },
  emerald: {
    accentBar: "from-emerald-500 via-teal-400 to-cyan-400",
    iconWrap:
      "bg-emerald-50 text-emerald-600 ring-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white group-hover:ring-emerald-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(16,185,129,0.32)]",
  },
  violet: {
    accentBar: "from-violet-500 via-fuchsia-500 to-pink-400",
    iconWrap:
      "bg-violet-50 text-violet-600 ring-violet-500/20 group-hover:bg-violet-600 group-hover:text-white group-hover:ring-violet-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(139,92,246,0.35)]",
  },
  cyan: {
    accentBar: "from-cyan-500 via-sky-400 to-blue-500",
    iconWrap:
      "bg-cyan-50 text-cyan-600 ring-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white group-hover:ring-cyan-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(6,182,212,0.32)]",
  },
  amber: {
    accentBar: "from-amber-500 via-orange-500 to-red-400",
    iconWrap:
      "bg-amber-50 text-amber-700 ring-amber-500/20 group-hover:bg-amber-500 group-hover:text-white group-hover:ring-amber-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(245,158,11,0.38)]",
  },
};

function BiometricPlatformStrengthGlyph({ name, className }: { name: BiometricStrengthIcon; className: string }) {
  const c = `h-6 w-6 ${className}`;
  if (name === "face") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (name === "grid") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    );
  }
  if (name === "shieldCheck") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (name === "users") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    );
  }
  if (name === "monitor") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

type ReaderFeatureIcon = "bolt" | "bulb" | "shield" | "idcard" | "faceframe" | "fingerprint" | "wifi";
type ReaderFeatureAccent = "amber" | "violet" | "emerald" | "indigo" | "fuchsia" | "cyan";

const readerFeatureAccentVisual: Record<
  ReaderFeatureAccent,
  { card: string; miniCell: string; topBar: string; orb: string; iconShell: string }
> = {
  amber: {
    card: "border-amber-200/45 bg-gradient-to-br from-amber-50/95 via-white to-orange-50/35 shadow-[0_22px_56px_-32px_rgba(245,158,11,0.45)] ring-1 ring-amber-400/15 hover:ring-amber-400/30 hover:shadow-[0_28px_64px_-28px_rgba(245,158,11,0.4)]",
    miniCell:
      "border-amber-200/40 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/15 shadow-[0_14px_40px_-22px_rgba(245,158,11,0.35)] ring-1 ring-amber-400/12 hover:-translate-y-0.5 hover:ring-amber-300/28 hover:shadow-[0_18px_44px_-18px_rgba(245,158,11,0.28)] transition-all duration-300",
    topBar: "from-amber-400 via-orange-500 to-rose-500",
    orb: "bg-amber-400/25",
    iconShell:
      "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-600/35 ring-2 ring-white/25",
  },
  violet: {
    card: "border-violet-200/45 bg-gradient-to-br from-violet-50/95 via-white to-fuchsia-50/30 shadow-[0_22px_56px_-32px_rgba(139,92,246,0.38)] ring-1 ring-violet-400/15 hover:ring-violet-400/30 hover:shadow-[0_28px_64px_-28px_rgba(139,92,246,0.35)]",
    miniCell:
      "border-violet-200/40 bg-gradient-to-br from-violet-50/80 via-white to-fuchsia-50/15 shadow-[0_14px_40px_-22px_rgba(139,92,246,0.3)] ring-1 ring-violet-400/12 hover:-translate-y-0.5 hover:ring-violet-300/28 hover:shadow-[0_18px_44px_-18px_rgba(139,92,246,0.26)] transition-all duration-300",
    topBar: "from-violet-400 via-fuchsia-500 to-pink-500",
    orb: "bg-violet-400/22",
    iconShell:
      "bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-600/35 ring-2 ring-white/25",
  },
  emerald: {
    card: "border-emerald-200/45 bg-gradient-to-br from-emerald-50/95 via-white to-teal-50/35 shadow-[0_22px_56px_-32px_rgba(16,185,129,0.38)] ring-1 ring-emerald-400/15 hover:ring-emerald-400/30 hover:shadow-[0_28px_64px_-28px_rgba(16,185,129,0.35)]",
    miniCell:
      "border-emerald-200/40 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/15 shadow-[0_14px_40px_-22px_rgba(16,185,129,0.3)] ring-1 ring-emerald-400/12 hover:-translate-y-0.5 hover:ring-emerald-300/28 hover:shadow-[0_18px_44px_-18px_rgba(16,185,129,0.26)] transition-all duration-300",
    topBar: "from-emerald-400 via-teal-500 to-cyan-500",
    orb: "bg-emerald-400/22",
    iconShell:
      "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-600/35 ring-2 ring-white/25",
  },
  indigo: {
    card: "border-indigo-200/45 bg-gradient-to-br from-indigo-50/95 via-white to-sky-50/30 shadow-[0_22px_56px_-32px_rgba(99,102,241,0.38)] ring-1 ring-indigo-400/15 hover:ring-indigo-400/30 hover:shadow-[0_28px_64px_-28px_rgba(99,102,241,0.35)]",
    miniCell:
      "border-indigo-200/40 bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/15 shadow-[0_14px_40px_-22px_rgba(99,102,241,0.3)] ring-1 ring-indigo-400/12 hover:-translate-y-0.5 hover:ring-indigo-300/28 hover:shadow-[0_18px_44px_-18px_rgba(99,102,241,0.26)] transition-all duration-300",
    topBar: "from-indigo-400 via-blue-500 to-sky-500",
    orb: "bg-indigo-400/22",
    iconShell:
      "bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-600/35 ring-2 ring-white/25",
  },
  fuchsia: {
    card: "border-fuchsia-200/45 bg-gradient-to-br from-fuchsia-50/95 via-white to-rose-50/30 shadow-[0_22px_56px_-32px_rgba(217,70,239,0.35)] ring-1 ring-fuchsia-400/15 hover:ring-fuchsia-400/30 hover:shadow-[0_28px_64px_-28px_rgba(217,70,239,0.32)]",
    miniCell:
      "border-fuchsia-200/40 bg-gradient-to-br from-fuchsia-50/80 via-white to-rose-50/15 shadow-[0_14px_40px_-22px_rgba(217,70,239,0.28)] ring-1 ring-fuchsia-400/12 hover:-translate-y-0.5 hover:ring-fuchsia-300/28 hover:shadow-[0_18px_44px_-18px_rgba(217,70,239,0.24)] transition-all duration-300",
    topBar: "from-fuchsia-400 via-rose-500 to-orange-400",
    orb: "bg-fuchsia-400/20",
    iconShell:
      "bg-gradient-to-br from-fuchsia-500 to-rose-600 text-white shadow-lg shadow-fuchsia-600/35 ring-2 ring-white/25",
  },
  cyan: {
    card: "border-cyan-200/45 bg-gradient-to-br from-cyan-50/95 via-white to-sky-50/40 shadow-[0_22px_56px_-32px_rgba(6,182,212,0.38)] ring-1 ring-cyan-400/15 hover:ring-cyan-400/30 hover:shadow-[0_28px_64px_-28px_rgba(6,182,212,0.35)]",
    miniCell:
      "border-cyan-200/40 bg-gradient-to-br from-cyan-50/80 via-white to-sky-50/20 shadow-[0_14px_40px_-22px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/12 hover:-translate-y-0.5 hover:ring-cyan-300/28 hover:shadow-[0_18px_44px_-18px_rgba(6,182,212,0.26)] transition-all duration-300",
    topBar: "from-cyan-400 via-sky-500 to-blue-600",
    orb: "bg-cyan-400/22",
    iconShell:
      "bg-gradient-to-br from-cyan-500 to-sky-600 text-white shadow-lg shadow-cyan-600/35 ring-2 ring-white/25",
  },
};

const readerSpecHighlights: {
  title: string;
  text: string;
  featureIcon: ReaderFeatureIcon;
  accent: ReaderFeatureAccent;
}[] = [
  { title: "Ultra-fast recognition", text: "Recognition speed ≤ 1 second with high accuracy.", featureIcon: "bolt", accent: "amber" },
  { title: "Smart fill light", text: "Adaptive brightness for low-light environments.", featureIcon: "bulb", accent: "violet" },
  { title: "Advanced anti-spoofing", text: "Detects photo, video, and 3D mask attacks.", featureIcon: "shield", accent: "emerald" },
  { title: "Multi-card support", text: "Supports 125 kHz EM card and 13.56 MHz IC card.", featureIcon: "idcard", accent: "indigo" },
  { title: "Multiple auth modes", text: "Face / card / password / fingerprint.", featureIcon: "fingerprint", accent: "fuchsia" },
  { title: "Flexible connectivity", text: "TCP/IP, WiFi, Wiegand, and RS485.", featureIcon: "wifi", accent: "cyan" },
];

const readerSpecificationColumns = [
  { label: "Display", value: '2.8" / 5" / 7" touch options', specIcon: "monitor" as const },
  { label: "Face capacity", value: "Up to 10,000 (expandable)", specIcon: "users" as const },
  { label: "Transactions", value: "Up to 200,000 logs", specIcon: "chart" as const },
  { label: "Recognition type", value: "Visible light facial recognition", specIcon: "face" as const },
  { label: "Operating system", value: "Linux-based", specIcon: "chip" as const },
  { label: "Authentication", value: "Face / card / password / fingerprint", specIcon: "lock" as const },
] as const;

const readerAdvancedCapabilities = [
  "Conditional user access control",
  "Geo-fenced mobile app integration",
  "Custom firmware support",
  "CCTV system integration",
] as const;

const systemFlowSteps = [
  { step: "01", title: "User Authentication", gradient: "from-sky-500 to-blue-600" },
  { step: "02", title: "Identity Verification", gradient: "from-blue-600 to-indigo-600" },
  { step: "03", title: "Access Granted", gradient: "from-indigo-600 to-violet-600" },
  { step: "04", title: "Synced to System", gradient: "from-violet-600 to-purple-600" },
  { step: "05", title: "Reporting & Dashboard", gradient: "from-emerald-500 to-teal-600" },
] as const;

const faceRecognitionAttendanceFaqItems = [
  {
    question: "What is a face recognition attendance system?",
    answer: (
      <>
        A face recognition attendance system identifies a worker by their facial biometrics and records attendance without contact, cards, or PINs. In industrial use it does more than mark time: each recognition event confirms identity at the gate, feeds payroll with verified hours, and checks compliance status before entry is allowed.
      </>
    ),
  },
  {
    question: "How accurate is face recognition attendance in factory conditions?",
    answer: (
      <>
        Accuracy in an office lobby and accuracy at a shift-change gate are different problems — dust, backlight, helmets, and hundreds of workers in twenty minutes. InOps publishes real deployment accuracy data in its{" "}
        <Link href="/blog/biometric-attendance-accuracy-report-india-2026" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
          biometric attendance accuracy report
        </Link>{" "}
        rather than quoting lab figures.
      </>
    ),
  },
  {
    question: "How does facial recognition prevent buddy punching?",
    answer: (
      <>
        Every attendance event is bound to a unique facial identity, so one worker cannot punch for another the way a card or PIN allows. This is the core economic case: proxy punching and ghost workers typically drain 3–5% of contractor spend, and biometric verification at the gate closes it at source.
      </>
    ),
  },
  {
    question: "Does it work in low light, direct sunlight, or with masks and helmets?",
    answer: (
      <>
        Yes. Terminals use adaptive fill light for dark gates and infrared sensing for direct sun, and are rated for dust and humidity. Mask and partial-occlusion handling varies by device model — we match terminal selection to each gate's conditions during the site survey.
      </>
    ),
  },
  {
    question: "Can face recognition work with our existing CCTV cameras?",
    answer: (
      <>
        Yes.{" "}
        <Link href="/cctv-attendance" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
          CCTV attendance
        </Link>{" "}
        reads your installed camera feeds to recognise workers at gates and shop floors without a terminal at every capture point — useful for wide entrances, large sites, and areas where mounting hardware isn't practical. CCTV-captured attendance carries the same identity and compliance checks as terminal reads.
      </>
    ),
  },
  {
    question: "Can attendance be captured without fixed terminals at every site?",
    answer: (
      <>
        Yes. The{" "}
        <Link href="/mobile-app-attendance" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
          mobile attendance app
        </Link>{" "}
        captures face-based attendance with GPS validation for distributed or moving worksites. All three capture modes — terminal, CCTV, and mobile — feed one identity engine, so a worker enrolled once is recognised across every method.
      </>
    ),
  },
  {
    question: "Does it integrate with our attendance, payroll, and access control systems?",
    answer: (
      <>
        Yes. Recognition events flow directly into{" "}
        <Link href="/contract-labour-management" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
          contract labour management
        </Link>{" "}
        and{" "}
        <Link href="/hris" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
          HRIS
        </Link>{" "}
        for attendance, payroll, and statutory records, and into{" "}
        <Link href="/turnstiles-access" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
          turnstile access control
        </Link>{" "}
        for physical enforcement. REST APIs are available for integration with existing enterprise systems.
      </>
    ),
  },
  {
    question: "What happens when a worker isn't compliant?",
    answer: (
      <>
        The reader identifies; the rules decide. Every recognition event checks induction, medical fitness, licence validity, and BGV clearance via{" "}
        <Link href="/turnstiles-access" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
          gate compliance and auto-blocking
        </Link>
        . A failed check denies entry, logs the reason, and excludes the worker from that shift's attendance and payroll automatically.
      </>
    ),
  },
  {
    question: "Can hardware be customised for our site?",
    answer: (
      <>
        Yes. InOps supports firmware customisation, integration with existing access control, and mounting or enclosure variations for harsh and high-security environments, with local support and spares rather than import lead times.
      </>
    ),
  },
  {
    question: "How is worker consent and biometric data handled?",
    answer: (
      <>
        Consent is captured digitally at enrollment, in the worker's preferred language, before any biometric template is created. Templates are access-controlled with configurable retention, and handling aligns with DPDP Act obligations.
      </>
    ),
  },
  {
    question: "Can one enrollment work across multiple sites and devices?",
    answer: (
      <>
        Yes. A single capture activates the worker's identity across every device on site — gate terminals, canteen readers, attendance points — and across plants in a multi-site deployment, with no re-registration when a worker moves between locations or contractors.
      </>
    ),
  },
  {
    question: "What support and maintenance is available for the devices?",
    answer: (
      <>
        Devices are covered under{" "}
        <Link href="/services/biometric-amc" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
          biometric AMC services
        </Link>
        : SLA-backed preventive and corrective maintenance, remote device-health monitoring, firmware management, and on-site engineer support across every site under one contract.
      </>
    ),
  },
  {
    question: "Which type of biometric attendance for factories works best — face recognition, fingerprint, or CCTV?",
    answer: (
      <>
        The right choice for biometric attendance for factories depends on the gate conditions and workforce type. Face recognition handles shift-change crowds at 25–30 people per minute per lane and is unaffected by worn or dirty fingertips — making it the default for most Indian industrial sites. Fingerprint remains adequate for low-volume indoor points such as admin blocks. For wide plant entrances, large yards, or shop floors where mounting a terminal at every capture point isn't practical,{" "}
        <Link href="/cctv-attendance" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
          CCTV-based attendance
        </Link>{" "}
        reads installed cameras without extra hardware. For distributed or moving worksites,{" "}
        <Link href="/mobile-app-attendance" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
          mobile app attendance
        </Link>{" "}
        captures face verification with GPS. All three modes feed one identity engine, so the choice can be made gate by gate rather than site-wide.
      </>
    ),
  },
] as const;

function ReaderFeatureGlyph({ name, accent }: { name: ReaderFeatureIcon; accent: ReaderFeatureAccent }) {
  const shell = `inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${readerFeatureAccentVisual[accent].iconShell}`;
  const c = "h-6 w-6";
  return (
    <span className={shell} aria-hidden>
      {name === "bolt" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      )}
      {name === "bulb" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 3-2 5-3 6v1H8v-1c-1-1-3-3-3-6a7 7 0 017-7z" />
        </svg>
      )}
      {name === "shield" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        </svg>
      )}
      {name === "idcard" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <circle cx="9" cy="11" r="2" />
          <path d="M13 10h4M13 14h4" />
        </svg>
      )}
      {name === "faceframe" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <circle cx="10" cy="11" r="1" />
          <circle cx="14" cy="11" r="1" />
          <path d="M9 15c.8.7 1.8 1 3 1s2.2-.3 3-1" />
        </svg>
      )}
      {name === "fingerprint" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 11c0 3-1 5-3 7M12 8c2 0 3 2 3 5v2M8 14c0 2 1 4 2 5M16 14v2c0 2-1 3-2 4M9 4c2-1 4-1 6 0" />
        </svg>
      )}
      {name === "wifi" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12.55a11 11 0 0114.08 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
        </svg>
      )}
    </span>
  );
}

function ReaderSpecColumnGlyph({ name }: { name: (typeof readerSpecificationColumns)[number]["specIcon"] }) {
  const wrap = "mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600";
  const c = "h-5 w-5";
  return (
    <span className={wrap} aria-hidden>
      {name === "monitor" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      )}
      {name === "users" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2" />
          <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
          <path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" />
        </svg>
      )}
      {name === "chart" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19h16M7 16V9M12 16V5M17 16v-5" />
        </svg>
      )}
      {name === "face" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="10" r="3" />
          <path d="M6 18c0-3.3 3-6 6-6s6 2.7 6 6" />
        </svg>
      )}
      {name === "chip" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="7" y="7" width="10" height="10" rx="1" />
          <path d="M7 10H4M7 14H4M20 10h-3M20 14h-3M10 7V4M14 7V4M10 20v-3M14 20v-3" />
        </svg>
      )}
      {name === "lock" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 018 0v3" />
        </svg>
      )}
    </span>
  );
}

export default function BiometricAccessControlPage() {
  return (
    <>
      <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
        <motion.section
          className="relative w-full overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/95 via-white to-sky-50/35 pt-8 sm:pt-10 lg:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-300/[0.18] blur-3xl" />
            <div className="absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-blue-400/[0.12] blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-px w-[min(90%,56rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />
          </div>

          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
          >
            <div className={`relative min-h-[340px] w-full sm:min-h-[390px] lg:min-h-[430px] ${SPLIT_HERO_MOBILE_STACK}`}>
              <SolutionHeroWaveDecor className="z-[1]" />
              <div
                className={`relative z-[2] mt-10 h-52 w-full sm:h-60 ${SPLIT_HERO_MOBILE_MEDIA_ORDER} lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 ${SPLIT_HERO_MEDIA_MR}`}
              >
                <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-400/25 via-blue-500/15 to-indigo-600/20 blur-2xl lg:block lg:rounded-l-[2rem] lg:rounded-r-none" aria-hidden />
                <div className="relative h-full overflow-hidden lg:h-full">
                  <video
                    className="absolute inset-0 h-full w-full object-cover mt-[2%] object-[center_35%] sm:object-center lg:object-[center_40%]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={smartAccessShowcaseImage}
                    aria-label="Enterprise biometric access devices in a modern secure facility"
                  >
                    <source src={smartAccessShowcaseVideo} type="video/mp4" />
                  </video>
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-12 lg:block lg:w-32 lg:from-white lg:via-white/90"
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/[0.06] to-transparent lg:hidden" aria-hidden />
                </div>
                <VideoLivePopups
                  popups={[
                    {
                      position: "top-left",
                      label: "Live",
                      className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:top-7 xl:-left-15",
                      title: "Access secured",
                      accent: "emerald",
                    },
                    {
                      position: "bottom-right",
                      className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-0 xl:-right-2",
                      label: "Verified",
                      title: "Face + fingerprint",
                      subtitle: "Anti-spoof active",
                      variant: "icon",
                      icon: "fingerprint",
                      accent: "blue",
                    },
                  ]}
                />
              </div>
              <div className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 ${SPLIT_HERO_MOBILE_COPY_ORDER}`}>
                <div
                  className={`max-w-3xl px-2 py-8 sm:px-4 sm:py-10 lg:max-w-xl lg:py-16 lg:pr-8 ${SPLIT_HERO_COPY_ML}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-800 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/10 backdrop-blur-md">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" aria-hidden />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" aria-hidden />
                      </span>
                      Face Recognition Terminals
                    </span>
                  </motion.div>
                  <motion.h1 className="home-display-heading inops-type-hero mt-5 text-slate-900 sm:mt-6"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
                  >
                    Face Recognition Attendance System{" "}
                    <span className="font-semibold text-[color:var(--inops-blue)]">
                      for Factories
                    </span>
                  </motion.h1>
                  <motion.p
                    className={`mt-5 max-w-xl ${inopsUi.sectionSubtitle}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.14 }}
                  >
                    Enterprise face recognition terminals for factory gates — liveness detection, CLMS and HRIS integration, multi-site ready.
                  </motion.p>
                  <motion.div
                    className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                  >
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/30 transition hover:bg-blue-700 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    >
                      Get a Quote
                    </Link>
                    <Link
                      href="/biometric-devices"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:-translate-y-0.5"
                    >
                      Compare Devices
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* <section id="device-categories" className="border-t border-gray-200 py-8 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-slate-900">Device Categories</h2>
              <p className="mt-3 text-base text-gray-500 sm:text-lg">
                Flexible authentication methods designed for different operational needs.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {deviceCategoryCards.map((card, idx) => (
                <motion.article
                  key={card.title}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.05 }}
                >
                  <div className="relative h-44 bg-gray-50 sm:h-48">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain object-center p-2"
                      sizes="(max-width: 1280px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center text-gray-500">
                        {card.icon === "face" && (
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <rect x="4" y="4" width="16" height="16" rx="3" />
                            <circle cx="9" cy="10" r="1" />
                            <circle cx="15" cy="10" r="1" />
                            <path d="M8 15c1.1.9 2.3 1.2 4 1.2s2.9-.3 4-1.2" />
                          </svg>
                        )}
                        {card.icon === "finger" && (
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path d="M12 3a3 3 0 013 3v5M8.5 8V7a3.5 3.5 0 017 0v6M5 12v2a7 7 0 0014 0v-2" />
                          </svg>
                        )}
                        {card.icon === "card" && (
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <rect x="3" y="6" width="18" height="12" rx="2" />
                            <path d="M3 10h18" />
                          </svg>
                        )}
                        {card.icon === "kiosk" && (
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <rect x="7" y="3" width="10" height="18" rx="2" />
                            <path d="M10 7h4M10 11h4M10 15h4" />
                          </svg>
                        )}
                      </span>
                      <h3 className="text-slate-900">{card.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{card.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section> */}

        <section
          id="biometric-platform-strengths"
          className="relative overflow-hidden border-t border-slate-200/90 bg-gradient-to-b from-slate-50/95 via-white to-white py-10 lg:py-12"
          aria-labelledby="biometric-platform-strengths-heading"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-400/[0.11] blur-3xl" />
            <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-indigo-400/[0.09] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800 shadow-sm shadow-blue-500/5 ring-1 ring-blue-500/10 backdrop-blur-sm">
                Platform strengths
              </span>
              <h2 id="biometric-platform-strengths-heading" className="mt-4 text-balance text-slate-900">
                Built for speed, accuracy, and reliability
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Enterprise-grade biometrics tuned for throughput, trust, and uptime on the ground.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-6">
              {biometricPlatformStrengthCards.map((card, i) => {
                const t = biometricStrengthThroughput[card.tone];
                const step = String(i + 1).padStart(2, "0");
                return (
                  <ThroughputMetricCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    chip={card.tag}
                    metric={step}
                    accentBar={t.accentBar}
                    iconWrap={t.iconWrap}
                    hoverGlow={t.hoverGlow}
                    index={i}
                    icon={<BiometricPlatformStrengthGlyph name={card.icon} className="text-current" />}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="reader-specs"
          className="border-t  border-gray-200 py-10 lg:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50/40"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-12 ">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <motion.div
                className="text-left"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm">
                  <svg className="h-3.5 w-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                  </svg>
                  Face recognition device
                </span>
                <h2 className="mt-5 text-slate-900">
                  Touchless face recognition for{" "}
                  <span className="text-blue-600">secure &amp; fast access</span>
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                  Visible light facial recognition with advanced anti-spoofing and high-speed authentication for modern access control.
                </p>

                {/* <div className="mt-6"> */}
                  {/* make a card */}
                  {/* <div className="rounded-2xl border border-slate-200/80 bg-white shadow-[0_30px_80px_-44px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5">
                    <div className="p-4">
                      <h3 className="text-base font-semibold leading-snug tracking-tight text-slate-900 sm:text-lg">
                        Face terminals for factory gates
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600/95">
                        Enterprise face recognition terminals — Outdoor-rated equivalents — built for industrial gates.                      </p>
                    </div>
                  </div>
                
                </div> */}
              </motion.div>

              <motion.div
                className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.05 }}
              >
                <div
                  className="pointer-events-none absolute -right-8 top-10 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl sm:h-80 sm:w-80"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -left-8 bottom-6 h-44 w-44 rounded-full bg-sky-100/55 blur-2xl"
                  aria-hidden
                />

                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_30px_80px_-44px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5">
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-sky-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="relative aspect-[16/11] w-full bg-gradient-to-br from-slate-50 via-white to-sky-50/40">
                    <video
                      className="absolute inset-0 h-full w-full object-contain p-5 sm:p-7"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={touchlessFaceReaderShowcaseImage}
                      aria-label="Touchless face recognition terminal on display with secure access branding"
                    >
                      <source src={touchlessFaceReaderShowcaseVideo} type="video/mp4" />
                    </video>
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_55%_45%,rgba(59,130,246,0.14),transparent_60%)]" aria-hidden />
                    <VideoLivePopups
                      popups={[
                        {
                          position: "bottom-right",
                          label: "Anti-spoof",
                          title: "Visible-light scan",
                          className:
                            "bottom-8 right-8 sm:bottom-10 sm:right-10 lg:bottom-12 lg:right-12 xl:bottom-10 xl:right-10",
                          variant: "icon",
                          icon: "shield",
                          accent: "blue",
                        },
                      ]}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
              {readerSpecHighlights.map((item, idx) => {
                const visual = readerFeatureAccentVisual[item.accent];
                return (
                  <motion.div
                    key={item.title}
                    className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 ${visual.card}`}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.05 }}
                  >
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${visual.topBar}`}
                      aria-hidden
                    />
                    <div
                      className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl ${visual.orb}`}
                      aria-hidden
                    />
                    <div
                      className={`pointer-events-none absolute -bottom-10 -left-8 h-28 w-28 rounded-full blur-2xl opacity-60 ${visual.orb}`}
                      aria-hidden
                    />
                    <div className="relative flex gap-4">
                      <ReaderFeatureGlyph name={item.featureIcon} accent={item.accent} />
                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-base font-semibold leading-snug tracking-tight text-slate-900 sm:text-base">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600/95">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
              <motion.div
                className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase }}
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600" aria-hidden>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 4h4l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
                      <path d="M6 12h12" />
                    </svg>
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">Specifications</p>
                </div>
                <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                  {readerSpecificationColumns.map((row) => (
                    <div key={row.label} className="flex flex-col sm:items-start xl:items-center text-center sm:text-left xl:text-center">
                      <ReaderSpecColumnGlyph name={row.specIcon} />
                      <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">{row.label}</dt>
                      <dd className="mt-1 text-sm font-semibold leading-snug text-slate-900">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>

              <motion.div
                className="rounded-2xl bg-gradient-to-b from-blue-950 to-slate-900 p-6 text-white shadow-xl sm:p-8"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: 0.06 }}
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sky-300" aria-hidden>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-white">Advanced capabilities</p>
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200">
                  {readerAdvancedCapabilities.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.4, ease: smoothEase, delay: 0.08 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-9 py-3.5 text-xs font-bold tracking-widest text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
              >
                Request a demo
                <span className="ml-2 text-base leading-none" aria-hidden>
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 bg-white px-9 py-3.5 text-xs font-bold tracking-widest text-blue-700 transition hover:bg-blue-50"
              >
                Contact sales
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-slate-200/90 bg-gradient-to-b from-white via-slate-50/60 to-sky-50/35 py-10 lg:py-12">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute left-[20%] top-24 h-56 w-56 rounded-full bg-blue-400/[0.09] blur-3xl" />
            <div className="absolute bottom-16 right-[15%] h-64 w-64 rounded-full bg-indigo-400/[0.08] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800 shadow-sm ring-1 ring-blue-500/10 backdrop-blur-sm">
                End-to-end flow
              </span>
              <h2 className="mt-4">
                <span className="text-slate-900">Seamless System Flow</span>
              </h2>
              <p className="mt-4 inops-ui-subtitle">
                Integrated authentication that bridges hardware and workforce management software.
              </p>
            </motion.div>

            <motion.div
              className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white/90 p-6 shadow-[0_24px_48px_-28px_rgba(15,23,42,0.12)] ring-1 ring-white backdrop-blur-md sm:p-8 lg:mt-12 lg:p-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.04)_0%,transparent_45%,rgba(99,102,241,0.05)_100%)]" aria-hidden />

              <div className="relative hidden lg:block">
                <div
                  className="pointer-events-none absolute left-[6%] right-[6%] top-[1.85rem] z-0 h-[3px] rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-500 opacity-55"
                  aria-hidden
                />
                <div className="relative z-10 grid grid-cols-5 gap-4">
                  {systemFlowSteps.map((item, idx) => (
                    <motion.div
                      key={item.step}
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.38, ease: smoothEase, delay: idx * 0.06 }}
                    >
                      <span
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-sm font-bold tabular-nums text-white shadow-lg shadow-slate-900/15 ring-4 ring-white`}
                      >
                        {item.step}
                      </span>
                      <p className="mt-5 max-w-[9.5rem] text-sm font-semibold leading-snug text-slate-900">{item.title}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative space-y-0 lg:hidden">
                {systemFlowSteps.map((item, idx) => (
                  <motion.div
                    key={item.step}
                    className="relative flex gap-4 last:pb-0"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.38, ease: smoothEase, delay: idx * 0.05 }}
                  >
                    <div className="flex w-14 shrink-0 flex-col items-center">
                      <span
                        className={`relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-xs font-bold tabular-nums text-white shadow-md ring-4 ring-white`}
                      >
                        {item.step}
                      </span>
                      {idx < systemFlowSteps.length - 1 ? (
                        <div
                          className="mt-1 min-h-[2.25rem] w-[3px] flex-1 rounded-full bg-gradient-to-b from-blue-400 via-indigo-400 to-violet-500 opacity-70"
                          aria-hidden
                        />
                      ) : null}
                    </div>
                    <div className="min-w-0 pb-8 pt-1">
                      <p className="text-base font-semibold leading-snug text-slate-900">{item.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-gray-200 py-6 lg:py-10 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-slate-900">Deployment Environments</h2>
              <p className="mt-3 text-base text-gray-500 sm:text-lg">
                Scalable solutions for every sector.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {[
                {
                  title: "Entry & Exit Access Control",
                  subtitle: "Secure turnstiles and gates for mass workforce entry.",
                  image:
                    "/images/77820a_f483a36175aa4407b8e94126cafb9e71~mv2.avif",
                  route: "/turnstiles-access" 
                },
                {
                  title: "Workforce Attendance Tracking",
                  subtitle: "Automated logging for payroll and HR management.",
                  image:
                    "/Gemini_Generated_Image_qpp7k7qpp7k7qpp7.png",
                  route:"cctv-attendance"
                },
                {
                  title: "Restricted Area Access",
                  subtitle: "Multi-factor authentication for sensitive zones.",
                  image:
                    "/images/multifactor authentication hero.webp",
                route:"/turnstiles-access"
                },
                {
                  title: "High-Volume Environments",
                  subtitle: "Reliable performance for shift changes in logistics.",
                  image:
                    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
                  route :"industry/logistics"
                  },
              ].map((card, idx) => (
                <motion.article
                  key={card.title}
                  className="group relative overflow-hidden rounded-xl border border-gray-200"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: idx * 0.05 }}
                >
                  <div className="relative aspect-[16/8]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" aria-hidden />
                 <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                 <Link href={card.route} className="hover:underline">
                    <h3 className="text-white transition-colors hover:text-blue-300">{card.title}</h3>
                </Link>
              <p className="mt-1 text-sm text-white/85">{card.subtitle}</p>
</div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-indigo-200/40 bg-gradient-to-b from-white via-violet-50/25 to-cyan-50/30 py-12 lg:py-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute right-[8%] top-16 h-72 w-72 rounded-full bg-violet-400/[0.12] blur-3xl" />
            <div className="absolute bottom-10 left-[5%] h-64 w-64 rounded-full bg-cyan-400/[0.1] blur-3xl" />
            <div className="absolute left-1/2 top-1/3 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex rounded-full border border-violet-200/70 bg-gradient-to-r from-white via-violet-50/80 to-indigo-50/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] shadow-sm ring-1 ring-violet-500/15 backdrop-blur-sm">
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">Hardware DNA</span>
              </span>
              <h2 className="mt-5 text-slate-900">
                <span className=" text-black">Universal Device Excellence</span>
              </h2>
              <p className="mt-4 max-w-2xl inops-ui-subtitle">
                Built for harsh floors, heavy traffic, and always-on operations, without sacrificing precision.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {(
                [
                  {
                    title: "Rugged Industrial Design",
                    description:
                      "Encased in industry-grade aluminum and impact-resistant glass, our devices are IP65 rated for dust and humidity protection.",
                    accent: "amber" as const,
                  },
                  {
                    title: "High-Speed Processing",
                    description:
                      "Equipped with dedicated NPU (Neural Processing Unit) cores for lightning-fast biometric template matching.",
                    accent: "cyan" as const,
                  },
                  {
                    title: "Enterprise Capacity",
                    description:
                      "Designed for massive deployments, managing distributed data across thousands of devices from a central hub.",
                    accent: "violet" as const,
                  },
                ] as const
              ).map((item, idx) => {
                const v = readerFeatureAccentVisual[item.accent];
                return (
                  <motion.article
                    key={item.title}
                    className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${v.card}`}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.42, ease: smoothEase, delay: idx * 0.06 }}
                  >
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${v.topBar}`}
                      aria-hidden
                    />
                    <div
                      className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl ${v.orb}`}
                      aria-hidden
                    />
                    <div
                      className={`pointer-events-none absolute -bottom-10 -left-8 h-28 w-28 rounded-full blur-2xl opacity-70 ${v.orb}`}
                      aria-hidden
                    />
                    <h3 className="relative text-base font-semibold tracking-tight text-slate-900 sm:text-lg">{item.title}</h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-slate-600/95">{item.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

<section className="relative overflow-hidden border-t border-cyan-200/35 bg-gradient-to-b from-sky-50/50 via-white to-indigo-50/40 py-12 lg:py-16">
  <div className="pointer-events-none absolute inset-0" aria-hidden>
    <div className="absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-indigo-400/[0.12] blur-3xl" />
    <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-cyan-400/[0.11] blur-3xl" />
    <div className="absolute right-1/4 top-1/2 h-48 w-48 rounded-full bg-fuchsia-400/[0.08] blur-3xl" />
  </div>
  <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, ease: smoothEase }}
      >
        <span className="inline-flex rounded-full border border-cyan-200/70 bg-gradient-to-r from-white to-sky-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] shadow-sm ring-1 ring-cyan-500/15">
          <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Integrations</span>
        </span>
        <h2 className="mt-5 text-black">
          Seamlessly Connected to{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text font-semibold text-transparent">Your Systems</span>
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
          Modern APIs and native integrations ensure your data moves where you need it, when you need it.
        </p>

        <ul className="mt-8 list-none space-y-4 p-0">
          {[
            {
              title: "API-Based Integration",
              description: "RESTful APIs for custom software hooks.",
            },
            {
              title: "Real-time Data Sync",
              description: "Zero-latency updates for immediate attendance visibility.",
            },
            {
              title: "Centralized Dashboard",
              description: "Manage all hardware globally from a single browser interface.",
            },
          ].map((item) => (
            <li key={item.title} className="flex gap-4 py-2">
              <span
                className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-blue-600"
                aria-hidden
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M6 12l4 4 8-8" />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-base font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-indigo-200/40 bg-gradient-to-br from-white via-slate-50/50 to-sky-50/60 p-6 shadow-[0_28px_70px_-40px_rgba(79,70,229,0.3)] ring-1 ring-indigo-500/10 backdrop-blur-md sm:p-8 lg:mt-30"
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 opacity-95"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,rgba(59,130,246,0.07)_0%,transparent_50%,rgba(139,92,246,0.06)_100%)]" aria-hidden />
        <p className="relative text-center text-xs font-bold uppercase tracking-[0.22em] text-transparent bg-gradient-to-r from-slate-500 via-indigo-500 to-violet-500 bg-clip-text">
          Data fabric
        </p>
        <div className="relative mt-7 grid grid-cols-2 gap-3">
          {(
            [
              {
                label: "Mobile App",
                accent: "cyan" as const,
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="1.75" />
                    <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round" />
                    <line x1="9" y1="6" x2="15" y2="6" strokeWidth="1.75" />
                  </svg>
                ),
                route: "/mobile-app-attendance"
              },
              {
                label: "ATTENDANCE",
                accent: "indigo" as const,
                icon: (
                  <>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </>
                ),
                route: "/cctv-attendance"
              },
              {
                label: "HRMS/PAYROLL",
                accent: "fuchsia" as const,
                icon: (
                  <>
                    <rect x="3" y="6" width="18" height="12" rx="2" />
                    <path d="M3 10h18" />
                  </>
                ),
                route: "/hris"
              },
              {
                label: "REPORTS",
                accent: "emerald" as const,
                icon: <path d="M4 19h16M7 16V8M12 16V5M17 16v-4" />,
                route: "/face-recognition-attendance"
              },
            ] as const
          ).map((node) => {
            const v = readerFeatureAccentVisual[node.accent];
            return (
              <Link
                key={node.label}
                href={node.route}
                className={`group relative overflow-hidden rounded-xl border p-4 text-center transition-all duration-300 hover:-translate-y-0.5 ${v.miniCell}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${v.topBar}`}
                  aria-hidden
                />
                <div
                  className={`pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full blur-xl ${v.orb}`}
                  aria-hidden
                />
                <span
                  className={`relative mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl ${v.iconShell}`}
                  aria-hidden
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {node.icon}
                  </svg>
                </span>
                <p className="relative mt-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-xs group-hover:text-slate-900 transition-colors duration-300">
                  {node.label}
                </p>
              </Link>
            );
          })}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <span
              className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-indigo-600 to-fuchsia-600 opacity-35 blur-xl"
              aria-hidden
            />
            <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-indigo-600 to-violet-700 text-lg font-bold text-white shadow-xl shadow-indigo-500/45 ring-4 ring-white/90">
              →
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

        <section className="relative overflow-hidden border-t border-violet-200/35 bg-gradient-to-b from-fuchsia-50/20 via-white to-emerald-50/25 pt-12 lg:pt-16 pb-12 lg:pb-0">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute left-1/2 top-0 h-[420px] w-[min(100%,56rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(99,102,241,0.12),transparent_65%)]" />
            <div className="absolute bottom-0 right-[10%] h-56 w-56 rounded-full bg-emerald-400/[0.1] blur-3xl" />
            <div className="absolute bottom-20 left-[8%] h-48 w-48 rounded-full bg-amber-400/[0.09] blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex rounded-full border border-emerald-200/70 bg-gradient-to-r from-white to-emerald-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] shadow-sm ring-1 ring-emerald-500/15">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Why InOps</span>
              </span>
              <h2 className="mt-5">
                <span className="text-black">Why Choose InOps?</span>
              </h2>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
              {(
                [
                  {
                    title: "Improved Security",
                    description:
                      "Eliminate buddy punching and unauthorized access with ironclad biometric verification.",
                    icon: "shield" as const,
                    accent: "emerald" as const,
                  },
                  {
                    title: "Accurate Tracking",
                    description:
                      "Capture precise time-stamps down to the second for fair and accurate payroll processing.",
                    icon: "clock" as const,
                    accent: "cyan" as const,
                  },
                  {
                    title: "Support",
                    description:
                      "SLA-backed maintenance, remote device monitoring, and on-site engineers — every reader covered under one AMC.",
                    icon: "bolt" as const,
                    accent: "amber" as const,
                    route:"services/biometric-amc"
                  },
                  {
                    title: "Make in India Hardware",
                    description:
                      "Locally manufactured and supported biometric terminals — faster spares, no import lead times, procurement-ready for PSU and defence tenders.",
                    icon: "users" as const,
                    accent: "violet" as const,
                  },
                ] as const
              ).map((item, idx) => {
                const v = readerFeatureAccentVisual[item.accent];
                return (
                  <motion.article
                    key={item.title}
                    className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${v.card}`}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.42, ease: smoothEase, delay: idx * 0.05 }}
                  >
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${v.topBar}`}
                      aria-hidden
                    />
                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl ${v.orb}`}
                      aria-hidden
                    />
                    <span
                      className={`pointer-events-none absolute -right-0.5 top-3 z-[1] bg-gradient-to-r bg-clip-text font-mono text-[2.35rem] font-black leading-none tracking-tighter text-transparent opacity-[0.68] sm:right-1 sm:top-4 sm:text-[2.85rem] sm:opacity-[0.75] ${v.topBar}`}
                      aria-hidden
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={`relative z-[2] inline-flex h-11 w-11 items-center justify-center rounded-xl ${v.iconShell}`}>
                      {item.icon === "shield" && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                        </svg>
                      )}
                      {item.icon === "clock" && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                      )}
                      {item.icon === "bolt" && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                        </svg>
                      )}
                      {item.icon === "users" && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <circle cx="9" cy="8" r="3" />
                          <circle cx="17" cy="9" r="2" />
                          <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
                          <path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" />
                        </svg>
                      )}
                    </span>
                    <h3 className="relative z-[2] mt-4 pr-14 text-base font-semibold tracking-tight text-slate-900 sm:pr-16 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="relative z-[2] mt-2 text-sm leading-relaxed text-slate-600/95 sm:pr-4">{item.description}</p>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-950 via-[#0f172a] to-blue-950 p-8 shadow-[0_32px_64px_-28px_rgba(15,23,42,0.6)] ring-1 ring-white/10 sm:p-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
            >
              <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-indigo-600/25 blur-3xl" aria-hidden />
              <h3 className="relative text-white">Designed for Every Environment</h3>
              <p className="relative mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                From climate-controlled executive offices to the dusty floors of manufacturing plants, our hardware is engineered to perform without compromise.
              </p>

              <div className="relative mt-8 flex flex-wrap gap-2.5 sm:gap-3">
                {[
                  "Corporate Offices",
                  "Industrial Plants",
                  "Large Warehouses",
                  "Indoor & Outdoor Support",
                  "Multi-location Networking",
                  "Battery Backup Ready",
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-100 shadow-sm backdrop-blur-sm transition hover:border-sky-400/40 hover:bg-white/[0.1] sm:text-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* H2 content sections — SEO depth */}
        {/* <section className="border-t border-slate-100 bg-white py-12 lg:py-20" aria-labelledby="face-terminals-factory-gates-heading">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.48, ease: smoothEase }}>
              <h2 id="face-terminals-factory-gates-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Face terminals for factory gates
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                InOps deploys enterprise-grade face recognition terminals — ZKTeco face series and equivalent outdoor-rated readers — across factory gates and plant entrances. Purpose-built for industrial throughput: each lane delivers sub-second reads, stainless-steel housing rated for outdoor duty, and infrared sensing that performs in direct sunlight or low light. Throughput per lane supports high-density shift changes without bottlenecks.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Enrollment is a one-time process: a single biometric capture at your HR desk or gate kiosk, digital consent collected in the worker's preferred language, and the identity becomes active across every device on site — gate, canteen terminal, attendance reader — with no re-registration required.
              </p>
            </motion.div>
          </div>
        </section> */}

        {/* <section className="border-t border-slate-100 bg-slate-50 py-12 lg:py-20" aria-labelledby="face-accuracy-factory-heading">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.48, ease: smoothEase }}>
              <h2 id="face-accuracy-factory-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                How accurate is face recognition attendance in factory conditions?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Accuracy in a lobby and accuracy at a shift-change gate are different problems: dust, backlight, helmets, and 300 workers in 20 minutes. InOps publishes real deployment accuracy data in our{" "}
                <a href="/blog/biometric-attendance-accuracy-report-india-2026" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                  biometric attendance accuracy report
                </a>{" "}
                rather than quoting lab numbers.
              </p>
            </motion.div>
          </div>
        </section> */}

        {/* <section className="border-t border-slate-100 bg-white py-12 lg:py-20" aria-labelledby="face-one-identity-heading">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.48, ease: smoothEase }}>
              <h2 id="face-one-identity-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                One identity across all devices
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                InOps runs a single identity engine across all capture modes: face terminals, fingerprint readers, CCTV-based AI attendance, QR, and card — one enrolled identity, one attendance record, one compliance view per worker, per contractor, per site. For sites that cannot place hardware at every capture point, our{" "}
                <a href="/cctv-attendance" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                  CCTV attendance system
                </a>{" "}
                captures attendance without dedicated terminals at scale. For physical access control where the barrier arm must not turn, our{" "}
                <a href="/turnstiles-access" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                  turnstile access control
                </a>{" "}
                integrates the same biometric identity into lane enforcement.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-slate-50 py-12 lg:py-20" aria-labelledby="face-recognition-compliance-heading">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.48, ease: smoothEase }}>
              <h2 id="face-recognition-compliance-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                From recognition to compliance
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                The reader identifies; the rules decide. Every recognition event checks induction status, medical fitness, licence validity, and BGV clearance via{" "}
                <a href="/contract-labour-management/iddion-regx-modules/gate-compliance" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                  gate compliance and auto-blocking
                </a>{" "}
                — a failed check denies entry and logs the reason in real time. Biometric attendance and compliance gate logic share the same underlying record, so a worker blocked at the gate is automatically excluded from that shift's attendance and payroll.
              </p>
            </motion.div>
          </div>
        </section> */}

        {/* Bridging section — broader biometric attendance theme, cross-links to CCTV and mobile */}
        {/* <section
          aria-labelledby="biometric-attendance-manufacturing-heading"
          className="border-t border-slate-100 bg-slate-50/60 px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
        >
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.48, ease: smoothEase }}
            >
              <h2
                id="biometric-attendance-manufacturing-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              >
                Biometric Attendance for Manufacturing: Face Recognition vs. Fingerprint vs. CCTV
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Face recognition terminals are the primary capture mode for most Indian manufacturing gates — contactless, fast, and unaffected by the worn or oil-covered fingertips common in manual work. But a site-wide biometric attendance strategy rarely stops at one method.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                For wide plant entrances, yard areas, or shop floors where mounting a terminal at every capture point isn't practical,{" "}
                <Link href="/cctv-attendance" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
                  CCTV-based attendance
                </Link>{" "}
                reads your existing camera feeds — the same face identity, without additional hardware at every gate. For distributed worksites, remote construction zones, or workforce that moves between locations,{" "}
                <Link href="/mobile-app-attendance" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
                  mobile app attendance
                </Link>{" "}
                captures face verification with GPS validation and no fixed infrastructure at all.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                All three modes — face terminal, CCTV, and mobile — feed the same identity engine. A worker enrolled once is recognised by every capture method, their attendance consolidated into a single record per shift, with the same compliance checks and payroll output regardless of where or how the recognition happened.
              </p>
            </motion.div>
          </div>
        </section> */}

        <section aria-labelledby="face-recognition-attendance-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              {/* <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-blue-800">
                Face Recognition Attendance FAQ
              </span> */}
              <h2 id="face-recognition-attendance-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Answers to common questions about facial biometrics, buddy punching prevention, low-light performance, access control integration, and industrial attendance.
              </p>
            </motion.div>

            <motion.div
              className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.35)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
            >
              <div className="divide-y divide-slate-200">
                {faceRecognitionAttendanceFaqItems.map((item, index) => (
                  <details key={item.question} className="group bg-white/70 px-5 py-5 open:bg-white sm:px-7 sm:py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:hidden">
                      <span className="flex min-w-0 gap-4">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold tabular-nums text-blue-700 ring-1 ring-blue-100">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-base font-semibold leading-snug text-slate-950 sm:text-lg">{item.question}</span>
                      </span>
                      <span
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg leading-none text-slate-600 transition group-open:rotate-45 group-open:border-blue-200 group-open:text-blue-700"
                        aria-hidden
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:pl-12 sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <SolutionPageClosingCta
          headingId="biometric-access-final-cta-heading"
          heading={
            <>
              Upgrade to <span className="font-semibold text-sky-100">intelligent access</span>
            </>
          }
          description="Choose the right combination of biometric devices based on your unique operational needs. Our experts are ready to help you design the perfect system."
          primaryLabel="Request a Demo"
          secondaryLabel="Talk to an Expert"
        />

      </div>
    </>
  );
}
