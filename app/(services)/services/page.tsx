import Link from "next/link";

const services = [
  {
    n: "01",
    label: "Background Verification",
    href: "/services/background-verification",
    productLink: { href: "/contract-labour-management/iddion-regx-modules/background-verification", label: "BGV enforcement module in InOps CLMS →" },
    tag: "Identity & Screening",
    desc: "Aadhaar-linked identity, criminal records, employment history, and address checks for contract and industrial workers — verified before they reach your gate.",
    outcomes: ["Ghost employee detection", "Gate-enforced BGV status", "Audit-ready reports"],
    icon: (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 11l1.5 1.5L20 10" />
      </>
    ),
  },
  {
    n: "02",
    label: "Biometric AMC",
    href: "/services/biometric-amc",
    productLink: { href: "/fixed-asset-management", label: "Biometric device fleet & AMC tracking →" },
    tag: "Hardware Lifecycle",
    desc: "SLA-backed biometric AMC across every site — preventive maintenance, remote diagnostics, firmware lifecycle management, and on-site engineer support under one contract.",
    outcomes: ["99.5% fleet uptime SLA", "Pan-India coverage", "24-hr response time"],
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" />
      </>
    ),
  },
  {
    n: "03",
    label: "Biometric Database Audit",
    href: "/services/biometric-database-audit",
    productLink: { href: "/face-recognition-attendance", label: "Face biometric attendance hardware →" },
    tag: "Data Integrity",
    desc: "Ghost employee detection, duplicate biometric cleanup, and payroll leakage prevention — a structured audit of your biometric fleet across all plants and warehouses.",
    outcomes: ["Ghost enrollment detection", "Duplicate template cleanup", "Payroll leakage prevention"],
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.7-4 3-9 3s-9-1.3-9-3" />
        <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
      </>
    ),
  },
  {
    n: "04",
    label: "CLRA Compliance Audit",
    href: "/services/clra-compliance-audit",
    productLink: { href: "/contract-labour-management", label: "InOps CLMS — ongoing CLRA compliance →" },
    tag: "Statutory Compliance",
    desc: "End-to-end CLRA compliance audit covering contractor licence validity, statutory register accuracy, Form V/XIII checks, and principal-employer liability exposure.",
    outcomes: ["Licence & Form V checks", "Register accuracy audit", "Principal-employer liability review"],
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </>
    ),
  },
  {
    n: "05",
    label: "Industrial Manpower Supply",
    href: "/services/industrial-manpower-supply",
    productLink: { href: "/contract-labour-management", label: "InOps CLMS — contractor workforce management →" },
    tag: "Workforce Supply",
    desc: "Verified, trained, and compliance-ready contract workers for manufacturing, logistics, and industrial operations — deployed with full documentation and gate-ready status.",
    outcomes: ["Pre-verified workforce", "Compliance-ready deployment", "Statutory documentation included"],
    icon: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M3.5 19c0-3 2.5-5.4 5.5-5.4s5.5 2.4 5.5 5.4" />
        <circle cx="17" cy="8" r="2.3" />
        <path d="M14.7 13.8c2.6.2 4.8 2.4 4.8 5.2" />
      </>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f4f6f8] font-sans">

      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(125deg, #060f1e 0%, #0a1f3d 40%, #0d2d52 70%, #0e3460 100%)", paddingTop: 80, paddingBottom: 0 }}>

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Glow orbs */}
        <div className="absolute pointer-events-none" style={{ top: "-10%", right: "5%", width: 700, height: 700, background: "radial-gradient(circle at center, rgba(28,123,184,0.28), transparent 60%)" }} />
        <div className="absolute pointer-events-none" style={{ top: "20%", left: "-5%", width: 500, height: 500, background: "radial-gradient(circle at center, rgba(14,52,96,0.6), transparent 65%)" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "0%", right: "25%", width: 400, height: 400, background: "radial-gradient(circle at center, rgba(93,227,165,0.06), transparent 65%)" }} />

        <div className="max-w-[1240px] mx-auto px-[6vw] relative z-[2]">

          {/* Top eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <div className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.20em] uppercase font-bold font-mono text-white/50 border border-white/[0.12] bg-white/[0.04] rounded-full py-[6px] px-4">
              <span className="w-[6px] h-[6px] rounded-full bg-[#5de3a5]" />
              InOps Services
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-start pb-16">

            {/* Left — headline + CTA */}
            <div>
              <h1 className="text-[clamp(36px,4.5vw,62px)] leading-[1.04] font-bold text-white tracking-[-0.03em] m-0">
                Workforce Compliance{" "}<br />
                <span style={{ background: "linear-gradient(90deg, #5de3a5, #4fa3d8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Services
                </span>{" "}
                for Indian Industry
              </h1>
              <p className="mt-6 text-[15.5px] leading-[1.75] text-white/60 max-w-[480px]">
                InOps provides five workforce compliance services for industrial sites in India: worker background verification, biometric device AMC, biometric database audits, CLRA compliance audits and industrial manpower supply. Each is built for multi-site, contractor-heavy plants and can run with the InOps CLMS platform or on its own.
              </p>

              {/* CTA row */}
              <div className="flex gap-3 mt-10 flex-wrap">
                <a
                  href="#all-services"
                  className="inline-flex items-center gap-2 py-[13px] px-6 rounded-lg text-[14px] font-bold no-underline text-[#0a1f3d] transition-all duration-150 hover:-translate-y-px hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#5de3a5,#3dcf8e)" }}
                >
                  View All Services
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 py-[13px] px-6 rounded-lg text-[14px] font-bold no-underline border border-white/20 bg-white/[0.06] text-white transition-all duration-150 hover:-translate-y-px hover:bg-white/[0.10]">
                  Talk to an Expert
                </Link>
              </div>

              {/* Trust strip */}
              <div className="flex items-center gap-6 mt-10 flex-wrap">
                {["CLRA Compliant", "Pan-India Deployment", "Gate-enforced Verification"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-[12px] text-white/50 font-medium">
                    <svg className="w-[13px] h-[13px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#5de3a5" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — service quick-links panel */}
            <div className="hidden lg:flex flex-col gap-2 bg-white/[0.04] border border-white/[0.10] rounded-2xl p-5">
              <div className="text-[10px] tracking-[0.16em] uppercase text-white/35 font-bold mb-3 px-1">All Services</div>
              {services.map((svc, i) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="group flex items-center gap-3 rounded-xl px-3 py-3 no-underline transition-all duration-150 hover:bg-white/[0.07]"
                >
                  <div className="w-8 h-8 rounded-[8px] bg-white/[0.08] border border-white/[0.10] flex items-center justify-center flex-shrink-0">
                    <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {svc.icon}
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-semibold text-white/80 group-hover:text-white transition-colors duration-150 truncate">{svc.label}</div>
                    <div className="text-[11px] text-white/35 font-medium">{svc.tag}</div>
                  </div>
                  <div className="text-[11px] font-bold text-white/25 font-mono flex-shrink-0 group-hover:text-white/50 transition-colors duration-150">{svc.n}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom stat bar — sits on the section edge */}
          <div className="border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4">
            {[
              { val: "5", label: "Compliance Services" },
              { val: "Pan-India", label: "Deployment Coverage" },
              { val: "10+", label: "Industries Served" },
              { val: "End-to-end", label: "Screening to Gate" },
            ].map(({ val, label }, i) => (
              <div key={label} className={`py-7 px-6 ${i > 0 ? "border-l border-white/[0.08]" : ""}`}>
                <div className="text-[clamp(20px,2vw,26px)] font-bold text-white mb-1">{val}</div>
                <div className="text-[11.5px] text-white/40 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section id="all-services" className="bg-white pt-[80px] px-[6vw] pb-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[40px] items-end mb-[52px]">
            <div>
              <div className="text-[12px] tracking-[0.08em] uppercase text-[#1c7bb8] font-bold mb-[14px]">All Services</div>
              <h2 className="text-[clamp(24px,3vw,34px)] leading-[1.2] font-bold text-[#0b1e2d] max-w-[480px]">
                Every service built for industrial workforce compliance
              </h2>
            </div>
            <p className="text-[14.5px] leading-[1.65] text-[#667588] max-w-[380px] md:text-right md:justify-self-end">
              Five specialised services, each deployable independently or as an integrated compliance stack.
            </p>
          </div>

          {/* Row 1 — featured card (2 cols) + one portrait card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">

            {/* Featured card — spans 2 cols */}
            <Link
              href={services[0].href}
              className="group md:col-span-2 relative flex flex-col justify-between rounded-2xl overflow-hidden no-underline min-h-[340px] transition-all duration-200 hover:shadow-[0_24px_56px_rgba(11,30,45,0.18)] hover:-translate-y-[3px]"
              style={{ background: "linear-gradient(140deg,#0d3a5c 0%,#1362a8 55%,#1c7bb8 100%)" }}
            >
              <div className="absolute pointer-events-none" style={{ top: "-20%", right: "-10%", width: 400, height: 400, background: "radial-gradient(circle at center, rgba(255,255,255,0.10), transparent 60%)" }} />
              <div className="absolute pointer-events-none" style={{ bottom: "-15%", left: "-5%", width: 300, height: 300, background: "radial-gradient(circle at center, rgba(93,227,165,0.08), transparent 65%)" }} />

              <div className="relative z-[2] p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <div className="text-[11px] font-extrabold tracking-[0.14em] text-white/40 font-mono">{services[0].n} / 05</div>
                    <div className="w-11 h-11 rounded-[11px] bg-white/[0.14] border border-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{services[0].icon}</svg>
                    </div>
                  </div>
                  <div className="text-[10.5px] tracking-[0.14em] uppercase text-[#5de3a5] font-bold mb-3">{services[0].tag}</div>
                  <div className="text-[24px] font-bold text-white leading-[1.2] mb-4 group-hover:text-[#a8deff] transition-colors duration-150">{services[0].label}</div>
                  <p className="text-[13.5px] leading-[1.7] text-white/70 max-w-[420px] m-0">{services[0].desc}</p>
                  <Link href={services[0].productLink.href} className="inline-block mt-4 text-[12px] font-semibold text-[#5de3a5] hover:text-[#a8deff] transition-colors duration-150 no-underline">
                    {services[0].productLink.label}
                  </Link>
                </div>
                <div className="flex items-end justify-between mt-7">
                  <div className="flex flex-wrap gap-2">
                    {services[0].outcomes.map((o) => (
                      <span key={o} className="text-[11px] font-semibold text-white/80 bg-white/[0.10] border border-white/20 rounded-full py-[4px] px-[11px]">{o}</span>
                    ))}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/[0.14] border border-white/25 flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-200 group-hover:bg-white group-hover:border-white">
                    <svg className="w-4 h-4 text-white group-hover:text-[#1362a8] transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Portrait card — 02 */}
            <Link
              href={services[1].href}
              className="group flex flex-col justify-between border border-[#e6eaee] rounded-2xl bg-white overflow-hidden no-underline transition-all duration-200 hover:shadow-[0_16px_40px_rgba(11,30,45,0.10)] hover:-translate-y-[2px] hover:border-[#c0d4e8] p-7"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-[10px] bg-[rgba(28,123,184,0.08)] flex items-center justify-center">
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#1c7bb8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{services[1].icon}</svg>
                  </div>
                  <div className="text-[11px] font-extrabold tracking-[0.12em] text-[#c8d4de] font-mono">{services[1].n}</div>
                </div>
                <div className="text-[10px] tracking-[0.12em] uppercase text-[#1c7bb8] font-bold mb-2">{services[1].tag}</div>
                <div className="text-[18px] font-bold text-[#0b1e2d] mb-3 group-hover:text-[#1c7bb8] transition-colors duration-150 leading-[1.3]">{services[1].label}</div>
                <p className="text-[13px] leading-[1.65] text-[#7a8c9e] m-0">{services[1].desc}</p>
              </div>
              <div>
                <div className="flex flex-col gap-[6px] my-5">
                  {services[1].outcomes.map((o) => (
                    <div key={o} className="flex items-center gap-2 text-[12px] text-[#4a6070] font-medium">
                      <svg className="w-[10px] h-[10px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#1c7bb8" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                      {o}
                    </div>
                  ))}
                </div>
                <Link href={services[1].productLink.href} className="block mt-1 mb-4 text-[11.5px] font-semibold text-[#1c7bb8] hover:text-[#0f5a96] transition-colors duration-150 no-underline">
                  {services[1].productLink.label}
                </Link>
                <div className="flex items-center justify-between pt-4 border-t border-[#f0f3f6]">
                  <span className="text-[12px] font-semibold text-[#1c7bb8]">View service</span>
                  <svg className="w-4 h-4 text-[#1c7bb8] transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Row 2 — three equal cards (services 03, 04, 05) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.slice(2).map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group flex flex-col justify-between border border-[#e6eaee] rounded-2xl bg-white no-underline transition-all duration-200 hover:shadow-[0_16px_40px_rgba(11,30,45,0.10)] hover:-translate-y-[2px] hover:border-[#c0d4e8] overflow-hidden"
              >
                {/* Top gradient band */}
                <div className="h-[6px] w-full" style={{ background: "linear-gradient(90deg,#1362a8,#1c7bb8)" }} />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-[10px] bg-[rgba(28,123,184,0.08)] flex items-center justify-center">
                      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#1c7bb8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{svc.icon}</svg>
                    </div>
                    <div className="text-[11px] font-extrabold tracking-[0.12em] text-[#c8d4de] font-mono">{svc.n}</div>
                  </div>
                  <div className="text-[10px] tracking-[0.12em] uppercase text-[#1c7bb8] font-bold mb-2">{svc.tag}</div>
                  <div className="text-[17px] font-bold text-[#0b1e2d] mb-3 group-hover:text-[#1c7bb8] transition-colors duration-150 leading-[1.3]">{svc.label}</div>
                  <p className="text-[13px] leading-[1.65] text-[#7a8c9e] m-0 flex-1">{svc.desc}</p>
                  <div className="mt-5 pt-4 border-t border-[#f0f3f6]">
                    <div className="flex flex-col gap-[6px]">
                      {svc.outcomes.map((o) => (
                        <div key={o} className="flex items-center gap-2 text-[12px] text-[#4a6070] font-medium">
                          <svg className="w-[10px] h-[10px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#1c7bb8" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                          {o}
                        </div>
                      ))}
                    </div>
                    <Link
                      href={svc.productLink.href}
                      className="block mt-4 text-[11.5px] font-semibold text-[#8696a7] hover:text-[#1c7bb8] transition-colors duration-150 no-underline"
                    >
                      {svc.productLink.label}
                    </Link>
                    <div className="flex items-center gap-1 mt-3 text-[12px] font-semibold text-[#1c7bb8] group-hover:gap-2 transition-all duration-150">
                      View service
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY INOPS ========== */}
      <section className="bg-[#f4f6f8] pt-[72px] px-[6vw] pb-[96px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-start mb-[52px]">
            <div>
              <div className="text-[12px] tracking-[0.08em] uppercase text-[#1c7bb8] font-bold mb-4">Why InOps</div>
              <h2 className="text-[clamp(24px,3vw,34px)] leading-[1.2] font-bold text-[#0b1e2d] max-w-[440px]">
                Built for the realities of industrial compliance
              </h2>
            </div>
            <p className="text-[14px] leading-[1.7] text-[#8696a7] max-w-[360px] md:text-right md:justify-self-end pt-2">
              Every service is designed to work in multi-site, contractor-heavy, shift-based environments — not retrofitted from corporate HR tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Gate-enforced compliance",
                desc: "Verification status is enforced at the physical gate — not just recorded in a register.",
                icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
              },
              {
                title: "Multi-site by design",
                desc: "One contract, one dashboard, consistent SLAs across every plant and warehouse.",
                icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
              },
              {
                title: "Contractor-workforce ready",
                desc: "All services are built for contract labour environments — not just permanent employees.",
                icon: <><circle cx="9" cy="7" r="3" /><path d="M3.5 19c0-3 2.5-5.4 5.5-5.4s5.5 2.4 5.5 5.4" /><circle cx="17" cy="8" r="2.3" /><path d="M14.7 13.8c2.6.2 4.8 2.4 4.8 5.2" /></>,
              },
              {
                title: "Statutory register accuracy",
                desc: "CLRA registers, Form V, and Form XIII kept current and audit-ready at all times.",
                icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></>,
              },
              {
                title: "Integrated across services",
                desc: "BGV status flows to gate blocking; payroll data feeds challan reconciliation — services talk to each other.",
                icon: <><rect x="2" y="3" width="6" height="6" rx="1" /><rect x="16" y="3" width="6" height="6" rx="1" /><rect x="9" y="15" width="6" height="6" rx="1" /><path d="M5 9v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" /><line x1="12" y1="12" x2="12" y2="15" /></>,
              },
              {
                title: "Fast deployment",
                desc: "On-ground operations begin within days of engagement — not months of implementation cycles.",
                icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
              },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="border border-[#e6eaee] rounded-xl p-[26px_24px] bg-white transition-all duration-200 hover:shadow-[0_16px_32px_rgba(11,30,45,0.08)] hover:-translate-y-[2px] hover:border-[#d7e2ea]">
                <div className="w-[38px] h-[38px] rounded-[9px] bg-[rgba(28,123,184,0.08)] flex items-center justify-center mb-[18px]">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#1c7bb8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </div>
                <div className="text-[15px] font-bold text-[#0b1e2d] mb-2">{title}</div>
                <div className="text-[13.5px] leading-[1.6] text-[#6b7b8c]">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What compliance services does InOps offer for industrial enterprises?", acceptedAnswer: { "@type": "Answer", text: "InOps offers five services: Background Verification (BGV) for contract workers, Biometric AMC for hardware lifecycle management, Biometric Database Audit for ghost-employee detection, CLRA Compliance Audit for statutory register accuracy, and Industrial Manpower Supply of pre-verified contract workers. Each can be deployed independently or as an integrated compliance stack." } },
              { "@type": "Question", name: "Are InOps compliance services available across multiple plant locations?", acceptedAnswer: { "@type": "Answer", text: "Yes. All five services are designed for multi-site, multi-plant deployments under a single contract and SLA. InOps operates across pan-India industrial sites — manufacturing, logistics, FMCG, and construction — with consistent standards at every location." } },
              { "@type": "Question", name: "What is the difference between a CLRA Compliance Audit and the InOps CLMS software?", acceptedAnswer: { "@type": "Answer", text: "A CLRA Compliance Audit is a one-time or periodic professional service — InOps consultants review your contractor registers, Form V/XIII, licence validity, and principal-employer exposure, and deliver a gap report. InOps CLMS (Contract Labour Management System) is the software product that automates ongoing CLRA compliance: live contractor registers, automated challan reconciliation, and gate-enforced statutory checks every day. The audit identifies gaps; the software prevents them from recurring." } },
              { "@type": "Question", name: "How quickly can InOps deploy services for a new site?", acceptedAnswer: { "@type": "Answer", text: "On-ground operations typically begin within days of engagement for service contracts (BGV, manpower supply). Biometric AMC engagements include a fleet survey and scheduling within the first week. Audit engagements are scoped and kicked off within 5–7 business days. Software-integrated deployments (CLMS, HRIS) take 4–6 weeks for a single site." } },
              { "@type": "Question", name: "Does InOps conduct background verification for contract workers, not just permanent employees?", acceptedAnswer: { "@type": "Answer", text: "Yes — contract and casual workers are the primary ICP. InOps BGV covers Aadhaar-linked identity, criminal records, employment history, and address verification specifically for high-turnover contract labour environments. Results are gate-enforced: workers who fail verification are flagged and blocked at the biometric terminal before entering the site." } },
              { "@type": "Question", name: "How do the five services work together as an integrated compliance stack?", acceptedAnswer: { "@type": "Answer", text: "BGV status flows directly into gate-blocking rules managed by InOps CLMS — a worker who fails verification is denied entry. The Biometric Database Audit cleans the enrollment records that attendance and payroll depend on. Biometric AMC keeps the hardware that runs those checks online and SLA-backed. The CLRA Audit validates the statutory registers that CLMS populates automatically. Industrial Manpower Supply delivers workers who arrive already BGV-cleared and documentation-complete. Each service strengthens the others." } },
            ],
          }),
        }}
      />
      <section className="bg-white pt-[72px] px-[6vw] pb-[96px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[40px] items-end mb-[52px]">
            <div>
              <div className="text-[12px] tracking-[0.08em] uppercase text-[#1c7bb8] font-bold mb-[14px]">FAQ</div>
              <h2 className="text-[clamp(24px,3vw,34px)] leading-[1.2] font-bold text-[#0b1e2d] max-w-[480px]">
                Common questions about InOps compliance services
              </h2>
            </div>
            <p className="text-[14.5px] leading-[1.65] text-[#667588] max-w-[380px] md:text-right md:justify-self-end">
              Questions about our services, multi-site deployment, CLRA vs. CLMS, and how the five services work together.
            </p>
          </div>
          <div className="divide-y divide-[#e6eaee] border border-[#e6eaee] rounded-2xl overflow-hidden">
            {[
              {
                q: "What compliance services does InOps offer for industrial enterprises?",
                a: "InOps offers five services: Background Verification (BGV) for contract workers, Biometric AMC for hardware lifecycle management, Biometric Database Audit for ghost-employee detection, CLRA Compliance Audit for statutory register accuracy, and Industrial Manpower Supply of pre-verified contract workers. Each can be deployed independently or as an integrated compliance stack.",
              },
              {
                q: "Are InOps compliance services available across multiple plant locations?",
                a: "Yes. All five services are designed for multi-site, multi-plant deployments under a single contract and SLA. InOps operates across pan-India industrial sites — manufacturing, logistics, FMCG, and construction — with consistent standards at every location.",
              },
              {
                q: "What is the difference between a CLRA Compliance Audit and the InOps CLMS software?",
                a: "A CLRA Compliance Audit is a one-time or periodic professional service — InOps consultants review your contractor registers, Form V/XIII, licence validity, and principal-employer exposure, and deliver a gap report. InOps CLMS is the software product that automates ongoing CLRA compliance: live contractor registers, automated challan reconciliation, and gate-enforced statutory checks every day. The audit identifies gaps; the software prevents them from recurring.",
              },
              {
                q: "How quickly can InOps deploy services for a new site?",
                a: "On-ground operations typically begin within days of engagement for service contracts (BGV, manpower supply). Biometric AMC engagements include a fleet survey and scheduling within the first week. Audit engagements are scoped and kicked off within 5–7 business days. Software-integrated deployments (CLMS, HRIS) take 4–6 weeks for a single site.",
              },
              {
                q: "Does InOps conduct background verification for contract workers, not just permanent employees?",
                a: "Yes — contract and casual workers are the primary ICP. InOps BGV covers Aadhaar-linked identity, criminal records, employment history, and address verification specifically for high-turnover contract labour environments. Results are gate-enforced: workers who fail verification are flagged and blocked at the biometric terminal before entering the site.",
              },
              {
                q: "How do the five services work together as an integrated compliance stack?",
                a: "BGV status flows directly into gate-blocking rules managed by InOps CLMS — a worker who fails verification is denied entry. The Biometric Database Audit cleans the enrollment records that attendance and payroll depend on. Biometric AMC keeps the hardware that runs those checks online and SLA-backed. The CLRA Audit validates the statutory registers that CLMS populates automatically. Industrial Manpower Supply delivers workers who arrive already BGV-cleared and documentation-complete. Each service strengthens the others.",
              },
            ].map(({ q, a }, index) => (
              <details key={q} className="group bg-white px-7 py-5 open:bg-[#f8fafc]">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:hidden">
                  <span className="flex min-w-0 gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[rgba(28,123,184,0.08)] text-[11px] font-bold tabular-nums text-[#1c7bb8]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] font-semibold leading-snug text-[#0b1e2d]">{q}</span>
                  </span>
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e6eaee] bg-white text-lg leading-none text-[#8696a7] transition group-open:rotate-45 group-open:border-[#1c7bb8] group-open:text-[#1c7bb8]" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-4 pl-11 text-[13.5px] leading-[1.7] text-[#667588]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative bg-[linear-gradient(135deg,#1362a8_0%,#1578c2_50%,#1a8fd1_100%)] pt-[80px] px-[6vw] pb-[90px] text-center overflow-hidden">
        <div className="absolute pointer-events-none" style={{ bottom: "-20%", left: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(255,255,255,0.07), transparent 65%)" }} />
        <div className="max-w-[720px] mx-auto relative z-[2]">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-white/75 font-bold mb-5">
            <span className="w-[7px] h-[7px] rounded-full bg-[#5de3a5] flex-shrink-0" />
            Get Started
          </div>
          <h2 className="text-[clamp(28px,4vw,46px)] font-bold text-white leading-[1.15] m-0 mb-[18px] tracking-[-0.01em]">
            Not sure which service fits your operation?
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/[0.72] mb-9">
            Our team will assess your sites, workforce profile, and compliance gaps —<br className="hidden md:block" />
            and recommend the right combination of services.
          </p>
          <div className="flex gap-[14px] justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 py-[14px] px-7 rounded-lg text-[15px] font-bold no-underline bg-white text-[#1362a8] transition-all duration-150 hover:-translate-y-px hover:opacity-90">
              Talk to an Expert
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center py-[14px] px-7 rounded-lg text-[15px] font-bold no-underline border-2 border-white/55 bg-transparent text-white transition-all duration-150 hover:-translate-y-px hover:opacity-90">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
