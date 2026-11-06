"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { productPageImagery } from "@/app/lib/serviceImagery";
import SolutionLandingHero from "@/app/components/SolutionLandingHero";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const cardShell =
  "group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white text-left shadow-sm shadow-slate-900/5 ring-1 ring-slate-950/[0.04] transition-[border-color,box-shadow] duration-300 ease-out hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/10 hover:ring-slate-950/[0.06]";

const cardGrid =
  "grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:gap-x-10 lg:gap-y-10";

const cardImageTop =
  "relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100";

const cardBody = "flex min-h-0 flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6";

function CardEnquireLink() {
  return (
    <div className="mt-auto border-t border-slate-100 pt-5">
      <Link
        href="/contact"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
      >
        Enquire now
        <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

const accessories = [
  {
    name: "Wireless Exit Button",
    model: "WS3X3",
    description:
      "Touchless request-to-exit (RTE) switch or motion sensor exit switch, used in access control systems to allow individuals to exit a secured area without physically touching a switch or button.",
    imageUrl: productPageImagery.accessoryExit,
    imageAlt: "Wireless Exit Button - touchless request-to-exit switch",
    imageClassName: "object-contain object-center p-6",
  },
  {
    name: "Exit Push Button",
    model: "PB3X3",
    description: [
      "Our specially designed push button for doors, gates, or anywhere there is an access control system. Wide range of options including push button size and color.",
      "This request to exit (REx) device allows you to open a locked door to exit without needing credentials.",
    ],
    imageUrl: "/images/Exit-Push-300x300.png",
    imageAlt: "Exit Push Button - request to exit device",
    imageClassName: "object-contain object-center p-6",
  },
];

const fpSensorAndRfCards = [
  {
    title: "FP Sensor",
    subtitle: "Fingerprint Sensor",
    description:
      "Fingerprint sensors integrate with your system to enhance security and provide a convenient, reliable method for allowing or denying entry to secure areas. Access control with fingerprint sensors is widely used in offices, government facilities, healthcare facilities, data centers, and more.",
    imageUrl: productPageImagery.fingerprintSensor,
    imageAlt: "Fingerprint sensor device for access control",
  },
  {
    title: "RF Cards",
    subtitle: "Proximity & MIFARE",
    description:
      "This card supports ISO Format proximity technology at both 125KHz and 13.56MHz frequencies. It is lightweight at 9 grams and can be printed on both sides. Common applications include access control, time and attendance, employee ID cards, ticketing, visitor management, and more.",
    imageUrl: productPageImagery.rfCards,
    imageAlt: "RF card with access control terminal",
  },
];

const electroMagneticLocks = [
  {
    model: "SL-600",
    title: "Single Leaf Electro Magnetic Lock",
    imageUrl: "/images/SL-600.png",
    imageAlt: "SL-600 Single Leaf Electro Magnetic Lock",
    specs: [
      "Operating Voltage : Power DC 12V",
      "Holding Force : 600 LBS",
      "Suitable For : Wooden door, Glass door, Metal door, Fireproof door. Etc",
    ],
  },
  {
    model: "DL-600",
    title: "Double Leaf Electro Magnetic Lock",
    imageUrl: "/images/DL-600-1.png",
    imageAlt: "DL-600 Double Leaf Electro Magnetic Lock",
    specs: [
      "Operating Voltage : Power DC 12V-24V",
      "Holding Force : 600 LBS *2",
      "Suitable For : Wooden door, Glass door, Metal door, Fireproof door. Etc..",
    ],
  },
];

export default function AccessoriesPage() {
  return (
    <>
      <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
        <SolutionLandingHero
          badge={
            <span className="inline-flex rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-800 shadow-sm backdrop-blur-sm">
              Access Control Accessories
            </span>
          }
          title="Access Control Accessories for Factory Gates"
          subtitle="Exit buttons, fingerprint sensors, RF cards, and electromagnetic locks — everything you need to complete turnstile lanes, doors, and secure zones at industrial and commercial sites."
          imageSrc="/images/clms-hardware-governance.png"
          imageAlt="Industrial site operations ,  access hardware and workforce context"
          primaryCta={{ label: "Get a Quote", href: "/contact" }}
          secondaryCta={{ label: "Browse Devices", href: "/biometric-devices" }}
        />

        {/* Main content – section title + two products */}
        <section className="border-t border-slate-200/80 py-8 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Accessories
            </motion.h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-blue-600" aria-hidden />
            <div className={`mt-10 ${cardGrid}`}>
              {accessories.map((product, i) => (
                <motion.article
                  key={product.name}
                  className={cardShell}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.08 }}
                >
                  <div className={cardImageTop}>
                    <Image
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      fill
                      className={`${product.imageClassName} transition duration-500 ease-out group-hover:scale-[1.03]`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 36rem"
                    />
                  </div>
                  <div className={cardBody}>
                    <h3 className="text-slate-900">{product.name}</h3>
                    <span className="mt-2 inline-flex w-fit rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 ring-1 ring-inset ring-blue-600/15">
                      {product.model}
                    </span>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                      {Array.isArray(product.description) ? (
                        product.description.map((para, j) => <p key={j}>{para}</p>)
                      ) : (
                        <p>{product.description}</p>
                      )}
                    </div>
                    <CardEnquireLink />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* FP Sensor & RF Cards */}
        <section className="border-t border-slate-200/80 py-8 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase }}
            >
              Sensors &amp; credentials
            </motion.h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              Fingerprint readers and RF cards for integrated access control deployments.
            </p>
            <div className={`mt-8 ${cardGrid}`}>
              {fpSensorAndRfCards.map((product, i) => (
                <motion.article
                  key={product.title}
                  className={cardShell}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.22, ease: smoothEase } }}
                >
                  <div className={cardImageTop}>
                    <Image
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      fill
                      className=" object-center transition duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 36rem"
                    />
                  </div>
                  <div className={cardBody}>
                    <h3 className="text-slate-900">{product.title}</h3>
                    <p className="mt-2 text-sm font-medium text-blue-600">{product.subtitle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{product.description}</p>
                    <CardEnquireLink />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Electro-Magnetic Locks – SL-600 & DL-600 */}
        <section className="border-t border-slate-200/80 py-8 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase }}
            >
              Electromagnetic locks
            </motion.h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              High holding force maglocks for single and double leaf openings.
            </p>
            <div className={`mt-8 ${cardGrid}`}>
              {electroMagneticLocks.map((product, i) => (
                <motion.article
                  key={product.model}
                  className={cardShell}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.22, ease: smoothEase } }}
                >
                  <div className={cardImageTop}>
                    <Image
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      fill
                      className="object-contain object-center p-4 transition duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 36rem"
                    />
                  </div>
                  <div className={cardBody}>
                    <span className="inline-flex w-fit rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 ring-1 ring-inset ring-blue-600/15">
                      {product.model}
                    </span>
                    <h3 className="mt-3 text-base font-semibold leading-snug text-slate-900 sm:text-lg">{product.title}</h3>
                    <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600" role="list">
                      {product.specs.map((spec, j) => (
                        <li key={j} className="flex gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                    <CardEnquireLink />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-links — turnstiles and face recognition */}
        <section className="border-t border-slate-200/80 bg-slate-50/60 py-8 lg:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Used alongside</p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Link
                  href="/turnstiles-access"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-blue-300 hover:shadow-md"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/15" aria-hidden>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="4" height="18" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/><path d="M7 12h10"/>
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-700">Turnstile Access Control for Factory Gates</p>
                    <p className="mt-0.5 text-xs text-slate-500">Exit buttons, maglocks and RF cards complete every turnstile lane — see the full gate system.</p>
                  </div>
                </Link>
                <Link
                  href="/face-recognition-attendance"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-blue-300 hover:shadow-md"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/15" aria-hidden>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-700">Face Recognition Attendance System for Industrial Sites</p>
                    <p className="mt-0.5 text-xs text-slate-500">Fingerprint sensors and RF cards integrate with face terminals — one enrolled identity across every reader.</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQ — details/summary accordion
        ══════════════════════════════════════════ */}
        <section aria-labelledby="accessories-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 id="accessories-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Common questions about exit buttons, electromagnetic locks, RF cards, and fingerprint sensors.
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
                {([
                  {
                    q: "What accessories does an access control system need?",
                    a: "Beyond the reader itself: a locking device (electromagnetic lock or electric strike), a request-to-exit device so people can leave without a credential, a power supply, and credentials such as RF cards. Which combination you need depends on the door type and the fire-safety requirement for that opening.",
                  },
                  {
                    q: "What is a request-to-exit (RTE) button and why is it required?",
                    a: "An RTE device releases the lock from the secure side so a person can exit without presenting a credential. It matters for safety as much as convenience — most fire and building codes require free egress from a secured area, and a maglock with no exit release can trap people inside.",
                  },
                  {
                    q: "What is the difference between a push button and a touchless exit switch?",
                    a: "A push button is pressed physically; a touchless switch uses motion detection to release the lock when a hand approaches. Touchless units are used in cleanrooms, hospitals and food-processing areas where surface contact is restricted, and in high-traffic doors where mechanical buttons wear out.",
                  },
                  {
                    q: "How much holding force does an electromagnetic lock need?",
                    a: "600 lbs suits most standard interior and glass doors. Higher-traffic or external doors, and doors that see forced-entry risk, need proportionally more. Double-leaf openings need a maglock per leaf — our DL-600 delivers 600 lbs on each.",
                  },
                  {
                    q: "Will a maglock work on a glass door?",
                    a: "Yes, with the correct mounting bracket — glass doors need a U-bracket or L-bracket assembly rather than direct fixing. The same lock works across wooden, glass, metal and fire-rated doors provided the mounting hardware matches.",
                  },
                  {
                    q: "What happens to a maglock during a power failure or fire alarm?",
                    a: "Electromagnetic locks are fail-safe by design: they release when power is cut, so a power failure or fire-alarm trigger frees the door for egress. This is why maglocks are common on escape routes, and why the power supply and alarm interface matter as much as the lock itself.",
                  },
                  {
                    q: "Which RFID cards work with your readers?",
                    a: "Cards supporting ISO-format proximity at 125 kHz and 13.56 MHz, covering common proximity and MIFARE deployments. Cards are printable on both sides for use as employee ID, so one credential serves access, attendance, canteen and visitor identification.",
                  },
                  {
                    q: "Can the same RF card work across multiple sites?",
                    a: (<>Yes, where all sites run on the same access control platform. A card issued at one plant is recognised at any reader connected to the same system — useful for staff and contractors who move between locations. Where sites run on different legacy controllers, multi-site card use depends on whether the card format and frequency are shared; we check this during the survey. For organisations running <Link href="/face-recognition-attendance" className="font-medium text-blue-600 underline-offset-2 hover:underline">face recognition attendance</Link> across sites, biometric identity removes the card dependency entirely — one enrolled face works at every gate with no card to lose or forget.</>),
                  },
                  {
                    q: "Can we keep our existing cards when we change readers?",
                    a: "Usually yes, if the existing cards run on 125 kHz or 13.56 MHz standards. Re-issuing credentials to a large workforce is expensive and disruptive, so we check card compatibility during the site survey before recommending readers.",
                  },
                  {
                    q: "Do fingerprint sensors work as standalone devices or do they need a controller?",
                    a: (<>Sensors integrate into an access control system rather than operating alone — the sensor captures, the controller decides, the lock or lane responds. For sites wanting a self-contained unit, a <Link href="/biometric-devices" className="font-medium text-blue-600 underline-offset-2 hover:underline">biometric terminal</Link> combines all three.</>),
                  },
                  {
                    q: "Can accessories be added to an existing access control installation?",
                    a: "Yes. Exit buttons, maglocks and card readers are commonly retrofitted to doors already under access control, and to lanes where the original installation covered entry but not egress or secondary doors. Compatibility depends on the existing controller and voltage.",
                  },
                  {
                    q: "Do you supply accessories separately, or only with a full system?",
                    a: (<>Both. Accessories are supplied standalone for sites completing or extending an existing installation, and as part of a full deployment alongside <Link href="/biometric-devices" className="font-medium text-blue-600 underline-offset-2 hover:underline">biometric devices</Link> and <Link href="/turnstiles-access" className="font-medium text-blue-600 underline-offset-2 hover:underline">turnstiles</Link>.</>),
                  },
                  {
                    q: "Are accessories covered under AMC?",
                    a: (<>Yes — exit devices, locks and readers are covered alongside biometric terminals and turnstiles under <Link href="/services/biometric-amc" className="font-medium text-blue-600 underline-offset-2 hover:underline">biometric AMC</Link>, which matters because maglocks and exit buttons are among the highest-wear components in an access installation.</>),
                  },
                ] as { q: string; a: React.ReactNode }[]).map((item, index) => (
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
          headingId="accessories-final-cta-heading"
          heading="Complete your access install with the right accessories"
          description="From exit buttons to maglocks, we help you spec hardware that matches your lanes, doors, and safety requirements."
          primaryLabel="Enquire now"
          secondaryLabel="Talk to sales"
        />
      </div>
    </>
  );
}
