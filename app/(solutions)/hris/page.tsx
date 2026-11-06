"use client";

import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { FlyInText } from "@/app/components/FlyInText";
import { siSap, siSnowflake } from "simple-icons";
import ConnectedEcosystemSection from "@/app/components/ConnectedEcosystemSection";
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
import { hrisFaqItems } from "@/app/lib/hrisFaqItems";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const hrisFaqGroups = (() => {
  const defs = [
    { label: "Compliance & payroll", indices: [0, 1, 2, 7, 9, 11] },
    { label: "Integration & platform", indices: [3, 4, 6, 8, 12, 13, 16] },
    { label: "Implementation", indices: [5, 10, 14, 15] },
  ];
  let n = 0;
  return defs.map((g) => ({
    label: g.label,
    items: g.indices.map((gIdx) => ({ gIdx, item: hrisFaqItems[gIdx], num: ++n })),
  }));
})();

const labourHeroRightBackground = "/WhatsApp Image 2026-05-04 at 12.24.11 PM.jpeg";
const labourHeroRightVideo = mediaVideos.labourManagementHero;

const painPointCards = [
  {
    pillar: "Fragmentation" as const,
    icon: "database" as const,
    title: "Data Silos",
    description: "Employee records scattered across dozens of spreadsheets and old systems.",
    tone: "rose" as const,
  },
  {
    pillar: "Spend risk" as const,
    icon: "alert" as const,
    title: "Payroll Leakage",
    description: "Manual attendance leads to significant overpayment and clerical errors.",
    tone: "amber" as const,
  },
  {
    pillar: "Blind spots" as const,
    icon: "grid" as const,
    title: "No Visibility",
    description: "Lack of real-time reporting makes strategic workforce decisions impossible.",
    tone: "violet" as const,
  },
  {
    pillar: "Regulatory" as const,
    icon: "shieldCheck" as const,
    title: "Compliance Risk",
    description: "Staying up-to-date with changing labor laws and tax regulations is a nightmare.",
    tone: "indigo" as const,
  },
] as const;

const platformControlCards = [
  {
    icon: "userPlus" as const,
    title: "Employee Data Management",
    description:
      "Centralized database acting as a single source of truth for all HR profiles, documents, and historical data.",
    tone: "indigo" as const,
    badge: "Foundation",
  },
  {
    icon: "clock" as const,
    title: "Time & Attendance",
    description:
      "Biometric integration and mobile clock-in for tracking working hours, shifts, and leave in real time.",
    tone: "sky" as const,
    badge: "Operations",
  },
  {
    icon: "creditCard" as const,
    title: "Payroll Automation",
    description:
      "One-click salary processing with automated tax deductions, social security, and direct bank transfers.",
    tone: "emerald" as const,
    badge: "Payroll",
  },
  {
    icon: "userCheck" as const,
    title: "Self-Service Portal",
    description:
      "Empower employees to update personal info, view payslips, and request leave without HR intervention.",
    tone: "violet" as const,
    badge: "Experience",
  },
  {
    icon: "lightning" as const,
    title: "Workflow Automation",
    description: "Automate repetitive tasks like onboarding checklists, approval chains, and automated reminders.",
    tone: "amber" as const,
    badge: "Automation",
  },
  {
    icon: "chartBar" as const,
    title: "Advanced Analytics",
    description:
      "Deep insights into turnover rates, department costs, and workforce performance with 50+ pre-built reports.",
    tone: "cyan" as const,
    badge: "Intelligence",
  },
] as const;


type PlatformCardTone = (typeof platformControlCards)[number]["tone"];

const platformToneIconSurface: Record<PlatformCardTone, string> = {
  indigo:
    "bg-gradient-to-br from-indigo-500/18 via-white to-white text-indigo-600 ring-indigo-200/75 shadow-indigo-500/10",
  sky: "bg-gradient-to-br from-sky-400/18 via-white to-white text-sky-600 ring-sky-200/75 shadow-sky-500/10",
  emerald:
    "bg-gradient-to-br from-emerald-500/18 via-white to-white text-emerald-600 ring-emerald-200/75 shadow-emerald-500/10",
  violet:
    "bg-gradient-to-br from-violet-500/18 via-white to-white text-violet-600 ring-violet-200/75 shadow-violet-500/10",
  amber: "bg-gradient-to-br from-amber-400/18 via-white to-white text-amber-600 ring-amber-200/75 shadow-amber-500/10",
  cyan: "bg-gradient-to-br from-cyan-400/18 via-white to-white text-cyan-600 ring-cyan-200/75 shadow-cyan-500/10",
};

const workforceWorkflowSteps = [
  {
    num: "01",
    title: "Capture Data",
    description: "Onboard employees once into the centralized secure database.",
    accent: "indigo" as const,
  },
  {
    num: "02",
    title: "Track Time",
    description: "Automated logs capture every minute worked across all locations.",
    accent: "sky" as const,
  },
  {
    num: "03",
    title: "Process Pay",
    description: "Payroll engine calculates gross-to-net instantly with zero errors.",
    accent: "emerald" as const,
  },
  {
    num: "04",
    title: "Get Insights",
    description: "Download compliance-ready reports and strategic visual insights.",
    accent: "violet" as const,
  },
] as const;

type WorkflowAccent = (typeof workforceWorkflowSteps)[number]["accent"];

const workflowBadgeSurface: Record<WorkflowAccent, string> = {
  indigo:
    "bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-[0_16px_40px_-12px_rgba(79,70,229,0.55)] ring-2 ring-white/90",
  sky: "bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-[0_16px_40px_-12px_rgba(14,165,233,0.5)] ring-2 ring-white/90",
  emerald:
    "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-[0_16px_40px_-12px_rgba(16,185,129,0.5)] ring-2 ring-white/90",
  violet:
    "bg-gradient-to-br from-violet-600 to-purple-700 text-white shadow-[0_16px_40px_-12px_rgba(124,58,237,0.5)] ring-2 ring-white/90",
};

/** Vertical rail segment color (mobile): gradient from this step toward the next */
const workflowRailToNext: Record<WorkflowAccent, string> = {
  indigo: "from-indigo-400 via-sky-400 to-sky-400",
  sky: "from-sky-400 via-emerald-400 to-emerald-400",
  emerald: "from-emerald-400 via-violet-400 to-violet-400",
  violet: "from-violet-400 to-transparent",
};

/** Brochure CTA — reference panel blue */
const LABOUR_BROCHURE_BLUE = "#006699";

const labourEfficiencyShowcaseCards = [
  {
    id: "mobileApp" as const,
    title: "Mobile App",
    description: "Mobile App is optimized to provide quick & easy access.",
    iconColor: "#808080",
  },
  {
    id: "employeeDatabase" as const,
    title: "Employee Database",
    description: "Get the entire information about the employee in one go.",
    iconColor: "#0066CC",
  },
  {
    id: "payroll" as const,
    title: "Payroll",
    description: "Have a complete command over the payroll.",
    iconColor: "#22AA44",
  },
  {
    id: "timeAttendance" as const,
    title: "Time & Attendance",
    description: "The most comprehensive time-tracking Software.",
    iconColor: "#FF9800",
  },
  {
    id: "leaveManagement" as const,
    title: "Leave Management",
    description: "Manage all your leaves under one umbrella.",
    iconColor: "#0066CC",
  },
  {
    id: "claimReimbursement" as const,
    title: "Claim & Reimbursement",
    description: "Track your Claim & Reimbursement hassle-free.",
    iconColor: "#9C27B0",
  },
  
  {
    id: "tdsTaxPlanner" as const,
    title: "TDS & Tax Planner",
    description: "Salary TDS calculations simplified.",
    iconColor: "#0066CC",
  },
  {
    id: "exitManagement" as const,
    title: "Exit Management",
    description: "It have the information needed to manage employee exits effectively.",
    iconColor: "#E53935",
  },
  {
    id: "travelManagement" as const,
    title: "Travel Management",
    description: "Time-efficient travel expense handling.",
    iconColor: "#0066CC",
  },
  {
    id: "employeeSelfService" as const,
    title: "Employee Self Service",
    description: "A dynamic Employee Self Service Management.",
    iconColor: "#0066CC",
  },
  {
    id: "timeSheet" as const,
    title: "Time Sheet",
    description: "Control labor costs & working hours of employees.",
    iconColor: "#22AA44",
  },
  
  {
    id: "training" as const,
    title: "Training",
    description: "Equip your employees with skills that drive business success.",
    iconColor: "#FF9800",
  },
] as const;

type LabourShowcaseId = (typeof labourEfficiencyShowcaseCards)[number]["id"];

/** Gradient top accent for each efficiency showcase card */
const labourShowcaseCardTopBar: Record<LabourShowcaseId, string> = {
  mobileApp: "from-slate-500 via-slate-400 to-zinc-400",
  employeeDatabase: "from-blue-600 via-sky-500 to-cyan-500",
  payroll: "from-emerald-600 via-teal-500 to-green-500",
  timeAttendance: "from-amber-500 via-orange-500 to-rose-500",
  leaveManagement: "from-sky-500 via-blue-500 to-indigo-600",
  claimReimbursement: "from-violet-600 via-fuchsia-500 to-pink-500",
  tdsTaxPlanner: "from-indigo-600 via-blue-600 to-sky-500",
  exitManagement: "from-rose-600 via-red-500 to-orange-600",
  travelManagement: "from-cyan-500 via-teal-500 to-emerald-600",
  employeeSelfService: "from-blue-500 via-indigo-500 to-violet-600",
  timeSheet: "from-green-600 via-emerald-500 to-teal-500",
  training: "from-violet-500 via-indigo-600 to-blue-700",
};

function LabourEfficiencyShowcaseIcon({ id, className = "h-10 w-10" }: { id: LabourShowcaseId; className?: string }) {
  const stroke = {
    className,
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (id) {
    case "mobileApp":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...stroke}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M10 18h4" />
        </svg>
      );
    case "employeeDatabase":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...stroke}>
          <ellipse cx="12" cy="6" rx="7" ry="2.5" />
          <path d="M5 6v4c0 1.5 3 2.5 7 2.5s7-1 7-2.5V6" />
          <path d="M5 10v4c0 1.5 3 2.5 7 2.5s7-1 7-2.5v-4" />
          <path d="M5 14v4c0 1.5 3 2.5 7 2.5s7-1 7-2.5v-4" />
        </svg>
      );
    case "payroll":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M4 8a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V8z" />
          <path d="M8 12h8M8 16h5" />
        </svg>
      );
    case "timeAttendance":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...stroke}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v6l4 2" />
        </svg>
      );
    case "leaveManagement":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M5 4h10v16H5z" />
          <path d="M9 12h10l2 2v6H9z" />
          <path d="M17 14l3 3m0 0l-3 3m3-3H14" />
        </svg>
      );
    case "claimReimbursement":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M7 4h10v16H7z" />
          <path d="M9 8h6M9 12h4" />
          <path d="M14 18c1.5 0 3-.8 3-2s-1.5-2-3-2-3 .8-3 2 1.5 2 3 2z" />
        </svg>
      );
    case "tdsTaxPlanner":
      return (
        <svg viewBox="0 0 24 24" aria-hidden className={stroke.className}>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth={2} />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fontSize="11"
            fontWeight={700}
            fill="currentColor"
            stroke="none"
            fontFamily="system-ui, sans-serif"
          >
            %
          </text>
        </svg>
      );
    case "exitManagement":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M6 4h9v16H6z" />
          <path d="M14 12h6m0 0l-2.5 2.5M20 12l-2.5-2.5" />
        </svg>
      );
    case "travelManagement":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M5 14l2-7h10l2 7M7 14h10v3H7zM9 17v2h6v-2" />
          <circle cx="8" cy="18" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="16" cy="18" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "employeeSelfService":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...stroke}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="12" cy="10" r="3" />
          <path d="M8 18c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" />
        </svg>
      );
    case "timeSheet":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M8 6h10a2 2 0 012 2v11H8V6z" />
          <path d="M8 6V5a2 2 0 012-2h4a2 2 0 012 2v1" />
          <circle cx="15" cy="11" r="3.5" />
          <path d="M15 9.5V11l1 1" strokeWidth={1.5} />
        </svg>
      );
    case "training":
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...stroke}>
          <circle cx="9" cy="10" r="2.5" />
          <circle cx="15" cy="10" r="2.5" />
          <path d="M5 17c0-1.8 2-3 4-3s3 .5 4 1.5c1-1 2.5-1.5 4-1.5s4 1.2 4 3" />
          <circle cx="18" cy="6" r="2" />
          <path d="M18 4.5v3M16.5 6h3" strokeWidth={1.5} />
        </svg>
      );
    default:
      return null;
  }
}

const businessImpactStats = [
  { value: "90%", label: "Reduction in payroll errors", badge: "+25% Accuracy", accent: "sky" as const },
  { value: "70%", label: "Admin time saved weekly", badge: "~40hrs Saved", accent: "cyan" as const },
  { value: "15x", label: "Faster payroll processing", badge: "Instant Sync", accent: "amber" as const },
  { value: "100%", label: "Compliance confidence", badge: "Audit Ready", accent: "emerald" as const },
] as const;

type ImpactStatAccent = (typeof businessImpactStats)[number]["accent"];

const impactStatAccentTop: Record<ImpactStatAccent, string> = {
  sky: "before:from-sky-400 before:via-cyan-300 before:to-transparent",
  cyan: "before:from-cyan-400 before:via-sky-400 before:to-transparent",
  amber: "before:from-amber-400 before:via-orange-400 before:to-transparent",
  emerald: "before:from-emerald-400 before:via-teal-300 before:to-transparent",
};

const impactStatValueColor: Record<ImpactStatAccent, string> = {
  sky: "text-sky-300 group-hover:text-sky-200",
  cyan: "text-cyan-300 group-hover:text-cyan-200",
  amber: "text-amber-300 group-hover:text-amber-200",
  emerald: "text-emerald-300 group-hover:text-emerald-200",
};

const impactStatOrb: Record<ImpactStatAccent, string> = {
  sky: "bg-sky-400/25",
  cyan: "bg-cyan-400/25",
  amber: "bg-amber-400/20",
  emerald: "bg-emerald-400/22",
};

const impactStatBadgeStyle: Record<ImpactStatAccent, string> = {
  sky: "bg-sky-500/25 text-sky-50 ring-sky-400/45 group-hover:bg-sky-500/35 group-hover:ring-sky-300/55",
  cyan: "bg-cyan-500/25 text-cyan-50 ring-cyan-400/45 group-hover:bg-cyan-500/35 group-hover:ring-cyan-300/55",
  amber: "bg-amber-500/25 text-amber-50 ring-amber-400/40 group-hover:bg-amber-500/35 group-hover:ring-amber-300/50",
  emerald: "bg-emerald-500/25 text-emerald-50 ring-emerald-400/45 group-hover:bg-emerald-500/35 group-hover:ring-emerald-300/55",
};

const ecosystemStackMarks = [
  { name: "SAP", id: "sap" as const },
  { name: "Snowflake", id: "snowflake" as const },
  { name: "Microsoft 365", id: "grid" as const },
  { name: "Workday", id: "workday" as const },
  { name: "Oracle NetSuite", id: "chain" as const },
  { name: "ServiceNow", id: "orbit" as const },
] as const;

/** Pain cards ,  time-and-attendance “Hidden Cost” tile layout */
type PainPointTone = (typeof painPointCards)[number]["tone"];

const painThroughputByTone: Record<PainPointTone, { accentBar: string; iconWrap: string; hoverGlow: string }> = {
  rose: {
    accentBar: "from-rose-500 via-orange-400 to-amber-300",
    iconWrap:
      "bg-rose-50 text-rose-600 ring-rose-500/20 group-hover:bg-rose-500 group-hover:text-white group-hover:ring-rose-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(244,63,94,0.35)]",
  },
  amber: {
    accentBar: "from-amber-500 via-orange-500 to-red-400",
    iconWrap:
      "bg-amber-50 text-amber-700 ring-amber-500/20 group-hover:bg-amber-500 group-hover:text-white group-hover:ring-amber-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(245,158,11,0.38)]",
  },
  violet: {
    accentBar: "from-violet-500 via-fuchsia-500 to-pink-400",
    iconWrap:
      "bg-violet-50 text-violet-600 ring-violet-500/20 group-hover:bg-violet-600 group-hover:text-white group-hover:ring-violet-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(139,92,246,0.35)]",
  },
  indigo: {
    accentBar: "from-indigo-500 via-blue-500 to-cyan-400",
    iconWrap:
      "bg-indigo-50 text-indigo-600 ring-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(99,102,241,0.32)]",
  },
};

function PainPointIcon({ name, className }: { name: (typeof painPointCards)[number]["icon"]; className: string }) {
  const c = `h-6 w-6 ${className}`;
  if (name === "database") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    );
  }
  if (name === "alert") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function PlatformControlIcon({
  name,
  className = "h-6 w-6 text-current",
}: {
  name: (typeof platformControlCards)[number]["icon"];
  className?: string;
}) {
  const c = className;
  if (name === "userPlus") {
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
  if (name === "creditCard") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    );
  }
  if (name === "userCheck") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17l2 2 4-4" />
      </svg>
    );
  }
  if (name === "lightning") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function EcosystemStackMark({ id }: { id: (typeof ecosystemStackMarks)[number]["id"] }) {
  const c = "h-10 w-[6rem] sm:h-11 sm:w-[6.8rem] lg:h-12 lg:w-[7.4rem]";
  if (id === "sap") {
    return (
      <svg className={c} viewBox="0 0 24 24" fill="currentColor" aria-hidden style={{ color: `#${siSap.hex}` }}>
        <path d={siSap.path} />
      </svg>
    );
  }
  if (id === "snowflake") {
    return (
      <svg className={c} viewBox="0 0 24 24" fill="currentColor" aria-hidden style={{ color: `#${siSnowflake.hex}` }}>
        <path d={siSnowflake.path} />
      </svg>
    );
  }
  if (id === "grid") {
    return (
      <svg className={c} viewBox="0 0 96 32" fill="none" aria-hidden>
        <rect x="22" y="8" width="7" height="7" rx="1.3" fill="#F25022" />
        <rect x="31.5" y="8" width="7" height="7" rx="1.3" fill="#7FBA00" />
        <rect x="22" y="17.5" width="7" height="7" rx="1.3" fill="#00A4EF" />
        <rect x="31.5" y="17.5" width="7" height="7" rx="1.3" fill="#FFB900" />
        <text x="48" y="20" fill="#64748B" fontSize="8" fontWeight="700" fontFamily="Arial, sans-serif">
          365
        </text>
      </svg>
    );
  }
  if (id === "workday") {
    return (
      <svg className={c} viewBox="0 0 96 32" fill="none" aria-hidden>
        <path d="M25 20 32 9l7 11" stroke="#F38B00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 9.5c2.4-3 5.9-4.5 10-4.5s7.6 1.5 10 4.5" stroke="#F38B00" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "chain") {
    return (
      <svg className={c} viewBox="0 0 112 32" fill="none" aria-hidden>
        <circle cx="26" cy="16" r="6" stroke="#C74634" strokeWidth="2.2" />
        <circle cx="40" cy="16" r="6" stroke="#C74634" strokeWidth="2.2" />
        <path d="M32 16h2" stroke="#C74634" strokeWidth="2.2" strokeLinecap="round" />
        <text x="52" y="20" fill="#64748B" fontSize="7.5" fontWeight="700" fontFamily="Arial, sans-serif">
          NETSUITE
        </text>
      </svg>
    );
  }
  return (
    <svg className={c} viewBox="0 0 96 32" fill="none" aria-hidden>
      <circle cx="28" cy="16" r="8" stroke="#1BB8F1" strokeWidth="2.2" />
      <path d="M28 11v10M23 14.5c1.8 3 3.5 4.5 5 4.5s3.2-1.5 5-4.5" stroke="#1BB8F1" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export default function LabourManagementPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
        <motion.section
          className="relative w-full border-b border-slate-200/85 bg-white pt-6 sm:pt-8 lg:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <SolutionHeroWaveDecor />
          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
          >
            <div className={`relative min-h-[400px] w-full sm:min-h-[420px] lg:min-h-[min(520px,85vh)] ${SPLIT_HERO_MOBILE_STACK}`}>
              <div
                className={`relative mt-8 h-56 w-full sm:h-64 sm:mt-10 ${SPLIT_HERO_MOBILE_MEDIA_ORDER} lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[52%] ${SPLIT_HERO_MEDIA_MR}`}
              >
                {/* Inner clip for rounded corners; popups stay outside so they are not clipped (see VideoLivePopups). */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-[0_24px_60px_-38px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70 lg:rounded-none lg:shadow-none lg:ring-0">
                  <video
                    className="absolute inset-0 h-full w-full scale-[1.01] object-cover object-[center_35%] mt-15 sm:object-center lg:object-[center_38%]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={labourHeroRightBackground}
                    aria-label="Labour management and HRIS ,  unified workforce, attendance, and payroll"
                  >
                    <source src={labourHeroRightVideo} type="video/mp4" />
                  </video>
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/[0.03] via-transparent to-sky-900/[0.04]"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-white via-white/93 to-transparent sm:w-32 lg:block lg:w-44 xl:w-52"
                    aria-hidden
                  />
                </div>
               
                <VideoLivePopups
                  popups={[
                    {
                      position: "top-left",
                      label: "Live",
                      title: "Workforce sync",
                      className: "top-10 left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:top-10 xl:-left-2",
                      accent: "emerald",
                      animateOnMount: true,
                    },
                    {
                      position: "bottom-right",
                      label: "Today",
                      title: "Roster updated",
                      // subtitle: "All sites reporting",
                      className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-0 xl:-right-2",
                      variant: "icon",
                      icon: "person",

                      accent: "blue",
                      animateOnMount: true,
                    },
                  ]}
                />
              </div>
              <div className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 ${SPLIT_HERO_MOBILE_COPY_ORDER}`}>
                <div
                  className={`max-w-3xl px-1 py-8 sm:px-3 sm:py-10 lg:max-w-[26rem] xl:max-w-xl lg:py-[4.25rem] lg:pr-8 ${SPLIT_HERO_COPY_ML}`}
                >
                  <FlyInText
                    as="span"
                    trigger="mount"
                    direction="down"
                    duration={0.55}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-800 shadow-sm backdrop-blur-sm"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                    Iddion HRIS
                  </FlyInText>

                  <FlyInText
                    as="h1"
                    trigger="mount"
                    direction="left"
                    delay={0.06}
                    duration={0.68}
                    className="home-display-heading inops-type-hero mt-4 flex flex-col gap-1 text-slate-900 sm:mt-5 sm:gap-1.5"
                  >
                    <span className="text-slate-900 whitespace-nowrap">
                      HRIS &amp; Payroll Software for <span className="text-[color:var(--inops-blue)]">Indian Manufacturing</span>
                    </span>
                  </FlyInText>

                  <FlyInText
                    as="p"
                    trigger="mount"
                    direction="up"
                    delay={0.12}
                    duration={0.62}
                    className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base"
                  >
                    InOps HRIS is HR software for Indian manufacturers' permanent workforce. It covers onboarding, biometric attendance, statutory payroll (PF, ESI, PT, LWF), leave and employee records across multiple plants, and runs on the same engine as InOps CLMS, so permanent and contract workers appear on one dashboard.
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
                    <Link
                      href="#labour-efficiency-heading"
                      className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-7 py-3 text-sm font-semibold text-blue-800 shadow-sm transition hover:bg-blue-50"
                    >
                      See HRIS Modules
                    </Link>
                  </FlyInText>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* <ConnectedEcosystemSection /> */}

     


        {/* Pain points ,  disconnected systems */}
        <section
          className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 sm:py-16 lg:py-20"
          aria-labelledby="labour-pain-points-heading"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-rose-100/35 blur-3xl" />
            <div className="absolute -right-32 top-1/3 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-violet-100/30 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-px w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center lg:max-w-4xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/90 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 shadow-sm backdrop-blur-sm">
                The hidden cost
              </span>
              <h2 id="labour-pain-points-heading" className="mt-5 text-balance text-slate-900">
                <span className="block sm:inline">Disconnected Systems.</span>{" "}
                <span className="block sm:inline">Manual Work.</span>{" "}
                <span className="mt-1 block font-semibold text-blue-700 sm:mt-0 sm:inline">
                  Costly Errors.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Stop losing hours to spreadsheets and fragmented HR tools. Unify data and decisions in{" "}
                <span className="font-semibold text-slate-800">one source of truth</span>, before errors become audits.
              </p>
            </motion.div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-6">
              {painPointCards.map((card, i) => {
                const t = painThroughputByTone[card.tone];
                return (
                  <ThroughputMetricCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    chip={card.pillar}
                    metric={String(i + 1).padStart(2, "0")}
                    accentBar={t.accentBar}
                    iconWrap={t.iconWrap}
                    hoverGlow={t.hoverGlow}
                    index={i}
                    icon={<PainPointIcon name={card.icon} className="text-current" />}
                  />
                );
              })}
            </div>
          </div>
        </section>

      

       {/* End-to-end flow — four-step pipeline (Capture → Track → Pay → Insights) */}
        <section
          className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 sm:py-16 lg:py-20"
          aria-labelledby="labour-e2e-flow-heading"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute left-1/2 top-0 h-64 w-[min(90%,48rem)] -translate-x-1/2 rounded-full bg-blue-50/40 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center lg:max-w-4xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex items-center rounded-full border border-blue-300/90 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 shadow-sm backdrop-blur-sm">
                End to end flow
              </span>
              <h2 id="labour-e2e-flow-heading" className="mt-5 text-balance text-slate-900">
                Automated Payroll, Attendance &amp;{" "}
                <span className="font-semibold text-[color:var(--inops-blue)]">Compliance</span>{" "}
                in One HRIS.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                A four-step pipeline from first record to payroll insight—designed to run{" "}
                <span className="font-semibold text-slate-800">without manual rework.</span>
              </p>
            </motion.div>

            {/* Desktop: horizontal timeline */}
            <motion.div
              className="relative mt-14 hidden lg:mt-16 lg:block"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.52, ease: smoothEase, delay: 0.06 }}
            >
              <div
                className="pointer-events-none absolute left-[6%] right-[6%] top-[2rem] z-0 h-[2px] rounded-full bg-slate-200/95"
                aria-hidden
              />
              <div className="relative z-[1] grid grid-cols-4 gap-6 xl:gap-10">
                {workforceWorkflowSteps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.08, 0.24) }}
                  >
                    <div
                      className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums tracking-tight ${workflowBadgeSurface[step.accent]}`}
                    >
                      {step.num}
                    </div>
                    <h3 className="mt-6 text-base font-bold text-slate-900 sm:text-lg">{step.title}</h3>
                    <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-slate-600 sm:text-base">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile / tablet: vertical timeline */}
            <motion.div
              className="relative mx-auto mt-12 max-w-lg lg:hidden"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.48, ease: smoothEase, delay: 0.04 }}
            >
              {workforceWorkflowSteps.map((step, i) => (
                <div key={step.num} className="relative flex gap-4 pb-10 last:pb-0">
                  {i < workforceWorkflowSteps.length - 1 ? (
                    <div
                      className={`pointer-events-none absolute left-[1.6875rem] top-[3.5rem] bottom-0 w-[3px] rounded-full bg-gradient-to-b ${workflowRailToNext[step.accent]}`}
                      aria-hidden
                    />
                  ) : null}
                  <div
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums ${workflowBadgeSurface[step.accent]}`}
                  >
                    {step.num}
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* Built for efficiency — 15-module showcase (reference layout) */}
        <section className="border-t border-slate-200/80 bg-white py-10 sm:py-12 lg:py-14" aria-labelledby="labour-efficiency-heading">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <motion.h2
              id="labour-efficiency-heading"
              className="text-center text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-[2rem] lg:leading-tight"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase }}
            >
              Built for Efficiency and Control
            </motion.h2>

            <div className="mx-auto mt-10 grid max-w-none grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-12 lg:grid-cols-4 lg:gap-5">
              {labourEfficiencyShowcaseCards.map((card, i) => (
                <motion.article
                  key={card.id}
                  className="relative flex flex-col items-center overflow-hidden rounded-[10px] border border-[#e5e5e5] bg-white px-5 py-[25px] text-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] sm:px-6"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase, delay: Math.min(i * 0.03, 0.18) }}
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 z-[1] h-1.5 rounded-t-[10px] bg-gradient-to-r shadow-sm ${labourShowcaseCardTopBar[card.id]}`}
                    aria-hidden
                  />
                  <span className="relative z-[2] flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14" style={{ color: card.iconColor }}>
                    <LabourEfficiencyShowcaseIcon id={card.id} className="h-10 w-10 sm:h-11 sm:w-11" />
                  </span>
                  <h3 className="relative z-[2] mt-4 text-base font-bold leading-snug text-[#222222] sm:text-base">{card.title}</h3>
                  <p className="relative z-[2] mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
                </motion.article>
              ))}
            </div>

           
          </div>
        </section>

        {/* Business impact ,  metrics */}
        <section
          className="relative overflow-hidden border-t border-slate-800 bg-slate-950 py-10 text-white lg:py-12"
          aria-labelledby="labour-business-impact-heading"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-600/15 blur-[100px]" />
            <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-600/12 blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(56,189,248,0.12),transparent_55%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Proof points</p>
                <h2 id="labour-business-impact-heading" className="mt-3">
                  See the{" "}
                  <span className="font-semibold text-slate-300">
                    Business Impact
                  </span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                  Companies that switch to our platform report significant improvements across every core HR metric within
                  the first quarter.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-[0_14px_40px_-16px_rgba(255,255,255,0.35)] ring-1 ring-white/30 transition-[background-color,box-shadow,transform] duration-300 hover:bg-sky-50 hover:shadow-[0_18px_50px_-14px_rgba(56,189,248,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:w-auto"
                >
                  Download Impact Report
                </Link>
              </motion.div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
              {businessImpactStats.map((stat, i) => (
                <motion.article
                  key={stat.label}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:opacity-60 before:transition-opacity before:duration-300 before:content-[''] group-hover:before:opacity-100 ${impactStatAccentTop[stat.accent]}`}
                  initial={{ opacity: 0, y: 26, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={viewport}
                  transition={{
                    duration: 0.52,
                    ease: smoothEase,
                    delay: Math.min(i * 0.09, 0.27),
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 28px 60px -24px rgba(15, 23, 42, 0.85), 0 0 0 1px rgba(56, 189, 248, 0.15)",
                    transition: { duration: 0.32, ease: smoothEase },
                  }}
                >
                  <div
                    className={`pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${impactStatOrb[stat.accent]}`}
                    aria-hidden
                  />
                  <motion.p
                    className={`relative text-3xl font-bold tabular-nums transition-[color,filter] duration-300 sm:text-[2rem] ${impactStatValueColor[stat.accent]} group-hover:drop-shadow-[0_0_22px_rgba(255,255,255,0.12)]`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{
                      duration: 0.45,
                      ease: smoothEase,
                      delay: Math.min(0.12 + i * 0.08, 0.32),
                    }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="relative mt-3 text-sm font-medium leading-snug text-white/95 transition-colors duration-300 group-hover:text-white sm:text-base">
                    {stat.label}
                  </p>
                  <p
                    className={`relative mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 transition-all duration-300 ${impactStatBadgeStyle[stat.accent]}`}
                  >
                    {stat.badge}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem & integrations ,  logo strip */}
        <section
          className="border-t border-slate-200/80 bg-white py-10 lg:py-12"
          aria-labelledby="labour-ecosystem-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-base">
                Ecosystem &amp; Integrations
              </p>
              <h2
                id="labour-ecosystem-heading"
                className="mt-3 text-[2rem] font-bold tracking-tight text-slate-900 sm:text-[2.25rem] lg:text-[2.5rem]"
              >
                Works Seamlessly With Your Stack
              </h2>
            </motion.div>
            <motion.div
              className="mt-11 flex flex-wrap items-center justify-center gap-x-12 gap-y-9 sm:gap-x-14 lg:gap-x-16"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 }}
            >
              {ecosystemStackMarks.map((partner) => (
                <div key={partner.name} className="flex flex-col items-center gap-2.5">
                  <EcosystemStackMark id={partner.id} />
                  <span className="text-center text-xs font-medium uppercase tracking-wide text-slate-400 sm:text-sm">
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Designed for simplicity ,  UI previews */}
        <section
          className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-slate-100/90 via-white to-[#f0f9ff] py-14 lg:py-18"
          aria-labelledby="labour-simplicity-heading"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 0v72M0 36h72' stroke='%2394a3b8' stroke-opacity='0.06' stroke-width='1'/%3E%3C/svg%3E")` }} />
            <div className="absolute left-[15%] top-0 h-[28rem] w-[28rem] rounded-full bg-blue-200/35 blur-[120px]" />
            <div className="absolute bottom-0 right-[12%] h-[26rem] w-[26rem] rounded-full bg-indigo-200/30 blur-[110px]" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/25 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-2xl text-center lg:max-w-3xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.52, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--inops-blue)] shadow-[0_8px_32px_-16px_rgba(29,95,191,0.35)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--inops-blue)] shadow-[0_0_8px_rgba(29,95,191,0.8)]" />
                Product preview
              </span>
              <h2 id="labour-simplicity-heading" className="mt-5 text-slate-900">
                Designed for{" "}
                <span className="font-semibold text-[color:var(--inops-blue)]">
                  Simplicity
                </span>
              </h2>
              <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-[color:var(--inops-blue)] via-sky-400 to-cyan-400 opacity-90 shadow-sm shadow-sky-500/30" />
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Complex operations behind an intuitive, elegant interface that anyone can use.
              </p>
            </motion.div>

            <div className="mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:mx-auto lg:mt-14 lg:max-w-none lg:grid-cols-3 lg:gap-6">
              <motion.div
                className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-[0_20px_48px_-36px_rgba(15,23,42,0.22)] ring-1 ring-white/80 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-sky-400 before:via-blue-500 before:to-indigo-600 before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-5"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.05 }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  boxShadow: "0 28px 64px -38px rgba(15, 23, 42, 0.3)",
                  transition: { duration: 0.38, ease: smoothEase },
                }}
              >
                <div className="pointer-events-none absolute -right-20 top-16 h-40 w-40 rounded-full bg-gradient-to-br from-sky-400/20 to-blue-600/5 blur-3xl transition-opacity duration-700 group-hover/card:opacity-100" aria-hidden />
                <div className="relative flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">People</p>
                    <h3 className="mt-0.5 text-base font-semibold leading-snug text-slate-900">Employee Directory</h3>
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200/60 bg-emerald-50/90 px-2 py-0.5 shadow-sm ring-1 ring-emerald-500/10 backdrop-blur-sm">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.9)]" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wide text-emerald-800">Live</span>
                  </span>
                </div>
                <ul className="relative mt-4 space-y-2" aria-label="Sample directory rows">
                  {[
                    {
                      initials: "AK",
                      hue: "bg-gradient-to-br from-sky-400 to-blue-700 text-white shadow-lg shadow-sky-500/30 ring-2 ring-white/90",
                      name: "Arjun Kumar",
                      role: "Senior Analyst",
                      bar: "from-sky-400 to-blue-600",
                    },
                    {
                      initials: "MR",
                      hue: "bg-gradient-to-br from-violet-400 to-purple-700 text-white shadow-lg shadow-violet-500/30 ring-2 ring-white/90",
                      name: "Meera Rao",
                      role: "HR Specialist",
                      bar: "from-violet-400 to-fuchsia-600",
                    },
                    {
                      initials: "LS",
                      hue: "bg-gradient-to-br from-emerald-400 to-teal-700 text-white shadow-lg shadow-emerald-500/30 ring-2 ring-white/90",
                      name: "Laksh Singh",
                      role: "Payroll Ops",
                      bar: "from-emerald-400 to-cyan-600",
                    },
                  ].map((row, i) => (
                    <motion.li
                      key={row.initials}
                      className={`group/row relative flex items-center gap-2 overflow-hidden rounded-lg border border-slate-100/90 bg-gradient-to-r from-white to-slate-50/90 px-2.5 py-2 shadow-sm ring-1 ring-slate-900/[0.03] transition-all duration-300 hover:border-sky-200/90 hover:shadow-md hover:shadow-sky-500/10`}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.42, ease: smoothEase, delay: 0.1 + i * 0.07 }}
                    >
                      <span
                        className={`pointer-events-none absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-gradient-to-b opacity-0 transition-opacity duration-300 group-hover/row:opacity-100 ${row.bar}`}
                        aria-hidden
                      />
                      <span
                        className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${row.hue}`}
                      >
                        {row.initials}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold tracking-tight text-slate-900">{row.name}</p>
                        <p className="truncate text-xs font-medium text-slate-500">{row.role}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-gradient-to-r from-sky-500/12 to-blue-600/12 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-sky-800 ring-1 ring-sky-300/50 backdrop-blur-[2px]">
                        Active
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-[0_20px_48px_-36px_rgba(15,23,42,0.22)] ring-1 ring-white/80 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-emerald-400 before:via-teal-500 before:to-cyan-500 before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-5"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.08 }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  boxShadow: "0 28px 64px -38px rgba(15, 23, 42, 0.3)",
                  transition: { duration: 0.38, ease: smoothEase },
                }}
              >
                <div className="pointer-events-none absolute -left-16 bottom-6 h-36 w-36 rounded-full bg-gradient-to-tr from-emerald-400/25 to-transparent blur-3xl transition-opacity duration-700 group-hover/card:opacity-100" aria-hidden />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Time</p>
                  <h3 className="mt-0.5 text-base font-semibold leading-snug text-slate-900">Attendance Logs</h3>
                </div>
                <div className="relative mt-4 overflow-hidden rounded-lg border border-slate-200/70 bg-white shadow-[inset_0_2px_12px_rgba(248,250,252,0.9),0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-slate-100/80">
                  <table className="w-full min-w-0 text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 bg-gradient-to-r from-slate-50/95 via-white to-sky-50/50 backdrop-blur-sm">
                        <th className="px-2.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                          Date
                        </th>
                        <th className="px-2.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                          Clock in
                        </th>
                        <th className="px-2.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100/90 text-slate-700">
                      {[
                        { date: "Oct 24", clockIn: "09:00 AM", status: "On Time", late: false },
                        { date: "Oct 23", clockIn: "09:15 AM", status: "Late", late: true },
                        { date: "Oct 22", clockIn: "08:55 AM", status: "On Time", late: false },
                        { date: "Oct 21", clockIn: "09:00 AM", status: "On Time", late: false },
                      ].map((row) => (
                        <tr
                          key={row.date}
                          className="transition-colors duration-200 hover:bg-gradient-to-r hover:from-sky-50/90 hover:to-white"
                        >
                          <td className="whitespace-nowrap px-2.5 py-2 text-xs font-semibold text-slate-900">{row.date}</td>
                          <td className="whitespace-nowrap px-2.5 py-2 tabular-nums text-xs text-slate-600">{row.clockIn}</td>
                          <td className="px-2.5 py-2">
                            <span
                              className={
                                row.late
                                  ? "inline-flex rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-2 py-0.5 text-xs font-semibold text-amber-900 ring-1 ring-amber-300/70 shadow-sm"
                                  : "inline-flex rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 px-2 py-0.5 text-xs font-semibold text-emerald-900 ring-1 ring-emerald-300/70 shadow-sm"
                              }
                            >
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.div
                className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-[0_20px_48px_-36px_rgba(15,23,42,0.22)] ring-1 ring-white/80 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-blue-600 before:via-indigo-600 before:to-violet-600 before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-5"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.12 }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  boxShadow: "0 28px 64px -38px rgba(15, 23, 42, 0.3)",
                  transition: { duration: 0.38, ease: smoothEase },
                }}
              >
                <div className="pointer-events-none absolute -right-16 top-24 h-36 w-36 rounded-full bg-gradient-to-bl from-blue-500/25 via-indigo-500/10 to-transparent blur-3xl" aria-hidden />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Payroll</p>
                  <h3 className="mt-0.5 text-base font-semibold leading-snug text-slate-900">Payroll Summary</h3>
                </div>
                <div className="relative mt-4 flex flex-1 flex-col items-center">
                  <div className="relative flex h-[7rem] w-[7rem] items-center justify-center">
                    <div className="pointer-events-none absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-blue-400/25 via-cyan-400/15 to-transparent blur-2xl" aria-hidden />
                    <svg className="relative h-full w-full -rotate-90 drop-shadow-[0_4px_24px_rgba(37,99,235,0.25)]" viewBox="0 0 36 36" aria-hidden>
                      <defs>
                        <linearGradient id="labourPayrollRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1d4ed8" />
                          <stop offset="50%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                      </defs>
                      <circle cx="18" cy="18" r="15.915" fill="none" className="stroke-slate-100" strokeWidth="3.2" />
                      <motion.circle
                        cx="18"
                        cy="18"
                        r="15.915"
                        fill="none"
                        stroke="url(#labourPayrollRingGrad)"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeDasharray="100 100"
                        initial={{ strokeDashoffset: 100 }}
                        whileInView={{ strokeDashoffset: 25 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1.15, ease: smoothEase, delay: 0.12 }}
                      />
                    </svg>
                    <motion.span
                      className="absolute text-lg font-bold tracking-tight text-slate-900"
                      initial={{ opacity: 0, scale: 0.82 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.4 }}
                    >
                      75%
                    </motion.span>
                  </div>
                  <p className="mt-3 tabular-nums text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    <span className="text-slate-900">
                      Rs. 452,300
                    </span>
                  </p>
                  <p className="mt-1.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Total Net Pay Disbursed
                  </p>
                </div>
                <button
                  type="button"
                  className="relative mt-4 w-full overflow-hidden rounded-lg bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-2.5 text-xs font-semibold text-white shadow-[0_10px_28px_-14px_rgba(15,23,42,0.55)] ring-1 ring-white/10 transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100 hover:shadow-[0_14px_36px_-14px_rgba(29,95,191,0.55)] hover:ring-sky-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:text-sm"
                >
                  <span className="relative">View Batch Details</span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====== EDITORIAL H2 SECTIONS: cloud-based HR software / HRMS multi-site / attendance management ====== */}
        {/* <section aria-labelledby="hris-editorial-heading" className="border-t border-slate-100 bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">

            <motion.div
              className="mx-auto max-w-3xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 id="hris-editorial-heading" className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Cloud-based HR software
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Cloud-based HR software puts employee records, payroll, attendance and compliance on a hosted platform that every authorised stakeholder — plant HR, finance, group CHRO — can access from any location without a VPN or server room. For Indian manufacturers running plants in multiple states, that means a single system of record regardless of where a worker is based or which state&apos;s statutory rules apply to them.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                InOps HRMS runs on a cloud infrastructure with role-based access controls, audit logging on every record change, and data handling aligned with DPDP Act obligations. On-premise deployment is available where plant data-residency requirements demand it. Either way, the functional footprint is identical — biometric attendance integration, statutory payroll, and the CLMS linkage that makes InOps the platform most manufacturers don&apos;t outgrow.
              </p>
            </motion.div>

            <div className="my-12 border-t border-slate-200" />

            
            <motion.div
              className="mx-auto max-w-3xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                HRMS for multi-site manufacturing
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                A manufacturing HRMS must work the same way in a plant in Tamil Nadu, a distribution centre in Maharashtra, and a corporate office in Delhi — with state-specific statutory rules, different shift patterns, different device estates at each gate, and different contractor mixes at each site, all consolidated into one payroll run and one compliance view.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                InOps HRMS is built multi-site from the ground up: workforce data, attendance, leave, and payroll are managed per site with aggregate reporting available at group level. Plant HR sees their site; corporate HR sees all sites. Permanent employees who move between sites carry their records with them. InOps currently manages workforces across 70+ industrial sites — the multi-site architecture is the default, not an add-on.
              </p>
            </motion.div>

            <div className="my-12 border-t border-slate-200" />

            
            <motion.div
              className="mx-auto max-w-3xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Attendance management software
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Attendance management software in a manufacturing environment does more than record punch-in and punch-out times. It assigns each punch to a shift, validates OT against a threshold and approval rule, computes late-mark and half-day logic per shift policy, reconciles the result against leave records, and produces a wage-input that payroll can process without manual adjustment.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                InOps attendance management integrates with ZKTeco, eSSL, and Realtime biometric hardware — face terminals, fingerprint readers, CCTV-based AI attendance, and RFID card readers. The same attendance engine covers permanent employees (HRIS) and contract workers (<Link href="/contract-labour-management" className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200">CLMS</Link>) on shared hardware, so there is one device estate, one enrolment per person, and one attendance record that both workforce systems draw from. See <Link href="/biometric-devices" className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200">biometric devices</Link> for supported hardware.
              </p>
            </motion.div>

          </div>
        </section> */}

        <section aria-labelledby="hris-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              {/* <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-blue-800">
                HRIS FAQ
              </span> */}
              <h2 id="hris-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Answers to common questions about employee records, HR automation, payroll integrations, and scalable workforce management.
              </p>
            </motion.div>

            <motion.div
              className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.35)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
            >
              <div className="divide-y-0">
                {hrisFaqGroups.map((group) => (
                  <div key={group.label}>
                    <div className="border-b border-slate-200 bg-slate-100/60 px-5 py-3 sm:px-7">
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{group.label}</h3>
                    </div>
                    <div className="divide-y divide-slate-200">
                      {group.items.map(({ gIdx, item, num }) => (
                        <details key={item.question} className="group bg-white/70 px-5 py-5 open:bg-white sm:px-7 sm:py-6">
                          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:hidden">
                            <span className="flex min-w-0 gap-4">
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold tabular-nums text-blue-700 ring-1 ring-blue-100">
                                {String(num).padStart(2, "0")}
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
                          {gIdx === 1 ? (
                            <p className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:pl-12 sm:text-base">
                              An HRIS manages your own employees; a CLMS governs contract workers supplied by third-party contractors — licences, gate compliance, CLRA registers, and contractor invoice verification, which an HRIS is not designed to handle. Most large plants run both. InOps is one of the few platforms where HRIS and CLMS share a single attendance and identity engine, so permanent and contract workforces are visible together without duplicate hardware or data stitching.{" "}
                              <Link href="/contract-labour-management" className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200">See how InOps CLMS handles contract labour</Link>, or read the{" "}
                              <Link href="/blog/clms-vs-hrms" className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200">CLMS vs HRMS breakdown on our blog</Link>.
                            </p>
                          ) : (
                            <p className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:pl-12 sm:text-base">{item.answer}</p>
                          )}
                        </details>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <SolutionPageClosingCta
          headingId="labour-final-cta-heading"
          heading="Run your HR Ops with less friction"
          description={
            <>
              Teams across Indian manufacturing plants use this platform to tighten scheduling, stay compliant, and pay people on time.
              Book a live walkthrough mapped to how your plant actually works, or talk to our team about your compliance needs.
            </>
          }
          primaryLabel="Book a tailored demo"
          secondaryLabel="Get a free consultation"
          footnote="No commitment · GDPR & DPDP-ready · Implementation support included"
        />
      </div>
    </MotionConfig>
  );
}
