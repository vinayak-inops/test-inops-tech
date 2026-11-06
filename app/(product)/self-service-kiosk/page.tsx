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
import { inopsUi } from "@/app/lib/inopsUi";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.08, margin: "0px 0px -12% 0px" } as const;

/* ─── Accent system ─── */
type FeatureAccent = "amber" | "violet" | "emerald" | "indigo" | "fuchsia" | "cyan";

const accentVisual: Record<
  FeatureAccent,
  { card: string; topBar: string; orb: string; iconShell: string }
> = {
  amber: {
    card: "border-amber-200/45 bg-gradient-to-br from-amber-50/95 via-white to-orange-50/35 shadow-[0_22px_56px_-32px_rgba(245,158,11,0.45)] ring-1 ring-amber-400/15 hover:ring-amber-400/30 hover:shadow-[0_28px_64px_-28px_rgba(245,158,11,0.4)]",
    topBar: "from-amber-400 via-orange-500 to-rose-500",
    orb: "bg-amber-400/25",
    iconShell: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-600/35 ring-2 ring-white/25",
  },
  violet: {
    card: "border-violet-200/45 bg-gradient-to-br from-violet-50/95 via-white to-fuchsia-50/30 shadow-[0_22px_56px_-32px_rgba(139,92,246,0.38)] ring-1 ring-violet-400/15 hover:ring-violet-400/30",
    topBar: "from-violet-400 via-fuchsia-500 to-pink-500",
    orb: "bg-violet-400/22",
    iconShell: "bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-600/35 ring-2 ring-white/25",
  },
  emerald: {
    card: "border-emerald-200/45 bg-gradient-to-br from-emerald-50/95 via-white to-teal-50/35 shadow-[0_22px_56px_-32px_rgba(16,185,129,0.38)] ring-1 ring-emerald-400/15 hover:ring-emerald-400/30",
    topBar: "from-emerald-400 via-teal-500 to-cyan-500",
    orb: "bg-emerald-400/22",
    iconShell: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-600/35 ring-2 ring-white/25",
  },
  indigo: {
    card: "border-indigo-200/45 bg-gradient-to-br from-indigo-50/95 via-white to-sky-50/30 shadow-[0_22px_56px_-32px_rgba(99,102,241,0.38)] ring-1 ring-indigo-400/15 hover:ring-indigo-400/30",
    topBar: "from-indigo-400 via-blue-500 to-sky-500",
    orb: "bg-indigo-400/22",
    iconShell: "bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-600/35 ring-2 ring-white/25",
  },
  fuchsia: {
    card: "border-fuchsia-200/45 bg-gradient-to-br from-fuchsia-50/95 via-white to-rose-50/30 shadow-[0_22px_56px_-32px_rgba(217,70,239,0.35)] ring-1 ring-fuchsia-400/15 hover:ring-fuchsia-400/30",
    topBar: "from-fuchsia-400 via-rose-500 to-orange-400",
    orb: "bg-fuchsia-400/20",
    iconShell: "bg-gradient-to-br from-fuchsia-500 to-rose-600 text-white shadow-lg shadow-fuchsia-600/35 ring-2 ring-white/25",
  },
  cyan: {
    card: "border-cyan-200/45 bg-gradient-to-br from-cyan-50/95 via-white to-sky-50/40 shadow-[0_22px_56px_-32px_rgba(6,182,212,0.38)] ring-1 ring-cyan-400/15 hover:ring-cyan-400/30",
    topBar: "from-cyan-400 via-sky-500 to-blue-600",
    orb: "bg-cyan-400/22",
    iconShell: "bg-gradient-to-br from-cyan-500 to-sky-600 text-white shadow-lg shadow-cyan-600/35 ring-2 ring-white/25",
  },
};

/* ─── What workers can do ─── */
const workerActions: { title: string; detail: string; icon: "calendar" | "doc" | "leave" | "flag" | "claim" | "user" | "wallet" | "badge"; accent: FeatureAccent; link?: string }[] = [
  { title: "Check attendance & shift history", detail: "Days worked, hours, overtime, absences, and the reason recorded against each — without asking HR.", icon: "calendar", accent: "cyan" },
  { title: "Download payslips", detail: "Current and historical payslips, printed or saved, without asking HR or waiting for distribution.", icon: "doc", accent: "emerald" },
  { title: "Apply for leave", detail: "Balance visible before applying, status visible after — no separate query to find out if a request was approved.", icon: "leave", accent: "indigo" },
  { title: "Raise attendance queries", detail: "A missed punch flagged and routed to the supervisor with an audit trail — instead of an argument at month-end.", icon: "flag", accent: "amber" },
  { title: "Submit claims", detail: "Reimbursements with document capture, routed through the approval chain to payroll settlement.", icon: "claim", accent: "violet" },
  { title: "View documents", detail: "Induction status, medical validity, gate pass, certification expiry — own records, on demand.", icon: "badge", accent: "fuchsia" },
  { title: "Update personal details", detail: "Bank, address, contact — with approval workflow so changes are verified before they reach payroll.", icon: "user", accent: "cyan" },
  { title: "Access earned wages", detail: "Where earned wage access is enabled, withdraw wages already earned before payday.", icon: "wallet", accent: "emerald", link: "/earned-wage-access" },
];

type WorkerIcon = (typeof workerActions)[number]["icon"];

function WorkerGlyph({ name, accent }: { name: WorkerIcon; accent: FeatureAccent }) {
  const shell = `inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${accentVisual[accent].iconShell}`;
  const c = "h-5 w-5";
  return (
    <span className={shell} aria-hidden>
      {name === "calendar" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>}
      {name === "doc" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>}
      {name === "leave" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>}
      {name === "flag" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>}
      {name === "claim" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>}
      {name === "badge" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>}
      {name === "user" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>}
      {name === "wallet" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><circle cx="16" cy="12" r="2" /></svg>}
    </span>
  );
}

/* ─── Why it works section cards ─── */
const whyCards: { title: string; detail: string; icon: "fingerprint" | "globe" | "zap" | "box" | "shield"; accent: FeatureAccent }[] = [
  { title: "Biometric identification, not passwords", detail: "A worker touches the reader or looks at the camera. No employee ID to remember, no password to reset, no shared credentials.", icon: "fingerprint", accent: "indigo" },
  { title: "Multilingual", detail: "Interface in the languages your workforce actually speaks — not just English and Hindi.", icon: "globe", accent: "emerald" },
  { title: "Designed for low digital literacy", detail: "Large targets, icons before text, short flows. A worker should be able to get a payslip in under thirty seconds without being shown how.", icon: "zap", accent: "amber" },
  { title: "Rugged placement", detail: "Wall-mounted or floor-standing units for gate, canteen or shop-floor locations, specified for the environment — weatherproof where exposed.", icon: "box", accent: "cyan" },
  { title: "Works for contract workers too", detail: "Contract workers see their own attendance and wage records against the correct contractor — through the same contract labour management engine — removing a persistent source of contractor payroll disputes.", icon: "shield", accent: "violet" },
];

type WhyIcon = (typeof whyCards)[number]["icon"];

function WhyGlyph({ name, accent }: { name: WhyIcon; accent: FeatureAccent }) {
  const shell = `inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accentVisual[accent].iconShell}`;
  const c = "h-6 w-6";
  return (
    <span className={shell} aria-hidden>
      {name === "fingerprint" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 11c0 3-1 5-3 7M12 8c2 0 3 2 3 5v2M8 14c0 2 1 4 2 5M16 14v2c0-2-1-3-2-4M9 4c2-1 4-1 6 0" /></svg>}
      {name === "globe" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 2c-2.8 3.4-4.3 7-4.3 10s1.5 6.6 4.3 10M12 2c2.8 3.4 4.3 7 4.3 10s-1.5 6.6-4.3 10" /></svg>}
      {name === "zap" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>}
      {name === "box" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" /></svg>}
      {name === "shield" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" /></svg>}
    </span>
  );
}

/* ─── Delivery channels table ─── */
const channels = [
  { name: "Kiosk", bestFor: "Shop-floor and contract workers without smartphones", notes: "Biometric identification, multilingual, no login to remember" },
  { name: "Mobile app", bestFor: "Supervisors, staff, workers with smartphones", notes: "Same data, plus GPS attendance for field roles", link: "/mobile-app-attendance" },
  { name: "Web portal", bestFor: "Office and admin staff", notes: "Full functionality on desktop" },
] as const;

/* ─── FAQ ─── */
// Answers marked (Confirm.) need factual verification before go-live.
const faqItems: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is employee self service?",
    a: "Employee self service lets workers view and manage their own workforce records — attendance, payslips, leave, claims and personal details — without going through HR. In office environments it's delivered as a web portal or app; in factories it also needs a shared physical access point, because most workers have no company laptop and many have no smartphone.",
  },
  {
    q: "What is a self-service kiosk and where is it placed?",
    a: "A self-service kiosk is a shared terminal — wall-mounted or floor-standing — where a worker identifies themselves biometrically and accesses their own records. Typical placements are the gate, the canteen, and near the shop-floor entrance, chosen so workers pass it during natural breaks rather than making a separate trip.",
  },
  {
    q: "How does a worker log in without a password?",
    a: "By face or fingerprint. The kiosk uses the same biometric identity already enrolled for attendance, so there is no separate credential to issue, remember or reset. This is the single largest reason kiosk self-service works on a factory floor where password-based portals do not.",
  },
  {
    q: "What can workers actually do at the kiosk?",
    a: "Check attendance and shift history, download payslips, apply for leave and see balances, raise attendance queries, submit claims, update personal details, and view document status such as induction validity, medical fitness and gate pass. Where enabled, they can also access earned wages before payday.",
  },
  {
    q: "Does it work for contract workers as well as permanent employees?",
    a: (
      <>
        Yes. Contract workers see their own attendance and wage records mapped to the correct contractor, drawn from the same{" "}
        <Link href="/contract-labour-management" className="font-medium text-blue-600 underline-offset-2 hover:underline">
          contract labour management
        </Link>
        {" "}engine that produces contractor invoices. That transparency removes a significant share of contractor payroll disputes, because the worker and the contractor are reading the same record.
      </>
    ),
  },
  {
    q: "Can workers view their own CLRA attendance and wage records at the kiosk?",
    a: (
      <>
        Yes. For contract workers, the kiosk surfaces the same records the{" "}
        <Link href="/contract-labour-management" className="font-medium text-blue-600 underline-offset-2 hover:underline">
          contract labour management system
        </Link>
        {" "}uses to generate CLRA statutory registers and contractor invoices — daily attendance log, shift-wise hours, approved overtime, and computed wages per pay period. A worker can see exactly what the contractor's invoice will be based on, which removes the most common source of end-of-month payroll disputes at the gate. They cannot edit the underlying record; they can raise a query against a specific day, which routes for supervisor review with both records retained.
      </>
    ),
  },
  {
    q: "What languages does it support?",
    a: "The interface is available in multiple Indian languages so workers use it in the language they read most comfortably.",
  },
  {
    q: "How many kiosks does a site need?",
    a: "Fewer than most people expect, because usage is spread across shifts rather than concentrated. One kiosk per major gate or canteen is a common starting point, with additions based on observed queuing. Sizing depends on headcount, shift pattern and how many workers also use the mobile app.",
  },
  {
    q: "Do workers need smartphones?",
    a: (
      <>
        No — that is the point of the kiosk. Workers with smartphones can use the{" "}
        <Link href="/mobile-app-attendance" className="font-medium text-blue-600 underline-offset-2 hover:underline">
          mobile app
        </Link>
        {" "}for the same functions; workers without one use the kiosk. Both read from the same record, so a workforce with mixed phone ownership gets consistent access.
      </>
    ),
  },
  {
    q: "Is worker data secure on a shared terminal?",
    a: "Sessions are tied to biometric identification and end automatically after a short timeout or on completion, so the next person at the kiosk cannot see the previous worker's data. Access is limited to that worker's own records. Data handling aligns with DPDP Act obligations.",
  },
  {
    q: "Can workers correct wrong attendance through the kiosk?",
    a: "They can raise a query against a specific day, which routes to their supervisor for review with the original record and the correction request both retained. The worker cannot edit their own attendance — the value is that discrepancies surface on the day rather than at month-end.",
  },
  {
    q: "How does this reduce HR workload?",
    a: "Payslip requests, leave-balance queries and attendance disputes make up the majority of walk-ins at a plant HR desk. All three are self-serviceable. HR shifts from answering the same questions repeatedly to handling the exceptions that genuinely need a decision.",
  },
  {
    q: "Does it integrate with our existing HR or payroll system?",
    a: "The kiosk reads from the InOps attendance and workforce record. Where an existing HRMS holds payroll, integration determines what the kiosk can display.",
  },
  {
    q: "What does deployment involve?",
    a: "Kiosk placement and mounting, network connection, linking to existing biometric enrolment, and configuring which functions are enabled per worker category. Because workers are usually already enrolled for attendance, there is generally no new enrolment exercise.",
  },
];

export default function SelfServiceKioskPage() {
  return (
    <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">

      {/* ══════════════════════════════════════════
          HERO — split image/copy
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
                <Image
                  src="/kiosk/inops-1.avif"
                  alt="Self-service kiosk for factory workers — biometric attendance, payslips and leave on shop floor"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-12 lg:block lg:w-32 lg:from-white lg:via-white/90" aria-hidden />
              </div>
              <VideoLivePopups
                popups={[
                  { position: "top-left", label: "Live", className: "top-10 -left-10 sm:-top-10 sm:-left-10 lg:-top-10 lg:-left-10 xl:top-7 xl:-left-15", title: "Self-service active", accent: "emerald" },
                  { position: "bottom-right", className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-0 xl:-right-2", label: "Verified", title: "No login needed", subtitle: "Face or fingerprint access", variant: "icon", icon: "fingerprint", accent: "blue" },
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
                    Employee Self-Service
                  </span>
                </motion.div>

                <motion.h1
                  className="home-display-heading inops-type-hero mt-5 text-slate-900 sm:mt-6"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
                >
                  Employee Self-Service Kiosk{" "}
                  <span className="font-semibold text-[color:var(--inops-blue)]">
                    for Factory Workers
                  </span>
                </motion.h1>

                <motion.p
                  className={`mt-5 max-w-xl ${inopsUi.sectionSubtitle}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.14 }}
                >
                  Attendance, payslips, leave and claims — through a shop-floor kiosk, mobile app or web portal. For factory workforces where most people have no company laptop and many have no smartphone, the kiosk is what makes self-service actually reach the floor instead of stopping at the office.
                </motion.p>

                <motion.div
                  className="mt-8 flex flex-wrap gap-3 sm:mt-9"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/30 transition hover:bg-blue-700 hover:-translate-y-0.5"
                  >
                    Get a Quote
                  </Link>
                  <Link
                    href="/hris"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-600 bg-white px-8 py-3.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                  >
                    See HRIS
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ══════════════════════════════════════════
          Why self-service fails on the shop floor
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-200/80 bg-white py-10 lg:py-14" aria-labelledby="why-fails-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex rounded-full border border-blue-200/90 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 shadow-sm ring-1 ring-blue-500/10">
                The problem
              </span>
              <h2 id="why-fails-heading" className="mt-4 text-slate-900">
                Why self-service fails on the shop floor
              </h2>
              <div className="mt-2 h-1 w-14 rounded-full bg-blue-600" aria-hidden />
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Most HR self-service is designed for desk workers. It assumes a laptop, a company email address, and a worker comfortable navigating a portal in English.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                On a factory floor, none of that holds. The result is predictable: HR becomes the interface. Every payslip request, every leave application, every &ldquo;why was I marked absent on the 14th&rdquo; arrives as a person at the HR window — usually during the shift they should be working. At a plant with 2,000 workers this is a full-time role that nobody planned for.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                A kiosk closes that gap — a shared, always-available terminal at the gate or canteen where a worker identifies themselves biometrically and gets their own information without a phone, a login, or a queue at HR.
              </p>
            </motion.div>

            {/* Stats panel */}
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-[0_30px_80px_-44px_rgba(15,23,42,0.3)] ring-1 ring-slate-900/5"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/kiosk/inops-2.avif"
                  alt="Shop floor workers at manufacturing plant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" aria-hidden />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-flex rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm ring-1 ring-white/15">
                    Most Indian plants — most HR queries come from the shop floor
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100">
                {[
                  { label: "Top HR query", stat: "Payslip" },
                  { label: "2nd most common", stat: "Leave balance" },
                  { label: "3rd", stat: "Attendance dispute" },
                ].map((item) => (
                  <div key={item.label} className="px-4 py-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{item.label}</p>
                    <p className="mt-1 text-sm font-bold text-slate-900">{item.stat}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          What workers can do — 8-item grid
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-200/80 bg-gradient-to-b from-slate-50/60 via-white to-white py-10 lg:py-14" aria-labelledby="worker-actions-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex rounded-full border border-blue-200/90 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800 shadow-sm ring-1 ring-blue-500/10">
              Self-service functions
            </span>
            <h2 id="worker-actions-heading" className="mt-4 text-slate-900">What workers can do</h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed text-slate-600 sm:text-base">
              All functions available on kiosk, mobile and web — same data, same record, whichever channel the worker uses.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
            {workerActions.map((item, idx) => {
              const v = accentVisual[item.accent];
              return (
                <motion.div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 ${v.card}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.04 }}
                >
                  <div className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${v.topBar}`} aria-hidden />
                  <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl ${v.orb}`} aria-hidden />
                  <div className="relative flex gap-3">
                    <WorkerGlyph name={item.icon} accent={item.accent} />
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-sm font-semibold leading-snug text-slate-900">{item.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                        {item.detail}
                        {item.link && (
                          <>{" "}<Link href={item.link} className="font-medium text-blue-600 underline-offset-2 hover:underline">Learn more →</Link></>
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          Three delivery channels
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-200/80 bg-white py-10 lg:py-14" aria-labelledby="channels-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex rounded-full border border-blue-200/90 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 shadow-sm ring-1 ring-blue-500/10">
                Delivery
              </span>
              <h2 id="channels-heading" className="mt-4 text-slate-900">Three ways to deliver self-service</h2>
              <div className="mt-2 h-1 w-14 rounded-full bg-blue-600" aria-hidden />
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                All three channels read from the same record — a worker who uses the kiosk on Monday and the app on Friday sees identical information.
              </p>

              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[400px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="py-3 pr-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Channel</th>
                      <th className="py-3 pr-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Best for</th>
                      <th className="py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {channels.map((ch) => (
                      <tr key={ch.name} className="border-b border-slate-100 hover:bg-slate-50/60">
                        <td className="py-3.5 pr-4 font-semibold text-slate-900 align-top">
                          {"link" in ch ? (
                            <Link href={ch.link} className="text-blue-600 hover:underline">{ch.name}</Link>
                          ) : ch.name}
                        </td>
                        <td className="py-3.5 pr-4 text-slate-600 align-top">{ch.bestFor}</td>
                        <td className="py-3.5 text-slate-500 align-top text-xs">{ch.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-[0_24px_64px_-36px_rgba(15,23,42,0.28)]"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/kiosk/inops-3.avif"
                  alt="Employee accessing self-service terminal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          Built for the Indian shop floor
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-200/80 bg-gradient-to-b from-slate-50/60 via-white to-white py-10 lg:py-14" aria-labelledby="built-for-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 id="built-for-heading" className="text-slate-900">Built for the Indian shop floor</h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {whyCards.map((item, idx) => {
              const v = accentVisual[item.accent];
              return (
                <motion.div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 ${v.card}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.06 }}
                >
                  <div className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${v.topBar}`} aria-hidden />
                  <div className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl ${v.orb}`} aria-hidden />
                  <div className="relative flex gap-4">
                    <WhyGlyph name={item.icon} accent={item.accent} />
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-base font-semibold leading-snug text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          What changes for HR — image + bullets
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-200/80 bg-white py-10 lg:py-14" aria-labelledby="hr-impact-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-[0_24px_64px_-36px_rgba(15,23,42,0.28)] order-2 lg:order-1"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/kiosk/Digital-Signage-inops.jpg"
                  alt="HR team at industrial plant — workload reduction through self-service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" aria-hidden />
                <div className="absolute bottom-5 left-5">
                  <span className="inline-flex rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm ring-1 ring-white/15">
                    Fewer walk-ins. More decisions.
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
            >
              <span className="inline-flex rounded-full border border-blue-200/90 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 shadow-sm ring-1 ring-blue-500/10">
                HR impact
              </span>
              <h2 id="hr-impact-heading" className="mt-4 text-slate-900">What changes for HR</h2>
              <div className="mt-2 h-1 w-14 rounded-full bg-blue-600" aria-hidden />
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                The measurable effect is on interruptions. Payslip requests, leave-balance questions and attendance disputes are the bulk of HR&apos;s daily foot traffic in a plant — and all three are self-serviceable.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                The second effect is on disputes. When a worker can see their own attendance daily, an incorrect record is raised on the day it happens rather than reconstructed at month-end from memory. Both sides end up arguing from the same data.
              </p>
              <ul className="mt-8 list-none space-y-4 p-0">
                {[
                  { label: "Payslip queries → self-service", detail: "Workers download their own payslips rather than requesting them from HR." },
                  { label: "Leave applications → self-service", detail: "Balance visible, status tracked — no email chains and no walk-ins." },
                  { label: "Attendance disputes → same-day", detail: "Incorrect records surface on the day, with the audit trail already attached." },
                ].map((item) => (
                  <li key={item.label} className="flex gap-4 py-1">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600" aria-hidden>
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                      <p className="mt-0.5 text-sm text-slate-600">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          Five kiosk deployment types
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-200/80 bg-slate-50 py-10 lg:py-14" aria-labelledby="kiosk-types-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex rounded-full border border-blue-200/90 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 shadow-sm ring-1 ring-blue-500/10">
              Deployment types
            </span>
            <h2 id="kiosk-types-heading" className="mt-4 text-slate-900">Five types of kiosk</h2>
            <div className="mt-2 mx-auto h-1 w-14 rounded-full bg-blue-600" aria-hidden />
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The same hardware and biometric identity layer supports different kiosk roles depending on where it sits in the plant and what the worker or contractor does at it.
            </p>
          </motion.div>

          <div className="mt-10 space-y-4">
            {[
              {
                num: "1",
                title: "Employee self-service kiosk",
                body: "Workers without a company laptop or smartphone check attendance history, download payslips, apply for leave, raise attendance queries, submit claims, and view document status — biometric login, no password. The primary use case for shop-floor permanent staff and contract workers.",
                link: { label: "Employee self-service", href: "/hris" },
                accent: "blue",
              },
              {
                num: "2",
                title: "Visitor management kiosk",
                body: "Self check-in at the gate: visitor details, host notification, watchlist screening, photo capture, and a printed or digital pass carrying zone permissions. The pass works on the same turnstile lanes as the workforce — no separate visitor lane required.",
                link: { label: "Visitor management system", href: "/canteen-and-visitor" },
                accent: "violet",
              },
              {
                num: "3",
                title: "Canteen kiosk",
                body: "Meal entitlement validated against the worker's shift and contractor at the point of issue. Subsidy calculated at the counter. Meal counts reconcile automatically against caterer invoices — without a counter operator checking a list.",
                link: { label: "Canteen management", href: "/canteen-and-visitor" },
                accent: "emerald",
              },
              {
                num: "4",
                title: "Safety induction kiosk",
                body: "Induction content delivered and assessed at the kiosk, with completion written to the worker's compliance record. Gate access rules can block entry until induction is current — making induction a control rather than a document.",
                link: { label: "Gate compliance", href: "/contract-labour-management/iddion-regx-modules/gate-compliance" },
                accent: "amber",
              },
              {
                num: "5",
                title: "Contractor onboarding kiosk",
                body: "Bulk intake at the gate during shutdowns and ramps: document capture, biometric enrolment, verification status check, and work-order assignment. Handles high-volume intake days without a separate onboarding room or manual queue.",
                link: { label: "Contractor onboarding", href: "/contract-labour-management/iddion-regx-modules/onboarding-offboarding" },
                accent: "fuchsia",
              },
            ].map((item, i) => {
              const colors: Record<string, { bar: string; num: string; badge: string; link: string }> = {
                blue:    { bar: "bg-blue-500",    num: "bg-blue-50 text-blue-700 ring-blue-200",    badge: "border-blue-200/60 bg-blue-50/80",    link: "text-blue-700 hover:text-blue-800" },
                violet:  { bar: "bg-violet-500",  num: "bg-violet-50 text-violet-700 ring-violet-200",  badge: "border-violet-200/60 bg-violet-50/80",  link: "text-violet-700 hover:text-violet-800" },
                emerald: { bar: "bg-emerald-500", num: "bg-emerald-50 text-emerald-700 ring-emerald-200", badge: "border-emerald-200/60 bg-emerald-50/80", link: "text-emerald-700 hover:text-emerald-800" },
                amber:   { bar: "bg-amber-500",   num: "bg-amber-50 text-amber-700 ring-amber-200",   badge: "border-amber-200/60 bg-amber-50/80",   link: "text-amber-700 hover:text-amber-800" },
                fuchsia: { bar: "bg-fuchsia-500", num: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200", badge: "border-fuchsia-200/60 bg-fuchsia-50/80", link: "text-fuchsia-700 hover:text-fuchsia-800" },
              };
              const c = colors[item.accent];
              return (
                <motion.div
                  key={item.num}
                  className={`relative overflow-hidden rounded-2xl border bg-white shadow-sm ring-1 ring-slate-900/[0.04] transition-shadow duration-300 hover:shadow-md ${c.badge}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase, delay: i * 0.05 }}
                >
                  <div className={`absolute left-0 top-0 h-full w-1 ${c.bar}`} aria-hidden />
                  <div className="flex items-start gap-5 px-6 py-5 pl-8 sm:px-8 sm:pl-10">
                    <span className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm font-bold ring-1 ${c.num}`}>
                      {item.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.body}</p>
                      <Link
                        href={item.link.href}
                        className={`mt-3 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 ${c.link}`}
                      >
                        {item.link.label}
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          Why the application matters more than the enclosure
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-200/80 bg-white py-10 lg:py-14" aria-labelledby="kiosk-application-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 id="kiosk-application-heading" className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Why the application matters more than the enclosure
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-blue-600" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-slate-600">
             What separates a useful kiosk from an expensive noticeboard is whether it is connected to anything.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              A visitor kiosk that captures details but cannot check a blacklist, issue a zone-limited pass or open a turnstile has moved the paper register onto a screen. A canteen kiosk that records meals but cannot validate entitlement against the shift a worker actually attended has automated the wrong half of the problem.
            </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-slate-800">
              InOps kiosks run on the same attendance, identity and compliance engine as the gates — so what happens at the screen has consequences at the barrier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          Related pages
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-200/80 bg-gradient-to-b from-slate-50/60 via-white to-white py-10 lg:py-12" aria-labelledby="kiosk-related-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.4, ease: smoothEase }}
          >
            <h2 id="kiosk-related-heading" className="text-xl font-bold text-slate-900">
              Related Solutions: Visitor Management, Canteen &amp; Contractor Onboarding
            </h2>
            <p className="mt-2 text-sm text-slate-500">The kiosk applications most often deployed alongside employee self-service at factory sites.</p>
          </motion.div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Visitor management system", href: "/visitor-management", desc: "Self check-in, watchlist screening, zone-limited passes, and host notification at the gate kiosk.", img: "/kiosk/Canteen-and-Visitor-Management.jpg" },
              { label: "Canteen management", href: "/canteen-and-visitor", desc: "Kiosk-based meal issuance with entitlement validated against the shift the worker actually attended.", img: "/kiosk/Canteen-and-Visitor-Management.jpg" },
              { label: "Contractor onboarding", href: "/contract-labour-management/iddion-regx-modules/onboarding-offboarding", desc: "Bulk intake at the gate: document capture, biometric enrolment, and work-order assignment.", img: "/kiosk/Biometric-Devices.avif" },
              { label: "Contract labour management", href: "/contract-labour-management", desc: "The CLMS engine behind contractor attendance, CLRA registers, and invoice reconciliation.", img: "/kiosk/HR-Software-Built-for-India-Manufacturing.avif" },
            ].map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.38, ease: smoothEase, delay: i * 0.05 }}
              >
                <Link href={link.href} className="group block overflow-hidden rounded-xl border border-slate-200/80 transition hover:border-blue-300 hover:shadow-md">
                  <div className="relative aspect-[16/7] overflow-hidden">
                    <Image src={link.img} alt={link.label} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="(max-width: 640px) 100vw, 25vw" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-blue-700">{link.label} →</p>
                    <p className="mt-1 text-xs text-slate-500">{link.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ — details/summary accordion
      ══════════════════════════════════════════ */}
      <section aria-labelledby="kiosk-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 id="kiosk-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Common questions about employee self-service, kiosk placement, biometric access, and HR impact.
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
                <details key={item.q} className="group bg-white/70 px-5 py-5 open:bg-white sm:px-7 sm:py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:hidden">
                    <span className="flex min-w-0 gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold tabular-nums text-blue-700 ring-1 ring-blue-100">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-semibold leading-snug text-slate-950 sm:text-lg">{item.q}</span>
                    </span>
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg leading-none text-slate-600 transition group-open:rotate-45 group-open:border-blue-200 group-open:text-blue-700" aria-hidden>+</span>
                  </summary>
                  <p className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:text-base">{item.a}</p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SolutionPageClosingCta
        headingId="kiosk-final-cta-heading"
        heading={<>Self-service that <span className="font-semibold text-sky-100">reaches the shop floor</span></>}
        description="Kiosk, mobile and web — same data, every worker. Biometric identification, no passwords, no HR queue."
        primaryLabel="Request a demo"
        secondaryLabel="Talk to an expert"
      />
    </div>
  );
}
