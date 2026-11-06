"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FlyInText } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";

function trackBrochureDownload(slug: string, title: string) {
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", "file_download", {
    file_name: `${slug}.pdf`,
    link_url: `/brochures/files/${slug}.pdf`,
    brochure_title: title,
  });
}

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.15 };

const brochures = [
  {
    title: "Biometric Attendance & Access Control for Factories",
    description: "Fingerprint and face recognition terminals, turnstiles, and fleet management — how InOps covers every gate from enrolment to shift-close. Includes device selection guide for Indian industrial sites.",
    category: "Product",
    productHref: "/biometric-devices",
    pdfSlug: "biometric-attendance-access-control",
    // TODO: replace with actual brochure cover thumbnail, e.g. "/images/brochures/biometric-attendance-cover.jpg"
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=85",
    accent: "Biometrics",
  },
  {
    title: "Contract Labour Management System (CLMS)",
    description: "Gate compliance, CLRA statutory registers, contractor invoice reconciliation, and multi-site visibility — the full lifecycle for contract workforces at Indian manufacturing plants.",
    category: "Solutions",
    productHref: "/contract-labour-management",
    pdfSlug: "contract-labour-management-clms",
    // TODO: replace with actual brochure cover thumbnail, e.g. "/images/brochures/clms-cover.jpg"
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
    accent: "CLMS",
  },
  {
    title: "Visitor Management System for Industrial Sites",
    description: "Pre-registration, watchlist screening, zone-limited passes, and kiosk self-check-in. How InOps replaces the paper register with an audit-ready visitor control layer.",
    category: "Solutions",
    // Points to canteen-and-visitor until a standalone /visitor-management page is published
    productHref: "/canteen-and-visitor",
    pdfSlug: "visitor-management-industrial-sites",
    // TODO: replace with actual brochure cover thumbnail, e.g. "/images/brochures/visitor-management-cover.jpg"
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    accent: "Access",
  },
  {
    title: "Canteen Management & Cashless Meal Systems",
    description: "Biometric or RFID meal booking, cashless payment, subsidy management, and consumption analytics — integrated with attendance so deductions happen automatically.",
    category: "Solutions",
    productHref: "/canteen-and-visitor",
    pdfSlug: "canteen-management-cashless-meals",
    // TODO: replace with actual brochure cover thumbnail, e.g. "/images/brochures/canteen-management-cover.jpg"
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85",
    accent: "Canteen",
  },
  {
    title: "HRIS & Payroll Compliance for Manufacturing",
    description: "Permanent-employee HRIS with PF, ESI, and LWF statutory outputs, leave management, and payslip generation — designed to run alongside CLMS for a unified workforce view.",
    category: "Solutions",
    productHref: "/hris",
    pdfSlug: "hris-payroll-compliance-manufacturing",
    // TODO: replace with actual brochure cover thumbnail, e.g. "/images/brochures/hris-cover.jpg"
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
    accent: "HRIS",
  },
  {
    title: "Fixed Asset Register & Lifecycle Tracking",
    description: "Asset tagging, depreciation schedules, maintenance records, and disposal management — giving finance and operations a single source of truth across multi-plant estates.",
    category: "Solutions",
    productHref: "/fixed-asset-management",
    pdfSlug: "fixed-asset-register-lifecycle-tracking",
    // TODO: replace with actual brochure cover thumbnail, e.g. "/images/brochures/fixed-assets-cover.jpg"
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
    accent: "Assets",
  },
];

const brochureBanner = {
  src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=85",
  alt: "Professional desk with laptop and business documents for solution collateral",
  tagline: "Product & solution PDFs for your evaluation teams",
} as const;

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4-4 4m0 0-4-4m4 4V4"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
    </svg>
  );
}

export default function BrochuresPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eef4f8] text-slate-950">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(57,189,232,0.16),transparent_28%),radial-gradient(circle_at_86%_0%,rgba(29,95,191,0.12),transparent_24%),linear-gradient(180deg,#eef4f8_0%,#f8fbfd_56%,#eef4f8_100%)]"
        aria-hidden
      />

      <section className="relative z-[1] px-4 pb-12 pt-24 sm:px-6 sm:pt-28 lg:px-12 lg:pb-16 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Home</Link>
            <span aria-hidden> / </span>
            <Link href="/blog" className="hover:text-slate-700">Resources</Link>
            <span aria-hidden> / </span>
            <span aria-current="page">Brochures</span>
          </nav>
          <motion.header
            className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            <div className="overflow-hidden border-b border-slate-200/90 shadow-[0_28px_80px_-36px_rgba(15,47,87,0.55)]">
              <div className="relative aspect-[3/1] min-h-[120px] w-full sm:aspect-[16/5] sm:min-h-[140px] lg:min-h-[160px]">
                <Image
                  src={brochureBanner.src}
                  alt={brochureBanner.alt}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/35 to-slate-950/80"
                  aria-hidden
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-5 sm:py-6">
                  <p className={inopsUi.heroKicker}>Brochures</p>
                  <h1 className="home-display-heading inops-type-hero mt-4 text-white text-center">
                    Product Brochures: CLMS, Biometric Attendance &amp; HRIS
                  </h1>
                  <p className={`${inopsUi.heroBannerDesc} mt-3 max-w-xl text-center`}>{brochureBanner.tagline}</p>
                </div>
              </div>
            </div>
          </motion.header>

          <div className="mb-8 mt-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <FlyInText as="p" direction="down" className={inopsUi.eyebrowBrand}>
                Download center
              </FlyInText>
              <FlyInText as="h2" direction="left" delay={0.06} className={`mt-3 ${inopsUi.sectionHeading} !text-black`}>
                Choose your brochure
              </FlyInText>
            </div>
            <FlyInText as="p" direction="up" delay={0.08} className={`max-w-lg ${inopsUi.lead}`}>
              Sharp, easy-to-scan resources for teams evaluating InOps products and workforce workflows.
            </FlyInText>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {brochures.map((brochure, i) => (
              <motion.article
                key={brochure.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-white bg-white shadow-[0_18px_55px_-36px_rgba(15,47,87,0.5)] ring-1 ring-slate-900/[0.04] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_70px_-40px_rgba(15,47,87,0.58)]"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.01 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 * i }}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={brochure.image}
                    alt={`${brochure.title} brochure preview`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--inops-navy)]/65 via-transparent to-[#39bde8]/10 opacity-80 transition group-hover:opacity-65" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/95 px-3 py-1 text-xs font-semibold text-[var(--inops-navy)] backdrop-blur-sm">
                    {brochure.category}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-[#061428]/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {brochure.accent}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <FlyInText
                    as="p"
                    direction="right"
                    delay={0.04 + i * 0.04}
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--inops-blue)]"
                  >
                    Resource 0{i + 1}
                  </FlyInText>
                  <FlyInText as="h3" direction="up" delay={0.08 + i * 0.04} className="mt-3 text-black">
                    {brochure.title}
                  </FlyInText>
                  <FlyInText
                    as="p"
                    direction="up"
                    delay={0.12 + i * 0.04}
                    className="mt-3 flex-1 text-sm leading-7 text-slate-600 line-clamp-3"
                  >
                    {brochure.description}
                  </FlyInText>
                  <FlyInText as="div" direction="up" delay={0.16 + i * 0.04} className="mt-6 flex flex-col gap-2">
                    <a
                      href={`/brochures/files/${brochure.pdfSlug}.pdf`}
                      download
                      onClick={() => trackBrochureDownload(brochure.pdfSlug, brochure.title)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--inops-navy)] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/15 transition hover:bg-[var(--inops-blue)] hover:shadow-blue-600/25"
                    >
                      <DownloadIcon className="h-4 w-4" />
                      Download PDF
                    </a>
                    <Link
                      href={brochure.productHref}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-[var(--inops-blue)] transition hover:border-[var(--inops-blue)] hover:bg-blue-50"
                    >
                      View product page
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </FlyInText>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-20 pt-2 sm:px-6 lg:px-12">
        <motion.div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/15 bg-[var(--inops-navy)] px-8 py-12 shadow-[0_35px_90px_-45px_rgba(6,20,40,0.9)] sm:px-12 lg:py-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease: smoothEase }}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#39bde8]/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-[var(--inops-blue)]/40 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:42px_42px]"
            aria-hidden
          />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-2xl">
              <FlyInText as="p" direction="down" className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7dd3fc]">
                Need the right material?
              </FlyInText>
              <FlyInText as="h2" direction="left" delay={0.06} className="mt-4 text-white">
                Talk to InOps before rollout
              </FlyInText>
              <FlyInText as="p" direction="up" delay={0.12} className="mt-4 text-base leading-8 text-slate-300">
                Get the right brochure and solution walkthrough for your sites, users, compliance needs, and integrations.
              </FlyInText>
            </div>
            <FlyInText as="div" direction="up" delay={0.16} className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--inops-navy)] shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Contact us
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                Explore solutions
              </Link>
            </FlyInText>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
