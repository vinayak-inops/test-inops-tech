"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SolutionLandingHero from "@/app/components/SolutionLandingHero";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";

const visitorHeroImage = "/images/visitor.jpg";

/** Scheduled vs walk-up process infographic ,  `public/images/Visitor-Management-Process.png` */
const visitorProcessImage = "/images/Visitor-Management-Process.png";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const featuresAndBenefits = [
  {
    title: "Streamlined Visitor Check-in",
    circleColor: "bg-orange-500",
    description: "Our system simplifies the check-in process for visitors, minimizing wait times and enhancing overall efficiency.",
    benefit: "Improved Visitor Experience and Reduced Queue Congestion.",
  },
  {
    title: "Real-time Visitor Monitoring",
    circleColor: "bg-pink-500",
    description: "Supervisors can monitor visitor activity in real-time, enabling proactive security measures and rapid response to any incidents.",
    benefit: "Heightened Security and Incident Management.",
  },
  {
    title: "Visitor Badge Printing",
    circleColor: "bg-yellow-500",
    description: "Instantly print customized visitor badges upon check-in, providing clear identification and enhancing on-site security.",
    benefit: "Improved Visual Identification and Enhanced Security Measures.",
  },
  {
    title: "Visitor Analytics and Reporting",
    circleColor: "bg-blue-900",
    description: "Generate comprehensive reports and analytics on visitor traffic and demographics, facilitating informed decision-making and resource allocation.",
    benefit: "Data-driven Insights for Resource Optimization.",
  },
  {
    title: "Customizable Visitor Registration",
    circleColor: "bg-emerald-500",
    description: "Organizations can tailor registration forms to gather specific information from visitors, ensuring compliance with security protocols and regulatory requirements.",
    benefit: "Enhanced Security and Regulatory Compliance.",
  },
  {
    title: "Access Control Integration",
    circleColor: "bg-blue-500",
    description: "Seamlessly integrate with access control systems to manage visitor access to restricted areas, enhancing overall facility security.",
    benefit: "Tightened Access Control and Improved Security Measures.",
  },
  {
    title: "Pre-registration and Pre-approval",
    circleColor: "bg-blue-800",
    description: "Allow hosts to pre-register and pre-approve visitors, streamlining the check-in process and reducing administrative overhead.",
    benefit: "Time Savings and Administrative Efficiency.",
  },
  {
    title: "Cloud-based Data Storage",
    circleColor: "bg-blue-800",
    description: "All visitor data is securely stored in the cloud, accessible anytime and anywhere, ensuring data integrity and compliance.",
    benefit: "Convenient Access and Enhanced Data Security.",
  },
];

const powerfulServices = [
  { title: "Integrated Applications For Enterprise", icon: "document", color: "bg-amber-500" },
  { title: "Biometric Attendance System", icon: "id", color: "bg-blue-400" },
  { title: "Access Control System", icon: "card", color: "bg-pink-500" },
  { title: "Visitor Management System", icon: "person", color: "bg-blue-500" },
  { title: "Canteen Management System", icon: "tray", color: "bg-blue-500" },
  { title: "Contract Management System", icon: "document-pen", color: "bg-amber-500" },
];

const visitorManagementFaqItems = [
  {
    question: "What is a Visitor Management System?",
    answer:
      "A Visitor Management System digitizes visitor registration, approvals, identity verification, gate passes, and visitor tracking for improved security.",
  },
  {
    question: "How does Visitor Management Software improve security?",
    answer:
      "It verifies visitor identity, captures visit details, notifies hosts, and maintains digital records for complete visitor traceability.",
  },
  {
    question: "Can visitors pre-register before arriving?",
    answer:
      "Yes. Visitors can complete pre-registration online, reducing waiting time at reception.",
  },
  {
    question: "Can the system integrate with access control?",
    answer:
      "Yes. Visitor Management Software integrates with access control systems, facial recognition devices, QR codes, and gate automation.",
  },
  {
    question: "Which organizations use Visitor Management Software?",
    answer:
      "Manufacturing companies, corporate offices, educational institutions, hospitals, warehouses, and industrial facilities commonly use Visitor Management Systems.",
  },
  {
    question: "Can contractor or vendor visitors be checked against the CLMS compliance register at entry?",
    answer:
      "Yes. InOps Visitor Management integrates with InOps CLMS (Iddion RegX) to validate contractor and vendor visitors at the gate. At check-in, the system verifies whether the visitor's company holds a current contractor licence, whether the establishment is active on the compliance register, and whether the visitor is on an approved vendor list — before a gate pass is issued. Contractor companies whose licences have lapsed or whose compliance documents are overdue can be blocked from entry automatically, closing a security and compliance gap that paper-based visitor registers routinely miss.",
  },
  {
    question: "How does InOps Visitor Management differ from the canteen and visitor module?",
    answer:
      "InOps Visitor Management is the standalone platform for any industrial or enterprise site that needs digital check-in, badge printing, host notifications, and access-control integration. The canteen and visitor management module adds meal-subsidy and canteen-access workflows for campuses that manage both visitor entry and employee meal entitlements on one platform. Standalone visitor management works wherever visitor control is the primary requirement; the integrated module is better suited to campuses where the same gate governs both visitor access and canteen entry.",
  },
  {
    question: "Can the system block blacklisted individuals or suspended contractor companies at entry?",
    answer:
      "Yes. InOps Visitor Management maintains a watchlist that security teams can update; when a visitor's identity matches a flagged record at check-in, the system withholds the gate pass and alerts the security desk. For industrial sites integrated with InOps CLMS, the watchlist is extended with contractor-level compliance data — so a contractor company whose licence has been suspended is automatically flagged when any of their staff attempt visitor entry.",
  },
] as const;

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ServiceIcon({ icon }: { icon: string }) {
  const c = "h-6 w-6";
  return (
    <>
      {icon === "document" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
      {icon === "card" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
      {icon === "tray" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
      {icon === "id" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>}
      {icon === "person" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
      {icon === "document-pen" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
    </>
  );
}

export default function VisitorManagementPage() {
  return (
    <>
      <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
        <SolutionLandingHero
          badge={
            <span className="inline-flex rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-800 shadow-sm backdrop-blur-sm">
              InOps VizOne
            </span>
          }
          title="Visitor Management System for Factories &amp; Offices"
          subtitle="Streamline check-in, badges, host workflows, and real-time visibility across lobbies and restricted zones, integrated with your access stack."
          imageSrc={visitorHeroImage}
          imageAlt="Visitor management and secure facility lobby"
          primaryCta={{ label: "Book a Demo", href: "/contact" }}
          secondaryCta={{ label: "Download Brochure", href: "/brochures" }}
        />

        {/* Content – flow diagram left, text right */}
        <section className="mt-8 py-5 lg:py-8 border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-8 xl:gap-10">
              {/* Left – visitor flow diagram: person at kiosk + connected nodes */}
              <motion.div
                className="flex justify-center pl-4 sm:pl-6 lg:col-span-4 lg:justify-start lg:pl-8 xl:pl-10"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase }}
              >
                <div className="relative mx-auto aspect-square w-full max-w-[14rem] sm:max-w-[16rem] lg:mx-0 lg:max-w-[15rem] xl:max-w-[24rem]">
                  <svg viewBox="0 0 380 380" className="h-full w-full" aria-hidden>
                    {/* Connecting lines from center (190,190) to each node */}
                    {[
                      { cx: 190, cy: 60 },
                      { cx: 310, cy: 120 },
                      { cx: 310, cy: 260 },
                      { cx: 190, cy: 320 },
                      { cx: 70, cy: 260 },
                      { cx: 70, cy: 120 },
                    ].map((node, i) => {
                      const dx = node.cx - 190;
                      const dy = node.cy - 190;
                      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                      const ux = dx / dist;
                      const uy = dy / dist;
                      const x1 = 190 + 55 * ux;
                      const y1 = 190 + 55 * uy;
                      const x2 = node.cx - 28 * ux;
                      const y2 = node.cy - 28 * uy;
                      return (
                        <g key={i}>
                          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgb(94 234 212 / 0.5)" strokeWidth="2" strokeLinecap="round" />
                          <polygon
                            points={`${x2},${y2} ${x2 + 10 * ux + 4 * uy},${y2 + 10 * uy - 4 * ux} ${x2 + 10 * ux - 4 * uy},${y2 + 10 * uy + 4 * ux}`}
                            fill="rgb(94 234 212)"
                          />
                        </g>
                      );
                    })}
                    {/* Center: kiosk + person */}
                    <rect x="140" y="140" width="100" height="100" rx="12" fill="rgb(51 65 85)" stroke="rgb(94 234 212 / 0.6)" strokeWidth="2" />
                    <circle cx="190" cy="175" r="18" fill="rgb(148 163 184)" />
                    <rect x="165" y="198" width="50" height="35" rx="4" fill="rgb(100 116 139)" />
                    <rect x="158" y="155" width="24" height="28" rx="2" fill="rgb(71 85 105)" />
                    <rect x="198" y="155" width="24" height="28" rx="2" fill="rgb(71 85 105)" />
                    {/* Node 1 – Visitor (top) */}
                    <circle cx="190" cy="32" r="28" fill="rgb(30 41 59)" stroke="rgb(94 234 212)" strokeWidth="2" />
                    <circle cx="190" cy="28" r="8" fill="none" stroke="rgb(148 163 184)" strokeWidth="1.5" />
                    <path d="M190 38 q-12 8 -12 14 v4 h24 v-4 q0 -6 -12 -14z" fill="rgb(148 163 184)" />
                    {/* Node 2 – Monitor (top-right) */}
                    <circle cx="338" cy="120" r="28" fill="rgb(30 41 59)" stroke="rgb(94 234 212)" strokeWidth="2" />
                    <rect x="326" y="105" width="24" height="18" rx="2" fill="rgb(71 85 105)" />
                    <rect x="328" y="107" width="20" height="14" fill="rgb(34 211 238 / 0.3)" />
                    <rect x="332" y="125" width="12" height="4" fill="rgb(100 116 139)" />
                    {/* Node 3 – Printer (bottom-right) */}
                    <circle cx="338" cy="260" r="28" fill="rgb(30 41 59)" stroke="rgb(94 234 212)" strokeWidth="2" />
                    <rect x="324" y="242" width="28" height="22" rx="2" fill="rgb(71 85 105)" />
                    <rect x="328" y="246" width="20" height="4" fill="rgb(148 163 184)" />
                    <rect x="332" y="264" width="12" height="6" fill="rgb(100 116 139)" />
                    {/* Node 4 – ID badge (bottom) */}
                    <circle cx="190" cy="348" r="28" fill="rgb(30 41 59)" stroke="rgb(94 234 212)" strokeWidth="2" />
                    <rect x="178" y="328" width="24" height="32" rx="4" fill="rgb(71 85 105)" stroke="rgb(148 163 184)" strokeWidth="1" />
                    <circle cx="190" cy="338" r="6" fill="rgb(148 163 184)" />
                    {/* Node 5 – Group (bottom-left) */}
                    <circle cx="42" cy="260" r="28" fill="rgb(30 41 59)" stroke="rgb(94 234 212)" strokeWidth="2" />
                    <circle cx="35" cy="255" r="6" fill="rgb(148 163 184)" />
                    <circle cx="42" cy="258" r="6" fill="rgb(148 163 184)" />
                    <circle cx="49" cy="255" r="6" fill="rgb(148 163 184)" />
                    <path d="M32 265 q-4 6 -4 10 v3 h28 v-3 q0 -4 -4 -10" fill="rgb(148 163 184)" />
                    {/* Node 6 – Host (top-left) */}
                    <circle cx="42" cy="120" r="28" fill="rgb(30 41 59)" stroke="rgb(94 234 212)" strokeWidth="2" />
                    <circle cx="42" cy="116" r="8" fill="none" stroke="rgb(148 163 184)" strokeWidth="1.5" />
                    <path d="M42 126 q-10 6 -10 12 v4 h20 v-4 q0 -6 -10 -12z" fill="rgb(148 163 184)" />
                  </svg>
                </div>
              </motion.div>

              {/* Right – heading + paragraph (wider column) */}
              <motion.div
                className="min-w-0 lg:col-span-8 lg:pl-2 xl:pl-6"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
              >
                <h2 className="text-gray-900">
                  Visitor Management System for Industrial &amp; Enterprise Sites
                </h2>
                <p className="mt-6 w-full max-w-none text-lg leading-relaxed text-gray-600 sm:text-xl lg:text-xl lg:leading-relaxed">
                  InOps Visitor Management is the standalone platform for sites that need digital check-in, badge printing, host
                  notifications, and access-control integration — without tying it to canteen or meal workflows. For campuses that
                  also manage employee meal entitlements, the{" "}
                  <Link href="/canteen-and-visitor" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-200">
                    canteen and visitor management module
                  </Link>{" "}
                  combines both on one platform. Key capabilities of the standalone system:
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-5 lg:py-8 border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2 className="text-center text-gray-900"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Features & Benefits
            </motion.h2>
            <div className="mx-auto mt-2 h-0.5 w-20 rounded-full bg-blue-500" aria-hidden />
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6">
              {featuresAndBenefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: (i % 8) * 0.04 }}
                >
                  <span className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${item.circleColor} text-white`}>
                    <CheckIcon className="h-5 w-5 text-white" />
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    <p className="font-semibold text-blue-600 text-sm">{item.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visitor Management System ,  intro + process infographic (row: text left, graphic right) */}
        <section className="border-t border-gray-200 py-6 lg:py-10 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <motion.div
                className="text-center lg:max-w-xl lg:text-left xl:max-w-none"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <h2 className="text-gray-900">
                  The Visitor Check-In Process: Scheduled and Walk-Up Visits
                </h2>
                <div
                  className="mt-2 h-0.5 w-24 rounded-full bg-blue-500 lg:mx-0"
                  aria-hidden
                />
                <p className="mx-auto mt-6 text-gray-600 leading-relaxed text-base sm:text-lg lg:mx-0 lg:max-w-none">
                  The process covers both pre-scheduled visitors — host-approved digital passes issued before arrival — and
                  spontaneous walk-ins captured and verified on the spot. Every step feeds the same audit log, so security has
                  a complete, timestamped visitor record across all entry points.
                </p>
              </motion.div>
              <motion.div
                className="min-w-0"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
              >
                <div className="overflow-hidden">
                  <Image
                    src={visitorProcessImage}
                    alt="Visitor management process: scheduled visits and walk-up visits with step-by-step flows"
                    width={1230}
                    height={650}
                    className="h-auto w-full"
                    sizes="(max-width: 1023px) 100vw, (max-width: 1280px) 50vw, 640px"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Powerful Services for Your Business */}
        <section className="py-5 lg:py-8 border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2 className="text-gray-900"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Powerful Services for <span className="underline decoration-orange-400 decoration-2 underline-offset-2">Your Business</span>
            </motion.h2>
            <div className="mt-2 h-0.5 w-20 rounded-full bg-blue-500" />
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {powerfulServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-blue-200/70 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.22, ease: smoothEase } }}
                >
                  <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${service.color} text-white`}>
                    <ServiceIcon icon={service.icon} />
                  </span>
                  <h3 className="font-semibold text-gray-900">{service.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="visitor-management-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              {/* <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-blue-800">
                Visitor Management FAQ
              </span> */}
              <h2 id="visitor-management-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Answers to common questions about visitor registration, identity checks, pre-registration, access control, CLMS compliance validation, and how standalone visitor management differs from the canteen and visitor module.
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
                {visitorManagementFaqItems.map((item, index) => (
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
          headingId="visitor-management-final-cta-heading"
          heading="Empowering smarter workplaces across all industries"
          description="Innovative technology empowers smarter workplaces across diverse industries, with solutions tailored to optimize efficiency, collaboration, and productivity."
          primaryLabel="Get Started"
          secondaryLabel="Contact sales team"
        />
      </div>
    </>
  );
}
