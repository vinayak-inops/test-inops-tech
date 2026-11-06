"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { FlyInText } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";
import { OFFICE_ADDRESS_LINE, OFFICE_MAPS_EMBED_URL, OFFICE_MAPS_URL } from "@/app/lib/site";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const contactBanner = {
  src: "/images/contact-hero.png",
  alt: "InOps support specialist with headset ,  friendly, professional customer assistance",
  tagline: "Sales, support & partnerships · Bengaluru",
} as const;

const contactInfo: {
  label: string;
  value: string;
  icon: React.ReactNode;
  valueClass?: string;
}[] = [
  {
    label: "Location:",
    value: `${OFFICE_ADDRESS_LINE}.`,
    valueClass: "!text-slate-500",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Email:",
    value: "contact@inops.tech",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Call:",
    value: "+91 8027745220",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eef4f8] text-slate-950">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(57,189,232,0.16),transparent_28%),radial-gradient(circle_at_86%_0%,rgba(29,95,191,0.12),transparent_24%),linear-gradient(180deg,#eef4f8_0%,#f8fbfd_56%,#eef4f8_100%)]"
        aria-hidden
      />

      <section className="relative z-[1] px-4 pb-12 pt-[var(--home-nav-offset)] sm:px-6 lg:px-12 lg:pb-16">
        <div className="mx-auto max-w-7xl">
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
                  src={contactBanner.src}
                  alt={contactBanner.alt}
                  fill
                  className="object-cover object-[center_22%] sm:object-[center_28%]"
                  sizes="100vw"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/35 to-slate-950/80"
                  aria-hidden
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-5 sm:py-6">
                  <p className={inopsUi.heroKicker}>Contact</p>
                  <h1 className="home-display-heading inops-type-hero mt-4 text-white">Contact InOps: Book a Demo or Get Support</h1>
                  <p className={`${inopsUi.heroBannerDesc} mt-3 max-w-md`}>{contactBanner.tagline}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                    <a href="#contact-form" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--inops-blue)] shadow-sm transition hover:bg-blue-50 active:scale-95">
                      Book a Demo
                    </a>
                    <a href="#contact-form" className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-95">
                      Raise a Support Ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.header>

          <div className="mb-8 mt-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <FlyInText as="p" direction="down" className={inopsUi.eyebrowBrand}>
                Get in touch
              </FlyInText>
              <FlyInText
                as="h2"
                direction="left"
                delay={0.06}
                className={`mt-3 ${inopsUi.sectionHeading} !text-black`}
              >
                We&apos;re ready to help
              </FlyInText>
            </div>
            <FlyInText as="p" direction="up" delay={0.08} className={`max-w-lg ${inopsUi.lead}`}>
              Reach InOps IT Solutions at +91 80277 45220 or contact@inops.tech, or visit our office in Bommasandra Industrial Area, Bengaluru. Use the form below to book a <Link href="/contract-labour-management" className="underline font-medium hover:opacity-75">CLMS</Link> or biometric demo, ask about implementation, or raise an AMC support request.
            </FlyInText>
          </div>

          <div id="contact-form" className="grid grid-cols-1 gap-7 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              className="relative overflow-hidden rounded-[1.65rem] border border-white bg-white p-6 shadow-[0_18px_55px_-36px_rgba(15,47,87,0.5)] ring-1 ring-slate-900/[0.04] sm:p-7 lg:p-8"
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease: smoothEase }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: smoothEase } }}
            >
              <div
                className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#39bde8]/15 blur-3xl"
                aria-hidden
              />
              <div className="relative space-y-5">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="group rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/80 p-5 transition hover:border-[var(--inops-blue)]/35 hover:shadow-[0_18px_45px_-32px_rgba(15,47,87,0.65)]"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 * i }}
                    whileHover={{ x: 5, transition: { duration: 0.2, ease: smoothEase } }}
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[var(--inops-navy)] text-white shadow-lg shadow-slate-900/15 transition group-hover:bg-[var(--inops-blue)] group-hover:shadow-blue-600/25">
                        {item.icon}
                      </div>
                      <div>
                        <FlyInText as="p" direction="right" delay={0.05 * i} className={inopsUi.eyebrowBrand}>
                          {item.label.replace(":", "")}
                        </FlyInText>
                        <FlyInText as="p" direction="up" delay={0.08 + 0.05 * i} className={`mt-2 ${inopsUi.lead} ${item.valueClass ?? ""}`}>
                          {item.value}
                        </FlyInText>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-[1.65rem] border border-white bg-white p-6 shadow-[0_18px_55px_-36px_rgba(15,47,87,0.5)] ring-1 ring-slate-900/[0.04] sm:p-7 lg:p-8"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease: smoothEase, delay: 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: smoothEase } }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[var(--inops-blue)]/10 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <FlyInText as="p" direction="down" className={inopsUi.eyebrowBrand}>
                  Message us
                </FlyInText>
                <FlyInText as="h3" direction="left" delay={0.06} className={`mt-3 ${inopsUi.sectionHeading}`}>
                  Send us a message
                </FlyInText>
                <FlyInText as="p" direction="up" delay={0.12} className={`mt-3 ${inopsUi.lead}`}>
                  Tell us what you need. Our team will get back with the right next step.
                </FlyInText>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-10 overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[0_24px_80px_-48px_rgba(15,47,87,0.55)] ring-1 ring-slate-900/[0.04]"
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65, ease: smoothEase }}
            whileHover={{ y: -4, transition: { duration: 0.22, ease: smoothEase } }}
          >
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200/80 bg-gradient-to-r from-white via-slate-50 to-[#eaf7fc] px-6 py-5 sm:px-8">
              <div>
                <FlyInText as="p" direction="right" className={inopsUi.eyebrowBrand}>
                  Bengaluru office
                </FlyInText>
                <FlyInText as="h3" direction="up" delay={0.06} className={`mt-2 ${inopsUi.sectionHeading} !text-black`}>
                  Our Bengaluru Office — Bommasandra Industrial Area
                </FlyInText>
              </div>
              <a
                href={OFFICE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 text-sm font-semibold text-[color:var(--inops-blue)] transition hover:text-blue-700 md:inline-flex"
              >
                Open in Google Maps
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            {/* Mobile: static card only — embedded Maps shows a Google overlay / app prompt */}
            <a
              href={OFFICE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[220px] flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-100 via-slate-50 to-[#eaf7fc] px-6 py-10 text-center md:hidden"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--inops-navy)] text-white shadow-lg shadow-slate-900/15">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <p className="max-w-sm text-sm leading-relaxed text-slate-600">{OFFICE_ADDRESS_LINE}</p>
              <span className="inline-flex items-center gap-2 rounded-xl bg-[color:var(--inops-blue)] px-5 py-2.5 text-sm font-semibold text-white shadow-md">
                View on Google Maps
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
            <iframe
              title="Office location - Bommasandra Industrial Area, Bengaluru"
              src={OFFICE_MAPS_EMBED_URL}
              width="100%"
              height="390"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="hidden w-full grayscale-[15%] transition duration-500 hover:grayscale-0 md:block"
            />
          </motion.div>
          {/* FAQ */}
          <motion.section
            aria-labelledby="contact-faq-heading"
            className="mt-10 overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[0_24px_80px_-48px_rgba(15,47,87,0.55)] ring-1 ring-slate-900/[0.04]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: smoothEase }}
          >
            <div className="border-b border-slate-200/80 bg-gradient-to-r from-white via-slate-50 to-[#eaf7fc] px-6 py-5 sm:px-8">
              <FlyInText as="p" direction="right" className={inopsUi.eyebrowBrand}>
                Quick answers
              </FlyInText>
              <FlyInText as="h2" id="contact-faq-heading" direction="up" delay={0.06} className={`mt-2 ${inopsUi.sectionHeading} !text-black`}>
                Frequently asked questions
              </FlyInText>
            </div>
            <div className="divide-y divide-slate-200/80">
              {[
                {
                  question: "How do I request a demo?",
                  answer:
                    "Fill in the form on this page and select “Product Demo” as your enquiry type — our sales team will confirm a slot within one business day. Alternatively, call +91 80277 45220 or email contact@inops.tech directly. Demos are conducted over video call and typically run 30–45 minutes, covering the modules most relevant to your site.",
                },
                {
                  question: "Does InOps offer on-site factory assessments?",
                  answer:
                    "Yes. For enterprise engagements — particularly where you are deploying biometric attendance hardware, CLMS, or warehouse management across multiple plant locations — our implementation team conducts a paid on-site assessment before go-live. The assessment covers gate infrastructure, network readiness, shift patterns, contractor categories, and existing HR or ERP systems. Mention this in your message and we will include it in the initial scoping call.",
                },
                {
                  question: "How long does implementation typically take?",
                  answer:
                    "A single-site CLMS or HRIS deployment is typically live within 4–6 weeks. Multi-site rollouts with biometric hardware, custom integrations, or warehouse management modules are scoped individually — most complete within 8–16 weeks depending on site count and ERP complexity. All implementations include dedicated onboarding support and a hypercare period.",
                },
                {
                  question: "Is support available after go-live?",
                  answer:
                    "Yes. InOps provides ongoing support via phone, email, and a dedicated account manager for enterprise accounts. Support is available in English, Hindi, and Kannada. Critical issues (attendance system down, payroll processing blocked) are triaged immediately; standard issues are resolved within one business day under our SLA.",
                },
              ].map((item, index) => (
                <details key={item.question} className="group px-6 py-5 open:bg-slate-50/60 sm:px-8 sm:py-6">
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
                  <p className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  );
}
