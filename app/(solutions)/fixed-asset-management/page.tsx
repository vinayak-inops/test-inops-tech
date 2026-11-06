"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SolutionLandingHero from "@/app/components/SolutionLandingHero";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";

const fixedAssetHeroImage = "/images/masshin.jpg";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const featureCards = [
  {
    title: "Asset Tagging & Registry",
    description:
      "Assign unique QR codes, barcodes, or RFID tags to every fixed asset — biometric terminals, machinery, tools, vehicles, and infrastructure. The central registry records location, custodian, purchase date, and warranty expiry for every item across every plant.",
  },
  {
    title: "AMC Scheduling & Maintenance",
    description:
      "Schedule Annual Maintenance Contracts and preventive maintenance tasks against each asset. Get automated alerts before service windows close, log technician visits, and track SLA compliance per vendor and site.",
  },
  {
    title: "Depreciation & Financial Records",
    description:
      "Compute straight-line or WDV depreciation automatically, aligned with Indian Companies Act Schedule II useful-life rates. Export asset-wise depreciation schedules ready for finance review and statutory audit.",
  },
  {
    title: "Audit Trails & Physical Verification",
    description:
      "Every transfer, disposal, write-off, and maintenance event is timestamped and logged. Physical verification workflows let teams scan and reconcile assets against the register, producing a signed audit report.",
  },
] as const;

const fixedAssetFaqItems = [
  {
    question: "What is fixed asset management software?",
    answer:
      "Fixed asset management software is a system for tracking an organisation's physical assets — machinery, equipment, devices, vehicles, furniture, and infrastructure — through their full lifecycle: acquisition, deployment, maintenance, depreciation, and disposal. It replaces spreadsheet-based asset registers with a live, searchable database that triggers maintenance schedules, computes depreciation, and produces audit-ready records for finance and statutory compliance.",
  },
  {
    question: "Can it track biometric device AMC status?",
    answer:
      "Yes. InOps manages a fleet of 3,000+ biometric attendance devices (face terminals, fingerprint readers, QR scanners) across 70+ industrial sites. Each device is a fixed asset with a purchase date, warranty period, AMC schedule, and assigned site. The platform tracks AMC renewal dates, logs technician visits, and escalates unresolved downtime — so attendance-critical hardware is never missed in a maintenance cycle.",
  },
  {
    question: "How does fixed asset tracking work for multi-site industrial operations?",
    answer:
      "Each asset is assigned to a site and custodian in the central registry. When an asset moves between sites or departments, a digital transfer record is created, updating location and custody instantly. Group-level finance sees the full register across all plants; plant-level teams see only their site's assets. Physical verification can be run per site independently, with reconciliation rolled up at group level.",
  },
  {
    question: "What depreciation methods are supported?",
    answer:
      "InOps fixed asset management supports both Straight-Line Method (SLM) and Written Down Value (WDV) depreciation, aligned with Companies Act 2013 Schedule II useful-life rates and Income Tax Act depreciation rates. Asset-wise depreciation schedules can be exported for statutory audit and tax filing.",
  },
  {
    question: "Can fixed asset records integrate with our ERP or accounting system?",
    answer:
      "Yes. Fixed asset data — additions, disposals, depreciation charges — can be exported in standard formats or pushed via API to ERP and accounting systems (SAP, Tally, Oracle, and others). Asset acquisition entries, depreciation journals, and disposal proceeds flow into the GL without manual re-entry.",
  },
  {
    question: "How does InOps handle asset disposal and write-off?",
    answer:
      "Disposal workflows capture the disposal date, proceeds (if sold), and authorisation trail. The asset is removed from the active register and depreciation stops from the disposal date. Scrapped assets generate a write-off record with approvals logged for audit. All historical data is retained for the statutory retention period.",
  },
];

export default function FixedAssetManagementPage() {
  return (
    <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
      <SolutionLandingHero
        badge={
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            InOps FAM
          </span>
        }
        title={
          <>
            Fixed Asset Management Software{" "}
            <span className="text-blue-600">for Industrial Sites</span>
          </>
        }
        subtitle="Tag, track, and maintain every fixed asset across your plant network — biometric attendance devices, machinery, tools, and infrastructure — with AMC scheduling, depreciation records, and full audit trails."
        imageSrc={fixedAssetHeroImage}
        imageAlt="Industrial machinery and fixed assets on a manufacturing floor"
        primaryCta={{ label: "Book a Demo", href: "/contact" }}
        secondaryCta={{ label: "See Features", href: "#fam-features-heading" }}
      />

      {/* Editorial: What is fixed asset management */}
      <section
        className="border-t border-slate-100 bg-slate-50/60 py-12 lg:py-16"
        aria-labelledby="fam-editorial-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2
              id="fam-editorial-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Fixed Asset Management Software for Manufacturing &amp; Industrial Sites
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              In industrial operations, fixed assets span a wide range: CNC machines, transformers, forklifts,
              biometric terminals at plant gates, CCTV cameras, HVAC units, and more. Each carries a purchase cost,
              depreciation schedule, maintenance obligation, and compliance footprint. Tracking these in spreadsheets
              means missed AMC renewals, phantom assets on the books, and audit findings that could have been avoided.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              InOps fixed asset management replaces the spreadsheet with a live registry — tagged at acquisition,
              tracked through every transfer and maintenance event, depreciated automatically, and reconciled against
              a physical verification at audit time. For sites that also run InOps{" "}
              <Link
                href="/contract-labour-management"
                className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-200"
              >
                CLMS
              </Link>{" "}
              and{" "}
              <Link
                href="/hris"
                className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-200"
              >
                HRIS
              </Link>
              , the attendance device fleet is tracked as fixed assets alongside every other plant asset — one
              register, one audit trail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="bg-white py-12 lg:py-16" aria-labelledby="fam-features-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center rounded-full border border-slate-200/90 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm">
              Core capabilities
            </span>
            <h2 id="fam-features-heading" className="mt-5 text-slate-900">
              Asset lifecycle management,{" "}
              <span className="font-semibold text-[color:var(--inops-blue)]">end to end</span>
            </h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card, i) => (
              <motion.article
                key={card.title}
                className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.10)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(15,23,42,0.14)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: i * 0.06 }}
              >
                <h3 className="text-base font-semibold tracking-tight text-slate-900">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{card.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Biometric device fleet proof section */}
      <section
        className="border-t border-slate-200/70 bg-slate-950 py-12 text-white lg:py-16"
        aria-labelledby="fam-fleet-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Proven at scale
              </span>
              <h2 id="fam-fleet-heading" className="mt-5 text-white">
                Managing 3,000+ Devices{" "}
                <span className="font-semibold text-slate-300">Across 70+ Industrial Sites</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
                InOps manages a fleet of biometric attendance terminals — face readers, fingerprint scanners, and QR
                devices — across client plant networks as fixed assets. Each device is tagged, assigned to a site and
                custodian, covered by an AMC schedule, and tracked through its full lifecycle from installation to
                replacement.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "AMC renewal alerts sent 30 and 7 days before contract expiry",
                  "Downtime events logged per device, escalated on SLA breach",
                  "Replacement workflow initiated from the asset register on device end-of-life",
                  "Depreciation computed automatically, aligned with device useful-life policy",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <svg
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 10 3 3 7-7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-slate-300 sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase, delay: 0.08 }}
            >
              {[
                { value: "3,000+", label: "Biometric devices tracked", sub: "Face, fingerprint & QR" },
                { value: "70+", label: "Industrial sites covered", sub: "Multi-plant fleets" },
                { value: "100%", label: "AMC schedule coverage", sub: "No missed renewals" },
                { value: "<4 hr", label: "Avg downtime resolution", sub: "SLA-backed response" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-3xl font-black tracking-tight text-white">{stat.value}</p>
                  <p className="mt-1.5 text-sm font-semibold text-slate-300">{stat.label}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="fam-faq-heading"
        className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2
              id="fam-faq-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            >
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Answers to common questions about fixed asset tracking, AMC scheduling, depreciation methods, biometric
              device fleet management, and ERP integration.
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
              {fixedAssetFaqItems.map((item, index) => (
                <details
                  key={item.question}
                  className="group bg-white/70 px-5 py-5 open:bg-white sm:px-7 sm:py-6"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:hidden">
                    <span className="flex min-w-0 gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold tabular-nums text-blue-700 ring-1 ring-blue-100">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-semibold leading-snug text-slate-950 sm:text-lg">
                        {item.question}
                      </span>
                    </span>
                    <span
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg leading-none text-slate-600 transition group-open:rotate-45 group-open:border-blue-200 group-open:text-blue-700"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:pl-12 sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SolutionPageClosingCta
        heading="Put your fixed assets under proper control"
        description="From biometric device fleets to heavy machinery, InOps tracks every asset through its full lifecycle across all your industrial sites. Talk to our team about your asset register and AMC requirements."
        primaryLabel="Book a demo"
        secondaryLabel="Talk to our team"
      />
    </div>
  );
}
