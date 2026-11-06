import HeroSection from "@/app/components/solution/SolutionHeroBanner";
import PainPointsSection from "@/app/components/solution/PainPointsSection";
import FeaturesSection from "@/app/components/solution/FeaturesSection";
import LifecycleSection from "@/app/components/solution/LifeCycleSection";
import CTASection from "@/app/components/solution/CTASection";
import { AnimatedSection } from "@/app/components/AnimatedSection";
import { FlyInText } from "@/app/components/FlyInText";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import {
  IconRoute,
  IconTruck,
  IconGps,
  IconCheckCircle,
  IconBox,
  IconShield,
  IconTag,
  IconUser,
  IconClock,
  IconGlobal,
  IconMapPin,
  IconChart,
  IconCode,
} from "@/app/components/solution/Icons";
import AnimatedCounter from "@/app/components/AnimatedCounter";


const heroData = {
  bgImage: "/images/solutions/courier-dashboard.jpeg", 
  bgImageAlt: "Courier delivering a package, tracked live on dashboard and mobile",
  bgPosition: "72% 40%",
  gradientCenter: "18% 22%",
  eyebrow: "InOps",
  titleLine1: "Delivery Management Software",
  titleLine2: "for Last-Mile & Factory Dispatch",
  description:
    "Smart dispatch, live tracking, and digital proof-of-delivery for reliable last-mile operations that keep customers coming back.",
  buttons: [
    { label: "Book a Demo", href: "/contact", variant: "primary" as const },
    { label: "See Features", href: "#delivery-features", variant: "outline" as const },
  ],
};

const painData = {
  layout: "grid" as const,
  heading: "Stop Losing Margin to Last-Mile Chaos",
  description:
    "The most expensive part of your supply chain shouldn't be the most fragmented. Resolve your core logistics pain points.",
  points: [
    { title: "Inefficient Routing", description: "Manual planning leads to excessive fuel costs and driver fatigue." },
    { title: "Visibility Gaps", description: "No real-time insight into driver location or delivery status." },
    { title: "Dispatch Delays", description: "Bottlenecks in order management cause cascading service failures." },
    { title: "POD Disputes", description: "Lack of digital evidence leads to costly customer claims." },
  ],
  highlightBadges: [
    { value: "−28%", label: "Reduction in fuel costs", colorClass: "bg-gray-900 text-white" },
    { value: "+42%", label: "Customer satisfaction score", colorClass: "bg-blue-600 text-white" },
  ],
};

const featuresData = {
  eyebrow: "Core Capabilities",
  heading: "Engineered for Operational Excellence",
  description: "Powerful tools built for modern fleets that demand precision and real-time responsiveness.",
  ctaLabel: "Explore All Features",
  ctaHref: "/contact",
  cards: [
    {
      icon: <IconRoute />,
      title: "AI Route Optimization",
      description: "Our proprietary algorithms calculate thousands of variables to find the most efficient route in seconds.",
    },
    {
      icon: <IconTruck />,
      title: "Transport Management",
      description: "Centralize multi-modal shipments and carrier relations in a single, unified logistics dashboard.",
    },
    {
      icon: <IconGps />,
      title: "Real-Time Fleet Tracking",
      description: "Use GPS telemetry and breadcrumb mapping to provide total oversight of every asset on the road.",
    },
    {
      icon: <IconShield />,
      title: "Digital POD",
      description: "Capture signatures, photos, and geotagged timestamps to eliminate delivery dispute forever.",
    },
  ],
};

const lifecycleData = {
  heading: "The Seamless Delivery Lifecycle",
  subheading: "From click to customer, InOps orchestrates every micro-moment.",
  steps: [
    {
      icon: <IconBox className="h-6 w-6" />,
      label: "Order",
      sublabel: "Consolidation & validation",
    },
    {
      icon: <IconTag className="h-6 w-6" />,
      label: "Dispatch",
      sublabel: "Route assignment & fleet",
    },
    {
      icon: <IconRoute className="h-6 w-6" />,
      label: "Optimization",
      sublabel: "AI route sequencing",
    },
    {
      icon: <IconGps className="h-6 w-6" />,
      label: "Track",
      sublabel: "Live GPS monitoring",
    },
    {
      icon: <IconCheckCircle className="h-6 w-6" />,
      label: "Delivery & POD",
      sublabel: "Digital confirmation",
    },
  ],
};

const ctaData = {
  heading: "Deliver on Time, Every Time.",
  subheading:
    "Join the world's most efficient logistics operations. Scale your last-mile without scaling your overhead.",
  buttons: [
    { label: "Request a Demo", href: "/contact", variant: "white" as const },
  ],
  layout: "centered" as const,
  trustBadges: [
    {
      icon: <IconGlobal />,
      label: "Global Deployment",
    },
    {
      icon: <IconShield />,
      label: "ISO 27001 Certified",
    },
    {
      icon: <IconClock />,
      label: "24/7 Priority Support",
    },
  ],
};

const deliveryFaqItems = [
  {
    question: "What is delivery management software?",
    answer:
      "Delivery management software is a platform that orchestrates the dispatch, routing, tracking, and proof-of-delivery for outbound shipments. It replaces manual dispatch boards and phone-based driver coordination with automated route assignment, live GPS tracking, customer notifications, and a digital record of every delivery — from order release to confirmed receipt.",
  },
  {
    question: "How does digital proof-of-delivery (POD) work?",
    answer:
      "When a driver completes a delivery, they capture a digital confirmation on their mobile device: a recipient signature, photo of the delivered goods, or a QR/OTP acknowledgement. The POD is timestamped, geotagged, and uploaded automatically to the delivery record. Dispatch teams and customers can view it instantly, eliminating disputes over whether a delivery was made and providing an audit trail for billing and claims.",
  },
  {
    question: "What is last-mile delivery and why is it the most expensive stage?",
    answer:
      "Last-mile delivery is the final leg of the supply chain — from a distribution hub to the end customer or delivery point. It accounts for 41–53% of total logistics costs because routes are geographically dispersed, individual stops are small, failed deliveries require re-attempts, and real-time coordination between dispatcher, driver, and customer is hard to maintain at scale. InOps delivery management addresses each of these with AI route optimization, automated customer notifications, and live exception handling.",
  },
  {
    question: "How does AI route optimization reduce delivery costs?",
    answer:
      "The InOps routing engine evaluates thousands of variable combinations — stop sequence, vehicle capacity, time windows, traffic patterns, and driver shift hours — to compute the most efficient route across an entire fleet simultaneously. Optimised routes reduce total kilometres driven, lower fuel consumption, increase the number of deliveries per vehicle shift, and reduce driver overtime. Customers report an average 28% reduction in fuel costs after deployment.",
  },
  {
    question: "Can customers receive real-time tracking updates?",
    answer:
      "Yes. The platform generates a shareable live-tracking link for each shipment, which can be sent to the customer via SMS or WhatsApp automatically when the driver departs. Customers see the driver's real-time location, estimated arrival time, and delivery status without needing to call dispatch — reducing inbound WISMO (Where Is My Order?) calls significantly.",
  },
  {
    question: "How does InOps delivery management integrate with our ERP or order management system?",
    answer:
      "InOps connects to ERP and OMS platforms via REST API and standard data connectors. Orders flow in from the ERP automatically, are dispatched through InOps, and delivery confirmations (including POD records and timestamps) are written back to the source system. This eliminates manual re-entry, keeps order status in sync, and ensures billing can be triggered on confirmed delivery.",
  },
  {
    question: "Is it suitable for multi-branch or franchise delivery operations?",
    answer:
      "Yes. The platform supports multi-depot, multi-branch deployments where each branch manages its own fleet and routes but group-level operations can see consolidated performance across all branches. Access controls let branch managers see only their deliveries; logistics heads and group ops see the full network. This makes it well suited to manufacturers, distributors, and franchise chains running deliveries from multiple fulfilment points.",
  },
] as const;


const deliveryStats = [
  { label: "On-Time Delivery %", value: 98.4, suffix: "%", change: "↑ 2.4% vs last month" },
  { label: "Avg Delivery Time",  value: 42,   suffix: " min", change: "↑ 12.1% vs last month" },
  { label: "Fleet Utilization",  value: 94.2, suffix: "%", change: "↑ 5.5% vs last month" },
];


const impactPersonas = [
  {
    tag: "Dispatch Manager",
    headline: "Improved Routing & Exceptions",
    body: "Reduce the cognitive load on dispatchers with AI-driven suggestions and automated exception alerts.",
    icon: (
      <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    tag: "Logistics Head",
    headline: "Lower Costs, Higher Reliability",
    body: "Strategic oversight into fleet efficiency that translates directly into measurable transport savings.",
    icon: (
      <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    tag: "Customer Ops",
    headline: "Enhanced Brand Experience",
    body: "Give customers real-time tracking links and proactive notifications that build long-term trust.",
    icon: <IconUser className="h-6 w-6 text-gray-500" />,
  },
];


const hubItems = [
  {
    name: "GeoMaps",
    desc: "Maps & Location Intelligence",
    Icon: IconMapPin,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    position: "top",
  },
  {
    name: "Telematics+",
    desc: "Vehicle & Driver Telemetry",
    Icon: IconTruck,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    position: "left",
  },
  {
    name: "CarrierAPI",
    desc: "Carrier Connectivity & APIs",
    Icon: IconCode,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    position: "right",
  },
  {
    name: "GlobalTMS",
    desc: "Transport Management Systems",
    Icon: IconChart,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    position: "bottom",
  },
];

const integrationFeatures = [
  "Standard Telematics (OBD-II, J1939)",
  "Native Google Maps & HERE Integration",
  "REST API for Custom Carrier Portals",
  "Certified TMS Connectors",
];

function HubCard({ item }: { item: (typeof hubItems)[number] }) {
  const { Icon, name, desc, iconBg, iconColor } = item;
  return (
    <div className="flex w-36 flex-col items-center gap-1.5 rounded-xl border border-gray-100 bg-white px-3 py-4 text-center shadow-sm">
      <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </span>
      <span className="text-xs font-bold text-gray-900">{name}</span>
      <span className="text-[11px] leading-tight text-gray-400">{desc}</span>
    </div>
  );
}



export default function DeliveryPage() {
  return (
    <main>
      <HeroSection {...heroData} />
      <PainPointsSection {...painData} />
      <FeaturesSection {...featuresData} id="delivery-features" />
      <LifecycleSection {...lifecycleData} variant="connected" />
      <AnimatedSection className="bg-blue-100/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-10">
            <div>
              <FlyInText
                as="h2"
                direction="up"
                className="text-2xl font-extrabold text-gray-900 sm:text-3xl leading-tight"
              >
                Performance At a Glance
              </FlyInText>
              <FlyInText
                as="p"
                direction="up"
                delay={0.06}
                className="mt-3 text-sm text-gray-600 leading-relaxed sm:max-w-xs"
              >
                Track the metrics that define your logistics success and drive data-driven decision making.
              </FlyInText>
              <AnimateOnScroll variant="fade-up" delay={150} className="mt-5">
                <span className="inline-block rounded-full border border-gray-300 bg-white px-4 py-1.5 text-xs font-semibold text-gray-600 shadow-sm">
                  Real-time Data
                </span>
              </AnimateOnScroll>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {deliveryStats.map((stat, i) => (
                <AnimateOnScroll
                  key={stat.label}
                  variant="fade-up"
                  delay={i * 100}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"
                >
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
                    {stat.label}
                  </p>
                  <p className="font-extrabold text-blue-600 leading-none">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={1.4}
                      delay={0.2 + i * 0.1}
                      className="text-2xl sm:text-3xl"
                    />
                  </p>
                  <p className="mt-3 text-xs font-medium text-green-500">{stat.change}</p>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <AnimateOnScroll variant="fade-up" className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <FlyInText as="h2" direction="up" className="text-2xl font-extrabold text-gray-900 sm:text-3xl whitespace-nowrap">
              Impact Across the Enterprise
            </FlyInText>
            <div className="h-px flex-1 bg-gray-200" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {impactPersonas.map((persona, i) => (
              <AnimateOnScroll
                key={persona.headline}
                variant="fade-up"
                delay={i * 100}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                    {persona.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-[var(--inops-blue)]">
                      {persona.tag}
                    </p>
                    <h3 className="text-sm font-extrabold text-gray-900 leading-snug">
                      {persona.headline}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed italic">
                  &ldquo;{persona.body}&rdquo;
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold text-blue-600 mb-0.5">InOps</p>
              <FlyInText as="h2" direction="up" className="text-2xl font-extrabold text-gray-900 sm:text-3xl leading-tight">
                Built for Connectivity
              </FlyInText>
              <FlyInText as="p" direction="up" delay={0.07} className="mt-1 text-sm text-gray-500 leading-relaxed max-w-xl">
                InOps doesn&apos;t operate in a vacuum. We integrate seamlessly with your existing
                technology ecosystem, from telematics providers to global map APIs.
              </FlyInText>
              <ul className="mt-6 space-y-3">
                {integrationFeatures.map((f, i) => (
                  <AnimateOnScroll key={f} variant="slide-right" delay={i * 70} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-3 w-3 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700">{f}</span>
                  </AnimateOnScroll>
                ))}
              </ul>

              <AnimateOnScroll variant="slide-right" delay={integrationFeatures.length * 70} className="mt-4 flex items-start gap-3 rounded-xl bg-blue-50 px-5 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                  <IconShield className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="text-sm font-bold text-blue-700">Secure. Reliable. Scalable.</p>
                  <p className="text-xs text-gray-500 mt-0.5">Enterprise-grade integrations with 99.99% uptime guarantee.</p>
                </div>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll variant="slide-left" delay={150}>
              <div className="relative rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm overflow-hidden">
                <div className="flex items-center justify-center gap-3 mb-10">
                  <span className="h-px w-8 bg-blue-300" />
                  <span className="text-sm font-semibold text-blue-600">Seamless Integrations</span>
                  <span className="h-px w-8 bg-blue-300" />
                </div>

                <div className="relative mx-auto grid max-w-md grid-cols-3 grid-rows-3 items-center justify-items-center gap-y-6">
                  <div className="col-start-2 row-start-1">
                    <HubCard item={hubItems[0]} />
                  </div>
                  <div className="col-start-1 row-start-2">
                    <HubCard item={hubItems[1]} />
                  </div>
                  <div className="col-start-2 row-start-2 z-10">
                    <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-gray-200 bg-white shadow-md">
                      <svg className="h-7 w-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l2.5 4.5L19 9l-4.5 2.5L12 16l-2.5-4.5L5 9l4.5-2.5L12 2z" />
                      </svg>
                      <span className="mt-1 text-xs font-extrabold text-gray-900">InOps</span>
                    </div>
                  </div>
                  <div className="col-start-3 row-start-2">
                    <HubCard item={hubItems[2]} />
                  </div>
                  <div className="col-start-2 row-start-3">
                    <HubCard item={hubItems[3]} />
                  </div>
                  <span className="pointer-events-none absolute left-1/2 top-[24%] h-2 w-2 -translate-x-1/2 rounded-full bg-blue-500" />
                  <span className="pointer-events-none absolute left-1/2 top-[74%] h-2 w-2 -translate-x-1/2 rounded-full bg-blue-500" />
                  <span className="pointer-events-none absolute left-[24%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-500" />
                  <span className="pointer-events-none absolute left-[74%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-500" />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            {/* <AnimateOnScroll variant="fade-up"> */}
              {/* <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-blue-800">
                Delivery &amp; Warehouse FAQ
              </span> */}
            {/* </AnimateOnScroll> */}
            <FlyInText
              as="h2"
              id="delivery-faq-heading"
              direction="up"
              delay={0.05}
              className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            >
              Frequently asked questions
            </FlyInText>
            <FlyInText
              as="p"
              direction="up"
              delay={0.1}
              className="mt-4 text-base leading-relaxed text-slate-600"
            >
              Answers to common questions about delivery management software, digital proof-of-delivery, AI route optimisation, last-mile logistics costs, customer tracking, and ERP integration.
            </FlyInText>
          </div>

          <AnimateOnScroll
            variant="fade-up"
            delay={120}
            className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.35)]"
          >
            <div className="divide-y divide-slate-200">
              {deliveryFaqItems.map((item, index) => (
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
          </AnimateOnScroll>
        </div>
      </AnimatedSection>
      <CTASection {...ctaData} />
    </main>
  );
}
