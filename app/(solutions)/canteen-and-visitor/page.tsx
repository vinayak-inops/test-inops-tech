"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SolutionLandingHero from "@/app/components/SolutionLandingHero";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";
import VideoLivePopups from "@/app/components/VideoLivePopups";
import { ThroughputMetricCard } from "@/app/components/ThroughputMetricCard";
import { inopsUi } from "@/app/lib/inopsUi";
import { mediaVideos } from "@/app/lib/mediaAssets";
import { SPLIT_HERO_COPY_ML, SPLIT_HERO_MEDIA_MR } from "@/app/lib/splitHeroWideInsets";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

/** Full-card hover: accent border, shadow, slight lift (matches analytics `#00AAFF`). */
const interactiveSurfaceHover =
  "transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-[#00AAFF]/50 hover:shadow-lg hover:shadow-[#00AAFF]/12";

const buttonHover =
  "transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg";

/** Scheduled vs walk-up process ,  `public/images/Visitor-Management-Process (1).png` */
const visitorManagementProcessImage = "/images/Visitor-Management-Process (1).png";
const digitalCanteenSubsidyControlVideo = "/Digital_canteen_subsidy_control_202605080015.mp4";
const visitorDeskLobbyCampusStackVideo = "/Visitor_desk_lobby_campus_stack_202605080018.mp4";
const visitorManagementSystemVideo = mediaVideos.visitorManagementSystem;

/** Live ops metrics ,  tones drive premium card styling below. */
type OperationalMetricTone = "emerald" | "amber" | "sky" | "violet";

const operationalMetricPresentation: Record<
  OperationalMetricTone,
  {
    bar: string;
    iconTile: string;
    orb: string;
    valueClass: string;
  }
> = {
  emerald: {
    bar: "from-emerald-400 via-teal-400 to-cyan-400",
    iconTile:
      "bg-gradient-to-br from-emerald-500/25 to-emerald-600/10 text-emerald-200 ring-emerald-400/25 shadow-[0_12px_40px_-16px_rgba(16,185,129,0.45)]",
    orb: "bg-emerald-400/25",
    valueClass: "text-white",
  },
  amber: {
    bar: "from-amber-400 via-orange-400 to-rose-400",
    iconTile:
      "bg-gradient-to-br from-amber-500/25 to-orange-600/10 text-amber-100 ring-amber-400/30 shadow-[0_12px_40px_-16px_rgba(245,158,11,0.4)]",
    orb: "bg-amber-400/20",
    valueClass: "text-white",
  },
  sky: {
    bar: "from-sky-400 via-blue-500 to-indigo-500",
    iconTile:
      "bg-gradient-to-br from-sky-500/30 to-blue-700/15 text-sky-100 ring-sky-400/35 shadow-[0_12px_40px_-16px_rgba(56,189,248,0.45)]",
    orb: "bg-sky-400/22",
    valueClass: "text-white",
  },
  violet: {
    bar: "from-violet-400 via-purple-500 to-fuchsia-500",
    iconTile:
      "bg-gradient-to-br from-violet-500/25 to-purple-700/15 text-violet-100 ring-violet-400/30 shadow-[0_12px_40px_-16px_rgba(139,92,246,0.4)]",
    orb: "bg-violet-400/20",
    valueClass: "text-white",
  },
};

const operationalMetrics = [
  {
    label: "Meals verified today",
    value: "1,204",
    hint: "Biometric & rule-based checks",
    icon: "shield" as const,
    tone: "emerald" as const,
  },
  {
    label: "Peak canteen utilization",
    value: "88%",
    hint: "Capacity during lunch windows",
    icon: "utensils" as const,
    tone: "amber" as const,
  },
  {
    label: "Subsidy & payroll sync",
    value: "Real-time",
    hint: "Accruals tied to HR / payroll",
    icon: "link" as const,
    tone: "sky" as const,
  },
  {
    label: "Platform uptime",
    value: "99.98%",
    hint: "Mission-critical site operations",
    icon: "clock" as const,
    tone: "violet" as const,
  },
] as const;

/** Core pillars from Visily “Digital Canteen & Subsidy Control” section. */
const digitalCanteenPillars = [
  "Face recognition and biometric meal counting for accurate issuance.",
  "Real-time subsidy calculation with payroll linkage and policy rules.",
  "Inventory management and waste-reduction tracking across locations.",
  "Contractor vs. employee pricing and entitlements without manual spreadsheets.",
];

type HighlightAccent = "sky" | "indigo" | "amber";

const canteenThroughputByAccent: Record<
  HighlightAccent,
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
  amber: {
    accentBar: "from-amber-500 via-orange-500 to-red-400",
    iconWrap:
      "bg-amber-50 text-amber-700 ring-amber-500/20 group-hover:bg-amber-500 group-hover:text-white group-hover:ring-amber-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(245,158,11,0.38)]",
  },
};

const secondaryHighlights = [
  {
    pillar: "Capacity" as const,
    title: "Queue & capacity insight",
    description:
      "See dwell times and peak queues in context so you can staff lanes, stagger breaks, and right-size production before the rush hits.",
    icon: "chart" as const,
    accent: "sky" as const,
  },
  {
    pillar: "Mobility" as const,
    title: "Ops-friendly tablets",
    description:
      "Supervisors get a mobile-first view of live counts, exceptions, and overrides, right at the serving line where decisions matter.",
    icon: "device" as const,
    accent: "indigo" as const,
  },
  {
    pillar: "Risk" as const,
    title: "Proactive alerts",
    description:
      "Surface policy breaches, duplicate scans, and unusual consumption early, before they turn into audit findings or shrinkage.",
    icon: "bell" as const,
    accent: "amber" as const,
  },
] as const;

/** Visitor desk / lobby ,  aligns with combined “canteen & visitor” brochure narrative. */
const visitorExperiencePillars = [
  "Faster lobby flows with pre-registration, host notification, and clear visitor badges.",
  "Real-time visibility of who is on-site, with exportable trails for audits and incidents.",
  "Tie visitor passes to access rules so guests and contractors only reach approved zones.",
  "Shares policy context with canteen identity, workforce, visitors, and subsidies stay consistent.",
];

const visitorLobbyHighlights = [
  {
    pillar: "Scheduling" as const,
    title: "Pre-registration & host workflows",
    description:
      "Hosts pre-approve visitors, cut desk time, and smooth peak-hour arrivals without extra headcount.",
    icon: "calendar" as const,
    accent: "sky" as const,
  },
  {
    pillar: "Access" as const,
    title: "Badges & access handoff",
    description:
      "Print or digital badges that integrate with turnstiles and access control for the right zones.",
    icon: "badge" as const,
    accent: "indigo" as const,
  },
  {
    pillar: "Analytics" as const,
    title: "Lobby analytics & reporting",
    description:
      "Traffic patterns, dwell insights, and exports for facilities, security, and compliance reviews.",
    icon: "chart" as const,
    accent: "amber" as const,
  },
] as const;

const smartCanteenFaqItems = [
  // CANTEEN (1-7)
  {
    question: "What is a canteen and visitor management system for industrial sites?",
    answer:
      "A canteen and visitor management system combines two gate-adjacent functions: automated meal entitlement and issuance for workers in the industrial canteen, and structured visitor registration, pass issuance, and access control for contractors and guests entering the facility. Both are managed through the same biometric and identity layer — workers are identified at the meal counter, visitors are verified at the gate — eliminating paper-based coupons, manual visitor logs, and the compliance gaps they create.",
  },
  {
    question: "How does biometric meal issuance stop double-claiming and proxy meals?",
    answer:
      "Each meal is issued against a verified identity, not a coupon that can be passed on or duplicated. The system checks shift eligibility at the moment of service, so a worker cannot claim twice in a session, claim for a shift they didn't work, or claim on someone else's behalf.",
  },
  {
    question: "Can meal entitlements differ by shift, contractor, or employee category?",
    answer:
      "Yes. Entitlement rules are configured per shift, contractor, employee category, and site — including different pricing for contract workers versus permanent employees — and follow the roster automatically. No manual list-keeping per canteen.",
  },
  {
    question: "How is the per-meal subsidy amount calculated — can different worker categories get different rates?",
    answer: (
      <>
        Yes. Subsidy rules are configured per employee category, contractor, shift type, and even meal type — a permanent employee might receive a full subsidy, a contract worker a partial subsidy, and a visitor-category worker the caterer rate with no subsidy applied. The rule engine reads the worker&apos;s category and contractor mapping from the{" "}
        <Link
          href="/contract-labour-management"
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          contract labour management system
        </Link>{" "}
        at the point of issue, so there is no manual list-keeping per canteen or per shift.
      </>
    ),
  },
  {
    question: "How does the canteen subsidy settle in payroll — is it a deduction, a reimbursement, or both?",
    answer:
      "The platform supports all three settlement modes. An employer-paid subsidy is recorded as a benefit against the payroll record; an employee-contribution meal (where the worker pays part of the cost) generates a deduction; and reimbursement workflows can be configured for field-based staff who eat off-site. All transactions accrue in real time against the shift, so the payroll-period close requires no manual consolidation from a canteen log.",
  },
  {
    question: "How are contractor workers' meal rates handled separately from permanent employees?",
    answer: (
      <>
        Contractor workers are mapped to their principal employer and contractor in the{" "}
        <Link
          href="/contract-labour-management"
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          CLMS
        </Link>
        . Canteen entitlement reads that mapping at service time — different pricing tiers, different subsidy percentages, and separate cost-centre allocation flow automatically. Invoice reconciliation separates contractor meal counts from permanent employee counts, so the caterer invoice and the contractor billing adjustment are both traceable to individual verified meals.
      </>
    ),
  },
  {
    question: "Can a contractor worker's canteen access be blocked automatically if their compliance documents lapse?",
    answer:
      "Yes. If a contractor worker fails a gate compliance check — expired induction, lapsed medical, or missing safety certification — the same identity event that blocks them at the turnstile also suspends their canteen eligibility for that shift. No separate canteen block is needed; the shared identity layer propagates the restriction automatically.",
  },
  {
    question: "How does it reconcile canteen invoices from the caterer or contractor?",
    answer: (
      <>
        Verified meal counts by contractor, category, and date form the basis of the invoice check. Over-counted meals are flagged before approval rather than surfacing in a later audit — the same reconciliation logic used for contractor attendance in{" "}
        <Link 
          href="/contract-labour-management" 
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          contract labour management
        </Link>
        .
      </>
    ),
  },
  {
    question: "Can the system link meal eligibility to attendance?",
    answer:
      "Yes — that's the core of it. Eligibility derives from actual gate attendance, so a worker who didn't enter that shift isn't eligible for the shift's meal, and a worker blocked at the gate is automatically excluded from canteen eligibility for that shift.",
  },
  {
    question: "Does it support cashless and multi-mode transactions?",
    answer: (
      <>
        Yes. Workers can be identified by face recognition, fingerprint, RFID card, or QR code at the counter, with subsidy and any employee contribution calculated at the point of issue and settled through payroll. See{" "}
        <Link 
          href="/face-recognition-attendance" 
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          biometric readers
        </Link>{" "}
        for more details.
      </>
    ),
  },
  {
    question: "How does it help reduce food wastage?",
    answer:
      "Planned meal counts derive from roster and shift data rather than estimates, and actual consumption is recorded per session. The gap between planned and consumed is visible daily, which is what lets kitchens size preparation to real demand instead of last month's guess.",
  },
  // VISITOR (8-12)
  {
    question: "What is a visitor management system for industrial sites?",
    answer:
      "A visitor management system controls and records who enters a site who isn't part of the workforce — contractors' representatives, auditors, customers, drivers. It replaces the paper register with pre-registration, host approval, digital passes with defined validity, and a timestamped entry-and-exit record for every visit.",
  },
  {
    question: "How does visitor pre-registration work?",
    answer:
      "A host initiates the invite; the visitor receives pre-registration details in advance and completes their information before arriving. At the desk, identity is confirmed, the pass is issued, and the host is notified automatically — which removes most of the queue at peak arrival times. Walk-in visitors follow the same flow with approval requested at the desk.",
  },
  {
    question: "Can visitor passes control which areas a visitor can access?",
    answer: (
      <>
        Yes. Passes carry zone permissions, so a visitor cleared for the admin block isn't cleared for the plant floor. Passes work on the same{" "}
        <Link 
          href="/turnstiles-access" 
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          turnstile access control
        </Link>{" "}
        lanes and readers as the workforce, so enforcement is physical rather than advisory.
      </>
    ),
  },
  {
    question: "Does it screen visitors against watchlists?",
    answer:
      "Yes — the system checks against configured watchlists and blacklists before a pass is issued, including individuals previously flagged at any site in your deployment.",
  },
  {
    question: "How long are visitor records retained, and can they be exported?",
    answer:
      "Retention follows your security and data policy and is configurable. Every visit — pre-authorisation, entry, exit, host, zones accessed — is exportable for audit, incident investigation, or regulatory review.",
  },
  {
    question: "Can visitors check themselves in at a kiosk?",
    answer: (
      <>
        Yes. A visitor kiosk at reception or the gate handles self check-in — visitor details, host notification, photo capture and watchlist
        screening — and issues a pass carrying zone permissions that works on the same turnstile lanes as workforce credentials. Hosts are
        notified automatically, which removes most of the queue at peak arrival times. See{" "}
        <Link
          href="/self-service-kiosk"
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          self-service kiosks
        </Link>
        .
      </>
    ),
  },
  // BOTH (13-14)
  {
    question: "Do canteen and visitor management need separate hardware?",
    answer: (
      <>
        No. Both run on the same identity platform and the same device estate as attendance and gate access — one enrollment covers gate entry, canteen counter, and visitor host lookup. That means one hardware investment and one worker identity, not three parallel systems. See{" "}
        <Link 
          href="/biometric-devices"
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          biometric readers
        </Link>{" "}
        for more details.
      </>
    ),
  },
  {
    question: "Can we deploy just the canteen module, or just visitor management?",
    answer: (
      <>
        Yes — either can be deployed independently, and either can be added later to an existing InOps attendance or{" "}
        <Link
          href="/contract-labour-management"
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          CLMS
        </Link>{" "}
        deployment without new hardware.
      </>
    ),
  },
  {
    question: "Can meals be issued through a self-service kiosk?",
    answer: (
      <>
        Yes. A canteen kiosk validates entitlement against the worker&apos;s shift and contractor at the point of issue, calculates any subsidy or employee contribution, and records the transaction for invoice reconciliation — without a counter operator checking a list. See{" "}
        <Link
          href="/self-service-kiosk"
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          self-service kiosks
        </Link>
        .
      </>
    ),
  },
] as const;

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function MetricIcon({ name, className = "h-6 w-6" }: { name: "shield" | "utensils" | "link" | "clock"; className?: string }) {
  const c = className;
  if (name === "shield") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (name === "utensils") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18M3 8l4 4 4-4M17 8h4M17 12h4M17 16h4" />
      </svg>
    );
  }
  if (name === "link") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function HighlightIcon({
  name,
  className = "h-6 w-6",
}: {
  name: "chart" | "device" | "bell" | "calendar" | "badge";
  className?: string;
}) {
  const c = className;
  if (name === "chart") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6m4 6V9m4 10V5M5 19h14" />
      </svg>
    );
  }
  if (name === "device") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }
  if (name === "badge") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8h.01M12 12h4.01M16 12h.01M12 16h.01M16 16h.01" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

export default function CanteenManagementPage() {
  return (
    <>
      <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
        <SolutionLandingHero
          badge={
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
              Canteen Management
            </span>
          }
          title={
            <>
              <span className="block text-slate-900">Canteen &amp; Meal Subsidy Management</span>
              {" "}
              <span className="mt-1.5 block text-[color:var(--inops-blue)] sm:mt-2">for Factories</span>
            </>
          }
          subtitle="InOps handles biometric meal entitlement, payroll-linked subsidies, and waste tracking — plus visitor passes and lobby flows — on one platform across your campus."
          subtitleClassName="text-xs leading-relaxed text-slate-600 sm:text-base"
          splitHeroCopyStackClassName={`max-w-3xl lg:max-w-xl lg:pr-6 ${SPLIT_HERO_COPY_ML}`}
          imageSrc="/WhatsApp Image 2026-05-04 at 12.31.38 PM.jpeg"
          imageAlt="Digital canteen, visitor desk, and analytics on an industrial campus"
          videoSrc={mediaVideos.canteenHeroDemo}
          // videoSrcClipClassName="pt-12"
          sectionClassName="min-h-[340px] sm:min-h-[390px] lg:min-h-[430px]"
          imageWrapperClassName={`relative z-[2] mt-8 h-52 w-full overflow-hidden sm:h-60 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 ${SPLIT_HERO_MEDIA_MR}`}
          imageSizes="(max-width: 1024px) 100vw, 50vw"
          imageClassName="object-cover mt-15 object-[center_42%] sm:object-[center_38%] lg:object-[center_35%]"
          gradientClassName="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-white from-0% via-white/[0.98] via-[42%] to-transparent to-[62%] lg:via-[44%] lg:to-[68%]"
          imageEdgeFadeClassName="bg-gradient-to-r from-white via-white/80 to-transparent lg:via-[28%] lg:to-[52%]"
          mobileStackGradientClassName="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-white via-white/55 to-white/95 sm:hidden"
          primaryCta={{ label: "Book a Demo", href: "/contact" }}
          primaryCtaClassName="text-center border-2 bg-blue-700 font-bold text-white py-2 px-4 border-blue-700 rounded-full"
          secondaryCta={{ label: "See How It Works", href: "#canteen-realtime-visibility" }}
          secondaryCtaClassName="text-center border-2 border-gray-200 bg-white py-2 px-4 rounded-full"
          livePopups={[
            {
              position: "top-left",
              className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:top-20 xl:-left-10",
              label: "Live",
              title: "Meal verified",
              accent: "emerald",
              // className: "z-[5]",
            },
            {
              position: "bottom-right",
              label: "Visitor",
              title: "Lobby checked-in",
              className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-20 xl:-right-2",
              variant: "icon",
              icon: "id",
              accent: "blue",
              // className: "z-[5]",
            },
          ]}
        >
    
        </SolutionLandingHero>

        {/* Operational metrics ,  premium live-ops band */}
        <section
          id="canteen-realtime-visibility"
          aria-labelledby="canteen-ops-visibility-heading"
          className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 text-white sm:py-16 lg:py-20 solution-section-flush-after-hero"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-28 top-0 h-[22rem] w-[22rem] rounded-full bg-emerald-500/12 blur-[100px]" />
            <div className="absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-sky-500/10 blur-[110px]" />
            <div className="absolute bottom-0 left-1/2 h-72 w-[min(90%,56rem)] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[90px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(56,189,248,0.14),transparent_52%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Live signal board</p>
              <h2 id="canteen-ops-visibility-heading" className="mt-4 text-balance">
                <span className="text-white">Real-time </span>
                <span className="font-semibold text-slate-300">
                  canteen visibility
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Monitor utilization, verified meals, and subsidy health across every site, without waiting on month-end
                spreadsheets or stitched exports.
              </p>
            </motion.div>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
              {operationalMetrics.map((m, i) => {
                const tone = operationalMetricPresentation[m.tone];
                return (
                  <motion.article
                    key={m.label}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/55 p-6 shadow-[0_28px_70px_-34px_rgba(0,0,0,0.75)] backdrop-blur-md ring-1 ring-white/[0.06] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:border-white/18 hover:shadow-[0_36px_80px_-36px_rgba(15,23,42,0.95)]"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, ease: smoothEase, delay: Math.min(i * 0.08, 0.24) }}
                  >
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-[3px] overflow-hidden"
                      aria-hidden
                    >
                      <div
                        className={`h-full w-full origin-left scale-x-0 bg-gradient-to-r opacity-95 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-x-100 motion-reduce:scale-x-100 motion-reduce:transition-none ${tone.bar}`}
                      />
                    </div>
                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${tone.orb}`}
                      aria-hidden
                    />

                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${tone.iconTile}`}
                      >
                        <MetricIcon name={m.icon} />
                      </div>
                      <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-400 ring-1 ring-white/10">
                        Live
                      </span>
                    </div>

                    <p
                      className={`relative mt-8 text-[1.65rem] font-bold tabular-nums leading-none tracking-tight sm:text-[1.85rem] ${tone.valueClass}`}
                    >
                      {m.value}
                    </p>
                    <p className="relative mt-3 text-sm font-semibold leading-snug text-white">{m.label}</p>
                    <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{m.hint}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Digital Canteen & Subsidy Control ,  equal-height columns: stretch grid + flex column */}
        <section
          className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/95 via-white to-white py-10 lg:py-16"
          aria-labelledby="digital-canteen-heading"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-28 top-24 h-64 w-64 rounded-full bg-sky-200/35 blur-[90px]" />
            <div className="absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-blue-100/45 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-14 xl:gap-16">
              <motion.div
                className="relative order-2 flex lg:order-1 lg:h-full lg:min-h-0 lg:items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                <div
                  className={`relative w-full rounded-[1.35rem]  p-2 shadow-[0_32px_85px_-42px_rgba(15,23,42,0.32)] ring-1 ring-slate-900/[0.05] ${interactiveSurfaceHover}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-900/5 ">
                    <video
                      className="absolute inset-0 h-full w-full rounded-2xl mt-12 object-cover object-top"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="/images/cmsy.jpg"
                      aria-label="Digital canteen dashboard ,  biometric meal verification, subsidy and payroll-linked rules, inventory signals, and contractor vs employee entitlements"
                    >
                      <source src={digitalCanteenSubsidyControlVideo} type="video/mp4" />
                    </video>
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-slate-900/[0.07] via-transparent to-transparent"
                      aria-hidden
                    />
                    <VideoLivePopups
                      popups={[
                        {
                          position: "top-left",
                          label: "Live",
                          title: "Meal verified",
                          className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:top-0 xl:-left-0",
                          accent: "emerald",
                        },
                        {
                          position: "bottom-right",
                          label: "Subsidy",
                          title: "Auto-applied",
                          subtitle: "Synced to payroll",
                          className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-0 xl:-right-2",
                          variant: "icon",
                          icon: "meal",
                          accent: "amber",
                        },
                      ]}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="order-1 flex flex-col lg:order-2 lg:h-full lg:min-h-0 lg:justify-between lg:gap-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
              >
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--inops-blue)] shadow-sm backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                    Serving line to ledger
                  </span>

                  <h2 id="digital-canteen-heading" className="mt-5 text-balance text-slate-900">
                    Digital canteen &amp;{" "}
                    <span className="font-semibold text-[color:var(--inops-blue)]">
                      subsidy control
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                    Replace informal registers and brittle Excel rules with biometric meal counts, live subsidies, and
                    inventory signals your procurement team can trust.
                  </p>
                </div>

                <ul className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-h-0 lg:flex-1 lg:justify-center lg:gap-3">
                  {digitalCanteenPillars.map((line) => (
                    <li
                      key={line}
                      className="group/line flex gap-3 rounded-xl border border-slate-200/90 bg-white/90 p-3.5 shadow-[0_14px_40px_-28px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/[0.03] transition-[border-color,box-shadow] duration-300 hover:border-[color:var(--inops-blue)]/30 hover:shadow-[0_18px_44px_-28px_rgba(29,95,191,0.14)] sm:p-4"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--inops-blue)] to-sky-600 text-white shadow-md shadow-blue-900/15 ring-2 ring-white">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <span className="text-base leading-relaxed text-slate-700">{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-0">
                  <Link href="/contact" className={inopsUi.btnPrimary}>
                    Talk to our team
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--inops-blue)] transition-colors duration-300 hover:text-[color:var(--inops-navy)]"
                  >
                    Learn more
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Secondary highlights ,  queue, mobile ops, alerts */}
        <section
          className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/40 to-white py-10 lg:py-16"
          aria-labelledby="canteen-ops-highlights-heading"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0v60M0 30h60' stroke='%2394a3b8' stroke-opacity='0.07' stroke-width='1'/%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-2xl text-center lg:max-w-3xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--inops-blue)]">
                Frontline operations
              </p>
              <h2
                id="canteen-ops-highlights-heading"
                className="mt-4 text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem]"
              >
                Insight at the{" "}
                <span className="font-semibold text-[color:var(--inops-blue)]">
                  serving line
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Capacity, devices, and alerts tuned for busy canteens, so supervisors act on facts, not guesswork.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7 lg:mt-14 lg:gap-8">
              {secondaryHighlights.map((item, i) => {
                const t = canteenThroughputByAccent[item.accent];
                return (
                  <ThroughputMetricCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    chip={item.pillar}
                    metric={String(i + 1).padStart(2, "0")}
                    accentBar={t.accentBar}
                    iconWrap={t.iconWrap}
                    hoverGlow={t.hoverGlow}
                    index={i}
                    icon={<HighlightIcon name={item.icon} className="h-6 w-6 text-current" />}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Visitor desk & lobby ,  equal-height split + premium cards */}
        <section
          id="visitor-desk"
          className="relative scroll-mt-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/35 to-white py-10 lg:py-16"
          aria-labelledby="visitor-desk-heading"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-indigo-100/40 blur-[100px]" />
            <div className="absolute bottom-12 left-10 h-64 w-64 rounded-full bg-sky-100/50 blur-[90px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-14 xl:gap-16">
              <motion.div
                className="flex flex-col lg:h-full lg:min-h-0 lg:justify-between lg:gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--inops-blue)] shadow-sm backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                    Visitor check-in &amp; canteen access
                  </span>

                  <h2 id="visitor-desk-heading" className="mt-5 text-balance text-slate-900">
                    Visitor Check-In{" "}
                    <span className="font-semibold text-[color:var(--inops-blue)]">
                      Linked to Canteen Access
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-lg">
                    The facility story doesn&apos;t stop at the serving line. Visitor passes carry canteen entitlements
                    — a contractor representative approved for the plant can access the canteen on the same credential,
                    with the same subsidy rules as your contractor workforce. Security, HR, and the front desk pull from
                    one trail, not parallel spreadsheets. For a standalone deployment see our dedicated{" "}
                    <Link
                      href="/visitor-management"
                      className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2 hover:text-[color:var(--inops-navy)] transition-colors duration-200"
                    >
                      visitor management system
                    </Link>
                    .
                  </p>
                </div>

                <ul className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-h-0 lg:flex-1 lg:justify-center lg:gap-3">
                  {visitorExperiencePillars.map((line) => (
                    <li
                      key={line}
                      className="group/vli relative overflow-hidden rounded-xl border border-slate-200/90 bg-white/90 p-3.5 shadow-[0_14px_40px_-28px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/[0.03] transition-[border-color,box-shadow] duration-300 hover:border-[color:var(--inops-blue)]/30 hover:shadow-[0_18px_44px_-28px_rgba(29,95,191,0.14)] sm:p-4"
                    >
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] overflow-hidden" aria-hidden>
                        <div className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[color:var(--inops-blue)] via-sky-500 to-cyan-400 opacity-95 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover/vli:scale-x-100 motion-reduce:scale-x-100 motion-reduce:transition-none" />
                      </div>
                      <div className="relative flex gap-3">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--inops-blue)] to-sky-600 text-white shadow-md shadow-blue-900/15 ring-2 ring-white">
                          <CheckIcon className="h-4 w-4" />
                        </span>
                        <span className="text-base leading-relaxed text-slate-700">{line}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 shrink-0 space-y-4 lg:mt-0">
                  {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Visitor Management System
                  </p> */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <Link href="/contact" className={inopsUi.btnPrimary}>
                      Get started
                    </Link>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--inops-blue)] transition-colors duration-300 hover:text-[color:var(--inops-navy)]"
                    >
                      Talk to visitor ops
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative flex lg:h-full lg:min-h-0 lg:items-center"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
              >
                <div
                  className={`relative w-full rounded-[1.35rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90 p-2 shadow-[0_32px_85px_-42px_rgba(15,23,42,0.32)] ring-1 ring-slate-900/[0.05] ${interactiveSurfaceHover}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-900/5 ring-1 ring-slate-200/80">
                    <video
                      className="absolute inset-0 h-full w-full rounded-2xl pt-13 object-cover object-center"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="/images/visitor.jpg"
                      aria-label="Visitor management and lobby reception"
                    >
                      <source src={visitorDeskLobbyCampusStackVideo} type="video/mp4" />
                    </video>
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tl from-slate-900/[0.08] via-transparent to-transparent"
                      aria-hidden
                    />
                    <VideoLivePopups
                      popups={[
                        {
                          position: "top-left",
                          label: "Live",
                          className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:top-0 xl:-left-0",
                          title: "Visitor logged",
                          accent: "emerald",
                        },
                        {
                          position: "bottom-right",
                          label: "Badge",
                          title: "Host notified",
                          className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-0 xl:-right-2",
                          variant: "icon",
                          icon: "id",
                          accent: "blue",
                        },
                      ]}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7 lg:mt-16 lg:gap-8">
              {visitorLobbyHighlights.map((item, i) => {
                const t = canteenThroughputByAccent[item.accent];
                return (
                  <ThroughputMetricCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    chip={item.pillar}
                    metric={String(i + 1).padStart(2, "0")}
                    accentBar={t.accentBar}
                    iconWrap={t.iconWrap}
                    hoverGlow={t.hoverGlow}
                    index={i}
                    icon={<HighlightIcon name={item.icon} className="h-6 w-6 text-current" />}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Visitor Management System ,  one-row layout on lg: copy + chips | process video */}
        <section
          className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50/35 to-white py-10 lg:py-12"
          aria-labelledby="vms-overview-heading"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.45]" aria-hidden>
            <div className="absolute left-1/2 top-0 h-[24rem] w-[min(100%,42rem)] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:items-center lg:gap-12 xl:grid-cols-[minmax(26rem,1.15fr)_minmax(0,32rem)] xl:gap-14">
              <motion.div
                className="min-w-0 w-full lg:max-w-none xl:pr-6"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--inops-blue)]">
                  Visitor Management System
                </p>
                <h2
                  id="vms-overview-heading"
                  className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-3xl xl:text-4xl"
                >
                  From invite to{" "}
                  <span className="font-semibold text-[color:var(--inops-blue)]">
                    lobby exit
                  </span>
                </h2>
                <div
                  className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[color:var(--inops-blue)] via-sky-500 to-cyan-400 shadow-sm shadow-sky-500/20"
                  aria-hidden
                />

                <div className="mt-6 space-y-3">
                  <p className="text-sm leading-relaxed text-slate-600 lg:text-base">
                    Pre-registration, desk check-in, badges, and host alerts roll into{" "}
                    <span className="font-medium text-slate-800">one audit-ready trail</span>, not parallel visitor logs.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 lg:text-base">
                    See who&apos;s on-site by zone, enforce access in real time, and export evidence when security or
                    compliance needs proof.
                  </p>
                </div>

                {/* Single horizontal row: three pillars (scroll on very narrow screens) */}
                <ul className="mt-8 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3 lg:mt-9 lg:flex-nowrap lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
                  {(
                    [
                      {
                        k: "Trail",
                        d: "Pre-auth → desk → badge",
                        topBar: "from-blue-600 via-sky-500 to-indigo-500",
                      },
                      {
                        k: "Roster",
                        d: "On-site by zone",
                        topBar: "from-violet-600 via-fuchsia-500 to-pink-500",
                      },
                      {
                        k: "Exports",
                        d: "Audit-ready proof",
                        topBar: "from-emerald-500 via-teal-500 to-cyan-500",
                      },
                    ] as const
                  ).map((chip) => (
                    <li
                      key={chip.k}
                      className="relative min-w-[7.25rem] shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200/90 bg-white/95 text-center shadow-[0_12px_36px_-28px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/[0.04] sm:min-w-0 sm:flex-1 lg:min-w-[7.25rem] lg:flex-1"
                    >
                      <div
                        className={`pointer-events-none absolute inset-x-0 top-0 z-[1] h-1.5 rounded-t-xl bg-gradient-to-r shadow-sm ${chip.topBar}`}
                        aria-hidden
                      />
                      <div className="relative z-[2] px-2.5 pb-2.5 pt-3.5 sm:px-3 sm:pb-3 sm:pt-4">
                        <span className="text-sm font-bold uppercase tracking-wide text-[color:var(--inops-blue)] sm:text-base">
                          {chip.k}
                        </span>
                        <span className="mt-1 block text-xs leading-snug text-slate-600 sm:text-xs">{chip.d}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="min-w-0 w-full lg:max-w-[28rem] lg:justify-self-end xl:max-w-[32rem]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
              >
                <div className="relative">
                  <div className="rounded-[1.15rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90 p-1.5 shadow-[0_20px_60px_-36px_rgba(15,23,42,0.32)] ring-1 ring-slate-900/[0.05]">
                    <div className="relative aspect-[1230/650] w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/80">
                      <video
                        className="absolute inset-0 h-full w-full object-contain object-center"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={visitorManagementProcessImage}
                        aria-label="Visitor management process ,  scheduled and walk-up flows, QR, badges, and records"
                      >
                        <source src={visitorManagementSystemVideo} type="video/mp4" />
                      </video>
                    <div
                      className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-slate-900/[0.07] via-transparent to-transparent"
                      aria-hidden
                    />
                    </div>
                  </div>
                  <VideoLivePopups
                    popups={[
                      {
                        position: "top-left",
                        label: "Live",
                        title: "Process running",
                        className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:-top-10 xl:-left-10",
                        accent: "emerald",
                      },
                      {
                        position: "bottom-right",
                        label: "Workflow",
                        title: "Scheduled & walk-up",
                        // subtitle: "QR → badge → records"
                        className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:-bottom-10 xl:-right-10",
                        variant: "icon",
                        icon: "qr",
                        accent: "blue",
                      },
                      ]}
                    />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* H2 content sections — SEO depth */}
        {/* <section className="border-t border-slate-100 bg-white py-12 lg:py-20" aria-labelledby="canteen-entitlement-heading">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.48, ease: smoothEase }}>
              <h2 id="canteen-entitlement-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Canteen management: entitlement, validation, reconciliation
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Meal entitlements — which shift, which contractor, which cost centre qualifies for which meal — follow the roster automatically. Biometric validation at the canteen counter replaces coupons and manual registers: a worker presents at the terminal, the system confirms their shift eligibility, and the meal is issued and logged without any paper or proxy.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Contractor-wise meal counts roll up to a canteen invoice report. The same contractor mapping your{" "}
                <a href="/contract-labour-management" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                  contract labour management system
                </a>{" "}
                maintains for attendance and payroll closes the billing gap — over-counted meals are flagged before the invoice is approved, not discovered in next month's audit.
              </p>
            </motion.div>
          </div>
        </section> */}

        {/* <section className="border-t border-slate-100 bg-slate-50 py-12 lg:py-20" aria-labelledby="visitor-pass-to-exit-heading">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.48, ease: smoothEase }}>
              <h2 id="visitor-pass-to-exit-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Visitor management: pass to exit
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Visitors enter through pre-registration (host-initiated) or walk-in (lobby check-in), receive host approval or auto-approval by visitor category, and are issued a digital gate pass with a defined validity window. Entry and exit are captured biometrically or by QR scan; the platform checks against watchlists and blacklists before pass issuance. All visit records are retained for the period your security policy requires, with data export available for audit or regulatory review.
              </p>
            </motion.div>
          </div>
        </section> */}

        {/* <section className="border-t border-slate-100 bg-white py-12 lg:py-20" aria-labelledby="canteen-one-identity-heading">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.48, ease: smoothEase }}>
              <h2 id="canteen-one-identity-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Why one identity platform matters
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                A single enrollment covers every touchpoint: gate entry, canteen counter, and visitor host lookup all resolve against the same identity record. Visitors use the same{" "}
                <a href="/turnstiles-access" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                  turnstile access control
                </a>{" "}
                lanes as workers, so security sees everyone on site — permanent staff, contract workers, and visitors — in one live view.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                When gate, canteen, and workforce systems share one identity spine, a contractor blocked at the gate is also automatically excluded from canteen eligibility that shift — no manual intervention, no reconciliation lag.
              </p>
            </motion.div>
          </div>
        </section> */}

        <section aria-labelledby="smart-canteen-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
  <div className="mx-auto max-w-7xl">
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease: smoothEase }}
    >
      <h2 id="smart-canteen-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        Frequently asked questions
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        Answers to common questions about industrial canteen management, visitor pass control, biometric meal issuance, attendance-linked eligibility, and access coordination for contractors and guests.
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
        {smartCanteenFaqItems.map((item, index) => (
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
            <div className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:pl-12 sm:text-base">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </motion.div>
  </div>
</section>

        <SolutionPageClosingCta
          headingId="canteen-final-cta-heading"
          heading="Ready to unify canteen, lobby, and policy?"
          description={
            <>
              Plants, IT parks, and infrastructure campuses run tighter when subsidies, serving lines, and visitor flows
              share one stack, biometrics and payroll-linked rules next to lobby workflows, so leakage and exceptions show
              up while they’re still fixable.
            </>
          }
          primaryLabel="Request a demo"
          secondaryLabel="Talk to a specialist"
          footnote="Tailored walkthrough · ~15 min session"
        />
      </div>
    </>
  );
}
