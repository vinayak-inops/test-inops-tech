"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { FlyInText } from "@/app/components/FlyInText";
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
import { mediaVideos } from "@/app/lib/mediaAssets";
import { inopsUi } from "@/app/lib/inopsUi";
import { clmsFaqItems } from "@/app/lib/clmsFaqItems";
import ClmsIndustriesSlider from "@/app/components/ClmsIndustriesSlider";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const ourModulesHeaderStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
} as const;

const ourModulesHeaderItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: smoothEase },
  },
} as const;

const ourModulesGridStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
} as const;

const ourModulesCardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
} as const;

const payrollHeroRightBackground = "/WhatsApp Image 2026-05-04 at 12.41.37 PM.jpeg";
const accessGovernanceLeftVideo = mediaVideos.accessGovernanceDemo;

const comprehensiveControlCards = [
  {
    title: "Digital Onboarding",
    description:
      "Verify identities, run background checks, and digitize paperwork so every contractor is cleared and audit-ready before day one.",
    icon: "onboarding" as const,
  },
  {
    title: "Attendance & Shift Tracking",
    description:
      "Capture biometrics and shift rules at the gate, then feed clean hours straight into payroll and vendor billing.",
    icon: "clock" as const,
  },
  {
    title: "Wage & Compliance",
    description:
      "Automate minimum wage, overtime, statutory deductions, and policy checks so payouts stay defensible on every cycle.",
    icon: "scale" as const,
  },
  {
    title: "Invoice Reconciliation",
    description:
      "Match contractor invoices to verified headcount and hours, spot leakage before it hits the finance close.",
    icon: "invoice" as const,
  },
  {
    title: "Contractor Management",
    description:
      "Track licenses, renewals, and performance signals across vendors without losing sight of site-level accountability.",
    icon: "contractor" as const,
  },
] as const;


/** Matches standard cards elsewhere on this page (white surface, slate border, brand blue accents) */
const painPointTheme = {
  cardSurface:
    "border-slate-200/90 bg-white shadow-sm shadow-slate-900/[0.04] ring-1 ring-slate-900/[0.03] hover:border-blue-200/80 hover:shadow-md hover:shadow-slate-900/[0.06]",
  numBg: "bg-blue-50 text-[color:var(--inops-blue)] ring-1 ring-blue-100/80",
  iconBox: "bg-blue-50 text-blue-600 ring-1 ring-blue-100/80",
  statPill: "border border-blue-200/80 bg-blue-50/90 text-blue-800 ring-1 ring-blue-500/10",
  cornerBadge:
    "border border-blue-200/90 bg-blue-50/95 text-blue-800 ring-1 ring-blue-500/15",
} as const;

const painPoints = [
  {
    title: "Ghost workers & time theft",
    stat: "~3–5% of spend",
    cornerBadge: "Spend leak",
    description:
      "Buddy punching and proxy clock-ins hide real headcount, clean attendance data never reaches payroll.",
    icon: "users" as const,
  },
  {
    title: "Compliance violations",
    stat: "Penalties + audit exposure",
    cornerBadge: "Audit risk",
    description:
      "OT, wage, and incident gaps surface after the fact, audits and disputes land on your desk.",
    icon: "shield" as const,
  },
  {
    title: "Invoice chaos",
    stat: "25–30% discrepancy rate",
    cornerBadge: "Mismatch",
    description:
      "Finance burns 80–120 hrs./month matching invoices to gates and shifts instead of closing books.",
    icon: "invoice" as const,
  },
  {
    title: "System fragmentation",
    stat: "Data chaos",
    cornerBadge: "Siloed",
    description:
      "Biometrics, spreadsheets, and ERP live in silos, nothing reconciles without manual stitching.",
    icon: "layers" as const,
  },
  {
    title: "ESI / PF reconciliation & true-up",
    stat: "Manual checks",
    cornerBadge: "Filing gap",
    description:
      "Spreadsheet-driven statutory checks miss deltas until filings, errors compound across branches.",
    icon: "statutory" as const,
  },
] as const;

type PainIcon = (typeof painPoints)[number]["icon"];

function PainPointLeadIcon({ name, className }: { name: PainIcon; className?: string }) {
  const c = className ?? "h-5 w-5";
  switch (name) {
    case "users":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "shield":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "invoice":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      );
    case "layers":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
          <path d="m22 12.73-9.17 4.16a2 2 0 0 1-1.66 0L2 12.73" />
        </svg>
      );
    case "statutory":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      );
    default:
      return null;
  }
}

/** Original mosaic: row 1 = pain | photo | pain; row 2 = three pains. */
const whyInopsGridSlots = [
  { kind: "pain" as const, painIndex: 0 },
  { kind: "image" as const },
  { kind: "pain" as const, painIndex: 1 },
  { kind: "pain" as const, painIndex: 2 },
  { kind: "pain" as const, painIndex: 3 },
  { kind: "pain" as const, painIndex: 4 },
] as const;

type PainPointRow = (typeof painPoints)[number];

function WhyInopsMosaicPainCard({
  card,
  num,
  idx,
}: {
  card: PainPointRow;
  num: number;
  idx: number;
}) {
  const t = painPointTheme;
  return (
    <motion.article
      className={`group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border p-6 transition-[transform,box-shadow,border-color] duration-300 sm:min-h-[240px] sm:p-6 ${t.cardSurface}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.48, ease: smoothEase, delay: Math.min(idx * 0.05, 0.28) }}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: smoothEase },
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1 rounded-t-2xl bg-[color:var(--inops-blue)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-3 top-3 z-30 sm:right-4 sm:top-4"
        aria-hidden
      >
        <span
          className={`inline-flex max-w-[9.5rem] items-center rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase leading-snug tracking-[0.14em] sm:max-w-[11rem] sm:text-[10px] sm:tracking-[0.16em] ${t.cornerBadge}`}
        >
          {card.cornerBadge}
        </span>
      </div>
      <div className="relative flex items-center gap-3 pr-16 sm:pr-20">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums ${t.numBg}`}
          aria-hidden
        >
          {num}
        </span>
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${t.iconBox}`}
        >
          <PainPointLeadIcon name={card.icon} className="h-5 w-5" />
        </span>
      </div>
      <h3 className="relative mt-5 font-semibold tracking-tight text-slate-900">{card.title}</h3>
      <span className={`relative mt-2.5 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold tabular-nums shadow-sm ${t.statPill}`}>
        {card.stat}
      </span>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-600">{card.description}</p>
    </motion.article>
  );
}

/** Horizontal “Our Module” carousel ,  image, title, description per slide */
const ourModulesSlides = [
  {
    slug: "attendance-leave",
    title: "Attendance Management Software",
    description:
      "Track attendance in real time, apply shift and leave policies automatically, and push verified hours directly to payroll.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=85",
    alt: "Team planning attendance and leave schedules",
  },
  {
    slug: "wage-payroll",
    title: "Contractor Payroll Software",
    description:
      "Calculate wages, statutory deductions, and overtime with audit trails that stay compliant across every pay cycle.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=85",
    alt: "Payroll and compensation dashboard",
  },
  {
    slug: "contractor-management",
    title: "Vendor & Contractor Management",
    description:
      "Manage vendor profiles, manpower allocation, renewals, and site-level accountability from one centralized view.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=85",
    alt: "Contractors and supervisors on an industrial site",
  },
  {
    slug: "cxo-dashboard",
    title: "HR Dashboard & Workforce Analytics",
    description:
      "Give leadership real-time visibility into headcount, productivity, compliance posture, and cost leakages.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85",
    alt: "Executive dashboard with operations KPIs",
  },
  {
    slug: "background-verification",
    title: "Worker Verification & BGV",
    description:
      "Verify contractor identity and documents before onboarding, with complete records ready for audits and renewals.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=85",
    alt: "Document and background verification process",
  },
  {
    slug: "ai-assistance",
    title: "AI Assistance",
    description:
      "Use AI to flag anomalies, predict risks, and suggest next actions across attendance, compliance, and billing workflows.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=85",
    alt: "AI workforce analytics and assistance",
  },
  {
    slug: "compliance-report",
    title: "Compliance Management & CLRA Registers",
    description:
      "Digital Form V/XIII registers, licence tracking, and audit-ready returns.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=85",
    alt: "Compliance reports and governance analytics",
  },
  {
    slug: "challan-reconciliation",
    title: "Challan Reconciliation",
    description:
      "Reconcile challans with attendance and wage data to detect mismatches early and prevent financial leakage.",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=85",
    alt: "Invoice and challan reconciliation review",
  },
  {
    slug: "gate-compliance",
    title: "Gate Compliance & Auto-Blocking",
    description:
      "19 automated entry rules — induction, medical, licence, and BGV enforced at the gate before a worker enters.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=85",
    alt: "Industrial gate access control with biometric verification",
  },
  {
    slug: "onboarding-offboarding",
    title: "Contractor Onboarding Software",
    description:
      "Digitise the full contractor lifecycle — collect documents, run BGV, issue gate passes on day one, and close exits cleanly with asset recovery and final settlement.",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85",
    alt: "HR team completing contractor onboarding paperwork",
  },
] as const;

/** Per-slide top accent for Capability map cards (matches `ourModulesSlides` order). */
const ourModuleCardPalettes = [
  { topBar: "from-blue-600 via-sky-500 to-cyan-500" },
  { topBar: "from-emerald-600 via-teal-500 to-cyan-500" },
  { topBar: "from-amber-500 via-orange-500 to-rose-500" },
  { topBar: "from-violet-600 via-fuchsia-500 to-pink-500" },
  { topBar: "from-cyan-500 via-sky-500 to-blue-600" },
  { topBar: "from-indigo-600 via-violet-500 to-purple-600" },
  { topBar: "from-sky-500 via-indigo-500 to-violet-600" },
  { topBar: "from-rose-500 via-amber-500 to-orange-500" },
  { topBar: "from-teal-500 via-emerald-500 to-green-500" },
  { topBar: "from-orange-500 via-amber-400 to-yellow-400" },
] as const;

/** Cost leakage cards — width scales with viewport on all breakpoints. */
const leakageCardWidthClass = "w-[92vw] sm:w-[90vw] lg:w-[42vw] xl:w-[43vw] 2xl:w-[44vw]";

type LeakageSnapshotIcon =
  | "users"
  | "currency"
  | "location"
  | "vendor"
  | "clock"
  | "chart"
  | "building"
  | "clipboard"
  | "alert"
  | "leak";

const leakageSnapshotRows: ReadonlyArray<{
  label: string;
  value: string;
  icon: LeakageSnapshotIcon;
}> = [
  { label: "Number of Contractors", value: "1,000", icon: "users" },
  { label: "Avg Monthly Cost per Contractor", value: "₹15,000", icon: "currency" },
  { label: "Number of Locations", value: "6", icon: "location" },
  { label: "Active Vendor Partners", value: "24", icon: "vendor" },
];

const leakageBleedItems = [
  { label: "Ghost Workers (3%)", amount: "₹54 Lakhs", pct: 22, icon: "user-x" as const },
  { label: "Billing Errors (2%)", amount: "₹36 Lakhs", pct: 15, icon: "doc" as const },
  { label: "OT Fraud (1%)", amount: "₹18 Lakhs", pct: 8, icon: "clock" as const },
  { label: "Compliance Penalties", amount: "₹50 Lakhs", pct: 21, icon: "alert" as const },
  { label: "Admin Inefficiencies", amount: "₹40 Lakhs", pct: 17, icon: "stack" as const },
] as const;

function LeakageSnapshotRowIcon({ name }: { name: LeakageSnapshotIcon }) {
  const c = "h-4 w-4";
  switch (name) {
    case "users":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "currency":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "location":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "vendor":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0h-8m8 0v2a4 4 0 01-4 4H8a4 4 0 01-4-4V6" />
        </svg>
      );
    case "clock":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case "building":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "clipboard":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case "alert":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    case "leak":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      );
    default:
      return null;
  }
}

type OurModuleSlide = (typeof ourModulesSlides)[number];
type OurModulePalette = (typeof ourModuleCardPalettes)[number];

function OurModuleCard({ slide, palette, slug }: { slide: OurModuleSlide; palette: OurModulePalette; slug: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      className="relative flex min-h-[22rem] w-full max-w-[17.5rem] flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] transition-[border-color,box-shadow] duration-300 hover:border-slate-300 hover:shadow-[0_14px_40px_-14px_rgba(15,23,42,0.22)] lg:max-w-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      whileHover={{
        y: -3,
        transition: { duration: 0.28, ease: smoothEase },
      }}
    >
      <motion.div
        className={`pointer-events-none absolute inset-x-0 top-0 z-20 h-1 rounded-t-xl bg-gradient-to-r ${palette.topBar}`}
        aria-hidden
      />
      <div className="relative w-full shrink-0 overflow-hidden bg-slate-100">
        <div className="relative h-[8.25rem] w-full shrink-0">
        <Image
          src={slide.image}
          alt=""
          fill
          className={`object-cover object-center transition-opacity duration-500 ease-out ${hovered ? "opacity-0" : "opacity-100"}`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
        />
        <Image
          src={slide.hoverImage}
          alt={slide.alt}
          fill
          className={`object-cover object-center transition-opacity duration-500 ease-out ${hovered ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
        />
        </div>
      </div>
      <div className="relative flex flex-1 flex-col px-3 pb-3 pt-3 text-center">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900">
          {slide.title}
        </h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">
          {slide.description}
        </p>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-auto pt-3">
          <Link
            href={`/contract-labour-management/iddion-regx-modules/${slug}`}
            className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-[color:var(--inops-blue)] text-xs font-semibold text-white shadow-sm transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--inops-blue)]"
          >
            Know more
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}

function OurModulesCarousel() {
  return (
    <section
      className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-white !mt-0 pt-2 pb-5 sm:pt-3 sm:pb-6 lg:pt-3 lg:pb-6"
      aria-labelledby="our-modules-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-24 h-px w-[min(90%,56rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent blur-[1px]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(59,130,246,0.06),transparent_60%)]" aria-hidden />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-32 h-[min(16rem,40vw)] w-[min(80vw,40rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_68%)] lg:hidden"
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.9, ease: smoothEase }}
      />

      <motion.div className="relative mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">
        <motion.div
          className="mx-auto max-w-xl text-center lg:max-w-lg"
          variants={ourModulesHeaderStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span
            variants={ourModulesHeaderItem}
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/90 bg-blue-50/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-800 shadow-sm ring-1 ring-blue-500/20 backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]"
          >
            <motion.span
              className="relative flex h-1.5 w-1.5 shrink-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500/40 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--inops-blue)] shadow-[0_0_0_2px_rgba(29,95,191,0.22)]" />
            </motion.span>
            Capability map
          </motion.span>
          <motion.h2
            id="our-modules-heading"
            variants={ourModulesHeaderItem}
            className="mt-2 text-xl font-heading-bold tracking-tight sm:text-2xl"
          >
            <span className="text-slate-900">Contract Labour Management </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text font-semibold text-transparent">
              Modules 
            </span>
          </motion.h2>
          <motion.p
            variants={ourModulesHeaderItem}
            className="mx-auto mt-1.5 max-w-lg text-[10px] leading-snug text-slate-700 sm:text-[11px] sm:leading-relaxed"
          >
            End-to-end payroll and workforce capabilities, pick what you need, everything stays connected.
          </motion.p>
        </motion.div>

        <motion.ul
          className="mt-6 grid list-none grid-cols-2 gap-4 lg:mt-8 lg:grid-cols-5 lg:gap-4"
          variants={ourModulesGridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {ourModulesSlides.map((slide, si) => {
            const palette = ourModuleCardPalettes[si % ourModuleCardPalettes.length];
            return (
            <motion.li key={slide.title} variants={ourModulesCardVariant} className="flex w-full justify-center">
              <OurModuleCard slide={slide} palette={palette} slug={slide.slug} />
            </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
}

function ComprehensiveControlIcon({ name }: { name: (typeof comprehensiveControlCards)[number]["icon"] }) {
  const c = "h-6 w-6";
  if (name === "onboarding") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (name === "scale") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    );
  }
  if (name === "invoice") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function WithInOpsBenefitIcon({ variant, className }: { variant: "ghost" | "invoice" | "visibility" | "compliance"; className?: string }) {
  const c = className ?? "h-[1.05rem] w-[1.05rem] sm:h-[1.125rem] sm:w-[1.125rem]";
  if (variant === "ghost") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="m17 8 5 5M22 8l-5 5" />
      </svg>
    );
  }
  if (variant === "invoice") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h6" />
      </svg>
    );
  }
  if (variant === "visibility") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
      <path d="M14 2v6h6" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function ImpactKpiIcon({ variant }: { variant: "leakage" | "payback" | "savings" }) {
  const c = "h-5 w-5";
  if (variant === "leakage") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    );
  }
  if (variant === "payback") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
      <path d="M16 7h6v6" />
    </svg>
  );
}

/** Video fills frame; live tiles sit outside overflow clip */
function AccessGovernanceVisual() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden bg-black mt-12">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/77913ee0-6e66-4c3b-bdad-da60ad90e710.jpg"
          aria-label="Contract worker using an industrial turnstile with integrated biometric access hardware"
        >
          <source src={accessGovernanceLeftVideo} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" aria-hidden />
      </div>

      <VideoLivePopups
        popups={[
          {
            position: "top-left",
            label: "Live",
            className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:-top-3 xl:-left-0",
            title: "Entry approved",
            accent: "emerald",
          },
          {
            position: "bottom-right",
            label: "Access",
            title: "Turnstile cleared",
            className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-10 xl:-right-2",
            variant: "icon",
            icon: "door",
            accent: "blue",
          },
        ]}
      />
    </>
  );
}

const FAQ_VISIBLE_DEFAULT = 8;

function ClmsFaqAccordion() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? clmsFaqItems : clmsFaqItems.slice(0, FAQ_VISIBLE_DEFAULT);
  return (
    <div className="divide-y divide-slate-200">
      {visible.map((item, index) => (
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
      {!showAll && clmsFaqItems.length > FAQ_VISIBLE_DEFAULT && (
        <div className="px-5 py-6 sm:px-7">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            More questions
            <span aria-hidden className="inline-block transition group-open:rotate-180">↓</span>
          </button>
        </div>
      )}
    </div>
  );
}

function ClmsRoiCalculator() {
  const [workers, setWorkers] = useState(500);
  const [spendPerWorker, setSpendPerWorker] = useState(15000);

  const monthlySpend = workers * spendPerWorker;
  const ghostSavings = Math.round(monthlySpend * 0.04);
  const invoiceSavings = Math.round(monthlySpend * 0.025);
  const annualSavings = (ghostSavings + invoiceSavings) * 12;

  function fmt(n: number) {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)} Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
    return `₹${n.toLocaleString("en-IN")}`;
  }

  return (
    <section
      id="roi-calculator"
      className="border-t border-slate-200 bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
            ROI Estimator
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Estimate your savings with Iddion RegX
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Based on industry averages: ghost workers account for 3–5% of contractor spend; invoice discrepancies average 25–30% before automated matching.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Contract workers on site
              </label>
              <div className="mt-2 flex items-center gap-4">
                <input
                  type="range"
                  min={50}
                  max={5000}
                  step={50}
                  value={workers}
                  onChange={(e) => setWorkers(Number(e.target.value))}
                  className="flex-1 accent-blue-600"
                />
                <span className="w-16 text-right text-base font-bold tabular-nums text-slate-900">
                  {workers.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Avg monthly cost per worker (₹)
              </label>
              <div className="mt-2 flex items-center gap-4">
                <input
                  type="range"
                  min={5000}
                  max={50000}
                  step={1000}
                  value={spendPerWorker}
                  onChange={(e) => setSpendPerWorker(Number(e.target.value))}
                  className="flex-1 accent-blue-600"
                />
                <span className="w-20 text-right text-base font-bold tabular-nums text-slate-900">
                  {fmt(spendPerWorker)}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Ghost worker savings</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-slate-900">
                {fmt(ghostSavings)}<span className="ml-0.5 text-sm font-normal text-slate-500">/mo</span>
              </p>
              <p className="mt-1 text-xs text-slate-500">~4% of contractor spend</p>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Invoice savings</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-slate-900">
                {fmt(invoiceSavings)}<span className="ml-0.5 text-sm font-normal text-slate-500">/mo</span>
              </p>
              <p className="mt-1 text-xs text-slate-500">~2.5% of contractor spend</p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Annual total</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-slate-900">{fmt(annualSavings)}</p>
              <p className="mt-1 text-xs text-slate-500">per year</p>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-slate-400">
            Estimate based on industry input; actual leakage varies by site.
          </p>

          <div className="mt-6 flex justify-center">
            <Link href="/contact" className={inopsUi.btnPrimary}>
              Book a Demo to verify your numbers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PayrollSolutionsPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="payroll-solutions-section-gap min-h-screen bg-white text-gray-900">
        <motion.section
          className="relative mt-3 w-full border-b border-slate-100 bg-white pt-7 sm:pt-9 lg:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
          >
            <div className={`relative min-h-[340px] w-full bg-white sm:min-h-[390px] lg:min-h-[430px] ${SPLIT_HERO_MOBILE_STACK}`}>
              <SolutionHeroWaveDecor className="z-[1]" />
              <div
                className={`relative z-[2] mt-8 h-52 w-full sm:h-60 ${SPLIT_HERO_MOBILE_MEDIA_ORDER} lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 ${SPLIT_HERO_MEDIA_MR}`}
              >
                <Image
                  src={payrollHeroRightBackground}
                  alt="Contract workers at an Indian manufacturing site gate — Iddion RegX CLMS"
                  fill
                  className="object-cover object-[center_35%] sm:object-center lg:object-[center_40%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent lg:block"
                  aria-hidden
                />
                <VideoLivePopups
                  popups={[
                    {
                      position: "top-left",
                      label: "Live",
                      className: "top-5 left-5",
                      title: "Sites synced",
                      accent: "emerald",
                    },
                    {
                      position: "bottom-right",
                      label: "Compliance",
                      title: "Contractors cleared",
                      className: "bottom-5 right-5",
                      variant: "icon",
                      icon: "shield",
                      accent: "blue",
                    },
                  ]}
                />
              </div>
              <div className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 ${SPLIT_HERO_MOBILE_COPY_ORDER}`}>
                <div
                  className={`max-w-3xl px-2 py-6 pb-5 sm:px-4 sm:py-8 sm:pb-7 lg:max-w-2xl lg:pt-10 lg:pb-5 lg:pr-6 ${SPLIT_HERO_COPY_ML}`}
                >
                  <FlyInText
                    as="span"
                    trigger="mount"
                    direction="down"
                    duration={0.55}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-800 shadow-sm backdrop-blur"
                  >
                    <span className="h-2 w-2 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                    Iddion RegX CLMS
                  </FlyInText>

                  <FlyInText
                    as="h1"
                    trigger="mount"
                    direction="down"
                    delay={0.04}
                    duration={0.5}
                    className="mt-4 text-[2.75rem] leading-[1.15] font-bold tracking-tight text-slate-950 lg:mt-5"
                  >
                    Contract Labour Management System (CLMS) Software for Indian Plants
                  </FlyInText>

                  <FlyInText
                    as="p"
                    trigger="mount"
                    direction="up"
                    delay={0.12}
                    duration={0.62}
                    className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base"
                  >
                    Contractor onboarding, gate passes, biometric attendance, wages, PF/ESI and statutory registers. One CLMS for every site, Labour Codes-ready.
                  </FlyInText>

                  <FlyInText
                    as="div"
                    trigger="mount"
                    direction="up"
                    delay={0.18}
                    duration={0.58}
                    className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
                  >
                    <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                      <Link href="/contact" className={inopsUi.btnPrimary}>
                        Book a Demo
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                      <Link href="#roi-calculator" className={inopsUi.btnSecondary}>
                        Calculate ROI
                      </Link>
                    </motion.div>
                    <Link href="/clms-pricing" className="text-sm font-medium text-slate-400 hover:text-blue-600 underline underline-offset-4 transition-colors">
                      See how RegX is priced →
                    </Link>
                  </FlyInText>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <section
          id="why-inops"
          className="relative overflow-hidden border-t border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-white !mt-0 pt-4 pb-10 sm:pt-5 lg:pt-6 lg:pb-12"
          aria-labelledby="why-inops-heading"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgb(226_232_240/0.65)_1px,transparent_1px),linear-gradient(to_bottom,rgb(226_232_240/0.65)_1px,transparent_1px)] [background-size:48px_48px]"
            aria-hidden
          />

          <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-12 lg:pb-9 lg:pt-9">
            <motion.div
              className="mx-auto max-w-2xl text-center lg:max-w-3xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-800 shadow-sm ring-1 ring-blue-500/20 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-xs">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--inops-blue)] shadow-[0_0_0_2px_rgba(29,95,191,0.22)]" aria-hidden />
                Operational gaps
              </span>
              <h2 id="why-inops-heading" className="mt-6">
                <span className=" text-black">Why Contract Labour Management?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Where contract payroll breaks today, and what teams fix first when they standardize on one platform.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-7">
              {whyInopsGridSlots.map((slot, idx) => {
                if (slot.kind === "image") {
                  return (
                    <motion.figure
                      key="why-inops-photo"
                      className={`group relative flex min-h-[240px] flex-col overflow-hidden rounded-2xl border sm:min-h-[260px] lg:min-h-[280px] ${painPointTheme.cardSurface}`}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.5, ease: smoothEase, delay: Math.min(idx * 0.05, 0.25) }}
                      whileHover={{ y: -4, transition: { duration: 0.35, ease: smoothEase } }}
                    >
                      <div className="relative flex min-h-[236px] flex-1 flex-col overflow-hidden rounded-2xl bg-slate-900 sm:min-h-[256px] lg:min-h-[276px]">
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 z-30 h-1 rounded-t-2xl bg-[color:var(--inops-blue)]"
                        aria-hidden
                      />
                      <div className="relative min-h-[220px] flex-1 sm:min-h-[240px]">
                        <Image
                          src="/f0068b65-0c95-43aa-9c59-65cf6c5dea47.jpg"
                          alt="Supervisor in safety helmet and vest at an industrial site"
                          fill
                          className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={false}
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-slate-900/10"
                          aria-hidden
                        />
                        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-6 pt-16 text-left">
                          <span className={`inline-flex !rounded-full !border !border-blue-200/90 !bg-blue-50/95 font-semibold !text-blue-800 !ring-1 !ring-blue-500/15 p-2 text-xs tracking-[0.18em]`}>
                            Field reality
                          </span>
                          <p className="mt-3 text-base font-semibold leading-snug text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-[1.05rem]">
                            Gate data and payroll runs rarely match, until systems align.
                          </p>
                        </figcaption>
                      </div>
                    </div>
                    </motion.figure>
                  );
                }
                const card = painPoints[slot.painIndex];
                const n = slot.painIndex + 1;
                return <WhyInopsMosaicPainCard key={card.title} card={card} num={n} idx={idx} />;
              })}
            </div>
          </div>
        </section>

        <OurModulesCarousel />

        {/* ====== PLATFORM IN ACTION (SCREENSHOTS) ====== */}
        <section aria-labelledby="screenshots-heading" className="border-t border-slate-100 bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Platform in action</p>
              <h2 id="screenshots-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                See every corner of your contract workforce
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
                Dashboards, gate logs, wage registers and compliance trackers — all in one screen.
              </p>
            </motion.div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
              {[
                {
                  src: "/images/labour-management-ui-showcase.png",
                  alt: "CLMS workforce analytics dashboard — workforce headcount, compliance status and contractor spend at a glance",
                  caption: "Live workforce dashboard",
                },
                {
                  src: "/images/module-auth-access-control.png",
                  alt: "Iddion RegX gate compliance screen — 19 automated entry checks before a contract worker is admitted to site",
                  caption: "Gate pass & compliance checks",
                },
                {
                  src: "/images/module-compliance-payroll.png",
                  alt: "CLRA wage register in Iddion RegX — Form V and Form XIII auto-populated from verified attendance data",
                  caption: "Statutory wage register (Form V / Form XIII)",
                },
                {
                  src: "/images/module-biometric-attendance.png",
                  alt: "Biometric attendance dashboard — per-contractor, per-site punch records synced in real time for payroll processing",
                  caption: "Biometric attendance — per site",
                },
              ].map(({ src, alt, caption }, i) => (
                <motion.figure
                  key={caption}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 shadow-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: smoothEase }}
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      loading="lazy"
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-xs font-medium text-slate-500">{caption}</figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* ====== DIRECT & CONTRACT WORKFORCE ====== */}
        <section aria-labelledby="direct-contract-heading" className="border-t border-slate-100 bg-slate-50/60 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">One platform, two workforce types</p>
              <h2 id="direct-contract-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Direct and contract workforce — managed together
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-600">
                Most plants run a mix of permanent employees and contract workers across the same gates and shifts. Iddion RegX tracks both, giving HR, finance and compliance teams a single consolidated view without duplicating records.
              </p>
            </motion.div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Unified headcount view", body: "See permanent and contract staff in one dashboard — same gate log, same compliance tracker." },
                { label: "Separate cost centres", body: "Payroll costs for contract workers flow to the correct principal-employer cost centre automatically." },
                { label: "Shared shift scheduling", body: "Assign both workforce types to the same shift without maintaining parallel spreadsheets." },
                { label: "Per-vendor compliance", body: "Track each contractor's Form V / XIII, PF/ESI challans and licence expiry independently." },
                { label: "Transfer & deputation", body: "Move workers between departments or sites while retaining a full audit trail of attendance and entitlements." },
                { label: "Exit & final settlement", body: "Automated exit checklists, asset recovery and gratuity calculations for both workforce types." },
              ].map(({ label, body }) => (
                <div key={label} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">{label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== HOW A ROLLOUT WORKS ====== */}
        <section aria-labelledby="rollout-heading" className="border-t border-slate-100 bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Implementation</p>
              <h2 id="rollout-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                How a rollout works
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-600">
                Most plants go live in 6–8 weeks. The process is designed around your existing site infrastructure — no rip-and-replace.
              </p>
            </motion.div>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", title: "Assess", body: "We map your contractor list, existing registers, gate hardware and ERP touchpoints." },
                { step: "02", title: "Configure", body: "Platform configured for your gates, shifts, contractors, compliance rules and cost centres." },
                { step: "03", title: "Train & pilot", body: "HR, security and finance teams trained on-site. Pilot run on one gate or one contractor." },
                { step: "04", title: "Go live", body: "Full site rollout with dedicated support. Ongoing SLA covering uptime, data and regulatory updates." },
              ].map(({ step, title, body }) => (
                <li key={step} className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                  <span className="text-3xl font-bold tabular-nums text-blue-100">{step}</span>
                  <p className="text-base font-semibold text-slate-900">{title}</p>
                  <p className="text-sm leading-relaxed text-slate-600">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ====== INTEGRATIONS ====== */}
        <section aria-labelledby="integrations-heading" className="border-t border-slate-100 bg-slate-50/60 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Integrations</p>
              <h2 id="integrations-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Plugs into your existing stack
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
                Iddion RegX connects to ERP, payroll, HRMS and biometric hardware through standard APIs and file-based connectors — no custom middleware required.
              </p>
            </motion.div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { category: "ERP", examples: "SAP, Oracle, Microsoft Dynamics" },
                { category: "Payroll", examples: "Ramco, GreytHR, Spine" },
                { category: "Biometric hardware", examples: "ZKTeco, Hikvision, Suprema" },
                { category: "HRMS", examples: "Darwinbox, Keka, SAP SuccessFactors" },
                { category: "Security / access control", examples: "Honeywell, Matrix, Bosch" },
                { category: "Govt portals", examples: "ESIC, EPFO, Shram Suvidha" },
              ].map(({ category, examples }) => (
                <div key={category} className="flex flex-col gap-1.5 rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-semibold text-slate-900">{category}</p>
                  <p className="text-xs text-slate-500">{examples}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-slate-400">
              Custom integrations available. Contact us for connector availability.
            </p>
          </div>
        </section>

        {/* ====== CLOUD OR ON-PREMISES ====== */}
        <section aria-labelledby="deployment-heading" className="border-t border-slate-100 bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Deployment</p>
              <h2 id="deployment-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Cloud or on-premises — your choice
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-600">
                Whether your IT policy mandates data sovereignty or you want zero-maintenance SaaS, Iddion RegX supports both models with the same feature set.
              </p>
            </motion.div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Cloud-hosted SaaS",
                  badge: "Most popular",
                  badgeColor: "bg-blue-50 text-blue-700",
                  points: [
                    "Up and running in days",
                    "Automatic regulatory and security updates",
                    "Data hosted on Indian data centres (ISO/IEC 27001)",
                    "Pay-per-site subscription, no capex",
                  ],
                },
                {
                  title: "On-premises / private cloud",
                  badge: "For sensitive plants",
                  badgeColor: "bg-slate-100 text-slate-600",
                  points: [
                    "Deployed on your own servers or private cloud",
                    "No data leaves your network",
                    "Suitable for defence, aerospace and classified sites",
                    "Annual licence with our managed update service",
                  ],
                },
              ].map(({ title, badge, badgeColor, points }) => (
                <div key={title} className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-slate-50/60 p-7">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-lg font-semibold text-slate-900">{title}</p>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeColor}`}>{badge}</span>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-0.5 text-blue-500" aria-hidden>✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== SECURITY AND DATA PROTECTION ====== */}
        <section aria-labelledby="security-heading" className="border-t border-slate-100 bg-slate-50/60 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="lg:flex lg:items-start lg:justify-between lg:gap-16"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <div className="lg:max-w-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Security</p>
                <h2 id="security-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Security and data protection
                </h2>
                <p className="mt-3 text-base text-slate-600">
                  Iddion RegX is built to handle sensitive workforce data at Indian manufacturing plants, including defence and aerospace suppliers. Our controls are audited and certified.
                </p>
              </div>
              <ul className="mt-8 flex flex-col gap-4 lg:mt-0 lg:min-w-[22rem]">
                {[
                  { icon: "🔒", label: "ISO/IEC 27001 certified", detail: "Annual third-party audit of our information security management system." },
                  { icon: "🗄️", label: "Data residency in India", detail: "All workforce data stored on Indian servers; no cross-border transfer by default." },
                  { icon: "🔐", label: "Role-based access control", detail: "Fine-grained permissions per site, contractor, module and report." },
                  { icon: "📋", label: "Audit trail on every action", detail: "Every gate entry, wage edit and document upload is timestamped and attributed." },
                  { icon: "🛡️", label: "Encrypted data at rest and in transit", detail: "AES-256 at rest; TLS 1.3 for all API traffic." },
                ].map(({ icon, label, detail }) => (
                  <li key={label} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                    <span className="mt-0.5 text-lg" aria-hidden>{icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{label}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ====== CUSTOMER STORY ====== */}
        <section aria-labelledby="customer-story-heading" className="border-t border-slate-100 bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="lg:flex lg:items-center lg:gap-16"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Customer story</p>
                <h2 id="customer-story-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Automotive OEM: multi-plant CLMS rollout
                </h2>
                <blockquote className="mt-5 border-l-4 border-blue-200 pl-5">
                  <p className="text-base italic leading-relaxed text-slate-700">
                    "We went from paper gate registers and manual wage reconciliation to a fully digital CLMS across four plants in under two months. PF/ESI discrepancies dropped to near zero in the first quarter."
                  </p>
                  <footer className="mt-3 text-sm font-semibold text-slate-600">— Head of HR Operations, Tier-1 Automotive OEM</footer>
                </blockquote>
                <div className="mt-6 flex flex-wrap gap-6">
                  {[
                    { stat: "4 plants", label: "live simultaneously" },
                    { stat: "< 8 weeks", label: "to full go-live" },
                    { stat: "~0", label: "PF/ESI discrepancies after Q1" },
                  ].map(({ stat, label }) => (
                    <div key={label}>
                      <p className="text-2xl font-bold text-slate-950">{stat}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/case-studies/automotive-oem-multi-plant-clms"
                    className="inline-flex items-center gap-2 rounded-xl bg-[color:var(--inops-blue)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                  >
                    Read the full case study →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ====== HOW TO EVALUATE A CLMS ====== */}
        <section aria-labelledby="evaluate-heading" className="border-t border-slate-100 bg-slate-50/60 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Buyer guidance</p>
              <h2 id="evaluate-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                How to evaluate a CLMS
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-600">
                Use these five criteria when comparing contract labour management software for Indian plants. A short demo should answer all of them.
              </p>
            </motion.div>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { n: "1", q: "Does it cover the full CLRA lifecycle?", detail: "From contractor onboarding and Form V to wages, PF/ESI challans and Form XIII exit — gaps create compliance risk." },
                { n: "2", q: "Can it run across multiple sites from one console?", detail: "Spreadsheet-per-site approaches break once you cross three plants. Look for a single login with site-level segregation." },
                { n: "3", q: "Does it connect to your biometric hardware and ERP?", detail: "Manual data entry between systems is the main source of leakage. Confirm the connector exists before you sign." },
                { n: "4", q: "Is it Labour Codes-ready?", detail: "The four Labour Codes will change wage definitions and contribution rates. Your CLMS should update automatically." },
                { n: "5", q: "What does the implementation timeline look like?", detail: "A well-scoped rollout at a single site should take 4–6 weeks. Longer usually means high customisation risk." },
              ].map(({ n, q, detail }) => (
                <li key={n} className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6">
                  <span className="text-3xl font-bold tabular-nums text-blue-100">{n}</span>
                  <p className="text-sm font-semibold leading-snug text-slate-900">{q}</p>
                  <p className="text-sm leading-relaxed text-slate-600">{detail}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[color:var(--inops-blue)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
              >
                Book a demo to see Iddion RegX answer all five →
              </Link>
            </div>
          </div>
        </section>

        {/* Real-time access governance */}
        <section
          id="access-governance"
          className="border-t border-slate-200 bg-white"
          aria-labelledby="access-governance-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[280px] bg-black sm:min-h-[360px] lg:min-h-[min(100vh,520px)]">
              <AccessGovernanceVisual />
            </div>
            <div className="flex flex-col justify-center bg-black px-6 py-8 sm:px-10 sm:py-10 lg:min-h-[min(100vh,520px)] lg:px-14 lg:py-12">
              <h2 id="access-governance-heading" className="text-white">
                Real-Time Entry, Exit &amp; Access Governance
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-white/88 sm:text-sm">
                Manage your contract workforce efficiently with our software that seamlessly integrates with biometric
                hardware, including face, card, and fingerprint readers. The system works effortlessly with access control
                solutions like turnstiles and flap barriers to ensure only authorized personnel enter your premises.
                Track real-time attendance, manage shifts, and generate contractor-wise reports, all from a single
                platform. Get automated alerts for early exits, overstays, and unauthorized access, enhancing both
                security and compliance.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-10 items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Contact us
                </Link>
                <Link
                  href="/turnstiles-access"
                  className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  Gate hardware
                </Link>
              </div>
              <div className="mt-10 h-1 w-14 rounded-full bg-blue-500" aria-hidden />
            </div>
          </div>
        </section>

        {/* Contractor leakage + ROI ,  premium layout */}
        <section
          className="relative overflow-hidden border-t border-slate-200/80 bg-slate-50 !mt-0 pt-8 pb-12 sm:pt-10 lg:pt-12 lg:pb-16"
          aria-labelledby="contractor-leakage-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,rgb(226_232_240/0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgb(226_232_240/0.7)_1px,transparent_1px)] [background-size:52px_52px]"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/90 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute -left-40 top-1/4 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" aria-hidden />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/90 px-3 py-1.5 text-center text-xs font-semibold uppercase leading-snug tracking-[0.18em] text-blue-800 shadow-sm ring-1 ring-[color:var(--inops-blue)]/20 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--inops-blue)] shadow-[0_0_0_2px_rgba(29,95,191,0.2)]" aria-hidden />
                Cost leakage is silent. Savings don&apos;t have to be.
              </span>
              <h2 id="contractor-leakage-heading" className="mt-7 text-slate-900">
                Stop Losing{" "}
                <span className="font-semibold text-[color:var(--inops-blue)]">Crores</span>{" "}
                in Contractor Leakage
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Hidden inefficiencies in contractor management can drain{" "}
                <strong className="font-semibold text-slate-800">8–12%</strong> of your annual spend ,  without you even
                knowing.
              </p>
            </motion.div>

            <div className="relative mx-auto mt-8 grid w-full grid-cols-1 justify-items-center gap-[3vw] lg:grid-cols-2 lg:gap-[2.5vw]">
              <div className="pointer-events-none absolute left-1/2 top-[42%] hidden -translate-x-1/2 lg:block" aria-hidden>
                <div className="flex h-24 w-px flex-col items-center bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                <motion.div
                  className="-mt-1 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-900/10 ring-4 ring-white"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </div>

              <motion.div
                className={`relative flex shrink-0 flex-col overflow-hidden rounded-2xl p-px shadow-[0_20px_60px_-28px_rgba(15,23,42,0.5)] ring-1 ring-white/10 ${leakageCardWidthClass}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 28px 72px -32px rgba(15, 23, 42, 0.5)",
                  transition: { duration: 0.35, ease: smoothEase },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/25 via-indigo-600/20 to-slate-900" aria-hidden />
                <div className="relative flex min-h-0 flex-1 flex-col rounded-[15px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4">
                  <div className="flex flex-wrap items-end justify-between gap-2 border-b border-white/10 pb-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Iddion RegX leakage snapshot
                      </p>
                      <p className="mt-1 text-base font-semibold tracking-tight text-white">Typical Enterprise Scenario</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/70 ring-1 ring-white/10">
                      Illustrative model
                    </span>
                  </div>
                  <div className="mt-3 flex flex-1 flex-col divide-y divide-white/10">
                    {leakageSnapshotRows.map((row) => (
                      <div key={row.label} className="flex items-center gap-2.5 py-2 first:pt-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-sky-200 ring-1 ring-white/10">
                          <LeakageSnapshotRowIcon name={row.icon} />
                        </div>
                        <p className="min-w-0 flex-1 text-[11px] font-medium leading-snug text-white/88">{row.label}</p>
                        <div className="shrink-0 rounded-md bg-gradient-to-br from-sky-400 to-sky-500 px-2 py-1 text-[11px] font-bold tabular-nums text-slate-950 shadow-md shadow-sky-900/30">
                          {row.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 shrink-0 space-y-2 border-t border-white/10 pt-3">
                    <div className="flex flex-row items-end justify-between gap-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Annual spend</span>
                      <span className="text-2xl font-bold tabular-nums tracking-tight text-white">
                        ₹18{" "}
                        <span className="text-slate-200">Cr</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/[0.06] px-2.5 py-1.5 ring-1 ring-white/10">
                      <span className="text-[10px] font-medium text-white/60">Recoverable with CLMS (est.)</span>
                      <span className="text-xs font-bold tabular-nums text-emerald-300">₹1.4 Cr / year</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`relative flex shrink-0 flex-col overflow-hidden rounded-2xl border border-rose-100/90 bg-white/90 p-4 shadow-[0_18px_50px_-30px_rgba(190,18,60,0.3)] ring-1 ring-rose-100/60 backdrop-blur-md ${leakageCardWidthClass}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 24px 60px -28px rgba(190, 24, 93, 0.4)",
                  transition: { duration: 0.35, ease: smoothEase },
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-rose-100/80 pb-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-900/80">Where you lose money</p>
                    <p className="mt-1 text-xs text-slate-600">Ranked by typical exposure in multi-site contractor ops</p>
                  </div>
                  <span className="rounded-lg bg-rose-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-rose-700 ring-1 ring-rose-100">
                    Annual bleed
                  </span>
                </div>
                <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                  {leakageBleedItems.map((item, barIdx) => (
                    <li key={item.label}>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-rose-50 to-white text-rose-600 ring-1 ring-rose-100/80">
                          {item.icon === "user-x" && (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11a4 4 0 100-8 4 4 0 000 8zM5 21a7 7 0 0114 0M21 12h-4m0 0l2-2m-2 2l2 2" />
                            </svg>
                          )}
                          {item.icon === "doc" && (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                          {item.icon === "clock" && (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {item.icon === "alert" && (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          )}
                          {item.icon === "stack" && (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <span className="text-xs font-semibold text-slate-800">{item.label}</span>
                            <span className="text-xs font-bold tabular-nums text-slate-900">{item.amount}</span>
                          </div>
                          <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200/80">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-rose-400 to-rose-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.pct}%` }}
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{
                                duration: 1.05,
                                ease: smoothEase,
                                delay: Math.min(barIdx * 0.07, 0.35),
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <motion.div
                  className="group mt-5 flex cursor-default flex-row items-center justify-between gap-1.5 rounded-xl bg-gradient-to-br from-rose-400 via-rose-400 to-rose-500 px-4 py-3.5 text-white shadow-lg shadow-rose-500/20 transition-[background-image,box-shadow] duration-300 ease-out hover:from-rose-600 hover:via-rose-600 hover:to-red-700 hover:shadow-rose-900/30"
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, ease: smoothEase }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/95 transition-colors duration-300 group-hover:text-white">
                    Total leakage
                  </span>
                  <span className="text-xl font-bold tabular-nums tracking-tight text-white transition-colors duration-300 group-hover:text-white">
                    ₹1.98 Cr / year
                  </span>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_32px_100px_-48px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 }}
              whileHover={{
                y: -4,
                boxShadow: "0 40px 120px -48px rgba(15, 23, 42, 0.42)",
                transition: { duration: 0.35, ease: smoothEase },
              }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent" aria-hidden />
              <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
                <div className="border-b border-slate-100 p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-white/40">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="inline-flex rounded-full border border-blue-200/90 bg-gradient-to-r from-blue-50 to-indigo-50/90 px-2.5 py-0.5 text-xs font-bold uppercase tracking-[0.22em] text-blue-800 shadow-sm ring-1 ring-blue-500/10">
                        With Iddion RegX
                      </p>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-700">
                        What changes when{" "}
                        <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text font-semibold text-transparent">
                          CLMS runs your contractor layer
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {(
                      [
                        {
                          line: "Eliminate ghost workers",
                          icon: "ghost" as const,
                          tag: "Identity",
                          topBar: "from-violet-600 via-fuchsia-500 to-pink-500",
                          cardSurface:
                            "border-violet-200/75 bg-gradient-to-br from-violet-50/95 via-white to-fuchsia-50/45 shadow-[0_12px_40px_-28px_rgba(139,92,246,0.16)] ring-1 ring-violet-500/[0.07] hover:border-violet-300/90 hover:shadow-[0_22px_48px_-28px_rgba(139,92,246,0.22)]",
                          iconBg: "from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/30 ring-2 ring-white/55",
                          tagBadge:
                            "border border-violet-200/90 bg-gradient-to-r from-violet-50 to-fuchsia-50/90 text-violet-950 shadow-sm ring-1 ring-violet-500/10",
                          orb: "from-fuchsia-400/25 to-violet-600/12",
                          footerRail: "from-violet-500 via-fuchsia-500 to-pink-500",
                          footerText: "font-medium text-violet-900/90",
                          checkTint: "text-violet-600",
                        },
                        {
                          line: "99%+ invoice accuracy",
                          icon: "invoice" as const,
                          tag: "Finance",
                          topBar: "from-emerald-500 via-teal-500 to-cyan-500",
                          cardSurface:
                            "border-emerald-200/75 bg-gradient-to-br from-emerald-50/95 via-white to-teal-50/42 shadow-[0_12px_40px_-28px_rgba(16,185,129,0.14)] ring-1 ring-emerald-500/[0.07] hover:border-emerald-300/90 hover:shadow-[0_22px_48px_-28px_rgba(20,184,166,0.2)]",
                          iconBg: "from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-600/28 ring-2 ring-white/55",
                          tagBadge:
                            "border border-emerald-200/90 bg-gradient-to-r from-emerald-50 to-teal-50/90 text-emerald-950 shadow-sm ring-1 ring-emerald-500/10",
                          orb: "from-teal-400/22 to-emerald-600/12",
                          footerRail: "from-emerald-500 via-teal-500 to-cyan-500",
                          footerText: "font-medium text-emerald-900/90",
                          checkTint: "text-emerald-600",
                        },
                        {
                          line: "Real-time workforce visibility",
                          icon: "visibility" as const,
                          tag: "Operations",
                          topBar: "from-sky-500 via-blue-500 to-indigo-600",
                          cardSurface:
                            "border-sky-200/75 bg-gradient-to-br from-sky-50/95 via-white to-blue-50/40 shadow-[0_12px_40px_-28px_rgba(14,165,233,0.14)] ring-1 ring-sky-500/[0.07] hover:border-sky-300/90 hover:shadow-[0_22px_48px_-28px_rgba(59,130,246,0.2)]",
                          iconBg: "from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-600/28 ring-2 ring-white/55",
                          tagBadge:
                            "border border-sky-200/90 bg-gradient-to-r from-sky-50 to-blue-50/90 text-sky-950 shadow-sm ring-1 ring-sky-500/10",
                          orb: "from-blue-400/22 to-indigo-600/12",
                          footerRail: "from-sky-500 via-blue-500 to-indigo-600",
                          footerText: "font-medium text-sky-950/90",
                          checkTint: "text-sky-600",
                        },
                        {
                          line: "Compliance built-in",
                          icon: "compliance" as const,
                          tag: "Governance",
                          topBar: "from-amber-500 via-orange-500 to-rose-600",
                          cardSurface:
                            "border-amber-200/75 bg-gradient-to-br from-amber-50/95 via-white to-orange-50/38 shadow-[0_12px_40px_-28px_rgba(245,158,11,0.12)] ring-1 ring-amber-500/[0.07] hover:border-amber-300/90 hover:shadow-[0_22px_48px_-28px_rgba(251,146,60,0.2)]",
                          iconBg: "from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-600/26 ring-2 ring-white/55",
                          tagBadge:
                            "border border-amber-200/90 bg-gradient-to-r from-amber-50 to-orange-50/90 text-amber-950 shadow-sm ring-1 ring-amber-500/10",
                          orb: "from-orange-400/22 to-rose-600/12",
                          footerRail: "from-amber-500 via-orange-500 to-rose-600",
                          footerText: "font-medium text-amber-950/90",
                          checkTint: "text-amber-600",
                        },
                      ] as const
                    ).map(({ line, icon, tag, topBar, cardSurface, iconBg, tagBadge, orb, footerRail, footerText, checkTint }, bIdx) => (
                      <motion.div
                        key={line}
                        className={`group relative flex flex-col overflow-hidden rounded-2xl border p-4 transition-[transform,box-shadow,border-color] duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0 hover:-translate-y-0.5 ${cardSurface}`}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.38, ease: smoothEase, delay: Math.min(bIdx * 0.06, 0.2) }}
                      >
                        <div
                          className={`pointer-events-none absolute inset-x-0 top-0 z-[2] h-1.5 rounded-t-2xl bg-gradient-to-r shadow-sm ${topBar}`}
                          aria-hidden
                        />
                        <div
                          className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${orb}`}
                          aria-hidden
                        />
                        <div className="relative flex min-h-0 flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <span
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${iconBg}`}
                            >
                              <WithInOpsBenefitIcon variant={icon} />
                            </span>
                            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.12em] shadow-sm sm:text-xs sm:tracking-[0.14em] ${tagBadge}`}>
                              {tag}
                            </span>
                          </div>
                          <p className="mt-3 text-lg font-semibold leading-snug text-slate-900">{line}</p>
                          <div className="mt-auto flex items-center gap-2 border-t border-slate-100/90 pt-2.5 text-left">
                            <span className={`h-0.5 w-6 shrink-0 rounded-full bg-gradient-to-r ${footerRail}`} aria-hidden />
                            <CheckIcon className={`h-3.5 w-3.5 shrink-0 ${checkTint}`} />
                            <span className={`text-xs leading-snug ${footerText}`}>
                              Included in unified CLMS rollout
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950/80 to-slate-950 p-8 lg:p-10 xl:p-12">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_20%_15%,rgba(52,211,153,0.14),transparent_50%),radial-gradient(ellipse_70%_50%_at_90%_80%,rgba(99,102,241,0.18),transparent_52%),radial-gradient(ellipse_90%_60%_at_80%_20%,rgba(56,189,248,0.1),transparent)]"
                    aria-hidden
                  />
                  <div className="relative">
                    <p className="inline-flex rounded-full border border-cyan-400/35 bg-gradient-to-r from-emerald-500/25 via-cyan-500/20 to-indigo-500/25 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100 shadow-sm ring-1 ring-cyan-400/25">
                      The impact
                    </p>
                    <p className="mt-3 max-w-xl bg-gradient-to-r from-white via-sky-100 to-cyan-100 bg-clip-text text-lg font-semibold leading-snug text-transparent sm:text-xl">
                      Measured outcomes on comparable deployments
                    </p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-3">
                      {(
                        [
                          {
                            k: "Leakage prevented",
                            v: "₹1.98 Cr / year",
                            icon: "leakage" as const,
                            topBar: "from-emerald-400 via-teal-400 to-cyan-400",
                            shell:
                              "relative overflow-hidden border border-emerald-400/35 bg-gradient-to-br from-emerald-500/[0.22] via-white/[0.06] to-cyan-600/[0.14] shadow-[0_16px_44px_-28px_rgba(16,185,129,0.35)] ring-1 ring-emerald-400/20 hover:border-emerald-300/55 hover:shadow-[0_22px_50px_-24px_rgba(52,211,153,0.35)]",
                            iconWrap:
                              "bg-gradient-to-br from-emerald-400/45 to-teal-500/30 text-emerald-50 ring-2 ring-emerald-300/30",
                            labelClass: "text-emerald-100/90",
                            valueGradient: "bg-gradient-to-br from-emerald-200 via-teal-100 to-cyan-200",
                          },
                          {
                            k: "Payback period",
                            v: "~3 months",
                            icon: "payback" as const,
                            topBar: "from-amber-400 via-orange-400 to-rose-500",
                            shell:
                              "relative overflow-hidden border border-amber-400/35 bg-gradient-to-br from-amber-500/[0.22] via-white/[0.06] to-rose-600/[0.12] shadow-[0_16px_44px_-28px_rgba(245,158,11,0.28)] ring-1 ring-amber-400/20 hover:border-amber-300/55 hover:shadow-[0_22px_50px_-24px_rgba(251,191,36,0.3)]",
                            iconWrap:
                              "bg-gradient-to-br from-amber-400/45 to-orange-500/30 text-amber-50 ring-2 ring-amber-300/30",
                            labelClass: "text-amber-100/90",
                            valueGradient: "bg-gradient-to-br from-amber-200 via-orange-100 to-rose-200",
                          },
                          {
                            k: "Net annual savings",
                            v: "₹1.49 Cr",
                            icon: "savings" as const,
                            topBar: "from-indigo-400 via-violet-400 to-fuchsia-500",
                            shell:
                              "relative overflow-hidden border border-violet-400/35 bg-gradient-to-br from-indigo-600/[0.28] via-white/[0.06] to-fuchsia-600/[0.14] shadow-[0_16px_44px_-28px_rgba(139,92,246,0.3)] ring-1 ring-violet-400/20 hover:border-violet-300/55 hover:shadow-[0_22px_50px_-24px_rgba(167,139,250,0.32)]",
                            iconWrap:
                              "bg-gradient-to-br from-indigo-400/45 to-fuchsia-500/30 text-violet-50 ring-2 ring-violet-300/30",
                            labelClass: "text-violet-100/90",
                            valueGradient: "bg-gradient-to-br from-indigo-200 via-violet-100 to-fuchsia-200",
                          },
                        ] as const
                      ).map((row, kIdx) => (
                        <motion.div
                          key={row.k}
                          className={`group flex flex-col mt-5 rounded-2xl px-4 py-5 text-center backdrop-blur-sm transition-[transform,box-shadow] duration-300 ${row.shell}`}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={viewport}
                          transition={{ duration: 0.42, ease: smoothEase, delay: Math.min(kIdx * 0.08, 0.24) }}
                          whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.28, ease: smoothEase } }}
                        >
                          <div
                            className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${row.topBar}`}
                            aria-hidden
                          />
                          <motion.span
                            className={`relative z-[1] mx-auto flex h-11 w-11 items-center justify-center rounded-full ${row.iconWrap}`}
                            aria-hidden
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 400, damping: 18 }}
                          >
                            <ImpactKpiIcon variant={row.icon} />
                          </motion.span>
                          <p
                            className={`relative z-[1] mt-4 text-xs font-semibold uppercase leading-snug tracking-wider sm:text-xs ${row.labelClass}`}
                          >
                            {row.k}
                          </p>
                          <p
                            className={`relative z-[1] mt-2 bg-clip-text text-lg font-bold tabular-nums tracking-tight text-transparent sm:text-xl ${row.valueGradient}`}
                          >
                            {row.v}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase, delay: 0.08 }}
            >
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className={`${inopsUi.btnSecondary} gap-2 !bg-blue-600 !text-white !border-blue-600 shadow-sm`}>
                Calculate your savings
                  <motion.span aria-hidden whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 450, damping: 24 }}>
                    →
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className={`${inopsUi.btnSecondary} gap-2 shadow-sm`}>
                  Book a demo
                  <motion.span aria-hidden whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 450, damping: 24 }}>
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ====== INDUSTRIES SLIDER (ABOVE FAQ) ====== */}
        <ClmsIndustriesSlider />

        {/* ====== WHAT IS A LABOUR MANAGEMENT SYSTEM SOFTWARE ====== */}
        {/* <section aria-labelledby="lms-definition-heading" className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 id="lms-definition-heading" className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                What is a labour management system software?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                A labour management system software is a platform that tracks, governs and optimises a workforce from gate entry to wage payment — covering both permanent employees and contract workers on one system of record.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
                className="space-y-5 text-sm leading-relaxed text-slate-600 sm:text-base"
              >
                <p>
                  In Indian manufacturing, labour management system software must handle two workforces simultaneously: permanent employees under the Industrial Disputes Act, and contract workers governed by the Contract Labour (Regulation &amp; Abolition) Act. The compliance obligations, wage structures and statutory deductions differ — but both workforces pass through the same gate and work on the same shop floor.
                </p>
                <p>
                  A labour management system brings them onto one platform so the principal employer has a single attendance record, a single compliance dashboard and a single source for payroll inputs — regardless of whether a worker is on rolls or engaged through a contractor.
                </p>
                <p>
                  Core capabilities include biometric attendance and gate access, shift and workforce scheduling, statutory deductions (PF/ESI/LWF/PT), payroll processing, statutory register generation (Forms V, XIII, XVI and XXII under CLRA), and real-time compliance monitoring against headcount caps and contractor licence conditions.
                </p>
                <p>
                  For contract labour specifically, labour management software adds contractor onboarding and licence management, worker-level deployment tracking per work order, contractor invoice reconciliation against verified attendance, and OT approval workflows — closing the gaps where contractor spend typically leaks.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.08 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "3–5%", label: "Contractor spend lost to ghost workers without a labour management system", accent: "bg-violet-50 border-violet-200 text-violet-700" },
                  { value: "80–120 hrs", label: "Monthly invoice reconciliation time eliminated by automated matching", accent: "bg-amber-50 border-amber-200 text-amber-700" },
                  { value: "Form XIII", label: "CLRA statutory register generated automatically from gate attendance", accent: "bg-emerald-50 border-emerald-200 text-emerald-700" },
                  { value: "9-day rule", label: "Continuous attendance threshold tracked per worker to prevent employment liability", accent: "bg-indigo-50 border-indigo-200 text-indigo-700" },
                ].map((tile) => (
                  <div
                    key={tile.value}
                    className={`rounded-2xl border p-5 ${tile.accent}`}
                  >
                    <p className="text-2xl font-bold tracking-tight">{tile.value}</p>
                    <p className="mt-1.5 text-xs leading-snug text-slate-600">{tile.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section> */}

        {/* ====== PROOF STRIP ====== */}
        <section className="border-t border-slate-200 bg-white py-7 lg:py-8" aria-label="Trusted by">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase }}
            >
              <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Trusted by</p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 lg:gap-x-10">
                {[
                  { src: "/clients/automotive-axle.svg", name: "Automotive Axles", w: 110 },
                  { src: "/clients/ashok-leyland.svg", name: "Ashok Leyland", w: 100 },
                  { src: "/clients/skf.svg", name: "SKF", w: 56 },
                ].map(({ src, name, w }) => (
                  <Image
                    key={name}
                    src={src}
                    alt={name}
                    width={w}
                    height={32}
                    className="h-7 w-auto grayscale opacity-60 transition-opacity duration-200 hover:opacity-90"
                  />
                ))}
              </div>
              <div className="flex shrink-0 flex-wrap items-center justify-center gap-x-1 gap-y-1.5 lg:justify-end">
                {["3,000+ devices", "70+ sites", "ISO/IEC 27001 certified"].map((stat, i) => (
                  <span key={stat} className="flex items-center gap-1 text-xs font-medium text-slate-500">
                    {i > 0 && <span className="mx-1.5 inline-block h-3.5 w-px bg-slate-200" aria-hidden />}
                    {stat}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ====== CLMS VS HRMS ====== */}
        {/* <section aria-labelledby="clms-vs-hrms-heading" className="border-t border-slate-100 bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 id="clms-vs-hrms-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                CLMS vs HRMS: why contract labour needs its own system
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  An HRMS and a Contract Labour Management System share surface features — both track people and payroll — but address different compliance frameworks. An HRMS is designed for permanent employees under the Industrial Disputes Act: standard pay structures, leave management, and centralised HR workflows. A CLMS is designed for the CLRA framework: principal employer liability, contractor licence tracking, per-contractor headcount caps, Form&nbsp;V and Form&nbsp;XIII registers, and invoice reconciliation against a contractor&apos;s claimed headcount.
                </p>
                <p>
                  The practical gap shows at the gate and at the audit. An HRMS records whether someone was present; a CLMS verifies whether they were <em>authorised</em> to be present — checking induction status, medical clearance, BGV completion, and work order validity before the turnstile opens. At invoice time, an HRMS has attendance totals; a CLMS has contractor-wise verified hours that reconcile directly against the vendor bill, flagging over-claims before payment.
                </p>
                <p>
                  Most Indian manufacturers run both: HRMS for permanent staff, CLMS for the contract workforce that often outnumbers them on the shop floor. Iddion RegX integrates with major HRMS platforms so data flows in one direction without duplication.
                </p>
              </div>
            </motion.div>
          </div>
        </section> */}

        <ClmsRoiCalculator />

        <section aria-labelledby="clms-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 id="clms-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Answers to common questions about contract labour management system, compliance, integrations, and multi-site workforce governance. 
              </p>
            </motion.div>

            <motion.div
              className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.35)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
            >
              <ClmsFaqAccordion />
            </motion.div>
          </div>
        </section>

        {/* ====== BOOK DEMO (CLOSING CTA) ====== */}
        <SolutionPageClosingCta
          heading="Book a personalized walkthrough of the Iddion RegX CLMS platform today"
          description="Join leading enterprises that have digitized their Contract Labour Management and taken full control of their contract workforce."
          primaryLabel="Request a Demo"
          secondaryLabel="Download Brochure"
          secondaryHref="/brochures"
          footnote="Trusted by leading Indian manufacturers and infrastructure companies."
          sectionClassName="!pt-7 !pb-12 sm:!px-6 lg:!pb-14"
        />
      </div>
    </MotionConfig>
  );
}