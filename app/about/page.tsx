"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import AnimatedCounter from "../components/AnimatedCounter";
import CollaborateCtaBand from "../components/CollaborateCtaBand";
import VideoLivePopups from "@/app/components/VideoLivePopups";
import SolutionHeroWaveDecor from "../components/SolutionHeroWaveDecor";
import {
  SPLIT_HERO_COPY_ML,
  SPLIT_HERO_MEDIA_MR,
  SPLIT_HERO_MOBILE_COPY_ORDER,
  SPLIT_HERO_MOBILE_MEDIA_ORDER,
  SPLIT_HERO_MOBILE_STACK,
} from "@/app/lib/splitHeroWideInsets";
const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

/** Same flat canvas as the page shell — sections below hero */
const aboutSectionBg = "bg-[#eef4f8]";

const aboutHeroBg = "bg-white";

const visionMissionCards = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
  },
} as const;

const visionMissionCardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: smoothEase },
  },
} as const;

const cardHoverLift = { y: -6, transition: { duration: 0.28, ease: smoothEase } } as const;

const aboutHeroOfficeImage = "/WhatsApp Image 2026-05-05 at 8.15.34 PM.jpeg";

/** Unified kicker / heading / body on light sections (About). */
const aboutKickerStyle = {
  color: "var(--inops-blue)",
  backgroundColor: "var(--brand-light)",
  borderColor: "color-mix(in srgb, var(--inops-blue) 38%, #e2e8f0)",
} as const;

const aboutKickerClass =
  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm ring-1 ring-[color:var(--inops-blue)]/15 backdrop-blur-sm";

const aboutH2 = "home-display-heading font-heading-bold text-slate-900";

const aboutH3 = "font-heading-bold text-slate-900";

const aboutLead = "text-base leading-relaxed text-slate-600";

const aboutLabelUpper = "text-xs font-medium uppercase tracking-widest text-slate-600";

const cultureCards: { title: string; imageSrc: string }[] = [
  { title: "Face Recognition System", imageSrc: "/images/7a6a2a07-b8a7-48d1-ac83-4201e948805e.png" },
  { title: "HR Information System", imageSrc: "/hrinfromationsystem.jpeg" },
  { title: "Contract Labour Management System", imageSrc: "/contractworkforcemanagemtsystem.jpeg" },
  { title: "EWA", imageSrc: "/ewa.jpeg" },
  { title: "Enterprise Solution", imageSrc: "/enterprise-solution.png" },
  { title: "CCTV Solution", imageSrc: "/cctvsolution.png" },
  { title: "Mobile Application", imageSrc: "/mobile-application.png" },
  { title: "Canteen & Visitor Management", imageSrc: "/canteen-visitor-management.png" },
];

// const differentiators = [
//   {
//     title: "Dedicated Partnership",
//     text: "We are committed to building lasting client partnerships. Our team works closely with you to understand your unique challenges and deliver tailored solutions that drive real business outcomes.",
//   },
//   {
//     title: "End-to-End Automation Expertise",
//     text: "From attendance and access automation to integrated hardware and software, we specialize in comprehensive project management. We bring together the best tools and processes to streamline your operations.",
//   },
//   {
//     title: "Excellence in Technology Solutions",
//     text: "Our expertise spans networking, security, cloud services, and enterprise applications. We help organizations leverage technology to innovate, scale, and stay ahead in a digital-first world.",
//   },
// ];

const expertiseSlides = [
  {
    title: "CLMS & Workforce Management",
    text: "Deep experience in contract labour management systems, attendance, and compliance automation.",
  },
  {
    title: "Biometric & Access Control",
    text: "Integration of face, fingerprint, and card-based systems with your existing HR and payroll workflows.",
  },
  {
    title: "Cloud & Enterprise IT",
    text: "Secure, scalable cloud solutions and enterprise-grade networking and security implementations.",
  },
  {
    title: "Compliance & Reporting",
    text: "Statutory compliance, PF, ESIC, and automated reporting to keep you audit-ready.",
  },
  {
    title: "Custom Integrations",
    text: "Seamless connections between your ERP, HRMS, and our platforms for a unified operations view.",
  },
];

type EvolutionMilestone = {
  year: string;
  side: "left" | "right";
  title: string;
  description: string;
  icon: "grid" | "shield" | "users" | "building" | "layers" | "trend";
  highlight?: boolean;
  badge?: string;
};

const evolutionMilestones: EvolutionMilestone[] = [
  {
    year: "2014",
    side: "right",
    title: "Enterprise IT & Product Services",
    description: "The foundation of our engineering excellence.",
    icon: "grid",
    highlight: true,
  },
  {
    year: "2021",
    side: "left",
    title: "Biometric & Hardware Solutions",
    description: "Securing the perimeter with advanced identity tech.",
    icon: "shield",
    highlight: true,
  },
  {
    year: "2022",
    side: "right",
    title: "Attendance & Workforce Systems",
    description: "Bridging the gap between physical and digital records.",
    icon: "users",
    highlight: true,
  },
  {
    year: "2023",
    side: "left",
    title: "Canteen & Visitor Management",
    description: "Extending governance to secondary facility operations.",
    icon: "building",
    highlight: true,
  },
  {
    year: "2025",
    side: "right",
    title: "CLMS Platform",
    description: "The launch of our flagship Labour Management System.",
    icon: "layers",
    highlight: true,
  },
  {
    year: "2026",
    side: "left",
    title: "Financial Layer (EWA)",
    description: "Empowering workers with Earned Wage Access.",
    icon: "trend",
    badge: "Roadmap",
    highlight: true,
  },
];

const impactStatItems = [
  {
    value: 3000,
    suffix: "+",
    label: "Hardware Managed",
    stripe: "from-sky-400 via-blue-500 to-indigo-600",
    wash: "from-sky-400/[0.08] via-white to-white",
  },
  {
    value: 75,
    suffix: "+",
    label: "Plants Covered",
    stripe: "from-emerald-400 via-teal-500 to-cyan-600",
    wash: "from-emerald-400/[0.07] via-white to-white",
  },
  {
    value: 25,
    suffix: "+",
    label: "Manufacturing Enterprises",
    stripe: "from-amber-400 via-orange-500 to-rose-600",
    wash: "from-amber-400/[0.06] via-white to-white",
  },
  {
    value: 1,
    suffix: "L+",
    label: "Workers on Platform",
    stripe: "from-violet-400 via-fuchsia-500 to-indigo-600",
    wash: "from-violet-400/[0.08] via-white to-white",
  },
] as const;

function EvolutionTimelineIcon({ name }: { name: EvolutionMilestone["icon"] }) {
  const c = "h-5 w-5";
  if (name === "grid") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (name === "users") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }
  if (name === "building") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    );
  }
  if (name === "layers") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3L2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8M14 7h7v7" />
    </svg>
  );
}

export default function AboutPage() {
  const [expertiseIndex, setExpertiseIndex] = useState(0);
  const evolutionRailRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: evolutionRailProgress } = useScroll({
    target: evolutionRailRef,
    offset: ["start 85%", "end 25%"],
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setExpertiseIndex((prev) => (prev === expertiseSlides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <div className="about-page-section-gap relative min-h-screen overflow-hidden bg-[#eef4f8] text-slate-950">
        {/* Hero ,  split layout like solutions/cctv: copy left, media right + live tiles */}
        <motion.section
          className={`relative z-[1] w-full overflow-x-hidden border-b border-slate-200/80 ${aboutHeroBg} pt-6 sm:pt-8 lg:pt-10`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <SolutionHeroWaveDecor className="z-[1]" />
          <div className="relative z-[2] w-full">
            <div className={`relative min-h-[280px] w-full bg-transparent sm:min-h-[340px] lg:flex lg:min-h-[400px] lg:items-stretch ${SPLIT_HERO_MOBILE_STACK}`}>
              <div
                className={`relative mt-5 h-48 w-full sm:mt-7 sm:h-56 ${SPLIT_HERO_MOBILE_MEDIA_ORDER} lg:order-2 lg:mt-0 lg:h-auto lg:min-h-[400px] lg:w-1/2 lg:flex-shrink-0 ${SPLIT_HERO_MEDIA_MR}`}
                data-no-site-hover
              >
                <Image
                  src={aboutHeroOfficeImage}
                  alt="About Us - team and workforce operations landing image"
                  fill
                  className="object-cover object-[center_35%] sm:object-[center_30%] lg:object-[center_40%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white via-white/95 to-transparent sm:w-28 lg:block"
                  aria-hidden
                />
                <VideoLivePopups
                  popups={[
                    {
                      position: "top-left",
                      animateOnMount: true,
                      label: "Trust",
                      title: "1L+ verified workers on platform",
                      accent: "emerald",
                      className: "!top-2 !-left-2 sm:!top-4 sm:!-left-4 lg:!top-8 lg:!-left-25",
                    },
                    {
                      position: "bottom-right",
                      animateOnMount: true,
                      label: "Enterprise",
                      title: "25+ active client programs",
                      variant: "icon",
                      icon: "chart",
                      accent: "blue",
                      className: "!bottom-3 !right-2 sm:!bottom-5 sm:!right-4 lg:!-bottom-4 lg:!right-0",
                    },
                  ]}
                />
              </div>

              <div className={`relative z-10 mx-auto flex max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-12 lg:order-1 lg:w-1/2 ${SPLIT_HERO_MOBILE_COPY_ORDER}`}>
                <div
                  className={`max-w-3xl px-0 py-6 sm:py-8 lg:max-w-xl lg:py-10 lg:pr-8 ${SPLIT_HERO_COPY_ML}`}
                >
                  <motion.span
                    className={aboutKickerClass}
                    style={aboutKickerStyle}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                    About InOps
                  </motion.span>
                  <motion.h1
                    className="home-display-heading inops-type-hero mt-4 font-heading-bold text-slate-900 sm:mt-5"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: smoothEase, delay: 0.12 }}
                  >
                    About InOps:{" "}
                    <span className="text-[color:var(--inops-blue)]">Workforce Compliance Technology Since 2014</span>
                  </motion.h1>
                  <motion.p
                    className={`${aboutLead} mt-4 max-w-xl`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                  >
                    InOps IT Solutions Pvt. Ltd. is a Bengaluru-based workforce compliance technology company founded in 2014. We build and support <Link href="/contract-labour-management" className="underline font-medium hover:opacity-75">contract labour management</Link>, biometric attendance, HRIS and compliance systems for Indian manufacturing, defence and infrastructure enterprises, and manage 3,000+ devices across 70+ sites.
                  </motion.p>
                  <motion.div
                    className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.24 }}
                  >
                    <Link href="/contact" className="inops-btn-primary inline-flex items-center gap-2 rounded-xl bg-[color:var(--inops-blue)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 active:scale-95">
                      Book a Demo
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 active:scale-95">
                      Contact Us
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Company story */}
        {/* <section className="border-t border-gray-100/80 bg-white py-10 lg:py-14">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-12">
            <motion.h2
              className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              One Platform. Complete Workforce, Financial &amp; Operational Control
            </motion.h2>
            <motion.p
              className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
            >
              InOps IT Solutions enables enterprises to manage Contract Labour operations, financial access,
              and business processes through a unified platform. From Contract Labour Management and
              face-based identity solutions to earned wage access and enterprise operations, InOps
              brings visibility, compliance, and control into one system. Designed for large,
              distributed organizations, it integrates seamlessly with existing infrastructure while
              improving efficiency, reducing risk, and driving productivity at scale.
            </motion.p>
          </div>
        </section> */}

        {/* Impact ,  stats ,  soft lift above shell */}
        <section
          className={`relative border-t border-slate-200/80 ${aboutSectionBg} py-10 lg:py-16`}
          aria-labelledby="impact-stats-heading"
        >
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <motion.div
              className="mx-auto w-full max-w-[min(100%,52rem)] text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className={aboutKickerClass} style={aboutKickerStyle}>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                At a glance
              </span>
              <h2
                id="impact-stats-heading"
                className={`${aboutH2} mt-4 text-center !whitespace-nowrap !text-[clamp(0.72rem,3.5vw,2.2rem)] !leading-tight`}
              >
                Trusted where enterprise operations run at scale
              </h2>
              <p className={`${aboutLead} mx-auto mt-4 max-w-3xl text-balance`}>
                Hardware deployments, manufacturing locations, client organizations, and verified workers,
                <br aria-hidden />
                consolidated on one operational foundation.
              </p>
            </motion.div>

            <motion.div
              className="mx-auto mt-8 max-w-5xl lg:mt-10"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.52, ease: smoothEase, delay: 0.05 }}
            >
              <div className="rounded-[1.15rem] bg-gradient-to-br from-sky-200/40 via-white/90 to-violet-200/35 p-[1px] shadow-[0_8px_40px_-20px_rgba(59,130,246,0.25)]">
                <div className="overflow-hidden rounded-[1.1rem] border border-white/80 bg-white/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-[2px]">
                  <div className="grid grid-cols-2 divide-x divide-y divide-slate-100/90 lg:grid-cols-4 lg:divide-y-0">
                    {impactStatItems.map((stat) => (
                      <div
                        key={stat.label}
                        className={`relative flex flex-col items-center justify-center bg-gradient-to-b px-4 py-9 text-center sm:px-8 sm:py-11 lg:py-12 ${stat.wash}`}
                      >
                        <div
                          className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${stat.stripe}`}
                          aria-hidden
                        />
                        <span
                          className={`mb-4 inline-flex h-2 w-2 rounded-full bg-gradient-to-r shadow-sm ${stat.stripe}`}
                          aria-hidden
                        />
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          duration={1.35}
                          className="block text-[1.75rem] font-heading-bold tabular-nums tracking-tight text-slate-900 sm:text-[2rem] lg:text-[2.125rem]"
                        />
                        <p className={`${aboutLabelUpper} mt-3 max-w-[11rem] leading-snug`}>
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who we are — centered narrative + CEO (reference layout) */}
        <section
          className={`relative overflow-hidden border-t border-slate-200/80 ${aboutSectionBg} py-10 lg:py-16`}
          aria-labelledby="governance-platform-heading"
        >
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.52, ease: smoothEase }}
            >
              <h2 id="governance-platform-heading" className={`${aboutH2} mx-auto mt-4 max-w-[22rem] sm:max-w-none`}>
                <span className="block">A Full-Stack Contract Labour Management</span>
                <span className="block">Platform</span>
              </h2>
              <p className={`${aboutLead} mx-auto mt-4 max-w-xl lg:max-w-2xl`}>
                Starting with identity and access control systems, InOps has evolved into a comprehensive system enabling
                enterprises to manage contract labor at scale with real-time visibility and compliance assurance.
              </p>
            </motion.div>

            <motion.div
              className="mx-auto mt-8 flex max-w-md flex-row items-center justify-center gap-4 sm:mt-10 sm:gap-5"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-slate-200 ring-2 ring-white shadow-md sm:h-16 sm:w-16">
                <Image
                  src="/Gemini_Generated_Image_fze4eqfze4eqfze4.png"
                  alt="Portrait of Satish Sinha, Founder of InOps IT Solutions"
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-base font-heading-bold tracking-tight text-slate-900">Satish Sinha </p>
                <p className={`${aboutLead} mt-0.5 text-sm`}>Founder</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Evolution ,  vertical timeline (inherits page shell bg + gradients) */}
        <section
          className={`relative border-y border-slate-200/80 ${aboutSectionBg} py-9 lg:py-14`}
          aria-labelledby="our-evolution-heading"
        >
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <div className={`${aboutKickerClass} mx-auto`} style={aboutKickerStyle}>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                Timeline
              </div>
              <h2 id="our-evolution-heading" className={`${aboutH2} mt-4`}>
                Our Story: From 2014 to a 3,000+ Device Compliance Platform
              </h2>
              <p className={`${aboutLead} mx-auto mt-4 max-w-xl`}>
                A decade of engineering excellence and workforce transformation — from enterprise IT to India's leading contract labour compliance platform.
              </p>
              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
            </motion.div>

            <div ref={evolutionRailRef} className="relative mx-auto mt-10 max-w-4xl">
              {/* Center rail (desktop) */}
              <div
                className="absolute left-8 top-2 bottom-2 z-0 hidden w-[4px] rounded-full bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 opacity-90 shadow-[0_0_0_1px_rgba(148,163,184,0.25)] md:left-1/2 md:block md:-translate-x-1/2"
                aria-hidden
              />
              <motion.div
                className="absolute left-8 top-2 bottom-2 z-[1] hidden w-[4px] origin-top rounded-full bg-gradient-to-b from-blue-600 via-sky-500 to-cyan-400 md:left-1/2 md:block md:-translate-x-1/2"
                style={{ scaleY: evolutionRailProgress }}
                aria-hidden
              />
              {/* Mobile line */}
              <div className="absolute left-8 top-2 bottom-2 z-0 w-[4px] rounded-full bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 opacity-90 shadow-[0_0_0_1px_rgba(148,163,184,0.25)] md:hidden" aria-hidden />
              <motion.div
                className="absolute left-8 top-2 bottom-2 z-[1] w-[4px] origin-top rounded-full bg-gradient-to-b from-blue-600 via-sky-500 to-cyan-400 md:hidden"
                style={{ scaleY: evolutionRailProgress }}
                aria-hidden
              />

              <ul className="relative z-10 space-y-10 sm:space-y-12">
                {evolutionMilestones.map((m, i) => (
                  <li key={m.year} className="relative">
                    {/* Node on the line */}
                    <div
                      className="absolute left-8 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[color:var(--inops-blue)] shadow-[0_16px_40px_-28px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/80 md:left-1/2"
                      aria-hidden
                    >
                      <EvolutionTimelineIcon name={m.icon} />
                    </div>

                    <motion.div
                      className={`pl-20 md:grid md:grid-cols-2 md:gap-10 md:pl-0 ${
                        m.side === "left" ? "" : ""
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.04, 0.2) }}
                    >
                      {m.side === "left" ? (
                        <>
                          <div className="md:col-start-1 md:row-start-1 md:pr-10 md:text-right">
                            <div
                              className={`rounded-3xl border p-6 shadow-[0_18px_55px_-36px_rgba(15,47,87,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_70px_-40px_rgba(15,47,87,0.55)] ${
                                m.highlight
                                  ? "border-slate-200/90 bg-white/90 ring-1 ring-slate-200/80 backdrop-blur"
                                  : "border-slate-200/90 bg-white"
                              }`}
                            >
                              <div className="flex flex-wrap items-center gap-2 md:justify-end">
                                <span className="inline-flex items-center rounded-full bg-[color:var(--inops-blue)] px-3 py-1 text-sm font-semibold text-white shadow-sm">
                                  {m.year}
                                </span>
                                {m.badge ? (
                                  <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-600">
                                    {m.badge}
                                  </span>
                                ) : null}
                              </div>
                              <h3 className={`mt-2 ${aboutH3}`}>{m.title}</h3>
                              <p className={`mt-2 ${aboutLead}`}>
                                {m.description}
                              </p>
                            </div>
                          </div>
                          <div className="hidden md:col-start-2 md:block" aria-hidden />
                        </>
                      ) : (
                        <>
                          <div className="hidden md:col-start-1 md:block" aria-hidden />
                          <div className="md:col-start-2 md:row-start-1 md:pl-10">
                            <div
                              className={`rounded-3xl border p-6 shadow-[0_18px_55px_-36px_rgba(15,47,87,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_70px_-40px_rgba(15,47,87,0.55)] ${
                                m.highlight
                                  ? "border-slate-200/90 bg-white/90 ring-1 ring-slate-200/80 backdrop-blur"
                                  : "border-slate-200/90 bg-white"
                              }`}
                            >
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center rounded-full bg-[color:var(--inops-blue)] px-3 py-1 text-sm font-semibold text-white shadow-sm">
                                  {m.year}
                                </span>
                                {m.badge ? (
                                  <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-600">
                                    {m.badge}
                                  </span>
                                ) : null}
                              </div>
                              <h3 className={`mt-2 ${aboutH3}`}>{m.title}</h3>
                              <p className={`mt-2 ${aboutLead}`}>
                                {m.description}
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Product Range ,  premium marquee strip */}
        <section className={`relative overflow-x-hidden border-t border-slate-200/70 ${aboutSectionBg} py-8 lg:py-11`}>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center">
              <motion.span
                className={`${aboutKickerClass} mx-auto`}
                style={aboutKickerStyle}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                Product Showcase
              </motion.span>
              <motion.h2
                className={`${aboutH2} mt-4 text-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                Product Range
              </motion.h2>
              <motion.p
                className={`${aboutLead} mx-auto mt-4 max-w-2xl`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
              >
                Smart devices and enterprise tools curated for Contract Labour visibility, Management, and operational control.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="hover-pause relative mt-8 w-screen max-w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden py-2"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: smoothEase }}
          >
            <div className="flex w-max gap-0 animate-marquee-slow" style={{ willChange: "transform" }}>
              {[...cultureCards, ...cultureCards, ...cultureCards].map((card, i) => (
                <div
                  key={`${card.title}-${i}`}
                  className="group relative h-[250px] w-[420px] flex-shrink-0 overflow-hidden border-r border-white/15 bg-slate-900/95 shadow-[0_30px_85px_-48px_rgba(15,23,42,0.85)] transition duration-300 hover:z-[1] hover:-translate-y-1.5"
                >
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="scale-110 object-cover object-center opacity-35 blur-[1.5px]"
                    sizes="(max-width: 640px) 85vw, 390px"
                  />
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="object-contain object-center p-2.5 transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 85vw, 420px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/20 to-transparent" aria-hidden />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-75" aria-hidden />
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-60" aria-hidden />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className={`${aboutLabelUpper} tracking-[0.18em] text-slate-300`}>Product</p>
                    <h3 className="mt-1 text-base font-heading-bold text-white">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Vision + Mission + CTA — solid top rule: slate-200 on #eef4f8 is nearly invisible */}
        <section className={`relative overflow-hidden ${aboutSectionBg}`} aria-label="Vision and mission">
          <div
            className="h-[2px] w-full bg-gradient-to-r from-transparent via-slate-500/55 to-transparent shadow-[0_1px_0_rgb(255_255_255_/_.85)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-6 pt-10 lg:px-12 lg:pt-16">
            <motion.div
              className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-7"
              variants={visionMissionCards}
              initial="hidden"
              animate="visible"
            >
              <motion.article
                variants={visionMissionCardItem}
                whileHover={cardHoverLift}
                className="inops-skip-premium-card group relative box-border overflow-hidden rounded-2xl border-r border-b border-slate-300 bg-white/50 px-6 py-7 shadow-[0_14px_44px_-32px_rgba(15,23,42,0.12)] backdrop-blur-[2px] transition-[box-shadow,border-color] duration-300 border-t-[4px] border-t-[#1d5fbf] hover:border-r-slate-400 hover:border-b-slate-400 hover:shadow-[0_24px_56px_-36px_rgba(15,23,42,0.14)] sm:px-8 sm:py-8"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-sky-400/15 blur-2xl" />
                </div>
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <p className={`relative !text-xl text-slate-900 font-heading-bold ${aboutLabelUpper} tracking-[0.22em]`}>Vision</p>
                <p className={`relative mt-4 text-sm ${aboutLead}`}>
                  To build the most trusted workforce ecosystem, where work, identity, and financial access seamlessly come together.
                </p>
              </motion.article>
              <motion.article
                variants={visionMissionCardItem}
                whileHover={cardHoverLift}
                className="inops-skip-premium-card group relative box-border overflow-hidden rounded-2xl border-r border-b border-slate-300 bg-white/50 px-6 py-7 shadow-[0_14px_44px_-32px_rgba(15,23,42,0.12)] backdrop-blur-[2px] transition-[box-shadow,border-color] duration-300 border-t-[4px] border-t-[#059669] hover:border-r-emerald-300 hover:border-b-emerald-300 hover:shadow-[0_24px_56px_-36px_rgba(16,185,129,0.18)] sm:px-8 sm:py-8"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                >
                  <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-emerald-400/15 blur-2xl" />
                </div>
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <p className={`relative !text-xl text-slate-900 font-heading-bold ${aboutLabelUpper} tracking-[0.22em]`}>Mission</p>
                <p className={`relative mt-4  text-sm ${aboutLead}`}>
                  To help enterprises digitize and control workforce operations through unified governance and verified data, and extend this foundation to enable earned wage access and a curated marketplace of financial and worker-focused services.
                </p>
              </motion.article>
            </motion.div>

            <motion.div
              className="mt-8 lg:mt-10"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
            >
              <CollaborateCtaBand />
            </motion.div>
          </div>
        </section>

        {/* Expertise ,  section intro, then visuals + carousel */}
        <section
          className={`section-flush-footer relative overflow-hidden border-t border-slate-200/80 ${aboutSectionBg} pb-0 pt-10 lg:pb-0 lg:pt-0`}
          aria-labelledby="why-choose-heading"
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mx-auto mb-8 max-w-3xl text-center lg:mb-10"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.48, ease: smoothEase }}
            >
              <span className={aboutKickerClass} style={aboutKickerStyle}>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                Expertise
              </span>
              <h2 id="why-choose-heading" className={`${aboutH2} mt-4`}>
                Why choose us
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
              <p className={`${aboutLead} mx-auto mt-4 max-w-2xl`}>
                Workforce systems, biometrics, cloud, and compliance, engineered for enterprise scale and audit-ready
                operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-[2rem] border border-white bg-white/90 shadow-[0_30px_90px_-52px_rgba(15,47,87,0.5)] ring-1 ring-slate-900/[0.05] lg:grid-cols-12 lg:items-stretch">
              <motion.div
                className="group relative overflow-hidden bg-gradient-to-br from-white via-sky-50/70 to-white lg:col-span-6"
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.65, ease: smoothEase }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_34%_12%,rgba(57,189,232,0.16),transparent_34%)]" aria-hidden />
                <div className="relative min-h-[20rem] w-full sm:min-h-[26rem] lg:min-h-[32rem]">
                  <Image
                    src="/t2-removed.png"
                    alt="Why choose us visual"
                    fill
                    className="object-contain object-center px-6 pt-6 drop-shadow-[0_24px_36px_rgba(29,95,191,0.16)] transition-transform duration-500 group-hover:scale-[1.025] sm:p-8"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="pointer-events-none absolute inset-x-6 bottom-5 flex items-center justify-between rounded-full border border-white/80 bg-white/85 px-4 py-2 text-xs font-semibold text-slate-600 shadow-[0_16px_36px_-28px_rgba(15,23,42,0.45)] backdrop-blur">
                    <span>Unified expertise stack</span>
                    <span className="text-blue-700">Enterprise ready</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative flex min-h-[20rem] overflow-hidden border-t border-slate-100 bg-white/95 p-6 backdrop-blur sm:p-7 lg:col-span-6 lg:min-h-[32rem] lg:border-l lg:border-t-0 lg:p-8"
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.65, ease: smoothEase }}
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/80 to-transparent lg:hidden" aria-hidden />
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-100/80 blur-3xl" aria-hidden />
                <div
                  className="pointer-events-none absolute right-4 top-4 z-[2] select-none sm:right-6 sm:top-5 lg:right-8 lg:top-6"
                  aria-hidden
                >
                  <div className="rounded-2xl border border-slate-200/80 bg-white/90 px-3 py-2 shadow-[0_12px_28px_-22px_rgba(15,23,42,0.35)] ring-1 ring-white/70 backdrop-blur-sm">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Expertise track</span>
                    <span className="mt-0.5 flex items-baseline justify-end gap-1 font-semibold tabular-nums tracking-tight text-slate-800">
                      <span className="text-2xl leading-none sm:text-3xl">{String(expertiseIndex + 1).padStart(2, "0")}</span>
                      <span className="text-base font-semibold text-slate-400">/</span>
                      <span className="text-sm font-semibold text-slate-500">{String(expertiseSlides.length).padStart(2, "0")}</span>
                    </span>
                  </div>
                </div>
                <div className="relative mx-auto flex w-full min-h-[16rem] max-w-xl flex-col items-center justify-center text-center sm:min-h-[18rem] lg:min-h-[20rem] lg:pt-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={expertiseIndex}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.3, ease: smoothEase }}
                      className="flex flex-col items-center px-1"
                    >
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 shadow-sm">
                        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6v12m6-6H6" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 16.5v-9Z" />
                        </svg>
                      </div>
                      <span className={`${aboutLabelUpper} mb-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 tracking-[0.18em]`}>
                        Core capability {String(expertiseIndex + 1).padStart(2, "0")}
                      </span>
                      <h4 className={`${aboutH3}`}>{expertiseSlides[expertiseIndex].title}</h4>
                      <p className={`mt-4 max-w-[32rem] ${aboutLead}`}>
                        {expertiseSlides[expertiseIndex].text}
                      </p>
                      <div className="mt-7 flex flex-wrap justify-center gap-2">
                        {["Enterprise scale", "Audit-ready", "Integrated delivery"].map((label) => (
                          <span key={label} className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-xs font-semibold text-blue-700">
                            {label}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute inset-x-0 bottom-7 flex items-center justify-center">
                  <div className="flex rounded-full border border-slate-200 bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
                    {expertiseSlides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setExpertiseIndex(i)}
                        className={`mx-1 h-2.5 rounded-full transition-all ${
                          i === expertiseIndex ? "w-7 bg-[color:var(--inops-blue)]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setExpertiseIndex((prev) => (prev === 0 ? expertiseSlides.length - 1 : prev - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 active:scale-95"
                    aria-label="Previous expertise slide"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setExpertiseIndex((prev) => (prev === expertiseSlides.length - 1 ? 0 : prev + 1))
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 active:scale-95"
                    aria-label="Next expertise slide"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About FAQ */}
        <section
          className={`relative border-t border-slate-200/80 ${aboutSectionBg} py-10 lg:py-14`}
          aria-labelledby="about-faq-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-12">
            <div>
              <h2
                id="about-faq-heading"
                className={`${aboutH2} mt-3`}
              >
                Frequently asked questions
              </h2>
              <p className={`${aboutLead} mt-3`}>
                Entity facts, founding story, and coverage details about InOps IT Solutions.
              </p>
            </div>

            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white/80 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.28)]">
              {[
                {
                  question: "Who founded InOps and when?",
                  answer:
                    "InOps IT Solutions was founded in 2014 by Satish Sinha in Bengaluru, Karnataka. The company began as an enterprise IT and product-services firm before specialising in biometric access, Contract Labour Management Systems (CLMS), and CLRA statutory compliance for Indian manufacturing.",
                },
                {
                  question: "Where is InOps headquartered?",
                  answer:
                    "InOps IT Solutions is headquartered in Bommasandra Industrial Area, Bengaluru, Karnataka — at the heart of South India's manufacturing corridor. The team deploys and supports on-site installations across plants in multiple states.",
                },
                {
                  question: "Which industries does InOps serve?",
                  answer:
                    "InOps serves Indian manufacturing (automotive, electronics, pharma, FMCG), defence and aerospace, logistics and warehousing, and large-scale infrastructure projects. The platform is purpose-built for industrial sites with contract and multi-vendor workforces subject to CLRA compliance requirements.",
                },
                {
                  question: "How many devices and plants does InOps manage?",
                  answer:
                    "As of 2026, InOps manages over 3,000 hardware devices — biometric readers, CCTV-based attendance cameras, access controllers, and kiosk terminals — across 75+ plant locations operated by 25+ enterprise clients, with over 1 lakh (100,000) verified workers on the platform.",
                },
                {
                  question: "Is InOps compliant with Indian labour laws?",
                  answer:
                    "Yes. InOps is designed around the Contract Labour (Regulation and Abolition) Act, 1970 (CLRA), the Employees' Provident Fund Act, the ESI Act, and state-specific labour regulations. The platform auto-generates Form XIII, Form XIV, and muster rolls, and flags contractor licence renewals and PF/ESI due dates so clients stay audit-ready.",
                },
              ].map((item) => (
                <details key={item.question} className="group p-5 open:bg-white/95 sm:p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold text-slate-950 marker:hidden">
                    <span>{item.question}</span>
                    <span
                      className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition group-open:rotate-45 group-open:text-blue-700"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className={`mt-3 pr-10 ${aboutLead}`}>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Professional solutions CTA block (same as home section)
        <section className="relative overflow-hidden border-t border-gray-100">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.035 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1800&q=85"
              alt="Worker at access control"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/40" />
          </motion.div>

          <div className="relative mx-auto flex min-h-[min(72vh,38rem)] max-w-7xl flex-col items-center justify-center px-6 py-10 text-center text-white lg:px-12">
            <motion.div
              className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.6)] backdrop-blur-md sm:px-10 sm:py-12"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="text-sm tracking-wide text-white/75"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              >
                We are always ahead
              </motion.span>

              <motion.h2
                className="mt-3 text-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                Professional solutions for your business.
              </motion.h2>

              <motion.p
                className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-white/75 sm:text-base"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
              >
                We provide premium customer support and affordable programs to roll out CLMS, attendance, and access, site by site, at your pace.
              </motion.p>

              <motion.div
                className="mx-auto mt-6 flex gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.22 }}
              >
                <div className="h-1 w-10 rounded-full bg-emerald-400" />
              </motion.div>

              <motion.div
                className="mt-10 flex flex-wrap items-center justify-center gap-3"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
              >
                <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-2.5 text-sm text-white shadow-md transition hover:bg-blue-600"
                  >
                    Start A Project
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:08027745220"
                  className="inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                  aria-label="Call us"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Call Us: 08027745220
                </motion.a>
                <span className="text-xs text-white/70">For any question</span>
              </motion.div>

              <motion.div
                className="mt-10 grid w-full grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-0"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
              >
                <div className="sm:px-8">
                  <div className="text-5xl font-bold tracking-tight text-white drop-shadow">856</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/70">Satisfied Clients</div>
                  <div className="mt-1 text-xs text-white/55">Merits-leading experience</div>
                </div>
                <div className="relative sm:px-8">
                  <div className="pointer-events-none absolute inset-y-2 -left-px hidden w-px bg-white/12 sm:block" aria-hidden />
                  <div className="pointer-events-none absolute inset-y-2 -right-px hidden w-px bg-white/12 sm:block" aria-hidden />
                  <div className="text-5xl font-bold tracking-tight text-white drop-shadow">238</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/70">Successful Investments</div>
                  <div className="mt-1 text-xs text-white/55">Merits-leading experience</div>
                </div>
                <div className="sm:px-8">
                  <div className="text-5xl font-bold tracking-tight text-white drop-shadow">341</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/70">Satisfied Clients</div>
                  <div className="mt-1 text-xs text-white/55">Merits-leading experience</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section> */}
      </div>
    </>
  );
}
