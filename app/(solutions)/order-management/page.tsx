import HeroSection from "@/app/components/solution/SolutionHeroBanner";
import StatsBar from "@/app/components/solution/StatsBar";
import PainPointsSection from "@/app/components/solution/PainPointsSection";
import FeaturesSection from "@/app/components/solution/FeaturesSection";
import LifecycleSection from "@/app/components/solution/LifeCycleSection";
import CTASection from "@/app/components/solution/CTASection";
import { AnimatedSection } from "@/app/components/AnimatedSection";
import { FlyInText } from "@/app/components/FlyInText";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import AnimatedCounter from "@/app/components/AnimatedCounter";
import {
  IconBox,
  IconTruck,
  IconSearch,
  IconRefresh,
  IconCheckCircle,
  IconChart,
  IconTag,
  IconShield,
} from "@/app/components/solution/Icons";
import Image from "next/image";
import Link from "next/link";


const heroData = {
  bgImage: "/images/solutions/order-management.jpeg", 
  bgImageAlt: "Warehouse worker reviewing the order management dashboard",
  bgPosition: "72% 40%",
  gradientCenter: "18% 22%",
  eyebrow: "InOps",
  titleLine1: "Order Management System",
  titleLine2: "for Manufacturers",
  description:
    "InOps OMS captures, validates, and routes production orders, dispatch notes, and customer fulfilment across your plant and warehouse network — connected to the same workforce-compliance layer as InOps CLMS and HRIS.",
  buttons: [
    { label: "Book a Demo", href: "/contact", variant: "primary" as const },
    { label: "See Features", href: "#order-features", variant: "outline" as const },
  ],
};


const statsData = {
  heading: "Impact that Matters",
  subheading: "Data-driven organizations achieve higher margins. Track the metrics that define your growth.",
  stats: [
    { label: "Order Cycle Time", value: 4, suffix: ".2 Hours", change: "↓ 7.13% vs last month", changePositive: true },
    { label: "Fulfillment Rate", value: 99, suffix: ".8%", change: "↑ 1.3% vs last month", changePositive: true },
    { label: "Return Rate", value: 3, suffix: ".1%", change: "↓ 0.5% vs last month", changePositive: true },
    { label: "Order Accuracy", value: 99, suffix: ".95%", change: "↑ 0.6% vs last month", changePositive: true },
  ],
};

const painData = {
  layout: "grid" as const,
  heading: "Modern Fulfillment is Complex",
  description:
    "Legacy systems struggle with the fragmentation of modern multi-channel commerce. We solve the gaps that slow you down.",
  points: [
    { title: "Fragmented Channels", description: "Orders scattered across web, mobile, and marketplaces without a single view." },
    { title: "Fulfillment Delays", description: "Manual validation processes causing bottlenecks in picking and packing." },
    { title: "Zero Visibility", description: "Blind spots in the order journey leading to customer frustration and support calls." },
    { title: "Return Complexity", description: "Reverse logistics that are costly and difficult to track for both staff and customers." },
  ],
  highlightBadges: [
    { value: "−38%", label: "Reduction in processing errors", colorClass: "bg-gray-900 text-white" },
    { value: "+99.8%", label: "Fulfillment rate achieved", colorClass: "bg-blue-600 text-white" },
  ],
};

const featuresData = {
  eyebrow: "Platform Capabilities",
  heading: "Engineered for Scalability",
  description:
    "InOps OMS provides the tools required to manage orders from any source to any destination.",
  cards: [
    {
      icon: <IconTag />,
      title: "Unified Order Processing",
      description: "Consolidate orders from Shopify, Amazon, ERPs, and custom portals into a single, high-performance orchestration engine.",
    },
    {
      icon: <IconCheckCircle />,
      title: "Fulfillment Management",
      description: "Intelligent routing rules that assign orders to the best warehouse based on inventory availability and geographic proximity.",
    },
    {
      icon: <IconSearch />,
      title: "Real-time Order Tracking",
      description: "End-to-end visibility for both operations teams and end customers. Automated status updates at every milestone.",
    },
    {
      icon: <IconRefresh />,
      title: "Automated Returns Management",
      description: "A streamlined returns portal that automates labels, inspections, and refunds, turning a cost center into a loyalty builder.",
    },
  ],
  columns: 2 as const,
};

const lifecycleData = {
  heading: "The Order Lifecycle",
  subheading: "Seamlessly transition through every stage of the fulfillment journey with automated triggers and validation.",
  steps: [
    { icon: <IconBox className="h-6 w-6" />, label: "Order Capture", sublabel: "Omni-channel" },
    { icon: <IconCheckCircle className="h-6 w-6" />, label: "Validation", sublabel: "Fraud & data" },
    { icon: <IconTag className="h-6 w-6" />, label: "Fulfillment", sublabel: "Smart routing" },
    { icon: <IconTruck className="h-6 w-6" />, label: "Shipping", sublabel: "Carrier dispatch" },
    { icon: <IconRefresh className="h-6 w-6" />, label: "Returns", sublabel: "Loop closed" },
  ],
};

const ctaData = {
  heading: "Streamline your order operations today.",
  subheading: "Join manufacturers and industrial operations teams optimising their fulfilment with the InOps enterprise order management platform.",
  buttons: [
    { label: "Request Demo", href: "#", variant: "white" as const },
    { label: "Start Free Trial", href: "#", variant: "outline-white" as const },
  ],
  layout: "centered" as const,
  trustBadges: [
    // {
    //   label: "No Credit Card Required",
    // },
    {
      label: "14 day full feature trial",
    },
    {
      label: "Dedicated Onboarding",
    },
  ],
};


type LiveOrderRow = {
  id: string;
  customer: string;
  location: string;
  amount: string;
  status: "processing" | "shipped" | "delivered";
};

const liveOrders: LiveOrderRow[] = [
  { id: "#IN-R82", customer: "Rajesh Kumar", location: "Indiranagar", amount: "₹1,290", status: "processing" },
  { id: "#IN-R83", customer: "Priya Sharma", location: "Koramangala",amount: "₹1,355", status: "shipped" },
  { id: "#IN-R84", customer: "Sunit Patil", location: "Whitefield", amount: "₹11,450", status: "delivered" },
];

const statusMap = {
  processing: { label: "Processing", color: "bg-yellow-100 text-yellow-700" },
  shipped: { label: "Shipped", color: "bg-blue-100 text-blue-700" },
  delivered: { label: "Delivered", color: "bg-green-100 text-green-700" },
};

const dashboardKpis = [
  { label: "Avg Cycle Time",      value: 14,     suffix: ".2h", prefix: "",  delta: "+18%", icon: <IconChart className="h-4 w-4 text-teal-600" /> },
  { label: "Fulfillment Rate",    value: 98,     suffix: ".5%", prefix: "",  delta: "+1.2%", icon: <IconCheckCircle className="h-4 w-4 text-teal-600" /> },
  { label: "Revenue Today",       value: 452000, suffix: "",    prefix: "₹", delta: "+22%",  icon: <IconBox className="h-4 w-4 text-teal-600" /> },
  { label: "COD Reconciliation",  value: 99,     suffix: ".9%", prefix: "",  delta: "+0.5%", icon: <IconTruck className="h-4 w-4 text-teal-600" /> },
];

const avatarStyle: Record<string, { bg: string; text: string }> = {
  R: { bg: "bg-pink-100",   text: "text-pink-600"   },
  P: { bg: "bg-pink-100",   text: "text-pink-600"   },
  S: { bg: "bg-pink-100",   text: "text-pink-600"   },
};


const opsFeatureGroups = [
  {
    icon: <IconBox className="h-6 w-6 text-blue-600" />,
    iconBg: "bg-blue-50",
    title: "Order Processing",
    description: "High-velocity engine designed for Indian festive peak seasons.",
    items: ["Bulk Processing", "Priority Queue Routing", "COT Priority Routing"],
  },
  {
    icon: <IconCheckCircle className="h-6 w-6 text-blue-600" />,
    iconBg: "bg-blue-50",
    title: "Fulfillment Management",
    description: "Real-time global inventory visibility across dark stores and warehouses.",
    items: ["Smart Zone Slotting", "Delay Score Buffers", "Wave Planned"],
  },
  {
    icon: <IconSearch className="h-6 w-6 text-blue-600" />,
    iconBg: "bg-blue-50",
    title: "Order Tracking",
    description: "Branded tracking pages for a premium customer experience.",
    items: ["Milestone Notifications", "Status API Webhooks", "White-labeled"],
  },
  {
    icon: <IconRefresh className="h-6 w-6 text-blue-600" />,
    iconBg: "bg-blue-50",
    title: "Returns Management",
    description: "Turn reverse logistics into a loyalty driver for your brand.",
    items: ["Sell-down Restocking", "Automated QC Workflows", "Exchange Portal"],
  },
];

export default function OrdersPage() {
  return (
    <main>
      <HeroSection {...heroData} />
      <PainPointsSection {...painData} />
      <FeaturesSection {...featuresData} id="order-features" />
      <LifecycleSection {...lifecycleData} variant="boxed" />
      <StatsBar {...statsData} />

      <AnimatedSection className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-12 text-center">
            <FlyInText as="h2" direction="up" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Intelligent Operations Control
            </FlyInText>
            <FlyInText as="p" direction="up" delay={0.07} className="mt-3 text-sm text-gray-500 max-w-xl mx-auto">
              Go beyond simple order processing with predictive analytics tailored for the Indian supply chain.
            </FlyInText>
          </div>
          <div className="mb-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {dashboardKpis.map((kpi, i) => (
                <div
                  key={kpi.label}
                  className="relative rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-400 rounded-l-2xl" />
                  <div className="pl-5 pr-5 pt-5 pb-6">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
                        {kpi.icon}
                      </div>
                      {kpi.delta && (
                        <span className="text-xs font-medium text-gray-400">
                          {kpi.delta}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-1.5">{kpi.label}</p>
                    <p className="text-2xl font-bold text-gray-900 leading-none">
                      {kpi.prefix}
                      <AnimatedCounter
                        value={kpi.value}
                        suffix={kpi.suffix}
                        delay={0.2 + i * 0.1}
                        className="text-2xl font-bold"
                      />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 items-stretch">

            <AnimateOnScroll variant="slide-right" delay={80}>
              <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-4 sm:p-5 h-full">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-900">Live Orders — Bengaluru Hub</p>
                  <span className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    Active Now
                  </span>
                </div>
                <div className="w-full text-xs">
                  <div className="flex flex-col gap-3">
                  {liveOrders.map((order) => {
                    const av = avatarStyle[order.customer[0]] ?? { bg: "bg-gray-100", text: "text-gray-600" };
                    const st = statusMap[order.status];
                    return (
                      <div
                        key={order.id}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-3 sm:px-4 hover:bg-gray-50/60 transition-colors"
                      >
                        <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center font-bold text-xs ${av.bg} ${av.text}`}>
                          {order.customer[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-900 truncate">
                            <span className="text-blue-600 font-mono">{order.id}</span>
                            <span className="text-gray-400 mx-1">•</span>
                            {order.customer}
                          </p>
                          <p className="text-[11px] text-gray-400 truncate mt-0.5">{order.location}</p>
                        </div>
  
                        <div className="shrink-0 text-right">
                          <p className="text-sm font-semibold text-gray-900 leading-none">{order.amount}</p>
                          <span className={`inline-block mt-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${st.color}`}>
                            {st.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="slide-left" delay={100}>
            <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-4 sm:p-6 h-full">
            
              <div className="flex justify-end mb-5">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                  Returns Intake / ID #RTN-120
                </span>
              </div>

              <div className="flex flex-col lg:flex-row gap-5 sm:gap-6">
                <div className="flex lg:flex-col items-start gap-0 shrink-0">
                  <div className="flex lg:flex-col items-center lg:items-start gap-0">
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                          <IconBox className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="w-px flex-1 min-h-[40px] bg-gray-200 my-1" />
                      </div>
                      <div className="pb-6">
                        <p className="text-xs font-semibold text-gray-900 leading-tight">Received</p>
                        <p className="text-[11px] text-gray-400 mt-0.5">10:05 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                        <IconSearch className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="w-px flex-1 min-h-[40px] bg-gray-200 my-1" />
                    </div>
                    <div className="pb-6">
                      <p className="text-xs font-semibold text-gray-900 leading-tight">Inspected</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">10:15 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 shrink-0 rounded-full bg-green-50 border border-green-300 flex items-center justify-center">
                        <IconCheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900 leading-tight">Verified</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">10:20 AM</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center shrink-0">
                  <div className="w-32 sm:w-36 rounded-[28px] border-[5px] border-blue-100 bg-white shadow-md relative overflow-hidden flex flex-col">
                    <div className="flex justify-center pt-2 pb-1">
                      <div className="w-10 h-1.5 rounded-full bg-gray-300" />
                    </div>
                    <div className="mx-2 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden" style={{ height: '130px' }}>
                      <Image
                        src="/images/solutions/Order-image.png"
                        alt="Canon EOS R5"
                        width={110}
                        height={110}
                        className="object-contain p-2 w-full h-full"
                      />
                    </div>
                    <div className="px-2.5 pt-2 pb-3">
                      <p className="text-[10px] text-gray-500 leading-snug">Returns Processing -</p>
                      <p className="text-[11px] font-semibold text-gray-900 leading-snug">Canon EOS R5</p>
                      <div className="mt-2 rounded-lg bg-green-50 px-2 py-1.5 flex items-center gap-1">
                        <span className="text-green-500 text-[10px]">✓</span>
                        <span className="text-[10px] font-semibold text-green-700">Verified &amp; Tested</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-3">
                  <div className="rounded-xl border border-gray-200 p-3 sm:p-4">
                    <div className="flex justify-between items-center text-xs py-1">
                      <span className="text-gray-500">Condition:</span>
                      <span className="font-bold text-gray-900">Excellent (A)</span>
                    </div>
                    <div className="border-t border-gray-100 my-1" />
                    <div className="flex justify-between items-center text-xs py-1">
                      <span className="text-gray-500">Accessories:</span>
                      <span className="font-bold text-gray-900">Complete</span>
                    </div>
                    <div className="border-t border-gray-100 my-1" />
                    <div className="text-xs py-1">
                      <p className="text-gray-500">Verification Method:</p>
                      <p className="font-bold text-gray-900 mt-1 text-sm">
                        Multi-point Optical &amp; Electronic
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl border-2 border-green-400 bg-green-50 p-3 sm:p-4">
                    <p className="font-bold text-green-700 flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 rounded bg-green-500 flex items-center justify-center text-white text-[11px] shrink-0">✓</span>
                      Item Verified
                    </p>
                    <p className="text-sm mt-1.5 text-gray-700">
                      → Ready for Restock
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          </div>
          <AnimateOnScroll variant="fade" delay={120}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {opsFeatureGroups.map((group, i) => (
              <AnimateOnScroll
                key={group.title}
                variant="fade-up"
                delay={i * 80}
                className="rounded-2xl bg-gray-50 p-6 flex flex-col gap-0"
              >
                <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${group.iconBg}`}>
                  {group.icon}
                </div>
                <p className="text-base font-bold text-gray-900 mb-2">{group.title}</p>

                <p className="text-sm text-gray-400 leading-relaxed mb-5">{group.description}</p>
                <ul className="space-y-3 mt-auto">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <IconShield className="h-4 w-4 text-teal-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
        </div>
      </AnimatedSection>
      {/* Connected InOps modules cross-links */}
      <AnimatedSection className="border-t border-slate-100 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600 mb-2">Part of the InOps platform</p>
            <FlyInText as="h2" direction="up" className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Order Management is One Layer of the Stack
            </FlyInText>
            <FlyInText as="p" direction="up" delay={0.07} className="mt-3 text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
              Orders feed warehouses, warehouses dispatch to delivery, and delivery POD closes the loop back into
              the ERP. InOps connects all three — and ties physical throughput to the workforce layer so contractor
              headcount, compliance status, and operational output appear on one dashboard.
            </FlyInText>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                href: "/warehouse-management",
                eyebrow: "Upstream",
                title: "Warehouse Management",
                body: "Inventory slotting, picking, packing, and gate control for the plant stores and distribution centres that fulfil your orders.",
                linkLabel: "Explore warehouse management →",
              },
              {
                href: "/delivery-management",
                eyebrow: "Downstream",
                title: "Delivery Management Software",
                body: "AI route optimisation, live fleet tracking, and digital POD for the last-mile leg once orders leave the warehouse.",
                linkLabel: "Explore delivery management →",
              },
              {
                href: "/enterprise-solution",
                eyebrow: "Platform overview",
                title: "Enterprise Operations Platform",
                body: "Asset intelligence, route optimisation, and warehouse execution — unified across all your industrial sites and connected to CLMS and HRIS.",
                linkLabel: "See the full platform →",
              },
            ].map((card, i) => (
              <AnimateOnScroll
                key={card.href}
                variant="fade-up"
                delay={i * 80}
                className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1">{card.eyebrow}</p>
                <h3 className="text-base font-bold text-gray-900 leading-snug mb-3">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{card.body}</p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  {card.linkLabel}
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <CTASection {...ctaData} />
    </main>
  );
}