export interface ModuleData {
  slug: string;
  badge: string;
  title: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  subDescription?:string;
  /** Optional keyword-bearing H2 content sections rendered after the hero. Body may contain inline HTML (e.g. <a> tags). */
  contentSections?: { h2: string; body: string }[];
  /** Optional FAQ items rendered visibly and as JSON-LD FAQPage schema. */
  faq?: { question: string; answer: string }[];

  metrics: string[];
  challenges: string[];
  workflow: {
    title: string;
    description: string;
  }[];
  features: string[];

  roi: {
    title: string;
    description: string;
  }[];

  aiInsights: string[];
  benefits: string[];

  cta: string;
  dashboard: {
    analytics: {
      label: string;
      value: number; 
    }[];
 
    kpis: {
      label: string;
      value: string;
    }[]; 
    feed: {
      label: string;
      status: string;
      tone: "ok" | "warn" | "err";
    }[];
  }
}

export const modules: ModuleData[] = [
  {
    slug: "attendance-leave",
    badge: "Iddion RegX CLMS · Attendance & Leave",
    title: "Contract Worker Attendance & Leave Management",
    subDescription:
      "Automate contract worker attendance, shift management, and leave tracking — biometric verification, real-time headcount, and CLRA 9-day continuous attendance monitoring across all sites. Part of Iddion RegX, InOps' contract labour management system",
    description:
      "Automate contract worker attendance, shift management, and leave tracking — biometric verification, real-time headcount, and CLRA 9-day continuous attendance monitoring across all sites. Iddion RegX captures every punch as both an attendance record and a compliance record.",
    seoTitle: "Contract Worker Attendance & Leave Software | Iddion RegX",
    seoKeywords: [
      "contract worker attendance",
      "shift roster management factory",
      "contractor attendance tracking",
      "OT management contract labour",
      "9 day attendance rule CLRA",
    ],

    contentSections: [
      {
        h2: "Biometric Attendance & Leave Tracking for Contract Workers",
        body: "Every punch from face terminals, fingerprint readers, AI-based CCTV, QR, mobile GPS, and card readers feeds one Iddion RegX attendance stream under a single worker identity. Mixed hardware across gates and sites needs no additional configuration — a worker enrolled once is recognised by every method. Attendance and leave share one record, so an approved absence does not count toward shift headcount and does not reach payroll as a worked shift.",
      },
      {
        h2: "9-Day Continuous Attendance Rule Explained",
        body: "The Contract Labour (Regulation and Abolition) Act requires that any worker employed for nine or more continuous days must be given a weekly rest day before the count resets — a breach makes the principal employer liable. Iddion RegX tracks continuous days worked per worker per site in real time and alerts HR before the threshold is crossed, leaving time to schedule the mandatory rest day rather than discovering the violation at month-end. The same attendance data that triggers this alert also populates Form XIII and the contractor headcount registers that labour inspectors review.",
      },
    ],

    faq: [
      {
        question: "Which devices can capture contract worker attendance?",
        answer:
      "Face terminals, fingerprint readers, AI-based CCTV attendance, QR and card readers, and the mobile app with GPS validation — all feeding one Iddion RegX attendance stream under a single worker identity. Mixed hardware across gates and sites needs no additional configuration, and a worker enrolled once is recognised by every method.",
      },
      {
        question: "Can shift and OT rules differ per contractor?",
        answer:
      "Yes. Shift windows, OT thresholds, week-offs, and leave policies are configured per contractor, worker category, and site, with state-aware statutory rules applied automatically. Iddion RegX evaluates every punch against the rules that apply to that worker, so no one interprets a roster manually at shift end.",      },
      {
        question: "How does the system handle the 9-day continuous attendance rule?",
        answer:
      "Iddion RegX tracks continuous attendance per worker and alerts HR before the threshold is crossed, leaving time to schedule the mandatory rest day rather than discovering the breach afterwards. These alerts run on the same engine that populates Form V and Form XIII in CLRA compliance software.",
      },
      {
        question: "Do verified hours flow to payroll automatically?",
        answer:
          "Yes — approved attendance and OT flow directly to contractor payroll and invoice reconciliation, so what's paid always traces to what the gates recorded.",
      },
        {
    question: "How are missed or single punches handled?",
    answer:
      "Missing punch-outs are raised as exceptions rather than defaulting to a full shift — which is where unearned hours usually enter payroll. Supervisors resolve each one with a reason code, and Iddion RegX logs the original event, the correction, and who approved it.",
  },

   {
    question: "Can attendance be captured at sites without biometric devices?",
    answer:
      "Yes. The mobile app captures face-verified attendance with GPS validation where there's no fixed hardware, and CCTV-based capture works where cameras exist but terminals aren't practical. Every method writes to the same Iddion RegX attendance record.",
  },
    {
    question: "How is overtime calculated and controlled?",
    answer:
      "OT is computed from actual punch-out time against the registered shift end — not from contractor declarations. Hours beyond the configured threshold require digital supervisor approval before becoming payable, and unapproved OT never reaches the invoice. This closes all three leakage types together: unauthorised OT, ghost OT, and unclaimed legitimate OT.",
  },

    {
    question: "Does it handle leave for contract workers?",
    answer:
      "Yes — leave types, eligibility, and approval flows are configured per contractor and category, including statutory weekly-off tracking. Leave and attendance share one record, so an approved absence isn't flagged and doesn't count toward shift headcount.",
  },
    {
    question: "Can we see live headcount on the floor right now?",
    answer:
      "Yes. Iddion RegX shows present-on-site headcount live by gate, contractor, shift, and area. Beyond shift planning, this is the number that matters during an emergency evacuation, when the muster list has to reflect who actually entered rather than who was rostered.",
  },
   {
    question: "What happens when a worker's gate pass or documents expire mid-cycle?",
    answer:
      "Validity is checked at entry, not at month-end. A worker with expired induction, medical fitness, or licence is flagged and can be blocked at the gate — and because the block happens before the punch, no attendance record is created and no hours reach payroll.",
  },
    {
    question: "How does attendance data reach contractor invoices?",
    answer:
      "Contractor invoices are matched line-by-line against gate-verified headcount and approved OT in Iddion RegX, so discrepancies surface before payment rather than during an audit. Finance stops reconciling manually and starts reviewing exceptions.",
  },
   {
    question: "Can rosters be planned in advance and adjusted per site?",
    answer:
      "Yes. Rosters are built per site, shift, contractor, and trade, with auto-rostering suggesting allocations against required strength. Changes apply to attendance rules immediately, so a mid-week adjustment doesn't generate exception noise.",
  },
    ],

    metrics: ["Reduced Attendance Fraud", "Better Workforce Planning", "Accurate Payroll Processing"],

    challenges: [
      "Buddy Punching",
      "Shift Allocation",
      "Attendance Corrections",
      "Leave Visibility Mismatch",
      "No Real-Time Floor Headcount",
    ],

    workflow: [
      {
        title: "Attendance Capture",
        description: "Attendance is recorded through biometric devices, mobile app, CCTV AI, or geofencing."
      },
      {
        title: "Shift Validation",
        description: "System validates punches against roster, shift schedules, and overtime policies."
      },
      {
        title: "Exception Processing",
        description: "Late arrivals, missing punches, absenteeism, and shift deviations are flagged."
      },
      {
        title: "Workforce Visibility",
        description: "Real-time dashboards provide workforce strength, attendance status, and leave analytics."
      },
    ],

    features: [
      "Face Attendance",
      "CCTV Attendance",
      "Geo-Fencing Attendance",
      "Auto Rostering",
      "Leave Management",
      "Employee Self-Service",
      "Over Time Control",
    ],

    roi: [
      {
        title: "Reduced Attendance Fraud",
        description:
          "AI-backed presence verification reduces misuse across all sites and shifts.",
      },
      {
        title: "Improved Workforce Planning",
        description:
          "Auto-rostering improves shift staffing balance and reduces last-minute gaps.",
      },
      {
        title: "Accurate Payroll Processing",
        description:
          "Verified attendance data flows directly to payroll without manual correction cycles.",
      },
    ],

    aiInsights: [
      "Predict absenteeism, detect anomalies, and optimize shift allocation automatically.",
      "AI spots improbable movement, punch timing, and CCTV mismatches in real time.",
      "Smart notifications recommend roster moves before shift downtime occurs.",
    ],

    benefits: [
      "Managers gain real-time workforce visibility by line, shift, and site.",
      "HR improves attendance accuracy and controls time, leave, and access from one system.",
      "Workers get mobile self-service transparency and faster leave approvals.",
    ],

    cta: "Know exactly who is working, where, and when.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 66 },
        { label: "Tue", value: 42 },
        { label: "Wed", value: 78 },
        { label: "Thu", value: 58 },
        { label: "Fri", value: 84 },
        { label: "Sat", value: 62 },
      ],
      kpis: [
        { label: "Present Workforce", value: "6,482" },
        { label: "Attendance Exceptions", value: "173" },
      ],
      feed: [
        { label: "Shift Coverage", status: "Active", tone: "ok" },
        { label: "Leave Status", status: "Updated", tone: "ok" },
        { label: "Attendance Anomaly", status: "Flagged", tone: "warn" },
      ],
    }
  },

  {
    slug: "compliance-report",
    badge: "Iddion RegX CLMS · Compliance",
    title: "Contract Labour Compliance Reporting & Registers",
    description:
      "Maintain digital CLRA registers, generate statutory returns, and stay audit-ready across every site and state. Iddion RegX builds compliance records from live gate events — so every register entry traces to a verified punch, not a manual entry.",
    subDescription:
      "Maintain digital CLRA registers, generate statutory returns, and stay audit-ready across every site and state.",
    seoTitle: "Contract Labour Compliance Software | Registers & Returns",
    seoDescription:
      "CLRA compliance software for principal employers: automated Form V & Form XIII registers, contractor licence tracking, 9-day rest-rule alerts, and audit-ready statutory returns — generated from live gate data.",
    seoKeywords: [
      "CLRA compliance software",
      "Form V register software",
      "Form XIII automation",
      "contract labour compliance software India",
      "contractor licence tracking",
    ],

   faq: [
  {
    question: "What is CLRA compliance software?",
    answer:
      "CLRA compliance software automates the obligations a principal employer carries under the Contract Labour (Regulation & Abolition) Act: maintaining Form V and Form XIII registers, tracking contractor licence validity and headcount caps per establishment, monitoring continuous-attendance thresholds, and generating statutory returns. Iddion RegX does this from live gate data, so registers are outputs of operations rather than month-end reconstruction.",
  },
  {
    question: "Which registers are maintained digitally?",
    answer:
      "Form V, Form XIII, muster rolls, and wage registers, with state-specific formats where the applicable rules differ. Each entry traces to the gate event or payroll record that produced it, so a register can be defended line by line rather than merely produced.",
  },
  {
    question: "Does it track contractor licences and headcount caps?",
    answer:
      "Yes — licence number, expiry date, and permitted headcount per establishment, with alerts before expiry and flags when deployment approaches the cap. A deployment that would breach the licensed strength is caught before the worker enters, which is the only point at which it's still cheap to fix. Licence data is maintained in contractor management.",
  },
  {
    question: "What is the 9-day rule alert?",
    answer:
      "Continuous attendance is tracked per worker per site, and HR is alerted before the threshold is reached so the weekly rest day can be scheduled in time. The underlying attendance data comes from attendance and leave management.",
  },
  {
    question: "Can it generate statutory returns automatically?",
    answer:
      "Returns are prepared from live register and payroll data in statutory format, ready for review and filing. Filing remains a human-approved step — a generated return still needs an accountable signatory, and the system is built around that rather than around it.",
  },
  {
    question: "How does this help during a labour inspection?",
    answer:
      "Every register, licence, and gate event sits in one repository tagged by site, contractor, and period, so an inspection request is answered with a filtered export instead of a search across files and emails. For PSU and defence establishments facing short-notice inspections, this is usually the deciding capability.",
  },
  {
    question: "What if we operate across multiple states with different rules?",
    answer:
      "Registers and thresholds are configured per state, so each establishment follows its applicable rules while corporate compliance sees a consolidated view. Multi-state operations are where manual compliance breaks first, because one team ends up maintaining several rule sets by memory.",
  },
  {
    question: "How is this different from a document management system?",
    answer:
      "A document system stores what you upload; Iddion RegX generates the record from the event. The distinction matters because most compliance failures aren't missing documents — they're timing failures, where the register was accurate on the day it was compiled and wrong by the day it was needed.",
  },
  {
    question: "Does it enforce compliance or only report it?",
    answer:
      "Both, when paired with gate compliance. Reporting tells you a contractor's licence lapsed; enforcement stops their workers at the barrier until it's restored. Reporting alone leaves the gap between knowing and acting, which is where inspection findings live.",
  },
  {
    question: "What about PF and ESI compliance?",
    answer:
      "Deductions are computed per worker and matched against contractor challan evidence in challan reconciliation, so contractor defaults surface before they become the principal employer's liability under CLRA.",
  },
  {
    question: "We're not sure where our compliance currently stands. Where do we start?",
    answer:
      "With a CLRA compliance audit — a scored assessment of registers, licences, records, and enforceability across your sites. Most plants find the gaps are narrower and more specific than feared, which makes remediation a project rather than an overhaul.",
  },
],

    contentSections: [
      {
        h2: "What is CLRA Compliance Software?",
        body: "CLRA compliance software automates the obligations a principal employer carries under the Contract Labour (Regulation &amp; Abolition) Act: maintaining Form V and Form XIII registers, tracking contractor licence validity and headcount caps per establishment, monitoring continuous-attendance thresholds, and generating statutory returns. Iddion RegX does this from live gate data, so registers are outputs of operations rather than month-end reconstruction.",
      },
      {
        h2: "Form V and Form XIII Registers, Maintained from Gate Data",
        body: "Traditional compliance treats Form V and Form XIII as month-end paperwork. Iddion RegX treats them as live outputs of gate operations: every contractor deployment, headcount change, or work-commencement event writes to the register in real time. When an inspector arrives or an audit is called, the register is current to the last gate punch — not reconstructed from memory. This is the structural difference between CLRA compliance software and a document-filing tool.",
      },
      {
        h2: "Licence, Headcount Cap, and 9-Day Rule Monitoring",
        body: "Iddion RegX tracks each contractor's CLRA licence number, expiry date, and permitted headcount per establishment. Deployments that would breach a licensed headcount cap are flagged before the worker enters. The 9-day continuous attendance rule — where a contract worker employed for nine or more consecutive days acquires entitlement to a weekly rest day — is monitored per worker per site, with HR alerts before the threshold is crossed.",
      },
      {
        h2: "Built for Labour Inspections and Compliance Audits",
        body: "Principal employers at PSUs, defence establishments, and large manufacturing plants face periodic CLRA inspections with short notice. Iddion RegX stores every register, licence, Form V, and gate event in a single audit repository, tagged by site, contractor, and period. An inspection request is answered with a filtered export — not a records search across files and emails.",
      },
    ],

    metrics: [
      "Reduced Compliance Effort",
      "Faster Audit Response",
      "Improved Regulatory Readiness",
    ],

    challenges: [
      "Form V / Form XIII maintained manually",
      "Contractor licence expiry missed",
      "9-day rest-rule not tracked per worker",
      "Audit evidence scattered across files",
      "Multi-site statutory gaps undetected",
    ],

    workflow: [
      {
        title: "Gate data captured",
        description: "Every worker entry and exit is biometrically verified and written to the compliance record in real time — no manual transcription."
      },
      {
        title: "Registers updated automatically",
        description: "Form V, Form XIII, muster rolls, and wage registers are maintained from live gate and payroll data — always current, never reconstructed."
      },
      {
        title: "Alerts before thresholds are crossed",
        description: "Licence expiry, headcount cap, and 9-day continuous attendance alerts fire before the compliance event, not after it."
      },
      {
        title: "Audit-ready export on demand",
        description: "Any register, filing period, site, or contractor can be exported as a statutory-format document in under a minute."
      },
    ],

    features: [
      "Form V & Form XIII Registers",
      "Contractor Licence Tracking",
      "9-Day Attendance Alerts",
      "State-Specific Register Templates",
      "Statutory Return Generation",
      "Central Audit Repository",
    ],

    roi: [
      {
        title: "Reduced Compliance Effort",
        description:
          "Automated register maintenance eliminates manual statutory compilation across contractors and states.",
      },
      {
        title: "Faster Audit Response",
        description:
          "Centralized evidence and filtered exports reduce inspector-response time from days to under an hour.",
      },
      {
        title: "Improved Regulatory Readiness",
        description:
          "Licence, headcount, and 9-day alerts surface the next compliance risk before deadlines or inspections arrive.",
      },
    ],

    aiInsights: [
      "Monitor CLRA risks, track licence deadlines, and flag 9-day threshold exposures automatically across all sites.",
      "AI summarizes compliance hotspots by contractor, establishment, and state act.",
      "Assistive search locates any register entry, Form V, or contractor document instantly.",
    ],

    benefits: [
      "Compliance teams maintain current CLRA registers without manual effort across every establishment.",
      "Plant HR knows exactly which workers are approaching the 9-day threshold and which contractor licences are expiring.",
      "Auditors and inspectors receive complete, site-tagged, period-filtered evidence in a single export.",
    ],

    cta: "Make CLRA audit day a report export, not a records hunt.",

    dashboard: {
      analytics: [
        { label: "Mon", value: 70 },
        { label: "Tue", value: 54 },
        { label: "Wed", value: 88 },
        { label: "Thu", value: 46 },
        { label: "Fri", value: 76 },
        { label: "Sat", value: 60 },
      ],
      kpis: [
        { label: "States Covered", value: "19" },
        { label: "Open Compliance Gaps", value: "8" },
      ],
      feed: [
        { label: "Statutory Filing", status: "Active", tone: "ok" },
        { label: "Audit Repository", status: "Synced", tone: "ok" },
        { label: "Licence Renewal", status: "Due Soon", tone: "warn" },
      ],
    }
  },

  {
    slug: "background-verification",
    badge: "Iddion RegX CLMS · Background Verification",
    title: "Contract Worker Onboarding & BGV Software",
    description:
      "Run criminal record checks, UAN employment history verification, and blue-collar BGV for every contract worker — with automatic re-verification on expiry and gate-blocking on adverse or pending status. Part of Iddion RegX, InOps' contract labour management system.",
    subDescription:
      "Automate contract worker attendance, shift management, and leave tracking — biometric verification, real-time headcount, and CLRA 9-day continuous attendance monitoring across all sites. Part of Iddion RegX, InOps' contract labour management system",
     seoTitle: "Contract Worker Onboarding & BGV Software | Iddion RegX",
    seoKeywords: [
      "contractor onboarding software",
      "worker background verification module",
      "Aadhaar verification onboarding",
      "industrial worker onboarding",
      "digital worker onboarding",
    ],

    contentSections: [
      {
        h2: "What Gets Verified Before First Entry?",
        body: "Aadhaar-linked identity, criminal and court records, PAN and UAN validation, address verification, employment history, and medical fitness — a worker without clearance on any of these criteria is gate-blocked until the outstanding step resolves. BGV-pending status is enforced at the barrier automatically; no manual security check is required.",
      },
      {
        h2: "Onboarding in Hours, Not Weeks",
        body: "Digital intake captures documents in the worker's language and handles batch flows for shutdown and surge volumes — hundreds of workers processed in parallel rather than one by one. Onboarding that previously took days compresses to hours, with no proportional increase in HR headcount.",
      },
      {
        h2: "Automatic Re-Verification on Expiry",
        body: "Re-verification schedules are configured per worker category and trigger automatically. When a check nears expiry, Iddion RegX alerts and starts the re-verification workflow. If the check expires before a new result returns, gate access is suspended — the same enforcement mechanism as an expired medical clearance.",
      },
      {
        h2: "Background Verification Records Built for Audits",
        body: 'Every worker carries a per-worker verification trail: what was checked, when, by which authority, with what result. Records are structured for defence and PSU audit requirements and available on demand. Need background checks without deploying the full CLMS? InOps also offers <a href="/services/background-verification" class="text-blue-600 underline">standalone background verification as a service</a>.',
      },
    ],

faq: [
  {
    question: "What checks are included in the background verification module?",
    answer:
      "Aadhaar-based offline identity verification with worker consent, PAN and UAN validation, criminal and court record screening at current and permanent addresses, address verification, employment history, and education or trade-certificate checks where the role requires them. Iddion RegX runs these against the worker's record so results attach to their biometric identity, not a paper file.",
  },
  {
    question: "What sources are checks run against?",
    answer:
      "Government identity databases, court and criminal record databases, EPFO records for employment history, and field verification for physical address checks. Each result carries its source and date, so a report can be assessed on what was actually checked rather than a single pass/fail flag.",
  },
  {
    question: "How does a verified status translate to gate access?",
    answer:
      "Once a worker's background check clears, Iddion RegX writes the result to their biometric identity record — the same identity the gate terminal reads at every entry. A cleared worker enters; a pending or adverse worker is blocked at the barrier without any manual security check. The gate acts on live status, not on a report someone remembered to look at.",
  },
  {
    question: "What does 'unable to verify' mean for a worker's gate status?",
    answer:
      "A record that returns 'unable to verify' is held as pending rather than cleared — the worker's gate pass is not activated until the outstanding item resolves or a manager permits entry under an overridden status with a recorded reason. The system distinguishes all three outcomes — clear, adverse, unable to verify — so security is never making a judgement call on an ambiguous result.",
  },
  {
    question: "How does re-verification work when a check expires?",
    answer:
      "Re-verification schedules are configured per worker category and trigger automatically. When a check nears expiry, Iddion RegX alerts and starts the re-verification workflow. If the check expires before a new result returns, gate access is suspended automatically — the same enforcement mechanism as an expired medical clearance.",
  },
  {
    question: "How does verification status control site access?",
    answer:
      "BGV status is a live gate rule: pending or expired means no entry, enforced at the barrier rather than tracked in a monthly report. Status changes take effect at the next gate attempt without any manual update to security.",
  },
  {
    question: "Can we set different verification requirements by role or site?",
    answer:
      "Yes. A housekeeping worker, a hot-work fitter, and a worker entering a defence establishment carry different requirement sets, configured per category and site. Required checks are hard blocks; informational checks log findings without stopping deployment.",
  },
  {
    question: "How does this relate to InOps standalone BGV service?",
    answer:
      "This module is verification built into the platform — checks run automatically as part of onboarding and results enforce gate rules without a separate process. If you need checks without deploying the full CLMS — per-check pricing, bulk upload, contractor bench packages — see background verification services.",
  },
  {
    question: "Can verification run in parallel with other onboarding steps?",
    answer:
      "Yes — running verification concurrently with medical fitness and induction is how Iddion RegX compresses onboarding from days to hours. Workers are cleared as results return rather than waiting for all steps to complete sequentially. See the onboarding module for how the parallel steps are managed end to end.",
  },
],

    metrics: [
      "80% Faster Onboarding",
      "Reduced Verification Delays",
      "Improved Workforce Authenticity",
    ],

    challenges: [
      "Aadhaar / PAN Delays",
      "Manual Document Chasing",
      "BGV Visibility Gaps",
      "Medical Fitness Bottlenecks",
      "Training Approvals Stuck",
    ],

    workflow: [
      {
        title: "Digital Registration ",
        description: "Contractor uploads worker details, Aadhaar, PAN, bank details, and supporting documents."
      },
      {
        title: "Automated Verification",
        description: "Identity, UAN, PF, ESI, and background verification checks are initiated automatically."
      },
      {
        title: "Medical & Safety Clearance",
        description: "Worker undergoes medical fitness validation and mandatory induction training."
      },
      {
        title: "Workforce Activation",
        description: "Approved workers are assigned to contractor, location, shift, and become deployment-ready."
      },
    ],

    features: [
      "Aadhaar, PAN & UAN Verification",
      "Background Verification",
       "Address Verification",
       "Employment History (UAN/EPFO) ",
       "Adverse-Finding Handling",
       "Periodic Re-verification ",
       "Cross-Contractor Blacklist",
      "Digital Document Collection",
      "Criminal & Court Record Checks",
    ],

    roi: [
      {
        title: "80% Faster Verification",
        description:
          "Parallel verification workflows eliminate follow-up lag and deployment delays.",
      },
      {
        title: "Reduced Verification Delays",
        description:
          "Automated document collection and BGV tracking accelerate approvals.",
      },
      {
        title: "Improved Workforce Authenticity",
        description:
          "Every worker is fully verified before deployment, reducing compliance exposure.",
      },
    ],

    aiInsights: [
      "Identify missing documents, predict approval bottlenecks, and flag duplicate registrations.",
      "Smart checklist adapts by worker category, plant, and vendor requirements.",
      "Auto-summarized worker files give approvers instant readiness context.",
    ],

    benefits: [
      "HR accelerates workforce deployment with digital onboarding workflows.",
      "Compliance teams maintain complete worker verification records for every deployment.",
      "Vendors submit cleaner worker packets through a guided mobile onboarding journey.",
    ],

    cta: "Deploy verified workers faster with digital onboarding.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 50 },
        { label: "Tue", value: 64 },
        { label: "Wed", value: 72 },
        { label: "Thu", value: 80 },
        { label: "Fri", value: 90 },
        { label: "Sat", value: 68 },
      ],
      kpis: [
        { label: "Onboarding Status", value: "Active" },
        { label: "BGV Progress", value: "94%" },
      ],
      feed: [
        { label: "Pending Approvals", status: "Review", tone: "warn" },
        { label: "Workforce Readiness", status: "Strong", tone: "ok" },
        { label: "Document Verification", status: "Done", tone: "ok" },
      ],
    }
  },

  {
    slug: "contractor-management",
    badge: "Iddion RegX CLMS · Contractor Management",
    title: "Contractor & Vendor Compliance Management",
    description:
      "Manage contractor compliance centrally: licences, CLRA registrations, headcount limits, document expiry alerts, and contractor scorecards across every vendor and site from one dashboard.",
     subDescription:
      "Automate contract worker attendance, shift management, and leave tracking — biometric verification, real-time headcount, and CLRA 9-day continuous attendance monitoring across all sites. Part of Iddion RegX, InOps' contract labour management system",
      seoTitle: "Contractor Management Software | Licences & Compliance",
    seoKeywords: [
      "contractor compliance software India",
      "contractor management system",
      "labour contractor licence tracking",
      "principal employer contractor management",
      "multi-site contractor management",
    ],

    contentSections: [
      {
        h2: "Every Contractor, One Governed View",
        body: "Contractor profiles, commercial agreements, insurance certificates, key contacts, and site deployments consolidate in one record — updated as documents renew and workers are added or removed. No more chasing attachment emails or rebuilding context at audit time.",
      },
      {
        h2: "CLRA Licences, Headcount Caps, and Renewal Alerts",
        body: 'CLRA licence validity and permitted headcount limits are tracked per establishment, with alerts before expiry and flags when deployment approaches the licensed cap. Licence data syncs with the registers maintained in <a href="/contract-labour-management/iddion-regx-modules/compliance-report" class="text-blue-600 underline">CLRA compliance reporting</a>, so Form V headcount always reflects the current licensed limit. A lapsed licence triggers auto-blocking at the gate.',
      },
      {
        h2: "What a Principal Employer Should Track Per Contractor",
        body: "Valid CLRA licence and remaining headroom against the cap · PF/ESI challan evidence per cycle · insurance certificate and agreement validity dates · deployment strength vs. work-order scope · incident and compliance history. These are the fields a labour inspector will request — keeping them current in one system is the difference between a 30-minute audit response and a three-week reconstruction.",
      },
      {
        h2: "Labour Inspection Readiness",
        body: "Every field an inspector asks for — licences, registers, headcount against cap, remittance evidence, worker-to-contractor mapping — is current in one system and exportable by site, contractor, and period. Principal employers at PSUs, defence establishments, and large manufacturing plants report same-day audit response instead of multi-week reconstruction from emails and folders.",
      },
    ],

faq: [
  {
    question: "Can Iddion RegX track CLRA licence limits per contractor?",
    answer:
      "Yes — licence validity and permitted headcount are tracked per contractor per establishment, with alerts before expiry and flags when deployment approaches the licensed cap. Most plants discover they're over cap only when an inspector counts; this makes the headroom visible daily.",
  },
  {
    question: "What happens when a contractor's licence lapses?",
    answer:
      "The contractor is flagged across dashboards and registers immediately, and with gate compliance enabled, their workers can be blocked at entry until the licence is restored — with every denial logged. The alternative is discovering the lapse weeks later, with attendance records already showing unlicensed deployment.",
  },
  {
    question: "Does it verify contractors' statutory remittances?",
    answer:
      "Contractor PF and ESI challan evidence is captured against each cycle and matched to computed liabilities, so gaps surface before they become the principal employer's problem. Under CLRA, contractor defaults can fall back on you — this is where that exposure becomes visible.",
  },
  {
    question: "Can we compare contractor performance across sites?",
    answer:
      "Yes. Scorecards cover attendance reliability, compliance flags, document currency, OT patterns, and incident history per contractor across every site they serve — so procurement sees vendor quality alongside commercial terms rather than after a problem.",
  },
  {
    question: "Can a blacklisted worker be re-submitted under a different contractor?",
    answer:
      "No — that's the point of holding blacklists at the worker-identity level rather than per contractor. A worker blocked for a safety violation or security incident stays blocked across your sites regardless of which contractor presents them next, because the block attaches to their biometric identity.",
  },
  {
    question: "What documents does the system track per contractor?",
    answer:
      "CLRA licence and headcount cap, commercial agreement and validity dates, insurance certificates, PF/ESI registration and challan evidence, work orders and scope, plus site-specific approvals. Expiry alerts run on all of them, so renewals happen before lapses rather than after notices.",
  },
  {
    question: "How does contractor data connect to worker records?",
    answer:
      "Every worker is mapped to their contractor, work order, site, department, and cost centre — so attendance, wages, and compliance records roll up per contractor automatically. When a worker moves between contractors, the history follows the worker while the billing follows the contractor.",
  },
  {
    question: "What happens at contractor exit or contract closure?",
    answer:
      "Workers under that contractor are de-provisioned — gate access revoked, biometric enrollments deactivated — and the compliance record is retained for the statutory period. This closes the gap where departed contractors' workers keep valid gate credentials for months.",
  },
  {
    question: "Can we onboard a new contractor before their documents are complete?",
    answer:
      "You can register them, but deployment can be gated on document completeness — so a contractor without a valid licence or insurance can't move workers onto site. Configurable per site, since some plants allow provisional entry under supervision and others don't.",
  },
  {
    question: "How does this help during a labour inspection?",
    answer:
      "Every field an inspector asks for — licences, registers, headcount against cap, remittance evidence, worker-to-contractor mapping — is current in one system and exportable. The difference is a same-day audit response instead of a three-week reconstruction from emails and folders.",
  },
  {
    question: "How many contractors can it handle?",
    answer:
      "Multi-site plants running dozens of contractors simultaneously are the normal case, with per-contractor and consolidated views across sites. Scale is a configuration matter, not a licensing constraint.",
  },
],

    metrics: [
      "Improved Vendor Accountability",
      "Centralized Contractor Governance",
      "Reduced Compliance Risks",
    ],

    challenges: [
      "Fragmented Contractor Data",
      "No Vendor-Level View",
      "Skill Mismatch on Shopfloor",
      "Document Expiry Surprises",
      "Blacklist Not Centralized",
    ],

    workflow: [
      {
        title: "Contractor Registration",
        description: "Vendor profile, contracts, licenses, and work orders are onboarded into the system."
      },
      {
        title: "Workforce Mapping",
        description: "Workers are linked to contractors, departments, cost centers, and project locations."
      },
      {
        title: "Compliance Monitoring",
        description: "The platform continuously tracks licenses, manpower strength, and statutory obligations."
      },
      {
        title: "Performance Evaluation",
        description: "Contractor scorecards, compliance ratings, and productivity metrics are updated automatically."
      },
    ],

    features: [
      "Contractor Master Database",
      "Work Order Management",
      "Contractor Scorecards",
      "Skill Mapping",
      "Vendor Performance Tracking",
      "Contractor Risk Management",
    ],

    roi: [
      {
        title: "Improved Vendor Accountability",
        description:
          "Scorecards make contractor performance and compliance exposure visible across all sites.",
      },
      {
        title: "Centralized Contractor Governance",
        description:
          "One master database replaces fragmented records across plants and vendors.",
      },
      {
        title: "Reduced Compliance Risks",
        description:
          "Expiry alerts and blacklist management surface risks before they become incidents.",
      },
    ],

    aiInsights: [
      "Predict contractor risks, benchmark vendors, and identify performance gaps automatically.",
      "Pattern detection spots underperforming vendors before escalation is required.",
      "Smart summaries compare sites, headcount mix, and compliance posture across the enterprise.",
    ],

    benefits: [
      "Operations, procurement, and compliance teams work from a single source of truth.",
      "Procurement sees vendor quality beyond commercial metrics.",
      "Corporate governance owns a central contractor ledger with full audit history.",
    ],

    cta: "Manage contractors with complete visibility and control.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 58 },
        { label: "Tue", value: 72 },
        { label: "Wed", value: 64 },
        { label: "Thu", value: 86 },
        { label: "Fri", value: 70 },
        { label: "Sat", value: 80 },
      ],
      kpis: [
        { label: "Active Contractors", value: "146" },
        { label: "Contractor Scores", value: "92" },
      ],
      feed: [
        { label: "Compliance Status", status: "Active", tone: "ok" },
        { label: "Workforce Strength", status: "Strong", tone: "ok" },
        { label: "Contractor Risk Alert", status: "Watch", tone: "warn" },
      ],
    }
  },

 {
    slug: "wage-payroll",
    badge: "Iddion RegX CLMS · Wage & Payroll",
    title: "Contract Labour Payroll Software",
    description:
      "Automate contract labour wage calculations, OT approvals, and PF/ESI deductions — and reconcile contractor invoices against biometric attendance records before finance sign-off.",
    subDescription:
      "Automate contract worker attendance, shift management, and leave tracking — biometric verification, real-time headcount, and CLRA 9-day continuous attendance monitoring across all sites. Part of Iddion RegX, InOps' contract labour management system",
      seoTitle: "Contract Labour Payroll Software | Wages, OT, PF/ESI",
    seoKeywords: [
      "contract labour payroll software",
      "contractor payroll processing India",
      "contractor wage calculation",
      "PF ESI deduction contract workers",
      "OT management contract labour",
    ],

    contentSections: [
      {
        h2: "Wages Computed from Gate-Verified Hours",
        body: "Wage rates are configured per worker category, contractor, and state minimum-wage schedule, and applied only to hours verified by the attendance engine — not the contractor's submitted roster. Every rupee in the payroll run traces back to a biometric punch or approved attendance event.",
      },
      {
        h2: "OT Approval Workflow — No Approval, No Payment",
        body: 'When hours breach the configured OT threshold, the system creates a digital approval request for the supervisor — OT that goes unapproved never enters the payable calculation. The gate knows what was worked, the rule knows what was approved, and the payable amount can only be the intersection. That structure closes unauthorised OT, ghost OT, and unclaimed legitimate OT together.',
      },
      {
        h2: "State-Wise Minimum Wage & PF/ESI Compliance",
        body: 'Minimum-wage schedules are maintained per state and worker category, applied automatically by site — which matters for multi-state operations where the same trade carries different statutory rates across plants, and where a missed revision becomes an arrears liability. PF, ESI, and LWF are computed per worker each payroll cycle, with challan-ready outputs for filing and mismatches surfacing in real time rather than at filing deadlines. The same deduction records feed <a href="/contract-labour-management/iddion-regx-modules/challan-reconciliation" class="text-blue-600 underline">challan reconciliation</a> and CLRA compliance registers.',
      },
      {
        h2: "Why Compute Contractor Payroll from Gate Data?",
        body: 'Contractor-submitted rosters are where leakage lives: inflated headcount, unworked OT credited, wrong rate codes applied. Computing wages from gate data ends the argument at source — the record is the gate log, not the spreadsheet. Under CLRA, contractor defaults on wages and statutory dues can fall back on the principal employer; holding independent evidence of what was owed and what was remitted is the difference between a defensible position and exposure.',
      },
    ],

   faq: [
  {
    question: "How are contractor wage rates managed?",
    answer:
      "Rates are configured per worker category, contractor, and state minimum-wage schedule, with revisions applying from their effective date and a full audit trail on every change. Iddion RegX applies the correct rate automatically per worker and site, so a rate revision in one state doesn't require manual updates across your contractor base.",
  },
  {
    question: "What stops unauthorised overtime from being paid?",
    answer:
      "OT beyond the configured threshold creates a digital approval request before it becomes payable — unapproved OT never enters the calculation. The gate knows what was worked, the rule knows what was approved, and the payable amount can only be the intersection. That structure closes unauthorised OT, ghost OT, and unclaimed legitimate OT together.",
  },
  {
    question: "Why compute contractor payroll from gate data instead of contractor rosters?",
    answer:
      "Contractor-submitted rosters are where leakage lives: inflated headcount, unworked OT credited, wrong rate codes applied. Iddion RegX computes wages only from verified attendance events, so every rupee traces to a biometric punch at a specific gate and time. Disputes get settled against records rather than arguments.",
  },
  {
    question: "Are PF and ESI handled for contract workers?",
    answer:
      "Yes — PF, ESI, and LWF are computed per worker each payroll cycle with challan-ready outputs, and mismatches surface in real time rather than at filing deadlines. The same records feed the registers in CLRA compliance software and the statutory-side matching in challan reconciliation.",
  },
  {
    question: "Does it handle state-wise minimum wage differences?",
    answer:
      "Yes. Minimum-wage schedules are maintained per state and worker category, and applied automatically by site — which matters for multi-state operations where the same trade carries different statutory rates across plants, and where a missed revision becomes an arrears liability.",
  },
  {
    question: "Can contractors see their own payroll data?",
    answer:
      "Contractor logins expose their own workers' verified hours, computed wages, and deduction summaries. Most billing disputes disappear at this step, because the contractor sees the same numbers before invoicing rather than arguing about them afterwards.",
  },
  {
    question: "What happens when a worker's attendance is disputed after payroll runs?",
    answer:
      "Every payroll line links back to its source attendance events, so a disputed entry is traced to the gate record, the shift rule applied, and any approval on file. Corrections are processed as adjustments with an audit trail, not by overwriting the original run.",
  },
  {
    question: "How does this reduce the principal employer's statutory exposure?",
    answer:
      "Under CLRA, contractor defaults on wages and statutory dues can fall back on the principal employer. Because Iddion RegX computes wages and deductions from your own verified attendance data, you hold independent evidence of what was owed and what was remitted — rather than relying entirely on the contractor's word.",
  },
  {
    question: "Does it integrate with our ERP or finance system?",
    answer:
      "Validated payroll and invoice data can flow to your finance system through the approval workflow, so verified amounts move to AP without re-keying.",
  },
  {
    question: "Can we run payroll for multiple contractors and sites in one cycle?",
    answer:
      "Yes — a single run covers every contractor, category, and site with their own rate structures and statutory rules applied, producing per-contractor outputs for billing and consolidated views for finance.",
  },
  {
    question: "What audit trail does a payroll run leave?",
    answer:
      "Each run records the attendance events used, rates applied, OT approvals referenced, deductions computed, and every subsequent adjustment with its approver and timestamp — the evidence set an inspector or internal audit actually asks for.",
  },
],

    metrics: [
      "Reduced Billing Errors",
      "Faster Invoice Approvals",
      "Improved Cost Control",
    ],

    challenges: [
      "State-Wise Wage Complexity",
      "OT Disputes",
      "Invoice Mismatch Cycles",
      "Manual Reconciliation Load",
      "Payroll Handoff Friction",
    ],

    workflow: [
      {
        title: "Attendance Consolidation",
        description: "Approved attendance and overtime data are collected from all sites."
      },
      {
        title: "Wage Computation",
        description: "System calculates wages based on minimum wage rules, OT, deductions, and benefits."
      },
      {
        title: "Invoice Reconciliation",
        description: "Contractor invoices are matched against attendance, wages, and approved manpower."
      },
      {
        title: "Finance Approval",
        description: "Validated invoices move through approval workflows and ERP integration."
      },
    ],

    features: [
      "Wage Automation",
      "Overtime Calculations",
      "Minimum Wage Compliance",
      "Billing Reconciliation",
      "Invoice Validation",
      "ERP Integration",
    ],

    roi: [
      {
        title: "Reduced Billing Errors",
        description:
          "Automated reconciliation catches mismatches before they reach finance approval.",
      },
      {
        title: "Faster Invoice Approvals",
        description:
          "Validated invoices move cleanly through approval without manual intervention.",
      },
      {
        title: "Improved Cost Control",
        description:
          "Mismatch detection and audit-ready calculations eliminate hidden leakage.",
      },
    ],

    aiInsights: [
      "Detect payroll anomalies, billing mismatches, and unusual overtime patterns automatically.",
      "AI explains mismatch causes in plain language for faster approver resolution.",
      "Recommendation engine surfaces vendors and sites with hidden leakage risk.",
    ],

    benefits: [
      "Finance teams gain accuracy and cleaner invoice governance across all contractors.",
      "Contractors receive transparent wage calculations and faster dispute resolution.",
      "HR and payroll teams rely on one calculation source for all sites and states.",
    ],

    cta: "Automate wage governance and eliminate billing disputes.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 60 },
        { label: "Tue", value: 48 },
        { label: "Wed", value: 74 },
        { label: "Thu", value: 66 },
        { label: "Fri", value: 82 },
        { label: "Sat", value: 56 },
      ],
      kpis: [
        { label: "Wage Summary", value: "₹38.6L" },
        { label: "Billing Variances", value: "27" },
      ],
      feed: [
        { label: "Invoice Status", status: "Active", tone: "ok" },
        { label: "Cost Leakage Alert", status: "Flagged", tone: "warn" },
        { label: "Invoice Matched", status: "Done", tone: "ok" },
      ],
    }
 },

  {
    slug: "cxo-dashboard",
    badge: "Iddion RegX CLMS · CXO Dashboard",
    title: "Contract Workforce Analytics Dashboard for CXOs",
    description:
      "Real-time contractor workforce analytics for leadership: headcount by site, compliance posture, cost leakage, and vendor scorecards — without waiting for month-end reporting packs. Built specifically for contract labour visibility, not permanent-employee HRIS.",
     subDescription:
      "Automate contract worker attendance, shift management, and leave tracking — biometric verification, real-time headcount, and CLRA 9-day continuous attendance monitoring across all sites. Part of Iddion RegX, InOps' contract labour management system",
    seoTitle: "Contract Workforce Analytics Dashboard | Iddion RegX",
    seoKeywords: [
      "contractor workforce analytics",
      "workforce dashboard manufacturing",
      "contractor spend visibility",
      "compliance dashboard CXO",
      "cost leakage monitoring CLMS",
    ],

    contentSections: [
      {
        h2: "From Gate Events to Board Answers",
        body: "Every number on the CXO dashboard traces to the same attendance engine that drives gate access, contractor payroll, and CLRA registers — no manual stitching, no month-end compilation. Live data means the headcount you see at 9 AM reflects what the gates recorded at shift change, not last week's export. This is contract-labour visibility specifically: contractor headcount, CLRA compliance posture, vendor licence status, and cost leakage — data the permanent-employee HRIS does not carry.",
      },
      {
        h2: "What Contractor Cost Leakage Looks Like at the Executive Level",
        body: 'Leakage is invisible in aggregate because totals look plausible. The CXO dashboard surfaces the deltas instead: invoiced headcount against gate-verified headcount, OT claimed against OT approved, and site-to-site variance on the same metrics. A plant running 15% higher OT than its peers with the same output is a question worth asking — and it only appears when sites are compared on the same definitions.',
      },
      {
        h2: "Role-Based Views Across the Organisation",
        body: "CXOs see the enterprise rollup: total headcount, spend, compliance posture, and cross-site anomalies. Plant heads drill into their own site. Finance sees the invoice and deduction picture. Compliance sees register and licence status. Everyone reads from one dataset, which removes the reconciliation meetings that exist purely to agree on whose number is right.",
      },
      {
        h2: "Board-Ready Reporting & Data Export",
        body: "Scheduled and on-demand board exports use the same numbers the plant sees, aggregated rather than reformatted. Because the source is one attendance and compliance engine, the figure in the board pack matches the figure the plant head can defend in the same meeting. Historical data is retained for trend analysis and statutory periods, so year-on-year and pre-versus-post-deployment comparisons run on your own records rather than estimates.",
      },
    ],

 faq: [
  {
    question: "What KPIs does the CXO dashboard show?",
    answer:
      "Contractor headcount and spend by site, compliance posture with open risks, OT and cost-leakage trends, invoice-versus-verified deltas, contractor scorecards, and cross-site comparisons — all computed from live gate data rather than submitted reports.",
  },
  {
    question: "Is the dashboard real-time?",
    answer:
      "Yes. Iddion RegX reads from the same attendance and compliance engine that runs the gates, so the headcount you see at 9 AM reflects what the readers recorded at shift change. There is no month-end compilation step and no export cycle to wait for.",
  },
  {
    question: "Can data be exported for board reviews?",
    answer:
      "Yes — scheduled and on-demand board exports, using the same numbers the plant sees, aggregated rather than reformatted. Because the source is one engine, the figure in the board pack matches the figure the plant head can defend.",
  },
  {
    question: "How does leadership see cost leakage they couldn't see before?",
    answer:
      "Leakage is invisible in aggregate because totals look plausible. The dashboard surfaces the deltas instead: invoiced headcount against gate-verified headcount, OT claimed against OT approved, and site-to-site variance on the same metrics. A plant running 15% higher OT than its peers with the same output is a question worth asking, and it only appears when sites are comparable.",
  },
  {
    question: "Can we compare performance across plants and contractors?",
    answer:
      "Yes. Sites, contractors, and cost centres are benchmarked on the same definitions — attendance reliability, compliance score, OT ratio, cost per verified hour — so comparison isn't distorted by each plant measuring differently.",
  },
  {
    question: "Who can see what?",
    answer:
      "Access is role-based: CXOs see the enterprise rollup, plant heads drill into their own site, finance sees the invoice and deduction picture, compliance sees register and licence status. Everyone reads from one dataset, which removes the reconciliation meetings that exist purely to agree on whose number is right.",
  },
  {
    question: "What alerts reach leadership, and how?",
    answer:
      "Exception-first: licence expiries approaching cap or lapse, compliance breaches, unusual OT clusters, and invoice-versus-attendance variance beyond threshold. Alerts are pushed rather than waiting to be found, with mobile access so a plant escalation doesn't wait for someone to open a laptop.",
  },
  {
    question: "Does it work across multiple plants and states?",
    answer:
      "Yes — multi-site is the default architecture. Site-level, regional, and enterprise views come from the same records, including where different states impose different statutory rules, so consolidation doesn't require normalising four spreadsheets first.",
  },
  {
    question: "How far back does the data go?",
    answer:
      "Historical attendance, compliance, and cost data is retained for trend analysis and statutory retention periods, so year-on-year and pre-versus-post-deployment comparisons run on your own records rather than estimates.",
  },
  {
    question: "What does leadership actually do differently with this?",
    answer:
      "Three things, based on how it gets used: they question OT variance between comparable plants, they see licence and register exposure before an inspection rather than after a notice, and they hold contractors to comparable scorecards at renewal instead of renewing on relationship. The dashboard's value is less about seeing more and more about the questions it makes askable.",
  },
],

    metrics: [
      "Faster Decisions",
      "Enterprise-Wide Visibility",
      "Improved Operational Governance",
    ],

    challenges: [
      "No Multi-Location Command View",
      "Lagging Operational Signals",
      "Compliance Buried in Reports",
      "Vendor Exposure Not Benchmarked",
      "Cost Leakage Hard to Explain",
    ],

    workflow: [
      {
        title: "Data Aggregation",
        description: "Data from attendance, compliance, onboarding, and payroll modules is consolidated."
      },
      {
        title: "KPI Monitoring ",
        description: "Key metrics such as workforce strength, contractor performance, and compliance scores are tracked."
      },
      {
        title: "Risk Identification",
        description: "AI highlights compliance risks, manpower shortages, and financial leakages."
      },
      {
        title: "Executive Decision Making",
        description: "Leadership receives actionable insights, trends, and recommendations."
      },
    ],

    features: [
      "Workforce Analytics",
      "Contractor Analytics",
      "Compliance Dashboard",
      "Cost Leakage Monitoring",
      "Vendor Benchmarking",
      "Executive Reporting",
    ],

    roi: [
      {
        title: "Faster Decisions",
        description:
          "One dashboard replaces fragmented review decks and month-end reporting cycles.",
      },
      {
        title: "Enterprise-Wide Visibility",
        description:
          "Live workforce, compliance, and vendor data across every site and region.",
      },
      {
        title: "Improved Operational Governance",
        description:
          "KPIs, risk signals, and benchmarks align HR, finance, and operations teams.",
      },
    ],

    aiInsights: [
      "Generate executive summaries, identify risks, and forecast workforce trends automatically.",
      "AI writes a morning operations brief for each CXO view with prioritized action signals.",
      "Predictive benchmarking shows which plants and vendors will miss targets first.",
    ],

    benefits: [
      "Boardroom-ready insights for HR, operations, finance, and leadership teams.",
      "CXOs get enterprise visibility without waiting for month-end reporting packs.",
      "Shared analytics improves alignment across all leadership functions.",
    ],

    cta: "Transform workforce data into executive intelligence.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 64 },
        { label: "Tue", value: 80 },
        { label: "Wed", value: 58 },
        { label: "Thu", value: 92 },
        { label: "Fri", value: 76 },
        { label: "Sat", value: 70 },
      ],
      kpis: [
        { label: "Workforce Strength", value: "31 Sites" },
        { label: "Compliance Score", value: "94%" },
      ],
      feed: [
        { label: "Vendor Performance", status: "Active", tone: "ok" },
        { label: "Cost Analytics", status: "Live", tone: "ok" },
        { label: "Operational Risk Alert", status: "Watch", tone: "warn" },
      ],
    },
  },


  {
    slug: "ai-assistance",
    badge: "Iddion RegX CLMS · AI Assistant",
    title: "AI Assistant for Contract Labour Compliance",
    description:
      "Ask InOps AI questions about attendance, compliance, payroll, or contractor status and get instant answers, anomaly alerts, and automated report generation — across all your CLMS data, processed within your own environment.",
     subDescription:
      "Automate contract worker attendance, shift management, and leave tracking — biometric verification, real-time headcount, and CLRA 9-day continuous attendance monitoring across all sites. Part of Iddion RegX, InOps' contract labour management system",
    seoTitle: "AI Contract Labour Compliance Assistant | Iddion RegX",
    seoKeywords: [
      "AI workforce compliance",
      "attendance anomaly detection",
      "AI contractor management",
      "workforce AI manufacturing",
      "CLMS AI assistant",
    ],

    contentSections: [
      {
        h2: "Natural-Language Compliance Queries & Anomaly Detection",
        body: "Ask questions in plain language — 'which contractors billed above approved OT last month' or 'show workers with expired medical fitness at Plant 2' — and get answers with the underlying records attached, so the answer can be checked rather than trusted. Anomaly detection runs continuously: proxy-punch patterns (impossible travel between punches, synchronised entries across workers), OT clustering in the final days of a billing cycle, headcount-versus-invoice drift across contractor agencies, and compliance deadlines at risk given the current register state. Every flag includes the specific events that triggered it.",
      },
      {
        h2: "Grounded in Gate-Verified Data",
        body: "Every AI flag traces to a verified gate event, attendance record, or compliance register — not an estimate or industry benchmark. Patterns are specific to your own sites and contractors: a normal OT profile at a three-shift automotive plant looks nothing like one at a seasonal cement site, so site-specific baselines produce fewer false positives than generic models. When the system surfaces an anomaly, the underlying events are attached; there is no 'the AI said so' without evidence.",
      },
      {
        h2: "Assistance, Not Autopilot",
        body: "Iddion RegX AI surfaces anomalies, drafts reports, and recommends next steps — supervisors and HR approve before anything changes to a workforce record. Every control stays human-owned and audit-logged. In PSU, defence, and enterprise environments, automated decisions on workforce records require human accountability at each step; the system is built around that requirement rather than around it.",
      },
      {
        h2: "Data Privacy & AI Governance",
        body: "Your workforce data is processed for your queries and your anomaly detection only — it is not used to train external or shared models. Deployment options include on-premise installation where data-residency regulations require it, which is the standard configuration for defence establishments and PSU clients. Every AI action on a record is audit-logged with its evidence, so governance obligations on automated processing are met rather than assumed.",
      },
    ],

   faq: [
  {
    question: "What does AI assistance actually flag?",
    answer:
      "Proxy-punch patterns such as impossible travel between punches or synchronised entries across workers; overtime clustering in the final days of a billing cycle; headcount drift between what contractors invoice and what gates recorded; and compliance deadlines at risk given the current register state. Every flag arrives with the specific events that triggered it.",
  },
  {
    question: "Does AI take actions automatically?",
    answer:
      "No. Iddion RegX AI surfaces anomalies, drafts reports, and recommends next steps — supervisors and HR approve before anything changes to a workforce record. Every control stays human-owned and audit-logged, which is a requirement in PSU and defence environments rather than a design preference.",
  },
  {
    question: "Where does our data go? Does it train external AI models?",
    answer:
      "Your workforce data is processed for your queries and your anomaly detection only. It is not used to train external or shared models, and deployment options include on-premise where data-residency rules require it.",
  },
  {
    question: "What data does it learn from?",
    answer:
      "Your own gate-verified attendance, OT, payroll, and compliance history. Patterns are specific to your sites and contractors rather than generic industry benchmarks, which matters because a normal OT pattern at a three-shift automotive plant looks nothing like one at a seasonal cement site.",
  },
  {
    question: "Can I ask questions in plain language?",
    answer:
      "Yes — questions like 'which contractors billed above approved OT last month' or 'show workers with expired medical fitness at Plant 2' return answers with the underlying records attached, so the answer can be checked rather than trusted.",
  },
  {
    question: "How is this different from dashboards and reports?",
    answer:
      "Dashboards answer the questions someone anticipated when building them. Most compliance and cost questions are unanticipated — they arise from a specific invoice, inspection, or incident. AI assistance covers the long tail without an analyst in the loop, and surfaces anomalies nobody thought to build a chart for.",
  },
  {
    question: "What happens when the AI is wrong?",
    answer:
      "Every flag carries its evidence, so a wrong flag is visible as a wrong flag rather than an unexplained instruction. Users dismiss or action it, and dismissals are logged — which also means false-positive patterns are reviewable rather than invisible.",
  },
  {
    question: "Can it generate compliance reports automatically?",
    answer:
      "It can prepare reports and summaries from live data for review and approval. Statutory filings remain a human-approved step — a generated register still needs an accountable person to sign it, and Iddion RegX is designed around that rather than around it.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes — queries and alerts are available on mobile, so a plant head can ask about site status or approve an exception without opening a laptop.",
  },
  {
    question: "Who typically uses it?",
    answer:
      "Plant heads and supervisors for daily exceptions, HR for document and compliance status, finance for invoice and OT anomalies, and leadership for narrative summaries. The common thread is people who need answers without waiting for someone to build a report.",
  },
  {
    question: "Does it require additional licensing or setup?",
    answer:
      "AI assistance operates over data already in the platform — no separate data pipeline or integration project.",
  },
],
    metrics: [
      "Instant Access to Information",
      "Higher User Productivity",
      "Reduced Reporting Effort",
    ],

    challenges: [
      "Too Many Dashboards to Search",
      "Compliance Questions Depend on Analysts",
      "Report Requests Are Manual",
      "Anomalies Found Too Late",
      "Workflow Knowledge Trapped in Teams",
    ],

    workflow: [
      {
        title: "Ask a Question",
        description: "User asks a workforce, compliance, payroll, or contractor-related question."
      },
      {
        title: "Data Analysis",
        description: "AI analyzes data across all modules and historical records."
      },
      {
        title: "Insight Generation",
        description: "System prepares summaries, exceptions, root causes, and recommendations."
      },
      {
        title: "Action Execution",
        description: "Users can trigger workflows, generate reports, or assign corrective actions."
      },
    ],

    features: [
      "Conversational Analytics",
      "AI Compliance Assistant",
      "Payroll Query Assistant",
      "Report Generation",
      "Voice Commands",
      "Smart Recommendations",
    ],

    roi: [
      {
        title: "Instant Access to Information",
        description:
          "Decision makers get answers without analyst bottlenecks or dashboard navigation.",
      },
      {
        title: "Higher User Productivity",
        description:
          "Business users access workforce intelligence in natural language from any device.",
      },
      {
        title: "Reduced Reporting Effort",
        description:
          "AI generates reports, summaries, and alerts automatically without manual effort.",
      },
    ],

    aiInsights: [
      "Generate reports, answer questions, identify risks, and automate actions through conversation.",
      "Agentic workflows trigger reminders, approvals, and report exports based on user queries.",
      "Voice and chat unify access for plant, HR, finance, and compliance teams.",
    ],

    benefits: [
      "Everyone from supervisors to CXOs can access workforce intelligence instantly.",
      "Analysts move from report production to exception management and strategic analysis.",
      "Leadership gets narrative insight with recommended next steps, not just data.",
    ],

    cta: "Ask. Analyze. Act.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 64 },
        { label: "Tue", value: 80 },
        { label: "Wed", value: 58 },
        { label: "Thu", value: 92 },
        { label: "Fri", value: 76 },
        { label: "Sat", value: 70 },
      ],
      kpis: [
        { label: "Workforce Strength", value: "31 Sites" },
        { label: "Compliance Score", value: "94%" },
      ],
      feed: [
        { label: "Vendor Performance", status: "Active", tone: "ok" },
        { label: "Cost Analytics", status: "Live", tone: "ok" },
        { label: "Operational Risk Alert", status: "Watch", tone: "warn" },
      ],
    },
  },

  {
    slug: "challan-reconciliation",
    badge: "Iddion RegX CLMS · Challan Reconciliation",
    title: "PF & ESI Challan Reconciliation for Contract Labour",
    description:
      "Automatically match PF and ESI challans against attendance and payroll records, catching the 25–30% discrepancy rate typical of manual contractor billing — before it reaches the statutory deadline or the finance team.",
    subDescription:
      "Automate contract worker attendance, shift management, and leave tracking — biometric verification, real-time headcount, and CLRA 9-day continuous attendance monitoring across all sites. Part of Iddion RegX, InOps' contract labour management system",
      seoTitle: "PF & ESI Challan Reconciliation Software | Iddion RegX",
    seoKeywords: [
      "contractor invoice reconciliation",
      "challan reconciliation software",
      "contractor billing verification",
      "invoice attendance matching",
      "PF ESI challan reconciliation",
    ],

    contentSections: [
      {
        h2: "Invoices vs Gates, Line by Line",
        body: 'Contractor invoices are matched against gate-verified headcount, hours, and approved OT before payment — not after. Three mismatch sources dominate: headcount (workers billed who never presented at the gate), hours (rounded or fabricated shift lengths), and OT (claimed at rates or volumes that never received supervisor approval). Each is structural and repeating, not a one-time error. Discrepancies carry the underlying gate evidence: the specific worker, the specific punch or absence, and the approved versus billed amount — so resolution is a records conversation, not a negotiation. The wage computation side is handled in <a href="/contract-labour-management/iddion-regx-modules/wage-payroll" class="text-blue-600 underline">contract labour payroll software</a>.',
      },
      {
        h2: "PF & ESI Challan Matching",
        body: 'PF and ESI challans — including ECR files — are matched against computed deductions per worker, per cycle. Gaps between what was deducted and what was remitted surface before the statutory deadline, not after. State-wise ESI thresholds and applicable rules are configured per site, so multi-state operations reconcile against the correct parameters for each establishment. The same deduction records feed the registers maintained in <a href="/contract-labour-management/iddion-regx-modules/compliance-report" class="text-blue-600 underline">CLRA compliance reporting</a>.',
      },
      {
        h2: "Principal Employer Liability",
        body: "Under CLRA, contractor defaults on PF and ESI dues can fall back on the principal employer. Matching challans against computed liabilities means you hold independent evidence of what was owed and what was actually remitted — rather than relying on the contractor's assurance. Unresolved variances stay visible against the contractor's record, so a pattern of shortfalls becomes a procurement question at renewal rather than a surprise at audit.",
      },
      {
        h2: "What Finance Gets Back",
        body: "Finance teams report recovering significant time previously spent on manual invoice review and reconciliation — cycle close moves from a weekend exercise to a routine handoff. Discrepancy rates of 25–30% on contractor invoice line items are typical before automated matching is deployed; the rate contracts sharply within the first billing cycles as contractors learn what the gate data will catch. Verified invoices flow to your existing AP or finance system with the reconciliation evidence attached, so approval happens on checked numbers rather than trust.",
      },
    ],

  faq: [
  {
    question: "What exactly gets reconciled?",
    answer:
      "Two streams. Commercially: contractor invoices matched line by line against gate-verified headcount, hours, and approved OT. Statutorily: PF and ESI challans and ECR files matched against per-worker computed deductions. Iddion RegX runs both from the same attendance record, which is why they can't disagree with each other.",
  },
  {
    question: "When are discrepancies caught?",
    answer:
      "Before payment and before the statutory deadline — not in a later audit. Each flag carries its evidence: the worker, the specific punch or absence, and the billed-versus-approved amount, so resolution is a records conversation rather than a negotiation.",
  },
  {
    question: "How large are typical discrepancies?",
    answer:
      "Industry experience puts contractor invoice discrepancy at 25–30% of line items before automated matching. The rate typically falls sharply within the first billing cycles, largely because contractors adjust once they know the gate data is being checked.",
  },
  {
    question: "Does this replace our AP process?",
    answer:
      "No — it feeds it. Verified invoices flow to your existing AP or finance system with the reconciliation evidence attached, so approval happens on checked numbers instead of trust.",
  },
  {
    question: "Why does the principal employer care about a contractor's PF and ESI challans?",
    answer:
      "Because under CLRA, contractor defaults on statutory dues can fall back on the principal employer. Matching challans against computed liabilities means you hold independent evidence of what was owed and what was actually remitted, rather than relying on the contractor's assurance — the same records that feed CLRA compliance software.",
  },
  {
    question: "What happens when a contractor's challan doesn't match?",
    answer:
      "The variance is flagged with its worker-level detail and assigned for resolution with an owner and a deadline. Unresolved variances stay visible against that contractor's record, so a pattern of shortfalls becomes a procurement question at renewal rather than a surprise at audit.",
  },
  {
    question: "Can it handle multiple contractors across states with different thresholds?",
    answer:
      "Yes — state-wise ESI thresholds and applicable rules are configured per site, so multi-state operations reconcile against the correct parameters for each establishment instead of one blanket rule.",
  },
  {
    question: "How does it know what the invoice should say?",
    answer:
      "From the gate, not the contractor. Verified attendance produces headcount and hours; approved OT produces the overtime component; configured rates produce the value. The expected invoice is computed from records that existed before the invoice arrived — which is what makes the comparison meaningful.",
  },
  {
    question: "What does finance actually get back?",
    answer:
      "The hours currently spent matching invoices to musters manually, and a close cycle that runs on exceptions rather than full review. The secondary gain is negotiating position: a contractor discussion backed by per-worker gate evidence ends faster than one backed by a spreadsheet.",
  },
  {
    question: "Is there an audit trail?",
    answer:
      "Every reconciliation run records what was matched, what was flagged, who resolved it, and on what basis. That trail is exportable for internal audit, statutory inspection, or a contractor dispute — which is usually where it earns its keep.",
  },
  {
    question: "What if a contractor disputes a flagged item?",
    answer:
      "The flag opens with its evidence attached, so the dispute is resolved against the underlying gate events rather than by escalation. Where the contractor is right — a valid punch that failed to record, an approval given verbally — the correction is logged with its reason and the invoice is adjusted.",
  },
],

    metrics: [
      "Reduced Audit Risks",
      "Improved Compliance Accuracy",
      "Better Vendor Accountability",
    ],

    challenges: [
      "Missing Contribution Detection",
      "Challan Mismatch Analysis",
      "Vendor-Wise Exception Overload",
      "State-Wise Threshold Complexity",
      "Audit Readiness Pressure",
    ],

    workflow: [
      {
        title: "Challan Upload ",
        description: "Contractors upload PF and ESI challans, ECR files, and supporting records."
      },
      {
        title: "Data Validation",
        description: "System validates employee-wise contributions against statutory records."
      },
      {
        title: "Reconciliation",
        description: "Contributions are matched with attendance, wages, and contractor submissions."
      },
      {
        title: "Exception Resolution",
        description: "Variances are highlighted and assigned for corrective action."
      },
    ],

    features: [
      "PF Validation",
      "ESI Validation",
      "Contribution Matching",
      "Vendor Reconciliation",
      "Compliance Monitoring",
      "Audit Reports",
    ],

    roi: [
      {
        title: "Reduced Audit Risks",
        description:
          "Engine catches statutory gaps before audits surface them.",
      },
      {
        title: "Improved Compliance Accuracy",
        description:
          "Automated matching eliminates manual reconciliation errors across vendors.",
      },
      {
        title: "Better Vendor Accountability",
        description:
          "Mismatch ownership is visible, traceable, and assigned for resolution.",
      },
    ],

    aiInsights: [
      "Identify variances, predict defaults, and prioritize compliance risks automatically.",
      "AI clusters exceptions by likely root cause and resolution priority.",
      "Predictive watchlists show vendors most likely to default in the next compliance cycle.",
    ],

    benefits: [
      "Compliance teams focus on exceptions instead of manual verification across spreadsheets.",
      "Finance sees statutory exposure in rupees, vendors, and compliance periods.",
      "Audit teams receive exportable evidence trails and reconciliation reports on demand.",
    ],

    cta: "Automate statutory compliance verification.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 52 },
        { label: "Tue", value: 68 },
        { label: "Wed", value: 84 },
        { label: "Thu", value: 60 },
        { label: "Fri", value: 88 },
        { label: "Sat", value: 74 },
      ],
      kpis: [
        { label: "AI Queries", value: "1,284" },
        { label: "Actions Automated", value: "346" },
      ],
      feed: [
        { label: "Automated Reports", status: "Ready", tone: "ok" },
        { label: "Compliance Alerts", status: "Active", tone: "ok" },
        { label: "Recommended Actions", status: "Live", tone: "ok" },
      ],
    },
  },

  {
    slug: "gate-compliance",
    badge: "Iddion RegX CLMS · Gate Compliance",
    title: "Gate Pass Management System for Factories",
    description:
      "InOps gate pass management system enforces compliance rules at the point of entry verifying contractor licences, Form V coverage, and headcount limits before a worker crosses the gate, then writing every event to the statutory compliance record in real time. Iddion RegX captures every punch as both an attendance record and a compliance record.",
     subDescription:
      "Automate contract worker attendance, shift management, and leave tracking — biometric verification, real-time headcount, and CLRA 9-day continuous attendance monitoring across all sites. Part of Iddion RegX, InOps' contract labour management system",
      seoTitle: "Gate Pass Management System for Factories | InOps",
    seoDescription:
      "Gate pass management system for industrial sites: contractor licence verification, CLRA headcount enforcement, biometric entry control, and real-time statutory record updates — at every gate, every shift.",
    seoKeywords: [
      "gate pass management system",
      "factory gate compliance software",
      "contractor gate access control India",
      "industrial gate pass software",
      "CLRA gate enforcement",
    ],

    // contentSections: [
    //   {
    //     h2: "Statutory and CLRA rules enforced at the gate",
    //     body: 'The gate is where compliance obligations are created — not the register. InOps evaluates CLRA licence validity, Form V headcount limits, and 9-day continuous attendance status before each worker enters, using the same engine that powers our <a href="/contract-labour-management/modules/compliance-report" class="text-blue-600 underline">CLRA compliance software</a>. A gate event without a compliance check is an unverified record.',
    //   },
    //   {
    //     h2: "How does a gate pass management system work?",
    //     body: "InOps issues digital gate passes tied to a worker's biometric identity, contractor licence, and site assignment. Each pass carries an expiry, a permitted zone, and a shift window. At the gate, the biometric terminal verifies the worker's identity against the pass — not just a badge — before entry is granted. Passes that are expired, outside permitted hours, or for an unlicensed contractor are rejected automatically.",
    //   },
    //   {
    //     h2: "Gate data as the source of compliance records",
    //     body: "Every gate event — entry, exit, zone change, rejection — is written to the CLMS compliance record in real time. This means Form XIII register entries, headcount totals, and attendance logs are current to the last gate punch. There is no manual transfer between the gate log and the statutory register.",
    //   },
    // ],

    faq: [
  {
    question: "What is a gate pass management system?",
    answer:
      "A gate pass management system issues and enforces digital entry authorisations for workers and contractors at industrial sites. Each pass is tied to a biometric identity, a contractor, a permitted zone, and a shift window — so entry isn't a badge check but a verification that this specific worker is currently authorised to be here.",
  },
  {
    question: "What does the system check before letting a worker in?",
    answer:
      "Iddion RegX evaluates four rule families at every entry: statutory (CLRA licence validity, Form V headcount cap, continuous-attendance threshold), safety (induction validity, medical fitness, job-specific certification such as hot work or confined space), shift (permitted hours, zone, and site), and identity (background verification status, blacklist, and duplicate-identity checks). Any failing check is evaluated before the barrier releases.",
  },
  {
    question: "Does a failed check always stop the worker?",
    answer:
      "No — that would be unworkable in a live plant. Rules run in one of three modes: hard block where entry is refused outright, soft warn where entry proceeds with the exception logged for follow-up, and supervisor override where a named authoriser can permit entry with a recorded reason. Sites typically hard-block statutory and safety rules and soft-warn on documentation gaps.",
  },
  {
    question: "Can a blocked worker re-enter under a different contractor?",
    answer:
      "No. Blocks attach to the worker's biometric identity, not to their contractor relationship — so a worker blocked for a safety violation, security incident, or failed verification stays blocked across your sites even if a different contractor submits them next month. This is the gap that paper gate passes and card systems cannot close.",
  },
  {
    question: "What happens when a contractor's licence expires mid-shift cycle?",
    answer:
      "The licence lapse flags immediately in contractor management, and their workers are refused entry at the next shift until it's restored. The alternative — discovering the lapse weeks later — means attendance records already show unlicensed deployment, which is exactly what an inspector looks for.",
  },
  {
    question: "How does it enforce CLRA headcount caps?",
    answer:
      "Deployed headcount per contractor per establishment is tracked live against the licensed cap. As deployment approaches the limit the system warns, and entries that would breach it are refused. Most plants only discover a cap breach when someone counts during an inspection.",
  },
  {
    question: "Does it need turnstiles, or does it work with existing gates?",
    answer:
      "Both. With turnstiles or flap barriers, enforcement is physical — the arm doesn't turn. Without them, the terminal denies and alerts security, which works where a guard controls the gate. Physical enforcement is stronger, but the rules engine is the same either way.",
  },
  {
    question: "What record does a rejection leave?",
    answer:
      "Every denial is logged with the worker, contractor, gate, timestamp, the specific rule that failed, and any override with its authoriser and reason. That rejection trail is often more valuable at audit than the entry log — it demonstrates the control was operating, not just documented.",
  },
  {
    question: "How does this satisfy tender requirements for induction before gate pass issuance?",
    answer:
      "PSU and defence tenders increasingly require that safety induction, medical fitness, and verification are completed before a gate pass is issued. Iddion RegX enforces this as a system rule rather than a process instruction — the pass cannot be issued or used until the prerequisites are recorded, and the evidence is exportable per worker.",
  },
  {
    question: "Does gate data automatically become the compliance record?",
    answer:
      "Yes. Every event — entry, exit, zone change, rejection — writes to the statutory record in real time, so Form XIII entries, headcount totals, and attendance logs are current to the last punch. There's no transfer step between the gate log and the register, which is where most reconciliation errors originate. See CLRA compliance software.",
  },
  {
    question: "What about visitors, drivers, and vehicles?",
    answer:
      "Visitor passes issued through visitor management run on the same lanes and rules engine with their own zone permissions and host approval. Vehicle access is handled separately through barriers and ANPR.",
  },
  {
    question: "How long does it take to deploy at an existing plant?",
    answer:
      "Where biometric terminals and gates already exist, deployment is largely configuration — mapping rules to gates and loading contractor and worker records. Where hardware is being added, timelines follow the gate installation. The longer path is usually agreeing which rules run hard versus soft, which is a policy conversation rather than a technical one.",
  },
  {
    question: "Can safety induction be completed at the gate?",
    answer:
      "Yes. Induction content and assessment can be delivered at a kiosk, with completion written directly to the worker's record — so the induction rule that blocks entry is satisfied by the same system that enforces it. This closes the common gap where induction is documented but not verifiable per worker. See self-service kiosks.",
  },
],

    metrics: [
      "Reduced Unauthorised Entry",
      "Real-Time Compliance Records",
      "Faster Audit Response",
    ],

    challenges: [
      "Unlicensed contractors entering site",
      "Headcount caps exceeded per establishment",
      "Gate logs not linked to statutory registers",
      "Manual gate pass issuance and tracking",
      "No real-time rejection audit trail",
    ],

    workflow: [
      {
        title: "Pass Issuance",
        description: "Digital gate passes are generated from contractor onboarding data — licence, site, permitted zone, and shift window pre-loaded.",
      },
      {
        title: "Biometric Verification at Gate",
        description: "Worker identity is verified against the pass via face recognition or fingerprint terminal before entry is granted.",
      },
      {
        title: "Compliance Check",
        description: "Licence validity, Form V headcount limits, and 9-day attendance status are evaluated in real time before the gate opens.",
      },
      {
        title: "Record Update",
        description: "Each gate event writes to the statutory compliance record, attendance log, and headcount dashboard simultaneously.",
      },
    ],

    features: [
      "Digital Gate Pass Issuance",
      "Biometric Entry Verification",
      "CLRA Headcount Enforcement",
      "Licence Validity Checks",
      "Zone & Shift Access Control",
      "Real-Time Rejection Audit Trail",
    ],

    roi: [
      {
        title: "Reduced Unauthorised Entry",
        description: "Licence checks and headcount caps enforced at the terminal eliminate manual oversight gaps at busy factory gates.",
      },
      {
        title: "Live Statutory Records",
        description: "Gate events write directly to compliance registers — no manual transcription, no month-end reconstruction.",
      },
      {
        title: "Faster Audit Response",
        description: "Gate pass history, entry logs, and rejection records are searchable by worker, contractor, date, or site in under a minute.",
      },
    ],

    aiInsights: [
      "AI flags unusual entry patterns — off-shift access, repeated rejections, and headcount anomalies — before they become compliance events.",
      "Smart alerts surface contractors whose licences will expire before the next pay cycle.",
      "Predictive headcount analysis warns when a contractor is approaching their permitted deployment limit per establishment.",
    ],

    benefits: [
      "Security teams gain a biometric-verified gate log that doubles as a statutory compliance record.",
      "Compliance officers see real-time headcount per contractor per establishment — with alerts before limits are breached.",
      "HR and plant managers get a single audit trail from gate entry to payroll, with no manual linking required.",
    ],

    cta: "Make every gate event a compliance record.",

    dashboard: {
      analytics: [
        { label: "Mon", value: 74 },
        { label: "Tue", value: 58 },
        { label: "Wed", value: 82 },
        { label: "Thu", value: 66 },
        { label: "Fri", value: 90 },
        { label: "Sat", value: 48 },
      ],
      kpis: [
        { label: "Active Gate Passes", value: "3,841" },
        { label: "Entry Rejections Today", value: "12" },
      ],
      feed: [
        { label: "Gate Pass Status", status: "Live", tone: "ok" },
        { label: "Licence Checks", status: "Active", tone: "ok" },
        { label: "Headcount Cap", status: "Near Limit", tone: "warn" },
      ],
    },
  },

  {
    slug: "onboarding-offboarding",
    badge: "Iddion RegX CLMS · Onboarding & Offboarding",
    title: "Contractor Onboarding Software",
    description:
      "InOps digitises the full contractor lifecycle from document collection, BGV, and induction on day one, to structured exits with asset recovery, final settlement, and statutory closure so every entry and departure is compliant, traceable, and audit-ready. Iddion RegX captures every punch as both an attendance record and a compliance record.",
     subDescription:
      "Automate contract worker attendance, shift management, and leave tracking — biometric verification, real-time headcount, and CLRA 9-day continuous attendance monitoring across all sites. Part of Iddion RegX, InOps' contract labour management system",
      seoTitle: "Contractor Onboarding & Offboarding Management | InOps CLMS",
    seoDescription:
      "End-to-end contractor onboarding and offboarding software: digital intake, background verification, induction, gate-pass issuance, structured exit, asset recovery, and final statutory settlement — all in one system.",
    seoKeywords: [
      "contractor onboarding offboarding software",
      "worker lifecycle management India",
      "digital contractor exit process",
      "industrial worker onboarding system",
      "contractor final settlement software",
    ],

    // contentSections: [
    //   {
    //     h2: "From offer to gate pass in hours",
    //     body: "Worker details, Aadhaar, PAN, bank account, and supporting documents are captured digitally — in the worker's language — and processed in parallel. Background verification, medical fitness, and induction can run concurrently so onboarding that previously took days compresses to hours, even for bulk shutdown intake of hundreds of workers.",
    //   },
    //   {
    //     h2: "Gate access locked until every clearance is complete",
    //     body: 'Onboarding status is enforced at the gate: a worker whose BGV is pending, medical check is incomplete, or induction is unfinished is auto-blocked at entry. There is no manual follow-up loop — the gate itself holds the compliance line. This connects directly with our <a href="/contract-labour-management/modules/gate-compliance" class="text-blue-600 underline">gate compliance and auto-blocking module</a>.',
    //   },
    //   {
    //     h2: "Structured exits that close the loop",
    //     body: "Offboarding is as governed as onboarding: gate passes are revoked on the last working day, PPE and asset returns are tracked digitally, outstanding dues are flagged before final settlement is processed, and statutory closure — PF, ESI, gratuity where applicable — is computed from the same attendance and wage records used during employment. No ad-hoc spreadsheet at exit.",
    //   },
    //   {
    //     h2: "Full audit trail from day one to last day",
    //     body: 'Every onboarding action — what was verified, when, by whom, with what result — and every offboarding step — who approved the exit, which assets were returned, when the gate pass was revoked — is stored in the per-worker record. Auditors and compliance officers see a continuous thread, not two separate filing systems. The record feeds both <a href="/contract-labour-management/modules/compliance-report" class="text-blue-600 underline">CLRA registers</a> and contractor payroll settlement automatically.',
    //   },
    // ],

   faq: [
  {
    question: "What does digital onboarding include for contract workers?",
    answer:
      "Digital intake of worker details and documents in the worker's language, Aadhaar-based offline identity verification with consent, PAN and UAN checks, background verification, medical fitness recording, induction scheduling, biometric enrollment, and assignment to contractor, site, shift, and cost centre. Iddion RegX runs the verification steps in parallel rather than sequentially, which is where the time saving comes from.",
  },
  {
    question: "Can a worker be blocked at the gate until onboarding is complete?",
    answer:
      "Yes — incomplete onboarding is a blocking rule. A worker whose verification, medical fitness, or induction is outstanding is refused entry automatically through gate compliance. The gate holds the line rather than an HR follow-up loop, which is the difference between a policy and a control.",
  },
  {
    question: "How is offboarding handled for contract workers?",
    answer:
      "On separation, the gate pass is revoked and biometric access deactivated on the last working day, PPE and asset returns are tracked, outstanding dues are flagged before settlement, and statutory closure is computed from the same attendance and wage records used during employment — not reconstructed in a spreadsheet at exit.",
  },
  {
    question: "Why does offboarding matter as much as onboarding?",
    answer:
      "Because unrevoked access is a live credential. A worker who left eight months ago with an active biometric enrollment can still open a gate and generate an attendance record. This is precisely how fleets accumulate the stale identities a biometric database audit finds — often several times the active headcount.",
  },
  {
    question: "Does the system handle bulk intake for shutdowns?",
    answer:
      "Yes — batch intake is the design case. Hundreds of workers are registered and verified in parallel, with cleared workers activated as results return rather than waiting for the full batch. Shutdown and ramp mobilisation is where sequential paper onboarding fails most visibly.",
  },
  {
    question: "Is offboarding data linked to compliance registers?",
    answer:
      "Yes. Exits update CLRA registers and headcount records automatically, so a contractor's deployed strength reflects reality rather than accumulated departures — which also keeps licence-cap monitoring accurate.",
  },
  {
    question: "What happens to a worker who returns later under a different contractor?",
    answer:
      "Their identity, verification history, induction, and medical records are retained, so re-onboarding is re-attestation rather than starting over. Their previous deployments — including under other contractors — remain visible, which matters when someone was blocked or exited for cause.",
  },
  {
    question: "Who does the data entry — our HR team or the contractor?",
    answer:
      "Contractors submit worker packets through a guided mobile flow with document-quality checks at capture, so unreadable or incomplete submissions are caught at source. Your team reviews exceptions instead of chasing paperwork, which is usually the difference between one HR coordinator and three.",
  },
  {
    question: "What documents does the checklist cover, and can it vary?",
    answer:
      "The checklist adapts by worker category, contractor, plant, and applicable state rules — a hot-work fitter's requirements differ from a housekeeping worker's, and state requirements differ across plants. Both are configured rather than remembered.",
  },
  {
    question: "What audit trail exists across the lifecycle?",
    answer:
      "A continuous per-worker record: what was verified and when, who approved each step, when the gate pass was issued and revoked, which assets were returned, and how final settlement was computed. Auditors see one thread from first document to last payment rather than two filing systems that have to be joined by hand.",
  },
  {
    question: "How is worker consent and personal data handled?",
    answer:
      "Consent is captured digitally at intake in the worker's language before any verification runs or biometric template is created. Identity documents, verification results, and bank details are access-controlled with policy-configurable retention, aligned with DPDP Act obligations.",
  },
  {
    question: "Does final settlement include statutory closure?",
    answer:
      "Final settlement is computed from verified attendance and wage records, with statutory components — PF, ESI, and gratuity where applicable — calculated from the same source rather than re-entered. Finance receives the computed closure without a manual handoff from HR.",
  },
  {
    question: "Can contractor onboarding be done at a kiosk during bulk intake?",
    answer:
      "Yes. During shutdown and ramp mobilisation, an onboarding kiosk at the gate handles document capture, biometric enrolment and work-order assignment for large batches, so intake happens where the workers arrive rather than through the HR office. See self-service kiosks.",
  },
],

    metrics: [
      "80% Faster Onboarding",
      "Zero Compliance Gaps at Exit",
      "Full Lifecycle Auditability",
    ],

    challenges: [
      "Paper-based intake delays deployment",
      "BGV and medical clearance bottlenecks",
      "Gate access issued before compliance is complete",
      "Ad-hoc exit process misses assets and dues",
      "No single audit trail from day one to last day",
    ],

    workflow: [
      {
        title: "Digital Registration",
        description:
          "Worker details, Aadhaar, PAN, bank account, and documents are captured digitally via mobile or web — in batch for bulk intake.",
      },
      {
        title: "Parallel Verification",
        description:
          "BGV, medical fitness, and induction run concurrently. Gate access is blocked until every clearance is green.",
      },
      {
        title: "Activation & Gate Pass",
        description:
          "Cleared workers are assigned to contractor, site, shift, and cost centre. A digital gate pass is issued and biometric identity is enrolled.",
      },
      {
        title: "Structured Exit",
        description:
          "On separation, gate pass is revoked, assets are recovered, dues are flagged, and final settlement with statutory closure is computed and logged.",
      },
    ],

    features: [
      "Digital Intake & Document Collection",
      "Aadhaar, PAN & UAN Verification",
      "Background Verification Integration",
      "Medical Fitness & Induction Tracking",
      "Gate-Pass Issuance & Revocation",
      "Structured Exit & Final Settlement",
    ],

    roi: [
      {
        title: "80% Faster Onboarding",
        description:
          "Parallel digital workflows eliminate sequential paper chasing and reduce deployment lead time from days to hours.",
      },
      {
        title: "Zero Compliance Gaps at Exit",
        description:
          "Structured offboarding ensures gate passes are revoked, assets recovered, and statutory closure completed — every time.",
      },
      {
        title: "Full Lifecycle Auditability",
        description:
          "A continuous per-worker record from first document to last settlement satisfies labour inspector and internal audit requirements without reconstruction.",
      },
    ],

    aiInsights: [
      "AI flags stalled onboarding steps, predicts BGV bottlenecks, and surfaces workers approaching exit without a completed offboarding checklist.",
      "Smart intake adapts the document checklist by worker category, contractor, plant, and applicable state rules.",
      "Automated alerts notify HR before gate passes expire and before statutory filing deadlines following a worker's separation.",
    ],

    benefits: [
      "HR teams deploy verified workers faster with digital parallel workflows replacing paper-based sequential intake.",
      "Compliance officers maintain complete, real-time onboarding and offboarding records for every worker across every site.",
      "Finance and statutory teams receive computed final settlements and closure data without manual handoff from HR.",
    ],

    cta: "Make every entry and exit compliant, traceable, and audit-ready.",

    dashboard: {
      analytics: [
        { label: "Mon", value: 56 },
        { label: "Tue", value: 72 },
        { label: "Wed", value: 88 },
        { label: "Thu", value: 64 },
        { label: "Fri", value: 80 },
        { label: "Sat", value: 48 },
      ],
      kpis: [
        { label: "Active Onboardings", value: "214" },
        { label: "Pending Exits", value: "18" },
      ],
      feed: [
        { label: "BGV Clearances", status: "In Progress", tone: "warn" },
        { label: "Gate Pass Issuance", status: "Live", tone: "ok" },
        { label: "Exit Settlements", status: "3 Pending", tone: "warn" },
      ],
    },
  },
];