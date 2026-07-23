import type { ComponentType, SVGProps } from "react";
import type { IconName } from "@/app/components/services/Icons";

export type ServiceSlug = "bgv" | "amc" | "fleet-audit" | "clra-audit-readiness" | "workforce-supply";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroPreviewRow {
  label: string;
}

export interface ProblemCardData {
  title: string;
  description: string;
  icon?: IconName;
}

export interface ProcessStepData {
  title: string;
  description: string;
}

export interface CapabilityData {
  title: string;
  description: string;
  icon?: IconName;
  featured?: boolean;
}

export interface OutcomeStatData {
  value: string;
  label: string;
}

export interface ManualVsManagedData {
  manualTitle: string;
  manualItems: string[];
  managedTitle: string;
  managedItems: string[];
}

export interface EngagementStepData {
  step: string; // "01".."05"
  title: string;
  description: string;
}

export interface FaqItemData {
  question: string;
  answer: string;
}

export interface ServiceConfig {
  slug: ServiceSlug;
  /** Nav / breadcrumb label, e.g. "Services / BG Services" */
  breadcrumb: string;
  eyebrow: string;

  hero: {
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    tags: string[];
    previewCardTitle: string;
    previewRows: HeroPreviewRow[];
    floatingStatTopRight: HeroStat;
    floatingStatBottomRight: HeroStat;
    floatingStatBottomLeft: HeroStat;
  };

  problem: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ProblemCardData[];
  };

  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStepData[];
  };

  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    featuredTitle: string;
    featuredTag: string;
    items: CapabilityData[];
  };

  outcomeStats: {
    eyebrow: string;
    title: string;
    description: string;
    stats: OutcomeStatData[];
  };

  manualVsManaged: {
    eyebrow: string;
    title: string;
    description: string;
    data: ManualVsManagedData;
  };

  engagement: {
    eyebrow: string;
    title: string;
    description: string;
    steps: EngagementStepData[];
  };

  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItemData[];
    sideCardTitle: string;
    sideCardDescription: string;
    sideCardCta: { label: string; href: string }
    relatedTags?: string[];
  };
}

const industries = [
  { name: "Manufacturing", description: "Plant floor and shop workforce verification" },
  { name: "Automotive", description: "Dealer, service, and plant staff coverage" },
  { name: "Electronics", description: "High-turnover assembly line screening" },
  { name: "Warehousing", description: "Contract and seasonal labour verification" },
  { name: "Engineering", description: "Site and project workforce compliance" },
  { name: "Industrial Parks", description: "Multi-tenant campus-wide verification" },
] as const;

export { industries };

export const services: Record<ServiceSlug, ServiceConfig> = {
  bgv: {
    slug: "bgv",
    breadcrumb: "Services / BG Services",
    eyebrow: "Background Verification Company",
    hero: {
      title: "Verify every worker before they cross the gate.",
      description:
        "InOps is a background-verification company delivering employee background verification, contract worker verification and industrial background verification for India's factories, vendors and industrial parks — deployed in days, not weeks.",
      primaryCta: { label: "Book Assessment", href: "/contact" },
      secondaryCta: { label: "Talk to an Expert", href: "/contact" },
      tags: ["Pre-employment Screening", "Police Verification", "Digital Background Verification"],
      previewCardTitle: "Fleet & Workforce Overview",
      previewRows: [
        { label: "60+ Verification Checks" },
        { label: "Identity Verification" },
        { label: "Digital Background Verification" },
      ],
      floatingStatTopRight: { value: "60+", label: "Checks Run" },
      floatingStatBottomRight: { value: "99%", label: "Accuracy" },
      floatingStatBottomLeft: { value: "48 hrs", label: "Turnaround" },
    },
    problem: {
      eyebrow: "The operational problem",
      title: "What breaks today, before BGV is in place",
      description:
        "The gaps operations, HR and security teams run into most often across industrial and multi-site environments.",
      cards: [
        { title: "Manual Verification", description: "Paper trails and phone calls slow every employment cycle down.", icon: "clock" },
        { title: "Payroll Leakage", description: "Ghost identities and duplicate records quietly drain labour budgets.", icon: "alert-triangle" },
        { title: "Forged Documents", description: "Fabricated ID and employment history pass unnoticed at the gate.", icon: "id-card" },
        { title: "Compliance Risk", description: "No standardised trail to show auditors or principal employers.", icon: "shield-alert" },
        { title: "Vendor Inconsistency", description: "Every contractor runs a different, unverifiable check of their own.", icon: "layers" },
        { title: "Poor Visibility", description: "HR and security have no single view of who is actually on site.", icon: "eye-off" },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "From intake to a cleared, compliant outcome",
      description: "A structured four-step workflow, built to run consistently across every site.",
      steps: [
        { title: "Submit", description: "Worker details and documents are logged through digital intake." },
        { title: "Verify", description: "60+ automated and field checks run across identity and history." },
        { title: "Report", description: "A digital, audit ready verification report is generated." },
        { title: "Deploy", description: "Cleared workers are released for on-site deployment." },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Everything the service runs on",
      description: "Built as modular capabilities that plug directly into existing onboarding and compliance workflows.",
      featuredTitle: "60+ Verification Checks",
      featuredTag: "Criminal, employment, education and address checks in one pass.",
      items: [
        { title: "Identity Verification", description: "Biometric and document cross-matching against government sources.", icon: "id-card" },
        { title: "Digital Background Verification", description: "Structured, shareable reports built for internal and vendor review.", icon: "file-text" },
        { title: "Compliance Tracking", description: "Every check logged against statutory and internal policy.", icon: "bar-chart" },
        { title: "API Integration", description: "Connects directly into onboarding and HRMS workflows.", icon: "cpu" },
        { title: "Pre-Employment Screening", description: "Live check status visible to HR, security and procurement.", icon: "activity" },
      ],
    },
    outcomeStats: {
      eyebrow: "Business outcomes",
      title: "What changes on the ground",
      description: "Outcomes reported by enterprises running BGV across their industrial and contract workforce operations.",
      stats: [
        { value: "60+", label: "Verification Types" },
        { value: "99%", label: "Accuracy" },
        { value: "100%", label: "Digital Reports" },
        { value: "80%", label: "Faster Onboarding" },
      ],
    },
    manualVsManaged: {
      eyebrow: "Why InOps",
      title: "The shift from manual to managed",
      description: "A side-by-side view of how BGV changes day-to-day operations.",
      data: {
        manualTitle: "Manual & Fragmented",
        manualItems: [
          "Manual paperwork and phone verification",
          "2–3 week average turnaround",
          "No standardised audit trail",
          "Checks vary by contractor and vendor",
          "Rcord scattered across spreadsheets",
        ],
        managedTitle: "Digital & Managed",
        managedItems: [
          "Fully digital verification workflow",
          "48-hour average turnaround",
          "Audit-ready trail on every worker",
          "Standardised 60+ check framework",
          "Centralised verification dashboard"
        ],
      },
    },
    engagement: {
      eyebrow: "Customer journey",
      title: "How an engagement typically unfolds",
      description: "A consistent path from first assessment to ongoing, supported operations.",
      steps: [
        { step: "01", title: "Consultation", description: "Understand your operations requirements and workforce scale." },
        { step: "02", title: "Assessment", description: "Current-state review of workforce, compliance and infrastructure." },
        { step: "03", title: "Proposal", description: "A scoped rollout plan aligned to your sites and timelines." },
        { step: "04", title: "Deployment", description: "Services go live across sites with minimal operational disruption" },
        { step: "05", title: "Ongoing Support", description: "Continuous monitoring, compliance tracking and dedicated support." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions from operations & compliance teams",
      description: "Can't find what you're looking for? Our compliance team is always ready to help.",
      items: [
        { question: "How long does a single verification take?", answer: "Most checks return in 24–48 hours, with results routed straight into your onboarding flow." },
        { question: "Do you conduct police verification checks?", answer: "Yes, police verification is included as part of our identity verification checks, alongside address and criminal-history validation." },
        { question: "Is the process compliant with labour law?", answer: "Verification workflows are structured to align with statutory and principal-employer obligations." },
        { question: "Do you verify workers across multiple states?", answer: "Yes, our pan-India network supports identity, employment and education checks in every state." },
      ],
      sideCardTitle: "Need a verification rollout?",
      sideCardDescription: "Our compliance team can walk through your current onboarding and where checks are missing.",
      sideCardCta: { label: "Contact our team", href: "/contact" },
    },
  },

  amc: {
    slug: "amc",
    breadcrumb: "Services / Biometric Arc Services",
    eyebrow: "Annual Maintenance Contract",
    hero: {
      title: "Keep biometric infrastructure running, everywhere.",
      description:
        "SLA-backed AMC services and lifecycle management covering access control AMC, attendance machine AMC and RFID reader AMC across distributed plants, warehouses and campuses.",
      primaryCta: { label: "Explore AMC Plans", href: "/contact" },
      secondaryCta: { label: "Talk to an Expert", href: "/contact" },
      tags: ["Biometric AMC Services", "RFID Reader AMC", "Access Control Maintenance"],
      previewCardTitle: "Fleet & Workforce Overview",
      previewRows: [
        { label: "Preventive & Corrective Maintenance" },
        { label: "Remote Diagnostics" },
        { label: "On-site Engineer Support" },
      ],
      floatingStatTopRight: { value: "99.5%", label: "Uptime SLA" },
      floatingStatBottomRight: { value: "24 hrs", label: "Response Time" },
      floatingStatBottomLeft: { value: "Pan-India", label: "Coverage" },
    },
    problem: {
      eyebrow: "The operational problem",
      title: "What breaks today, before AMC is in place",
      description:
        "The gaps operations, HR and security teams run into most, often across industrial and multi-site environments.",
      cards: [
        { title: "Device Downtime", description: "Faulty scanners and readers stall attendance and access at the gate.", icon: "alert-triangle" },
        { title: "No Central Visibility", description: "Device health across sites is invisible until something fails.", icon: "eye-off" },
        { title: "Reactive Repairs", description: "Maintenance only happens after a breakdown disrupts operations.", icon: "refresh-cw" },
        { title: "Fragmented Vendors", description: "Different AMC vendors per site with no unified SLA.", icon: "layers" },
        { title: "Firmware Drift", description: "Ageing firmware leaves devices insecure and unsupported.", icon: "bug" },
        { title: "Unplanned Costs", description: "Emergency repairs cost more than planned lifecycle management.", icon: "trending-up" },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "From intake to a cleared, compliant outcome",
      description: "A structured four-step workflow, built to run consistently across every site.",
      steps: [
        { title: "Onboard", description: "Device fleet is mapped and registered across every site." },
        { title: "Monitor", description: "Remote diagnostics track device health continuously." },
        { title: "Maintain", description: "Preventive and corrective visits run against SLA schedules." },
        { title: "Report", description: "Site-wise uptime and service history is reported monthly." },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Everything the service runs on",
      description: "Built as modular capabilities that plug directly into existing onboarding and compliance workflows.",
      featuredTitle: "Preventive & Corrective Maintenance",
      featuredTag: "Scheduled biometric maintenance paired with rapid-response repairs.",
      items: [
        { title: "Remote Diagnostics", description: "Device health monitored centrally before failures occur.", icon: "wifi" },
        { title: "On-site Engineer Support", description: "Field engineers dispatched against defined SLA windows.", icon: "user-check" },
        { title: "Biometric Device Maintenance", description: "Devices kept current, secure and vendor-supported.", icon: "maintenance" },
        { title: "Device Health Monitoring", description: "Live fleet dashboard across every registered site.", icon: "activity" },
        { title: "Access Control Maintenance", description: "One contract, one SLA, across every plant and warehouse.", icon: "map-pin" },
      ],
    },
    outcomeStats: {
      eyebrow: "Business outcomes",
      title: "What changes on the ground",
      description: "Outcomes reported by enterprises running AMC across their industrial and contract workforce operations.",
      stats: [
        { value: "99.5%", label: "Fleet Uptime" },
        { value: "24 hrs", label: "SLA Response" },
        { value: "100%", label: "Site Monitored" },
        { value: "40%", label: "Fewer Breakdowns" },
      ],
    },
    manualVsManaged: {
      eyebrow: "Why InOps",
      title: "The shift from manual to managed",
      description: "A side-by-side view of how AMC changes day-to-day operations.",
      data: {
        manualTitle: "Manual & Fragmented",
        manualItems: [
          "Break-fix, reactive vendor calls",
          "No visibility into device health",
          "Separate AMC per site or region",
          "Firmware left unmanaged",
          "Costs spike during failures",
        ],
        managedTitle: "Digital & Managed",
        managedItems: [
          "Scheduled preventive maintenance",
          "Live fleet health dashboard",
          "One SLA across every site",
          "Managed firmware lifecycle",
          "Predictable, planned service costs",
        ],
      },
    },
    engagement: {
      eyebrow: "Customer journey",
      title: "How an engagement typically unfolds",
      description: "A consistent path from first assessment to ongoing, supported operations.",
      steps: [
        { step: "01", title: "Consultation", description: "Understand your operational requirements and workforce scale." },
        { step: "02", title: "Assessment", description: "Current-state review of workforce, compliance and infrastructure." },
        { step: "03", title: "Proposal", description: "A scoped rollout plan aligned to your sites and timelines." },
        { step: "04", title: "Deployment", description: "Services go live across sites with minimal operational disruption." },
        { step: "05", title: "Ongoing Support", description: "Continuous monitoring, compliance tracking and dedicated support." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions from operations & compliance teams",
      description: "Can't find what you're looking for? Our support team is always ready to help.",
      items: [
        { question: "Which devices are covered under AMC?", answer: "Biometric scanners, access controllers, attendance devices and readers are covered under our standard AMC plans." },
        { question: "What is the standard response SLA?", answer: "Standard response is within 24 hours, with faster tiers available for critical sites." },
        { question: "Do you offer IFB-ready AMC and access control maintenance?", answer: "Yes, IFB-ready AMC and access control maintenance are provisioned as a single integrated plan." },
        { question: "Can we monitor device health ourselves?", answer: "Yes, a live dashboard is available to your operations team for continuous visibility." },
      ],
      sideCardTitle: "Need AMC coverage across sites?",
      sideCardDescription: "Our team can map your existing device fleet and recommend the right coverage plan.",
      sideCardCta: { label: "Explore AMC plans", href: "/contact" },
    },
  },

  "fleet-audit": {
    slug: "fleet-audit",
    breadcrumb: "Services / Biometric Database Audit",
    eyebrow: "Biometric Fleet Audit",
    hero: {
      title: "Find every ghost enrollment before it costs you.",
      description:
        "A biometric database audit built for ghost employee detection, duplicate biometric cleanup and payroll leakage prevention — closing the gaps a routine attendance audit misses.",
      primaryCta: { label: "Request Audit", href: "/contact" },
      secondaryCta: { label: "Talk to an Expert", href: "/contact" },
      tags: ["Ghost Employee Detection", "Duplicate Biometric Cleanup", "Payroll Leakage Prevention"],
      previewCardTitle: "Fleet & Workforce Overview",
      previewRows: [
        { label: "Biometric Database Audit" },
        { label: "Duplicate Biometric Cleanup" },
        { label: "Ghost Employee Detection" },
      ],
      floatingStatTopRight: { value: "100%", label: "Refords Scanned" },
      floatingStatBottomRight: { value: "Zero", label: "Ghost Tolerance" },
      floatingStatBottomLeft: { value: "Days", label: "Not Months" },
    },
    problem: {
      eyebrow: "The operational problem",
      title: "What breaks today, before Fleet Audit is in place",
      description:
        "The gaps operations, HR and security teams run into most often across industrial and multi-site environments.",
      cards: [
        { title: "Ghost Enrollments", description: "Inactive or fake enrollments continue to mark attendance.", icon: "user-ghost" },
        { title: "Duplicate Identities", description: "One worker enrolled multiple times across devices or sites.", icon: "users" },
        { title: "Payroll Leakage", description: "Unauthorised entries quietly inflate attendance-linked payouts.", icon: "alert-triangle" },
        { title: "Unauthorized Access", description: "Stale enrollments retain access long after they should be revoked.", icon: "lock" },
        { title: "No Audit Trail", description: "No record of who was enrolled, when, or why.", icon: "file-check" },
        { title: "Poor Data Trust", description: "Attendance and access records are no longer reliable inputs.", icon: "eye-off" },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "From intake to a cleared, compliant outcome",
      description: "A structured four-step workflow, built to run consistently across every site.",
      steps: [
        { title: "Extract", description: "Enrollment data is pulled from every biometric device and site." },
        { title: "Audit", description: "Records are cross-matched for duplicates and ghost entries." },
        { title: "Remediate", description: "Flagged enrollments are revalidated or bulk de-enrolled." },
        { title: "Certify", description: "An audit report certifies the cleaned, current database." },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Everything the service runs on",
      description: "Built as modular capabilities that plug directly into existing onboarding and compliance workflows.",
      featuredTitle: "Biometric Database Audit",
      featuredTag: "Full scan of enrollment records across the device fleet.",
      items: [
        { title: "Duplicate Biometric Cleanup", description: "Cross-matching to surface repeated or conflicting identities.", icon: "search" },
        { title: "Ghost Employee Detection", description: "Inactive and fraudulent enrollments identified and removed.", icon: "user-x" },
        { title: "Identity Audit", description: "Active workers reconfirmed against verified records.", icon: "user-x" },
        { title: "Bulk De-enrollment", description: "Systematic removal of stale records at scale.", icon: "refresh" },
        { title: "Attendance Audit Reporting", description: "A certified report documenting the full cleanup process.", icon: "file-text" },
      ],
    },
    outcomeStats: {
      eyebrow: "Business outcomes",
      title: "What changes on the ground",
      description: "Outcomes reported by enterprise customers running Fleet Audit across their industrial and contract workforce operations.",
      stats: [
        { value: "100%", label: "Fleet Coverage" },
        { value: "0", label: "Tolerated Ghosts" },
        { value: "30%", label: "Avg. Leakage Found" },
        { value: "7 Days", label: "Typical Cleanup" },
      ],
    },
    manualVsManaged: {
      eyebrow: "Why InOps",
      title: "The shift from manual to managed",
      description: "A side-by-side view of how Fleet Audit changes day-to-day operations.",
      data: {
        manualTitle: "Manual & Fragmented",
        manualItems: [
          "No structure enrollment review",
          "Duplicates go unnoticed for months",
          "No access review on enrollment",
          "Payroll leakage hidden in the data",
          "No certified audit trail",
        ],
        managedTitle: "Digital & Managed",
        managedItems: [
          "Structured, scheduled database autdits",
          "Duplicates surfaced and resolved",
          "Access revoked on de-enrollment",
          "Leakage identified and quantified",
          "Certified audit report on completion",
        ],
      },
    },
    engagement: {
      eyebrow: "Customer journey",
      title: "How an engagement typically unfolds",
      description: "A consistent path from first assessment to ongoing, supported operations.",
      steps: [
        { step: "01", title: "Consultation", description: "Understand your operational requirements and workforce scale." },
        { step: "02", title: "Assessment", description: "Current-state review of workforce, compliance and infrastructure." },
        { step: "03", title: "Proposal", description: "A scoped rollout plan aligned to your sites and timelines." },
        { step: "04", title: "Deployment", description: "Services go live across sites with minimal operational disruption." },
        { step: "05", title: "Ongoing Support", description: "Continuous monitoring, compliance tracking and dedicated support." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions from operations & compliance teams",
      description: "Can't find what you're looking for? Our audit team is always ready to help.",
      items: [
        { question: "What counts as a ghost enrollment?", answer: "Any enrollment that is duplicate, inactive, or no longer tied to a verified, active employee." },
        { question: "Does the audit disrupt daily attendance?", answer: "No, the audit runs against exported data and does not interrupt live attendance systems." },
        { question: "How does payroll leakage prevention work?", answer: "Flagged enrollments are cross-referenced against payroll and active headcount to surface leakage." },
        { question: "How often should a biometric health check run?", answer: "Quarterly database audits are typical for large, high-turnover industrial sites." },
      ],
      sideCardTitle: "Need a biometric audit?",
      sideCardDescription: "Our audit team can scope a cleanup across your existing device fleet.",
      sideCardCta: { label: "Request an audit", href: "/contact" },
    },
  },

  "clra-audit-readiness": {
    slug: "clra-audit-readiness",
    breadcrumb: "Services / CLRA Compliance Audit",
    eyebrow: "Compliance Health Check",
    hero: {
      title: "Know your compliance gaps before an auditor does.",
      description:
        "A CLRA compliance audit and labour-compliance audit built for contract labour compliance and principal employer compliance, with a scored actionable path to labour law compliance.",
      primaryCta: { label: "Schedule Assessment", href: "/contact" },
      secondaryCta: { label: "Talk to an Expert", href: "/contact" },
      tags: ["CLRA Compliance Audit", "Principal Employer Compliance", "Audit-ready Documentation"],
      previewCardTitle: "Fleet & Workforce Overview",
      previewRows: [
        { label: "CLRA Compliance Audit" },
        { label: "Contract Labour Compliance" },
        { label: "Principal Employer Compliance" },
      ],
      floatingStatTopRight: { value: "100%", label: "Sites Assessed" },
      floatingStatBottomRight: { value: "Scored", label: "Risk Report" },
      floatingStatBottomLeft: { value: "Audit-ready", label: "Documentation" },
    },
    problem: {
      eyebrow: "The operational problem",
      title: "What breaks today, before CLRA Audit Readiness is in place",
      description:
        "The gaps operations, HR and security teams run into most often across industrial and multi-site environments.",
      cards: [
        { title: "Manual Compliance Tracking", description: "Contractor obligations tracked across scattered spreadsheets.", icon: "clock" },
        { title: "Compliance Risk", description: "Statutory gaps go unnoticed until an inspection occurs.", icon: "shield-alert" },
        { title: "Unclear Ownership", description: "No clarity on principal employer versus contractor obligations.", icon: "briefcase" },
        { title: "Poor Documentation", description: "Licenses and registers are incomplete or out of date.", icon: "file-check" },
        { title: "No Early Warning", description: "Risk is discovered only after a notice is issued.", icon: "alert-triangle" },
        { title: "Fragmented Oversight", description: "Different sites follow different compliance standards.", icon: "layers" },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "From intake to a cleared, compliant outcome",
      description: "A structured four-step workflow, built to run consistently across every site.",
      steps: [
        { title: "Assess", description: "Contractor documentation and statutory obligations are reviewed." },
        { title: "Score", description: "Gaps are scored against a structured CLRA risk framework." },
        { title: "Remediate", description: "Prioritised recommendations close the highest-risk gaps." },
        { title: "Certify", description: "An audit-ready documents the final compliance posture." },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Everything the service runs on",
      description: "Built as modular capabilities that plug directly into existing onboarding and compliance workflows.",
      featuredTitle: "CLRA Compliance Audit",
      featuredTag: "Structured review against CLRA statutory requirements.",
      items: [
        { title: "Contractor Documentation Review", description: "Licenses, registers and records checked for completeness.", icon: "file-text" },
        { title: "Principal Employer Compliance", description: "Coverage mapped against principal employer duties.", icon: "briefcase" },
        { title: "Gap Analysis", description: "Every gap identified, ranked, and explained.", icon: "search" },
        { title: "Risk Scorecard", description: "A single, comparable score across sites and vendors.", icon: "gauge" },
        { title: "Labour Law Compliance Report", description: "Documentation prepared for internal or statutory audits.", icon: "bar-chart" },
      ],
    },
    outcomeStats: {
      eyebrow: "Business outcomes",
      title: "What changes on the ground",
      description: "Outcomes reported by enterprises running CLRA Audit Readiness across their industrial and contract workforce operations.",
      stats: [
        { value: "100%", label: "Site Assessed" },
        { value: "30+", label: "Compliance Checkpoints" },
        { value: "Scored", label: "Risk Report" },
        { value: "100%", label: "Audit-ready Docs" },
      ],
    },
    manualVsManaged: {
      eyebrow: "Why InOps",
      title: "The shift from manual to managed",
      description: "A side-by-side view of how CLRA Audit Readiness changes day-to-day operations.",
      data: {
        manualTitle: "Manual & Fragmented",
        manualItems: [
          "Compliance tracked in spreadsheets",
          "Gaps found only at inspection",
          "Owner unclear between employer and vendor",
          "Documentation incomplete or stale",
          "No comparable risk score across sites",
        ],
        managedTitle: "Digital & Managed",
        managedItems: [
          "Structured CLRA compliance framework",
          "Gaps surfaced before any inspection",
          "Obligations mapped and assigned clearly",
          "Documentation reviewed and refreshed",
          "Single risk scorecard across all sites",
        ],
      },
    },
    engagement: {
      eyebrow: "Customer journey",
      title: "How an engagement typically unfolds",
      description: "A consistent path from first assessment to ongoing, supported operations.",
      steps: [
        { step: "01", title: "Consultation", description: "Understand your operational requirements and workforce scale." },
        { step: "02", title: "Assessment", description: "Current-state review of workforce, compliance and infastructure." },
        { step: "03", title: "Proposal", description: "A scoped rollout plan aligned to your sites and timelines." },
        { step: "04", title: "Deployment", description: "Services go live across sites with minimal operational disruption." },
        { step: "05", title: "Ongoing Support", description: "Continuous monitoring, compliance tracking and dedicated support." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions from operations & compliance teams",
      description: "Can't find what you're looking for? Our compliance team is always ready to help.",
      items: [
        { question: "What does a CLRA compliance audit cover?", answer: "Contractor licensing, statutory registers and principal employer compliance obligations across your sites." },
        { question: "How long does a compliance assessment take?", answer: "A typical single-site assessment is completed within 2–3 weeks, depending on documentation readiness." },
        { question: "Do you help fix the gaps you find?", answer: "Yes, we support remediation with actionable recommendations for each flagged item." },
        { question: "Is this useful ahead of a labour department audit?", answer: "Yes, this product is built to prepare and consolidate the documentation an authority would ask for." },
      ],
      sideCardTitle: "Need a compliance review?",
      sideCardDescription: "Our compliance team can walk through your existing sites and flag audit risk.",
      sideCardCta: { label: "Schedule Assessment", href: "/contact" },
    },
  },

  "workforce-supply": {
    slug: "workforce-supply",
    breadcrumb: "Services / Verified Workforce Supply",
    eyebrow: "Workforce Supply",
    hero: {
      title: "Workers, verified and ready before Day One.",
      description:
        "Industrial manpower supply and contract labour deployment built around a compliance-ready workforce — background verified, digitally onboarded and biometrically enrolled before they report onsite.",
      primaryCta: { label: "Explore Workforce Services", href: "/contact" },
      secondaryCta: { label: "Talk to an Expert", href: "/contact" },
      tags: ["Compliance Ready Workforce", "Skilled Workforce Supply", "Rapid Deployment"],
      previewCardTitle: "Fleet & Workforce Overview",
      previewRows: [
        { label: "BGV-cleared Workers" },
        { label: "Digital Onboarding" },
        { label: "Biometric Enrollment" },
      ],
      floatingStatTopRight: { value: "Pre-cleared", label: "Workforce" },
      floatingStatBottomLeft: { value: "Day One", label: "Ready" },
      floatingStatBottomRight: { value: "Pan-India", label: "Sourcing" },
    },
    problem: {
      eyebrow: "The operational problem",
      title: "What breaks today, before Workforce Supply is in place",
      description:
        "The gaps operations, HR and security teams run into most often across industrial and multi-site environments.",
      cards: [
        { title: "Slow Mobilisation", description: "New sites wait weeks for compliant, verified workers.", icon: "clock" },
        { title: "Unverified Deployment", description: "Workers reach site before background checks complete.", icon: "shield-alert" },
        { title: "Onboarding Friction", description: "Biometric and attendance setup happens after workers arrive.", icon: "user-check" },
        { title: "Statutory Exposure", description: "Compliance gaps surface only after deployment.", icon: "alert-triangle" },
        { title: "Fragmented Sourcing", description: "Multiple vendors, no consistent verification standard.", icon: "layers" },
        { title: "Poor Ramp Visibility", description: "No clear view of workforce readiness before go-live.", icon: "layers" },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "From intake to a cleared, compliant outcome",
      description: "A structured four-step workflow, built to run consistently across every site.",
      steps: [
        { title: "Source", description: "Workers are sourced against the site's skill and scale needs." },
        { title: "Verify", description: "Full Background verification clear every worker in advance." },
        { title: "Onboard", description: "Digital onboarding and biometric emrollment complete pre-deployment." },
        { title: "Deploy", description: "A compliant, Day-One-ready workforce reports on site." },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Everything the service runs on",
      description: "Built as modular capabilities that plug directly into existing onboarding and compliance workflows.",
      featuredTitle: "BGV-cleared Workers",
      featuredTag: "Every worker arrives already background-verified.",
      items: [
        { title: "Digital Onboarding", description: "Paperwork and documentation completed before Day One.", icon: "upload" },
        { title: "Biometric Enrollment", description: "Access and attendance devices pre-configured per worker.", icon: "scan" },
        { title: "Skilled Workforce Matching", description: "Attendance systems ready the moment workers report.", icon: "clock" },
        { title: "Statutory Compliance", description: "Deployment aligned to contractor compliance obligations.", icon: "shield-check" },
        { title: "Contract Labour Deployment", description: "Verified workforce mobilised on accelerated timelines.", icon: "truck" },
      ],
    },
    outcomeStats: {
      eyebrow: "Business outcomes",
      title: "What changes on the ground",
      description: "Outcomes reported by enterprises running Workforce Supply across their industrial and contract workforce operations.",
      stats: [
        { value: "Pre-cleared", label: "100% Workforce" },
        { value: "80%", label: "Faster Ramp-up" },
        { value: "100%", label: "Digital Onboarding" },
        { value: "Day One", label: "Deployment Ready" },
      ],
    },
    manualVsManaged: {
      eyebrow: "Why InOps",
      title: "The shift from manual to managed",
      description: "A side-by-side view of how Workforce Supply changes day-to-day operations.",
      data: {
        manualTitle: "Manual & Fragmented",
        manualItems: [
          "Workers arrive before verification completes",
          "Onboarding happens on-site, causing delays",
          "Biometric setup follows deployment",
          "Compliance checked after the fact",
          "Sourcing and verification are disconnected",
        ],
        managedTitle: "Digital & Managed",
        managedItems: [
          "Every worker cleared before deployment",
          "Onboarding completed ahead of Day One",
          "Biometric enrollment done pre-site",
          "Compliance built into the sourcing step",
          "One managed flow, start to finish",
        ],
      },
    },
    engagement: {
      eyebrow: "Customer journey",
      title: "How an engagement typically unfolds",
      description: "A consistent path from first assessment to ongoing, supported operations.",
      steps: [
        { step: "01", title: "Consultation", description: "Understand your operational requirements adn workforce scale." },
        { step: "02", title: "Assessment", description: "Current-state review of workforce, compliance and infrastructure." },
        { step: "03", title: "Proposal", description: "A scoped rollout plan aligned to your sites and timelines." },
        { step: "04", title: "Deployment", description: "Services go live across sites with minimal operational disruption." },
        { step: "05", title: "Ongoing Support", description: "Continuous monitoring, compliance tracking and dedicated support." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions from operations & compliance teams",
      description: "Can't find what you're looking for? Our workforce team is always ready to help.",
      items: [
        { question: "How fast can a new site be staffed?", answer: "Typical industrial mobilisation timelines are significantly faster, using verified sourcing and pre-scaled bench capacity." },
        { question: "Does this replace our staffing vendor?", answer: "It can operate alongside your existing vendors, depending on your leadership model." },
        { question: "Is biometric enrollment done at our devices?", answer: "Yes, enrollment is completed against your onsite devices and attendance infrastructure." },
        { question: "What industries is this suited for?", answer: "Manufacturing, logistics, warehousing and engineering operations with high-volume contract labour deployment." },
      ],
      sideCardTitle: "Need workforce ready on short notice?",
      sideCardDescription: "Our team can map your upcoming staffing requirements to a compliant deployment plan.",
      sideCardCta: { label: "Explore Workforce Services", href: "/contact" },
    },
  },
};

export function getServiceConfig(slug: string): ServiceConfig | undefined {
  return services[slug as ServiceSlug];
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return Object.keys(services) as ServiceSlug[];
}
