import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import { jsonLdScriptProps } from "@/app/lib/jsonLd";
import GlossaryPage from "./GlossaryPage";

export const metadata: Metadata = {
  title: "Contract Labour & Workforce Compliance Glossary (India) | InOps",
  description:
    "Plain-English definitions of Indian contract labour laws, forms, filings and systems: OSH Code, CLRA, ECR, muster roll, gate pass, CLMS and more.",
  alternates: { canonical: "https://inops.tech/glossary" },
};

const BASE = "https://inops.tech";

const definedTermSetJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${BASE}/glossary#termset`,
  name: "Contract Labour and Workforce Compliance Glossary",
  description: "Plain-English definitions of Indian contract labour laws, forms, filings and systems.",
  url: `${BASE}/glossary`,
  inLanguage: "en-IN",
  publisher: { "@type": "Organization", name: "InOps Solutions", url: BASE },
  hasDefinedTerm: [
    { "@type": "DefinedTerm", name: "Annual return", description: "An annual return is the yearly statement an employer files with the labour authorities summarising its workforce, working conditions and statutory compliance. Under the OSH (Central) Rules, 2026 it is a single electronic return for the calendar year, due by the last day of February.", url: `${BASE}/glossary#annual-return`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Appointment letter", description: "An appointment letter is a written document an employer issues to a worker setting out the job, wages and key terms of employment. Under the OSH Code it is a statutory duty in a prescribed format for every employee, including contract workers.", url: `${BASE}/glossary#appointment-letter`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Background verification (BGV)", description: "Background verification (BGV) is the process of confirming a person's identity, address, education, employment history and, where lawful and relevant, criminal record before or soon after they are engaged.", url: `${BASE}/glossary#bgv`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Biometric attendance", description: "Biometric attendance is the recording of when a worker starts and finishes work by verifying a physical trait, such as a fingerprint, face or iris, instead of a card, signature or PIN.", url: `${BASE}/glossary#biometric-attendance`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Buddy punching and ghost workers", description: "Buddy punching is when one worker records attendance for an absent colleague, and a ghost worker is a person who appears on attendance or payroll records but does not actually work at the site.", url: `${BASE}/glossary#buddy-punching-ghost-workers`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "CLMS (Contract Labour Management System)", description: "CLMS stands for Contract Labour Management System: software that manages a site's contract workforce, from contractor onboarding and gate passes to attendance, wage verification and statutory registers.", url: `${BASE}/glossary#clms`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "CLRA (Contract Labour Act, 1970)", description: "The Contract Labour (Regulation and Abolition) Act, 1970 (CLRA) was India's central law regulating contract labour through registration of principal employers, licensing of contractors and statutory registers. It was repealed on 21 November 2025.", url: `${BASE}/glossary#clra`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Code on Wages, 2019", description: "The Code on Wages, 2019 is the Labour Code that governs minimum wages, payment of wages, bonus and equal pay for all employees. It replaced the Minimum Wages Act, the Payment of Wages Act, the Payment of Bonus Act and the Equal Remuneration Act on 21 November 2025.", url: `${BASE}/glossary#code-on-wages`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Contract labour", description: "Contract labour means workers who are hired by or through a contractor to do work for another organisation, the principal employer, rather than being employed by it directly.", url: `${BASE}/glossary#contract-labour`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Contractor invoice reconciliation", description: "Contractor invoice reconciliation is checking a contractor's bill against the verified record of work done, including headcount, attendance, overtime and agreed rates, before paying it.", url: `${BASE}/glossary#contractor-invoice-reconciliation`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Contractor licence", description: "A contractor licence is the permission a contractor needs from the labour authority before deploying contract labour above the legal threshold. Under the OSH Code the threshold is 50 or more contract workers.", url: `${BASE}/glossary#contractor-licence`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "ECR (Electronic Challan cum Return)", description: "ECR (Electronic Challan cum Return) is the monthly online return employers file with EPFO, reporting each member's wages and PF contributions and generating the payment challan in one step.", url: `${BASE}/glossary#ecr`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Earned wage access (EWA)", description: "Earned wage access (EWA) lets a worker draw part of the wages they have already earned in a pay period before the regular payday.", url: `${BASE}/glossary#ewa`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Establishment registration", description: "Establishment registration is the single registration an employer obtains under the OSH Code for a workplace, replacing separate registrations such as those under the Factories Act and the Contract Labour Act.", url: `${BASE}/glossary#establishment-registration`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Face recognition attendance", description: "Face recognition attendance identifies a worker by matching a live image of their face against an enrolled template, using a dedicated reader, a mobile app or a CCTV camera.", url: `${BASE}/glossary#face-recognition-attendance`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Floor wage and minimum wage", description: "A minimum wage is the lowest rate an employer may legally pay for a category of work; a floor wage is the national baseline the Central Government sets, below which no state may fix its minimum wage.", url: `${BASE}/glossary#floor-wage`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Form V", description: "Form V was the certificate a principal employer issued to a contractor under the CLRA Central Rules, 1971. Under the OSH Code, central licence applications use Form XXI on the Shram Suvidha Portal.", url: `${BASE}/glossary#form-v`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Form XIII", description: "Form XIII was the Register of Workmen Employed by Contractor under Rule 75 of the CLRA Central Rules, 1971, kept by the contractor for each establishment.", url: `${BASE}/glossary#form-xiii`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Gate pass", description: "A gate pass is a time-bound authorisation that lets a specific person enter a site, usually issued after identity, document and safety checks.", url: `${BASE}/glossary#gate-pass`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "HRMS (Human Resource Management System)", description: "An HRMS (Human Resource Management System) is software that manages an organisation's own employees: records, attendance and leave, payroll, performance and lifecycle events.", url: `${BASE}/glossary#hrms`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Labour Codes", description: "The Labour Codes are the four laws that replaced 29 central labour laws in India: the Code on Wages, 2019, the Industrial Relations Code, 2020, the Code on Social Security, 2020 and the OSH Code, 2020. They came into force on 21 November 2025.", url: `${BASE}/glossary#labour-codes`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Muster roll", description: "A muster roll is the attendance register that records which workers were present on each working day, used as the basis for wages and inspections.", url: `${BASE}/glossary#muster-roll`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "OSH Code, 2020", description: "The Occupational Safety, Health and Working Conditions Code, 2020 (OSH Code) is the Labour Code covering workplace safety, health, welfare, working hours and contract labour. It came into force on 21 November 2025.", url: `${BASE}/glossary#osh-code`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "PF and ESI", description: "PF (Provident Fund) is a retirement savings scheme run by EPFO to which employer and employee both contribute; ESI (Employees' State Insurance) is a health and cash-benefit insurance scheme run by ESIC.", url: `${BASE}/glossary#pf-and-esi`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Principal employer vs contractor", description: "A principal employer is the owner or occupier of the establishment where contract labour works; a contractor is the person or firm that supplies or engages that labour.", url: `${BASE}/glossary#principal-employer-vs-contractor`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "RD Service (Registered Device Service)", description: "RD Service (Registered Device Service) is UIDAI-specified driver software that lets a certified biometric device capture a fingerprint or iris sample and encrypt and sign it before it is used for Aadhaar authentication.", url: `${BASE}/glossary#rd-service`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Shram Suvidha Portal", description: "The Shram Suvidha Portal is the Ministry of Labour and Employment's online platform for labour-law registration, returns and inspections.", url: `${BASE}/glossary#shram-suvidha-portal`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Turnstile and access control", description: "Access control is the system that decides who may enter which area and when, and a turnstile is the physical barrier at a gate that lets one person through at a time once access is granted.", url: `${BASE}/glossary#turnstile-access-control`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "UAN (Universal Account Number)", description: "A UAN (Universal Account Number) is the 12-digit number EPFO gives each provident fund member, which stays the same across every job they hold.", url: `${BASE}/glossary#uan`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Visitor management", description: "Visitor management is the process and software for registering, approving, badging and tracking people who are not regular workers, such as vendors, auditors, drivers and guests.", url: `${BASE}/glossary#visitor-management`, inDefinedTermSet: `${BASE}/glossary` },
    { "@type": "DefinedTerm", name: "Wages (Labour Codes definition)", description: "Under the Labour Codes, 'wages' has a single definition (Section 2(y) of the Code on Wages, 2019): broadly basic pay, dearness allowance and retaining allowance.", url: `${BASE}/glossary#wages-definition`, inDefinedTermSet: `${BASE}/glossary` },
  ],
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd path="/glossary" />
      <script {...jsonLdScriptProps(definedTermSetJsonLd)} />
      <GlossaryPage />
    </>
  );
}
