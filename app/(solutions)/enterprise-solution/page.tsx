"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import SolutionLandingHero from "@/app/components/SolutionLandingHero";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";
import { inopsUi } from "@/app/lib/inopsUi";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };
const hoverLift = { y: -6, scale: 1.01 };

const modulesGridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
} as const;

const modulesCard = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.46, ease: smoothEase },
  },
} as const;

const platformFlowContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
} as const;

const platformFlowItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, ease: smoothEase },
  },
} as const;

const nexusUnifiedFlowSteps = [
  {
    stage: "Ingestion",
    title: "Assets & Inventory",
    frame: "from-sky-300 via-blue-500 to-indigo-600 shadow-[0_12px_36px_-12px_rgba(59,130,246,0.45)]",
    stageGradient: "from-blue-600 via-indigo-600 to-violet-700",
    iconGlow:
      "from-sky-400 via-blue-600 to-indigo-700 shadow-[0_8px_28px_-6px_rgba(37,99,235,0.55)] ring-2 ring-white/70",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <ellipse cx="12" cy="6" rx="5" ry="2.5" />
        <path d="M7 6v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V6" />
        <path d="M7 10v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" />
      </svg>
    ),
  },
  {
    stage: "Sync",
    title: "Real-Time Tracking",
    frame: "from-cyan-300 via-sky-500 to-blue-600 shadow-[0_12px_36px_-12px_rgba(6,182,212,0.42)]",
    stageGradient: "from-cyan-600 via-sky-600 to-blue-700",
    iconGlow:
      "from-cyan-400 via-sky-500 to-blue-700 shadow-[0_8px_28px_-6px_rgba(14,165,233,0.5)] ring-2 ring-white/70",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16" />
        <path d="M12 4a12 12 0 0 1 0 16" />
        <path d="M12 4a12 12 0 0 0 0 16" />
      </svg>
    ),
  },
  {
    stage: "Compute",
    title: "Optimization Engine",
    frame: "from-fuchsia-400 via-violet-500 to-indigo-600 shadow-[0_12px_36px_-12px_rgba(139,92,246,0.45)]",
    stageGradient: "from-violet-600 via-fuchsia-600 to-indigo-700",
    iconGlow:
      "from-fuchsia-500 via-violet-600 to-indigo-700 shadow-[0_8px_28px_-6px_rgba(124,58,237,0.5)] ring-2 ring-white/70",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path d="m13 2-7 10h5l-1 10 8-12h-5l0-8Z" />
      </svg>
    ),
  },
  {
    stage: "Control",
    title: "Unified Dashboard",
    frame: "from-indigo-300 via-blue-500 to-cyan-500 shadow-[0_12px_36px_-12px_rgba(99,102,241,0.42)]",
    stageGradient: "from-indigo-600 via-blue-600 to-cyan-700",
    iconGlow:
      "from-indigo-500 via-blue-600 to-cyan-600 shadow-[0_8px_28px_-6px_rgba(79,70,229,0.48)] ring-2 ring-white/70",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <rect x="4" y="4" width="6" height="6" rx="1.5" />
        <rect x="14" y="4" width="6" height="6" rx="1.5" />
        <rect x="4" y="14" width="6" height="6" rx="1.5" />
        <rect x="14" y="14" width="6" height="6" rx="1.5" />
      </svg>
    ),
  },
  {
    stage: "Insight",
    title: "Actionable Reports",
    frame: "from-emerald-300 via-teal-500 to-cyan-500 shadow-[0_12px_36px_-12px_rgba(16,185,129,0.45)]",
    stageGradient: "from-emerald-600 via-teal-600 to-cyan-700",
    iconGlow:
      "from-emerald-400 via-teal-500 to-cyan-600 shadow-[0_8px_28px_-6px_rgba(20,184,166,0.5)] ring-2 ring-white/70",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path d="M4 19h16" />
        <path d="M7 16V9" />
        <path d="M12 16V5" />
        <path d="M17 16v-7" />
      </svg>
    ),
  },
] as const;

const nexusFlowConnectorChevronClass = ["text-sky-500", "text-violet-500", "text-indigo-500", "text-teal-500"] as const;

export default function EnterpriseSolutionPage() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/enterprise-solution") return;

    const scrollToHashTarget = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(decodeURIComponent(id));
      if (!el) return;
      const run = () => el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.requestAnimationFrame(() => {
        run();
        window.setTimeout(run, 100);
      });
    };

    const id = window.location.hash.slice(1);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    if (id) {
      window.requestAnimationFrame(() => {
        scrollToHashTarget();
      });
    }

    window.addEventListener("hashchange", scrollToHashTarget);
    return () => window.removeEventListener("hashchange", scrollToHashTarget);
  }, [pathname]);

  const industryVisuals = {
    Manufacturing:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
    Logistics:
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200",
    Warehousing:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    "Enterprise Ops":
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  } as const;

  const coreModules = [
    {
      step: "01",
      tag: "Throughput",
      title: "Warehouse Management",
      description:
        "Optimize inventory, assets, and warehouse operations with real-time tracking, barcode automation, and analytics for improved efficiency.",
      href: "/warehouse-management",
      borderGradient: "from-violet-600 via-fuchsia-500 to-indigo-600",
      topBarGradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      iconWrap:
        "from-violet-600 via-indigo-600 to-blue-700 shadow-[0_10px_28px_-10px_rgba(109,40,217,0.45)] ring-1 ring-white/25",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
      ),
    },
    {
      step: "02",
      tag: "Capital & uptime",
      title: "Delivery Management",
      description:
        "Ensure faster deliveries through route optimization, fleet tracking, transport management, and digital proof of delivery.",
      href: "/delivery-management",
      borderGradient: "from-blue-600 via-indigo-500 to-violet-600",
      topBarGradient: "from-blue-500 via-indigo-500 to-sky-400",
      iconWrap:
        "from-blue-600 via-blue-500 to-indigo-600 shadow-[0_10px_28px_-10px_rgba(37,99,235,0.55)] ring-1 ring-white/25",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
          <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" />
          <path d="m12 3 7 4-7 4-7-4" />
          <path d="M12 11v10" />
        </svg>
      ),
    },
    {
      step: "03",
      tag: "Fleet & miles",
      title: "Order Management",
      description:
        "Streamline order processing, fulfillment, tracking, and returns with automated workflows and real-time visibility.",
      href: "/order-management",
      borderGradient: "from-cyan-500 via-teal-500 to-emerald-600",
      topBarGradient: "from-cyan-400 via-teal-500 to-emerald-500",
      iconWrap:
        "from-sky-500 via-cyan-500 to-teal-600 shadow-[0_10px_28px_-10px_rgba(14,165,233,0.45)] ring-1 ring-white/25",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
          <path d="M6 6h12" />
          <path d="M6 12h8" />
          <path d="M6 18h12" />
          <circle cx="10" cy="6" r="1.25" fill="currentColor" stroke="none" />
          <circle cx="14" cy="12" r="1.25" fill="currentColor" stroke="none" />
          <circle cx="10" cy="18" r="1.25" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    
  ] as const;

  return (
    <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
      <SolutionLandingHero
        badge={
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            InOps Enterprise Operations
          </span>
        }
        title={
          <>
            Enterprise Operations Platform{" "}
            <span className="text-blue-600">for Manufacturers</span>
          </>
        }
        subtitle="Warehouse management, delivery routing, and order fulfilment — unified across all your industrial sites, and connected to the same workforce-visibility layer as InOps CLMS and HRIS."
        videoSrc="/videos/Enterprise_Solutions_digitizing_202605062212.mp4"
        imageAlt="Warehouse and logistics operations ,  enterprise visibility"
        livePopups={[
          {
            position: "top-left",
            animateOnMount: true,
            className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:top-21 xl:left-130",
            label: "Live",
            title: "Operations connected",
            accent: "emerald",
          },
          {
            position: "bottom-right",
            className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-0 xl:-right-2",
            label: "Synced",
            title: "Asset & inventory feed",
            subtitle: "Across all sites",
            variant: "icon",
            icon: "chart",
            accent: "blue",
          },
        ]}
        primaryCta={{ label: "Book a Demo", href: "/contact" }}
        secondaryCta={{ label: "Explore Modules", href: "#core-modules-heading" }}
      />

      <section
        className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-slate-50/90 via-white to-blue-50/25 py-10 lg:py-16"
        aria-labelledby="core-modules-heading"
      >
        <div
          className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-400/15 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-400/12 blur-[90px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:56px_56px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center lg:max-w-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" aria-hidden />
              Three pillars
            </span>
            <h2 id="core-modules-heading" className="mt-6 text-slate-900">
              Core operational{" "}
              <span className="font-semibold text-[color:var(--inops-blue)]">
                modules
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Asset intelligence, fleet routing, and warehouse execution — three connected surfaces that
              share data so enterprise ops stay aligned from yard to shelf. All three modules feed into
              the same operational layer as{" "}
              <Link href="/contract-labour-management" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-200">InOps CLMS</Link>{" "}
              and{" "}
              <Link href="/hris" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-200">HRIS</Link>,
              so contractor headcount, labour costs, and physical throughput appear on one consolidated dashboard.
            </p>
          </motion.div>

          <motion.div
            className="relative mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 lg:gap-5"
            variants={modulesGridContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div
              className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent md:block"
              aria-hidden
            />

            {coreModules.map((module) => (
              <motion.div
                key={module.title}
                variants={modulesCard}
                whileHover={hoverLift}
                className={`rounded-2xl bg-gradient-to-br p-px shadow-[0_18px_44px_-28px_rgba(15,23,42,0.14)] ${module.borderGradient}`}
              >
                <article className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[0.95rem] border border-white/70 bg-white/95 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-sm sm:rounded-[1rem] sm:p-6">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 overflow-hidden rounded-t-[0.9rem] sm:rounded-t-[0.95rem]"
                    aria-hidden
                  >
                    <div className={`h-full w-full bg-gradient-to-r ${module.topBarGradient}`} />
                  </div>

                  <span
                    className={`pointer-events-none absolute -right-0.5 top-3 bg-gradient-to-r bg-clip-text font-mono text-[3.25rem] font-black leading-none tracking-tighter text-transparent opacity-[0.72] sm:right-1 sm:top-4 sm:text-[3.5rem] sm:opacity-[0.78] ${module.topBarGradient}`}
                    aria-hidden
                  >
                    {module.step}
                  </span>

                  <div className="relative flex flex-wrap items-center gap-2">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br text-white ${module.iconWrap}`}
                    >
                      {module.icon}
                    </div>
                    <span className="rounded-full border border-slate-200/90 bg-slate-50/90 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      {module.tag}
                    </span>
                  </div>

                  <h3 className="relative mt-4 text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
                    <Link href={module.href} className="hover:text-[color:var(--inops-blue)] transition-colors duration-200 after:absolute after:inset-0">
                      {module.title}
                    </Link>
                  </h3>
                  <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {module.description}
                  </p>
                </article>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="asset-management"
        className="scroll-mt-24 border-t border-slate-100 bg-white py-10 lg:py-12 lg:scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              Module 01
            </span>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <Link href="/warehouse-management" className="hover:text-[color:var(--inops-blue)] transition-colors duration-200">
                Warehouse Management
              </Link>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Optimize warehouse operations with real-time inventory control, asset tracking, barcode/QR automation, and analytics to improve accuracy and efficiency.
            </p>
            <Link
              href="/warehouse-management"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Learn more about Warehouse Management
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        id="delivery-management"
        className="scroll-mt-24 border-t border-slate-100 bg-white py-10 lg:py-12 lg:scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              Module 02
            </span>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <Link href="/delivery-management" className="hover:text-[color:var(--inops-blue)] transition-colors duration-200">
                Delivery Management
              </Link>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Streamline delivery operations with intelligent route optimization, transport management, real-time fleet tracking, and proof of delivery for reliable results.
            </p>
            <Link
              href="/delivery-management"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Learn more about Delivery Management
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        id="warehouse-management"
        className="scroll-mt-24 border-t border-slate-100 bg-white py-10 lg:py-12 lg:scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              Module 03
            </span>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <Link href="/order-management" className="hover:text-[color:var(--inops-blue)] transition-colors duration-200">
                Order Management
              </Link>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Manage the complete order lifecycle with efficient order processing, fulfillment management, real-time order tracking, and seamless returns handling.
            </p>
            <Link
              href="/order-management"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Learn more about Order Management
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-10 lg:py-14"
        aria-labelledby="unified-platform-flow-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50/95 via-white to-sky-50/40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-blue-400/20 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-violet-400/18 blur-[110px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[min(90%,48rem)] -translate-x-1/2 rounded-full bg-emerald-300/15 blur-[90px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center lg:max-w-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-gradient-to-r from-white via-sky-50/90 to-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800 shadow-sm shadow-sky-500/10 ring-1 ring-sky-200/60">
              <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" aria-hidden />
              End-to-end flow
            </span>
            <h2 id="unified-platform-flow-heading" className="mt-5 text-gray-900">
              Unified Platform{" "}
              <span className="bg-gradient-to-r from-[color:var(--inops-blue)] via-sky-500 to-emerald-600 bg-clip-text font-semibold text-transparent">
                Flow
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-xl">
              InOps connects every facet of your physical operations into a single, cohesive
              digital nervous system.
            </p>
          </motion.div>

          <motion.div
            className="relative mt-14 hidden md:block"
            variants={platformFlowContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div
              className="pointer-events-none absolute left-[3%] right-[3%] top-[2.125rem] h-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 via-violet-500 via-indigo-500 via-amber-400 to-emerald-500 opacity-[0.85] shadow-[0_2px_16px_-2px_rgba(59,130,246,0.35)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-[3%] right-[3%] top-[2.35rem] h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
              aria-hidden
            />

            <div className="relative flex items-start justify-center gap-0 lg:gap-1">
              {nexusUnifiedFlowSteps.map((step, index) => (
                <Fragment key={step.title}>
                  <motion.div
                    variants={platformFlowItem}
                    className="group relative z-[1] flex min-w-0 flex-1 flex-col items-center px-1 text-center sm:px-2"
                  >
                    <div
                      className={`mx-auto rounded-2xl bg-gradient-to-br p-[3px] transition-[transform,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:shadow-lg ${step.frame}`}
                    >
                      <div
                        className={`flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-[0.85rem] bg-gradient-to-br text-white ${step.iconGlow}`}
                      >
                        {step.icon}
                      </div>
                    </div>
                    <p
                      className={`mt-5 bg-gradient-to-r bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent sm:text-xs ${step.stageGradient}`}
                    >
                      {step.stage}
                    </p>
                    <p className="mt-1.5 text-xs font-semibold leading-snug text-slate-900 sm:text-sm lg:text-base">
                      {step.title}
                    </p>
                  </motion.div>

                  {index < nexusUnifiedFlowSteps.length - 1 ? (
                    <motion.div
                      variants={platformFlowItem}
                      className={`hidden shrink-0 self-start pt-[2.75rem] lg:flex lg:w-6 lg:items-center lg:justify-center ${nexusFlowConnectorChevronClass[index] ?? "text-slate-400"}`}
                      aria-hidden
                    >
                      <svg className="h-5 w-5 drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
                      </svg>
                    </motion.div>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 md:hidden"
            variants={platformFlowContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {nexusUnifiedFlowSteps.map((step) => (
              <motion.article
                key={step.title}
                variants={platformFlowItem}
                className="relative flex items-start gap-4 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_8px_28px_-22px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.02] transition-shadow duration-300 hover:shadow-[0_14px_36px_-24px_rgba(59,130,246,0.18)]"
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r opacity-95 ${step.frame}`}
                  aria-hidden
                />
                <div
                  className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white ${step.iconGlow}`}
                >
                  {step.icon}
                </div>
                <div className="relative min-w-0 pt-0.5">
                  <p
                    className={`inline-block bg-gradient-to-r bg-clip-text text-xs font-bold uppercase tracking-[0.18em] text-transparent ${step.stageGradient}`}
                  >
                    {step.stage}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{step.title}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 flex justify-center sm:mt-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45, ease: smoothEase, delay: 0.08 }}
          >
            <span className="inline-flex max-w-xl rounded-full border border-indigo-200/80 bg-gradient-to-r from-sky-50 via-indigo-50/90 to-emerald-50/80 px-6 py-2.5 text-center text-sm font-medium leading-snug text-slate-700 shadow-md shadow-indigo-500/10 ring-1 ring-sky-100/80">
              All operations connected through a single intelligent system
            </span>
          </motion.div>
        </div>
      </section>

      <section
        className="relative overflow-hidden border-b border-white/10 bg-slate-950 py-12 text-white lg:py-20"
        aria-labelledby="nexus-platform-capabilities-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-40%,rgba(59,130,246,0.45),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/2 h-[min(42rem,90vw)] w-[min(42rem,90vw)] -translate-y-1/2 rounded-full bg-indigo-600/25 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[80px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.09)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:items-start lg:gap-x-12">
            <motion.div
              className="self-start lg:max-w-xl lg:pt-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase }}
            >
              <div className="rounded-2xl  p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-md sm:p-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
                  </span>
                  Enterprise platform
                </span>
                <h2 id="nexus-platform-capabilities-heading" className="mt-6">
                  Platform capabilities for{" "}
                  <span className="font-semibold text-slate-300">
                    resilience at scale
                  </span>
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
                  Built for multi-site complexity, single pane of glass, consistent governance, and
                  integrations that keep pace with how large operators actually run day to day.
                </p>
                <Link href="/contact" className={`${inopsUi.btnPrimary} group mt-8 gap-2 shadow-lg`}>
                  Plan a capability review
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4">
              {(
                [
                  {
                    title: "Centralized Dashboard",
                    subtitle: "One command center for every site, role, and SLA.",
                    span: "lg:col-span-7",
                    glow: "from-sky-400/35 via-blue-500/20 to-transparent",
                    topBar: "from-sky-400 via-blue-500 to-indigo-500",
                    cardSurface:
                      "border-sky-400/35 bg-gradient-to-br from-sky-500/[0.14] via-blue-600/[0.06] to-indigo-900/[0.12] hover:border-sky-300/50 hover:shadow-[0_24px_56px_-24px_rgba(56,189,248,0.35)]",
                    stepGradient: "from-sky-200 via-blue-200 to-cyan-200",
                    iconSolid: "from-sky-500 to-indigo-600 text-white ring-2 ring-sky-300/35 shadow-sky-500/30",
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                        <rect x="4" y="4" width="6" height="6" rx="1.5" />
                        <rect x="14" y="4" width="6" height="6" rx="1.5" />
                        <rect x="4" y="14" width="6" height="6" rx="1.5" />
                        <rect x="14" y="14" width="6" height="6" rx="1.5" />
                      </svg>
                    ),
                  },
                  {
                    title: "Multi-location Support",
                    subtitle: "Roll out visibility and policy across regions without silos.",
                    span: "lg:col-span-5",
                    glow: "from-cyan-400/35 via-teal-500/20 to-transparent",
                    topBar: "from-cyan-400 via-teal-500 to-emerald-500",
                    cardSurface:
                      "border-cyan-400/35 bg-gradient-to-br from-cyan-500/[0.13] via-teal-600/[0.06] to-emerald-900/[0.1] hover:border-cyan-300/50 hover:shadow-[0_24px_56px_-24px_rgba(34,211,238,0.32)]",
                    stepGradient: "from-cyan-200 via-teal-200 to-emerald-200",
                    iconSolid: "from-cyan-500 to-teal-600 text-white ring-2 ring-cyan-300/35 shadow-cyan-500/30",
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                        <circle cx="12" cy="12" r="8" />
                        <path d="M4 12h16" />
                        <path d="M12 4a12 12 0 0 1 0 16" />
                        <path d="M12 4a12 12 0 0 0 0 16" />
                      </svg>
                    ),
                  },
                  {
                    title: "Real-time Insights",
                    subtitle: "Live telemetry and alerts, not yesterday's batch report.",
                    span: "lg:col-span-5",
                    glow: "from-violet-400/35 via-fuchsia-500/20 to-transparent",
                    topBar: "from-violet-400 via-fuchsia-500 to-pink-500",
                    cardSurface:
                      "border-fuchsia-400/35 bg-gradient-to-br from-violet-500/[0.14] via-fuchsia-600/[0.07] to-indigo-900/[0.1] hover:border-fuchsia-300/50 hover:shadow-[0_24px_56px_-24px_rgba(217,70,239,0.32)]",
                    stepGradient: "from-violet-200 via-fuchsia-200 to-pink-200",
                    iconSolid: "from-violet-500 to-fuchsia-600 text-white ring-2 ring-violet-300/35 shadow-fuchsia-500/25",
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                        <path d="m13 2-7 10h5l-1 10 8-12h-5l0-8Z" />
                      </svg>
                    ),
                  },
                  {
                    title: "System Integrations",
                    subtitle: "API-first hooks into ERP, WMS, HRIS, and custom stacks.",
                    span: "lg:col-span-7",
                    glow: "from-amber-400/35 via-orange-500/20 to-transparent",
                    topBar: "from-amber-400 via-orange-500 to-rose-500",
                    cardSurface:
                      "border-amber-400/35 bg-gradient-to-br from-amber-500/[0.13] via-orange-600/[0.06] to-rose-900/[0.1] hover:border-amber-300/50 hover:shadow-[0_24px_56px_-24px_rgba(251,191,36,0.28)]",
                    stepGradient: "from-amber-200 via-orange-200 to-rose-200",
                    iconSolid: "from-amber-500 to-orange-600 text-white ring-2 ring-amber-300/35 shadow-amber-500/25",
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.03.03a2 2 0 1 1-2.83 2.83l-.03-.03A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1V21a2 2 0 1 1-4 0v-.05a1.7 1.7 0 0 0-.4-1 1.7 1.7 0 0 0-1-.55 1.7 1.7 0 0 0-1.87.34l-.03.03a2 2 0 1 1-2.83-2.83l.03-.03A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1-.4H3a2 2 0 1 1 0-4h.05a1.7 1.7 0 0 0 1-.4 1.7 1.7 0 0 0 .55-1 1.7 1.7 0 0 0-.34-1.87l-.03-.03a2 2 0 1 1 2.83-2.83l.03.03A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1V3a2 2 0 1 1 4 0v.05a1.7 1.7 0 0 0 .4 1 1.7 1.7 0 0 0 1 .55 1.7 1.7 0 0 0 1.87-.34l.03-.03a2 2 0 1 1 2.83 2.83l-.03.03A1.7 1.7 0 0 0 19.4 9c.24.3.42.64.52 1 .1.35.08.73-.02 1.08a1.7 1.7 0 0 0 .5 1.92" />
                      </svg>
                    ),
                  },
                ] as const
              ).map((item, index) => (
                <motion.article
                  key={item.title}
                  className={`group relative overflow-hidden rounded-2xl border p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 sm:p-6 ${item.cardSurface} ${item.span}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={hoverLift}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: index * 0.05 }}
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r ${item.topBar}`}
                    aria-hidden
                  />
                  <div
                    className={`pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${item.glow} blur-2xl`}
                    aria-hidden
                  />
                  <span
                    className={`pointer-events-none absolute right-3 top-2.5 bg-gradient-to-r bg-clip-text font-mono text-5xl font-black tabular-nums leading-none text-transparent opacity-[0.85] sm:right-4 sm:top-3 ${item.stepGradient}`}
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={`relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg ${item.iconSolid}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="relative mt-4 text-white">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {item.subtitle}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/80 py-12 lg:py-20"
        aria-labelledby="nexus-operational-benefits-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_15%_20%,rgba(59,130,246,0.09),transparent),radial-gradient(ellipse_70%_50%_at_85%_75%,rgba(139,92,246,0.07),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-[min(28%,18rem)] top-0 h-[28rem] w-[28rem] rotate-12 rounded-[3rem] border border-slate-200/60 bg-gradient-to-bl from-white/80 to-slate-100/40 shadow-inner"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-8 left-8 hidden h-24 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent lg:block"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-8 right-8 hidden h-24 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent lg:block"
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
            <span className="inline-flex items-center rounded-full border border-slate-200/90 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.12)] backdrop-blur-sm">
              Outcomes
            </span>
            <h2 id="nexus-operational-benefits-heading" className="mt-6 text-slate-900">
              Operational benefits you can{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-[color:var(--inops-blue)]">
                  measure
                </span>
                <span
                  className="absolute -bottom-1 left-0 right-0 z-0 h-3 rounded-full bg-[color:var(--inops-blue)]/15 blur-[2px]"
                  aria-hidden
                />
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Benchmark-style deltas teams report after wiring InOps across assets, logistics, and
              fulfillment, fewer blind spots, faster cycles, sharper calls on the floor.
            </p>
          </motion.div>

          <div className="relative mt-14">
            <div
              className="pointer-events-none absolute left-[8%] right-[8%] top-[52%] hidden h-px bg-gradient-to-r from-transparent via-slate-300/90 to-transparent xl:block"
              aria-hidden
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
              {[
                {
                  value: "+35%",
                  label: "Asset Utilization",
                  outcomeTag: "Yield",
                  description: "Raise yield from fleets and fixed assets with utilization intelligence.",
                  ring: "from-emerald-400 via-teal-500 to-cyan-600",
                  numberGradient: "from-emerald-600 via-teal-600 to-cyan-700",
                  iconTint: "from-emerald-500/15 to-teal-600/10 text-emerald-700 ring-emerald-200/60",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                      <path d="M4 19h16" />
                      <path d="M8 16V9" />
                      <path d="M12 16V6" />
                      <path d="M16 16v-4" />
                    </svg>
                  ),
                },
                {
                  value: "-22%",
                  label: "Logistics Costs",
                  outcomeTag: "Spend",
                  description: "Less fuel burn, detention, and dead miles through smarter routing and yards.",
                  ring: "from-amber-400 via-orange-500 to-rose-600",
                  numberGradient: "from-amber-600 via-orange-600 to-rose-700",
                  iconTint: "from-amber-500/15 to-orange-600/10 text-amber-800 ring-amber-200/70",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                      <path d="M3 12h13" />
                      <path d="M14 8h2l3 3v4h-2" />
                      <circle cx="7" cy="16" r="2" />
                      <circle cx="17" cy="16" r="2" />
                      <path d="M5 16h10" />
                    </svg>
                  ),
                },
                {
                  value: "-15%",
                  label: "Cycle Times",
                  outcomeTag: "Velocity",
                  description: "Shorter dock-to-door lead time with orchestrated handoffs.",
                  ring: "from-sky-400 via-blue-500 to-indigo-600",
                  numberGradient: "from-sky-600 via-blue-600 to-indigo-700",
                  iconTint: "from-sky-500/15 to-indigo-600/10 text-blue-800 ring-sky-200/70",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 8v5l3 2" />
                    </svg>
                  ),
                },
                {
                  value: "99%",
                  label: "Decision Precision",
                  outcomeTag: "Clarity",
                  description: "Fewer fire drills, operators align on one trusted operational picture.",
                  ring: "from-violet-400 via-purple-500 to-fuchsia-600",
                  numberGradient: "from-violet-600 via-purple-600 to-fuchsia-700",
                  iconTint: "from-violet-500/15 to-fuchsia-600/10 text-violet-800 ring-violet-200/70",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                      <path d="M12 3 5 6v6c0 5 3.5 7.8 7 9 3.5-1.2 7-4 7-9V6l-7-3Z" />
                      <path d="m9.5 12 1.7 1.7 3.3-3.4" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className={`rounded-[1.35rem] bg-gradient-to-br p-[1px] shadow-[0_20px_50px_-28px_rgba(15,23,42,0.18)] ${item.ring}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: index * 0.06 }}
                >
                  <motion.article
                    className="relative h-full overflow-hidden rounded-[1.3rem] bg-white/95 p-6 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-sm transition-[box-shadow] duration-300 hover:shadow-[0_28px_60px_-32px_rgba(59,130,246,0.2)]"
                    whileHover={hoverLift}
                  >
                    <span
                      className={`pointer-events-none absolute right-0 top-5 z-0 bg-gradient-to-br bg-clip-text font-mono text-[3.5rem] font-black tabular-nums leading-none tracking-tighter text-transparent opacity-[0.88] sm:right-0.5 sm:top-6 sm:text-[4.25rem] sm:opacity-95 ${item.numberGradient}`}
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="pointer-events-none absolute left-4 top-5 z-10 flex flex-col items-start gap-1.5 sm:left-5 sm:top-6"
                      aria-hidden
                    >
                      <span className="rounded-lg border border-slate-200/90 bg-gradient-to-br from-white to-slate-50/95 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-slate-600 shadow-[0_6px_20px_-12px_rgba(15,23,42,0.25)] ring-1 ring-slate-900/[0.04] backdrop-blur-sm sm:text-[10px] sm:tracking-[0.16em]">
                        {item.outcomeTag}
                      </span>
                      <span className={`h-1 w-9 rounded-full bg-gradient-to-r shadow-sm ${item.ring}`} />
                    </div>
                    <div className="relative z-10">
                      <div
                        className={`relative mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br shadow-sm ring-1 ${item.iconTint}`}
                      >
                        {item.icon}
                      </div>
                      <p className="relative mt-5 text-5xl font-black tracking-tight text-slate-900">
                        {item.value}
                      </p>
                      <h3 className="relative mt-2 text-slate-900">
                        {item.label}
                      </h3>
                      <p className="relative mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-gray-900">
              Built for Every Industry
            </h2>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Manufacturing",
                accent: "from-blue-500/70 via-blue-700/55 to-slate-950/85",
                icon: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <path d="M3 20h18" />
                    <path d="M5 20V8l4-3v15" />
                    <path d="M9 11h10v9" />
                    <path d="M13 8h2" />
                    <path d="M16 8h2" />
                  </svg>
                ),
              },
              {
                title: "Logistics",
                accent: "from-blue-500/70 via-blue-700/55 to-slate-950/85",
                icon: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <path d="M3 12h13" />
                    <path d="M14 8h2l3 3v4h-2" />
                    <circle cx="7" cy="16" r="2" />
                    <circle cx="17" cy="16" r="2" />
                    <path d="M5 16h10" />
                  </svg>
                ),
              },
              {
                title: "Warehousing",
                accent: "from-blue-500/65 via-slate-700/55 to-slate-950/85",
                icon: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <path d="m3 9 9-5 9 5" />
                    <path d="M4 10v9h16v-9" />
                    <path d="M9 19v-5h6v5" />
                  </svg>
                ),
              },
              {
                title: "Enterprise Ops",
                accent: "from-slate-700/75 via-blue-900/60 to-slate-950/85",
                icon: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <circle cx="12" cy="12" r="8" />
                    <path d="M4 12h16" />
                    <path d="M12 4a12 12 0 0 1 0 16" />
                    <path d="M12 4a12 12 0 0 0 0 16" />
                  </svg>
                ),
              },
            ].map((card, index) => (
              <motion.article
                key={card.title}
                className="group relative overflow-hidden rounded-xl border border-gray-200 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.015 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: index * 0.04 }}
              >
                <div
                  className="relative aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${industryVisuals[card.title as keyof typeof industryVisuals]})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-black/20" aria-hidden />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.accent}`} aria-hidden />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur">
                      {card.icon}
                    </span>
                    <h3 className="mt-3 text-white drop-shadow-sm">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities summary — H3 + 2 sentences + keyword link per capability */}
      <section className="border-t border-slate-100 bg-white py-14 lg:py-20" aria-labelledby="enterprise-capabilities-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          >
            <h2 id="enterprise-capabilities-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              What the platform covers
            </h2>
            <div className="mt-10 space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Contract Labour Management</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  Digital onboarding, gate compliance, CLRA registers, and payroll for every contractor workforce on every site — with licence tracking, BGV, and statutory deductions built in.{" "}
                  <Link href="/contract-labour-management" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                    Contract labour management system
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Permanent workforce HR</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  Employee records, leave, and statutory payroll (PF, ESI, PT, LWF) on the same identity engine as your contract workforce — one device estate, one dashboard, no duplicate systems.{" "}
                  <Link href="/hris" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                    HRIS software for manufacturing
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Attendance capture</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  Every capture mode on one engine:{" "}
                  <Link href="/face-recognition-attendance" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                    face recognition attendance
                  </Link>
                  ,{" "}
                  <Link href="/cctv-attendance" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                    CCTV attendance system
                  </Link>
                  , fingerprint, mobile — one enrolled identity, one attendance record per worker.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Physical access control</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  <Link href="/turnstiles-access" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                    Turnstile access control
                  </Link>{" "}
                  with compliance rule enforcement via{" "}
                  <Link href="/contract-labour-management/iddion-regx-modules/gate-compliance" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                    gate pass management
                  </Link>
                  — induction, medical, licence, and BGV checked at the barrier before the arm turns.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Site services</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  Biometric meal entitlements, canteen invoice reconciliation, and digital visitor passes — on the same identity spine as gate and workforce.{" "}
                  <Link href="/canteen-and-visitor" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                    Canteen and visitor management
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Worker financial wellness</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  Contract and factory workers withdraw wages they have already earned — validated against biometric attendance, settled at the next payroll cycle, zero employer liability.{" "}
                  <Link href="/earned-wage-access" className="font-medium text-[color:var(--inops-blue)] underline underline-offset-2">
                    Earned wage access
                  </Link>
                </p>
              </div>
            </div>
            <p className="mt-10 text-base leading-relaxed text-slate-600">
              One identity record, one attendance engine, and central multi-site visibility tie every capability together — so gate events, canteen records, payroll runs, and statutory registers all trace to the same verified source. Most enterprise deployments go live in 30–60 days.
            </p>
          </motion.div>
        </div>
      </section>

      <SolutionPageClosingCta
        headingId="enterprise-final-cta-heading"
        heading="Transform Enterprise Operations with a Unified Platform"
        description={
          <>
            Join the world&apos;s most efficient companies. Schedule a personalized walkthrough of the nexusOps
            environment today.
          </>
        }
        primaryLabel="Request Free Demo"
        secondaryLabel="Contact Sales"
        footnote="No commitment required. 15-minute introductory call."
      />
    </div>
  );
}
