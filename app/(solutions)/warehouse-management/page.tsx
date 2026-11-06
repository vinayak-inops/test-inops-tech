import HeroSection from "@/app/components/solution/SolutionHeroBanner";
import StatsBar from "@/app/components/solution/StatsBar";
import PainPointsSection from "@/app/components/solution/PainPointsSection";
import FeaturesSection from "@/app/components/solution/FeaturesSection";
import LifecycleSection from "@/app/components/solution/LifeCycleSection";
import CTASection from "@/app/components/solution/CTASection";
import { AnimatedSection } from "@/app/components/AnimatedSection";
import { FlyInText } from "@/app/components/FlyInText";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import Link from "next/link";
import {
  IconBox,
  IconTag,
  IconChart,
  IconScan,
  IconTruck,
  IconDatabase,
  IconWorkflow,
  IconClipboardCheck,
  IconChip,
  IconCheckCircle,
} from "@/app/components/solution/Icons";


const heroData = {
  bgImage: "/images/solutions/Warehouse-management.jpeg", 
  bgImageAlt: "Warehouse manager reviewing inventory data on a laptop",
  bgPosition: "72% 40%",
  gradientCenter: "28% 22%",
  eyebrow: "InOps",
  titleLine1: "Warehouse Management System",
  titleLine2: "for Factories",
  description:
    "Real-time inventory visibility, efficient operational orchestration and predictive analytics designed for high-throughput modern warehouses.",
  buttons: [
    { label: "Book a Demo", href: "/contact", variant: "primary" as const },
    { label: "See Features", href: "#warehouse-features", variant: "outline" as const },
  ],
};

const statsData = {
  heading: "Impact Performance",
  subheading: "Industry-leading benchmarks achieved by InOps partners.",
  stats: [
    { label: "Inventory Accuracy", value: 99, suffix: ".9%", change: "↑ 2.4% vs last month", changePositive: true },
    { label: "Orders Picked/hr", value: 240, suffix: "+", change: "↑ 18% vs last month", changePositive: true },
    { label: "Receiving Throughput", value: 1, suffix: ".5k", change: "↑ 12% vs last month", changePositive: true },
    { label: "On-Time Dispatch", value: 99, suffix: ".7%", change: "↑ 4.1% vs last month", changePositive: true },
  ],
};

const painData = {
  layout: "split" as const,
  heading: "The Cost of Operational Inefficiency",
  description:
    "Manual processes and fragmented data lead to invisible leaks in your bottom line. We solve the core friction points that slow down your growth.",
  imageSrc:"/images/solutions/warehouse-employee.jpg",
  imageSrc2: "/images/solutions/Warehouse-PainPoint.jpg",
    points: [
    { title: "Inventory Inaccuracies", description: "Shrinkage and ghost stock lead to missed sales and capital bloat." },
    { title: "Slow Receiving & Putaway", description: "Bottlenecks at the dock prevent stock from becoming sellable quickly." },
    { title: "Inefficient Picking", description: "Excessive travel time and mis-picks erode order fulfillment margins."},
    { title: "Data Silos", description: "Lack of real-time analytics makes proactive management impossible." },
  ],
  highlightBadges: [
    { value: "+30%", label: "Storage utilization efficiency", colorClass: "bg-gray-900 text-white" },
    { value: "−45%", label: "Reduction in order cycle time", colorClass: "bg-blue-600 text-white" },
  ],
};

const featuresData = {
  eyebrow: "Enterprise Features",
  heading: "Engineered for Complexity",
  description:
    "Comprehensive tools that handle the nuances of modern supply chains, from high-volume parcel to specialized asset tracking.",
  ctaLabel: "Download Feature Specs",
  ctaHref: "#",
  cards: [
    {
      icon: <IconBox />,
      title: "Inventory Management",
      description: "Centralized control of stock levels, multi-location support, and automated reorder points.",
    },
    {
      icon: <IconTag />,
      title: "Asset Tracking",
      description: "Live tracking of pallets, forklifts, and movable equipment within the warehouse. For enterprise-grade fixed asset management — biometric devices, machinery, AMC scheduling, and depreciation — see the InOps Fixed Asset Management module.",
    },
    {
      icon: <IconScan />,
      title: "Barcode & QR Support",
      description: "Seamless scanning integration with mobile devices and professional hardware.",
    },
    {
      icon: <IconChart />,
      title: "Warehouse Analytics",
      description: "Visual dashboards for heatmapping, throughput trends, and workforce productivity.",
    },
  ],
};

const lifecycleData = {
  heading: "The InOps Journey",
  subheading: "From arrival to departure, every step is optimized for speed.",
  steps: [
    { icon: <IconClipboardCheck className="h-9 w-9" />,         label: "Receiving", sublabel: "Automated verification & staging protocols", iconBg: "bg-blue-50",   iconColor: "#2563eb" },
    { icon: <IconWorkflow className="h-9 w-9" />, label: "Putaway",   sublabel: "Automated verification & staging protocols", iconBg: "bg-purple-50", iconColor: "#9333ea" },
    { icon: <IconDatabase className="h-9 w-9" />,         label: "Inventory", sublabel: "Automated verification & staging protocols", iconBg: "bg-teal-50",   iconColor: "#0d9488" },
    { icon: <IconScan className="h-9 w-9" />,        label: "Picking",   sublabel: "Automated verification & staging protocols", iconBg: "bg-orange-50", iconColor: "#f97316" },
    { icon: <IconTruck className="h-9 w-9" />,       label: "Dispatch",  sublabel: "Automated verification & staging protocols", iconBg: "bg-blue-50",   iconColor: "#1d4ed8" },
  ],
};

const ctaData = {
  heading: "Optimize your warehouse operations today.",
  subheading:
    "Join hundreds of logistics leaders who have revolutionized their fulfillment efficiency with InOps.",
  buttons: [
    { label: "Request Personal Demo", href: "/contact", variant: "white" as const },
    { label: "Contact Sales Specialist", href: "/contact", variant: "outline-white" as const },
  ]
};

const integrations = [
  { icon: IconDatabase, name: "ERP Systems (SAP, Oracle, Tally)", color: "#2563eb" },
  { icon: IconScan,     name: "Barcode & RFID Hardware",          color: "#f97316" },
  { icon: IconTruck,    name: "InOps Delivery Management",        color: "#0d9488" },
  { icon: IconChip,     name: "REST API & Webhooks",              color: "#9333ea" },
];

const warehouseFaqItems = [
  {
    question: "What is warehouse management software?",
    answer:
      "Warehouse management software (WMS) is a platform that controls and optimises the movement of goods through a warehouse or distribution centre — from goods receipt and putaway through to picking, packing, and dispatch. A WMS tracks stock location and quantity in real time, automates task assignment to warehouse staff, integrates with barcodes and RFID readers, and feeds live inventory data back to connected ERP and order management systems.",
  },
  {
    question: "How does barcode and QR code tracking work in a warehouse?",
    answer:
      "Each stock-keeping unit (SKU), pallet, and bin location is labelled with a barcode or QR code at the point of receiving. Warehouse staff scan these labels with handheld mobile devices or fixed readers at key movement points — receiving, putaway, pick, pack, and dispatch. Each scan creates a timestamped transaction record that updates the live inventory position instantly, eliminating the lag and error of paper-based stock cards. The InOps platform supports standard 1D barcodes, QR codes, and RFID tags on the same mobile device.",
  },
  {
    question: "What is putaway, and how does InOps optimise it?",
    answer:
      "Putaway is the process of moving goods from the receiving dock to their designated storage location in the warehouse. InOps optimises putaway by assigning the nearest available bin based on SKU velocity (fast-moving items closer to the pick face), weight restrictions, and zone rules — all calculated at the moment of receipt. The mobile device guides the operative to the exact bin, eliminating search time and preventing misplacement that causes downstream inventory inaccuracies.",
  },
  {
    question: "How does InOps warehouse management integrate with ERP systems?",
    answer:
      "InOps WMS connects to ERP platforms — including SAP, Oracle, and Tally — via REST API and standard file-based connectors. Purchase orders and sales orders flow from the ERP into InOps automatically; stock movements, inventory balances, and despatch confirmations are written back in real time. This two-way sync means the ERP always reflects live warehouse stock without manual re-entry, and WMS task queues are always up to date with the latest orders.",
  },
  {
    question: "What is the difference between zone picking, batch picking, and wave picking?",
    answer:
      "Zone picking splits the warehouse into areas and assigns each picker to a fixed zone — orders are assembled across zones and consolidated at a merge point. Batch picking groups multiple orders into a single picker run, reducing travel for similar items. Wave picking releases a coordinated set of picks timed to a despatch window so picking, packing, and loading are synchronised. InOps supports all three strategies, and the dispatcher can configure which method applies to each order type or time window.",
  },
  {
    question: "How does InOps handle inventory accuracy and cycle counts?",
    answer:
      "InOps enables rolling cycle counts — systematic spot-checks of a subset of locations each day — rather than requiring a full annual stock-take. The system prioritises locations by discrepancy risk (high-velocity SKUs, locations flagged by recent scan anomalies) and generates count tasks automatically. Operatives scan and confirm quantities on their mobile device; variances are highlighted for supervisor approval before the inventory record is adjusted. InOps partners report 99.9% inventory accuracy after three months of live cycle counting.",
  },
  {
    question: "Can InOps WMS track fixed assets like forklifts and biometric devices?",
    answer:
      "InOps warehouse management tracks the real-time location of movable warehouse equipment — forklifts, pallet trucks, scanners — within the warehouse floor. For enterprise fixed asset management covering AMC scheduling, depreciation, statutory audit records, and multi-site biometric device fleets, the dedicated",
    // Rendered with a Link in JSX — see FAQ render block
  },
] as const;

export default function WarehousePage() {
  return (
    <main>
      <HeroSection {...heroData} />
      <StatsBar {...statsData} />
      <PainPointsSection {...painData} />
      <FeaturesSection {...featuresData} id="warehouse-features" />
      <LifecycleSection {...lifecycleData} variant="default" />
      <AnimatedSection className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-1">Ecosystem</p>
              <FlyInText as="h2" direction="up" className="text-2xl font-extrabold text-gray-900">
                Built for Connectivity
              </FlyInText>
              <p className="text-sm text-gray-500 mt-1">Native integrations with your tech stack.</p>
            </div>
            <div className="flex flex-wrap gap-6">
            {integrations.map(({ icon: Icon, name, color }) => (
              <AnimateOnScroll
                key={name}
                variant="scale"
                delay={50}
                className="flex items-center gap-2"
              >
                <div style={{ color }}>
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-sm font-semibold text-gray-600">{name}</span>
              </AnimateOnScroll>
            ))}
          </div>
          </div>
        </div>
      </AnimatedSection>

      <section aria-labelledby="warehouse-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="warehouse-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Answers to common questions about warehouse management software, barcode and QR tracking, putaway and picking strategies, ERP integration, cycle counts, and fixed asset tracking.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.35)]">
            <div className="divide-y divide-slate-200">
              {warehouseFaqItems.map((item, index) => (
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
                  {index === 6 ? (
                    <p className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:pl-12 sm:text-base">
                      {item.answer}{" "}
                      <Link
                        href="/fixed-asset-management"
                        className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-200"
                      >
                        InOps Fixed Asset Management module
                      </Link>{" "}
                      handles all of that.
                    </p>
                  ) : (
                    <p className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:pl-12 sm:text-base">{item.answer}</p>
                  )}
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection {...ctaData} />

    </main>
  );
}
