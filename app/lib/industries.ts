import type { RiskIconKey, GovernanceIconKey, OutcomeIconKey } from "@/app/components/industries/Icons";

export type IndustrySlug = "manufacturing" | "automotive" | "electronics" | "logistics-warehousing" | "pharmaceutical";

export interface HeroStat {
  value: string;
  label: string;
}

export interface RiskCardData {
  title: string;
  description: string;
  icon?: RiskIconKey;
}

export interface GovernanceItemData {
  title: string;
  description: string;
  icon?: GovernanceIconKey;
}

export interface GovernanceTagData {
  label: string;
}

export interface OutcomeStatData {
  value: string;
  label: string;
  icon?: OutcomeIconKey;
}

export interface OutcomeHighlightData {
  title: string;
  description: string;
}

export interface IntegrationItemData {
  title: string;
  description: string;
}

export interface IndustryConfig {
  slug: IndustrySlug;
  breadcrumb: string;

  hero: {
    title: string;
    highlight: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: [HeroStat, HeroStat, HeroStat];
  };

  marketContext: {
    eyebrow: string;
    title: string;
    body: string;
    tags: string[];
    imageQuery: string;
  };

  risks: {
    eyebrow: string;
    title: string;
    description?: string;
    cards: RiskCardData[];
    // imageQuery?: string;
    calloutAlert?: { title: string; description: string };
  };

  governance: {
    eyebrow: string;
    title: string;
    resourceCta: { label: string; href: string };
    items: GovernanceItemData[];
    tags: GovernanceTagData[];
    calloutStat: { value: string; label: string };
    imageQuery: string;
  };

  outcomes: {
    eyebrow: string;
    eyebrowColor?: "blue" | "teal";
    title: string;
    description?: string;
    stats: OutcomeStatData[];
    highlights: OutcomeHighlightData[];
    calloutStat: { value: string; label: string; badge?: string }; 
    imageQuery: string;
    variant?: "light" | "dark";
  };

  integration: {
    eyebrow: string;
    title: string;
    description: string;
    items: IntegrationItemData[];
    certifications: string[];
  };

  bottomCta: {
    title: string;
    description?: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
}

export const industries: Record<IndustrySlug, IndustryConfig> = {
  manufacturing: {
    slug: "manufacturing",
    breadcrumb: "Enterprise Workforce Governance",
    hero: {
      title: "Contract Labour Management",
      highlight: "Software for Manufacturing",
      description:
        "Digitize your entire contractor ecosystem. From onboarding to payroll, ensure 100% statutory compliance and operational transparency across your manufacturing units.",
      primaryCta: { label: "Book a Demo", href: "/contact" },
      secondaryCta: { label: "Talk to an Expert", href: "/contact" },
      stats: [
        { value: "500K+", label: "Workers Managed" },
        { value: "100%", label: "Statutory Compliance" },
        { value: "30%", label: "Cost Reduction" },
      ],
    },
    marketContext: {
      eyebrow: "Market Context",
      title: "The New Era of Workforce Governance",
      body: "As manufacturing scales, the reliance on contract labor increases exponentially. However, manual processes often lead to fragmented data, compliance blind spots, and operational leakages.\n\nIddion RegX provides a unified framework for Workforce Governance, enabling enterprises to transition from reactive management to proactive, data-driven control over their distributed labor force.",
      tags: ["Statutory Compliance Assurance", "Real-time Operational Visibility"],
      imageQuery: "",
    },
    risks: {
      eyebrow: "Operational Pain Points",
      title: "The Hidden Risks of Manual Management",
      description: "Manufacturing units face critical vulnerabilities when managing large-scale contract workfoces without specialized digital infrastructure.",
      cards: [
        { title: "Fragmented Contractor Management", description: "Difficulties in coordinating across multiple vendors with inconsistent documentation standards.", icon: "users" },
        { title: "Compliance Violations", description: "Inability to track real-time adherence to labor laws, PF/ESI contributions, and safety mandates.", icon: "shield" },
        { title: "Unauthorized Gate Entry", description: "Security risks posed by non-verified personnel entering sensitive manufacturing zones.", icon: "scan-face" },
        { title: "Attendance Inaccuracies", description: "Ghost workers and manual muster-roll discrepancies leading to inflated labor costs.", icon: "clock-alert" },
        { title: "Complex Billing Validation", description: "Hours of manual reconciliation between attendance logs and vendor invoices.", icon: "file-text" },
        { title: "Zero Real-time Visibility", description: "No single source of truth for headcount, productivity, or compliance status across sites.", icon: "alert-circle" },
      ],
    },
    governance: {
      eyebrow: "The Solution",
      title: "Smart Governance for the Shop Floor",
      resourceCta: { label: "Explore Technical Specs", href: "/contact" },
      items: [
        { title: "Digital Contractor Onboarding", description: "Automate KYC, document verification, and training certifications before site access.", icon: "user-check" },
        { title: "Smart Gate Governance", description: "Biometric and facial recognition systems integrated with work permits for foolproof access control.", icon: "fingerprint" },
        { title: "Attendance & Shift Intelligence", description: "AI-driven shift scheduling and automated muster-roll generation with zero manual touchpoints.", icon: "camera" },
        { title: "Compliance Automation", description: "Real-time tracking of statutory payments and expiry alerts for licenses and insurance.", icon: "activity" },
        { title: "Payroll & Billing", description: "One-click invoice validation against verified attendance data to eliminate over-billing.", icon: "file-text" },
        { title: "Executive Dashboard", description: "360-degree view of workforce metrics, productivity, and risk profiles across the enterprise.", icon: "bar-chart" },
      ],
      tags: [],
      calloutStat: { value: "", label: "" },
      imageQuery: "cnc machine factory close up",
    },
    outcomes: {
      eyebrow: "Impact & Outcomes",
      variant: "light",
      title: "Measurable Results for Industrial Leaders",
      stats: [
        { value: "65%", label: "Faster Onboarding", icon: "zap" },
        { value: "100%", label: "Risk Reduction", icon: "shield-check" },
        { value: "99.9%", label: "Billing Accuracy", icon: "clipboard" },
        { value: "18%", label: "Labor Savings", icon: "database" },
      ],
      highlights: [
        { title: "Audit-ready Records", description: "Digital trails for every worker entry, payment, and compliance filing." },
        { title: "Instant Headcount", description: "Know exactly who is on your shop floor at any given moment." },
      ],
      calloutStat: { value: "Real-time Site Monitoring", label: "", badge: "Live Analytics" },
      imageQuery: "laptop dashboard industrial monitoring",
    },
    integration: {
      eyebrow: "Enterprise Ready",
      title: "Purpose-Built for Compliance-Driven Industries",
      description:
        "RegX isn't just a workforce tool; it's a specialised governance platform designed to handle the unique complexities of large-scale manufacturing. We understand the high stakes of regulatory non-compliance and labour safety.",
      items: [
        { title: "Zero Tolerance Policy", description: "Automated blockages for expired or blacklisted personnel." },
        { title: "Scalable Architecture", description: "Powered to manage over 500,000 workers across a single enterprise instance." },
        { title: "Seamless Integration", description: "Deep connectors for SAP, Oracle, and legacy HRIS systems." },
      ],
      certifications: ["Certified Compliance Standards", "SOC 2 Type II", "ISO 27001", "GDPR Compliant"],
    },
    bottomCta: {
      title: "Ready to digitize your shop floor labor management?",
      description: "Join 100+ manufacturing enterprises optimizing their workforce governance with today.",
      primaryCta: { label: "Get Started Now", href: "/contact" },
      secondaryCta: { label: "Request Case Studies", href: "/contact" },
    },
  },

  automotive: {
    slug: "automotive",
    breadcrumb: "Industry Solutions / Automotive",
    hero: {
      title: "Workforce Governance for",
      highlight: "Automotive Manufacturing",
      description:
        "Ensure the right worker with the right skills is on the assembly line at the right time. InOps RegX digitizes contractor ecosystems to match the precision of Just-In-Time production.",
      primaryCta: { label: "Request Sector Audit", href: "/contact" },
      secondaryCta: { label: "View Solutions", href: "/contact" },
      stats: [
        { value: "JIT", label: "Compliant Workforce" },
        { value: "0%", label: "Line Stoppage Risk" },
        { value: "24/7", label: "Access Control" },
      ],
    },
    marketContext: {
      eyebrow: "Manufacturing Excellence",
      title: "Synchronizing Labor with Just-In-Time Production",
      body: "Automotive assembly lines operate on razor-thin margins and strict temporal windows. Any disruption in contractor availability or compliance bottlenecks can halt multi-million dollar production cycles.\n\nIddion RegX introduces Automated Workforce Synchronization, aligning contractor lifecycle management with your production planning system (PPS) to ensure continuous, compliant operation.",
      tags: ["Skill-based Line Deployment", "Safety Certification Tracking", "Vendor SLA Management", "Dynamic Shift Compliance"],
      imageQuery: "sticky notes tablet in process",
    },
    risks: {
      eyebrow: "Critical Vulnerabilities",
      title: "Navigating the Complexities of Automotive Labor",
      description: "Manual management of thousands of contractors across multi-tier vendors creates invisible risks that manifest as production delays and regulatory penalties.",
      cards: [
        { title: "Tier-2 Vendor Visibility", description: "Loss of control over sub-contracted labor quality and compliance.", icon: "users" },
        { title: "Gate Inefficiencies", description: "Manual entry checks causing shift-start delays on high-speed lines.", icon: "scan" },
        { title: "Overtime Leakage", description: "Unmanaged shifts leading to excessive overtime costs and fatigue risks.", icon: "timer" },
        { title: "Audit Liability", description: "Fragmented records causing non-compliance during surprise labor inspections.", icon: "clipboard-check" },
        { title: "Contract Invoicing Errors", description: "Discrepancies between manual attendance and vendor billings.", icon: "briefcase" },
        { title: "Supply Chain Latency", description: "Workforce shortages impacting JIT delivery schedules.", icon: "truck" },
      ],
      // imageQuery: "concrete corridor biometric door lock",
      calloutAlert: {
        title: "Risk Alert: Access Governance",
        description: "74% of manufacturing security breaches stem from unauthorized or unverified third-party access to production zones.",
      },
    },
    governance: {
      eyebrow: "The Solution Framework",
      title: "Comprehensive Governance for the Global Assembly Line",
      resourceCta: { label: "Download Technical Whitepaper", href: "/contact" },
      items: [
        { title: "Contractor Lifecycle Management", description: "Automate the entire journey from vendor onboarding and document KYC to offboarding, ensuring 100% statutory readiness.", icon: "user-check" },
        { title: "Production Area Access", description: "Biometric and facial recognition entry gates mapped to real-time skill certifications and work permits.", icon: "shield-check" },
        { title: "Shift Compliance Governance", description: "Real-time monitoring of shift timing, breaks, and maximum work hours to prevent regulatory violations.", icon: "calendar" },
        { title: "Attendance Intelligence", description: "Automated muster-roll generation that eliminates 'ghost workers' and manual log errors.", icon: "camera" },
        { title: "Invoicing & Billing Verification", description: "One-click reconciliation of vendor invoices against verified attendance data to eliminate over-billing.", icon: "file-text" },
        { title: "Vendor Performance Analytics", description: "Scorecards based on compliance, worker quality, and fulfillment rates across your supply chain.", icon: "bar-chart" },
      ],
      tags: [],
      calloutStat: { value: "", label: "" },
      imageQuery: "",
    },
    outcomes: {
      eyebrow: "Proven Roi",
      variant: "dark",
      title: "Measurable Excellence for Operational Leadership",
      description: "Transform your labor management from an administrative burden into a data-driven competitive edge.",
      stats: [
        { value: "+40%", label: "Deployment Speed", icon: "zap" },
        { value: "65%", label: "Admin Reduction", icon: "users" },
        { value: "100%", label: "Compliance Score", icon: "shield-check" },
        { value: "99.9%", label: "Billing Accuracy", icon: "clipboard" },
      ],
      highlights: [
        { title: "Real-time Audit Trail", description: "Every worker entry and document verification is timestamped and ready for inspection." },
        { title: "Seamless Reconciliation", description: "Automatically verify vendor invoices against verified attendance logs." },
      ],
      calloutStat: { value: "100.0%", label: "Audit Ready", badge: "Compliance Rating" },
      imageQuery: "workers laptop review outdoor plant",
    },
    integration: {
      eyebrow: "Enterprise-Grade Infrastructure",
      title: "Seamless Integration with Global ERP Ecosystems",
      description:
        "RegX is not siloed; it acts as the intelligent human-governance layer that bridges your corporate ERP with the real-time activity on the shop floor.",
      items: [
        { title: "Deep ERP Sync", description: "Native connectors for SAP S/4HANA, Oracle Netsuite, and Microsoft Dynamics with real-time flow." },
        { title: "Audit-Ready Trail", description: "Every worker action and compliance certification is timestamped and cryptographically secured for government audits." },
        { title: "Multi-Site Command", description: "Manage globally distributed manufacturing plants and regulatory reporting via a single command center." },
      ],
      certifications: ["SAP Certified", "Oracle Partner", "ISO 27001", "GDPR Compliant"],
    },
    bottomCta: {
      title: "Ready to synchronize your workforce with your production?",
      description: "Join leading automotive OEMs and Tier-1 suppliers using Iddion RegX to secure their labor supply chain.",
      primaryCta: { label: "Book a Deep-Dive Demo", href: "/contact" },
      secondaryCta: { label: "View Case Studies", href: "/contact" },
    },
  },

  electronics: {
    slug: "electronics",
    breadcrumb: "Industry Solutions / Electronics Manufacturing",
    hero: {
      title: "Contract Labour Management for",
      highlight: "Electronics Manufacturing",
      description:
        "Precision workforce governance for high-turnover environments. Digitize onboarding, enforce cleanroom access, and automate compliance to the speed of global electronics supply chains.",
      primaryCta: { label: "Request EMS Audit", href: "/contact" },
      secondaryCta: { label: "View Solutions", href: "/contact" },
      stats: [
        { value: "90%", label: "SLA Compliance" },
        { value: "0%", label: "Access Breaches" },
        { value: "24hr", label: "Onboarding Cycle" },
      ],
    },
    marketContext: {
      eyebrow: "Market Context",
      title: "Navigating High-Volume EMS Turnover",
      body: "The Electronics Manufacturing Services (EMS) sector faces unique labor challenges: massive seasonal spikes, rapid temporary workforce shifts, and the critical need for technical cleanroom discipline.\n\nIddion RegX eliminates the admin friction of high-volume hiring. We provide a single source of truth for Turnover Analytics, Compliance Monitoring, and Secure Zone Access, ensuring your lines never stop.",
      tags: ["Rapid Batch Onboarding", "Cleanroom Entry Logs", "ESD Training Verification", "Vendor Compliance Scores"],
      imageQuery: "biometric door lock fingerprint scanner",
    },
    risks: {
      eyebrow: "Industry Friction",
      title: "Overcoming the Complexity of Scaled Electronics Labor",
      description: "Fragmented data and manual gate-checks lead to assembly bottlenecks and regulatory liability. RegX addresses the specific vulnerabilities of the high-tech shop floor.",
      cards: [
        { title: "High Seasonal Attrition", description: "Difficulties in maintaining a compliant workforce during peak smartphone and consumer electronics production cycles.", icon: "shield-off" },
        { title: "Cleanroom Restrictions", description: "Security lapses allowing unverified or untrained personnel into sensitive Class 100/1000 manufacturing environments.", icon: "shield" },
        { title: "Temp Workforce Bloat", description: "Excessive administrative overhead in managing thousands of temporary ID cards and biometric profiles manually.", icon: "users" },
        { title: "Shift Start Latency", description: "Massive queues at factory gates during shift changes impacting JIT assembly schedules and total productive maintenance (TPM).", icon: "clock-alert" },
        { title: "Statutory Blind Spots", description: "Failure to track real-time PF/ESI and labor law compliance for transient contractor populations across multiple vendors.", icon: "clipboard-check" },
        { title: "Skill Mismatch Risks", description: "Deploying contractors to precision soldering or testing stations without verified technical certifications.", icon: "circle-dot" },
      ],
    },
    governance: {
      eyebrow: "The RegX Framework",
      title: "Intelligent Governance for the Precision Shop Floor",
      resourceCta: { label: "Request Technical Blueprint", href: "/contact" },
      items: [
        { title: "Digital Contractor Onboarding", description: "KYC and document verification in minutes. Automated background checks and induction training integrated into the flow.", icon: "user-check" },
        { title: "Precision Access Control", description: "Biometric and Facial Recognition gates that verify station-specific skills and medical fitness before allowing cleanroom entry.", icon: "shield" },
        { title: "Attendance Automation", description: "Zero-touch muster roll generation. Eliminate manual logbooks and 'ghost workers' through real-time gate-to-floor sync.", icon: "camera" },
        { title: "Compliance Tracking", description: "Real-time auditing of labor law adherence, minimum wage, and statutory payments across all tier-1 and tier-2 vendors.", icon: "file-text" },
        { title: "Workforce Analytics", description: "Actionable insights into turnover rates, shift productivity, and labor cost leakage via high-fidelity dashboards.", icon: "bar-chart" },
        { title: "ERP & MES Integration", description: "Seamless data exchange with SAP, Oracle, and Manufacturing Execution Systems for holistic plant governance.", icon: "cog" },
      ],
      tags: [],
      calloutStat: { value: "", label: "" },
      imageQuery: "coworkers reviewing tablet office",
    },
    outcomes: {
      eyebrow: "Quantifiable Impact",
      variant: "dark",
      title: "Measurable Excellence for Operational Leaders",
      description: "Transform workforce management from a cost center into a competitive advantage through data-driven governance.",
      stats: [
        { value: "99.9%", label: "Production Continuity", icon: "zap" },
        { value: "+22%", label: "Labor Utilization", icon: "trending-up" },
        { value: "100%", label: "Compliance Score", icon: "shield-check" },
        { value: "-15%", label: "Overtime Reduced", icon: "clipboard" },
      ],
      highlights: [
        { title: "Real-time Accountability", description: "Instant headcount mapping to specific assembly line stations." },
        { title: "Payroll Integrity", description: "Eliminate manual reconciliation between plant sites and finance." },
      ],
      calloutStat: { value: "100.0%", label: "Site Compliance", badge: "Site Compliance" },
      imageQuery: "workers laptop review outdoor plant",
    },
    integration: {
      eyebrow: "The Enterprise Grade",
      title: "Built for the Rigors of Global EMS Operations",
      description:
        "RegX provides a secure, scalable, and audit-ready layer that connects your distributed factory floors to central corporate governance.",
      items: [
        { title: "Hardware Agnostic", description: "Support for existing turnstile, facial recognition, and attendance hardware infrastructure." },
        { title: "Centralized KYC Vault", description: "Verified identity documentation and credentials stored in a single compliant repository." },
        { title: "High-Availability Sync", description: "Real-time data synchronization with zero downtime across global manufacturing floors." },
      ],
      certifications: ["GDPR Certified", "SOC2 Type II", "ISO 27001", "HIPAA Compliant"],
    },
    bottomCta: {
      title: "Secure your labor supply chain today",
      description: "Join leading electronics OEMs using Iddion RegX to synchronize their workforce with high-precision production demands.",
      primaryCta: { label: "Book a Strategy Demo", href: "/contact" },
      secondaryCta: { label: "View Sector Success Stories", href: "/contact" },
    },
  },

  "logistics-warehousing": {
    slug: "logistics-warehousing",
    breadcrumb: "Industry Solutions / Logistics & Warehousing",
    hero: {
      title: "Workforce Management for",
      highlight: "Logistics & Warehousing",
      description:
        "Gain complete visibility into your warehouse workforce across multiple locations with automating attendance, contractor compliance, and shift governance.",
      primaryCta: { label: "Request Logistics Audit", href: "/contact" },
      secondaryCta: { label: "Explore Solutions", href: "/contact" },
      stats: [
        { value: "24/7", label: "Facility Oversight" },
        { value: "0%", label: "Attendance Fraud" },
        { value: "Multi", label: "Location Ready" },
      ],
    },
    marketContext: {
      eyebrow: "Industry Context",
      title: "The Logistics Machine Never Sleeps",
      body: "Logistics and warehousing operate on a 24/7 cycle where every minute of downtime translates to supply chain latency. Managing thousands of contractors across night shifts and peak seasons using manual logs is no longer viable.\n\nIddion RegX provides the digital infrastructure to transition from fragmented manual oversight to Centralized Workforce Governance, ensuring your throughput matches your labor capacity.",
      tags: ["Continuous Shift Handover", "Dynamic Temp Staffing", "Real-time Headcount Tracking", "Automated Muster Rolls"],
      imageQuery: "warehouse worker tablet boxes",
    },
    risks: {
      eyebrow: "Operational Vulnerabilities",
      title: "Overcoming the Chaos of Scale",
      description: "Logistics managers face a unique set of challenges when coordinating distributed workforces across multiple zones and vendors.",
      cards: [
        { title: "Distributed Workforce", description: "Lack of centralized visibility across regional hubs and satellite warehouses.", icon: "globe" },
        { title: "Multiple Contractors", description: "Managing diverse vendor compliance standards and fragmented documentation.", icon: "users" },
        { title: "Night Shift Governance", description: "Inconsistent supervision and compliance tracking during 2nd and 3rd shifts.", icon: "clock-alert" },
        { title: "Seasonal Temp Spikes", description: "Onboarding bottlenecks during peak retail and holiday logistics cycles.", icon: "network" },
        { title: "Attendance Fraud", description: "ID substitution and 'buddy punching' leading to inflated labor costs.", icon: "shield" },
        { title: "Access Control Lapses", description: "Unauthorized personnel entering high-security bonded areas or cold storage.", icon: "fingerprint" },
      ],
    },
    governance: {
      eyebrow: "The Enterprise Solution",
      title: "Intelligent Governance for Modern Logistics",
      resourceCta: { label: "Download Sector Blueprint", href: "/contact" },
      items: [
        { title: "Centralized Workforce Management", description: "A single dashboard to monitor headcount and compliance across all warehouse locations in real-time.", icon: "building" },
        { title: "Attendance & Shift Control", description: "Biometric and facial recognition gates mapped to shift schedules to eliminate ghost workers.", icon: "calendar" },
        { title: "Conditional Access Governance", description: "Restrict entry to specific zones (Cold Storage, Bonded, HAZMAT) based on verified skills and training.", icon: "file-text" },
        { title: "Automated Compliance Monitoring", description: "Real-time alerts for expiring licenses, KYC documentation, and regulatory labor law violations.", icon: "activity" },
        { title: "Billing & Invoice Automation", description: "Instantly reconcile contractor invoices against verified biometric attendance records for 100% accuracy.", icon: "bar-chart" },
      ],
      tags: [],
      calloutStat: { value: "100% Secure", label: "Compliance Rating" },
      imageQuery: "warehouse worker hard hat tablet",
    },
    outcomes: {
      eyebrow: "Strategic Impact",
      variant: "dark",
      title: "Measurable Excellence for Logistics Leaders",
      description: "Transform your workforce management into a quantifiable asset. RegX delivers the data-driven insights necessary for operational scaling.",
      stats: [
        { value: "360°", label: "Real-time Visibility", icon: "map-pin" },
        { value: "+28%", label: "Shift Efficiency", icon: "zap" },
        { value: "100%", label: "Billing Fraud Reduced", icon: "triangle-alert" },
        { value: "4x", label: "Invoicing Speed", icon: "clipboard" },
      ],
      highlights: [
        { title: "Accountability", description: "Individual worker performance tracking linked to specific warehouse zones." },
        { title: "Governance", description: "Uniform policy enforcement across distributed logistics hubs." },
      ],
      calloutStat: { value: "14,208", label: "Real-time Active", badge: "Global Headcount" },
      imageQuery: "logistics worker tablet warehouse aisle",
    },
    integration: {
      eyebrow: "Enterprise Infrastructure",
      title: "Built for Global Supply Chain Integration",
      description:
        "RegX acts as the intelligent human-governance layer that bridges your WMS/TMS infrastructure with the real-time activity of your workforce.",
      items: [
        { title: "WMS/TMS Connectivity", description: "Seamlessly integrated with Manhattan, Blue Yonder, and Oracle logistics infrastructure." },
        { title: "Audit-Ready Trail", description: "Every applicability and compliance check is timestamped and secured for internal or government auditing." },
        { title: "Scalable Command", description: "Manage large contractor volume across centralized regulatory regions with speed." },
      ],
      certifications: ["WMS Certified", "ISO 27001", "SOC2 Type II", "GDPR Compliant"],
    },
    bottomCta: {
      title: "Secure your logistics workforce today",
      description: "Join leading 3PL providers and retail giants using Iddion RegX to govern their distributed warehousing ecosystems.",
      primaryCta: { label: "Request Strategy Demo", href: "/contact" },
      secondaryCta: { label: "View Case Studies", href: "/contact" },
    },
  },

  pharmaceutical: {
    slug: "pharmaceutical",
    breadcrumb: "Industry Solutions / Pharmaceutical Manufacturing",
    hero: {
      title: "Contract Labour Governance for",
      highlight: "Pharmaceutical Manufacturing",
      description:
        "Ensure only qualified, compliant, and authorized personnel enter regulated manufacturing environments. Maintain GxP standards with automated workforce validation.",
      primaryCta: { label: "Request Compliance Audit", href: "/contact" },
      secondaryCta: { label: "Explore GxP Solutions", href: "/contact" },
      stats: [
        { value: "100%", label: "GMP Compliance" },
        { value: "0%", label: "Access Breaches" },
        { value: "Audit", label: "Ready Always" },
      ],
    },
    marketContext: {
      eyebrow: "Industry Context",
      title: "Zero-Tolerance Governance for Life Sciences",
      body: "In pharmaceutical manufacturing, workforce governance isn't just about attendance—it's a critical component of safety and product integrity. Regulated environments demand that every individual on the shop floor possesses verified qualifications and training.\n\nIddion RegX digitizes the Validation Lifecycle, ensuring that only personnel with current medical clearances, GxP certifications, and specialized area training can cross the threshold into cleanrooms or high-potency labs.",
      tags: ["Strict GxP Adherence", "Automated Training Validation", "Cleanroom Access Logs", "Instant Audit Reporting"],
      imageQuery: "scrabble tiles compliance word",
    },
    risks: {
      eyebrow: "Compliance Risks",
      title: "Navigating the Complexity of Pharmaceutical Labor",
      description: "Manual contractor management creates invisible gaps that can lead to catastrophic regulatory failures and production shutdowns.",
      cards: [
        { title: "GMP/GxP Compliance", description: "Difficulties in enforcing and documenting hygiene and process standards for temporary staff.", icon: "shield" },
        { title: "Workforce Verification", description: "Inability to instantly verify technical certifications and specialized lab training at the gate.", icon: "graduation-cap" },
        { title: "Contractor Documentation", description: "Fragmented KYC and medical records across multiple vendors causing onboarding delays.", icon: "file-text" },
        { title: "Audit Readiness", description: "Hours of manual data gathering required to produce workforce trails during surprise FDA/EMA inspections.", icon: "history" },
        { title: "Controlled Area Access", description: "Unauthorized personnel entering high-risk bio-safety levels or sterile formulation zones.", icon: "lock" },
        { title: "Temp Workforce Flux", description: "Managing high turnover rates while maintaining 100% compliance during seasonal production spikes.", icon: "users" },
      ],
    },
    governance: {
      eyebrow: "The Enterprise Solution",
      title: "Intelligent Governance for Sterile Environments",
      resourceCta: { label: "Download Pharma Blueprint", href: "/contact" },
      items: [
        { title: "Compliance-Driven Onboarding", description: "Automated verification of medical fitness, GxP training, and safety inductions before any ID issuance.", icon: "user-check" },
        { title: "Controlled Facility Access", description: "Biometric gates synchronized with area-specific permits (Sterile, R&D, Packaging) to prevent cross-contamination.", icon: "fingerprint" },
        { title: "Full Workforce Traceability", description: "Granular movement logs providing a complete historical trail of who was in what zone at any given second.", icon: "search" },
        { title: "Attendance Automation", description: "Real-time muster-roll generation that eliminates 'ghost workers' and ensures site safety during emergencies.", icon: "camera" },
        { title: "Active Compliance Monitoring", description: "Real-time dashboards tracking vendor performance and statutory payment adherence across the supply chain.", icon: "activity" },
      ],
      tags: [],
      calloutStat: { value: "100.0% GxP Validated", label: "Site Compliance Rating" },
      imageQuery: "biometric fingerprint scanner keypad door",
    },
    outcomes: {
      eyebrow: "Measurable Impact",
      variant: "dark",
      title: "Strategic Value for Pharma Operations",
      description: "Moving beyond manual logs into digital governance transforms workforce management into an audit-ready asset.",
      stats: [
        { value: "Instant", label: "Audit Readiness", icon: "clipboard" },
        { value: "100%", label: "Compliance Uplift", icon: "shield-check" },
        { value: "3x", label: "Onboarding Speed", icon: "zap" },
        { value: "85%", label: "Manual Data Reduc.", icon: "database" },
      ],
      highlights: [
        { title: "Facility Integrity", description: "Eradicate the risk of uncertified personnel entering sterile manufacturing stations." },
        { title: "Operational Speed", description: "Onboard critical technical contractors in hours instead of days without skipping a single check." },
      ],
      calloutStat: { value: "4,812", label: "Medical Validated", badge: "Certified Personnel" },
      imageQuery: "pharmaceutical facility hallway person walking",
    },
    integration: {
      eyebrow: "The Regulatory Standard",
      title: "Enterprise Infrastructure for Regulated Environments",
      description:
        "RegX acts as the intelligent human-governance layer that bridges your LIMS and ERP systems with real-time floor activity.",
      items: [
        { title: "GxP Compliance Engine", description: "Alert rules validate every worker credential, certification, and safety training in real time." },
        { title: "Immutable Audit Trails", description: "Every credential check and biometric log is cryptographically secured for regulatory inspections." },
        { title: "Deep ERP Integration", description: "Native connectors for SAP S/4HANA, Oracle, and pharma-specific MES workflow systems." },
      ],
      certifications: ["GxP Certified", "ISO 27001", "21 CFR PART 11", "GDPR Compliant"],
    },
    bottomCta: {
      title: "Secure your pharmaceutical labor supply chain",
      description: "Join leading life sciences manufacturers using Iddion RegX to enforce 100% compliance across their distributed workforce.",
      primaryCta: { label: "Request Strategy Demo", href: "/contact" },
      secondaryCta: { label: "View Success Stories", href: "/contact" },
    },
  },
};

export function getIndustryConfig(slug: string): IndustryConfig | undefined {
  return industries[slug as IndustrySlug];
}

export function getAllIndustrySlugs(): IndustrySlug[] {
  return Object.keys(industries) as IndustrySlug[];
}
