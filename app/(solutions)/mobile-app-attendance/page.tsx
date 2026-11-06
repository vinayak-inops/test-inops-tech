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

const mobileAppHeroImage = "/WhatsApp Image 2026-05-04 at 12.24.06 PM.jpeg";

const mobileAppHeroVideo = mediaVideos.mobileAppHero;
const smartAttendanceWhySectionVideo = mediaVideos.smartAttendanceMobile;
const viewport = { once: true, amount: 0.2 };

const featureCards = [
  {
    title: "Quick Check-In / Check-Out",
    description: "Employees can mark attendance in seconds with location-aware actions and clear status indicators.",
  },
  {
    title: "Leave & Regularization",
    description: "Submit leave requests and attendance regularizations from the same app with manager approval tracking.",
  },
  {
    title: "Shift & Schedule View",
    description: "Workers can see today's shift, upcoming roster, and exceptions without calling HR.",
  },
  {
    title: "Real-Time Activity Log",
    description: "Every attendance action is reflected instantly for employees, supervisors, and HR operations.",
  },
  {
    title: "Secure Identity Layer",
    description: "Role-based access and verified user identity keep attendance and profile data protected.",
  },
  {
    title: "Centralized Sync",
    description: "Attendance events sync with connected modules for payroll, compliance, and workforce analytics.",
  },
];

const mobileAttendanceFaqItems = [
  {
    question: "What is a mobile attendance app for contract workers?",
    answer:
      "A mobile attendance app lets workers mark attendance from a smartphone using face recognition and GPS validation, instead of a fixed biometric terminal. For contract workforces it solves the sites a gate can't serve — construction corridors, road projects, distributed depots — where attendance evidence is otherwise a paper muster.",
  },
  {
    question: "How does it stop fake or proxy punches?",
    answer:
      "Three checks run together: on-device face match against the enrolled identity, GPS validation against the site geofence, and timestamp verification. A punch outside the geofence, or by a face that doesn't match, is flagged rather than recorded.",
  },
  {
    question: "Does it work without internet at remote sites?",
    answer:
      "Punches and their verification data are captured on-device when the network drops and sync automatically once connectivity returns — which matters on project sites where coverage is unreliable.",
  },
  {
    question: "Is mobile attendance valid for CLRA and statutory records?",
    answer:
      "Yes. Mobile events carry worker identity, timestamp, and location into the same registers and reports as gate-based attendance, so Form V/XIII records and statutory filings are generated identically regardless of capture method.",
  },
  {
    question: "Can workers use it for leave, payslips, and earned wages?",
    answer:
      "Yes — the same app gives workers self-service access to attendance history, leave applications, payslips, and where enabled, earned wage access to withdraw wages already earned before payday.",
  },
  {
    question: "What can supervisors do from the app?",
    answer:
      "Approve exceptions, authorise overtime, view live team attendance across sites, and receive push escalations on threshold breaches — without logging into the desktop system.",
  },
  {
    question: "Should we use mobile or fixed readers?",
    answer:
      "Fixed readers suit high-density plant gates where throughput and physical enforcement matter — see face recognition attendance. Mobile suits moving or distributed sites. Most infrastructure clients run both on one platform, so a worker's identity and records stay unified whichever method captured the shift.",
  },
  {
    question: "Does it require workers to own smartphones?",
    answer:
      "Worker-owned devices are the common case for supervisory and skilled roles. For workforces where phone ownership is inconsistent, supervisor-operated capture on a shared device works the same way — the face match identifies the worker, not the phone.",
  },
  {
    question: "How is location data handled?",
    answer:
      "Location is captured at the moment of punch as verification evidence, not tracked continuously. Retention follows your policy, and handling aligns with DPDP Act obligations.",
  },
  {
    question: "Which sites is mobile attendance best suited to?",
    answer:
      "Infrastructure and metro construction, road and pipeline projects, distributed warehouses and depots, field service teams, and any BOCW-regulated worksite where the workforce moves between locations weekly and no fixed gate exists.",
  },
] as const;

type AccurateTrackingTone = "sky" | "indigo" | "emerald" | "violet" | "cyan" | "amber";

/** Time & attendance “Hidden Cost” card tokens */
const accurateTrackingThroughputByTone: Record<
  AccurateTrackingTone,
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
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(245,158,11,0.36)]",
  },
};

const accurateTrackingFeatures = [
  {
    pillar: "Identity" as const,
    title: "Face Recognition",
    description:
      "Selfie check-ins with liveness and anti-spoofing so the right person is at the right place, without shared PINs or proxy cards.",
    icon: "face" as const,
    tone: "sky" as const,
  },
  {
    pillar: "Contactless" as const,
    title: "Contactless Attendance",
    description:
      "No extra hardware: people clock in on their own phones with QR, deep links, or geofenced zones you define.",
    icon: "phone" as const,
    tone: "indigo" as const,
  },
  {
    pillar: "Resilience" as const,
    title: "Offline Sync",
    description:
      "Punches and proof are stored on-device when the network drops, then sync to the cloud automatically when you’re back online.",
    icon: "offline" as const,
    tone: "emerald" as const,
  },
  {
    pillar: "Directory" as const,
    title: "Employee Directory",
    description:
      "Roles, departments, cost centers, and rosters in one directory, so attendance rules and approvals stay consistent.",
    icon: "users" as const,
    tone: "violet" as const,
  },
  {
    pillar: "Archive" as const,
    title: "Secure Cloud Storage",
    description:
      "Encrypted logs and media retained for audits, with retention windows that fit your policy, not a spreadsheet export.",
    icon: "cloud" as const,
    tone: "cyan" as const,
  },
  {
    pillar: "Trust" as const,
    title: "Fraud Prevention",
    description:
      "Rules and anomaly signals surface buddy punching, GPS spoofing, and repeat exceptions before payroll closes.",
    icon: "shield" as const,
    tone: "amber" as const,
  },
] as const;

const workflowSteps = [
  {
    title: "Open App",
    description: "Employee opens the app on-site, identity and policy context load automatically.",
    icon: "open" as const,
    tone: "sky" as const,
  },
  {
    title: "Face Scan",
    description: "A fast liveness-aware capture validates the person in seconds.",
    icon: "scan" as const,
    tone: "indigo" as const,
  },
  {
    title: "Captured",
    description: "Attendance marks with timestamp, location proof, and audit metadata.",
    icon: "captured" as const,
    tone: "emerald" as const,
  },
  {
    title: "Cloud Sync",
    description: "Events stream to HR, payroll, and rules engines as connectivity allows.",
    icon: "sync" as const,
    tone: "violet" as const,
  },
  {
    title: "Dashboard",
    description: "Supervisors see live roster health, exceptions, and export-ready summaries.",
    icon: "dashboard" as const,
    tone: "cyan" as const,
  },
] as const;

const workflowCircleStyles: Record<
  (typeof workflowSteps)[number]["tone"],
  { gradient: string; shadow: string }
> = {
  sky: {
    gradient: "from-sky-400 via-sky-500 to-blue-600",
    shadow: "shadow-[0_12px_28px_-6px_rgba(14,165,233,0.45)]",
  },
  indigo: {
    gradient: "from-indigo-500 via-blue-600 to-indigo-700",
    shadow: "shadow-[0_12px_28px_-6px_rgba(99,102,241,0.45)]",
  },
  emerald: {
    gradient: "from-emerald-400 via-teal-500 to-emerald-600",
    shadow: "shadow-[0_12px_28px_-6px_rgba(20,184,166,0.45)]",
  },
  violet: {
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    shadow: "shadow-[0_12px_28px_-6px_rgba(168,85,247,0.45)]",
  },
  cyan: {
    gradient: "from-cyan-400 via-sky-500 to-blue-600",
    shadow: "shadow-[0_12px_28px_-6px_rgba(6,182,212,0.45)]",
  },
};

const integrationBenefits = [
  {
    title: "No Manual Entry",
    description: "Data flows automatically without spreadsheets.",
    tone: "blue" as const,
    label: "Automation",
    icon: "flow" as const,
  },
  {
    title: "Real-time Sync",
    description: "Changes reflect in HR systems instantly.",
    tone: "violet" as const,
    label: "Live pipeline",
    icon: "sync" as const,
  },
  {
    title: "Centralized Data",
    description: "One source of truth for all locations.",
    tone: "emerald" as const,
    label: "Single record",
    icon: "layers" as const,
  },
] as const;

const integrationBenefitPresentation: Record<
  (typeof integrationBenefits)[number]["tone"],
  {
    rail: string;
    iconTile: string;
    iconFg: string;
    outerGlow: string;
    wash: string;
    border: string;
  }
> = {
  blue: {
    rail: "from-sky-400 via-blue-500 to-indigo-600",
    iconTile: "from-sky-500 to-blue-700 shadow-lg shadow-sky-600/25",
    iconFg: "text-cyan-500",
    outerGlow: "from-sky-400/20 via-blue-500/10 to-transparent",
    wash: "from-white via-sky-50/40 to-white",
    border: "border-slate-200/70 hover:border-sky-200/90",
  },
  violet: {
    rail: "from-violet-400 via-purple-500 to-indigo-600",
    iconTile: "from-violet-500 to-indigo-700 shadow-lg shadow-violet-600/25",
    iconFg: "text-fuchsia-500",
    outerGlow: "from-violet-400/18 via-purple-500/8 to-transparent",
    wash: "from-white via-violet-50/35 to-white",
    border: "border-slate-200/70 hover:border-violet-200/90",
  },
  emerald: {
    rail: "from-emerald-400 via-teal-500 to-cyan-600",
    iconTile: "from-emerald-500 to-teal-700 shadow-lg shadow-emerald-600/25",
    iconFg: "text-lime-500",
    outerGlow: "from-emerald-400/18 via-teal-500/8 to-transparent",
    wash: "from-white via-emerald-50/35 to-white",
    border: "border-slate-200/70 hover:border-emerald-200/90",
  },
};

const modernTeamPoints = [
  {
    title: "No Biometrics Required",
    description: "Save thousands on specialized hardware.",
    icon: "shield",
  },
  {
    title: "Easy Deployment",
    description: "Set up your entire in minutes.",
    icon: "play",
  },
  {
    title: "Accurate Tracking",
    description: "Eliminate time theft with AI facial data.",
    icon: "target",
  },
  {
    title: "Reduced Manual Work",
    description: "Automate 80% of attendance processing.",
    icon: "pulse",
  },
] as const;

function FeatureIcon({
  kind,
  className = "h-5 w-5 text-slate-900",
}: {
  kind: (typeof accurateTrackingFeatures)[number]["icon"];
  className?: string;
}) {
  const cls = className;
  if (kind === "face") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="9" cy="10" r="1" />
        <circle cx="15" cy="10" r="1" />
        <path d="M8 15c1 .8 2.2 1.2 4 1.2s3-.4 4-1.2" />
      </svg>
    );
  }
  if (kind === "phone") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" />
      </svg>
    );
  }
  if (kind === "offline") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M2 2l20 20" />
        <path d="M8.6 8.6A6 6 0 0118 12M6 12a6 6 0 011.2-3.6M3.5 8.5A12 12 0 0112 5c3 0 5.7 1.1 7.8 2.9" />
      </svg>
    );
  }
  if (kind === "users") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2" />
        <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
        <path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" />
      </svg>
    );
  }
  if (kind === "cloud") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M7 18h10a4 4 0 100-8 5 5 0 10-9.6 1.5A3.5 3.5 0 007 18z" />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ModernTeamIcon({
  kind,
  className = "h-5 w-5 text-slate-900",
}: {
  kind: (typeof modernTeamPoints)[number]["icon"];
  className?: string;
}) {
  const cls = className;
  if (kind === "shield") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
      </svg>
    );
  }
  if (kind === "play") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M8 5v14l11-7-11-7z" />
      </svg>
    );
  }
  if (kind === "target") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  );
}

function IntegrationBenefitIcon({
  kind,
  className = "h-5 w-5",
  iconClassName = "text-white",
}: {
  kind: (typeof integrationBenefits)[number]["icon"];
  className?: string;
  iconClassName?: string;
}) {
  const svgCls =
    `block shrink-0 overflow-visible drop-shadow-[0_1px_0_rgba(0,0,0,0.2)] ${iconClassName} ${className}`.trim();
  if (kind === "flow") {
    return (
      <svg className={svgCls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 17V7M4 17h16M8 11l3-3 3 2 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "sync") {
    return (
      <svg className={svgCls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 12a8 8 0 0113.66-5.66l.34.33M20 12a8 8 0 01-13.66 5.66l-.34-.33"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M20 9v3h-3M4 15v-3h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className={svgCls} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12.83 2.18a2 2 0 00-1.66 0L2.6 6.08a1 1 0 000 1.83l8.57 3.9a2 2 0 001.66 0l8.57-3.9a1 1 0 000-1.83L12.83 2.18z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M2 12.08l8.58 3.91a2 2 0 001.66 0L21 12.08"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17.08l8.58 3.91a2 2 0 001.66 0L21 17.08"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MobileAppPage() {
  return (
    <div className="solution-product-section-gap min-h-screen overflow-x-hidden bg-white text-gray-900">
      <motion.section
        className="relative w-full border-b border-slate-100 bg-white pt-8 sm:pt-10 lg:pt-10"
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
            <SolutionHeroWaveDecor className="z-[1] pt-3 sm:pt-4 lg:pt-5" />
            <div
              className={`relative z-[2] mt-10 h-52 w-full sm:h-60 ${SPLIT_HERO_MOBILE_MEDIA_ORDER} lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 ${SPLIT_HERO_MEDIA_MR}`}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover object-[center_35%] sm:object-center lg:object-[center_40%]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={mobileAppHeroImage}
                aria-label="Mobile app for attendance and workforce self-service on the go"
              >
                <source src={mobileAppHeroVideo} type="video/mp4" />
              </video>
              <div
                className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent lg:block"
                aria-hidden
              />
              <VideoLivePopups
                popups={[
                  {
                    position: "top-left",
                    className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:-top-3 xl:-left-20",
                    label: "Live",
                    title: "GPS punch verified",
                    accent: "emerald",
                  },
                  {
                    position: "bottom-right",
                    label: "Today",
                    className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-10 xl:-right-2",
                    title: "On-shift workers",
                    subtitle: "Synced from field",
                    variant: "icon",
                    icon: "phone",
                    accent: "blue",
                  },
                ]}
              />
            </div>
            <div className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 ${SPLIT_HERO_MOBILE_COPY_ORDER}`}>
              <div
                className={`max-w-3xl px-2 py-8 sm:px-4 sm:py-10 lg:max-w-xl lg:py-16 lg:pr-6 ${SPLIT_HERO_COPY_ML}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
                >
                  <span className="inline-flex rounded-full border border-blue-200 bg-blue-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
                    Mobile Attendance App
                  </span>
                </motion.div>
                <motion.h1 className="home-display-heading inops-type-hero mt-4 text-slate-900 sm:mt-5"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
                >
                  Mobile Attendance App <span className="text-blue-600">with Face Recognition</span>
                </motion.h1>
                <motion.p
                  className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.14 }}
                >
                  GPS-validated face attendance for sites without fixed hardware — verified at punch-in, fed into CLMS payroll, with worker self-service for leave, payslips, and earned wages. For high-throughput plant gates where fixed biometric terminals are the right fit, see{" "}
                  <Link href="/face-recognition-attendance" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-200">face recognition attendance</Link>.
                </motion.p>
                <motion.div
                  className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/30"
                  >
                    Book a Demo
                  </Link>
                  <Link
                    href="/face-recognition-attendance"
                    className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-7 py-3 text-sm font-semibold text-blue-800 shadow-sm transition hover:bg-blue-50"
                  >
                    Compare Attendance Options
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
{/* 
      <section className="border-b border-gray-100 py-10 lg:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-slate-900">Built for field teams and enterprise operations</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The Mobile App helps teams manage day-to-day attendance workflows from anywhere while keeping HR and payroll systems synchronized. It is designed for scale, simplicity, and transparent employee communication.
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card, idx) => (
              <motion.div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: idx * 0.04 }}
              >
                <h3 className="text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/95 via-white to-white pb-0 pt-12 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden>
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-[100px]" />
          <div className="absolute -right-32 bottom-40 h-80 w-80 rounded-full bg-indigo-100/45 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-12 lg:pb-20">
          <motion.div
            className="mx-auto max-w-3xl text-center lg:max-w-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--inops-blue)]">
              Mobile attendance
            </p>
            <h2 id="accurate-tracking-heading" className="mt-4 text-balance text-slate-900">
              Everything you need for{" "}
              <span className="font-semibold text-[color:var(--inops-blue)]">
                accurate tracking
              </span>
            </h2>
            <div
              className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-[color:var(--inops-blue)] via-sky-500 to-cyan-400 opacity-90 shadow-sm shadow-sky-500/25 sm:w-16"
              aria-hidden
            />
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Cut time theft and spreadsheet rework, face proof, contactless punches, offline resilience, and guardrails
              your auditors can follow.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
            {accurateTrackingFeatures.map((feature, idx) => {
              const t = accurateTrackingThroughputByTone[feature.tone];
              const metric = String(idx + 1).padStart(2, "0");
              const chip = idx === 0 ? feature.pillar : "App";
              return (
                <ThroughputMetricCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  chip={chip}
                  metric={metric}
                  accentBar={t.accentBar}
                  iconWrap={t.iconWrap}
                  hoverGlow={t.hoverGlow}
                  index={idx}
                  icon={<FeatureIcon kind={feature.icon} className="h-6 w-6 text-current" />}
                />
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl overflow-hidden border-t border-slate-200/90 px-4 pb-16 pt-14 sm:px-6 lg:px-12 lg:pb-20 lg:pt-20">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-slate-200/90 to-transparent lg:inset-x-12" aria-hidden />
          <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -right-20 top-48 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute left-1/3 bottom-0 h-48 w-96 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden />

          <motion.div
            className="relative z-[1] mx-auto max-w-3xl text-center lg:max-w-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center rounded-full border border-slate-200/90 bg-slate-50/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-slate-500 shadow-sm ring-1 ring-slate-900/[0.04]">
              End to end flow
            </span>
            <h2 id="workflow-heading" className="mt-5 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              Simple.{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                Verified.
              </span>{" "}
              Everywhere.
            </h2>
            <div
              className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 opacity-90 shadow-sm shadow-sky-500/20 sm:w-20"
              aria-hidden
            />
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              A five-step path from the first tap to live roster visibility—designed to run{" "}
              <span className="font-semibold text-slate-800">without manual rework.</span>
            </p>
          </motion.div>

          {/* lg+: colorful numbered circles + neutral connector (reference-style pipeline) */}
          <div className="relative z-[1] mx-auto mt-16 hidden lg:mt-20 lg:block lg:max-w-6xl xl:max-w-7xl">
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-[1.75rem] z-0 h-px bg-slate-200"
              aria-hidden
            />
            <ol className="relative z-[1] grid list-none grid-cols-5 gap-2 p-0 xl:gap-5">
              {workflowSteps.map((step, idx) => {
                const stepLabel = String(idx + 1).padStart(2, "0");
                const ring = workflowCircleStyles[step.tone];
                return (
                  <motion.li
                    key={step.title}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(idx * 0.06, 0.28) }}
                  >
                    <div
                      className={`relative z-[1] flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-sans text-lg font-bold tabular-nums text-white ring-[5px] ring-white ${ring.gradient} ${ring.shadow} transition-transform duration-300 ease-out hover:scale-105 hover:brightness-105`}
                    >
                      {stepLabel}
                    </div>
                    <h3 className="mt-6 text-lg font-bold leading-snug tracking-tight text-slate-900 xl:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-[13.5rem] text-pretty text-sm leading-relaxed text-slate-600 xl:max-w-[14.5rem] xl:text-base xl:leading-relaxed">
                      {step.description}
                    </p>
                  </motion.li>
                );
              })}
            </ol>
          </div>

          {/* Mobile / tablet: vertical pipeline with matching colorful nodes */}
          <ol className="relative z-[1] mx-auto mt-12 max-w-lg list-none space-y-0 p-0 lg:hidden">
            {workflowSteps.map((step, idx) => {
              const isLast = idx === workflowSteps.length - 1;
              const stepLabel = String(idx + 1).padStart(2, "0");
              const ring = workflowCircleStyles[step.tone];
              return (
                <motion.li
                  key={step.title}
                  className="relative flex gap-4 pb-8 last:pb-0 sm:gap-5 sm:pb-10"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(idx * 0.05, 0.2) }}
                >
                  <div className="flex w-14 shrink-0 flex-col items-center sm:w-16">
                    <div
                      className={`relative z-[1] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold tabular-nums text-white ring-4 ring-white shadow-md sm:h-14 sm:w-14 sm:text-base ${ring.gradient} ${ring.shadow}`}
                    >
                      {stepLabel}
                    </div>
                    {!isLast ? (
                      <div className="mt-1 flex flex-1 flex-col items-center pt-0.5" aria-hidden>
                        <div className="h-full min-h-[2.25rem] w-px grow bg-slate-200 sm:min-h-[2.75rem]" />
                      </div>
                    ) : null}
                  </div>
                  <div className="min-w-0 pb-0.5 pt-1">
                    <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-lg">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">{step.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <div className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-slate-50/90 via-white to-white">
          <div className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute -left-32 top-24 h-[28rem] w-[28rem] rounded-full bg-emerald-400/[0.11] blur-3xl" aria-hidden />
            <div className="absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-indigo-400/[0.12] blur-3xl" aria-hidden />
            <div className="absolute bottom-0 left-1/2 h-px w-[min(100%,56rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" aria-hidden />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-12 lg:pb-20 lg:pt-20">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
              <motion.div
                className="min-w-0"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-emerald-700 shadow-sm shadow-emerald-500/5 backdrop-blur-sm ring-1 ring-emerald-500/10">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" aria-hidden />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  </span>
                  For Supervisors
                </span>
                <h2 className="mt-5 max-w-xl text-slate-900">
                  <span className="text-slate-900">
                    Full Control Over Your Workforce
                  </span>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  The Manager Dashboard provides a bird&apos;s eye view of daily attendance across multiple locations. Filter by department, track overtime, and generate payroll-ready reports in one click.
                </p>
                <ul className="mt-8 space-y-3.5">
                  {[
                    "Live attendance feed with photo verification",
                    "Customizable shift and holiday management",
                    "Deep-drill down into employee history",
                  ].map((point, idx) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.4, ease: smoothEase, delay: 0.06 + idx * 0.06 }}
                      className="group flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/[0.03] backdrop-blur-sm transition hover:border-emerald-200/90 hover:bg-white hover:shadow-md sm:text-base"
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-md shadow-emerald-500/25 ring-2 ring-white">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" aria-hidden>
                          <path d="M5 12l4 4L19 6" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link href="/contact" className={`${inopsUi.btnPrimary} group mt-9 gap-2 shadow-lg`}>
                  Explore Dashboard Features
                  <svg
                    className="h-4 w-4 transition group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 22, y: 12 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
                className="relative min-w-0"
              >
                <div
                  className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-500/15 via-transparent to-emerald-500/10 blur-2xl"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/75 shadow-[0_32px_64px_-20px_rgba(15,23,42,0.22),0_0_0_1px_rgba(15,23,42,0.04)] ring-1 ring-slate-900/[0.06] backdrop-blur-xl">
                  <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 bg-gradient-to-r from-slate-50/95 via-white/90 to-indigo-50/40 px-5 py-4 lg:flex-nowrap">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/25" aria-hidden>
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M4 19h16M6 16V8M12 16V5M18 16v-6" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <span className="truncate text-sm font-semibold text-slate-900">Attendance Overview</span>
                        <p className="text-xs font-medium text-slate-500">Live snapshot · Today</p>
                      </div>
                    </div>
                    <span className="inline-flex shrink-0 items-center rounded-full border border-slate-200/90 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur-sm">
                      Department: <span className="ml-1 text-indigo-700">Sales</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-[minmax(0,13.5rem)_1fr] md:gap-6">
                    <div className="space-y-3">
                      {[
                        {
                          label: "Total Employees",
                          value: "1,248",
                          sub: null as string | null,
                          surface:
                            "border-slate-200/90 bg-gradient-to-br from-white to-slate-50/90 shadow-inner shadow-slate-900/[0.03]",
                          labelClass: "text-slate-500",
                          valueClass: "text-slate-900",
                        },
                        {
                          label: "Currently Present",
                          value: "1,102",
                          sub: "+ 12%",
                          surface:
                            "border-sky-200/70 bg-gradient-to-br from-sky-50 via-blue-50/90 to-indigo-50/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]",
                          labelClass: "text-sky-700/90",
                          valueClass: "text-slate-900",
                        },
                        {
                          label: "Absent / Late",
                          value: "146",
                          sub: null,
                          surface:
                            "border-rose-200/70 bg-gradient-to-br from-rose-50 via-rose-50/80 to-orange-50/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]",
                          labelClass: "text-rose-600",
                          valueClass: "text-rose-700",
                        },
                      ].map((stat, sidx) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={viewport}
                          transition={{ duration: 0.4, ease: smoothEase, delay: 0.08 + sidx * 0.07 }}
                          className={`rounded-2xl border p-4 ${stat.surface}`}
                        >
                          <p className={`text-xs font-bold uppercase tracking-[0.16em] ${stat.labelClass}`}>{stat.label}</p>
                          <p className={`mt-2 text-3xl font-bold tabular-nums tracking-tight ${stat.valueClass}`}>
                            {stat.value}
                            {stat.sub ? (
                              <span className="ml-2 align-middle text-sm font-semibold text-emerald-600">{stat.sub}</span>
                            ) : null}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex min-h-0 flex-col rounded-2xl border border-slate-200/70 bg-gradient-to-b from-slate-50/50 to-white/90 p-4 shadow-inner shadow-slate-900/[0.02]">
                      <div className="mb-4 flex items-center justify-between gap-2">
                        <h3 className="text-slate-900">Real-time Activity</h3>
                        <span className="text-xs font-semibold text-indigo-600 underline decoration-indigo-300 underline-offset-4">
                          View Reports
                        </span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: "Priya Sharma", role: "UI Designer", time: "08:52 AM", status: "On Time" as const },
                          { name: "Arjun Patel", role: "Developer", time: "09:05 AM", status: "Late" as const },
                          { name: "Kavya Reddy", role: "Project Manager", time: "08:45 AM", status: "On Time" as const },
                          { name: "Vikram Singh", role: "HR Specialist", time: "08:30 AM", status: "On Time" as const },
                        ].map((person, pidx) => (
                          <motion.div
                            key={person.name}
                            initial={{ opacity: 0, x: 6 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={viewport}
                            transition={{ duration: 0.35, ease: smoothEase, delay: 0.1 + pidx * 0.05 }}
                            className="group grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-transparent bg-white/70 px-3 py-2.5 transition hover:border-slate-200/90 hover:bg-white hover:shadow-md"
                          >
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-slate-900">{person.name}</p>
                              <p className="truncate text-xs text-slate-500">{person.role}</p>
                            </div>
                            <div className="shrink-0 text-right">
                              <p className="text-xs font-semibold tabular-nums text-slate-700">{person.time}</p>
                              <span
                                className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${
                                  person.status === "On Time"
                                    ? "bg-emerald-50 text-emerald-700 ring-emerald-200/80"
                                    : "bg-amber-50 text-amber-700 ring-amber-200/80"
                                }`}
                              >
                                {person.status}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-slate-200/90 bg-gradient-to-b from-white via-slate-50/40 to-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[15%] top-10 h-64 w-64 rounded-full bg-blue-400/[0.07] blur-3xl" aria-hidden />
            <div className="absolute bottom-8 right-[10%] h-72 w-72 rounded-full bg-indigo-400/[0.08] blur-3xl" aria-hidden />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-12 lg:pb-20 lg:pt-20">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 shadow-sm shadow-blue-500/5 backdrop-blur-sm ring-1 ring-blue-500/10">
                Ecosystem
              </span>
              <h2 className="mt-4 text-slate-900">
                <span className="text-slate-900">
                  Plug &amp; Play Integrations
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                InOps Mobile Attendance connects effortlessly with your existing HR ecosystem, ensuring data flows where you need it most.
              </p>
            </motion.div>

            <motion.div
              className="relative mx-auto mt-12 max-w-5xl sm:mt-14 lg:mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase, delay: 0.04 }}
            >
              <div
                className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-violet-500/15 blur-xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_28px_56px_-24px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/[0.05] backdrop-blur-xl sm:p-8 lg:p-10">
                <div className="pointer-events-none absolute -right-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-400/15 to-transparent blur-2xl" aria-hidden />
                <div className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full bg-indigo-400/10 blur-2xl" aria-hidden />

                <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                  <div className="flex flex-1 flex-col gap-4">
                    {[
                      {
                        title: "Mobile App",
                        subtitle: "Field & employee capture",
                        icon: (
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <rect x="7" y="3" width="10" height="18" rx="2" />
                            <path d="M11 18h2" />
                          </svg>
                        ),
                        gradient: "from-violet-500 to-indigo-600",
                      },
                      {
                        title: "Custom SDK",
                        subtitle: "API & embedded flows",
                        icon: (
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                          </svg>
                        ),
                        gradient: "from-sky-500 to-blue-600",
                      },
                    ].map((src) => (
                      <div key={src.title} className="flex items-center gap-3">
                        <div className="group relative min-h-[52px] flex-1 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50/90 px-4 py-3 shadow-md shadow-slate-900/[0.04] ring-1 ring-white transition hover:border-blue-200/90 hover:shadow-lg hover:shadow-blue-500/10">
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${src.gradient} text-white shadow-lg shadow-indigo-500/20 ring-2 ring-white`}
                            >
                              {src.icon}
                            </span>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-slate-900">{src.title}</p>
                              <p className="text-xs font-medium text-slate-500">{src.subtitle}</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative hidden h-[3px] w-14 shrink-0 overflow-hidden rounded-full lg:block" aria-hidden>
                          <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-blue-400 to-blue-600 opacity-90" />
                          <div className="absolute inset-y-0 right-0 w-2 rounded-full bg-white/40 blur-[2px]" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="relative flex shrink-0 justify-center py-2 lg:py-0">
                    <motion.div
                      className="relative flex h-[7.5rem] w-[7.5rem] flex-col items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-center text-white shadow-[0_20px_40px_-12px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.25)] ring-4 ring-white/90"
                      initial={{ scale: 0.94, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={viewport}
                      transition={{ duration: 0.45, ease: smoothEase, delay: 0.12 }}
                    >
                      <span className="absolute inset-0 rounded-full bg-gradient-to-t from-black/10 to-transparent" aria-hidden />
                      <svg className="relative z-[1] h-8 w-8 drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M7 18a4 4 0 010-8 5 5 0 019.7 1A3.5 3.5 0 0117 18H7z" />
                        <path d="M12 12v5M10 15l2 2 2-2" />
                      </svg>
                      <span className="relative z-[1] mt-1.5 text-xs font-bold tracking-[0.2em] text-blue/95">CORE CLOUD</span>
                    </motion.div>
                  </div>

                  <div className="flex flex-1 flex-col gap-4">
                    {[
                      {
                        title: "Core HR System",
                        subtitle: "Master employee records",
                        icon: (
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path d="M4 19h16M6 16V8M12 16V5M18 16v-6" />
                          </svg>
                        ),
                        gradient: "from-blue-600 to-cyan-600",
                      },
                      {
                        title: "Payroll Reports",
                        subtitle: "Export-ready summaries",
                        icon: (
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                          </svg>
                        ),
                        gradient: "from-emerald-500 to-teal-600",
                      },
                    ].map((dst) => (
                      <div key={dst.title} className="flex items-center gap-3">
                        <div className="relative hidden h-[3px] w-14 shrink-0 overflow-hidden rounded-full lg:block" aria-hidden>
                          <div className="absolute inset-0 bg-gradient-to-l from-slate-200 via-blue-400 to-blue-600 opacity-90" />
                          <div className="absolute inset-y-0 left-0 w-2 rounded-full bg-white/40 blur-[2px]" />
                        </div>
                        <div className="group relative min-h-[52px] flex-1 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50/90 px-4 py-3 shadow-md shadow-slate-900/[0.04] ring-1 ring-white transition hover:border-indigo-200/90 hover:shadow-lg hover:shadow-indigo-500/10">
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${dst.gradient} text-white shadow-lg ring-2 ring-white`}
                            >
                              {dst.icon}
                            </span>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-slate-900">{dst.title}</p>
                              <p className="text-xs font-medium text-slate-500">{dst.subtitle}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex justify-center lg:hidden" aria-hidden>
                  <div className="h-12 w-px bg-gradient-to-b from-blue-400/50 via-indigo-400/70 to-violet-500/50" />
                </div>
                <p className="mt-2 text-center text-xs font-medium uppercase tracking-[0.18em] text-slate-400 lg:mt-8 lg:hidden">
                  Ingest · normalize · sync
                </p>
              </div>
            </motion.div>

            <div className="relative mx-auto mt-16 max-w-6xl lg:mt-20">
              <div
                className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-slate-200/40 via-transparent to-slate-200/30 blur-xl sm:-inset-4"
                aria-hidden
              />
              <div className="relative rounded-[1.65rem] border border-slate-200/60 bg-slate-50/40 p-1.5 shadow-inner shadow-slate-900/[0.04] ring-1 ring-white/80 sm:rounded-[1.85rem] sm:p-2">
                <ul className="grid list-none grid-cols-1 gap-1.5 p-0 sm:grid-cols-3 sm:gap-2">
                  {integrationBenefits.map((item, idx) => {
                    const pres = integrationBenefitPresentation[item.tone];
                    const step = String(idx + 1).padStart(2, "0");
                    return (
                      <motion.li
                        key={item.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.5, ease: smoothEase, delay: idx * 0.08 }}
                        className="group relative min-h-0"
                      >
                        <div
                          className={`pointer-events-none absolute -inset-px rounded-[1.35rem] bg-gradient-to-br opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100 ${pres.outerGlow}`}
                          aria-hidden
                        />
                        <div
                          className={`relative flex h-full min-h-[11.5rem] flex-col overflow-hidden rounded-[1.35rem] border bg-gradient-to-b px-5 pb-6 pt-5 text-left shadow-[0_20px_50px_-38px_rgba(15,23,42,0.12)] transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] sm:min-h-[12.5rem] sm:px-6 sm:pb-7 sm:pt-6 ${pres.border} ${pres.wash} hover:-translate-y-0.5 hover:shadow-[0_28px_56px_-36px_rgba(15,23,42,0.14)]`}
                        >
                          <div
                            className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r opacity-95 ${pres.rail}`}
                            aria-hidden
                          />
                          <div className="flex items-start justify-between gap-3">
                            <span className="font-mono text-xs font-medium tabular-nums tracking-widest text-slate-400">
                              {step}
                            </span>
                            <div
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ring-2 ring-white/90 ${pres.iconTile}`}
                              aria-hidden
                            >
                              <IntegrationBenefitIcon
                                kind={item.icon}
                                iconClassName={pres.iconFg}
                                className="h-5 w-5"
                              />
                            </div>
                          </div>
                          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            {item.label}
                          </p>
                          <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight text-slate-900 sm:text-lg">
                            {item.title}
                          </h3>
                          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-relaxed">
                            {item.description}
                          </p>
                          <div
                            className={`pointer-events-none absolute -bottom-8 right-0 h-24 w-24 rounded-full bg-gradient-to-br opacity-[0.12] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.2] ${pres.rail}`}
                            aria-hidden
                          />
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-200/90 pb-12 pt-12 lg:pb-16 lg:pt-16">
          <motion.section
            className="relative overflow-hidden border-y border-white/[0.06] bg-gradient-to-b from-[#010409] via-[#0b1220] to-[#020617] py-10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.85)] sm:py-14 lg:py-16"
            aria-labelledby="why-inops-mobile-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/[0.14] blur-[110px]" />
              <div className="absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-indigo-600/[0.12] blur-[100px]" />
              <div className="absolute left-1/2 top-32 h-px w-[min(92vw,52rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.08),transparent)]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
              <div className="mx-auto max-w-3xl text-center sm:max-w-4xl">
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 shadow-lg shadow-black/30 backdrop-blur-md ring-1 ring-white/5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" aria-hidden />
                    Operations-ready
                  </span>
                </div>
                <h2 id="why-inops-mobile-heading" className="mt-5 text-balance text-center">
                  <span className="text-white">
                    Why Modern Teams Choose InOps Mobile Attendance
                  </span>
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-slate-400 sm:text-lg">
                  Built for speed, accuracy, and enterprise-grade reliability.
                </p>
              </div>

              <div className="relative mt-12 grid min-w-0 grid-cols-1 items-start gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
                <div className="min-w-0">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
                    {modernTeamPoints.map((point, idx) => {
                    const accents = [
                      {
                        tile: "from-sky-500 to-blue-600",
                        hoverBorder: "hover:border-sky-400/35",
                      },
                      {
                        tile: "from-violet-500 to-indigo-600",
                        hoverBorder: "hover:border-violet-400/35",
                      },
                      {
                        tile: "from-emerald-500 to-teal-600",
                        hoverBorder: "hover:border-emerald-400/35",
                      },
                      {
                        tile: "from-amber-500 to-orange-600",
                        hoverBorder: "hover:border-amber-400/35",
                      },
                    ] as const;
                    const a = accents[idx];
                    return (
                      <motion.article
                        key={point.title}
                        className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 shadow-xl shadow-black/40 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06] ${a.hoverBorder} hover:shadow-2xl`}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.06 }}
                      >
                        <div
                          className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${a.tile} opacity-[0.12] blur-2xl transition duration-500 group-hover:opacity-20`}
                          aria-hidden
                        />
                        <span
                          className={`relative inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-white/35 bg-gradient-to-br ${a.tile} shadow-lg`}
                        >
                          <ModernTeamIcon kind={point.icon} className="h-5 w-5 text-white drop-shadow-sm" />
                        </span>
                        <h3 className="relative mt-4 text-white">{point.title}</h3>
                        <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{point.description}</p>
                      </motion.article>
                    );
                  })}
                  </div>
                </div>

              <motion.div
                className="relative flex w-full min-w-0 justify-center mt-10 sm:mt-12 lg:mt-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.1 }}
              >
                <div className="relative  w-full max-w-[min(100%,620px)] sm:max-w-[min(100%,720px)] lg:max-w-[min(100%,880px)]">
                  <div
                    className="pointer-events-none absolute -inset-6 rounded-[2.25rem] bg-gradient-to-br from-sky-500/25 via-indigo-500/15 to-violet-600/20 blur-3xl"
                    aria-hidden
                  />
                  <div className="relative mt-0 rounded-[1.85rem] border border-white/[0.12] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-[10px] shadow-[0_32px_64px_-24px_rgba(0,0,0,0.75)] ring-1 ring-white/[0.06] backdrop-blur-sm">
                    <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,transparent_45%,transparent_100%)] opacity-50" aria-hidden />
                    <figure className="relative m-0 overflow-hidden rounded-[1.45rem] ring-1 ring-black/40">
                      <div className="relative aspect-[677/369] w-full overflow-hidden bg-[#050a14]">
                        <video
                          className="absolute inset-0 h-full w-full object-contain object-center"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          poster="/Gemini_Generated_Image_34d3gr34d3gr34d3-removebg-preview.png"
                          aria-label="SmartAttendance mobile and workforce experience ,  dual phone mockups showing attendance and activity in the app."
                        >
                          <source src={smartAttendanceWhySectionVideo} type="video/mp4" />
                        </video>
                        <VideoLivePopups
                          popups={[
                            {
                              position: "top-left",
                              label: "Live",
                              title: "App syncing",
                              accent: "sky",
                              className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:-top-0 xl:-left-0",
                            },
                            {
                              position: "bottom-right",
                              className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-0 xl:-right-2",
                              label: "Active",
                              title: "Field staff online",
                              variant: "icon",
                              icon: "phone",
                              accent: "emerald",
                            },
                          ]}
                        />
                      </div>
                      <figcaption className="sr-only">SmartAttendance mobile and workforce experience</figcaption>
                    </figure>
                  </div>
                  <p className="mt-4 text-center text-xs font-medium tracking-wide text-slate-500">
                    Product UI preview · illustrative sample data
                  </p>
                </div>
              </motion.div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* H2 content sections — SEO depth */}
        {/* <section className="border-t border-slate-100 bg-white py-12 lg:py-20" aria-labelledby="mobile-face-gps-heading">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.48, ease: smoothEase }}>
              <h2 id="mobile-face-gps-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Face recognition + GPS: attendance anywhere
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Worker opens the InOps app → on-device face match → GPS geofence validation → punch recorded with identity, time, and location in one step. No fixed biometric terminal needed; every record carries the same verified identity as a gate reader.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Built for sites the fixed gate can't serve: metro corridors, road construction projects, and distributed depot networks — the BOCW-regulated world where attendance evidence is hardest to maintain. Contract workers on scattered sites get the same identity-verified attendance record as workers clocking in at a plant gate.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-slate-50 py-12 lg:py-20" aria-labelledby="mobile-supervisors-heading">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.48, ease: smoothEase }}>
              <h2 id="mobile-supervisors-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                For supervisors and managers
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Supervisors see team attendance status, flag exceptions, and authorize OT from the same app — with push notifications for escalations and threshold breaches. No need to log into the desktop system to action what the field is flagging.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-12 lg:py-20" aria-labelledby="mobile-where-it-fits-heading">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.48, ease: smoothEase }}>
              <h2 id="mobile-where-it-fits-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Where mobile attendance fits
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Fixed biometric readers suit high-density factory gates where throughput and fraud prevention are primary — see{" "}
                <a href="/face-recognition-attendance" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                  face recognition attendance
                </a>
                . Mobile attendance suits moving or distributed sites where a fixed terminal isn't viable. Most InOps infrastructure clients run both on one platform, so a worker's identity and attendance record are unified regardless of which capture method was used on any given shift.
              </p>
            </motion.div>
          </div>
        </section> */}

        <section aria-labelledby="mobile-attendance-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              {/* <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-blue-800">
                Mobile Attendance FAQ
              </span> */}
              <h2 id="mobile-attendance-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Answers to common questions about GPS attendance, geofencing, remote workers, payroll sync, and offline capture.
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
                {mobileAttendanceFaqItems.map((item, index) => (
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
                    {index === 6 ? (
                      <p className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:pl-12 sm:text-base">
                        Fixed readers suit high-density plant gates where throughput and physical enforcement matter — see{" "}
                        <Link href="/face-recognition-attendance" className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200">face recognition attendance</Link>. Mobile suits moving or distributed sites. Most infrastructure clients run both on one platform, so a worker&apos;s identity and records stay unified whichever method captured the shift.
                      </p>
                    ) : (
                      <p className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:pl-12 sm:text-base">{item.answer}</p>
                    )}
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <SolutionPageClosingCta
          headingId="mobile-app-final-cta-heading"
          heading="Transform attendance management with a mobile-first solution"
          description="Start your 14-day free trial today."
          primaryLabel="Get Started Now"
          secondaryLabel="Schedule Demo"
          footnote="Unlimited users · Instant setup · 14-day free trial"
        />
      </section>
    </div>
  );
}
