"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FlyInText } from "@/app/components/FlyInText";
import TrustStripMetric from "@/app/components/TrustStripMetric";
import SolutionModulePanel from "@/app/components/SolutionModulePanel";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";
import VideoLivePopups from "@/app/components/VideoLivePopups";
import SolutionHeroWaveDecor from "@/app/components/SolutionHeroWaveDecor";
import { ThroughputMetricCard } from "@/app/components/ThroughputMetricCard";
import {
  SPLIT_HERO_COPY_ML,
  SPLIT_HERO_MEDIA_MR,
  SPLIT_HERO_MOBILE_COPY_ORDER,
  SPLIT_HERO_MOBILE_MEDIA_ORDER,
  SPLIT_HERO_MOBILE_STACK,
} from "@/app/lib/splitHeroWideInsets";
import { mediaVideos } from "@/app/lib/mediaAssets";

const timeAttendanceProductImage = "/WhatsApp Image 2026-04-27 at 3.53.36 PM.jpeg";

const timeAttendanceProductVideo = mediaVideos.timeAttendanceProduct;
const cctvSolutionImage =
  "/Gemini_Generated_Image_mqj0sxmqj0sxmqj0.png";
const cctvSolutionVideo = mediaVideos.opticamSolutionDemo;

const authAccessGalleryImages = [
  {
    src: "/images/biometric-attendance-system.jpg",
    alt: "Wall-mounted biometric attendance terminal with keypad and display",
    width: 900,
    height: 600,
  },
  {
    src: "/images/434829.png",
    alt: "Industrial access control and gate hardware",
    width: 900,
    height: 600,
  },
  {
    src: "/images/Face-Recognition-Temperature-Terminal-RFID-IC-Card-Reader-Flap-Turnstile-Gate-Access-Control-Face-Recognition-Camera.avif",
    alt: "Face recognition terminal with flap turnstile gate and RFID access",
    width: 900,
    height: 600,
  },
] as const;

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const benefits = [
  { label: "Streamline Payroll", color: "bg-blue-500", icon: "payroll" },
  { label: "It Averts Lawsuits", color: "bg-pink-500", icon: "law" },
  { label: "Precise Time Tracking", color: "bg-amber-500", icon: "clock" },
  { label: "Lessen Paper Usage", color: "bg-yellow-500", icon: "docs" },
  { label: "Prevention of Tax Issues", color: "bg-emerald-500", icon: "tax" },
  { label: "Boosts Employee Satisfaction", color: "bg-blue-500", icon: "satisfaction" },
];

const featuresAndBenefits = [
  {
    title: "Biometric Recognition",
    circleColor: "bg-amber-500",
    description: "Our device utilizes advanced biometric recognition technology, such as fingerprint scanning or facial recognition, ensuring precise identification of employees.",
    sub: { title: "Improved Accuracy", text: "By eliminating manual entry and relying on biometric authentication, our device ensures accurate attendance records, reducing errors and fraud." },
  },
  {
    title: "Cloud-Based System",
    circleColor: "bg-pink-500",
    description: "Enjoy the flexibility of accessing attendance data from anywhere via a secure cloud-based system, facilitating remote workforce management.",
    sub: { title: "Cost Savings", text: "Efficient workforce management leads to cost savings by reducing payroll errors, eliminating buddy punching, and optimizing staffing levels based on actual attendance data." },
  },
  {
    title: "Integration Compatibility",
    circleColor: "bg-yellow-500",
    description: "Seamlessly integrate our device with existing HR and payroll systems, eliminating data duplication and streamlining administrative processes.",
    sub: { title: "Employee Accountability", text: "Encourage accountability among employees with transparent attendance tracking, fostering a culture of punctuality and responsibility within the organization." },
  },
  {
    title: "Shift Scheduling",
    circleColor: "bg-teal-500",
    description: "Simplify shift scheduling and optimize workforce allocation by creating customizable schedules based on employee availability and business requirements.",
    sub: { title: "Flexible Remote Management", text: "With cloud-based accessibility, manage workforce attendance remotely, allowing for efficient monitoring and intervention regardless of location." },
  },
  {
    title: "Real-time Monitoring",
    circleColor: "bg-emerald-500",
    description: "Gain real-time insights into employee attendance with instant updates and notifications, allowing managers to address attendance issues promptly.",
    sub: { title: "Enhanced Productivity", text: "Streamlined attendance tracking minimizes time spent on administrative tasks, allowing employees to focus on their core responsibilities, thus increasing overall productivity." },
  },
  {
    title: "Customizable Reporting",
    circleColor: "bg-blue-400",
    description: "Generate detailed reports tailored to your business needs, including attendance summaries, late arrivals, and absenteeism patterns, for informed decision-making.",
    sub: { title: "Compliance Assurance", text: "Stay compliant with labor regulations and policies effortlessly as our device provides thorough documentation of attendance records for audits and compliance purposes." },
  },
  {
    title: "Geolocation Tracking",
    circleColor: "bg-blue-500",
    description: "Ensure attendance accuracy by incorporating geolocation tracking, preventing unauthorized clock-ins and enhancing security measures.",
    sub: { title: "Time Savings", text: "Automated attendance tracking saves valuable time for HR personnel and managers, enabling them to allocate resources more effectively towards strategic initiatives." },
  },
  {
    title: "User-Friendly Interface",
    circleColor: "bg-blue-700",
    description: "Our device features an intuitive and user-friendly interface, making it easy for employees to clock in/out and for administrators to manage attendance records efficiently.",
    sub: { title: "Scalability", text: "Our solution scales with your business, accommodating growth and evolving needs without compromising efficiency or performance." },
  },
];

const powerfulServices = [
  { title: "Integrated Applications For Enterprise", icon: "document", color: "bg-rose-500" },
  { title: "Access Control System", icon: "card", color: "bg-rose-500" },
  { title: "Canteen Management System", icon: "tray", color: "bg-rose-500" },
  { title: "Biometric Attendance System", icon: "id", color: "bg-blue-500" },
  { title: "Visitor Management System", icon: "person", color: "bg-blue-500" },
  { title: "Contract Management System", icon: "document-pen", color: "bg-blue-500" },
];

const cctvSurveillanceFaqItems = [
  {
    question: "What is a CCTV-based attendance system?",
    answer:
      "A CCTV attendance system uses AI face recognition on existing camera feeds to mark attendance as workers walk through gates — no terminal, no queue, no contact. For industrial sites it removes the throughput bottleneck at shift change, when hundreds of workers arrive in minutes.",
  },
  {
    question: "Can we use our existing CCTV cameras?",
    answer:
      "In most cases yes — cameras are integrated over standard ONVIF/RTSP feeds. What matters is placement, resolution, and lighting at the capture point rather than brand; a site survey confirms which existing cameras qualify and where additions are needed.",
  },
  {
    question: "How accurate is camera-based attendance in factory conditions?",
    answer: (
      <>
        Accuracy depends on camera angle, lighting, and distance — dust, backlight, and helmets all affect it. InOps publishes real deployment data in its{" "}
        <Link 
          href="/face-recognition-attendance" 
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          biometric attendance
        </Link>{" "}
        rather than quoting lab figures, and recommends terminals rather than cameras where conditions can't support reliable capture.
      </>
    ),
  },
  {
    question: "Does CCTV attendance work for contract workers and contractor billing?",
    answer: (
      <>
        Yes — this is its main industrial use. Camera-captured attendance carries contractor mapping, so verified headcount and hours reconcile against contractor invoices in{" "}
        <Link 
          href="/contract-labour-management" 
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          contract labour management
        </Link>
        , and OT is computed from actual capture times rather than contractor-reported rosters.
      </>
    ),
  },
  {
    question: "Is camera attendance valid for CLRA registers and statutory records?",
    answer:
      "Yes. Each capture is a timestamped identity event that feeds the same attendance and register engine as terminal-based reads, so Form V/XIII registers and statutory reports are generated from it identically.",
  },
  {
    question: "How does it prevent proxy attendance?",
    answer:
      "Attendance is bound to the worker's face, not a card or PIN, so it cannot be handed to a colleague. Capture happens in natural movement through the gate, which also removes the incentive to cluster and punch for absent workers.",
  },
  {
    question: "Can it run alongside face terminals and fingerprint readers?",
    answer: (
      <>
        Yes. Camera, terminal, fingerprint, and mobile capture all feed one identity engine — a worker enrolled once is recognised by any method, so sites typically use cameras for high-flow gates,{" "}
        <Link
          href="/face-recognition-attendance"
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          face recognition terminals
        </Link>
        , or{" "}
        <Link
          href="/biometric-devices"
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          fingerprint readers
        </Link>{" "}
        where enforcement must be physical.
      </>
    ),
  },
  {
    question: "What about worker consent and biometric data protection?",
    answer:
      "Consent is captured digitally at enrollment in the worker's language before any template is created. Templates are access-controlled with configurable retention, and handling aligns with DPDP Act obligations.",
  },
  {
    question: "Can a worker be blocked at the gate through camera attendance?",
    answer: (
      <>
        Camera capture identifies; enforcement needs a physical barrier. Where blocking is required, cameras pair with{" "}
        <Link 
          href="/turnstiles-access" 
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          turnstiles and gate compliance rules
        </Link>{" "}
        so a worker failing induction, medical, or licence checks doesn't get through.
      </>
    ),
  },
  {
    question: "How long does deployment take?",
    answer:
      "Software configuration on existing, suitable cameras is fast; realistic timelines depend on the site survey, network access to camera feeds, and enrollment of the workforce. Enrollment volume, not software, is usually the critical path.",
  },
] as const;

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ServiceIcon({ icon, className }: { icon: string; className?: string }) {
  const c = "h-6 w-6";
  return (
    <span className={className}>
      {icon === "document" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
      {icon === "card" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
      {icon === "tray" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
      {icon === "id" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>}
      {icon === "person" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
      {icon === "document-pen" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
    </span>
  );
}

function DeploymentCycleIcon({ name, className }: { name: "monitor" | "enroll" | "ai" | "log" | "sync"; className?: string }) {
  const stroke = "currentColor";
  const teal = "#20c6c3";
  const c = className ?? "h-8 w-8";

  if (name === "monitor") {
    return (
      <svg className={c} viewBox="0 0 64 64" fill="none" aria-hidden>
        <rect x="10" y="14" width="44" height="30" rx="3.5" stroke={stroke} strokeWidth="4" />
        <path d="M24 52h16" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        <path d="M32 44v8" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        <path d="M20 20c0 0 7-10 16-10s16 10 16 10" stroke={teal} strokeWidth="6" strokeLinecap="round" opacity="0.9" />
        <path d="M22 38c0 0 4 6 10 6" stroke={teal} strokeWidth="6" strokeLinecap="round" opacity="0.9" />
      </svg>
    );
  }

  if (name === "enroll") {
    return (
      <svg className={c} viewBox="0 0 64 64" fill="none" aria-hidden>
        <circle cx="28" cy="28" r="16" stroke={stroke} strokeWidth="4" />
        <path d="M40 40l10 10" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        <path d="M18 36v-8h5v8h6v-14h5v14h6v-10h5v10" stroke={teal} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
      </svg>
    );
  }

  if (name === "ai") {
    return (
      <svg className={c} viewBox="0 0 64 64" fill="none" aria-hidden>
        <rect x="20" y="22" width="24" height="20" rx="6" stroke={stroke} strokeWidth="4" />
        <path d="M32 18v4M32 42v4M16 32h4M44 32h4" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        <path d="M24 32h16" stroke={teal} strokeWidth="6" strokeLinecap="round" opacity="0.95" />
        <path d="M22 14l6 6M42 14l-6 6M22 50l6-6M42 50l-6-6" stroke={teal} strokeWidth="6" strokeLinecap="round" opacity="0.65" />
      </svg>
    );
  }

  if (name === "log") {
    return (
      <svg className={c} viewBox="0 0 64 64" fill="none" aria-hidden>
        <ellipse cx="32" cy="18" rx="18" ry="8" stroke={stroke} strokeWidth="4" />
        <path d="M14 18v18c0 4.4 8.1 8 18 8s18-3.6 18-8V18" stroke={stroke} strokeWidth="4" />
        <path d="M14 28c0 4.4 8.1 8 18 8s18-3.6 18-8" stroke={teal} strokeWidth="6" strokeLinecap="round" opacity="0.85" />
        <path d="M14 38c0 4.4 8.1 8 18 8s18-3.6 18-8" stroke={teal} strokeWidth="6" strokeLinecap="round" opacity="0.55" />
      </svg>
    );
  }

  return (
    <svg className={c} viewBox="0 0 64 64" fill="none" aria-hidden>
      <circle cx="32" cy="32" r="22" stroke={stroke} strokeWidth="4" />
      <path d="M22 33l6 6 14-16" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 20c2 2 4 6 4 12" stroke={teal} strokeWidth="6" strokeLinecap="round" opacity="0.9" />
    </svg>
  );
}

function ComparisonRowIcon({ name, className }: { name: string; className?: string }) {
  const c = className ?? "h-5 w-5";
  const common = {
    className: c,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "wallet":
      return (
        <svg {...common}>
          <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h11A2.5 2.5 0 0 1 19 7.5V8H5.5A2.5 2.5 0 0 1 3 5.5" />
          <rect x="3" y="8" width="18" height="11" rx="2.5" />
          <path d="M16 13.5h2.5" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common}>
          <path d="M5 15c-1 3 0 5 0 5s2 1 5 0" />
          <path d="M14.5 4.5c4 0 5 1 5 5 0 5-4 8-7 9l-3-3c1-3 4-7 9-7Z" />
          <circle cx="14" cy="10" r="1.5" />
          <path d="M9.5 14.5l-2.5 2.5" />
        </svg>
      );
    case "smile":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 14c.7 1 1.8 1.5 3 1.5s2.3-.5 3-1.5" />
          <path d="M9 9.5h.01" />
          <path d="M15 9.5h.01" />
        </svg>
      );
    case "infinity":
      return (
        <svg {...common}>
          <path d="M6.5 8c-2.5 0-4 1.8-4 4s1.5 4 4 4c2 0 3-1.5 5.5-4s3.5-4 5.5-4c2.5 0 4 1.8 4 4s-1.5 4-4 4c-2 0-3-1.5-5.5-4s-3.5-4-5.5-4Z" />
        </svg>
      );
    default:
      return null;
  }
}

const comparisonRows = [
  {
    feature: "Setup Cost",
    icon: "wallet",
    traditional: "₹5,000+ per dedicated terminal",
    opticam: "₹0 (Existing CCTV Hardware)",
    highlight: "Reuse CCTV",
  },
  {
    feature: "Deployment Speed",
    icon: "rocket",
    traditional: "2–4 Weeks (Wiring & Installation)",
    opticam: "48 Hours (Software Config)",
    highlight: "10× faster",
  },
  {
    feature: "User Experience",
    icon: "smile",
    traditional: "Queues & Physical Contact",
    opticam: "Zero Contact · Natural Walk-through",
    highlight: "Touchless",
  },
  {
    feature: "Scalability",
    icon: "infinity",
    traditional: "Linear Cost per Location",
    opticam: "Unlimited Camera Feeds",
    highlight: "Multi-site ready",
  },
] as const;

const trustStripMetrics = [
  { value: "45%", label: "Lower hardware TCO" },
  { value: "100%", label: "Buddy-punch reduction" },
  { value: "DPDP", label: "Data privacy aligned" },
  { value: "70+", label: "Sites live on InOps" },
] as const;

export default function TimeAndAttendancePage() {
  return (
    <>
      <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
        <motion.section
          className="relative w-full border-b border-slate-200/80 bg-white pt-8 sm:pt-10 lg:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <div className="relative w-full overflow-hidden">
            <div className={`relative min-h-[340px] w-full bg-white sm:min-h-[390px] lg:min-h-[430px] ${SPLIT_HERO_MOBILE_STACK}`}>
              <SolutionHeroWaveDecor className="z-[1]" />
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
                  poster={timeAttendanceProductImage}
                  aria-label="CCTV-based attendance and computer vision monitoring on site"
                >
                  <source src={timeAttendanceProductVideo} type="video/mp4" />
                </video>
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent lg:block"
                  aria-hidden
                />
                <VideoLivePopups
                  popups={[
                    {
                      position: "top-right",
                      label: "Live",
                      title: "CCTV stream active",
                      accent: "emerald",
                      className: "!top-0 sm:!top-0 lg:!-top-2 sm:-translate-x-20 lg:-translate-x-28",
                    },
                    {
                      position: "bottom-right",
                      label: "Detected",
                      title: "Face matched",
                      className: "!bottom-3 !right-2 sm:!bottom-5 sm:!right-4 lg:!bottom-10 lg:!right-0",
                      variant: "icon",
                      icon: "scan",
                      accent: "blue",
                    },
                  ]}
                />
              </div>
              <div className={`relative z-10 mx-auto max-w-7xl px-6 lg:px-12 ${SPLIT_HERO_MOBILE_COPY_ORDER}`}>
                <div
                  className={`max-w-3xl px-2 py-8 sm:px-4 sm:py-10 lg:max-w-xl lg:py-16 lg:pr-6 ${SPLIT_HERO_COPY_ML}`}
                >
                  <FlyInText
                    as="span"
                    trigger="mount"
                    direction="down"
                    delay={0}
                    duration={0.55}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                    CCTV Attendance
                  </FlyInText>
                  <FlyInText
                    as="h1"
                    trigger="mount"
                    direction="left"
                    delay={0.08}
                    duration={0.68}
                    className="home-display-heading inops-type-hero mt-4 text-slate-900 sm:mt-5"
                  >
                    CCTV Attendance System Using Your Existing Cameras
                  </FlyInText>
                  <FlyInText
                    as="p"
                    trigger="mount"
                    direction="up"
                    delay={0.16}
                    duration={0.62}
                    className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base"
                  >
                    Turn your existing CCTV infrastructure into a real-time, hardware-free attendance system — powered by AI. No queues, no contact, no excuses.
                  </FlyInText>
                  <FlyInText
                    as="div"
                    trigger="mount"
                    direction="up"
                    delay={0.24}
                    duration={0.58}
                    className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/30"
                    >
                      Book a Demo
                    </Link>
                    <Link
                      href="#cctv-how-it-works"
                      className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-7 py-3 text-sm font-semibold text-blue-800 shadow-sm transition hover:bg-blue-50"
                    >
                      See How It Works
                    </Link>
                  </FlyInText>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="border-b border-slate-200 bg-white !mt-0 py-5 sm:py-7 lg:py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-8 lg:gap-x-16 lg:gap-y-8">
              {trustStripMetrics.map((m, i) => (
                <TrustStripMetric key={m.label} value={m.value} label={m.label} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-slate-200/70 bg-white !mt-0 pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-8 lg:pb-14">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-[0.35]" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="max-w-3xl">
              <FlyInText as="h2" direction="up" duration={0.65} className="text-slate-900 mt-10">
                The Hidden Cost of Traditional Biometrics
              </FlyInText>
              <FlyInText as="p" direction="up" delay={0.06} duration={0.6} className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-xl">
                Legacy hardware systems are failing modern enterprises with hidden costs and systemic inefficiencies.
              </FlyInText>
            </div>

            <div className="relative mt-10">
              <div
                className="pointer-events-none absolute left-[8%] right-[8%] top-8 hidden h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent md:block xl:left-[10%] xl:right-[10%]"
                aria-hidden
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4 xl:gap-5">
                {[
                  {
                    title: "Endless Queues",
                    description:
                      "Employees spend average 8 minutes daily waiting at biometric checkpoints during peak hours.",
                    icon: "clock" as const,
                    chip: "Throughput",
                    metric: "~8 min",
                    accentBar: "from-rose-500 via-orange-400 to-amber-300",
                    borderGradient: "from-rose-600 via-orange-500 to-amber-500",
                    iconWrap:
                      "bg-gradient-to-br from-rose-500 via-orange-500 to-amber-600 text-white shadow-[0_10px_28px_-10px_rgba(244,63,94,0.45)] ring-1 ring-white/25",
                    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(244,63,94,0.35)]",
                  },
                  {
                    title: "Buddy Punching",
                    description:
                      "Time theft through shared cards or fingerprints costs businesses up to 2% of annual payroll.",
                    icon: "users" as const,
                    chip: "Payroll risk",
                    metric: "Up to 2%",
                    accentBar: "from-violet-500 via-fuchsia-500 to-pink-400",
                    borderGradient: "from-violet-600 via-fuchsia-500 to-pink-500",
                    iconWrap:
                      "bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-600 text-white shadow-[0_10px_28px_-10px_rgba(139,92,246,0.45)] ring-1 ring-white/25",
                    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(139,92,246,0.35)]",
                  },
                  {
                    title: "High Capex",
                    description:
                      "Proprietary hardware devices require frequent maintenance, licenses, and replacement.",
                    icon: "briefcase" as const,
                    chip: "Cost stack",
                    metric: "Capex + Opex",
                    accentBar: "from-amber-500 via-orange-500 to-red-400",
                    borderGradient: "from-amber-600 via-orange-500 to-red-500",
                    iconWrap:
                      "bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 text-white shadow-[0_10px_28px_-10px_rgba(245,158,11,0.45)] ring-1 ring-white/25",
                    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(245,158,11,0.38)]",
                  },
                  {
                    title: "Data Gaps",
                    description:
                      "Multi-location enterprises struggle with fragmented data and delayed sync between sites.",
                    icon: "globe" as const,
                    chip: "Visibility",
                    metric: "Delayed sync",
                    accentBar: "from-sky-500 via-cyan-400 to-teal-400",
                    borderGradient: "from-sky-600 via-cyan-500 to-teal-600",
                    iconWrap:
                      "bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-600 text-white shadow-[0_10px_28px_-10px_rgba(14,165,233,0.45)] ring-1 ring-white/25",
                    hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(14,165,233,0.35)]",
                  },
                ].map((item, i) => (
                  <ThroughputMetricCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    chip={item.chip}
                    metric={item.metric}
                    accentBar={item.accentBar}
                    borderGradient={item.borderGradient}
                    iconWrap={item.iconWrap}
                    hoverGlow={item.hoverGlow}
                    index={i}
                    cta={{ href: "/contact", label: "Explore module" }}
                    icon={
                      item.icon === "clock" ? (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                      ) : item.icon === "users" ? (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                          <circle cx="9" cy="8" r="3" />
                          <circle cx="17" cy="9" r="2" />
                          <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
                          <path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" />
                        </svg>
                      ) : item.icon === "briefcase" ? (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                          <rect x="3" y="7" width="18" height="12" rx="2" />
                          <path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
                        </svg>
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cctv-how-it-works" className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 py-10 lg:py-16">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-[0.25]" aria-hidden />
          <div
            className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/15 via-sky-400/10 to-transparent blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/15 via-emerald-300/10 to-transparent blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <motion.div
                className="relative order-2 lg:order-1"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <div className="relative aspect-[16/10] mt-25 w-full overflow-visible rounded-3xl border border-slate-200/90 bg-white shadow-[0_30px_70px_-32px_rgba(15,23,42,0.32)]">
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <video
                      className="absolute inset-0 h-full w-full object-contain"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={cctvSolutionImage}
                      aria-label="InOps camera-based attendance dashboard"
                    >
                      <source src={cctvSolutionVideo} type="video/mp4" />
                    </video>
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/40" aria-hidden />
                  </div>

                  <VideoLivePopups
                    popups={[
                      {
                        position: "top-left",
                        label: "Live",
                        title: "Detection running",
                        accent: "emerald",
                        className: "sm:!-top-10 sm:!-left-8 lg:top-10 lg:-left-6",
                      },
                      {
                        position: "bottom-right",
                        label: "Match accuracy",
                        title: "99.6% on enrolled staff",
                        variant: "icon",
                        icon: "check",
                        accent: "emerald",
                        className: "sm:!-bottom-12 sm:!-right-4 lg:!-bottom-10 lg:!-right-6",
                        delay: 0.32,
                      },
                    ]}
                  />
                </div>
              </motion.div>

              <div className="order-1 lg:order-2">
                <FlyInText
                  as="span"
                  direction="up"
                  duration={0.55}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden />
                  Our solution
                </FlyInText>

                <FlyInText
                  as="h2"
                  direction="right"
                  duration={0.68}
                  delay={0.06}
                  className="mt-4 text-slate-900"
                >
                  The OptiCam Solution:{" "}
                  <span className="text-blue-800">AI-Powered CCTV Attendance</span>
                </FlyInText>

                <FlyInText
                  as="p"
                  direction="up"
                  delay={0.1}
                  duration={0.6}
                  className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg"
                >
                  A computer-vision platform that turns the cameras you already own into a touchless, accurate, and instantly scalable workforce identity layer.
                </FlyInText>

                <div className="mt-7 space-y-5">
                  {[
                    {
                      title: "Existing IP Cameras",
                      description:
                        "No new hardware required. InOps integrates directly with your existing CCTV network via ONVIF/RTSP.",
                      icon: "camera" as const,
                      iconWrap: "bg-blue-50 text-blue-600",
                    },
                    {
                      title: "Real-Time Detection",
                      description:
                        "AI detects faces as they walk through entrances. No stopping, no touching, just natural movement.",
                      icon: "bolt" as const,
                      iconWrap: "bg-amber-50 text-amber-600",
                    },
                    {
                      title: "Centralized Control",
                      description:
                        "Manage attendance across 100+ locations from a single cloud-based dashboard with instant HRMS sync.",
                      icon: "grid" as const,
                      iconWrap: "bg-emerald-50 text-emerald-600",
                    },
                  ].map((item, bi) => (
                    <motion.div
                      key={item.title}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.45, ease: smoothEase, delay: bi * 0.07 }}
                    >
                      <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.iconWrap}`}>
                        {item.icon === "camera" && (
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d="M4 7h4l2-2h4l2 2h4v12H4z" />
                            <circle cx="12" cy="13" r="3" />
                          </svg>
                        )}
                        {item.icon === "bolt" && (
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                          </svg>
                        )}
                        {item.icon === "grid" && (
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <rect x="4" y="4" width="6" height="6" />
                            <rect x="14" y="4" width="6" height="6" />
                            <rect x="4" y="14" width="6" height="6" />
                            <rect x="14" y="14" width="6" height="6" />
                          </svg>
                        )}
                      </span>

                      <div className="min-w-0 flex-1">
                        <FlyInText
                          as="h3"
                          direction="left"
                          delay={bi * 0.06}
                          duration={0.55}
                          className="text-base font-bold tracking-tight text-slate-900 sm:text-lg"
                        >
                          {item.title}
                        </FlyInText>
                        <FlyInText
                          as="p"
                          direction="up"
                          delay={bi * 0.06 + 0.05}
                          duration={0.55}
                          className="mt-1.5 text-sm leading-relaxed text-slate-600"
                        >
                          {item.description}
                        </FlyInText>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-white via-slate-50/40 to-white py-8 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-[0.3]" aria-hidden />
          <div
            className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/15 via-sky-400/10 to-transparent blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-400/15 via-emerald-300/10 to-transparent blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <FlyInText
                as="span"
                direction="up"
                duration={0.55}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-cyan-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" aria-hidden />
                How it deploys
              </FlyInText>
              <FlyInText as="h2" direction="up" duration={0.65} delay={0.06} className="mt-4 text-slate-900">
                Seamless <span className="text-blue-800">Deployment Cycle</span>
              </FlyInText>
              <FlyInText as="p" direction="up" delay={0.1} duration={0.6} className="mt-3 text-base text-slate-600 sm:text-lg">
                Go from zero to fully automated attendance in less than{" "}
                <span className="font-semibold text-blue-800">48 hours</span>.
              </FlyInText>
            </div>

            <div className="relative mt-8">
              <div
                className="pointer-events-none absolute left-[8%] right-[8%] top-[80px] hidden h-[3px] rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-cyan-500/0 xl:block"
                aria-hidden
              />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
                {[
                  {
                    step: "01",
                    title: "Connect Cameras",
                    description: "Connect your RTSP camera feeds to the InOps attendance engine.",
                    icon: "monitor" as const,
                    accentText: "text-blue-600",
                    accentRing: "ring-blue-500/20",
                    accentBg: "bg-blue-50",
                    accentBar: "from-blue-500 to-sky-400",
                    accentHover:
                      "group-hover:border-blue-500 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-sky-500 group-hover:text-white",
                    cardHover: "hover:shadow-[0_24px_56px_-28px_rgba(37,99,235,0.45)]",
                    nodeBg: "bg-blue-500",
                  },
                  {
                    step: "02",
                    title: "Enroll Staff",
                    description: "Bulk upload employee photos or sync with existing HR records.",
                    icon: "users" as const,
                    accentText: "text-violet-600",
                    accentRing: "ring-violet-500/20",
                    accentBg: "bg-violet-50",
                    accentBar: "from-violet-500 to-fuchsia-500",
                    accentHover:
                      "group-hover:border-violet-500 group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-fuchsia-500 group-hover:text-white",
                    cardHover: "hover:shadow-[0_24px_56px_-28px_rgba(139,92,246,0.45)]",
                    nodeBg: "bg-violet-500",
                  },
                  {
                    step: "03",
                    title: "AI Detection",
                    description: "Edge-compute nodes identify faces with sub-second latency.",
                    icon: "chip" as const,
                    accentText: "text-amber-600",
                    accentRing: "ring-amber-500/20",
                    accentBg: "bg-amber-50",
                    accentBar: "from-amber-500 to-orange-500",
                    accentHover:
                      "group-hover:border-amber-500 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white",
                    cardHover: "hover:shadow-[0_24px_56px_-28px_rgba(245,158,11,0.45)]",
                    nodeBg: "bg-amber-500",
                  },
                  {
                    step: "04",
                    title: "Log Attendance",
                    description: "Encrypted logs are generated automatically for each entry.",
                    icon: "database" as const,
                    accentText: "text-emerald-600",
                    accentRing: "ring-emerald-500/20",
                    accentBg: "bg-emerald-50",
                    accentBar: "from-emerald-500 to-teal-500",
                    accentHover:
                      "group-hover:border-emerald-500 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-teal-500 group-hover:text-white",
                    cardHover: "hover:shadow-[0_24px_56px_-28px_rgba(16,185,129,0.45)]",
                    nodeBg: "bg-emerald-500",
                  },
                  {
                    step: "05",
                    title: "HRMS Sync",
                    description: "Data is pushed to SAP, Workday, or your custom ERP system.",
                    icon: "check" as const,
                    accentText: "text-cyan-600",
                    accentRing: "ring-cyan-500/20",
                    accentBg: "bg-cyan-50",
                    accentBar: "from-cyan-500 to-blue-500",
                    accentHover:
                      "group-hover:border-cyan-500 group-hover:bg-gradient-to-br group-hover:from-cyan-600 group-hover:to-blue-500 group-hover:text-white",
                    cardHover: "hover:shadow-[0_24px_56px_-28px_rgba(6,182,212,0.45)]",
                    nodeBg: "bg-cyan-500",
                  },
                ].map((item, i) => (
                  <motion.article
                    key={item.title}
                    className={`group relative flex h-full flex-col rounded-3xl border border-slate-200/90 bg-white p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.22)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300/90 ${item.cardHover}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.45, ease: smoothEase, delay: i * 0.06 }}
                  >
                    <span
                      className={`pointer-events-none absolute right-4 top-3 text-3xl font-black leading-none tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-slate-200`}
                      aria-hidden
                    >
                      {item.step}
                    </span>

                    <span
                      className={`pointer-events-none absolute left-1/2 top-[80px] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${item.nodeBg} ring-4 ring-white xl:block`}
                      aria-hidden
                    />

                    <div className="relative flex flex-1 flex-col items-center text-center">
                      <span
                        className={`inline-flex h-5 items-center justify-center rounded-full bg-gradient-to-br ${item.accentBar} px-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-sm`}
                      >
                        Step {item.step}
                      </span>

                      <div
                        className={`mt-3.5 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 ${item.accentBg} ${item.accentText} shadow-sm transition-all duration-300 ${item.accentHover}`}
                      >
                        {item.icon === "monitor" && <DeploymentCycleIcon name="monitor" className="h-7 w-7" />}
                        {item.icon === "users" && <DeploymentCycleIcon name="enroll" className="h-7 w-7" />}
                        {item.icon === "chip" && <DeploymentCycleIcon name="ai" className="h-7 w-7" />}
                        {item.icon === "database" && <DeploymentCycleIcon name="log" className="h-7 w-7" />}
                        {item.icon === "check" && <DeploymentCycleIcon name="sync" className="h-7 w-7" />}
                      </div>

                      <FlyInText
                        as="h3"
                        direction="up"
                        delay={i * 0.05}
                        duration={0.55}
                        className="mt-3.5 text-base font-bold leading-snug tracking-tight text-slate-900 sm:text-lg"
                      >
                        {item.title}
                      </FlyInText>

                      <FlyInText
                        as="p"
                        direction="up"
                        delay={i * 0.05 + 0.04}
                        duration={0.52}
                        className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600"
                      >
                        {item.description}
                      </FlyInText>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* <FlyInText
              as="div"
              direction="up"
              duration={0.6}
              delay={0.1}
              className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl border border-slate-200/80 bg-white/80 px-6 py-4 text-sm text-slate-600 shadow-sm backdrop-blur"
            >
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                  </svg>
                </span>
                <span>
                  Total go-live: <span className="font-semibold text-slate-900">≤ 48 hours</span>
                </span>
              </span>
              <span className="hidden h-4 w-px bg-slate-200 sm:inline-block" aria-hidden />
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span>
                  No new hardware <span className="font-semibold text-slate-900">required</span>
                </span>
              </span>
              <span className="hidden h-4 w-px bg-slate-200 sm:inline-block" aria-hidden />
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                  </svg>
                </span>
                <span>
                  Encrypted, <span className="font-semibold text-slate-900">SOC2-ready</span>
                </span>
              </span>
            </FlyInText> */}
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 py-10 lg:py-16">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-[0.25]" aria-hidden />
          <div
            className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-rose-400/15 via-orange-300/10 to-transparent blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500/15 via-cyan-400/10 to-transparent blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <FlyInText
                as="span"
                direction="up"
                duration={0.55}
                className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-violet-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-violet-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet-600" aria-hidden />
                Why switch
              </FlyInText>
              <FlyInText
                as="h2"
                direction="up"
                duration={0.65}
                delay={0.06}
                className="mt-4 text-slate-900"
              >
                The Standard for <span className="text-blue-800">Modern Enterprise</span>
              </FlyInText>
              <FlyInText
                as="p"
                direction="up"
                delay={0.1}
                duration={0.6}
                className="mt-3 text-base text-slate-600 sm:text-lg"
              >
                Why factories add camera-based attendance alongside biometric terminals.
              </FlyInText>
            </div>

            {/* Mobile: VS-style stacked cards */}
            <div className="mt-10 space-y-4 md:hidden">
              {comparisonRows.map((row, i) => (
                <motion.div
                  key={row.feature}
                  className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_12px_36px_-26px_rgba(15,23,42,0.25)]"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: i * 0.05 }}
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                      <ComparisonRowIcon name={row.icon} className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-bold text-slate-900">{row.feature}</p>
                  </div>
                  <div className="grid grid-cols-1 divide-y divide-slate-100">
                    <div className="flex items-start gap-3 px-5 py-3.5">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-600 ring-1 ring-rose-500/20">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rose-700">Traditional</p>
                        <p className="mt-0.5 text-sm leading-snug text-slate-700">{row.traditional}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-blue-50/40 px-5 py-3.5">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">InOps AI</p>
                        <p className="mt-0.5 text-sm font-semibold leading-snug text-slate-900">{row.opticam}</p>
                        <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-500/20">
                          {row.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: premium VS table */}
            <motion.div
              className="relative mt-12 hidden overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_30px_70px_-32px_rgba(15,23,42,0.32)] md:block"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 }}
            >
              {/* "Recommended" ribbon over InOps column */}
              <div className="pointer-events-none absolute right-6 top-0 z-10 hidden lg:block">
                <span className="inline-flex items-center gap-1.5 rounded-b-xl bg-gradient-to-br from-emerald-500 to-teal-500 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 2 15 8l7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z" />
                  </svg>
                  Recommended
                </span>
              </div>

              {/* Header */}
              <div className="grid grid-cols-[1.1fr_1fr_1.1fr] border-b border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50">
                <div className="flex items-center gap-2 px-6 py-5 text-left">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Feature</span>
                </div>
                <div className="flex items-center justify-between gap-3 border-l border-slate-200 px-6 py-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rose-600">Yesterday</p>
                    <p className="mt-0.5 text-sm font-bold text-slate-700">Traditional Biometrics</p>
                  </div>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500 ring-1 ring-rose-500/20">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 border-l border-slate-200 bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/40 px-6 py-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Today</p>
                    <p className="mt-0.5 text-sm font-bold text-slate-900">InOps AI</p>
                  </div>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Rows */}
              {comparisonRows.map((row, idx) => (
                <div
                  key={row.feature}
                  className={`group grid grid-cols-[1.1fr_1fr_1.1fr] transition-colors duration-200 hover:bg-slate-50/40 ${
                    idx !== comparisonRows.length - 1 ? "border-b border-slate-200/80" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 px-6 py-5">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 ring-1 ring-slate-200/80 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white group-hover:ring-slate-900/30">
                      <ComparisonRowIcon name={row.icon} className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-bold tracking-tight text-slate-900">{row.feature}</p>
                  </div>

                  <div className="flex items-center gap-3 border-l border-slate-200/80 px-6 py-5">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-600 ring-1 ring-rose-500/20">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </span>
                    <p className="text-sm leading-snug text-slate-600">{row.traditional}</p>
                  </div>

                  <div className="relative flex items-center justify-between gap-3 border-l border-slate-200/80 bg-blue-50/30 px-6 py-5">
                    <span
                      className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-400"
                      aria-hidden
                    />
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <p className="text-sm font-semibold tracking-tight text-slate-900">{row.opticam}</p>
                    </div>
                    <span className="hidden shrink-0 items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-500/20 lg:inline-flex">
                      {row.highlight}
                    </span>
                  </div>
                </div>
              ))}

              {/* Footer summary */}
              <div className="grid grid-cols-[1.1fr_1fr_1.1fr] border-t border-slate-200 bg-gradient-to-r from-slate-50 via-white to-blue-50/40">
                <div className="flex items-center gap-2 px-6 py-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Summary</span>
                </div>
                <div className="flex items-center gap-2 border-l border-slate-200 px-6 py-4">
                  <span className="inline-flex h-2 w-2 rounded-full bg-rose-500" aria-hidden />
                  <p className="text-xs font-medium text-slate-600">High capex, low agility</p>
                </div>
                <div className="flex items-center gap-2 border-l border-slate-200 bg-blue-50/30 px-6 py-4">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  <p className="text-xs font-semibold text-slate-900">Lower TCO · Faster rollout · Cloud-native</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-[#0a0c12] via-[#0e1016] to-[#0a0c12] py-10 lg:py-16">
          <div
            className="pointer-events-none absolute -left-32 top-12 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/12 to-transparent blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-gradient-to-tr from-violet-500/20 via-fuchsia-500/12 to-transparent blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <FlyInText
                as="span"
                direction="up"
                duration={0.55}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden />
                Measurable outcomes
              </FlyInText>
              <FlyInText
                as="h2"
                direction="up"
                duration={0.7}
                delay={0.06}
                className="mt-4 text-white"
              >
                Measurable ROI for your{" "}
                <span className="text-slate-200">infrastructure</span>
              </FlyInText>
              <FlyInText
                as="p"
                direction="up"
                delay={0.1}
                duration={0.6}
                className="mt-3 text-base leading-relaxed text-slate-400 sm:text-lg"
              >
                What plants report after adding camera-based attendance to their gate estate.
              </FlyInText>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:items-stretch lg:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    {
                      value: "45%",
                      label: "Reduction in Hardware TCO",
                      detail: "Drop the cost of biometric devices, cabling, and support contracts.",
                      icon: "trend" as const,
                      accentBar: "from-cyan-400 to-sky-500",
                      iconWrap: "bg-cyan-500/15 text-cyan-300 ring-cyan-400/30",
                      hoverGlow: "hover:shadow-[0_24px_60px_-26px_rgba(34,211,238,0.55)]",
                      hoverBg: "from-cyan-500/20 via-sky-500/10 to-transparent",
                      trendChip: "Lower",
                      trendChipColor: "text-cyan-300 bg-cyan-500/10 ring-cyan-400/20",
                    },
                    {
                      value: "100%",
                      label: "Elimination of Buddy Punching",
                      detail: "Face-verified entry makes shared cards or proxy clock-ins impossible.",
                      icon: "chart" as const,
                      accentBar: "from-rose-400 to-fuchsia-500",
                      iconWrap: "bg-rose-500/15 text-rose-300 ring-rose-400/30",
                      hoverGlow: "hover:shadow-[0_24px_60px_-26px_rgba(244,63,94,0.55)]",
                      hoverBg: "from-rose-500/20 via-fuchsia-500/10 to-transparent",
                      trendChip: "Risk gone",
                      trendChipColor: "text-rose-300 bg-rose-500/10 ring-rose-400/20",
                    },
                    {
                      value: "DPDP",
                      label: "Data Privacy Aligned",
                      detail: "Role-based access, encrypted event log, aligned with DPDP Act obligations.",
                      icon: "shield" as const,
                      accentBar: "from-emerald-400 to-teal-500",
                      iconWrap: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
                      hoverGlow: "hover:shadow-[0_24px_60px_-26px_rgba(16,185,129,0.55)]",
                      hoverBg: "from-emerald-500/20 via-teal-500/10 to-transparent",
                      trendChip: "Compliant",
                      trendChipColor: "text-emerald-300 bg-emerald-500/10 ring-emerald-400/20",
                    },
                    {
                      value: "99%",
                      label: "Employee Satisfaction Rate",
                      detail: "Walk-through entry ,  no queues, no fingerprints, no friction.",
                      icon: "users" as const,
                      accentBar: "from-violet-400 to-indigo-500",
                      iconWrap: "bg-violet-500/15 text-violet-300 ring-violet-400/30",
                      hoverGlow: "hover:shadow-[0_24px_60px_-26px_rgba(139,92,246,0.55)]",
                      hoverBg: "from-violet-500/20 via-indigo-500/10 to-transparent",
                      trendChip: "Loved",
                      trendChipColor: "text-violet-300 bg-violet-500/10 ring-violet-400/20",
                    },
                  ].map((item, idx) => (
                    <motion.article
                      key={item.value + item.label}
                      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/60 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-500/80 ${item.hoverGlow}`}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.05 }}
                    >
                      <div className={`h-1 w-full bg-gradient-to-r ${item.accentBar}`} aria-hidden />

                      <div
                        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${item.hoverBg}`}
                        aria-hidden
                      />

                      <div className="relative flex flex-1 flex-col p-5">
                        <div className="flex items-start justify-between gap-2">
                          <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ring-1 ${item.iconWrap}`}>
                            {item.icon === "trend" && (
                              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <path d="M4 16l6-6 4 4 6-6" />
                                <path d="M14 8h6v6" />
                              </svg>
                            )}
                            {item.icon === "chart" && (
                              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <path d="M4 19h16M7 16V8M12 16V5M17 16v-4" />
                              </svg>
                            )}
                            {item.icon === "shield" && (
                              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                                <path d="m9 12 2 2 4-4" />
                              </svg>
                            )}
                            {item.icon === "users" && (
                              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <circle cx="9" cy="8" r="3" />
                                <circle cx="17" cy="9" r="2" />
                                <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
                                <path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" />
                              </svg>
                            )}
                          </span>
                          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide ring-1 ${item.trendChipColor}`}>
                            {item.trendChip}
                          </span>
                        </div>

                        <p className="mt-3.5 text-[1.75rem] font-bold leading-none tracking-tight tabular-nums text-white drop-shadow-sm sm:text-[2rem]">
                          {item.value}
                        </p>
                        <p className="mt-1.5 text-sm font-semibold leading-snug text-slate-100">{item.label}</p>
                        <p className="mt-1 text-sm leading-snug text-slate-400">{item.detail}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_30px_70px_-32px_rgba(15,23,42,0.5)] sm:p-6 lg:mt-0"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.07 }}
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/15 via-cyan-400/10 to-transparent blur-3xl"
                  aria-hidden
                />

                <span className="relative inline-flex w-fit items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden />
                  Ready for production
                </span>

                <FlyInText
                  as="h3"
                  direction="left"
                  duration={0.65}
                  className="relative mt-3 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
                >
                  Enterprise <span className="text-blue-800">Deployment Readiness</span>
                </FlyInText>
                <p className="relative mt-1.5 text-sm leading-relaxed text-slate-600">
                  InOps camera attendance ships integration-ready with the codecs and protocols your IT team already runs.
                </p>

                <ul className="relative mt-4 space-y-2">
                  {[
                    {
                      title: "Universal codec support",
                      detail: "Works with H.264, H.265, and MJPEG video streams over ONVIF/RTSP.",
                      iconColor: "bg-blue-600",
                    },
                    {
                      title: "Privacy-first by design",
                      detail: "GDPR & PDPA-compliant data anonymization with role-based access.",
                      iconColor: "bg-violet-600",
                    },
                    {
                      title: "Native enterprise integrations",
                      detail: "Push attendance directly to SAP, Workday, Oracle, or your custom ERP.",
                      iconColor: "bg-emerald-600",
                    },
                  ].map((item) => (
                    <li
                      key={item.title}
                      className="group/row flex items-start gap-2.5 rounded-xl border border-slate-200/70 bg-white px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50/80 hover:shadow-[0_14px_36px_-26px_rgba(15,23,42,0.25)]"
                    >
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${item.iconColor} text-white shadow-sm`}
                      >
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <div className="leading-snug">
                        <p className="!text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="mt-0.5 text-base text-slate-600">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-4 flex flex-wrap items-center gap-1.5 border-t border-slate-100 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Compliance</span>
                  {["DPDP Act", "ONVIF", "RTSP", "Multi-site"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700"
                    >
                      <svg className="h-2.5 w-2.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--inops-blue)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_32px_-12px_rgba(29,95,191,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--inops-navy)] hover:shadow-[0_18px_44px_-16px_rgba(29,95,191,0.65)]"
                >
                  Request Implementation Plan
                  <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section aria-labelledby="cctv-attendance-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 id="cctv-attendance-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Answers to common questions about CCTV-based attendance, camera accuracy in factory conditions, contract labour billing, CLRA register validity, and deployment timelines.
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
                {cctvSurveillanceFaqItems.map((item, index) => (
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
          headingId="time-attendance-final-cta-heading"
          heading={
            <>
              Upgrade your attendance system{" "}
              <span className="font-semibold text-sky-100">without changing your infrastructure</span>.
            </>
          }
          description="Already have CCTV cameras on site? InOps can use them for attendance — no new hardware, connected to the same CLMS that handles your biometric terminals and contractor compliance."
          primaryLabel="Get In Touch"
          secondaryLabel="See Biometric Devices"
        />

      </div>
    </>
  );
}
