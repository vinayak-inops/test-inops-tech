import Link from "next/link";
import { clraComplianceAuditFaqItems } from "@/app/lib/clraComplianceAuditFaqItems";

export default function CLRAComplianceAuditPage() {

  return (
    <main className="bg-[#f4f6f8] font-sans">

      {/* ========== HERO ========== */}
      <section className="relative bg-[#0a1f3d] overflow-hidden pt-[80px] px-[6vw] pb-[100px] min-h-[620px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[60px] max-w-[1240px] mx-auto relative z-[2]">

          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-[10px] text-[10.5px] tracking-[0.18em] uppercase text-white/[0.82] mb-7 font-semibold font-mono">
              <span className="w-[7px] h-[7px] rounded-full bg-[#5de3a5] flex-shrink-0" />
              InOps Services
            </div>
            <h1 className="text-[clamp(32px,3.8vw,50px)] leading-[1.10] font-medium text-white tracking-[-0.02em] m-0">
              CLRA & Labour Code Compliance Audit for Principal Employers
            </h1>
            <p className="mt-[22px] text-[15px] leading-[1.7] text-white/[0.78] max-w-[500px]">
              We review your contractor registers, Form V and Form XIII filings, contractor licence validity, and principal-employer statutory obligations under CLRA — and deliver a scored gap report with a prioritised action plan before your next labour inspection.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 py-[14px] px-6 rounded-lg text-[14.5px] font-bold no-underline border-2 border-white/30 bg-white/[0.18] text-white transition-all duration-150 hover:-translate-y-px hover:opacity-90 hover:bg-white/[0.26]">
                Schedule an Audit
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 py-[14px] px-6 rounded-lg text-[14.5px] font-bold no-underline border-2 border-white/50 bg-transparent text-white transition-all duration-150 hover:-translate-y-px hover:opacity-90 hover:bg-white/[0.08]">
                Talk to an Expert
              </Link>
            </div>
            <div className="flex gap-[10px] mt-10 flex-wrap">
              <span className="text-xs text-white/[0.85] font-medium py-[7px] px-4 border border-white/35 rounded-full">CLRA Compliance Audit</span>
              <span className="text-xs text-white/[0.85] font-medium py-[7px] px-4 border border-white/35 rounded-full">Contract Labour Compliance</span>
              <span className="text-xs text-white/[0.85] font-medium py-[7px] px-4 border border-white/35 rounded-full">Principal Employer Compliance</span>
            </div>
          </div>

          {/* Card */}
          <div className="relative flex justify-center items-center min-h-[580px] mt-12 lg:mt-0">
            <div className="w-full max-w-[540px] bg-white/[0.08] backdrop-blur-xl border border-white/[0.18] rounded-3xl p-9 shadow-[0_30px_60px_rgba(4,20,36,0.35)]">
              <div className="flex items-center justify-between mb-1">
                <div className="w-[34px] h-[34px] rounded-[9px] bg-white/[0.15] flex items-center justify-center">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="flex items-center gap-[6px] text-[11px] font-semibold text-[#baf3d1] bg-[rgba(127,224,176,0.15)] border border-[rgba(127,224,176,0.3)] py-1 px-[10px] rounded-full">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#7fe0b0]" />
                  Live Status
                </div>
              </div>
              <div className="text-[11px] tracking-[0.06em] uppercase text-white/55 mt-4 font-semibold">CLRA Compliance Audit  · Operations Panel</div>
              <div className="text-[26px] font-bold text-white mt-[6px] mb-[26px]">Fleet &amp; Workforce Overview</div>
              <div className="flex items-end gap-3 h-[120px] mb-7 px-[2px]">
                {[45, 65, 50, 80, 60, 90, 55].map((h, i) => (
                  <div key={i} className="w-[18px] flex-shrink-0 bg-gradient-to-b from-white/85 to-white/35 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex flex-col gap-3 mb-2">
                {["CLRA Compliance Audit", "Contractor Documentation Review", "Principal Employer Compliance"].map((label) => (
                  <div key={label} className="flex items-center gap-[10px] text-[13px] text-white font-medium">
                    <span className="w-5 h-5 rounded-full bg-[rgba(127,224,176,0.2)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-[11px] h-[11px]" viewBox="0 0 24 24" fill="none" stroke="#7fe0b0" strokeWidth="3"><path d="M4 12l5 5L20 6" /></svg>
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Float badges */}
            <div className="absolute bg-[#0b2438] text-white rounded-xl py-3 px-4 shadow-[0_20px_40px_rgba(4,20,36,0.4)] text-left" style={{ top: -14, right: -10 }}>
              <div className="text-[20px] font-bold leading-none">100%</div>
              <div className="text-[11px] text-white/60 mt-1">Sites Assessed</div>
            </div>
            <div className="absolute bg-[#0b2438] text-white rounded-xl py-3 px-4 shadow-[0_20px_40px_rgba(4,20,36,0.4)] text-left" style={{ bottom: -18, left: -18 }}>
              <div className="text-[20px] font-bold leading-none">Audit-ready</div>
              <div className="text-[11px] text-white/60 mt-1">Documentation</div>
            </div>
            <div className="absolute bg-[#0b2438] text-white rounded-xl py-3 px-4 shadow-[0_20px_40px_rgba(4,20,36,0.4)] text-left" style={{ bottom: 40, right: -24 }}>
              <div className="text-[20px] font-bold leading-none">Scored</div>
              <div className="text-[11px] text-white/60 mt-1">Risk Report</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROBLEMS ========== */}
      <section className="bg-white pt-[72px] px-[6vw] pb-[90px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[40px] items-end mb-[44px]">
            <div>
              <div className="text-[12px] tracking-[0.08em] uppercase text-[#1c7bb8] font-bold mb-[14px]">The Operational Problem</div>
              <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.25] font-bold text-[#0b1e2d] max-w-[480px]">
                What breaks today, before CLRA Compliance Audit is in place
              </h2>
            </div>
            <p className="text-[14.5px] leading-[1.65] text-[#667588] max-w-[420px]">
              The gaps operations, HR and security teams run into most often across industrial and multi-site environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Manual Compliance Tracking",
                desc: "Contractor obligations tracked across scattered spreadsheets.",
                icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
              },
              {
                title: "Compliance Risk",
                desc: "Statutory gaps go unnoticed until an inspection occurs.",
                icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
              },
              {
                title: "Unclear Ownership",
                desc: "No clarity on principal employer versus contractor obligations.",
                icon: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></>,
              },
              {
                title: "Poor Documentation",
                desc: "Licenses and registers are incomplete or out of date.",
                icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>,
              },
              {
                title: "No Early Warning",
                desc: "Risk is discovered only after a notice is issued.",
                icon: <><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></>,
              },
              {
                title: "Fragmented Oversight",
                desc: "Different sites follow different compliance standards.",
                icon: <><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></>,
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

      {/* ========== HOW IT WORKS ========== */}
      <section className="relative bg-[linear-gradient(135deg,#0d3a5c_0%,#14588c_60%,#1c7bb8_100%)] pt-[72px] px-[6vw] pb-[96px] overflow-hidden">
        <div className="absolute pointer-events-none" style={{ bottom: "-30%", left: "-10%", width: 600, height: 600, background: "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%)" }} />
        <div className="max-w-[1240px] mx-auto relative z-[2]">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[40px] items-end mb-16">
            <div>
              <div className="text-[12px] tracking-[0.08em] uppercase text-[#4fa3d8] font-bold mb-[14px]">How it works</div>
              <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.25] font-bold text-white max-w-[480px]">
                From intake to a cleared, compliant outcome
              </h2>
            </div>
            <p className="text-[14.5px] leading-[1.65] text-white/75 max-w-[380px] md:text-right md:justify-self-end">
              A structured four-step workflow, built to run consistently across every site.
            </p>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-x-0 gap-y-10 items-start">
            <div className="hidden md:block absolute pointer-events-none" style={{ top: 44, left: "12.5%", right: "12.5%", borderTop: "2px dashed rgba(255,255,255,0.28)", zIndex: 1 }} />
            {[
              { n: "01", label: "Assess", desc: "Contractor documentation and statutory obligations are reviewed.", icon: <><path d="M12 16V4M7 9l5-5 5 5" /><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" /></> },
              { n: "02", label: "Score", desc: "Gaps are scored against a structured CLRA risk framework.", icon: <><path d="M4 8V5a1 1 0 0 1 1-1h3M4 16v3a1 1 0 0 0 1 1h3M20 8V5a1 1 0 0 0-1-1h-3M20 16v3a1 1 0 0 1-1 1h-3" /><circle cx="12" cy="12" r="3" /></> },
              { n: "03", label: "Remediate", desc: "Prioritised recommendations close the highest-risk gaps.", icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9.5 15.5l2 2 3.5-4" /></> },
              { n: "04", label: "Certify", desc: "An audit-ready report documents the final compliance posture.", icon: <><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.3 2.3L16 9.5" /></> },
            ].map(({ n, label, desc, icon }, i) => (
              <div key={n} className="relative z-[2] flex flex-col items-center text-center" style={i % 2 === 1 ? { paddingTop: 44 } : {}}>
                <div
                  className="flex items-center justify-center mb-6 relative flex-shrink-0 border-[2.5px] border-white/55 bg-white/[0.10] shadow-[0_8px_24px_rgba(4,20,36,0.25)]"
                  style={{ width: 88, height: 88, borderRadius: "50%" }}
                >
                  <div
                    className="absolute bg-[#5de3a5] text-[#05301e] text-[9px] font-extrabold flex items-center justify-center tracking-[0.02em]"
                    style={{ top: 0, right: 0, width: 22, height: 22, borderRadius: "50%" }}
                  >{n}</div>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b1e2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </div>
                <div className="text-[15px] font-bold text-white mb-2">{label}</div>
                <div className="text-[12.5px] leading-[1.6] text-white/75 max-w-[180px]">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CAPABILITIES ========== */}
      <section className="bg-white pt-[72px] px-[6vw] pb-[96px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[40px] items-end mb-[44px]">
            <div>
              <div className="text-[12px] tracking-[0.08em] uppercase text-[#1c7bb8] font-bold mb-[14px]">Capabilities</div>
              <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.25] font-bold text-[#0b1e2d] max-w-[480px]">Everything the service runs on</h2>
            </div>
            <p className="text-[14.5px] leading-[1.65] text-[#667588] max-w-[380px] md:text-right md:justify-self-end">
              Built as modular capabilities that plug directly into existing onboarding and compliance workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_2fr] gap-5">
            {/* Feature card */}
            <div className="relative rounded-[14px] bg-[linear-gradient(160deg,#1c7bb8_0%,#0d3a5c_120%)] pt-7 px-6 pb-7 flex flex-col justify-between min-h-[320px] overflow-hidden">
              <div className="absolute pointer-events-none" style={{ top: "-20%", right: "-30%", width: 260, height: 260, background: "radial-gradient(circle at center, rgba(255,255,255,0.14), transparent 65%)", zIndex: 1 }} />
              <div className="relative z-[2]">
                <div className="w-10 h-10 rounded-[10px] bg-white/[0.16] border border-white/25 flex items-center justify-center mb-6">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="text-[22px] font-extrabold text-white mb-2">CLRA Compliance Audit</div>
                <div className="text-[13px] leading-[1.6] text-white/75">Structured review against CLRA statutory requirements.</div>
              </div>
              <div className="relative z-[2] mt-[22px] text-[10.5px] tracking-[0.06em] uppercase text-white/55 font-semibold">Core Capability</div>
            </div>

            {/* Capability grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Contractor Documentation Review",
                  desc: "Licenses, registers and records checked for completeness.",
                  icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>,
                },
                {
                  title: "Principal Employer Compliance",
                  desc: "Coverage mapped against principal employer duties.",
                  icon: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></>,
                },
                {
                  title: "Gap Analysis",
                  desc: "Every gap identified, ranked, and explained.",
                  icon: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
                },
                {
                  title: "Risk Scorecard",
                  desc: "A single, comparable score across sites and vendors.",
                  icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
                },
              ].map(({ title, desc, icon }) => (
                <div key={title} className="border border-[#e6eaee] rounded-xl p-6 bg-white transition-all duration-200 hover:shadow-[0_16px_32px_rgba(11,30,45,0.08)] hover:-translate-y-[2px] hover:border-[#d7e2ea]">
                  <div className="w-[34px] h-[34px] rounded-[9px] bg-[rgba(28,123,184,0.08)] flex items-center justify-center mb-4">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#1c7bb8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                  </div>
                  <div className="text-[14.5px] font-bold text-[#0b1e2d] mb-2">{title}</div>
                  <div className="text-[13px] leading-[1.6] text-[#6b7b8c]">{desc}</div>
                </div>
              ))}

              {/* Full-width card */}
              <div className="col-span-full border border-[#e6eaee] rounded-xl p-6 bg-white transition-all duration-200 hover:shadow-[0_16px_32px_rgba(11,30,45,0.08)] hover:-translate-y-[2px] hover:border-[#d7e2ea]">
                <div className="w-[34px] h-[34px] rounded-[9px] bg-[rgba(28,123,184,0.08)] flex items-center justify-center mb-4">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#1c7bb8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <div className="text-[14.5px] font-bold text-[#0b1e2d] mb-2">Labour Law Compliance Report</div>
                <div className="text-[13px] leading-[1.6] text-[#6b7b8c]">Documentation prepared for internal or statutory audits.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUTCOMES ========== */}
      <section className="relative bg-[linear-gradient(120deg,#14588c_0%,#1c7bb8_100%)] pt-16 px-[6vw] pb-[72px] overflow-hidden">
        <div className="absolute pointer-events-none" style={{ top: "-40%", right: "5%", width: 500, height: 500, background: "radial-gradient(circle at center, rgba(255,255,255,0.10), transparent 65%)" }} />
        <div className="max-w-[1240px] mx-auto relative z-[2]">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[40px] items-end mb-[46px]">
            <div>
              <div className="text-[12px] tracking-[0.08em] uppercase text-[#4fa3d8] font-bold mb-[14px]">Business Outcomes</div>
              <h2 className="text-[clamp(22px,3vw,28px)] leading-[1.25] font-bold text-white max-w-[420px]">What changes on the ground</h2>
            </div>
            <p className="text-[13.5px] leading-[1.65] text-white/75 max-w-[340px] md:text-right md:justify-self-end">
              Outcomes reported by enterprises running CLRA Compliance Audit across their industrial and contract workforce operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { val: "100%", label: "Sites Assessed" },
              { val: "30+", label: "Compliance Checkpoints" },
              { val: "Scored", label: "Risk Report" },
              { val: "100%", label: "Audit-ready Docs" },
            ].map(({ val, label }, i) => (
              <div key={label} className={`px-7 ${i === 0 ? "pl-0" : "border-l border-white/[0.22]"}`}>
                <div className="flex items-center gap-[6px] text-[clamp(26px,3vw,34px)] font-extrabold text-white mb-2">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#7fe0b0] flex-shrink-0" />
                  {val}
                </div>
                <div className="text-[12.5px] text-white/75 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES ========== */}
      <section className="bg-white pt-[72px] px-[6vw] pb-[120px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-start mb-[52px]">
            <div>
              <div className="text-[12px] tracking-[0.10em] uppercase text-[#1c7bb8] font-bold mb-4">Industries</div>
              <h2 className="text-[clamp(26px,3vw,34px)] leading-[1.2] font-extrabold text-[#0b1e2d] max-w-[440px]">Built for high-volume industrial operations</h2>
            </div>
            <p className="text-[14px] leading-[1.7] text-[#8696a7] max-w-[320px] md:text-right md:justify-self-end pt-2">
              Deployed across manufacturing, automotive, electronics, logistics and multi-tenant industrial environments.
            </p>
          </div>

          <div className="flex gap-[14px] items-start flex-wrap md:flex-nowrap">
  {[
    { 
      n: "01", 
      title: "Manufacturing", 
      desc: "High-volume plants running multi-shift contract workforces.", 
      icon: <><path d="M2 21h20" /><path d="M4 21V9l6-4v16" /><path d="M14 21V4l6 3v14" /></>, 
      offset: false, 
      route: "/industry/manufacturing" 
    },
    { 
      n: "02", 
      title: "Automotive", 
      desc: "Tier-1 and OEM plants with strict access and safety controls.", 
      icon: <><path d="M5 17h14M5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM19 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /><path d="M5 17V8l3-4h8l3 4v9" /></>, 
      offset: true,
      route: "/industry/automotive" 
    },
    { 
      n: "03", 
      title: "Electronics", 
      desc: "Cleanroom and assembly sites with tight identity controls.", 
      icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /></>, 
      offset: false,
      route: "/industry/electronics" 
    },
    { 
      n: "04", 
      title: "Warehousing", 
      desc: "Distributed logistics hubs with high workforce turnover.", 
      icon: <><path d="M3 7h13v10H3zM16 10h3l2 3v4h-5z" /><circle cx="7.5" cy="18.5" r="1.5" /><circle cx="17.5" cy="18.5" r="1.5" /></>, 
      offset: true,
      route: "/industry/logistics" 
    },
    { 
      n: "05", 
      title: "Engineering", 
      desc: "Project sites with rotating, multi-vendor contractor pools.", 
      icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" /></>, 
      offset: false,
      route: "/industry/manufacturing" 
    },
    { 
      n: "06", 
      title: "Industrial Parks", 
      desc: "Multi-tenant campuses needing shared access governance.", 
      icon: <><path d="M3 21V8l9-5 9 5v13" /><path d="M9 21v-6h6v6" /></>, 
      offset: true,
      route: "/industry/logistics" 
    },
  ].map(({ n, title, desc, offset, route }) => (
    <Link
      key={title}
      href={route}
      className="flex-1 min-w-0 block"
    >
      <div
        className="rounded-[18px] bg-[linear-gradient(175deg,#2a7fc0_0%,#1059a0_40%,#0b3868_100%)] p-[18px] flex flex-col justify-between relative overflow-hidden transition-transform duration-[220ms] hover:-translate-y-1 aspect-square cursor-pointer"
        style={offset ? { marginTop: 60 } : {}}
      >
        <div className="absolute pointer-events-none" style={{ top: "-30%", right: "-20%", width: 220, height: 220, background: "radial-gradient(circle at center, rgba(255,255,255,0.22), transparent 65%)" }} />
        <div className="text-[11px] font-bold text-white/50 relative z-[2] tracking-[0.04em]">{n}</div>
        <div className="relative z-[2]">
          <div className="text-[14px] font-bold text-white mb-[6px] leading-[1.3] group-hover:text-[#5de3a5] transition-colors duration-200">{title}</div>
          <div className="text-[11.5px] leading-[1.55] text-white/[0.68]">{desc}</div>
        </div>
      </div>
    </Link>
  ))}
</div>
        </div>
      </section>

      {/* ========== SHIFT / COMPARISON ========== */}
      <section className="bg-[#f4f6f8] pt-[80px] px-[6vw] pb-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-start mb-[52px]">
            <div>
              <div className="text-[11px] tracking-[0.12em] uppercase text-[#1c7bb8] font-bold mb-[14px]">Why InOps</div>
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold text-[#0b1e2d] max-w-[440px]">The shift from manual to managed</h2>
            </div>
            <p className="text-[14px] leading-[1.7] text-[#8696a7] max-w-[340px] md:text-right md:justify-self-end pt-2">
              A side-by-side view of how CLRA Compliance Audit changes day-to-day operations.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-[70px] items-stretch">
            {/* Before */}
            <div className="bg-white border border-[#e2e8ee] rounded-2xl pt-9 px-9 pb-10">
              <div className="text-[10px] tracking-[0.14em] uppercase font-bold mb-[14px] font-mono text-[#a0b0bf]">Traditional Process</div>
              <div className="text-[22px] font-bold mb-7 leading-[1.2] text-[#0b1e2d]">Manual &amp; Fragmented</div>
              <div className="flex flex-col">
                {[
                  "Compliance tracked in spreadsheets",
                  "Gaps found only at inspection",
                  "Owner unclear between employer & vendor",
                  "Documentation incomplete or stale",
                  "No comparable risk score across sites",
                ].map((item, i) => (
                  <div key={item} className={`flex items-center gap-[14px] py-[14px] text-[14px] font-medium text-[#4a5a6b] ${i > 0 ? "border-t border-[#eef1f4]" : ""}`}>
                    <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 bg-[#f0f2f4] border border-[#dde3e9]">
                      <svg className="w-[10px] h-[10px]" viewBox="0 0 24 24" fill="none" stroke="#9aabb8" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#1c7bb8] items-center justify-center shadow-[0_8px_24px_rgba(28,123,184,0.40)] z-[3]">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </div>

            {/* After */}
            <div className="bg-[#1362a8] rounded-2xl pt-9 px-9 pb-10 shadow-[0_24px_48px_rgba(11,30,45,0.20)]">
              <div className="text-[10px] tracking-[0.14em] uppercase font-bold mb-[14px] font-mono text-white/50">InOps Platform</div>
              <div className="text-[22px] font-bold mb-7 leading-[1.2] text-white">Digital &amp; Managed</div>
              <div className="flex flex-col">
                {[
                  "Structured CLRA Compliance Audit framework",
                  "Gaps surfaced before any inspection",
                  "Obligations mapped and assigned clearly",
                  "Documentation reviewed and refreshed",
                  "Single risk scorecard across all sites",
                ].map((item, i) => (
                  <div key={item} className={`flex items-center gap-[14px] py-[14px] text-[14px] font-medium text-white/90 ${i > 0 ? "border-t border-white/[0.12]" : ""}`}>
                    <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 bg-white/[0.12] border border-white/20">
                      <svg className="w-[10px] h-[10px]" viewBox="0 0 24 24" fill="none" stroke="#5de3a5" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CUSTOMER JOURNEY ========== */}
      <section className="bg-white pt-[80px] px-[6vw] pb-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-start mb-16">
            <div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#1c7bb8] font-bold mb-[14px]">Customer Journey</div>
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold text-[#0b1e2d] max-w-[480px] m-0">How an engagement typically unfolds</h2>
            </div>
            <p className="text-[14px] leading-[1.7] text-[#8696a7] max-w-[340px] md:text-right md:justify-self-end pt-2">
              A consistent path from first assessment to ongoing, supported operations.
            </p>
          </div>
 <div className="relative grid grid-cols-2 md:grid-cols-5 gap-x-0 gap-y-10 items-start">
  {/* connecting line - stops before the 5th step */}
  <div className="hidden md:block absolute pointer-events-none" style={{ 
    top: 32, 
    left: 32, 
    width: "calc(100% - 216px)",
    height: 2, 
    background: "#1c7bb8",
    zIndex: 0 
  }} />
  {[
    { n: "01", title: "Consultation", desc: "Understand your operational requirements and workforce scale." },
    { n: "02", title: "Assessment", desc: "Current-state review of workforce, compliance and infrastructure." },
    { n: "03", title: "Proposal", desc: "A scoped rollout plan aligned to your sites and timelines." },
    { n: "04", title: "Deployment", desc: "Services go live across sites with minimal operational disruption." },
    { n: "05", title: "Ongoing Support", desc: "Continuous monitoring, compliance tracking and dedicated support." },
  ].map(({ n, title, desc }) => (
    <div key={n} className="relative z-[2] flex flex-col items-start pr-6">
      <div className="flex items-center justify-center border-2 border-[#1c7bb8] bg-white text-[14px] font-bold text-[#1c7bb8] mb-[22px] tracking-[0.04em] flex-shrink-0" style={{ width: 64, height: 64, borderRadius: '50%' }}>{n}</div>
      <div className="pr-3">
        <div className="text-[15px] font-bold text-[#0b1e2d] mb-2">{title}</div>
        <div className="text-[13px] leading-[1.6] text-[#6b7b8c]">{desc}</div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
     <section className="bg-white pt-[80px] px-[6vw] pb-[100px] border-t border-[#eef1f4]">
  <div className="max-w-[1240px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-[80px] items-start">

      {/* Left */}
      <div>
        <div className="text-[11px] tracking-[0.14em] uppercase text-[#1c7bb8] font-bold mb-4">FAQ</div>
        <h2 className="text-[clamp(24px,3vw,36px)] font-bold leading-[1.2] text-[#0b1e2d] m-0 mb-4">
          Common questions from operations &amp; compliance teams
        </h2>
        <p className="text-[13.5px] leading-[1.65] text-[#6b7b8c] mb-7">
          Can&apos;t find what you&apos;re looking for? Our enterprise team can walk through CLRA Compliance Audit in the context of your sites.
        </p>
        <div className="bg-[#1362a8] rounded-[14px] pt-7 px-[26px] pb-[26px]">
          <div className="text-[15px] font-bold text-white mb-[10px]">Need a custom compliance review?</div>
          <div className="text-[13px] leading-[1.6] text-white/[0.72] mb-[18px]">
            Our compliance consultants can scope a CLRA Compliance audit plan for your sites.
          </div>
          <Link href="/contact" className="text-[13.5px] font-bold text-white no-underline inline-flex items-center gap-[6px] hover:opacity-85">
            Contact Compliance Team &rarr;
          </Link>
        </div>
      </div>

      {/* Right — accordion */}
      <div className="flex flex-col">
        {clraComplianceAuditFaqItems.map((item, i) => (
          <details key={item.question} className={`group border-b border-[#eef1f4] ${i === 0 ? "border-t" : ""}`}>
            <summary className="w-full cursor-pointer list-none flex items-center justify-between gap-4 py-5 text-[15px] font-semibold text-[#0b1e2d] text-left hover:text-[#1c7bb8] transition-colors duration-150 marker:hidden [&::-webkit-details-marker]:hidden">
              {item.question}
              <span className="text-[22px] font-light text-[#1c7bb8] flex-shrink-0 leading-none transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <div className="text-[13.5px] leading-[1.7] text-[#6b7b8c] pb-5">{item.answer}</div>
          </details>
        ))}

      </div>

    </div>

    {/* Related tags — linked to real internal pages / blog posts */}
    <div className="border-t border-[#eef1f4] mt-12 pt-5 flex items-center gap-3 flex-wrap">
      <span className="text-[10.5px] tracking-[0.10em] uppercase text-[#9aa8b6] font-bold mr-[6px]">Related</span>
      {[
        { label: "Labour Compliance Audit",    href: "/blog/clra-compliance-checklist-india-2026" },
        { label: "Labour Law Compliance",      href: "/contract-labour-management" },
        { label: "Compliance Assessment",      href: "/services" },
        { label: "Factory Labour Compliance",  href: "/blog/camera-attendance-clra-compliance-manufacturing" },
        { label: "Contractor Compliance Audit",href: "/blog/form-v-form-xiii-clra-guide-india" },
      ].map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className="text-[12.5px] text-[#1c7bb8] border border-[#c0d4e8] rounded-full py-[5px] px-[14px] bg-[#eef6fc] hover:bg-[#dbeeff] transition-colors duration-150 no-underline"
        >
          {label}
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* ========== CTA BANNER ========== */}
      <section className="relative bg-[linear-gradient(135deg,#1362a8_0%,#1578c2_50%,#1a8fd1_100%)] pt-[80px] px-[6vw] pb-[90px] text-center overflow-hidden">
        <div className="absolute pointer-events-none" style={{ bottom: "-20%", left: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(255,255,255,0.07), transparent 65%)" }} />
        <div className="max-w-[720px] mx-auto relative z-[2]">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-white/75 font-bold mb-5">
            <span className="w-[7px] h-[7px] rounded-full bg-[#5de3a5] flex-shrink-0" />
            Get Started
          </div>
          <h2 className="text-[clamp(28px,4vw,46px)] font-bold text-white leading-[1.15] m-0 mb-[18px] tracking-[-0.01em]">
            Need CLRA Compliance Audit?
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/[0.72] mb-9">
            Talk to our team about deploying Compliance Health Check across your sites —<br className="hidden md:block" />
            from a single plant to a nationwide rollout.
          </p>
          <div className="flex gap-[14px] justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center py-[14px] px-7 rounded-lg text-[15px] font-bold no-underline bg-white/[0.18] border-2 border-white/30 text-white transition-all duration-150 hover:-translate-y-px hover:opacity-90">
              Schedule Assessment
            </Link>
            <Link href="/contact" className="inline-flex items-center py-[14px] px-7 rounded-lg text-[15px] font-bold no-underline border-2 border-white/55 bg-transparent text-white transition-all duration-150 hover:-translate-y-px hover:opacity-90">
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
