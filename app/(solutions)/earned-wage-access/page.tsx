"use client";

import { motion, useReducedMotion } from "framer-motion";
import SolutionLandingHero from "@/app/components/SolutionLandingHero";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";
import { ThroughputMetricCard } from "@/app/components/ThroughputMetricCard";
import { mediaVideos } from "@/app/lib/mediaAssets";
import { SPLIT_HERO_COPY_ML, SPLIT_HERO_MEDIA_MR } from "@/app/lib/splitHeroWideInsets";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const verifiedRightVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
} as const;

const verifiedFadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: smoothEase } },
} as const;

const verifiedListParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
} as const;

const verifiedListItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: smoothEase },
  },
} as const;

const verifiedStatParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
} as const;

const verifiedStatRow = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: smoothEase } },
} as const;

const impactMetricsContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
} as const;

const impactMetricsCard = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: smoothEase },
  },
} as const;

const costWaitingContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
} as const;

const costWaitingCard = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: smoothEase },
  },
} as const;

const ewaCostOfWaitingChallenges = [
  {
    chip: "Liquidity",
    metric: "01",
    title: "Wages locked",
    description:
      "Earnings sit behind fixed 30-day cycles ,  everyday essentials wait while liquidity stays out of reach.",
    accentBar: "from-blue-500 via-indigo-500 to-cyan-500",
    iconWrap:
      "bg-blue-50 text-blue-600 ring-blue-500/20 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(59,130,246,0.3)]",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v5l3 2" />
      </svg>
    ),
  },
  {
    chip: "Shock",
    metric: "02",
    title: "Emergency pressure",
    description:
      "Medical bills and urgent repairs push people toward high-interest credit when savings aren’t enough.",
    accentBar: "from-amber-500 via-orange-500 to-rose-600",
    iconWrap:
      "bg-amber-50 text-amber-700 ring-amber-500/20 group-hover:bg-amber-500 group-hover:text-white group-hover:ring-amber-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(245,158,11,0.34)]",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path d="m13 2-7 10h5l-1 10 8-12h-5l0-8Z" />
      </svg>
    ),
  },
  {
    chip: "Informal debt",
    metric: "03",
    title: "Informal borrowing",
    description:
      "Local lenders and ad-hoc debt erode focus and trust ,  performance and attendance suffer in silence.",
    accentBar: "from-fuchsia-500 via-violet-500 to-indigo-600",
    iconWrap:
      "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-500/20 group-hover:bg-fuchsia-600 group-hover:text-white group-hover:ring-fuchsia-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(192,38,211,0.28)]",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path d="M5 15l4-4 3 3 7-7" />
        <path d="M19 10V6h-4" />
      </svg>
    ),
  },
  {
    chip: "Retention",
    metric: "04",
    title: "High attrition",
    description:
      "Financial stress drives turnover and endless salary-advance requests ,  a hidden tax on operations.",
    accentBar: "from-sky-500 via-cyan-500 to-blue-700",
    iconWrap:
      "bg-sky-50 text-sky-600 ring-sky-500/20 group-hover:bg-sky-500 group-hover:text-white group-hover:ring-sky-400/40",
    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(14,165,233,0.3)]",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <circle cx="9" cy="8" r="3" />
        <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
        <path d="M16 9h5" />
        <path d="M18.5 6.5v5" />
      </svg>
    ),
  },
] as const;

const ewaHowItWorksSteps = [
  "Biometric or app-based check-ins recorded.",
  "Real-time computation based on shift data.",
  "One-tap withdrawal via mobile app interface.",
  "Instant transfer to verified bank accounts.",
  "Deducted automatically from next payroll cycle.",
] as const;

const ewaFaqItems = [
  {
    question: "What is Earned Wage Access (EWA)?",
    answer:
      "Earned Wage Access (EWA) allows employees to withdraw a portion of their already-earned salary before the regular payday — without disrupting payroll processes. Unlike an advance or a loan, the amount is calculated from verified attendance and shift data, so workers only access money they have genuinely earned.",
  },
  {
    question: "Is earned wage access a loan?",
    answer:
      "Structurally, EWA is an advance on earned-but-unpaid wages rather than credit against future income. The distinction matters under Indian law: an advance on wages does not trigger the Money Lenders Act, does not create a credit liability, and does not require consent under the Credit Information Companies Act. InOps EWA (Salary++) is disbursed through a regulated NBFC partner and recovered at source at the next payroll cycle — no rollovers, no accruing interest, no separate repayment schedule. For the worker it is access to money they have already earned; for the employer it is a payroll timing adjustment with zero additional liability.",
  },
  {
    question: "Is EWA regulated in India?",
    answer:
      "EWA in India sits within a transitional regulatory landscape. The Reserve Bank of India has issued digital-lending guidelines that apply to wage-advance products: disbursements must route through a regulated entity (bank or NBFC), any fee must be disclosed upfront, and rollovers are not permitted. InOps Salary++ disburses through a licensed NBFC partner and recovers advances at source from the employer's payroll cycle — aligned with current RBI digital-lending norms and the evolving Code on Social Security framework.",
  },
  {
    question: "How does EWA interact with PF and ESI deductions?",
    answer:
      "PF and ESI are computed on the full statutory wage for the period — the advance withdrawal does not reduce the base used for contribution calculations. When the advance is recovered at the next payroll cycle, net take-home is adjusted but statutory deductions (PF, ESI, PT, TDS) remain on the gross wage. Workers retain their full social-security entitlements and employers have no change in statutory filing or challan amounts.",
  },
  {
    question: "How does Earned Wage Access benefit employees?",
    answer:
      "EWA improves financial flexibility, reduces dependence on high-interest informal loans, and lowers attrition driven by cash-flow stress between paydays. Workers with access to Salary++ report fewer absenteeism events and higher engagement — because financial emergencies no longer require borrowing at predatory rates or taking leave to chase cash.",
  },
  {
    question: "What is the maximum amount a worker can withdraw before payday?",
    answer:
      "The withdrawal limit is set by employer policy — typically 40–50% of verified earned wages for the current cycle. InOps Salary++ calculates the eligible amount from biometric attendance records and shift-wage data in real time, so the limit always reflects actual work done rather than an estimate. Employers can set site-level or worker-category caps independently.",
  },
  {
    question: "Does Earned Wage Access affect payroll?",
    answer:
      "No. Approved salary advances are automatically reconciled during the regular payroll cycle — the gross wage, statutory deductions, and payroll register are unchanged. The advance simply reduces the net disbursement at month end by the amount already withdrawn.",
  },
  {
    question: "Is Earned Wage Access suitable for contract workers?",
    answer:
      "Yes. InOps Salary++ extends to contract workers managed through InOps CLMS — eligibility is based on verified biometric attendance rather than employment type, so contractors on daily or weekly wages can access earned wages on the same platform as permanent employees.",
  },
  {
    question: "Is there a cost to the employer for offering EWA?",
    answer:
      "No capital outlay is required. InOps Salary++ is funded by an NBFC partner; the employer's role is to recover the advance in the next payroll cycle, which it already runs. There are no float costs, no advance-funding account, and no credit risk for the employer. The platform fee is per-disbursement and is typically absorbed as a retention benefit or passed through as a nominal convenience charge to the worker.",
  },
  {
    question: "Can Earned Wage Access integrate with HRMS and payroll?",
    answer:
      "Yes. InOps Salary++ integrates with HRMS, attendance, and payroll systems for secure and accurate wage calculations. It runs on the same attendance engine as InOps CLMS and HRIS, so every withdrawal is validated against the same verified records that drive your contractor and permanent-employee payroll.",
  },
] as const;

const ewaEcosystemIntegrations = [
  {
    title: "Workforce Platform (CLMS)",
    topBar: "from-blue-600 via-indigo-500 to-cyan-500",
    cardSurface:
      "border-blue-200/70 bg-gradient-to-br from-blue-50/95 via-white to-indigo-50/50 shadow-[0_14px_44px_-30px_rgba(37,99,235,0.16)] ring-1 ring-blue-500/[0.08] hover:border-blue-300/85 hover:shadow-[0_24px_52px_-28px_rgba(59,130,246,0.28)]",
    iconBg: "from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/35 ring-2 ring-white/50",
    orb: "from-blue-500/35 to-indigo-600/20",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <circle cx="9" cy="8" r="3" />
        <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
        <path d="M16 9h5" />
        <path d="M18.5 6.5v5" />
      </svg>
    ),
  },
  {
    title: "Worker Mobile App",
    topBar: "from-sky-500 via-cyan-500 to-teal-500",
    cardSurface:
      "border-sky-200/70 bg-gradient-to-br from-sky-50/95 via-white to-cyan-50/45 shadow-[0_14px_44px_-30px_rgba(14,165,233,0.14)] ring-1 ring-sky-500/[0.08] hover:border-sky-300/85 hover:shadow-[0_24px_52px_-28px_rgba(6,182,212,0.22)]",
    iconBg: "from-sky-500 to-cyan-600 text-white shadow-lg shadow-cyan-600/30 ring-2 ring-white/50",
    orb: "from-cyan-400/30 to-teal-500/18",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: "NBFC / Banking Partner",
    topBar: "from-emerald-500 via-teal-500 to-green-600",
    cardSurface:
      "border-emerald-200/70 bg-gradient-to-br from-emerald-50/95 via-white to-teal-50/40 shadow-[0_14px_44px_-30px_rgba(16,185,129,0.12)] ring-1 ring-emerald-500/[0.08] hover:border-emerald-300/85 hover:shadow-[0_24px_52px_-28px_rgba(20,184,166,0.22)]",
    iconBg: "from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-600/30 ring-2 ring-white/50",
    orb: "from-emerald-400/28 to-teal-600/18",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path d="m3 9 9-5 9 5" />
        <path d="M4 10v9h16v-9" />
        <path d="M9 19v-5h6v5" />
      </svg>
    ),
  },
  {
    title: "Payroll System",
    topBar: "from-violet-500 via-fuchsia-500 to-rose-500",
    cardSurface:
      "border-violet-200/65 bg-gradient-to-br from-violet-50/90 via-white to-fuchsia-50/40 shadow-[0_14px_44px_-30px_rgba(139,92,246,0.12)] ring-1 ring-violet-500/[0.08] hover:border-violet-300/85 hover:shadow-[0_24px_52px_-28px_rgba(192,38,211,0.2)]",
    iconBg: "from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/28 ring-2 ring-white/50",
    orb: "from-fuchsia-400/25 to-violet-600/18",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M16 10h3" />
        <path d="M16 14h3" />
      </svg>
    ),
  },
] as const;

const ewaImpactMetrics = [
  {
    value: "40%",
    label: "Stability",
    description: "Reduction in workforce churn rate, based on InOps deployment data.",
    topBar: "from-blue-600 via-indigo-500 to-violet-500",
    cardSurface:
      "border-blue-200/75 bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/40 ring-1 ring-blue-500/[0.07] hover:border-blue-300/90 hover:shadow-[0_26px_56px_-28px_rgba(59,130,246,0.26)]",
    valueGradient: "from-blue-700 via-indigo-600 to-violet-600",
    orb: "from-blue-500/30 to-indigo-500/15",
    iconBg: "from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/32 ring-2 ring-white/45",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "15%",
    label: "Productivity",
    description: "Increase in shift fulfillment, based on InOps deployment data.",
    topBar: "from-sky-500 via-cyan-500 to-teal-500",
    cardSurface:
      "border-cyan-200/70 bg-gradient-to-br from-sky-50/90 via-white to-teal-50/38 ring-1 ring-cyan-500/[0.07] hover:border-cyan-300/90 hover:shadow-[0_26px_56px_-28px_rgba(6,182,212,0.24)]",
    valueGradient: "from-sky-600 via-cyan-600 to-teal-600",
    orb: "from-cyan-400/28 to-teal-500/14",
    iconBg: "from-sky-500 to-cyan-600 text-white shadow-lg shadow-cyan-600/28 ring-2 ring-white/45",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </svg>
    ),
  },
  {
    value: "Zero",
    label: "Risk",
    description: "Platform handles all disbursement and collection risks.",
    topBar: "from-amber-500 via-orange-500 to-rose-600",
    cardSurface:
      "border-amber-200/70 bg-gradient-to-br from-amber-50/92 via-white to-orange-50/35 ring-1 ring-amber-500/[0.07] hover:border-amber-300/90 hover:shadow-[0_26px_56px_-28px_rgba(245,158,11,0.22)]",
    valueGradient: "from-amber-600 via-orange-600 to-rose-700",
    orb: "from-amber-400/28 to-orange-500/14",
    iconBg: "from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-600/28 ring-2 ring-white/45",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    value: "Scale",
    label: "Financial Inclusion",
    description: "Bring enterprise-grade banking to your unbanked staff.",
    topBar: "from-violet-500 via-fuchsia-500 to-indigo-600",
    cardSurface:
      "border-violet-200/70 bg-gradient-to-br from-violet-50/90 via-white to-fuchsia-50/35 ring-1 ring-violet-500/[0.07] hover:border-violet-300/90 hover:shadow-[0_26px_56px_-28px_rgba(139,92,246,0.22)]",
    valueGradient: "from-violet-600 via-fuchsia-600 to-indigo-700",
    orb: "from-fuchsia-400/25 to-violet-600/16",
    iconBg: "from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/28 ring-2 ring-white/45",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10" />
      </svg>
    ),
  },
] as const;

export default function EwaPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
      <SolutionLandingHero
        badge={
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-blue-600">
            Salary++ by InOps
          </span>
        }
        title={
          <>
            Earned Wage Access for <span className="text-blue-600">Factory Workers</span>
          </>
        }
        subtitle="InOps EWA (Salary++) lets workers withdraw verified earned wages before payday — not a loan, no interest, auto-settled in the next payroll cycle. Zero capital outlay for employers."
        videoSrc={mediaVideos.ewaPlatformPreview}
        imageSrc="/images/payroll-solutions-hero.png"
        imageAlt="Workforce on site ,  earned wage access aligned to verified attendance"
        imageWrapperClassName={`relative mt-25 rounded-2xl  h-52 w-full overflow-hidden sm:h-60 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 ${SPLIT_HERO_MEDIA_MR}`}
        splitHeroCopyStackClassName={SPLIT_HERO_COPY_ML}
        waveBandBelowHero
        imageClassName="object-cover object-[center_35%] sm:object-center lg:object-[center_40%]"
        gradientClassName="pointer-events-none absolute inset-0 bg-gradient-to-r from-white from-0% via-white/[0.98] via-[42%] to-transparent to-[62%] lg:via-[44%] lg:to-[68%]"
        imageSizes="(max-width: 1024px) 100vw, 50vw"
        primaryCta={{ label: "Book a Demo", href: "/contact" }}
        secondaryCta={{ label: "How Salary++ Works", href: "#ewa-how-it-works-heading" }}
        livePopups={[
          {
            position: "top-left",
            animateOnMount: true,
            className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:top-20 xl:-left-20",
            label: "Live",
            title: "Wages unlocked",
            accent: "emerald",
          },
          {
            position: "bottom-right",
            label: "Approved",
            title: "Earned-wage withdrawal",
            subtitle: "Linked to attendance",
            className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-0 xl:-right-0",
            variant: "icon",
            icon: "wallet",
            accent: "blue",
          },
        ]}
      />

      <section
        className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/40 to-white py-12 lg:py-20"
        aria-labelledby="ewa-cost-of-waiting-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(105deg,transparent_0%,transparent_40%,rgba(59,130,246,0.04)_50%,transparent_60%,transparent_100%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm backdrop-blur-sm">
              The cost of waiting
            </span>
            <h2 id="ewa-cost-of-waiting-heading" className="mt-6 text-gray-900">
              The financial gap in{" "}
              <span className="font-semibold text-[color:var(--inops-blue)]">
                workforce operations
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Rigid monthly payroll cycles strain workers who need liquidity between paydays ,  and
              consume HR with advances, exceptions, and churn that could be prevented.
            </p>
          </motion.div>

          <div className="relative mt-14 lg:mt-16">
            <div
              className="pointer-events-none absolute left-[6%] right-[6%] top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent xl:block"
              aria-hidden
            />

            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6"
              variants={costWaitingContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {ewaCostOfWaitingChallenges.map((item) => (
                <ThroughputMetricCard
                  key={item.title}
                  motionVariants={costWaitingCard}
                  title={item.title}
                  description={item.description}
                  chip={item.chip}
                  metric={item.metric}
                  accentBar={item.accentBar}
                  iconWrap={item.iconWrap}
                  hoverGlow={item.hoverGlow}
                  icon={item.icon}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-12 lg:py-20">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[min(80rem,100vw)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.09),transparent_68%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4 rounded-full bg-blue-100/40 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm backdrop-blur-sm">
              The platform
            </span>
            <h2 className="mt-6 text-slate-900">
              Salary++ — a smarter way to access{" "}
              <span className="font-semibold text-[color:var(--inops-blue)]">
                earned wages
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              A data-driven layer inside your workforce stack ,  unlock liquidity for employees with
              controls and reconciliation built for payroll, not patchwork spreadsheets.
            </p>
          </motion.div>

          <div className="relative mt-14 lg:mt-16">
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-12 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block"
              aria-hidden
            />

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
              {(
                [
                  {
                    tag: "Live ledger",
                    title: "Real-time wage visibility",
                    description:
                      "After every shift, workers see earnings update in one clear view ,  motivation and trust stay tied to work performed, not guesswork.",
                    topBar: "from-blue-600 via-indigo-500 to-cyan-500",
                    cardSurface:
                      "border-blue-200/65 bg-gradient-to-br from-blue-50/85 via-white to-indigo-50/40 shadow-[0_14px_44px_-30px_rgba(37,99,235,0.18)] ring-1 ring-blue-500/[0.08] hover:border-blue-300/80 hover:shadow-[0_26px_56px_-30px_rgba(59,130,246,0.28)]",
                    iconBg: "from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-white/50",
                    tagTone: "border border-blue-200/90 bg-gradient-to-r from-blue-50 to-indigo-50/80 text-blue-800 ring-1 ring-blue-500/10",
                    stackGradient: "from-blue-600 via-indigo-600 to-cyan-600",
                    footerTint: "border-blue-100/90",
                    icon: (
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                        <path d="M4 19h16" />
                        <path d="M8 16V9" />
                        <path d="M12 16V6" />
                        <path d="M16 16v-4" />
                      </svg>
                    ),
                  },
                  {
                    tag: "Always on",
                    title: "On-demand access",
                    description:
                      "Withdraw a governed share of already-earned pay anytime ,  mobile-first flows that feel as simple as checking a bank balance.",
                    topBar: "from-sky-500 via-blue-500 to-indigo-600",
                    cardSurface:
                      "border-sky-200/65 bg-gradient-to-br from-sky-50/85 via-white to-blue-50/35 shadow-[0_14px_44px_-30px_rgba(14,165,233,0.16)] ring-1 ring-sky-500/[0.08] hover:border-sky-300/80 hover:shadow-[0_26px_56px_-30px_rgba(14,165,233,0.22)]",
                    iconBg: "from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-600/28 ring-2 ring-white/50",
                    tagTone: "border border-sky-200/90 bg-gradient-to-r from-sky-50 to-blue-50/80 text-sky-900 ring-1 ring-sky-500/10",
                    stackGradient: "from-sky-600 via-blue-600 to-indigo-700",
                    footerTint: "border-sky-100/90",
                    icon: (
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                        <rect x="7" y="3" width="10" height="18" rx="2" />
                        <path d="M11 18h2" />
                      </svg>
                    ),
                  },
                  {
                    tag: "Payroll-safe",
                    title: "Payroll-integrated system",
                    description:
                      "Withdrawals reconcile automatically against your run ,  HR skips manual tallying, exceptions shrink, and month-end stays predictable.",
                    topBar: "from-amber-500 via-orange-500 to-rose-600",
                    cardSurface:
                      "border-amber-200/65 bg-gradient-to-br from-amber-50/90 via-white to-orange-50/35 shadow-[0_14px_44px_-30px_rgba(245,158,11,0.14)] ring-1 ring-amber-500/[0.08] hover:border-amber-300/80 hover:shadow-[0_26px_56px_-30px_rgba(245,158,11,0.2)]",
                    iconBg: "from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-600/28 ring-2 ring-white/50",
                    tagTone: "border border-amber-200/90 bg-gradient-to-r from-amber-50 to-orange-50/80 text-amber-950 ring-1 ring-amber-500/10",
                    stackGradient: "from-amber-600 via-orange-600 to-rose-700",
                    footerTint: "border-amber-100/90",
                    icon: (
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                        <ellipse cx="12" cy="6" rx="5" ry="2.5" />
                        <path d="M7 6v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V6" />
                        <path d="M7 10v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" />
                      </svg>
                    ),
                  },
                ] as const
              ).map((item, index) => (
                <motion.article
                  key={item.title}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${item.cardSurface}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: index * 0.06 }}
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-30 blur-3xl transition-opacity duration-300 group-hover:opacity-[0.42] ${item.topBar}`}
                    aria-hidden
                  />
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 z-[2] h-1 rounded-t-2xl bg-gradient-to-r shadow-sm ${item.topBar}`}
                    aria-hidden
                  />
                  <div className="relative z-10 flex items-center justify-between gap-2.5">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.iconBg}`}
                    >
                      {item.icon}
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.14em] shadow-sm backdrop-blur-[2px] ${item.tagTone}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="relative z-10 mt-4 text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="relative z-10 mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {item.description}
                  </p>
                  <div
                    className={`relative z-10 mt-5 flex items-center gap-2 border-t pt-3.5 ${item.footerTint}`}
                  >
                    <span
                      className={`h-0.5 w-8 shrink-0 rounded-full bg-gradient-to-r ${item.topBar}`}
                      aria-hidden
                    />
                    <span
                      className={`bg-gradient-to-r bg-clip-text text-xs font-semibold uppercase tracking-[0.12em] text-transparent sm:text-xs ${item.stackGradient}`}
                    >
                      Built into your stack
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden border-y border-white/[0.06] bg-slate-950 py-12 lg:py-20"
        aria-labelledby="ewa-how-it-works-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(37,99,235,0.28),transparent_58%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_42%_at_100%_85%,rgba(59,130,246,0.14),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:52px_52px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-3xl lg:text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              How it works
            </span>
            <h2 id="ewa-how-it-works-heading" className="mt-5 text-white">
              Five steps.{" "}
              <span className="font-semibold text-slate-300">
                Zero payroll friction.
              </span>
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
              {(
                [
                  {
                    label: "Fully automated",
                    tone: "border-emerald-500/30 bg-emerald-500/[0.12] text-emerald-100/95",
                    dot: "bg-emerald-400",
                  },
                  {
                    label: "Secure",
                    tone: "border-sky-500/30 bg-sky-500/[0.12] text-sky-50/95",
                    dot: "bg-sky-400",
                  },
                  {
                    label: "Completed in minutes",
                    tone: "border-indigo-500/30 bg-indigo-500/[0.12] text-indigo-100/95",
                    dot: "bg-indigo-400",
                  },
                ] as const
              ).map((chip) => (
                <span
                  key={chip.label}
                  className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold tracking-tight sm:text-sm ${chip.tone}`}
                >
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${chip.dot}`} aria-hidden />
                  {chip.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Mobile ,  vertical rail */}
          <div className="relative mt-12 md:hidden">
            <div
              className="pointer-events-none absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/50 via-slate-600/70 to-slate-700/30"
              aria-hidden
            />
            <ol className="relative list-none space-y-5 p-0">
              {ewaHowItWorksSteps.map((step, index) => (
                <motion.li
                  key={step}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.42, ease: smoothEase, delay: index * 0.05 }}
                >
                  <div className="relative z-[1] flex shrink-0 flex-col items-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-blue-500/35 to-indigo-600/25 text-sm font-bold tabular-nums tracking-tight text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] ring-2 ring-slate-950">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.08] to-white/[0.02] px-4 py-3.5 shadow-[0_16px_48px_-32px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.05] backdrop-blur-sm">
                    <p className="text-base font-medium leading-snug text-slate-200">{step}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* md+ ,  pipeline cards */}
          <div className="relative mt-14 hidden md:block">
            <div
              className="pointer-events-none absolute left-[4%] right-[4%] top-[22px] hidden h-px bg-gradient-to-r from-transparent via-blue-400/35 to-transparent lg:block"
              aria-hidden
            />
            <ol className="relative grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
              {ewaHowItWorksSteps.map((step, index) => (
                <motion.li
                  key={step}
                  className="group relative flex flex-col"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: index * 0.06 }}
                >
                  <div className="flex flex-col items-center text-center lg:items-stretch lg:text-left">
                    <div className="relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-blue-500/35 to-indigo-600/25 text-sm font-bold tabular-nums text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] ring-2 ring-slate-950 transition-[transform,box-shadow] duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_28px_-12px_rgba(59,130,246,0.45)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-5 flex min-h-[7.5rem] flex-1 flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-4 shadow-[0_20px_50px_-36px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.05] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 group-hover:border-blue-400/25 group-hover:shadow-[0_24px_56px_-32px_rgba(59,130,246,0.22)] lg:min-h-[8.25rem]">
                      <p className="text-left text-sm font-medium leading-snug text-slate-200 sm:text-sm lg:text-base lg:leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Legal clarity section — pending final legal review before publishing */}
      {/* <section
        className="border-t border-slate-100 bg-white py-12 lg:py-20"
        aria-labelledby="ewa-loan-question-heading"
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.48, ease: smoothEase }}
          >
            <h2
              id="ewa-loan-question-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Is earned wage access a loan?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Structurally, EWA is an advance on earned-but-unpaid wages rather than credit against future income. The distinction matters under Indian law: an advance on wages does not trigger the Money Lenders Act, does not create a credit liability, and does not require consent under the Credit Information Companies Act. InOps EWA is disbursed through a regulated NBFC partner and recovered at source at the next payroll cycle — no rollovers, no accruing interest, no separate repayment schedule. For the worker it is access to money they have already earned; for the employer it is a payroll timing adjustment with zero additional liability.
            </p>
          </motion.div>
        </div>
      </section> */}

      <section
        className="relative overflow-hidden border-y border-slate-200/70 bg-gradient-to-b from-slate-50/95 via-white to-white py-12 lg:py-20"
        aria-labelledby="ewa-ecosystem-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_-15%,rgba(59,130,246,0.09),transparent_58%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_38%_at_100%_100%,rgba(99,102,241,0.06),transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:56px_56px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm backdrop-blur-sm">
              Integration stack
            </span>
            <h2 id="ewa-ecosystem-heading" className="mt-5 text-slate-900">
              Powered by a{" "}
              <span className="font-semibold text-[color:var(--inops-blue)]">
                connected ecosystem
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Salary++ intelligently connects your workforce, payroll and banking ecosystem to deliver secure, real-time earned wage access. It runs on the same attendance engine as{" "}
              <a href="/contract-labour-management" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                InOps CLMS
              </a>
              , so every withdrawal is validated against the same verified records that drive your contractor payroll.
            </p>
          </motion.div>

          <div className="relative mt-14">
            <div
              className="pointer-events-none absolute left-[6%] right-[6%] top-7 hidden h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent xl:block"
              aria-hidden
            />
            <ul className="relative grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
              {ewaEcosystemIntegrations.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: index * 0.06 }}
                >
                  <article
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 ${item.cardSurface}`}
                  >
                    <div
                      className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-70 ${item.orb}`}
                      aria-hidden
                    />
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 z-[2] h-1.5 rounded-t-2xl bg-gradient-to-r shadow-sm ${item.topBar}`}
                      aria-hidden
                    />
                    <div className="relative z-10 flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-[1.05] ${item.iconBg}`}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <h3 className="font-semibold tracking-tight text-slate-900">{item.title}</h3>
                      </div>
                    </div>
                  </article>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#111722] p-5 shadow-[0_24px_56px_-34px_rgba(15,23,42,0.55)] sm:p-6"
            >
              <motion.div
                aria-hidden
                className="pointer-events-none  absolute -right-16 !-top-16 h-40 w-40  rounded-full bg-blue-500/15 blur-3xl"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.8, ease: smoothEase }}
              />
              <div className="relative mb-4  flex items-center justify-between gap-3">
                <motion.h3
                  className="text-lg font-semibold text-white sm:text-xl"
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase }}
                >
                  Live Data Verification
                </motion.h3>
                <motion.span
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewport}
                  transition={{ delay: 0.15, duration: 0.35 }}
                >
                  {reduceMotion ? (
                    <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                  ) : (
                    <motion.span className="relative flex h-2 w-2 shrink-0" aria-hidden>
                      <motion.span
                        className="absolute inset-0 rounded-full bg-emerald-400/45 blur-[3px]"
                        animate={{ opacity: [0.45, 0.9, 0.45], scale: [1, 1.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.span
                        className="relative block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.span>
                  )}
                  System Online
                </motion.span>
              </div>

              <motion.div
                className="relative space-y-3"
                variants={verifiedStatParent}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {[
                  { label: "Attendance Sync", value: "99.9%", valueClass: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30" },
                  { label: "Identity Check", value: "Verified", valueClass: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-600/25" },
                  { label: "Disbursement Speed", value: "< 2m", valueClass: "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-600/28" },
                ].map((row) => (
                  <motion.div
                    key={row.label}
                    variants={verifiedStatRow}
                    className="flex items-center justify-between rounded-xl border border-slate-600/90 bg-gradient-to-r from-slate-800/95 to-slate-800/70 px-4 py-3 shadow-inner shadow-black/20 transition-[border-color,box-shadow] duration-300 hover:border-cyan-500/25 hover:shadow-[0_0_24px_-8px_rgba(34,211,238,0.15)]"
                  >
                    <span className="text-sm font-medium text-slate-100">{row.label}</span>
                    <motion.span
                      className={`rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${row.valueClass}`}
                      initial={false}
                      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    >
                      {row.value}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="relative mt-5 overflow-hidden rounded-lg border border-slate-700 bg-slate-900/70 p-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.35, duration: 0.45, ease: smoothEase }}
              >
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-700">
                  <motion.div
                    className="h-1.5 rounded-full bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "84%" }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: reduceMotion ? 0.15 : 1.2,
                      ease: smoothEase,
                      delay: reduceMotion ? 0 : 0.45,
                    }}
                  />
                </div>
                {!reduceMotion ? (
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute bottom-3 left-3 top-3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
                    initial={{ x: "-30%" }}
                    whileInView={{ x: ["-30%", "120%"], opacity: [0, 0.35, 0] }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.8, ease: "easeInOut", delay: 1.35 }}
                  />
                ) : null}
                <motion.div
                  className="mt-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewport}
                  transition={{ delay: reduceMotion ? 0.2 : 1.05, duration: 0.35 }}
                >
                  <span>Data Arc</span>
                  <span>Sync Complete</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={verifiedRightVariants}
            >
              <motion.h2 variants={verifiedFadeUp} className="text-gray-900">
                Built on Verified Workforce Data
              </motion.h2>
              <motion.p
                variants={verifiedFadeUp}
                className="mt-4 text-base leading-relaxed text-gray-500 sm:text-xl"
              >
                Decisions are never based on credit scores, but on the immutable reality of work
                performed.
              </motion.p>

              <motion.div className="mt-8 space-y-4" variants={verifiedListParent}>
                {(
                  [
                    {
                      title: "Attendance-based wage calculation",
                      description: "Directly linked to biometric clock-ins for 100% accuracy.",
                      topBar: "from-blue-600 via-indigo-500 to-cyan-500",
                      surface:
                        "border-blue-200/65 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/35 shadow-[0_12px_36px_-28px_rgba(37,99,235,0.18)] ring-1 ring-blue-500/[0.06]",
                      iconWrap:
                        "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/25 ring-2 ring-white/60",
                    },
                    {
                      title: "Real-time income visibility",
                      description: "Dynamic ledger updates as shifts are completed.",
                      topBar: "from-sky-500 via-cyan-500 to-teal-500",
                      surface:
                        "border-sky-200/65 bg-gradient-to-br from-sky-50/75 via-white to-cyan-50/35 shadow-[0_12px_36px_-28px_rgba(14,165,233,0.16)] ring-1 ring-sky-500/[0.06]",
                      iconWrap:
                        "bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-md shadow-cyan-600/22 ring-2 ring-white/60",
                    },
                    {
                      title: "Identity-backed verification",
                      description: "Secure KYC ensures funds always reach the right recipient.",
                      topBar: "from-violet-600 via-fuchsia-500 to-pink-500",
                      surface:
                        "border-violet-200/60 bg-gradient-to-br from-violet-50/75 via-white to-fuchsia-50/30 shadow-[0_12px_36px_-28px_rgba(139,92,246,0.14)] ring-1 ring-violet-500/[0.06]",
                      iconWrap:
                        "bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-600/25 ring-2 ring-white/60",
                    },
                    // {
                    //   title: "Behavior-based eligibility",
                    //   description: "Intelligent limits based on historical attendance patterns.",
                    //   topBar: "from-amber-500 via-orange-500 to-rose-600",
                    //   surface:
                    //     "border-amber-200/65 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/32 shadow-[0_12px_36px_-28px_rgba(245,158,11,0.14)] ring-1 ring-amber-500/[0.06]",
                    //   iconWrap:
                    //     "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-amber-600/22 ring-2 ring-white/60",
                    // },
                  ] as const
                ).map((item) => (
                  <motion.div
                    key={item.title}
                    variants={verifiedListItem}
                    className={`group relative flex items-start gap-3 overflow-hidden rounded-xl border p-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-30px_rgba(15,23,42,0.12)] ${item.surface}`}
                  >
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 z-[1] h-1 rounded-t-xl bg-gradient-to-r ${item.topBar}`}
                      aria-hidden
                    />
                    <motion.span
                      className={`relative z-[2] mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.iconWrap}`}
                      whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 380, damping: 18 }}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} aria-hidden>
                        <path d="M12 3 5 6v6c0 5 3.5 7.8 7 9 3.5-1.2 7-4 7-9V6l-7-3Z" />
                        <path d="m9.5 12 1.7 1.7 3.3-3.4" />
                      </svg>
                    </motion.span>
                    <div className="relative z-[2] min-w-0">
                      <h3 className="font-semibold tracking-tight text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-10 lg:py-14">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_30%,rgba(16,185,129,0.08),transparent_55%),radial-gradient(ellipse_70%_45%_at_85%_70%,rgba(139,92,246,0.08),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.28)] ring-1 ring-slate-900/[0.04] backdrop-blur-sm">
            <div className="grid grid-cols-1 divide-y divide-slate-200/80 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
              {(
                [
                  {
                    badge: "For Workers",
                    title: "Empowerment & Wellness",
                    topBar: "from-emerald-500 via-teal-500 to-cyan-500",
                    cardClass:
                      "bg-gradient-to-br from-emerald-50/90 via-white to-cyan-50/40 ring-1 ring-emerald-500/[0.06]",
                    badgeClass:
                      "border border-emerald-200/90 bg-gradient-to-r from-emerald-50 to-teal-50/90 text-emerald-900 shadow-sm ring-1 ring-emerald-500/10",
                    titleAccent: "from-emerald-700 via-teal-600 to-cyan-600",
                    rowBorder: "border-emerald-100/80",
                    checkStyles: [
                      "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-600/25",
                      "bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md shadow-teal-600/25",
                      "bg-gradient-to-br from-cyan-500 to-sky-600 text-white shadow-md shadow-cyan-600/25",
                      "bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md shadow-sky-600/25",
                    ],
                    points: [
                      "Instant access to earned wages 24/7",
                      "Zero dependence on high-interest credit",
                      "Significant reduction in financial stress",
                      "Improved dignity and financial control",
                    ],
                  },
                  {
                    badge: "For Employers",
                    title: "Retention & Efficiency",
                    topBar: "from-violet-600 via-fuchsia-500 to-amber-500",
                    cardClass:
                      "bg-gradient-to-br from-violet-50/90 via-white to-amber-50/35 ring-1 ring-violet-500/[0.06]",
                    badgeClass:
                      "border border-violet-200/90 bg-gradient-to-r from-violet-50 to-fuchsia-50/90 text-violet-950 shadow-sm ring-1 ring-violet-500/10",
                    titleAccent: "from-violet-700 via-fuchsia-600 to-amber-600",
                    rowBorder: "border-violet-100/80",
                    checkStyles: [
                      "bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-600/25",
                      "bg-gradient-to-br from-fuchsia-500 to-pink-600 text-white shadow-md shadow-fuchsia-600/25",
                      "bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-600/25",
                      "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-amber-600/25",
                    ],
                    points: [
                      "Drastic reduction in salary advance requests",
                      "Up to 40% improvement in worker retention (InOps deployment data)",
                      "No financial liability or capital expenditure",
                      "Fully automated compliance and accounting",
                    ],
                  },
                ] as const
              ).map((column, index) => (
                <motion.article
                  key={column.title}
                  className={`relative overflow-hidden p-7 sm:p-8 ${column.cardClass}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.42, ease: smoothEase, delay: index * 0.05 }}
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${column.topBar}`}
                    aria-hidden
                  />
                  <span
                    className={`relative mt-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${column.badgeClass}`}
                  >
                    {column.badge}
                  </span>
                  <h2 className="relative mt-4 text-slate-900">
                    <span
                      className={`text-black ${column.titleAccent}`}
                    >
                      {column.title}
                    </span>
                  </h2>

                  <ul className="relative mt-7 space-y-0">
                    {column.points.map((point, pi) => (
                      <li
                        key={point}
                        className={`flex items-center gap-3 border-t py-3.5 first:border-t-0 first:pt-0 ${column.rowBorder}`}
                      >
                        <span
                          className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ring-2 ring-white/80 ${column.checkStyles[pi]}`}
                        >
                          <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.5 10.2 2.8 2.8 6.2-6.2" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium leading-snug text-slate-800 sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden border-t border-slate-100 bg-white py-12 lg:py-20"
        aria-labelledby="ewa-impact-heading"
      >
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center lg:max-w-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-gradient-to-r from-blue-50/95 via-indigo-50/80 to-violet-50/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800 shadow-sm ring-1 ring-blue-500/10">
              Results
            </span>
            <h2 id="ewa-impact-heading" className="mt-5 text-gray-900">
              Impact Across the{" "}
              <span className="font-semibold text-[color:var(--inops-blue)]">
                Organization
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              The ROI of financial wellness is visible from the factory floor to the boardroom.
            </p>
          </motion.div>

          <div className="relative mt-14">
            <div
              className="pointer-events-none absolute left-[5%] right-[5%] top-[2.25rem] hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent xl:block"
              aria-hidden
            />
            <motion.ul
              className="relative grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6"
              variants={impactMetricsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {ewaImpactMetrics.map((item, idx) => (
                <motion.li key={item.label} variants={impactMetricsCard} className="relative">
                  <article
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 sm:p-7 ${item.cardSurface}`}
                    aria-label={`${idx + 1} of ${ewaImpactMetrics.length}: ${item.label}`}
                  >
                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${item.orb}`}
                      aria-hidden
                    />
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 z-[2] h-1.5 rounded-t-2xl bg-gradient-to-r shadow-sm ${item.topBar}`}
                      aria-hidden
                    />

                    <span
                      className={`pointer-events-none absolute -right-0.5 top-2 z-[3] bg-gradient-to-r bg-clip-text font-mono text-[2.85rem] font-black leading-none tracking-tighter text-transparent opacity-[0.7] sm:right-1 sm:top-3 sm:text-[3.25rem] sm:opacity-[0.76] ${item.topBar}`}
                      aria-hidden
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <span
                        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-md transition-transform duration-300 group-hover:scale-[1.05] ${item.iconBg}`}
                      >
                        {item.icon}
                      </span>
                    </div>

                    <p
                      className={`relative z-10 mt-6 bg-gradient-to-br bg-clip-text font-bold tabular-nums tracking-tight text-transparent ${item.valueGradient} ${item.value === "Scale" ? "text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-none" : "text-4xl sm:text-5xl lg:text-[3.15rem] lg:leading-none"}`}
                    >
                      {item.value}
                    </p>

                    <h3 className="relative z-10 mt-2 font-semibold tracking-tight text-slate-900">{item.label}</h3>
                    <p className="relative z-10 mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.description}
                    </p>
                  </article>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="ewa-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            {/* <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-blue-800">
              EWA FAQ
            </span> */}
            <h2 id="ewa-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Answers to common questions about Salary++ earned wage access — including Indian regulatory context, PF/ESI interaction, payroll reconciliation, and contract-worker eligibility.
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
              {ewaFaqItems.map((item, index) => (
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
        headingId="ewa-final-cta-heading"
        heading="Enable Financial Wellness for Your Workforce"
        description="Transform how your workforce accesses and manages earnings. Start your pilot program in less than 7 days."
        primaryLabel="Request Demo"
        secondaryLabel="Talk to Sales"
      />
    </div>
  );
}
