"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const css = `
:root{
  --paper:#F6F7F9;--surface:#FFFFFF;--ink:#13213C;--ink-2:#4A5872;--rule:#D6DCE5;
  --signal:#F2A900;--signal-ink:#5A3E00;--signal-wash:#FFF4D6;
  --link:#1C5BC4;--ok:#1E6E48;--ok-wash:#E2F2E9;--slate-wash:#E8ECF2;
  --font:"Archivo","Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  box-sizing:border-box;
  padding-top:env(safe-area-inset-top,0px);
  padding-bottom:env(safe-area-inset-bottom,0px);
  color-scheme:light;
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--paper:#0E1626;--surface:#152036;--ink:#E8EDF5;--ink-2:#A8B3C7;--rule:#2A3954;--signal:#F2B42A;--signal-ink:#FFD67A;--signal-wash:#3A2E0E;--link:#86B4FF;--ok:#7FD8AA;--ok-wash:#12382A;--slate-wash:#22304A;color-scheme:dark;}}
:root[data-theme="dark"]{--paper:#0E1626;--surface:#152036;--ink:#E8EDF5;--ink-2:#A8B3C7;--rule:#2A3954;--signal:#F2B42A;--signal-ink:#FFD67A;--signal-wash:#3A2E0E;--link:#86B4FF;--ok:#7FD8AA;--ok-wash:#12382A;--slate-wash:#22304A;color-scheme:dark;}
*,*::before,*::after{box-sizing:inherit}
html{scroll-padding-top:calc(env(safe-area-inset-top,0px) + 72px)}
body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--font);font-size:1rem;line-height:1.6;-webkit-font-smoothing:antialiased}
a{color:var(--link);text-underline-offset:3px}
a:hover{text-decoration-thickness:2px}
:focus-visible{outline:3px solid var(--signal);outline-offset:2px;border-radius:4px}
img{max-width:100%}
.gl-wrap{max-width:1180px;margin:0 auto;padding:0 1.25rem}
.gl-crumbs{font-size:.875rem;color:var(--ink-2);padding:1.25rem 0 0}
.gl-crumbs a{color:var(--ink-2)}
.gl-crumbs span[aria-hidden]{margin:0 .4rem}
.gl-hero{padding:2.25rem 0 2rem;border-bottom:2px solid var(--ink)}
.gl-hero h1{font-stretch:118%;font-weight:780;font-size:clamp(2rem,4.6vw,3.4rem);line-height:1.04;letter-spacing:-.015em;margin:0 0 1rem;max-width:18ch}
.gl-hero p.lede{font-size:1.125rem;color:var(--ink-2);max-width:62ch;margin:0}
.gl-lawnote{margin-top:1.5rem;display:grid;grid-template-columns:auto 1fr;gap:.25rem 1rem;max-width:70ch;border-left:6px solid var(--signal);padding:.25rem 0 .25rem 1rem}
.gl-lawnote b{font-stretch:105%}
.gl-lawnote p{margin:0;grid-column:1 / -1;color:var(--ink-2);font-size:.9375rem}
.gl-meta{margin-top:1rem;font-size:.875rem;color:var(--ink-2);display:flex;flex-wrap:wrap;gap:.25rem 1.5rem}
.gl-controls{display:flex;flex-wrap:wrap;gap:.75rem 1rem;align-items:center;padding:1.25rem 0;border-bottom:1px solid var(--rule)}
.gl-search{flex:1 1 280px;position:relative}
.gl-search input{width:100%;font:inherit;font-size:1rem;padding:.7rem .9rem;border:1.5px solid var(--rule);border-radius:6px;background:var(--surface);color:var(--ink)}
.gl-search input:focus{border-color:var(--ink);outline:none;box-shadow:0 0 0 3px var(--signal-wash)}
.gl-chips{display:flex;flex-wrap:wrap;gap:.4rem}
.gl-chip{font:inherit;font-size:.875rem;padding:.4rem .75rem;border-radius:999px;border:1.5px solid var(--rule);background:transparent;color:var(--ink);cursor:pointer}
.gl-chip[aria-pressed="true"]{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.gl-layout{display:grid;grid-template-columns:64px 1fr;gap:2rem;padding:2rem 0 4rem}
.gl-rail{position:sticky;top:calc(env(safe-area-inset-top,0px) + 16px);align-self:start;display:flex;flex-direction:column;gap:2px}
.gl-rail a,.gl-rail span{display:block;font-stretch:110%;font-weight:700;font-size:.9375rem;text-align:center;padding:.18rem 0;border-radius:0 6px 6px 0;text-decoration:none;border-left:4px solid transparent}
.gl-rail a{color:var(--ink)}
.gl-rail a:hover{background:var(--slate-wash)}
.gl-rail a.on{background:var(--signal);color:#1B1400;border-left-color:var(--ink)}
.gl-rail span{color:var(--rule);font-weight:500}
.gl-letter{margin:0 0 2.75rem}
.gl-letter>h2{font-stretch:125%;font-weight:800;font-size:2.4rem;line-height:1;margin:0 0 .75rem;padding-bottom:.5rem;border-bottom:2px solid var(--ink)}
.gl-term{background:var(--surface);border:1px solid var(--rule);border-radius:8px;padding:1.25rem 1.4rem;margin:0 0 .9rem}
.gl-term:target{border-color:var(--signal);box-shadow:0 0 0 2px var(--signal)}
.gl-term-head{display:flex;flex-wrap:wrap;align-items:baseline;gap:.4rem .75rem}
.gl-term-head h3{margin:0;font-size:1.3rem;font-weight:720;font-stretch:104%;line-height:1.25}
.gl-alias{font-size:.875rem;color:var(--ink-2)}
.gl-status{font-size:.75rem;font-weight:650;padding:.15rem .55rem;border-radius:4px;white-space:nowrap}
.gl-s-legacy{background:var(--signal-wash);color:var(--signal-ink)}
.gl-s-current{background:var(--ok-wash);color:var(--ok)}
.gl-s-industry{background:var(--slate-wash);color:var(--ink-2)}
.gl-answer{font-size:1.0625rem;margin:.7rem 0 .9rem;max-width:72ch}
.gl-term-actions{display:flex;gap:1rem;flex-wrap:wrap;align-items:center}
.gl-more,.gl-copy{font:inherit;font-size:.9375rem;font-weight:600;background:none;border:0;padding:.25rem 0;color:var(--link);cursor:pointer;text-decoration:underline;text-underline-offset:3px}
.gl-copy{color:var(--ink-2);font-weight:500}
.gl-detail{margin-top:1rem;padding-top:1rem;border-top:1px dashed var(--rule);max-width:74ch}
.gl-detail h4{font-size:.9375rem;font-weight:700;margin:1.1rem 0 .35rem}
.gl-detail h4:first-child{margin-top:0}
.gl-detail p{margin:.4rem 0}
.gl-detail ul{margin:.3rem 0;padding-left:1.15rem}
.gl-detail li{margin:.2rem 0}
.gl-empty{padding:2rem;border:1.5px dashed var(--rule);border-radius:8px;color:var(--ink-2)}
.gl-empty button{font:inherit;color:var(--link);background:none;border:0;text-decoration:underline;cursor:pointer;padding:0}
.gl-foot{border-top:2px solid var(--ink);padding:2rem 0 3rem;display:grid;grid-template-columns:1fr auto;gap:1.5rem;align-items:start}
.gl-foot p{margin:0;max-width:62ch;color:var(--ink-2);font-size:.9375rem}
.gl-cta{display:inline-block;background:var(--ink);color:var(--paper);text-decoration:none;font-weight:650;padding:.75rem 1.2rem;border-radius:6px}
@media (max-width:820px){.gl-layout{grid-template-columns:1fr;gap:1rem}.gl-rail{position:sticky;top:0;flex-direction:row;overflow-x:auto;background:var(--paper);padding:.5rem 0;z-index:5;border-bottom:1px solid var(--rule);margin:0 -1.25rem;padding-left:1.25rem;padding-right:1.25rem;top:env(safe-area-inset-top,0px)}.gl-rail a,.gl-rail span{min-width:30px;border-left:0;border-bottom:4px solid transparent;border-radius:6px 6px 0 0}.gl-rail a.on{border-bottom-color:var(--ink)}.gl-foot{grid-template-columns:1fr}.gl-term{padding:1.1rem 1rem}}
@media (prefers-reduced-motion:no-preference){.gl-term:target{transition:box-shadow .3s}}
.gl-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
`;

interface TermData {
  id: string;
  cat: string;
  search: string;
  heading: string;
  alias: string;
  statusClass: string;
  statusLabel: string;
  answer: string;
  detail: React.ReactNode;
}

interface TermProps {
  term: TermData;
  baseUrl: string;
}

function Term({ term, baseUrl }: TermProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const url = `${baseUrl}#${term.id}`;
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => setCopied(true));
  };

  return (
    <article className="gl-term" id={term.id} data-cat={term.cat} data-search={term.search}>
      <div className="gl-term-head">
        <h3>{term.heading}</h3>
        <span className={`gl-status ${term.statusClass}`}>{term.statusLabel}</span>
      </div>
      {term.alias && <div className="gl-alias">{term.alias}</div>}
      <p className="gl-answer">{term.answer}</p>
      <div className="gl-term-actions">
        <button className="gl-more" type="button" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? "Hide full definition" : "Show full definition"}
        </button>
        <button className="gl-copy" type="button" onClick={copyLink}>
          {copied ? "Link copied" : "Copy link"}
        </button>
      </div>
      {open && <div className="gl-detail">{term.detail}</div>}
    </article>
  );
}

const TERMS: TermData[] = [
  {
    id: "annual-return", cat: "parties",
    search: "annual return annual return under the osh code form xvii",
    heading: "Annual return", alias: "Also called: Annual return under the OSH Code, Form XVII",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "An annual return is the yearly statement an employer files with the labour authorities summarising its workforce, working conditions and statutory compliance. Under the OSH (Central) Rules, 2026 it is a single electronic return for the calendar year, due by the last day of February.",
    detail: (<><h4>In plain terms</h4><p>The final Central Rules added a declaration on PF and ESI contributions to the annual return, so headcount, wage records, contractor manpower and PF/ESI data should be reconciled before filing. Contractors also file a half-yearly return.</p><h4>Related on InOps</h4><ul><li><Link href="/services/clra-compliance-audit">CLRA compliance audit</Link></li><li><Link href="/contract-labour-management">Contract labour management</Link></li></ul></>)
  },
  {
    id: "appointment-letter", cat: "parties",
    search: "appointment letter letter of appointment",
    heading: "Appointment letter", alias: "Also called: Letter of appointment",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "An appointment letter is a written document an employer issues to a worker setting out the job, wages and key terms of employment. Under the OSH Code it is a statutory duty in a prescribed format for every employee, including contract workers.",
    detail: (<><h4>In plain terms</h4><p>The final OSH Central Rules removed the three-month transition period that the draft rules had proposed, making appointment letters an immediate compliance item. The prescribed format recognises contractual employment, so principal employers should check that contractors issue letters to the contract workers on their site.</p><h4>Related on InOps</h4><ul><li><Link href="/hris">HR information system</Link></li><li><Link href="/contract-labour-management">Contract labour management</Link></li></ul></>)
  },
  {
    id: "bgv", cat: "systems",
    search: "background verification bgv background check background screening",
    heading: "Background verification (BGV)", alias: "Also called: Background check, Background screening",
    statusClass: "gl-s-industry", statusLabel: "Industry term",
    answer: "Background verification (BGV) is the process of confirming a person's identity, address, education, employment history and, where lawful and relevant, criminal record before or soon after they are engaged. For contract workers it is typically arranged by the contractor or principal employer at onboarding.",
    detail: (<><h4>In plain terms</h4><p>The depth of checks usually depends on the role: identity and address for general labour, more for security-sensitive or high-value areas. BGV collects personal data, so take the worker's informed consent and keep only what the check needs.</p><h4>Related on InOps</h4><ul><li><Link href="/services/background-verification">Background verification</Link></li></ul></>)
  },
  {
    id: "biometric-attendance", cat: "access",
    search: "biometric attendance biometric attendance system fingerprint attendance",
    heading: "Biometric attendance", alias: "Also called: Biometric attendance system, Fingerprint attendance",
    statusClass: "gl-s-industry", statusLabel: "Industry term",
    answer: "Biometric attendance is the recording of when a worker starts and finishes work by verifying a physical trait, such as a fingerprint, face or iris, instead of a card, signature or PIN. Because it ties each punch to a real person, it is widely used as the basis for wage, overtime and contractor-billing calculations.",
    detail: (<><h4>In plain terms</h4><p>Terminals usually match workers against templates stored on the device and sync punches to attendance software. That software produces the muster roll and feeds payroll. Biometric data is personal data under the Digital Personal Data Protection Act, 2023, so collect it with notice and consent.</p><h4>Related on InOps</h4><ul><li><Link href="/biometric-devices">Biometric devices</Link></li><li><Link href="/services/biometric-database-audit">Biometric database audit</Link></li></ul></>)
  },
  {
    id: "buddy-punching-ghost-workers", cat: "systems",
    search: "buddy punching ghost workers proxy attendance",
    heading: "Buddy punching and ghost workers", alias: "Also called: Ghost workers, Proxy attendance",
    statusClass: "gl-s-industry", statusLabel: "Industry term",
    answer: "Buddy punching is when one worker records attendance for an absent colleague, and a ghost worker is a person who appears on attendance or payroll records but does not actually work at the site. Both inflate wage and contractor bills.",
    detail: (<><h4>In plain terms</h4><p>Card, PIN and register-based attendance are easy to share or fill in for someone else. Biometric checks tie each punch to the person physically present. Regular audits of the biometric database also catch duplicate or orphaned enrolments that can hide ghost workers.</p><h4>Related on InOps</h4><ul><li><Link href="/services/biometric-database-audit">Biometric database audit</Link></li><li><Link href="/face-recognition-attendance">Face reader</Link></li></ul></>)
  },
  {
    id: "clms", cat: "systems",
    search: "clms contract labour management system contract labour management software",
    heading: "CLMS (Contract Labour Management System)", alias: "Also called: Contract labour management software",
    statusClass: "gl-s-industry", statusLabel: "Industry term",
    answer: "CLMS stands for Contract Labour Management System: software that manages a site's contract workforce, from contractor onboarding and gate passes to attendance, wage verification and statutory registers. It gives the principal employer a single, auditable record of every contractor and contract worker.",
    detail: (<><h4>In plain terms</h4><p>A CLMS models a three-way relationship between the principal employer, the contractor and the worker. It typically tracks contractor licences and their headcount limits, checks that contractors have paid wages and PF/ESI, and reconciles gate attendance against contractor invoices.</p><h4>Related on InOps</h4><ul><li><Link href="/blog/what-is-contract-labour-management-system">What is a CLMS? Full guide</Link></li><li><Link href="/contract-labour-management">InOps contract labour management</Link></li><li><Link href="/blog/clms-vs-hrms-difference">CLMS vs HRMS</Link></li></ul></>)
  },
  {
    id: "clra", cat: "law",
    search: "clra contract labour act 1970 clra act",
    heading: "CLRA (Contract Labour Act, 1970)", alias: "Also called: CLRA Act",
    statusClass: "gl-s-legacy", statusLabel: "Legacy (repealed)",
    answer: "The Contract Labour (Regulation and Abolition) Act, 1970 (CLRA) was India's central law regulating contract labour through registration of principal employers, licensing of contractors and statutory registers. It was repealed on 21 November 2025.",
    detail: (<><h4>In plain terms</h4><p>For five decades CLRA set the 20-worker threshold and the familiar forms such as Form V and Form XIII. The OSH Code was brought into force on 21 November 2025. Contractor licensing now applies at 50 contract workers instead of 20.</p><h4>Related on InOps</h4><ul><li><Link href="/services/clra-compliance-audit">CLRA compliance audit</Link></li></ul></>)
  },
  {
    id: "code-on-wages", cat: "law",
    search: "code on wages 2019 wage code",
    heading: "Code on Wages, 2019", alias: "Also called: Wage Code, CoW",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "The Code on Wages, 2019 is the Labour Code that governs minimum wages, payment of wages, bonus and equal pay for all employees. It replaced the Minimum Wages Act, 1948, the Payment of Wages Act, 1936, the Payment of Bonus Act, 1965 and the Equal Remuneration Act, 1976 on 21 November 2025.",
    detail: (<><h4>In plain terms</h4><p>Unlike the old Minimum Wages Act, which covered only listed "scheduled employments", the Code extends minimum wage protection to all employees. Its Central Rules prescribe an Employee Register (Form I), a combined register of wages, overtime and deductions (Form IV) and an attendance register-cum-muster roll (Form IX).</p><h4>Related on InOps</h4><ul><li><Link href="/hris">HR information system</Link></li><li><Link href="/contract-labour-management">Contract labour management</Link></li></ul></>)
  },
  {
    id: "contract-labour", cat: "parties",
    search: "contract labour contract workers contract workforce",
    heading: "Contract labour", alias: "Also called: Contract workers, Contract workforce",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "Contract labour means workers who are hired by or through a contractor to do work for another organisation, the principal employer, rather than being employed by it directly. They remain on the contractor's rolls, but the principal employer shares responsibility for their wages, welfare and safety.",
    detail: (<><h4>In plain terms</h4><p>Contract labour is regulated by Chapter XI of the OSH Code. A contractor needs a licence once it employs 50 or more contract workers, and contract labour is generally barred from core activities.</p><h4>Related on InOps</h4><ul><li><Link href="/contract-labour-management">Contract labour management</Link></li></ul></>)
  },
  {
    id: "contractor-invoice-reconciliation", cat: "systems",
    search: "contractor invoice reconciliation contractor bill verification invoice verification",
    heading: "Contractor invoice reconciliation", alias: "Also called: Contractor bill verification, Invoice verification",
    statusClass: "gl-s-industry", statusLabel: "Industry term",
    answer: "Contractor invoice reconciliation is checking a contractor's bill against the verified record of work done, including headcount, attendance, overtime and agreed rates, before paying it. It catches overbilling such as inflated headcount, unapproved overtime and absent workers.",
    detail: (<><h4>In plain terms</h4><p>Done manually from spreadsheets, reconciliation is slow and usually catches only a sample of errors. When attendance, overtime approvals and statutory payment proofs sit in one system, every line of the invoice can be checked before payment is released.</p><h4>Related on InOps</h4><ul><li><Link href="/contract-labour-management">Contract labour management</Link></li></ul></>)
  },
  {
    id: "contractor-licence", cat: "parties",
    search: "contractor licence contract labour licence labour licence",
    heading: "Contractor licence", alias: "Also called: Contract labour licence, Labour licence",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "A contractor licence is the permission a contractor needs from the labour authority before deploying contract labour above the legal threshold. Under the OSH Code the threshold is 50 or more contract workers, and the licence caps how many workers the contractor may employ on any day.",
    detail: (<><h4>In plain terms</h4><p>Application is in Form XXI on the Shram Suvidha Portal. The licence is issued in Form XXII, backed by a bank guarantee of ₹1,000 for each worker covered. Under the old CLRA the threshold was 20 workers.</p><h4>Related on InOps</h4><ul><li><Link href="/blog/factory-gate-entry-rules-contract-workers">Factory gate entry rules for contract workers</Link></li></ul></>)
  },
  {
    id: "ecr", cat: "wages",
    search: "ecr electronic challan cum return pf ecr epfo ecr",
    heading: "ECR (Electronic Challan cum Return)", alias: "Also called: PF ECR, EPFO ECR",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "ECR (Electronic Challan cum Return) is the monthly online return employers file with EPFO, reporting each member's wages and PF contributions and generating the payment challan in one step. It is filed on the EPFO Unified Portal against each employee's UAN.",
    detail: (<><h4>In plain terms</h4><p>Each line of the file carries the member's UAN and name, gross wages, the EPF/EPS/EDLI wage bases, employee and employer contributions, and NCP days. For contract workers, the contractor files ECR under its own establishment code.</p><h4>Related on InOps</h4><ul><li><Link href="/contract-labour-management">Contract labour management</Link></li></ul></>)
  },
  {
    id: "ewa", cat: "systems",
    search: "earned wage access ewa on-demand pay early wage access",
    heading: "Earned wage access (EWA)", alias: "Also called: On-demand pay, Early wage access",
    statusClass: "gl-s-industry", statusLabel: "Industry term",
    answer: "Earned wage access (EWA) lets a worker draw part of the wages they have already earned in a pay period before the regular payday. Access is usually calculated from verified attendance, and the amount drawn is recovered from the next salary payout.",
    detail: (<><h4>In plain terms</h4><p>EWA is limited to wages already earned, which separates it from an open-ended salary advance. For contract workers, linking EWA to biometric attendance means only days actually worked count towards the amount available.</p><h4>Related on InOps</h4><ul><li><Link href="/earned-wage-access">Earned wage access</Link></li></ul></>)
  },
  {
    id: "establishment-registration", cat: "parties",
    search: "establishment registration osh registration registration of establishment",
    heading: "Establishment registration", alias: "Also called: OSH registration, Principal employer registration",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "Establishment registration is the single registration an employer obtains under the OSH Code for a workplace, replacing separate registrations such as those under the Factories Act and the Contract Labour Act. Under the Central Rules it is applied for online in Form I on the Shram Suvidha Portal.",
    detail: (<><h4>In plain terms</h4><p>The certificate is due within seven days of a complete application; if it isn't issued, the establishment is deemed registered. Rule 3(6) requires existing establishments to update their particulars in Form I within six months of 8 May 2026.</p><h4>Related on InOps</h4><ul><li><Link href="/services/clra-compliance-audit">CLRA compliance audit</Link></li></ul></>)
  },
  {
    id: "face-recognition-attendance", cat: "access",
    search: "face recognition attendance face attendance face reader facial recognition attendance",
    heading: "Face recognition attendance", alias: "Also called: Face attendance, Face reader, Facial recognition attendance",
    statusClass: "gl-s-industry", statusLabel: "Industry term",
    answer: "Face recognition attendance identifies a worker by matching a live image of their face against an enrolled template, using a dedicated reader, a mobile app or a CCTV camera. It is contactless and fast at shift change, and many readers check for liveness so a photo or video cannot be used to punch in.",
    detail: (<><h4>In plain terms</h4><p>Face recognition copes well with the worn or dirty fingerprints common on factory floors. Face templates are biometric personal data, so the same notice, consent and retention rules apply as for fingerprints.</p><h4>Related on InOps</h4><ul><li><Link href="/face-recognition-attendance">Face reader</Link></li><li><Link href="/cctv-attendance">CCTV attendance</Link></li></ul></>)
  },
  {
    id: "floor-wage", cat: "wages",
    search: "floor wage minimum wage national floor wage",
    heading: "Floor wage and minimum wage", alias: "Also called: Minimum wage, National floor wage",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "A minimum wage is the lowest rate an employer may legally pay for a category of work; a floor wage is the national baseline the Central Government sets, below which no state may fix its minimum wage. Under the Code on Wages, 2019 minimum wages apply to all employees.",
    detail: (<><h4>In plain terms</h4><p>In practice, pay your state's current notified rate for the worker's skill category and zone. States revise rates regularly, many twice a year through a variable dearness allowance.</p><h4>Related on InOps</h4><ul><li><Link href="/hris">HR information system</Link></li><li><Link href="/contract-labour-management">Contract labour management</Link></li></ul></>)
  },
  {
    id: "form-v", cat: "forms",
    search: "form v form 5 certificate by principal employer",
    heading: "Form V", alias: "Also called: Form 5, Certificate by Principal Employer",
    statusClass: "gl-s-legacy", statusLabel: "Legacy (repealed)",
    answer: "Form V was the certificate a principal employer issued to a contractor under the CLRA Central Rules, 1971. The contractor attached it to its licence application; under the OSH Code, central licence applications use Form XXI on the Shram Suvidha Portal.",
    detail: (<><h4>What replaces it</h4><ul><li><strong>Central rules:</strong> the contractor applies in Form XXI and the licence is issued in Form XXII.</li><li><strong>State rules vary</strong> — check the form your own state currently prescribes.</li></ul><h4>Related on InOps</h4><ul><li><Link href="/blog/form-v-form-xiii-clra-guide-india">Form V and Form XIII guide</Link></li><li><Link href="/contract-labour-management">Contract labour management</Link></li></ul></>)
  },
  {
    id: "form-xiii", cat: "forms",
    search: "form xiii form 13 register of workmen employed by contractor",
    heading: "Form XIII", alias: "Also called: Form 13, Register of Workmen Employed by Contractor",
    statusClass: "gl-s-legacy", statusLabel: "Legacy (repealed)",
    answer: "Form XIII was the Register of Workmen Employed by Contractor under Rule 75 of the CLRA Central Rules, 1971, kept by the contractor for each establishment. It recorded each contract worker's identity, designation, addresses and dates of joining and leaving.",
    detail: (<><h4>What replaces it</h4><p>At central level, the Code on Wages (Central) Rules, 2026 prescribe an Employee Register (Form I), a combined register of wages, overtime and deductions (Form IV) and an attendance register-cum-muster roll (Form IX). Until a state's own rules are final, its old forms continue under savings clauses.</p><h4>Related on InOps</h4><ul><li><Link href="/blog/form-v-form-xiii-clra-guide-india">Form V and Form XIII guide</Link></li><li><Link href="/contract-labour-management">Contract labour management</Link></li></ul></>)
  },
  {
    id: "gate-pass", cat: "access",
    search: "gate pass factory gate pass contractor gate pass",
    heading: "Gate pass", alias: "Also called: Factory gate pass, Contractor gate pass",
    statusClass: "gl-s-industry", statusLabel: "Industry term",
    answer: "A gate pass is a time-bound authorisation that lets a specific person enter a site, usually issued after identity, document and safety checks. In factories it is the point where contract-labour compliance — a valid contractor licence, headcount within the licence limit, induction and PF/ESI enrolment — is enforced before entry.",
    detail: (<><h4>In plain terms</h4><p>A pass is most useful when it is linked to the contractor's licence and each worker's statutory status. Then an expired licence, a headcount above the licence cap or a missing PF/ESI enrolment stops entry at the turnstile, instead of being found at the next audit.</p><h4>Related on InOps</h4><ul><li><Link href="/blog/factory-gate-entry-rules-contract-workers">Factory gate entry rules for contract workers</Link></li><li><Link href="/turnstiles-access">Gate access control</Link></li></ul></>)
  },
  {
    id: "hrms", cat: "systems",
    search: "hrms human resource management system hris human resource information system",
    heading: "HRMS (Human Resource Management System)", alias: "Also called: HRIS, Human Resource Information System",
    statusClass: "gl-s-industry", statusLabel: "Industry term",
    answer: "An HRMS (Human Resource Management System) is software that manages an organisation's own employees: records, attendance and leave, payroll, performance and lifecycle events. Unlike a CLMS, it is built around the employer–employee relationship and usually does not model contractors or contract-labour registers.",
    detail: (<><h4>In plain terms</h4><p>Most manufacturers need both systems: an HRMS for permanent staff and a CLMS for the contract workforce, ideally sharing one attendance and access layer.</p><h4>Related on InOps</h4><ul><li><Link href="/hris">HR information system</Link></li><li><Link href="/blog/clms-vs-hrms-difference">CLMS vs HRMS</Link></li></ul></>)
  },
  {
    id: "labour-codes", cat: "law",
    search: "labour codes new labour codes four labour codes",
    heading: "Labour Codes", alias: "Also called: New Labour Codes, Four Labour Codes",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "The Labour Codes are the four laws that replaced 29 central labour laws in India: the Code on Wages, 2019, the Industrial Relations Code, 2020, the Code on Social Security, 2020 and the Occupational Safety, Health and Working Conditions Code, 2020. They came into force on 21 November 2025.",
    detail: (<><h4>In plain terms</h4><p>Labour is shared between the Centre and the states, so each state notifies its own rules under the Codes. Until a state's rules are final, its old forms and registers continue under the Codes' savings clauses. Core terms now have common definitions across all four Codes.</p><h4>Related on InOps</h4><ul><li><Link href="/services/clra-compliance-audit">CLRA compliance audit</Link></li></ul></>)
  },
  {
    id: "muster-roll", cat: "forms",
    search: "muster roll attendance register attendance register-cum-muster roll",
    heading: "Muster roll", alias: "Also called: Attendance register, Attendance register-cum-muster roll",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "A muster roll is the attendance register that records which workers were present on each working day, used as the basis for wages and inspections. Under the Labour Codes it is maintained as an attendance register-cum-muster roll, which can be kept electronically.",
    detail: (<><h4>In plain terms</h4><p>Under the old CLRA Central Rules the contractor's muster roll was Form XVI. The Code on Wages (Central) Rules, 2026 prescribe an attendance register-cum-muster roll as Form IX. Registers may be kept electronically, provided they can be retrieved, protected and printed for an inspector.</p><h4>Related on InOps</h4><ul><li><Link href="/contract-labour-management">Contract labour management</Link></li><li><Link href="/biometric-devices">Biometric attendance devices</Link></li></ul></>)
  },
  {
    id: "osh-code", cat: "law",
    search: "osh code 2020 occupational safety health and working conditions code",
    heading: "OSH Code, 2020", alias: "Also called: OSHWC Code, Occupational Safety, Health and Working Conditions Code",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "The Occupational Safety, Health and Working Conditions Code, 2020 (OSH Code) is the Labour Code covering workplace safety, health, welfare, working hours and contract labour. It came into force on 21 November 2025, replacing 13 laws including the Factories Act, 1948 and the Contract Labour Act, 1970.",
    detail: (<><h4>In plain terms</h4><p>Its Central Rules were notified on 8 May 2026. For employers the big practical change is consolidation: one electronic registration, one set of registers and one annual return, instead of separate filings under each old law. Contract labour is covered by Chapter XI, Part I of the Code.</p><h4>Related on InOps</h4><ul><li><Link href="/services/clra-compliance-audit">CLRA compliance audit</Link></li></ul></>)
  },
  {
    id: "pf-and-esi", cat: "wages",
    search: "pf and esi provident fund epf employees state insurance esic",
    heading: "PF and ESI", alias: "Also called: Provident Fund, EPF, Employees' State Insurance, ESIC",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "PF (Provident Fund) is a retirement savings scheme run by EPFO to which employer and employee both contribute; ESI (Employees' State Insurance) is a health and cash-benefit insurance scheme run by ESIC for employees earning up to a notified wage ceiling. Both now operate under the Code on Social Security, 2020.",
    detail: (<><h4>For contract workers</h4><p>The contractor registers its workers and pays contributions. Principal employers verify this each month, because unpaid dues on their site become their problem.</p><h4>Related on InOps</h4><ul><li><Link href="/contract-labour-management">Contract labour management</Link></li><li><Link href="/hris">HR information system</Link></li></ul></>)
  },
  {
    id: "principal-employer-vs-contractor", cat: "parties",
    search: "principal employer vs contractor principal employer contractor",
    heading: "Principal employer vs contractor", alias: "Also called: Contractor",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "A principal employer is the owner or occupier of the establishment where contract labour works; a contractor is the person or firm that supplies or engages that labour. The contractor is the direct employer of contract workers, but the principal employer carries legal duties for them.",
    detail: (<><h4>The contractor</h4><ul><li>Needs a licence when it employs 50 or more contract workers (Form XXI on Shram Suvidha Portal).</li><li>The licence (Form XXII) is backed by a bank guarantee of ₹1,000 per worker and caps headcount.</li></ul><h4>The principal employer</h4><ul><li>Responsible for toilets, drinking water, first aid, canteen and crèche where contract labour works.</li><li>If the contractor fails to pay minimum wages, the principal employer must pay and can recover from the contractor.</li></ul><h4>Related on InOps</h4><ul><li><Link href="/contract-labour-management">Contract labour management</Link></li></ul></>)
  },
  {
    id: "rd-service", cat: "access",
    search: "rd service registered device service aadhaar rd service l1 rd service",
    heading: "RD Service (Registered Device Service)", alias: "Also called: Aadhaar RD Service, L1 RD Service",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "RD Service (Registered Device Service) is UIDAI-specified driver software that lets a certified biometric device capture a fingerprint or iris sample and encrypt and sign it before it is used for Aadhaar authentication. UIDAI has phased out L0 fingerprint devices in favour of more secure L1 devices.",
    detail: (<><h4>In plain terms</h4><p>An L0 device encrypts and signs the biometric on the host computer after capture. An L1 device does this inside the device itself. RD Service matters only for Aadhaar authentication — a standalone attendance terminal that matches locally does not use it.</p><h4>Related on InOps</h4><ul><li><Link href="/biometric-devices">Biometric devices</Link></li></ul></>)
  },
  {
    id: "shram-suvidha-portal", cat: "law",
    search: "shram suvidha portal unified shram suvidha portal ussp",
    heading: "Shram Suvidha Portal", alias: "Also called: Unified Shram Suvidha Portal, USSP",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "The Shram Suvidha Portal is the Ministry of Labour and Employment's online platform for labour-law registration, returns and inspections. Under the OSH Code it is where establishments register, contractors apply for licences and employers file returns, each identified by a Labour Identification Number (LIN).",
    detail: (<><h4>In plain terms</h4><p>The portal brings together compliance for the Chief Labour Commissioner, DGMS, ESIC and EPFO. Under the OSH Central Rules, an establishment applies for registration in Form I. Contractors apply for licences in Form XXI.</p><h4>Related on InOps</h4><ul><li><Link href="/services/clra-compliance-audit">CLRA compliance audit</Link></li><li><Link href="/contract-labour-management">Contract labour management</Link></li></ul></>)
  },
  {
    id: "turnstile-access-control", cat: "access",
    search: "turnstile access control access control flap barrier gate access control",
    heading: "Turnstile and access control", alias: "Also called: Access control, Flap barrier, Gate access control",
    statusClass: "gl-s-industry", statusLabel: "Industry term",
    answer: "Access control is the system that decides who may enter which area and when, and a turnstile is the physical barrier at a gate that lets one person through at a time once access is granted. In factories the two are usually linked to biometric readers and the gate pass, so only workers who clear identity and compliance checks can enter.",
    detail: (<><h4>In plain terms</h4><p>Common barrier types include tripod turnstiles, flap and swing barriers, and full-height turnstiles for high-security perimeters. Linking the barrier to the contract-labour record means an expired licence, a headcount above the licence cap or a missing induction blocks entry automatically.</p><h4>Related on InOps</h4><ul><li><Link href="/turnstiles-access">Gate access control</Link></li></ul></>)
  },
  {
    id: "uan", cat: "wages",
    search: "uan universal account number pf uan",
    heading: "UAN (Universal Account Number)", alias: "Also called: PF UAN",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "A UAN (Universal Account Number) is the 12-digit number EPFO gives each provident fund member, which stays the same across every job they hold. Employers report contributions against the UAN in the monthly ECR.",
    detail: (<><h4>In plain terms</h4><p>ECR is UAN-based: an employee without a UAN cannot be included. Contract workers often move between contractors at the same plant — a single UAN keeps their PF in one account instead of several.</p><h4>Related on InOps</h4><ul><li><Link href="/contract-labour-management">Contract labour management</Link></li></ul></>)
  },
  {
    id: "visitor-management", cat: "access",
    search: "visitor management visitor management system vms",
    heading: "Visitor management", alias: "Also called: Visitor management system, VMS",
    statusClass: "gl-s-industry", statusLabel: "Industry term",
    answer: "Visitor management is the process and software for registering, approving, badging and tracking people who are not regular workers, such as vendors, auditors, drivers and guests. It records who visited, whom they met, which areas they entered and when they left.",
    detail: (<><h4>In plain terms</h4><p>In plants, visitor management often includes a safety induction, a photo pass with an expiry time, and host approval before entry. The visitor log also tells security who is on site during an evacuation.</p><h4>Related on InOps</h4><ul><li><Link href="/canteen-and-visitor">Canteen and visitor management</Link></li></ul></>)
  },
  {
    id: "wages-definition", cat: "wages",
    search: "wages labour codes definition definition of wages 50% wage rule section 2(y)",
    heading: "Wages (Labour Codes definition)", alias: "Also called: Definition of wages, 50% wage rule, Section 2(y)",
    statusClass: "gl-s-current", statusLabel: "Current law",
    answer: "Under the Labour Codes, \"wages\" has a single definition (Section 2(y) of the Code on Wages, 2019): broadly basic pay, dearness allowance and retaining allowance. If the excluded items together exceed 50% of total remuneration, the excess is added back and treated as wages.",
    detail: (<><h4>In plain terms</h4><p>The 50% rule caps the exclusions — it does not require basic pay to be exactly 50% of CTC, a common misreading. Because PF, ESI coverage and gratuity are worked out on wages, the definition can change contributions and payouts.</p><h4>Related on InOps</h4><ul><li><Link href="/hris">HR information system</Link></li><li><Link href="/contract-labour-management">Contract labour management</Link></li></ul></>)
  },
];

const LETTERS = ["A","B","C","E","F","G","H","L","M","O","P","R","S","T","U","V","W"];
const INACTIVE = ["D","I","J","K","N","Q","X","Y","Z"];
const ALL_LETTERS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [activeL, setActiveL] = useState("A");

  const filtered = TERMS.filter((t) => {
    const catOk = cat === "all" || t.cat === cat;
    const qOk = !query || t.search.toLowerCase().includes(query.toLowerCase());
    return catOk && qOk;
  });

  const byLetter = (l: string) => filtered.filter((t) => t.id.toUpperCase().startsWith(l));

  const visibleLetters = LETTERS.filter((l) => byLetter(l).length > 0);

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = document.querySelectorAll<HTMLElement>(".gl-letter");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const l = (e.target as HTMLElement).dataset.letter;
            if (l) setActiveL(l);
          }
        });
      },
      { rootMargin: "-10% 0px -80% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [filtered.length]);

  const reset = useCallback(() => {
    setQuery("");
    setCat("all");
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="gl-wrap">
        <nav className="gl-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true"> / </span>
          <Link href="/blog">Resources</Link><span aria-hidden="true"> / </span>
          <span aria-current="page">Glossary</span>
        </nav>

        <header className="gl-hero">
          <h1>Contract Labour &amp; Workforce Compliance Glossary</h1>
          <p className="lede">Plain-English definitions of the laws, forms, filings and systems that Indian plant HR, compliance and security teams deal with every day.</p>
          <div className="gl-lawnote">
            <b>India&apos;s four Labour Codes have been in force since 21 November 2025.</b>
            <p>Terms from the repealed Contract Labour Act, such as Form V and Form XIII, stay here because people still search for them. They are marked Legacy, with what replaces them.</p>
          </div>
          <div className="gl-meta">
            <span>Last reviewed 22 October 2026</span>
            <span>{TERMS.length} terms</span>
          </div>
        </header>

        <div className="gl-controls">
          <div className="gl-search">
            <label htmlFor="gl-q" className="gl-sr">Search the glossary</label>
            <input
              id="gl-q"
              type="search"
              placeholder={`Search ${TERMS.length} terms, e.g. Form XIII, ECR, gate pass`}
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="gl-chips" role="group" aria-label="Filter by topic">
            {[
              { id: "all", label: "All topics" },
              { id: "law", label: "Law and framework" },
              { id: "parties", label: "Parties and licensing" },
              { id: "forms", label: "Registers and forms" },
              { id: "wages", label: "Wages and social security" },
              { id: "access", label: "Identity and access" },
              { id: "systems", label: "Systems" },
            ].map((chip) => (
              <button
                key={chip.id}
                className="gl-chip"
                type="button"
                aria-pressed={cat === chip.id}
                onClick={() => setCat(chip.id)}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        <div className="gl-layout" ref={mainRef}>
          <nav className="gl-rail" aria-label="Jump to letter">
            {ALL_LETTERS.map((l) => {
              const hasTerms = visibleLetters.includes(l);
              if (!hasTerms) return <span key={l} aria-hidden="true">{l}</span>;
              return (
                <a
                  key={l}
                  href={`#gl-letter-${l}`}
                  data-l={l}
                  aria-label={`Terms starting with ${l}`}
                  className={activeL === l ? "on" : ""}
                >
                  {l}
                </a>
              );
            })}
          </nav>

          <main id="gl-list">
            {visibleLetters.map((l) => (
              <section key={l} className="gl-letter" id={`gl-letter-${l}`} data-letter={l} aria-labelledby={`gl-h-${l}`}>
                <h2 id={`gl-h-${l}`}>{l}</h2>
                {byLetter(l).map((term) => (
                  <Term key={term.id} term={term} baseUrl="https://inops.tech/glossary" />
                ))}
              </section>
            ))}

            {filtered.length === 0 && (
              <div className="gl-empty">
                No terms match your search. Try a shorter word, or{" "}
                <button type="button" onClick={reset}>clear the search and filters</button>.
              </div>
            )}
          </main>
        </div>

        <footer className="gl-foot">
          <div>
            <p>These definitions are general information for Indian employers, not legal advice. State rules under the Labour Codes are still being notified, so check the forms your state currently prescribes.</p>
          </div>
          <Link className="gl-cta" href="/contact">Talk to us about contract labour compliance</Link>
        </footer>
      </div>
    </>
  );
}
