import Link from "next/link";
import { biometricAmcFaqItems } from "@/app/lib/biometricAmcFaqItems";
import AmcContactForm from "./AmcContactForm";

export default function BiometricPage() {

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
              Biometric Device AMC Services Across India
            </h1>
            <p className="mt-[22px] text-[15px] leading-[1.7] text-white/[0.78] max-w-[500px]">
              SLA-backed biometric AMC across every site — preventive maintenance, remote monitoring, and on-site engineers under one contract.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 py-[14px] px-6 rounded-lg text-[14.5px] font-bold no-underline border-2 border-white/30 bg-white/[0.18] text-white transition-all duration-150 hover:-translate-y-px hover:opacity-90 hover:bg-white/[0.26]">
                Get an AMC Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 py-[14px] px-6 rounded-lg text-[14.5px] font-bold no-underline border-2 border-white/50 bg-transparent text-white transition-all duration-150 hover:-translate-y-px hover:opacity-90 hover:bg-white/[0.08]">
                Talk to an Expert
              </Link>
            </div>
            <div className="flex gap-[10px] mt-10 flex-wrap">
              <span className="text-xs text-white/[0.85] font-medium py-[7px] px-4 border border-white/35 rounded-full">Biometric AMC Services</span>
              <span className="text-xs text-white/[0.85] font-medium py-[7px] px-4 border border-white/35 rounded-full">RFID Reader AMC</span>
              <span className="text-xs text-white/[0.85] font-medium py-[7px] px-4 border border-white/35 rounded-full">Access Control Maintenance</span>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="relative flex justify-center items-center min-h-[580px] mt-12 lg:mt-0">
            <AmcContactForm />

            {/* Float badges */}
            <div className="absolute bg-[#0b2438] text-white rounded-xl py-3 px-4 shadow-[0_20px_40px_rgba(4,20,36,0.4)] text-left" style={{ top: -14, right: -10 }}>
              <div className="text-[20px] font-bold leading-none">99.5%</div>
              <div className="text-[11px] text-white/60 mt-1">Uptime SLA</div>
            </div>
            <div className="absolute bg-[#0b2438] text-white rounded-xl py-3 px-4 shadow-[0_20px_40px_rgba(4,20,36,0.4)] text-left" style={{ bottom: -18, left: -18 }}>
              <div className="text-[20px] font-bold leading-none">Pan-India</div>
              <div className="text-[11px] text-white/60 mt-1">Coverage</div>
            </div>
            <div className="absolute bg-[#0b2438] text-white rounded-xl py-3 px-4 shadow-[0_20px_40px_rgba(4,20,36,0.4)] text-left" style={{ bottom: 40, right: -24 }}>
              <div className="text-[20px] font-bold leading-none">24 hrs</div>
              <div className="text-[11px] text-white/60 mt-1">Response Time</div>
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
                What breaks today, before AMC is in place
              </h2>
            </div>
            <p className="text-[14.5px] leading-[1.65] text-[#667588] max-w-[420px]">
              The gaps operations, HR and security teams run into most often across industrial and multi-site environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Device Downtime",
                desc: "Faulty scanners and readers stall attendance and access at the gate.",
                icon: <><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></>,
              },
              {
                title: "No Central Visibility",
                desc: "Device health across sites is invisible until something fails.",
                icon: <><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" /><circle cx="12" cy="12" r="3" /><line x1="3" y1="21" x2="21" y2="3" /></>,
              },
              {
                title: "Reactive Repairs",
                desc: "Maintenance only happens after a breakdown disrupts operations.",
                icon: <><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-3.51" /></>,
              },
              {
                title: "Fragmented Vendors",
                desc: "Different AMC vendors per site with no unified SLA.",
                icon: <><rect x="2" y="3" width="6" height="6" rx="1" /><rect x="16" y="3" width="6" height="6" rx="1" /><rect x="9" y="15" width="6" height="6" rx="1" /><path d="M5 9v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" /><line x1="12" y1="12" x2="12" y2="15" /></>,
              },
              {
                title: "Firmware Drift",
                desc: "Ageing firmware leaves devices insecure and unsupported.",
                icon: <><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></>,
              },
              {
                title: "Unplanned Costs",
                desc: "Emergency repairs cost more than planned lifecycle management.",
                icon: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
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
              { n: "01", label: "Onboard", desc: "Device fleet is mapped and registered across every site.", icon: <><path d="M12 16V4M7 9l5-5 5 5" /><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" /></> },
              { n: "02", label: "Monitor", desc: "Remote diagnostics track device health continuously.", icon: <><path d="M4 8V5a1 1 0 0 1 1-1h3M4 16v3a1 1 0 0 0 1 1h3M20 8V5a1 1 0 0 0-1-1h-3M20 16v3a1 1 0 0 1-1 1h-3" /><circle cx="12" cy="12" r="3" /></> },
              { n: "03", label: "Maintain", desc: "Preventive and corrective visits run against SLA schedules.", icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9.5 15.5l2 2 3.5-4" /></> },
              { n: "04", label: "Report", desc: "Site-wise uptime and service history is reported monthly.", icon: <><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.3 2.3L16 9.5" /></> },
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
            {/* <div>
              <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.25] font-bold text-[#0b1e2d] max-w-[480px]">Everything the service runs on</h2>
              <div className="text-[12px] tracking-[0.08em] uppercase text-[#1c7bb8] font-bold mb-[14px]">What do biometric AMC services cover?</div>
            </div> */}

            <div>
  <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.25] font-bold text-[#0b1e2d] max-w-[480px]">
    What do biometric AMC services cover?
  </h2>
  <div className="mt-2 text-[12px] tracking-[0.08em] uppercase text-[#1c7bb8] font-bold">
    Everything the service runs on
  </div>
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
                    <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" />
                  </svg>
                </div>
                <div className="text-[22px] font-extrabold text-white mb-2">Preventive &amp; Corrective Maintenance</div>
                <div className="text-[13px] leading-[1.6] text-white/75">Biometric AMC covers preventive and corrective maintenance, remote device-health monitoring, firmware lifecycle management, and on-site engineer support for biometric terminals, RFID readers, and turnstiles — under one contract and one SLA across every site.</div>
              </div>
              <div className="relative z-[2] mt-[22px] text-[10.5px] tracking-[0.06em] uppercase text-white/55 font-semibold">Core Capability</div>
            </div>

            {/* Capability grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Remote Diagnostics",
                  desc: "Device health monitored centrally before failures occur.",
                  icon: <><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></>,
                 route: "/industry/manufacturing"
                },
                {
                  title: "On-site Engineer Support",
                  desc: "Field engineers dispatched against defined SLA windows.",
                  icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /><path d="M16 11l1.5 1.5L20 10" /></>,
                  route: "/industry/automotive"
                },
                {
                  title: "Biometric Device Maintenance",
                  desc: "Devices kept current, secure and vendor-supported.",
                  icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" /></>,
                  route: "/industry/electronics"
                },
                {
                  title: "Device Health Monitoring",
                  desc: "Live fleet dashboard across every registered site.",
                  icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>,
                  route: "/industry/logistics"
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="text-[14.5px] font-bold text-[#0b1e2d] mb-2">Access Control Maintenance</div>
                <div className="text-[13px] leading-[1.6] text-[#6b7b8c]">One contract, one SLA, across every plant and warehouse.</div>
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
              Outcomes reported by enterprises running AMC across their industrial and contract workforce operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { val: "99.5%", label: "Fleet Uptime" },
              { val: "24 hrs", label: "SLA Response" },
              { val: "100%", label: "Sites Monitored" },
              { val: "40%", label: "Fewer Breakdowns" },
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
          title: "Manufacturing",
          desc: "High-volume gate control across shift-based factory workforces.",
          icon: <><path d="M2 21h20" /><path d="M4 21V9l6-4v16" /><path d="M14 21V4l6 3v14" /></>,
          offset: false,
          route: "/industry/manufacturing"
        },
        {
          title: "Automotive",
          desc: "Tier-1 and 2 plant access aligned to OEM standards.",
          icon: <><path d="M5 17h14M5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM19 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /><path d="M5 17V8l3-4h8l3 4v9" /></>,
          offset: true,
          route: "/industry/automotive"
        },
        {
          title: "Electronics",
          desc: "Cleanroom and assembly sites with tight identity checks.",
          icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /></>,
          offset: false,
          route: "/industry/electronics"
        },
        {
          title: "Warehousing",
          desc: "Contractor and shift-worker rotation verified in real time.",
          icon: <><path d="M3 7h13v10H3zM16 10h3l2 3v4h-5z" /><circle cx="7.5" cy="18.5" r="1.5" /><circle cx="17.5" cy="18.5" r="1.5" /></>,
          offset: true,
          route: "/industry/logistics"
        },
        {
          title: "Engineering",
          desc: "Project-site staffing verified before contractor mobilisation.",
          icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" /></>,
          offset: false,
          route: "/industry/manufacturing"
        },
        {
          title: "Industrial Parks",
          desc: "Multi-tenant campus access managed under one gate policy.",
          icon: <><path d="M3 21V8l9-5 9 5v13" /><path d="M9 21v-6h6v6" /></>,
          offset: true,
          route: "/industry/logistics"
        },
      ].map(({ title, desc, icon, offset, route }) => (
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
            <div className="w-9 h-9 rounded-[10px] bg-white/[0.18] border border-white/30 flex items-center justify-center relative z-[2] flex-shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
            </div>
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
              A side-by-side view of how AMC changes day-to-day operations.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-[70px] items-stretch">
            {/* Before */}
            <div className="bg-white border border-[#e2e8ee] rounded-2xl pt-9 px-9 pb-10">
              <div className="text-[10px] tracking-[0.14em] uppercase font-bold mb-[14px] font-mono text-[#a0b0bf]">Traditional Process</div>
              <div className="text-[22px] font-bold mb-7 leading-[1.2] text-[#0b1e2d]">Manual &amp; Fragmented</div>
              <div className="flex flex-col">
                {[
                  "Break-fix, reactive vendor calls",
                  "No visibility into device health",
                  "Separate AMC per site or region",
                  "Firmware left unmanaged",
                  "Costs spike during failures",
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
                  "Scheduled preventive maintenance",
                  "Live fleet health dashboard",
                  "One SLA across every site",
                  "Managed firmware lifecycle",
                  "Predictable, planned service costs",
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
                Can&apos;t find what you&apos;re looking for? Our enterprise team can walk through AMC in the context of your sites.
              </p>
              <div className="bg-[#1362a8] rounded-[14px] pt-7 px-[26px] pb-[26px]">
                <div className="text-[15px] font-bold text-white mb-[10px]">Need AMC coverage across sites?</div>
                <div className="text-[13px] leading-[1.6] text-white/[0.72] mb-[18px]">
                  Our hardware engineering team can scope a biometric AMC plan across your plants and warehouses.
                </div>
                <Link href="/contact" className="text-[13.5px] font-bold text-white no-underline inline-flex items-center gap-[6px] hover:opacity-85">
                  Contact Support &rarr;
                </Link>
              </div>
            </div>

            {/* Right — accordion */}
            <div className="flex flex-col">
              {biometricAmcFaqItems.map((item, i) => (
                <details key={item.question} className={`group border-b border-[#eef1f4] ${i === 0 ? "border-t" : ""}`}>
                  <summary className="w-full cursor-pointer list-none flex items-center justify-between gap-4 py-5 text-[15px] font-semibold text-[#0b1e2d] text-left hover:text-[#1c7bb8] transition-colors duration-150 marker:hidden [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span className="text-[22px] font-light text-[#1c7bb8] flex-shrink-0 leading-none transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <div className="text-[13.5px] leading-[1.7] text-[#6b7b8c] pb-5">
                    {item.answer}
                  </div>
                </details>
              ))}

            </div>

          </div>

          {/* Related tags */}
          <div className="border-t border-[#eef1f4] mt-12 pt-5 flex items-center gap-3 flex-wrap">
            <span className="text-[10.5px] tracking-[0.10em] uppercase text-[#9aa8b6] font-bold mr-[6px]">Related</span>
            {["Biometric Maintenance", "Attendance Machine AMC", "Biometric Device Maintenance", "Biometric Service Provider", "Device Health Monitoring","Face Reader Device"].map((tag) => (
              <span key={tag} className="text-[12.5px] text-[#4a5766] border border-[#d8e0e8] rounded-full py-[5px] px-[14px] bg-[#f0f2f4]">{tag}</span>
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
            Need Enterprise Biometric AMC Services?
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/[0.72] mb-9">
            Talk to our team about deploying Managed Hardware Services across your sites —<br className="hidden md:block" />
            from a single plant to a nationwide rollout.
          </p>
          <div className="flex gap-[14px] justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center py-[14px] px-7 rounded-lg text-[15px] font-bold no-underline bg-white/[0.18] border-2 border-white/30 text-white transition-all duration-150 hover:-translate-y-px hover:opacity-90">
              Explore AMC Plans
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
