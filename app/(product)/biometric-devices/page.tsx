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

/* ─── Accent system — mirrors face page exactly ─── */
type FeatureAccent = "amber" | "violet" | "emerald" | "indigo" | "fuchsia" | "cyan";

const accentVisual: Record<
  FeatureAccent,
  { card: string; miniCell: string; topBar: string; orb: string; iconShell: string }
> = {
  amber: {
    card: "border-amber-200/45 bg-gradient-to-br from-amber-50/95 via-white to-orange-50/35 shadow-[0_22px_56px_-32px_rgba(245,158,11,0.45)] ring-1 ring-amber-400/15 hover:ring-amber-400/30 hover:shadow-[0_28px_64px_-28px_rgba(245,158,11,0.4)]",
    miniCell: "border-amber-200/40 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/15 shadow-[0_14px_40px_-22px_rgba(245,158,11,0.35)] ring-1 ring-amber-400/12 hover:-translate-y-0.5 hover:ring-amber-300/28 hover:shadow-[0_18px_44px_-18px_rgba(245,158,11,0.28)] transition-all duration-300",
    topBar: "from-amber-400 via-orange-500 to-rose-500",
    orb: "bg-amber-400/25",
    iconShell: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-600/35 ring-2 ring-white/25",
  },
  violet: {
    card: "border-violet-200/45 bg-gradient-to-br from-violet-50/95 via-white to-fuchsia-50/30 shadow-[0_22px_56px_-32px_rgba(139,92,246,0.38)] ring-1 ring-violet-400/15 hover:ring-violet-400/30 hover:shadow-[0_28px_64px_-28px_rgba(139,92,246,0.35)]",
    miniCell: "border-violet-200/40 bg-gradient-to-br from-violet-50/80 via-white to-fuchsia-50/15 shadow-[0_14px_40px_-22px_rgba(139,92,246,0.3)] ring-1 ring-violet-400/12 hover:-translate-y-0.5 hover:ring-violet-300/28 hover:shadow-[0_18px_44px_-18px_rgba(139,92,246,0.26)] transition-all duration-300",
    topBar: "from-violet-400 via-fuchsia-500 to-pink-500",
    orb: "bg-violet-400/22",
    iconShell: "bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-600/35 ring-2 ring-white/25",
  },
  emerald: {
    card: "border-emerald-200/45 bg-gradient-to-br from-emerald-50/95 via-white to-teal-50/35 shadow-[0_22px_56px_-32px_rgba(16,185,129,0.38)] ring-1 ring-emerald-400/15 hover:ring-emerald-400/30 hover:shadow-[0_28px_64px_-28px_rgba(16,185,129,0.35)]",
    miniCell: "border-emerald-200/40 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/15 shadow-[0_14px_40px_-22px_rgba(16,185,129,0.3)] ring-1 ring-emerald-400/12 hover:-translate-y-0.5 hover:ring-emerald-300/28 hover:shadow-[0_18px_44px_-18px_rgba(16,185,129,0.26)] transition-all duration-300",
    topBar: "from-emerald-400 via-teal-500 to-cyan-500",
    orb: "bg-emerald-400/22",
    iconShell: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-600/35 ring-2 ring-white/25",
  },
  indigo: {
    card: "border-indigo-200/45 bg-gradient-to-br from-indigo-50/95 via-white to-sky-50/30 shadow-[0_22px_56px_-32px_rgba(99,102,241,0.38)] ring-1 ring-indigo-400/15 hover:ring-indigo-400/30 hover:shadow-[0_28px_64px_-28px_rgba(99,102,241,0.35)]",
    miniCell: "border-indigo-200/40 bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/15 shadow-[0_14px_40px_-22px_rgba(99,102,241,0.3)] ring-1 ring-indigo-400/12 hover:-translate-y-0.5 hover:ring-indigo-300/28 hover:shadow-[0_18px_44px_-18px_rgba(99,102,241,0.26)] transition-all duration-300",
    topBar: "from-indigo-400 via-blue-500 to-sky-500",
    orb: "bg-indigo-400/22",
    iconShell: "bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-600/35 ring-2 ring-white/25",
  },
  fuchsia: {
    card: "border-fuchsia-200/45 bg-gradient-to-br from-fuchsia-50/95 via-white to-rose-50/30 shadow-[0_22px_56px_-32px_rgba(217,70,239,0.35)] ring-1 ring-fuchsia-400/15 hover:ring-fuchsia-400/30 hover:shadow-[0_28px_64px_-28px_rgba(217,70,239,0.32)]",
    miniCell: "border-fuchsia-200/40 bg-gradient-to-br from-fuchsia-50/80 via-white to-rose-50/15 shadow-[0_14px_40px_-22px_rgba(217,70,239,0.28)] ring-1 ring-fuchsia-400/12 hover:-translate-y-0.5 hover:ring-fuchsia-300/28 hover:shadow-[0_18px_44px_-18px_rgba(217,70,239,0.24)] transition-all duration-300",
    topBar: "from-fuchsia-400 via-rose-500 to-orange-400",
    orb: "bg-fuchsia-400/20",
    iconShell: "bg-gradient-to-br from-fuchsia-500 to-rose-600 text-white shadow-lg shadow-fuchsia-600/35 ring-2 ring-white/25",
  },
  cyan: {
    card: "border-cyan-200/45 bg-gradient-to-br from-cyan-50/95 via-white to-sky-50/40 shadow-[0_22px_56px_-32px_rgba(6,182,212,0.38)] ring-1 ring-cyan-400/15 hover:ring-cyan-400/30 hover:shadow-[0_28px_64px_-28px_rgba(6,182,212,0.35)]",
    miniCell: "border-cyan-200/40 bg-gradient-to-br from-cyan-50/80 via-white to-sky-50/20 shadow-[0_14px_40px_-22px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/12 hover:-translate-y-0.5 hover:ring-cyan-300/28 hover:shadow-[0_18px_44px_-18px_rgba(6,182,212,0.26)] transition-all duration-300",
    topBar: "from-cyan-400 via-sky-500 to-blue-600",
    orb: "bg-cyan-400/22",
    iconShell: "bg-gradient-to-br from-cyan-500 to-sky-600 text-white shadow-lg shadow-cyan-600/35 ring-2 ring-white/25",
  },
};

/* ─── 6 platform strength cards (5 product types + AMC) ─── */
const platformCards = [
  {
    title: "Face Recognition Terminals",
    description: "Contactless recognition in under a second. Built for throughput at shift change, with outdoor-rated options for plant gates — the right default for most Indian factory environments.",
    icon: "face" as const,
    tone: "sky" as const,
    tag: "Touchless",
  },
  {
    title: "Fingerprint Attendance Machines",
    description: "The established workhorse of Indian attendance. Lower cost per point, well suited to offices, admin blocks and lower-throughput indoor entries.",
    icon: "grid" as const,
    tone: "indigo" as const,
    tag: "Workhorse",
  },
  {
    title: "RFID & Card Readers",
    description: "For sites already standardised on cards, or as a second factor alongside biometrics. Integrates with existing card estates rather than replacing them.",
    icon: "shieldCheck" as const,
    tone: "emerald" as const,
    tag: "Flexible",
  },
  {
    title: "Turnstiles & Flap Barriers",
    description: "Physical enforcement at the gate, with any reader type mounted to the lane. Tripod, flap and full-height options.",
    icon: "users" as const,
    tone: "violet" as const,
    tag: "Secure",
  },
  {
    title: "Self-service Kiosks",
    description: "Enrolment, attendance regularisation, payslip access and leave requests — for workforces without company laptops.",
    icon: "kiosk" as const,
    tone: "cyan" as const,
    tag: "Self-service",
  },
  {
    title: "Biometric AMC",
    description: "Preventive maintenance, remote health monitoring, firmware management and on-site engineers. Spares held in India.",
    icon: "layers" as const,
    tone: "amber" as const,
    tag: "Maintained",
  },
] as const;

type PlatformTone = (typeof platformCards)[number]["tone"];
type PlatformIcon = (typeof platformCards)[number]["icon"];

const platformThroughput: Record<PlatformTone, { accentBar: string; iconWrap: string; hoverGlow: string }> = {
  sky: { accentBar: "from-sky-500 via-cyan-400 to-teal-400", iconWrap: "bg-sky-50 text-sky-600 ring-sky-500/20 group-hover:bg-sky-500 group-hover:text-white group-hover:ring-sky-400/40", hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(14,165,233,0.35)]" },
  indigo: { accentBar: "from-indigo-500 via-violet-500 to-purple-400", iconWrap: "bg-indigo-50 text-indigo-600 ring-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-400/40", hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(99,102,241,0.32)]" },
  emerald: { accentBar: "from-emerald-500 via-teal-400 to-cyan-400", iconWrap: "bg-emerald-50 text-emerald-600 ring-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white group-hover:ring-emerald-400/40", hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(16,185,129,0.32)]" },
  violet: { accentBar: "from-violet-500 via-fuchsia-500 to-pink-400", iconWrap: "bg-violet-50 text-violet-600 ring-violet-500/20 group-hover:bg-violet-600 group-hover:text-white group-hover:ring-violet-400/40", hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(139,92,246,0.35)]" },
  cyan: { accentBar: "from-cyan-500 via-sky-400 to-blue-500", iconWrap: "bg-cyan-50 text-cyan-600 ring-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white group-hover:ring-cyan-400/40", hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(6,182,212,0.32)]" },
  amber: { accentBar: "from-amber-500 via-orange-500 to-red-400", iconWrap: "bg-amber-50 text-amber-700 ring-amber-500/20 group-hover:bg-amber-500 group-hover:text-white group-hover:ring-amber-400/40", hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(245,158,11,0.38)]" },
};

function PlatformGlyph({ name, className }: { name: PlatformIcon; className: string }) {
  const c = `h-6 w-6 ${className}`;
  if (name === "face")
    return <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
  if (name === "grid")
    return <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3-1 5-3 7M12 8c2 0 3 2 3 5v2M8 14c0 2 1 4 2 5M16 14v2c0-2-1-3-2-4M9 4c2-1 4-1 6 0" /></svg>;
  if (name === "shieldCheck")
    return <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><rect x="4" y="5" width="16" height="14" rx="2" strokeWidth={2} /><circle cx="9" cy="11" r="2" strokeWidth={2} /><path strokeLinecap="round" strokeWidth={2} d="M13 10h4M13 14h4" /></svg>;
  if (name === "users")
    return <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><rect x="3" y="4" width="5" height="16" rx="1" strokeWidth={2} /><rect x="16" y="4" width="5" height="16" rx="1" strokeWidth={2} /><path strokeLinecap="round" strokeWidth={2} d="M8 12h8" /></svg>;
  if (name === "kiosk")
    return <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><rect x="5" y="2" width="14" height="20" rx="2" strokeWidth={2} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 6h6M9 10h6M12 18h.01" /></svg>;
  return <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>;
}

/* ─── Feature highlight cards ─── */
type FeatureIcon = "bolt" | "bulb" | "shield" | "idcard" | "fingerprint" | "wifi";

const featureHighlights: { title: string; text: string; icon: FeatureIcon; accent: FeatureAccent }[] = [
  { title: "Sub-second face recognition", text: "High-throughput gates handle 25–30 workers/min per lane — no queuing at shift change.", icon: "bolt", accent: "amber" },
  { title: "Industrial-grade housing", text: "IP65-rated, dust and humidity resistant — built for factory floors and outdoor plant entrances.", icon: "shield", accent: "emerald" },
  { title: "Multi-modal authentication", text: "Face, fingerprint, RFID and PIN in one estate — fallback modes for every gate scenario.", icon: "idcard", accent: "indigo" },
  { title: "Anti-spoofing built in", text: "Liveness detection prevents photo and 3D mask attacks — standard on face terminals.", icon: "fingerprint", accent: "fuchsia" },
  { title: "Offline buffer & auto-sync", text: "Stores punches locally, syncs on reconnect — no data loss at remote or low-connectivity sites.", icon: "bulb", accent: "violet" },
  { title: "Flexible connectivity", text: "TCP/IP, WiFi, Wiegand and RS485 — integrates with any existing access control infrastructure.", icon: "wifi", accent: "cyan" },
];

function FeatureGlyph({ name, accent }: { name: FeatureIcon; accent: FeatureAccent }) {
  const shell = `inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accentVisual[accent].iconShell}`;
  const c = "h-6 w-6";
  return (
    <span className={shell} aria-hidden>
      {name === "bolt" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>}
      {name === "bulb" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 3-2 5-3 6v1H8v-1c-1-1-3-3-3-6a7 7 0 017-7z" /></svg>}
      {name === "shield" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" /></svg>}
      {name === "idcard" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="5" width="16" height="14" rx="2" /><circle cx="9" cy="11" r="2" /><path d="M13 10h4M13 14h4" /></svg>}
      {name === "fingerprint" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 11c0 3-1 5-3 7M12 8c2 0 3 2 3 5v2M8 14c0 2 1 4 2 5M16 14v2c0-2-1-3-2-4M9 4c2-1 4-1 6 0" /></svg>}
      {name === "wifi" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0114.08 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" /></svg>}
    </span>
  );
}

/* ─── Spec table ─── */
type SpecIcon = "monitor" | "users" | "chart" | "face" | "chip" | "lock";

const deviceSpecs = [
  { label: "Display", value: '2.8" / 5" / 7" touch', specIcon: "monitor" as SpecIcon },
  { label: "Face capacity", value: "Up to 50,000 faces", specIcon: "users" as SpecIcon },
  { label: "Transactions", value: "Up to 200,000 logs", specIcon: "chart" as SpecIcon },
  { label: "Recognition", value: "Visible light + IR", specIcon: "face" as SpecIcon },
  { label: "Environment", value: "IP65 rated", specIcon: "chip" as SpecIcon },
  { label: "Auth modes", value: "Face / FP / card / PIN", specIcon: "lock" as SpecIcon },
] as const;

function SpecGlyph({ name }: { name: SpecIcon }) {
  const wrap = "mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600";
  const c = "h-5 w-5";
  return (
    <span className={wrap} aria-hidden>
      {name === "monitor" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>}
      {name === "users" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" /><path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" /></svg>}
      {name === "chart" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19h16M7 16V9M12 16V5M17 16v-5" /></svg>}
      {name === "face" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3" /><path d="M6 18c0-3.3 3-6 6-6s6 2.7 6 6" /></svg>}
      {name === "chip" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="7" y="7" width="10" height="10" rx="1" /><path d="M7 10H4M7 14H4M20 10h-3M20 14h-3M10 7V4M14 7V4M10 20v-3M14 20v-3" /></svg>}
      {name === "lock" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></svg>}
    </span>
  );
}

/* ─── FAQ — 14 items from brief ─── */
const faqItems = [
  {
    question: "What is a biometric device and how does it work for attendance?",
    answer: (
      <>
        A biometric device identifies a person by a physical characteristic — most commonly face or fingerprint — rather than by a card or PIN. For attendance it captures that identity at entry and exit and records the timestamp, so working hours are tied to a verified person rather than a transferable credential. The device sends each event to attendance software, where it becomes a shift record and eventually a payroll input.
      </>
    ),
  },
  {
    question: "Which is better for factories — fingerprint or face recognition?",
    answer: (
      <>
        Face recognition, in most industrial settings. Fingerprint readers fail on dry, damaged, oily or dirty fingers, which describes the hands of most manual workers by mid-shift. Every failed punch becomes a manual entry, and every manual entry becomes a payroll dispute. Fingerprint devices remain sensible for offices and low-throughput indoor points where hands are clean and volumes are modest.
      </>
    ),
  },
  {
    question: "How much does a biometric attendance machine cost?",
    answer: (
      <>
        Cost depends on modality, throughput, environment rating and volume. Fingerprint readers sit at the entry level, face terminals cost more per unit, and turnstile-integrated installations carry civil and installation costs alongside the device. We quote against a site survey rather than a price list, because the same headcount at two different gates often needs different hardware.
      </>
    ),
  },
  {
    question: "Which biometric device brands do you supply?",
    answer: (
      <>
        ZKTeco, eSSL and Realtime, plus turnstiles, flap barriers and access controllers. We also maintain and integrate mixed-brand estates originally supplied by others, which is the normal situation at plants that have bought hardware over several years.
      </>
    ),
  },
  {
    question: "Can biometric devices integrate with our existing attendance or HR software?",
    answer: (
      <>
        Yes. Devices feed the InOps attendance engine, and verified data can be exported to existing HR and payroll systems. Where a plant already runs an HRMS, the devices become the capture layer rather than a parallel system.
      </>
    ),
  },
  {
    question: "How many devices does a site need?",
    answer: (
      <>
        Determined by peak throughput, not headcount. A gate handling 800 workers within a 20-minute shift change needs several lanes or camera-based capture; the same 800 arriving across two hours may need one device. The site survey sizes this, and getting it wrong is the most common cause of queue complaints after deployment.
      </>
    ),
  },
  {
    question: "Do biometric devices work without internet connectivity?",
    answer: (
      <>
        Yes. Devices store punches locally and sync when the connection returns, which matters at remote plants, project sites and locations with unreliable links.
      </>
    ),
  },
  {
    question: "What happens if a device fails at a critical gate?",
    answer: (
      <>
        Multi-lane gates continue on the remaining readers. Single-reader gates are the real risk, which is why identifying single points of failure is part of both deployment planning and{" "}
        <Link href="/services/biometric-amc" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">AMC</Link>{" "}
        onboarding. Sites running mobile or camera-based capture can also fall back to those methods while a terminal is down.
      </>
    ),
  },
  {
    question: "Can one worker be enrolled once and recognised everywhere?",
    answer: (
      <>
        Yes. A single enrolment activates the worker&apos;s identity across every device on site — gate terminals, canteen counters, attendance points — and across plants in a multi-site deployment. Workers moving between sites or contractors are not re-enrolled, which matters most in contract workforces where movement is constant.
      </>
    ),
  },
  {
    question: "How is worker consent and biometric data handled?",
    answer: (
      <>
        Consent is captured digitally at enrolment, in the worker&apos;s preferred language, before any biometric template is created. Templates are access-controlled with configurable retention, and handling aligns with DPDP Act obligations. Workers can raise queries through the same channel used for enrolment.
</>
    ),
  },
  {
    question: "Are biometric templates the same as storing fingerprints or photographs?",
    answer: (
      <>
        No. Devices store a mathematical template derived from the biometric, not the image itself, and the template cannot be reversed into a usable fingerprint or photograph. This distinction matters when explaining the system to workers and works committees.
      </>
    ),
  },
  {
    question: "Who maintains the devices after installation?",
    answer: (
      <>
        Devices are covered under{" "}
        <Link href="/services/biometric-amc" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
          biometric AMC
        </Link>{" "}
        — preventive maintenance, remote monitoring, firmware updates and on-site engineer support across every site under one contract, including devices originally supplied by other vendors.
      </>
    ),
  },
  {
    question: "Can we add devices later without redoing everything?",
    answer: (
      <>
        Yes. Devices are added to the existing estate and inherit the same worker identities and rules. Adding a gate does not mean re-enrolling a workforce, which is one of the practical reasons to standardise the platform even when hardware brands differ.
      </>
    ),
  },
  {
    question: "What is a registered device (RD service) and do we need one?",
    answer: (
      <>
        Registered Device service applies to Aadhaar-based biometric authentication, where UIDAI requires devices to be registered and encrypted at source. It is relevant where Aadhaar authentication is specifically required; standard attendance and access control do not depend on it.
      </>
    ),
  },
] as const;

/* ─── Media ─── */
const heroVideo = mediaVideos.smartAccessShowcase;
const heroImage = "/WhatsApp Image 2026-04-29 at 3.18.32 PM.jpeg";
const deviceVideo = mediaVideos.touchlessFaceReaderDemo;
const deviceImage = "/images/Screenshot 2026-05-04 220326.png";

export default function BiometricDevicesPage() {
  return (
    <>
      <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">

        {/* ══════════════════════════════════════════
            HERO — split video/copy (face page pattern)
        ══════════════════════════════════════════ */}
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

              {/* Media */}
              <div className={`relative z-[2] mt-10 h-52 w-full sm:h-60 ${SPLIT_HERO_MOBILE_MEDIA_ORDER} lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 ${SPLIT_HERO_MEDIA_MR}`}>
                <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-400/25 via-blue-500/15 to-indigo-600/20 blur-2xl lg:block lg:rounded-l-[2rem] lg:rounded-r-none" aria-hidden />
                <div className="relative h-full overflow-hidden lg:h-full">
                  <video
                    className="absolute inset-0 h-full w-full object-cover mt-[2%] object-[center_35%] sm:object-center lg:object-[center_40%]"
                    autoPlay muted loop playsInline preload="metadata"
                    poster={heroImage}
                    aria-label="Industrial biometric devices — face terminals, fingerprint readers and turnstiles at factory gates"
                  >
                    <source src={heroVideo} type="video/mp4" />
                  </video>
                  <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-12 lg:block lg:w-32 lg:from-white lg:via-white/90" aria-hidden />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/[0.06] to-transparent lg:hidden" aria-hidden />
                </div>
                <VideoLivePopups
                  popups={[
                    { position: "top-left", label: "Live", className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:top-7 xl:-left-15", title: "Access secured", accent: "emerald" },
                    { position: "bottom-right", className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-0 xl:-right-2", label: "Verified", title: "Face + fingerprint", subtitle: "3,000+ devices managed", variant: "icon", icon: "fingerprint", accent: "blue" },
                  ]}
                />
              </div>

              {/* Copy */}
              <div className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 ${SPLIT_HERO_MOBILE_COPY_ORDER}`}>
                <div className={`max-w-3xl px-2 py-8 sm:px-4 sm:py-10 lg:max-w-xl lg:py-16 lg:pr-8 ${SPLIT_HERO_COPY_ML}`}>
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-800 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/10 backdrop-blur-md">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" aria-hidden />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" aria-hidden />
                      </span>
                      ZKTeco · eSSL · Realtime
                    </span>
                  </motion.div>

                  <motion.h1
                    className="home-display-heading inops-type-hero mt-5 text-slate-900 sm:mt-6"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
                  >
                    Biometric Attendance Machines &amp;{" "}
                    <span className="font-semibold text-[color:var(--inops-blue)]">
                      Access Control Devices
                    </span>
                  </motion.h1>

                  {/* Answer block — exact brief text */}
                  <motion.p
                    className={`mt-5 max-w-xl ${inopsUi.sectionSubtitle}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.14 }}
                  >
                    Face terminals, fingerprint readers, RFID and turnstiles from ZKTeco, eSSL and Realtime — supplied, installed and maintained across India. One attendance engine, every site. 3,000+ devices, 70+ sites since 2014.
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
                      href="/face-recognition-attendance"
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

        {/* ══════════════════════════════════════════
            H2 — What is a biometric device?
        ══════════════════════════════════════════ */}
        <section className="border-t border-slate-100 bg-white py-8 lg:py-10" aria-labelledby="what-is-biometric-heading">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <h2 id="what-is-biometric-heading" className="text-slate-900">What is a biometric device?</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  A biometric device identifies a person by a physical characteristic — face, fingerprint or iris — instead of a card, PIN or signature. In attendance and access control that matters for one reason: a card can be handed to a colleague and a PIN can be shared, but a face cannot. Every punch is tied to a verified individual, which is what turns attendance from a count into a record.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Industrial deployments use four device classes: face recognition terminals, fingerprint readers, RFID and card readers, and turnstiles that physically enforce the decision. Self-service kiosks extend the same identity to worker-facing functions like payslips, leave and attendance queries.
                </p>
              </motion.div>
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
              >
                {[
                  { label: "Face recognition", stat: "< 1 sec", sub: "per identity check" },
                  { label: "User capacity", stat: "50,000+", sub: "faces per terminal" },
                  { label: "Punch storage", stat: "200,000", sub: "logs offline per device" },
                  { label: "Auth modes", stat: "Face / FP / Card / PIN", sub: "in one estate" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{item.label}</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">{item.stat}</p>
                    <p className="text-xs text-slate-500">{item.sub}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            H2 — What biometric devices do we supply?
            (ThroughputMetricCard grid — 5 types + AMC)
        ══════════════════════════════════════════ */}
        <section
          id="devices"
          className="relative overflow-hidden border-t border-slate-200/90 bg-gradient-to-b from-slate-50/95 via-white to-white py-10 lg:py-12"
          aria-labelledby="devices-heading"
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
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800 shadow-sm ring-1 ring-blue-500/10 backdrop-blur-sm">
                Product groups
              </span>
              <h2 id="devices-heading" className="mt-4 text-balance text-slate-900">
                What biometric devices do we supply?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Four product groups, each integrating with the same InOps attendance engine — so a single enrolment covers every gate, canteen counter and site.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-6">
              {platformCards.map((card, i) => {
                const t = platformThroughput[card.tone];
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
                    icon={<PlatformGlyph name={card.icon} className="text-current" />}
                  />
                );
              })}
            </div>

            {/* Quick links */}
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.4, ease: smoothEase, delay: 0.1 }}
            >
              <Link href="/face-recognition-attendance" className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-xs font-semibold text-sky-700 transition hover:bg-sky-100">
                Face recognition attendance →
              </Link>
              <Link href="/turnstiles-access" className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-xs font-semibold text-violet-700 transition hover:bg-violet-100">
                Access control systems →
              </Link>
              <Link href="/self-service-kiosk" className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold text-cyan-700 transition hover:bg-cyan-100">
                Self-service kiosks →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            H2 — Which biometric device is right for your site?
            Device video + selection table + feature cards + spec table
        ══════════════════════════════════════════ */}
        <section
          id="selection"
          className="border-t border-gray-200 py-10 lg:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50/40"
          aria-labelledby="selection-heading"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              {/* Left — heading + table */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm">
                  <svg className="h-3.5 w-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" /></svg>
                  Device selection guide
                </span>
                <h2 id="selection-heading" className="mt-5 text-slate-900">
                  Which biometric device is{" "}
                  <span className="text-blue-600">right for your site?</span>
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Most Indian factories buy fingerprint readers by default and then fight attendance disputes for years, because manual and shop-floor work damages fingerprints. Face recognition costs more per device and less per year.
                </p>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full min-w-[480px] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="py-3 pr-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Situation</th>
                        <th className="py-3 pr-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Recommended</th>
                        <th className="py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          situation: "High-throughput plant gate, shift change crowding",
                          recommended: "Face terminal or CCTV capture",
                          why: "No queue, no contact, 25–30/min per lane",
                        },
                        {
                          situation: "Dusty, oily or wet environment",
                          recommended: "Face terminal",
                          why: "Fingerprints fail on damaged or contaminated fingers — the single most common cause of attendance disputes in manufacturing",
                        },
                        {
                          situation: "Indoor office or admin block",
                          recommended: "Fingerprint reader",
                          why: "Lower cost per point, adequate throughput",
                        },
                        {
                          situation: "Perimeter or high-security gate",
                          recommended: "Full-height turnstile + face terminal",
                          why: "Physical enforcement, no tailgating",
                        },
                        {
                          situation: "Distributed or moving worksites",
                          recommended: "Mobile app with face + GPS",
                          why: (
                            <>
                              No fixed hardware →{" "}
                              <Link href="/mobile-app-attendance" className="font-medium text-blue-600 hover:underline">mobile attendance</Link>
                            </>
                          ),
                        },
                        {
                          situation: "Existing camera coverage",
                          recommended: "CCTV-based capture",
                          why: (
                            <>
                              Reuses installed cameras →{" "}
                              <Link href="/cctv-attendance" className="font-medium text-blue-600 hover:underline">CCTV attendance</Link>
                            </>
                          ),
                        },
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-slate-100 transition-colors hover:bg-slate-50/70">
                          <td className="py-3.5 pr-4 text-slate-800 font-medium align-top">{row.situation}</td>
                          <td className="py-3.5 pr-4 align-top">
                            <span className="inline-flex rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/15">{row.recommended}</span>
                          </td>
                          <td className="py-3.5 text-slate-600 align-top">{row.why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Right — device video */}
              <motion.div
                className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.05 }}
              >
                <div className="pointer-events-none absolute -right-8 top-10 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl sm:h-80 sm:w-80" aria-hidden />
                <div className="pointer-events-none absolute -left-8 bottom-6 h-44 w-44 rounded-full bg-sky-100/55 blur-2xl" aria-hidden />
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_30px_80px_-44px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5">
                  <div className="relative aspect-[16/11] w-full bg-gradient-to-br from-slate-50 via-white to-sky-50/40">
                    <video
                      className="absolute inset-0 h-full w-full object-contain p-5 sm:p-7"
                      autoPlay muted loop playsInline preload="metadata"
                      poster={deviceImage}
                      aria-label="Touchless biometric face recognition terminal for industrial attendance and access control"
                    >
                      <source src={deviceVideo} type="video/mp4" />
                    </video>
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_55%_45%,rgba(59,130,246,0.14),transparent_60%)]" aria-hidden />
                    <VideoLivePopups
                      popups={[
                        { position: "bottom-right", label: "ZKTeco · eSSL · Realtime", title: "Multi-brand support", className: "bottom-8 right-8 sm:bottom-10 sm:right-10", variant: "icon", icon: "shield", accent: "blue" },
                      ]}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Feature highlight cards */}
            <div className="mt-12 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
              {featureHighlights.map((item, idx) => {
                const visual = accentVisual[item.accent];
                return (
                  <motion.div
                    key={item.title}
                    className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 ${visual.card}`}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.05 }}
                  >
                    <div className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${visual.topBar}`} aria-hidden />
                    <div className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl ${visual.orb}`} aria-hidden />
                    <div className={`pointer-events-none absolute -bottom-10 -left-8 h-28 w-28 rounded-full blur-2xl opacity-60 ${visual.orb}`} aria-hidden />
                    <div className="relative flex gap-4">
                      <FeatureGlyph name={item.icon} accent={item.accent} />
                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-base font-semibold leading-snug tracking-tight text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600/95">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Spec table + advanced capabilities */}
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
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4h4l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" /><path d="M6 12h12" /></svg>
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">Specifications</p>
                </div>
                <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                  {deviceSpecs.map((row) => (
                    <div key={row.label} className="flex flex-col sm:items-start xl:items-center text-center sm:text-left xl:text-center">
                      <SpecGlyph name={row.specIcon} />
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
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-white">Advanced capabilities</p>
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200">
                  {["WDMS centralised fleet management", "Remote firmware push across sites", "Multi-site enrolment sync", "Takeover AMC — any brand"].map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
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
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-9 py-3.5 text-xs font-bold tracking-widest text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700">
                Request a demo <span className="ml-2 text-base leading-none" aria-hidden>→</span>
              </Link>
              <Link href="/brands/zkteco" className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 bg-white px-9 py-3.5 text-xs font-bold tracking-widest text-blue-700 transition hover:bg-blue-50">
                ZKTeco devices
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            H2 — Brands we supply and support
        ══════════════════════════════════════════ */}
        <section className="border-t border-gray-200 py-6 lg:py-10 bg-white" aria-labelledby="brands-heading">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 id="brands-heading" className="text-slate-900">Brands we supply and support</h2>
              <p className="mt-3 text-base text-gray-500 sm:text-lg">
                We maintain and integrate devices regardless of who supplied them — mixed estates are the norm.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {[
                {
                  brand: "ZKTeco",
                  role: "Primary supply partnership",
                  tag: "Primary",
                  tagClass: "bg-blue-50 text-blue-700 ring-blue-600/15",
                  description: "Face and fingerprint terminals, turnstiles, controllers. Our primary supply partnership.",
                  image: "/images/77820a_f483a36175aa4407b8e94126cafb9e71~mv2.avif",
                  link: "/brands/zkteco",
                  linkLabel: "View ZKTeco devices",
                },
                {
                  brand: "eSSL",
                  role: "Widely deployed",
                  tag: "Supply & AMC",
                  tagClass: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
                  description: "Widely deployed across Indian industry; we supply, integrate and maintain.",
                  image: "/images/biometric-attendance-system.jpg",
                  link: null,
                  linkLabel: null,
                },
                {
                  brand: "Realtime",
                  role: "Takeover & AMC",
                  tag: "Takeover AMC",
                  tagClass: "bg-amber-50 text-amber-700 ring-amber-600/15",
                  description: "Common in existing plant estates; supported under takeover AMC.",
                  image: "/images/Turnstiles2.jpg",
                  link: null,
                  linkLabel: null,
                },
                {
                  brand: "Mixed estates",
                  role: "Brand-agnostic integration",
                  tag: "Any brand",
                  tagClass: "bg-violet-50 text-violet-700 ring-violet-600/15",
                  description: "We maintain and integrate devices regardless of who supplied them.",
                  image: "/images/Hardware Integration.jpg",
                  link: null,
                  linkLabel: null,
                },
              ].map((card, idx) => (
                <motion.article
                  key={card.brand}
                  className="group relative overflow-hidden rounded-xl border border-gray-200"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: idx * 0.05 }}
                >
                  <div className="relative aspect-[16/8]">
                    <Image src={card.image} alt={card.brand} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" aria-hidden />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">{card.brand}</h3>
                      <span className={`inline-flex shrink-0 rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${card.tagClass} bg-opacity-90`}>{card.tag}</span>
                    </div>
                    <p className="mt-1 text-sm text-white/85">{card.description}</p>
                    {card.link && (
                      <Link href={card.link} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-sky-300 hover:text-sky-200">
                        {card.linkLabel} →
                      </Link>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            H2 — Devices are half the system
            (Integrations section — face page pattern)
        ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden border-t border-cyan-200/35 bg-gradient-to-b from-sky-50/50 via-white to-indigo-50/40 py-12 lg:py-16" aria-labelledby="system-heading">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-indigo-400/[0.12] blur-3xl" />
            <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-cyan-400/[0.11] blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <span className="inline-flex rounded-full border border-cyan-200/70 bg-gradient-to-r from-white to-sky-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] shadow-sm ring-1 ring-cyan-500/15">
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">System integration</span>
                </span>
                <h2 id="system-heading" className="mt-5 text-black">
                  Devices are{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text font-semibold text-transparent">half the system</span>
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                  A device that recognises a worker but doesn&apos;t feed anything is a turnstile with a screen. Every InOps device writes to one attendance and identity engine, so a single enrolment covers every gate, canteen counter and site — and the resulting data feeds{" "}
                  <Link href="/contract-labour-management" className="font-medium text-blue-600 underline-offset-2 hover:underline">labour management system software</Link>
                  , payroll, and statutory registers.
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                  That connection is why our device sales sit alongside software and services rather than as a standalone hardware line.
                </p>
                <ul className="mt-8 list-none space-y-4 p-0">
                  {[
                    { title: "Real-time attendance sync", description: "Punches flow instantly to CLMS — no manual entry, no end-of-day batch." },
                    { title: "Labour management integration", description: "Contractor billing reconciled against biometric gate records before payment." },
                    { title: "Single identity, every site", description: "One enrolment activates the worker across every gate, canteen and plant." },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4 py-2">
                      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-blue-600" aria-hidden>
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 12l4 4 8-8" /></svg>
                      </span>
                      <div className="min-w-0">
                        <p className="text-base font-semibold text-slate-900">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right — 2×2 tiles */}
              <motion.div
                className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-indigo-200/40 bg-gradient-to-br from-white via-slate-50/50 to-sky-50/60 p-6 shadow-[0_28px_70px_-40px_rgba(79,70,229,0.3)] ring-1 ring-indigo-500/10 backdrop-blur-md sm:p-8 lg:mt-30"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 opacity-95" aria-hidden />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,rgba(59,130,246,0.07)_0%,transparent_50%,rgba(139,92,246,0.06)_100%)]" aria-hidden />
                <p className="relative text-center text-xs font-bold uppercase tracking-[0.22em] text-transparent bg-gradient-to-r from-slate-500 via-indigo-500 to-violet-500 bg-clip-text">Data fabric</p>
                <div className="relative mt-7 grid grid-cols-2 gap-3">
                  {(
                    [
                      { label: "Mobile App", accent: "cyan" as const, route: "/mobile-app-attendance", icon: (<><rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="1.75" /><path d="M12 18h.01" strokeWidth="2" strokeLinecap="round" /><line x1="9" y1="6" x2="15" y2="6" strokeWidth="1.75" /></>) },
                      { label: "ATTENDANCE", accent: "indigo" as const, route: "/cctv-attendance", icon: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>) },
                      { label: "HRMS / PAYROLL", accent: "fuchsia" as const, route: "/hris", icon: (<><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18" /></>) },
                      { label: "CLMS REPORTS", accent: "emerald" as const, route: "/contract-labour-management", icon: (<path d="M4 19h16M7 16V8M12 16V5M17 16v-4" />) },
                    ] as const
                  ).map((node) => {
                    const v = accentVisual[node.accent];
                    return (
                      <Link key={node.label} href={node.route} className={`group relative overflow-hidden rounded-xl border p-4 text-center transition-all duration-300 hover:-translate-y-0.5 ${v.miniCell}`}>
                        <div className={`pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${v.topBar}`} aria-hidden />
                        <div className={`pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full blur-xl ${v.orb}`} aria-hidden />
                        <span className={`relative mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl ${v.iconShell}`} aria-hidden>
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{node.icon}</svg>
                        </span>
                        <p className="relative mt-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-600 group-hover:text-slate-900 transition-colors duration-300">{node.label}</p>
                      </Link>
                    );
                  })}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-indigo-600 to-fuchsia-600 opacity-35 blur-xl" aria-hidden />
                    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-indigo-600 to-violet-700 text-lg font-bold text-white shadow-xl shadow-indigo-500/45 ring-4 ring-white/90">→</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            H2 — Supply, installation and support
            (Why InOps — face page pattern)
        ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden border-t border-violet-200/35 bg-gradient-to-b from-fuchsia-50/20 via-white to-emerald-50/25 pt-12 lg:pt-16 pb-12 lg:pb-0" aria-labelledby="supply-heading">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute left-1/2 top-0 h-[420px] w-[min(100%,56rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(99,102,241,0.12),transparent_65%)]" />
            <div className="absolute bottom-0 right-[10%] h-56 w-56 rounded-full bg-emerald-400/[0.1] blur-3xl" />
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
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">End-to-end</span>
              </span>
              <h2 id="supply-heading" className="mt-5 text-black">Supply, installation and support</h2>
              <p className="mt-3 max-w-2xl mx-auto text-base text-slate-600">
                Site survey → device selection per gate → installation and commissioning → enrolment → integration with attendance and payroll. After deployment, devices are covered under{" "}
                <Link href="/services/biometric-amc" className="font-medium text-blue-600 hover:underline">biometric AMC</Link>
                {" "}— preventive maintenance, remote health monitoring, firmware management and on-site engineers, with spares held in India.
              </p>
              <p className="mt-3 max-w-2xl mx-auto text-base text-slate-600">
                For estates in unknown condition — the usual situation after a few years of ad-hoc purchasing — a{" "}
                <Link href="/services/biometric-database-audit" className="font-medium text-blue-600 hover:underline">biometric database audit</Link>
                {" "}establishes what is actually deployed and working before anything is contracted.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
              {(
                [
                  { title: "Site survey first", description: "Device selection matched to gate conditions, throughput and environment — not to what's in stock.", icon: "shield" as const, accent: "emerald" as const },
                  { title: "Installation & commissioning", description: "Civil coordination, mounting, networking, enrolment, and post-install verification across every gate.", icon: "clock" as const, accent: "cyan" as const },
                  { title: "Integration", description: "Devices connected to InOps attendance, payroll and compliance — punches become statutory records automatically.", icon: "bolt" as const, accent: "amber" as const },
                  { title: "Biometric AMC", description: "Preventive maintenance, remote health monitoring, firmware management and on-site engineers. Spares held in India.", icon: "users" as const, accent: "violet" as const, route: "/services/biometric-amc" },
                ] as const
              ).map((item, idx) => {
                const v = accentVisual[item.accent];
                return (
                  <motion.article
                    key={item.title}
                    className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${v.card}`}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.42, ease: smoothEase, delay: idx * 0.05 }}
                  >
                    <div className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${v.topBar}`} aria-hidden />
                    <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl ${v.orb}`} aria-hidden />
                    <span className={`pointer-events-none absolute -right-0.5 top-3 z-[1] bg-gradient-to-r bg-clip-text font-mono text-[2.35rem] font-black leading-none tracking-tighter text-transparent opacity-[0.68] sm:right-1 sm:top-4 sm:text-[2.85rem] ${v.topBar}`} aria-hidden>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={`relative z-[2] inline-flex h-11 w-11 items-center justify-center rounded-xl ${v.iconShell}`}>
                      {item.icon === "shield" && <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" /></svg>}
                      {item.icon === "clock" && <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>}
                      {item.icon === "bolt" && <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>}
                      {item.icon === "users" && <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" /><path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" /></svg>}
                    </span>
                    <h3 className="relative z-[2] mt-4 pr-14 text-base font-semibold tracking-tight text-slate-900 sm:pr-16 sm:text-lg">{item.title}</h3>
                    <p className="relative z-[2] mt-2 text-sm leading-relaxed text-slate-600/95 sm:pr-4">{item.description}</p>
                  </motion.article>
                );
              })}
            </div>

            {/* Dark "every environment" banner */}
            <motion.div
              className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-950 via-[#0f172a] to-blue-950 p-8 shadow-[0_32px_64px_-28px_rgba(15,23,42,0.6)] ring-1 ring-white/10 sm:p-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
            >
              <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-indigo-600/25 blur-3xl" aria-hidden />
              <h3 className="relative text-white">Designed for every environment</h3>
              <p className="relative mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                From climate-controlled offices to dusty factory floors — our hardware and AMC cover the full range.
              </p>
              <div className="relative mt-8 flex flex-wrap gap-2.5 sm:gap-3">
                {["Industrial plants", "Corporate offices", "Large warehouses", "Outdoor plant gates", "Multi-site estates", "Remote & low-connectivity sites"].map((label) => (
                  <span key={label} className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-100 shadow-sm backdrop-blur-sm transition hover:border-sky-400/40 hover:bg-white/[0.1] sm:text-sm">
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQ accordion — exact brief Q&A, face page style
        ══════════════════════════════════════════ */}
        <section aria-labelledby="biometric-devices-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 id="biometric-devices-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Common questions about biometric attendance machines, device selection, brand options, integration and maintenance.
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
                {faqItems.map((item, index) => (
                  <details key={item.question} className="group bg-white/70 px-5 py-5 open:bg-white sm:px-7 sm:py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:hidden">
                      <span className="flex min-w-0 gap-4">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold tabular-nums text-blue-700 ring-1 ring-blue-100">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-base font-semibold leading-snug text-slate-950 sm:text-lg">{item.question}</span>
                      </span>
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg leading-none text-slate-600 transition group-open:rotate-45 group-open:border-blue-200 group-open:text-blue-700" aria-hidden>+</span>
                    </summary>
                    <p className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:pl-12 sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <SolutionPageClosingCta
          headingId="biometric-devices-final-cta-heading"
          heading={<>Right device for every gate — <span className="font-semibold text-sky-100">supplied, installed, maintained</span></>}
          description="Site survey to AMC, across ZKTeco, eSSL and Realtime. One partner for your entire biometric estate."
          primaryLabel="Request a site survey"
          secondaryLabel="Talk to an Expert"
        />

      </div>
    </>
  );
}
