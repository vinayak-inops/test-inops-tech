"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SolutionLandingHero from "@/app/components/SolutionLandingHero";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

/** Hero background ,  `public/images/Turnstiles2.jpg` */
const turnstilesHeroBg = "/images/Turnstiles2.jpg";

const productSpecs = [
  { label: "Power Requirements", value: "AC110V/220V, 50/60Hz" },
  { label: "Dimension(mm)", value: "L=520, W=310, H=1010" },
  { label: "Working Temperature", value: "0 °C - 60 °C" },
  { label: "Working Environment", value: "Indoor/Outdoor(if sheltered)" },
  { label: "RFID & Fingerprint Speed", value: "Maximum 30/Minute" },
  { label: "Material", value: "Stainless Steel" },
];

const whyChooseSlides = [
  { title: " Hardware that enforces compliance, not just identity", text: "Most turnstile suppliers sell you a barrier. InOps lanes are connected to a rules engine — induction, medical fitness, licence validity, and BGV status are checked at the moment of entry, and every denial is logged with its reason. The gate becomes a compliance control, not just a counting device." },
  { title: "One identity across every device and gate", text: "Face terminals, fingerprint readers, cards, QR, and CCTV capture all resolve to a single worker identity. Add a lane or a gate and nobody re-enrols. Multi-gate campuses stay one system instead of becoming several." },
  { title: "Deployed at scale, in real industrial conditions", text: "3,000+ devices across 70+ industrial sites, including defence and PSU environments where tailgating and access records are audited. Site survey, civil coordination, installation, and commissioning are handled end-to-end — not handed to a third-party installer." },
  { title: "Supported after the install", text: "Lanes and their readers are covered under [biometric AMC](/services/biometric-amc): SLA-backed preventive and corrective maintenance, spares held in India, engineers across sites. The difference between a vendor and a supplier shows up in year two, not week one." },
  { title: " Local supply, local spares", text: "Hardware supported and stocked in India — replacements don't wait on import lead times, and procurement documentation is ready for PSU and defence tenders." },
];

const numberedFeatures = [
  {
    number: 1,
    title: "Reliability",
    color: "bg-amber-500",
    description:
      "Duty cycle, MTBF, oil-lubricated mechanism, stainless construction ·",
  },
  {
    number: 2,
    title: "Safety Feature",
    color: "bg-emerald-500",
    description:
      "Anti-panic drop-arm on power failure, fire-alarm integration, anti-pinch arms, emergency free-exit. ",
  },
  {
    number: 3,
    title: "Built-in Reader Integration",
    color: "bg-pink-500",
    description:
      "Face, fingerprint, RFID, QR readers mounted natively.",
  },
];

/** Cohesive blue–teal accent squares (single family, not rainbow). */
const featureBullets = [
  { text: "High-quality electric component", iconBg: "bg-blue-500" },
  { text: "Visual indicator for access granted or denied", iconBg: "bg-blue-600" },
  { text: "Patented oil lubrication system reduces the need for maintenance", iconBg: "bg-blue-600" },
  { text: "Stainless steel casework which ensures long-lasting durability", iconBg: "bg-blue-500" },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const turnstileFaqItems = [
  {
    question: "What types of turnstiles suit factory gates?",
    answer:
      "Tripod turnstiles for indoor lanes and contractor entry points where throughput is the constraint; full-height turnstiles for perimeter gates, defence and PSU campuses where tailgating cannot be tolerated; flap barriers for office-to-plant transitions and visitor lanes where passage speed matters. Most industrial sites use a mix, matched gate by gate during the site survey.",
  },
  {
    question: "How many people per minute can a turnstile lane handle?",
    answer: (
      <>
        A tripod lane handles roughly 25–30 persons per minute with card or fingerprint verification. Shift changes at large plants usually need multiple parallel lanes, or{" "}
        <Link 
          href="/cctv-attendance" 
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          CCTV-based attendance
        </Link>{" "}
        alongside lanes to absorb peak flow without queueing.
      </>
    ),
  },
  {
    question: "Can turnstiles enforce compliance rules, not just identity?",
    answer: (
      <>
        Yes — that's the difference between access control and compliance enforcement. Connected to a rules engine, the lane checks induction validity, medical fitness, licence status, and BGV clearance at the moment of entry; a failed check means the arm doesn't turn and the denial is logged with its reason. See{" "}
        <Link 
          href="/contract-labour-management/iddion-regx-modules/gate-compliance"
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          gate pass management and auto-blocking
        </Link>
        .
      </>
    ),
  },
  {
    question: "What happens during a power failure or fire alarm?",
    answer:
      "Lanes are configured to fail safe: arms drop or release to allow free egress on power loss and on fire-alarm signal, in line with life-safety requirements. Fail-secure configurations are available for high-security perimeters where the security posture requires it.",
  },
  {
    question: "Which readers can be integrated?",
    answer: (
      <>
        Face terminals, fingerprint readers, RFID and card readers, and QR scanners mount to the lane without a separate controller. Events feed the same attendance engine as{" "}
        <Link 
          href="/biometric-devices"
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          face recognition attendance
        </Link>
        , so one enrollment covers every gate and device.
      </>
    ),
  },
  {
    question: "Can turnstiles work with our existing access control system?",
    answer:
      "Yes — lanes accept standard reader and controller interfaces, so existing card systems can drive them while attendance and compliance logic runs on InOps. Mixed environments are common in plants that added hardware over several years.",
  },
  {
    question: "Are they suitable for outdoor gates?",
    answer:
      "Full-height turnstiles are rated for outdoor exposure. Tripod turnstiles work outdoors when sheltered from direct rain and sun; flap barriers are indoor-rated with sheltered-outdoor options subject to deployment specifications. Site conditions determine the recommendation.",
  },
  {
    question: "How are visitors and vehicles handled?",
    answer: (
      <>
        Visitor passes issued through{" "}
        <Link 
          href="/canteen-and-visitor" 
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          visitor management
        </Link>{" "}
        work on the same lanes as workforce credentials, with zone permissions attached. Vehicle access uses boom barriers and ANPR rather than pedestrian lanes, integrated into the same access records.  
      </>
    ),
  },
  {
    question: "What's involved in installation?",
    answer:
      "Site survey, civil coordination for foundation and cabling, installation, reader mounting, and commissioning against your attendance system. Most single-gate configurations are live within days of hardware delivery; multi-gate campuses are staged in parallel lanes so attendance capture never stops during rollout.",
  },
  {
    question: "Is maintenance covered?",
    answer: (
      <>
        Turnstiles, flap barriers, and their integrated readers are covered under{" "}
        <Link 
          href="/services/biometric-amc" 
          className="text-[#1c7bb8] font-medium underline underline-offset-2 hover:text-[#1362a8] transition-colors duration-200"
        >
          biometric AMC services
        </Link>{" "}
        — preventive maintenance, mechanism servicing, and SLA-backed repair across every site under one contract.
      </>
    ),
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function TurnstilesPage() {

  return (
    <>
      <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
        <SolutionLandingHero
          badge={
            <span className="inline-flex rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-800 shadow-sm backdrop-blur-sm">
              Entrance Control
            </span>
          }
          title="Turnstiles &amp; Flap Barriers for Factory Gates"
          subtitle="Tripod turnstiles and flap barriers with integrated biometric readers — stainless steel construction, CLMS-connected access control, and high-throughput entry for industrial sites, campuses, and commercial facilities across India."
          imageSrc={turnstilesHeroBg}
          imageAlt="Security turnstile lanes at a facility entrance"
          primaryCta={{ label: "Get a Quote", href: "/contact" }}
          secondaryCta={{ label: "See Specifications", href: "#turnstile-specifications" }}
        />

        {/* Main content – tripod turnstile image left, text right */}
        <section className="py-5 lg:py-8 border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 lg:items-center">
              <motion.div
                className="relative order-2 flex justify-center lg:order-1 lg:col-span-4 lg:justify-start"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase }}
              >
                <div className="relative aspect-[4/3] w-full max-w-[16rem] overflow-hidden sm:max-w-xs lg:max-w-[30rem]">
                  <Image
                    src="/images/7.png"
                    alt="Stainless steel tripod turnstile with barrier arms"
                    fill
                    className=" object-center"
                    sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, 24rem"
                    priority
                  />
                </div>
              </motion.div>
              <motion.div
                className="order-1 lg:order-2 lg:col-span-8 lg:pl-2 xl:pl-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase, delay: 0.1 }}
              >
                <h2 className="text-gray-900">
                  Tripod Turnstiles
                </h2>
                <p className="mt-6 max-w-none text-gray-600 leading-relaxed text-base sm:text-xl">
                  Our single-lane turnstile series is designed for smooth, silent operation with very low power draw. It is
                  made of stainless steel for high durability and is compact for small workspaces.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Flap Barrier Turnstiles */}
        <section className="py-5 lg:py-8 border-t border-gray-200 bg-slate-50/60">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 lg:items-center">
              <motion.div
                className="order-1 lg:order-1 lg:col-span-8 lg:pr-2 xl:pr-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase }}
              >
                <h2 className="text-gray-900">Flap Barrier Turnstiles</h2>
                <p className="mt-6 max-w-none text-gray-600 leading-relaxed text-base sm:text-xl">
                  Flap barriers provide fast, wide-lane passage for office-to-plant transitions, visitor lanes, and facilities where a wider accessible lane is required alongside standard workforce lanes. The hinged flap mechanism opens fully on a valid credential and retracts instantly — delivering higher per-lane throughput than a tripod arm and a cleaner passage profile for workers in PPE or carrying equipment.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "Wide-lane and standard-lane variants for mixed workforce needs",
                    "Integrated face, fingerprint, RFID or QR readers — same credential, same rules engine",
                    "Fail-safe open on power loss and fire-alarm signal",
                    "Anti-tailgate sensor with alarm relay",
                    "Suitable for office lobbies, visitor reception, and plant-to-office transition points",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="relative order-2 flex justify-center lg:order-2 lg:col-span-4 lg:justify-end"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase, delay: 0.1 }}
              >
                <div className="relative aspect-[4/3] w-full max-w-[16rem] overflow-hidden sm:max-w-xs lg:max-w-[30rem]">
                  <Image
                    src="/images/Turnstiles2.jpg"
                    alt="Stainless steel flap barrier turnstile with wide lane for factory access"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, 24rem"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features – three numbered blocks */}
        <section className="py-5 lg:py-8 border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {numberedFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-gray-50/80 p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.08 }}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.color} text-lg font-bold text-white`}>
                    {item.number}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features + specifications ,  side by side from lg */}
        <section id="turnstile-specifications" className="border-t border-slate-200/80 from-slate-50 via-white to-slate-50 py-8 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-14">
              {/* Left: Features */}
              <div>
                <motion.h2
                  className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-left"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase }}
                >
                  Turnstile Features: Reliability, Safety &amp; Reader Integration
                </motion.h2>
                <motion.div
                  className="mx-auto mt-3 h-1 w-14 origin-center rounded-full bg-blue-600 lg:mx-0 lg:origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase }}
                  aria-hidden
                />
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  {featureBullets.map((item, i) => (
                    <motion.div
                      key={item.text}
                      className="flex gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm ring-1 ring-slate-900/[0.04] transition-[box-shadow,border-color] duration-300 hover:border-slate-300 hover:shadow-lg sm:p-5"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.05 }}
                      whileHover={{ y: -3, transition: { duration: 0.2, ease: smoothEase } }}
                    >
                      <span
                        className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${item.iconBg} text-white shadow-md shadow-slate-900/10`}
                      >
                        <CheckIcon className="text-white" />
                      </span>
                      <p className="text-base font-medium leading-snug text-slate-700 pt-0.5">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Technical specifications */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase }}
                >
                  <h3 className="text-center text-lg font-semibold text-slate-800 sm:text-xl lg:text-left">
                    Technical specifications
                  </h3>
                  <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-600 lg:mx-0 lg:max-w-none lg:text-left">
                    Key parameters for installation and operation
                  </p>
                </motion.div>

                <motion.dl
                  className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgb(15,23,42,0.06)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 }}
                >
                  {productSpecs.map((row, index) => (
                    <div
                      key={row.label}
                      className={`flex flex-col gap-0.5 px-5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 sm:px-6 sm:py-4 lg:px-5 lg:py-3.5 xl:px-6 xl:py-4 ${
                        index !== productSpecs.length - 1 ? "border-b border-slate-100" : ""
                      } ${index % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
                    >
                      <dt className="shrink-0 text-sm font-medium text-slate-700">{row.label}</dt>
                      <dd className="text-sm font-semibold text-slate-900 sm:max-w-[55%] sm:text-right sm:tabular-nums lg:max-w-[50%] xl:max-w-[55%]">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </motion.dl>
              </div>
            </div>
          </div>
        </section>

        {/* Accessories cross-link callout */}
        <section className="border-t border-slate-200/80 bg-slate-50/70 py-7 lg:py-9">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="flex flex-col gap-4 rounded-2xl border border-blue-100 bg-white px-6 py-5 shadow-sm ring-1 ring-blue-500/[0.07] sm:flex-row sm:items-center sm:justify-between sm:px-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Complete your install</p>
                <p className="mt-1 text-base font-semibold text-slate-900">
                  Exit buttons, RF cards, push-to-exit plates &amp; electromagnetic locks
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  The hardware that goes alongside every turnstile lane — sourced, specified and supported by the same team.
                </p>
              </div>
              <Link
                href="/accessories"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 hover:-translate-y-0.5"
              >
                Browse accessories
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUsSection />

        {/* ========== FAQ ========== */}
        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16 border-t border-[#eef1f4]">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Answers to common questions about turnstile access control, integration, compliance enforcement, and maintenance.
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
                {turnstileFaqItems.map((item, index) => (
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

            {/* Related tags */}
            <div className="border-t border-[#eef1f4] mt-12 pt-5 flex items-center gap-3 flex-wrap">
              <span className="text-[10.5px] tracking-[0.10em] uppercase text-[#9aa8b6] font-bold mr-[6px]">Related</span>
              {["Turnstile Access Control", "Tripod Turnstile", "Flap Barrier", "Factory Gate Security", "Biometric Turnstile"].map((tag) => (
                <span key={tag} className="text-[12.5px] text-[#4a5766] border border-[#d8e0e8] rounded-full py-[5px] px-[14px] bg-[#f0f2f4]">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <SolutionPageClosingCta
          headingId="turnstiles-final-cta-heading"
          heading="Ready to secure high-throughput entry lanes?"
          description="Talk with our team about stainless turnstiles, integrated readers, and deployment patterns that fit your gates and compliance needs."
          primaryLabel="Request a quote"
          secondaryLabel="Contact sales"
        />
      </div>
    </>
  );
}

function WhyChooseUsSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = whyChooseSlides;

  return (
    <section className="py-4 lg:py-6 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-2xl font-bold text-gray-900 sm:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: smoothEase }}
        >
          Why Choose InOps for Turnstile Access Control
        </motion.h2>
        <div className="mx-auto mt-1.5 h-0.5 w-20 rounded-full bg-blue-500" aria-hidden />
        <div className="mt-4 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:items-center lg:gap-5 xl:gap-6">
          {/* Left: network/tree graphic with icon circles */}
          <motion.div
            className="relative flex min-h-[200px] items-center justify-center lg:col-span-5 lg:min-h-[220px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: smoothEase }}
          >
            <svg
              viewBox="0 0 320 320"
              className="mx-auto h-auto w-full max-w-[min(100%,13rem)] sm:max-w-[14rem] lg:max-w-[15rem] xl:max-w-[17rem] pb-10"
              aria-hidden
            >
              {/* Connecting lines - tree/network style */}
              <g stroke="rgb(6 182 212)" strokeWidth="1.5" fill="none" opacity="0.6">
                <path d="M160 280 L160 220 L100 160 L80 100" />
                <path d="M160 220 L160 160 L200 100 L220 60" />
                <path d="M160 220 L220 160 L260 100" />
                <path d="M160 160 L120 100 L100 60" />
                <path d="M160 160 L200 100" />
                <path d="M160 280 L160 220" />
              </g>
              {/* Node circles with white center (icon placeholder) */}
              {[
                { cx: 80, cy: 100, color: "rgb(6 182 212)" },
                { cx: 220, cy: 60, color: "rgb(6 182 212)" },
                { cx: 260, cy: 100, color: "rgb(6 182 212)" },
                { cx: 100, cy: 60, color: "rgb(6 182 212)" },
                { cx: 200, cy: 100, color: "rgb(6 182 212)" },
                { cx: 120, cy: 100, color: "rgb(6 182 212)" },
                { cx: 160, cy: 160, color: "rgb(34 197 94)" },
                { cx: 160, cy: 220, color: "rgb(6 182 212)" },
                { cx: 100, cy: 160, color: "rgb(6 182 212)" },
                { cx: 220, cy: 160, color: "rgb(34 197 94)" },
                { cx: 160, cy: 280, color: "rgb(6 182 212)" },
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.cx} cy={node.cy} r="22" fill={node.color} />
                  <circle cx={node.cx} cy={node.cy} r="8" fill="white" opacity="0.95" />
                </g>
              ))}
            </svg>
          </motion.div>
          {/* Right: Results-Driven + paragraph + pagination + prev/next */}
          <motion.div
            className="lg:col-span-7 lg:pl-1 xl:pl-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
          >
            <div className="min-h-[9.5rem] sm:min-h-[10rem] lg:min-h-[11rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, ease: smoothEase }}
                >
                  <h3 className="text-gray-900">
                    {slides[slideIndex].title}
                  </h3>
                  <p className="mt-3 max-w-none text-base leading-relaxed text-gray-600 sm:mt-4 sm:text-lg lg:text-xl lg:leading-relaxed">
                    {slides[slideIndex].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-5 flex items-center gap-3 sm:mt-6 sm:gap-4">
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      i === slideIndex ? "scale-110 bg-blue-500" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-100 active:scale-95"
                  aria-label="Previous"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-100 active:scale-95"
                  aria-label="Next"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}