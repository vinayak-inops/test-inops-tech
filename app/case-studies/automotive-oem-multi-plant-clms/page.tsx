import Link from "next/link";

export default function AutomotiveOemCaseStudy() {
  return (
    <div
        className="bg-[#F8FAFB] text-[#16222E] antialiased"
        style={{ paddingTop: "var(--home-nav-offset,4.5rem)" }}
      >
        <main>
          {/* ── Hero ──────────────────────────────────────────────────── */}
          <section className="bg-white border-b border-[#D6DEE5]">
            <div className="max-w-[1180px] mx-auto px-6 pt-8 pb-0">
              <ol className="flex gap-2 text-sm text-[#425263] mb-6 list-none p-0" aria-label="Breadcrumb">
                <li><Link href="/" className="text-[#425263] hover:underline">Home</Link></li>
                <li className="before:content-['/'] before:mr-2 before:text-[#D6DEE5]">
                  <Link href="/case-studies" className="text-[#425263] hover:underline">Case studies</Link>
                </li>
                <li className="before:content-['/'] before:mr-2 before:text-[#D6DEE5]" aria-current="page">
                  Automotive OEM
                </li>
              </ol>

              <div className="grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-12 pb-0 max-[860px]:grid-cols-1 max-[860px]:gap-6">
                <div className="pb-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#DCEBF2] text-[#0E5A78]">Automotive OEM</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#DCEBF2] text-[#0E5A78]">Iddion RegX CLMS</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#DCEBF2] text-[#0E5A78]">Face readers</span>
                  </div>
                  <h1 className="font-bold text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] tracking-[-0.02em] mb-4 font-sans max-w-[22ch]">
                    How a Leading Automotive OEM Brought Visibility &amp; Control to Its Contract Workforce
                  </h1>
                  <p className="text-[1.1rem] text-[#425263] max-w-[56ch] mb-6">
                    Paper registers and shared attendance cards left a principal employer carrying liability for 150+ contractors it could not see or prove. Here is how they fixed it.
                  </p>
                  <div className="flex flex-wrap gap-3 items-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-[0.95rem] no-underline border-[1.5px] border-[#0E5A78] bg-transparent text-[#0E5A78] hover:bg-[#DCEBF2]"
                    >
                      <svg viewBox="0 0 16 16" aria-hidden width={16} height={16} className="flex-none">
                        <path d="M8 2v8m-3.5-3.5L8 10l3.5-3.5M3 13h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Request PDF
                    </Link>
                  </div>
                </div>

                {/* At a glance */}
                <div className="self-end pb-10 max-[860px]:pb-0">
                  <div className="bg-[#16222E] text-[#F8FAFB] rounded-2xl p-6">
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#7DA9C0] mb-4">At a glance</p>
                    <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
                      <div>
                        <dt className="text-xs text-[#7DA9C0] uppercase tracking-wide mb-0.5">Industry</dt>
                        <dd className="font-semibold text-[0.95rem]">Automotive OEM</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-[#7DA9C0] uppercase tracking-wide mb-0.5">Footprint</dt>
                        <dd className="font-semibold text-[0.95rem]">Multiple plants across India</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-[#7DA9C0] uppercase tracking-wide mb-0.5">Workforce</dt>
                        <dd className="font-semibold text-[0.95rem]">10,000+ contract workers</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-[#7DA9C0] uppercase tracking-wide mb-0.5">Solution</dt>
                        <dd className="font-semibold text-[0.95rem]">RegX CLMS + face readers</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Cover image */}
            <div className="max-w-[1180px] mx-auto px-6">
              <div className="rounded-t-2xl overflow-hidden h-[340px] max-[640px]:h-[220px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=75"
                  alt="Robotic arms working on a car body on an automotive assembly line"
                  width={1400}
                  height={340}
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* ── Executive summary ─────────────────────────────────────── */}
          <section className="py-10 bg-[#16222E] text-[#F8FAFB]" aria-labelledby="exec-h">
            <div className="max-w-[1180px] mx-auto px-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#7DA9C0] mb-6">Executive summary</p>
              <div className="grid grid-cols-3 gap-6 max-[720px]:grid-cols-1">
                <div className="border-t-2 border-[#E2A01B] pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden width={18} height={18} className="flex-none text-[#E2A01B]">
                      <rect x="3" y="2" width="10" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
                      <path d="M7 6h4M7 9h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                    <span className="font-bold text-[0.95rem]">The challenge</span>
                  </div>
                  <p className="text-[0.9rem] text-[#B0C4D0] m-0">
                    Paper registers, shared attendance cards and spreadsheet billing left the principal employer liable for contractor compliance it could not see or prove.
                  </p>
                </div>
                <div className="border-t-2 border-[#E2A01B] pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden width={18} height={18} className="flex-none text-[#E2A01B]">
                      <path d="M4 10a6 6 0 1 1 12 0 6 6 0 0 1-12 0z" stroke="currentColor" strokeWidth="1.6"/>
                      <path d="M10 10V7M10 10l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                    <span className="font-bold text-[0.95rem]">The solution</span>
                  </div>
                  <p className="text-[0.9rem] text-[#B0C4D0] m-0">
                    Iddion RegX CLMS as the single record for every contract worker, connected to face-recognition turnstiles that enforce work-order, induction and PF/ESI status at the gate.
                  </p>
                </div>
                <div className="border-t-2 border-[#E2A01B] pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden width={18} height={18} className="flex-none text-[#E2A01B]">
                      <path d="M3 14l4-5 3 3 3-4 4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-bold text-[0.95rem]">The result</span>
                  </div>
                  <p className="text-[0.9rem] text-[#B0C4D0] m-0">
                    Proxy attendance eliminated, every contractor bill backed by verified man-days, and statutory registers audit-ready at all times across all plants.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── The client ────────────────────────────────────────────── */}
          <section className="py-12 bg-white border-b border-[#D6DEE5]" aria-labelledby="client-h">
            <div className="max-w-[1180px] mx-auto px-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0E5A78] mb-3">The client</p>
              <div className="grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-12 max-[760px]:grid-cols-1 max-[760px]:gap-8">
                <div>
                  <h2 id="client-h" className="font-bold text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.15] mb-4 font-sans">
                    A principal employer carrying the risk for 150+ contractors
                  </h2>
                  <p className="text-[#425263] mb-4">
                    Our client is an established Indian automobile manufacturer with several plants. Like most auto OEMs, more than half of its shop-floor workforce is engaged through contractors — on assembly lines, paint shops, logistics, canteens, housekeeping and security.
                  </p>
                  <p className="text-[#425263] mb-6">
                    Under the Contract Labour (Regulation &amp; Abolition) Act and the Labour Codes, the principal employer is ultimately liable if a contractor fails to pay wages, PF or ESI. With rotating shifts and seasonal peaks, the company was carrying that liability without reliable, real-time evidence of who was on site and whether they were compliant.
                  </p>

                  {/* Quote */}
                  <blockquote className="border-l-[3px] border-[#0E5A78] pl-5 m-0">
                    <p className="text-[1.05rem] italic text-[#16222E] mb-2">
                      &ldquo;We were the principal employer on paper, but we had no way to prove — on any given morning — who was inside the plant, who had done the safety induction, or whether their contractor had paid PF.&rdquo;
                    </p>
                    <footer className="text-sm font-semibold text-[#425263]">
                      Head – Industrial Relations, <span className="font-normal">Client (name withheld)</span>
                    </footer>
                  </blockquote>
                </div>

                {/* Client snapshot */}
                <div>
                  <div className="border border-[#D6DEE5] rounded-xl overflow-hidden">
                    <div className="bg-[#EEF2F5] px-5 py-3 text-xs font-semibold tracking-wide uppercase text-[#425263]">Client snapshot</div>
                    <dl className="divide-y divide-[#D6DEE5]">
                      {[
                        ["Sector", "Automotive OEM"],
                        ["Sites", "Multiple plants, India"],
                        ["Contract workers", "10,000+"],
                        ["Contractors", "150+"],
                        ["Deployed", "CLMS · Face readers · BGV"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between px-5 py-3.5 text-sm">
                          <dt className="text-[#425263]">{k}</dt>
                          <dd className="font-semibold text-[#16222E] text-right m-0">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Challenges & Resolutions ───────────────────────────────── */}
          <section className="py-12 border-b border-[#D6DEE5]" aria-labelledby="challenges-h">
            <div className="max-w-[1180px] mx-auto px-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0E5A78] mb-2">Challenges &amp; resolutions</p>
              <h2 id="challenges-h" className="font-bold text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.15] mb-2 font-sans">
                Six problems at the plant gate — and how InOps solved each one
              </h2>
              <p className="text-[#425263] mb-8 max-w-[64ch]">Every plant had its own process, its own spreadsheets and its own version of the truth.</p>

              <div className="grid grid-cols-1 gap-4">
                {CHALLENGES.map((c, i) => (
                  <div key={i} className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-0 items-stretch max-[760px]:grid-cols-1 max-[760px]:gap-3">
                    {/* Challenge */}
                    <div className="bg-white border border-[#D6DEE5] rounded-xl p-5">
                      <p className="text-xs font-semibold tracking-widest uppercase text-[#E25C3B] mb-2">Challenge {String(i + 1).padStart(2, "0")}</p>
                      <h3 className="font-semibold text-[1.02rem] mb-1.5 font-sans">{c.challengeTitle}</h3>
                      <p className="text-sm text-[#425263] m-0">{c.challengeText}</p>
                    </div>
                    {/* Arrow */}
                    <div className="flex items-center justify-center px-3 max-[760px]:hidden">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden width={22} height={22} className="text-[#0E5A78]">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {/* Resolution */}
                    <div className="bg-[#EEF7F2] border border-[#B8DCC8] rounded-xl p-5">
                      <p className="text-xs font-semibold tracking-widest uppercase text-[#1A6B3A] mb-2">How InOps resolved it</p>
                      <h3 className="font-semibold text-[1.02rem] mb-1.5 font-sans">{c.resolutionTitle}</h3>
                      <p className="text-sm text-[#425263] m-0">{c.resolutionText}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── The solution ──────────────────────────────────────────── */}
          <section className="py-12 bg-white border-b border-[#D6DEE5]" aria-labelledby="solution-h">
            <div className="max-w-[1180px] mx-auto px-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0E5A78] mb-2">The solution</p>
              <h2 id="solution-h" className="font-bold text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.15] mb-3 font-sans">
                One connected system, from contractor portal to turnstile
              </h2>
              <p className="text-[#425263] mb-8 max-w-[70ch]">
                InOps deployed Iddion RegX CLMS as the system of record for every contract worker, linked directly to face-recognition gates. A worker gets in only when RegX confirms the work order, induction and statutory compliance are all in order.
              </p>

              {/* Architecture flow */}
              <div className="bg-[#16222E] rounded-2xl p-8 mb-8 overflow-x-auto">
                <div className="flex items-center justify-center gap-4 min-w-[600px]">
                  {[
                    { label: "Contractor Portal", sub: "Work orders · licences · docs" },
                    null,
                    { label: "Iddion RegX", sub: "Single record for every contract worker", highlight: true },
                    null,
                    { label: "Face-Reader Gates", sub: "Turnstiles · zone access" },
                  ].map((item, i) =>
                    item === null ? (
                      <svg key={i} viewBox="0 0 24 24" fill="none" aria-hidden width={22} height={22} className="text-[#7DA9C0] flex-none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <div
                        key={i}
                        className={`rounded-xl p-4 text-center min-w-[140px] flex-1 ${item.highlight ? "bg-[#0E5A78] border border-[#1E8BB0]" : "bg-[#1E2E3D] border border-[#2E3E4D]"}`}
                      >
                        <p className={`font-bold text-[0.9rem] mb-1 ${item.highlight ? "text-white" : "text-[#F8FAFB]"}`}>{item.label}</p>
                        <p className={`text-xs m-0 ${item.highlight ? "text-[#B0D4E8]" : "text-[#7DA9C0]"}`}>{item.sub}</p>
                      </div>
                    )
                  )}
                </div>
                <div className="flex justify-center mt-4">
                  <div className="rounded-xl p-4 text-center bg-[#1E2E3D] border border-[#2E3E4D] min-w-[140px]">
                    <p className="font-bold text-[0.9rem] mb-1 text-[#F8FAFB]">CXO Dashboard</p>
                    <p className="text-xs text-[#7DA9C0] m-0">Live headcount · risk flags</p>
                  </div>
                </div>
              </div>

              {/* Evidence-based bill highlight */}
              <div className="bg-[#EEF7F2] border border-[#B8DCC8] rounded-xl p-6 max-w-[480px]">
                <p className="font-semibold text-[1.02rem] mb-1.5 font-sans text-[#1A6B3A]">Evidence-based bill validation</p>
                <p className="text-sm text-[#425263] m-0">
                  Contractor invoices are checked against verified man-days and approved rates before Finance releases payment. Exceptions carry the evidence.
                </p>
              </div>
            </div>
          </section>

          {/* ── Rollout ───────────────────────────────────────────────── */}
          <section className="py-12 border-b border-[#D6DEE5]" aria-labelledby="rollout-h">
            <div className="max-w-[1180px] mx-auto px-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0E5A78] mb-2">Rollout</p>
              <h2 id="rollout-h" className="font-bold text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.15] mb-8 font-sans">
                Live across all plants in 14 weeks
              </h2>
              <div className="grid grid-cols-4 gap-5 max-[640px]:grid-cols-2">
                {ROLLOUT.map((phase, i) => (
                  <div key={i} className="relative pl-5 border-l-2 border-[#0E5A78]">
                    <p className="text-xs font-semibold text-[#0E5A78] mb-0.5 uppercase tracking-wide">{phase.weeks}</p>
                    <p className="font-bold text-[1rem] mb-1 font-sans">{phase.title}</p>
                    <p className="text-sm text-[#425263] m-0">{phase.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Impact table ──────────────────────────────────────────── */}
          <section className="py-12 bg-white border-b border-[#D6DEE5]" aria-labelledby="impact-h">
            <div className="max-w-[1180px] mx-auto px-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0E5A78] mb-2">The impact</p>
              <h2 id="impact-h" className="font-bold text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.15] mb-6 font-sans">
                Before and after Iddion RegX
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left bg-[#EEF2F5] px-5 py-3 font-semibold text-[#425263] uppercase tracking-wide text-xs rounded-tl-xl">Area</th>
                      <th className="text-left bg-[#EEF2F5] px-5 py-3 font-semibold text-[#E25C3B] uppercase tracking-wide text-xs">Before</th>
                      <th className="text-left bg-[#0E5A78] px-5 py-3 font-semibold text-white uppercase tracking-wide text-xs rounded-tr-xl">After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {IMPACT.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFB]"}>
                        <td className="px-5 py-3.5 font-semibold text-[#16222E] border-b border-[#D6DEE5]">{row.area}</td>
                        <td className="px-5 py-3.5 text-[#E25C3B] border-b border-[#D6DEE5]">{row.before}</td>
                        <td className="px-5 py-3.5 text-[#1A6B3A] font-medium border-b border-[#D6DEE5]">
                          <span className="mr-1">✓</span>{row.after}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Closing quote */}
              <blockquote className="border-l-[3px] border-[#0E5A78] pl-5 mt-8 m-0">
                <p className="text-[1.05rem] italic text-[#16222E] mb-2">
                  &ldquo;The gate now enforces our compliance policy for us. When the labour inspector visits, we print the registers — we don&rsquo;t build them.&rdquo;
                </p>
                <footer className="text-sm font-semibold text-[#425263]">
                  General Manager – HR, <span className="font-normal">Client (name withheld)</span>
                </footer>
              </blockquote>
            </div>
          </section>

          {/* ── Why InOps ─────────────────────────────────────────────── */}
          <section className="py-12 border-b border-[#D6DEE5]" aria-labelledby="why-h">
            <div className="max-w-[1180px] mx-auto px-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0E5A78] mb-2">Why InOps</p>
              <h2 id="why-h" className="font-bold text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.15] mb-6 font-sans max-w-[26ch]">
                The full contract labour lifecycle — from the turnstile to the payslip — on one platform.
              </h2>
              <div className="grid grid-cols-4 gap-5 mb-8 max-[640px]:grid-cols-2">
                {[
                  { stat: "3,000+", label: "devices managed across 70+ sites" },
                  { stat: "Since 2014", label: "serving Indian manufacturing, defence & infrastructure" },
                  { stat: "ISO/IEC 27001", label: "certified information security" },
                  { stat: "End to end", label: "readers, BGV, CLMS, compliance & analytics" },
                ].map((item) => (
                  <div key={item.stat} className="bg-white border border-[#D6DEE5] rounded-xl p-5">
                    <p className="font-bold text-[1.25rem] text-[#0E5A78] mb-1 font-sans">{item.stat}</p>
                    <p className="text-sm text-[#425263] m-0">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Related case studies ──────────────────────────────────── */}
          <section className="py-10 border-b border-[#D6DEE5] bg-white">
            <div className="max-w-[1180px] mx-auto px-6">
              <h2 className="font-bold text-[1.3rem] mb-5 font-sans">More case studies</h2>
              <div className="flex gap-4 flex-wrap">
                <Link href="/case-studies" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-[0.95rem] no-underline border-[1.5px] border-[#0E5A78] text-[#0E5A78] hover:bg-[#DCEBF2]">
                  <svg viewBox="0 0 16 16" aria-hidden width={16} height={16} className="flex-none">
                    <path d="M10 3H3v10h10V6M10 3v3h3M10 3l3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                  All case studies
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <div className="bg-[#16222E] text-[#F8FAFB]">
          <div className="max-w-[1180px] mx-auto px-6 py-14 grid grid-cols-[minmax(0,1fr)_auto] gap-8 items-center max-[760px]:grid-cols-1">
            <div>
              <h2 className="font-bold text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.1] mb-2.5 max-w-[24ch] font-sans">
                See Iddion RegX on your shop floor
              </h2>
              <p className="m-0 max-w-[52ch] opacity-85">Book a walkthrough or a scoped proof of concept at one of your plants.</p>
            </div>
            <div className="flex flex-col gap-3 max-[760px]:flex-row max-[760px]:flex-wrap">
              <Link
                className="inline-block px-5 py-3.5 rounded-lg bg-[#E2A01B] text-[#1A1300] font-semibold no-underline whitespace-nowrap text-center"
                href="/contact"
              >
                Book a demo
              </Link>
              <Link
                href="/contact"
                className="inline-block px-5 py-3.5 rounded-lg border-[1.5px] border-[#7DA9C0] text-[#F8FAFB] font-semibold no-underline whitespace-nowrap text-center hover:border-white"
              >
                Request this case study PDF
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}

const CHALLENGES = [
  {
    challengeTitle: "Slow, paper-based onboarding",
    challengeText:
      "Workers filled 6–8 paper forms; KYC, police verification and fitness records sat in contractor files, starving lines during volume peaks.",
    resolutionTitle: "Digital onboarding at the gate",
    resolutionText:
      "Tablet-based enrolment in RegX with Aadhaar KYC, background verification and medical fitness captured once and linked to the work order.",
  },
  {
    challengeTitle: "Proxy punches & gate leakage",
    challengeText:
      "Shared RFID cards were swiped for absent workers, and people with lapsed work orders still walked through the turnstiles.",
    resolutionTitle: "Face-recognition turnstiles",
    resolutionText:
      "InOps face readers verify the person, not the card, and check gate-pass validity in real time before the barrier opens.",
  },
  {
    challengeTitle: "PF / ESI compliance blind spots",
    challengeText:
      "Challans arrived months late, if at all. Minimum-wage revisions and Form XIII / XVI registers were maintained by hand at every plant.",
    resolutionTitle: "Automated compliance engine",
    resolutionText:
      "Each PF/ESI challan is matched to every worker's wages; minimum-wage and overtime rules run automatically; registers are generated on demand.",
  },
  {
    challengeTitle: "Disputed contractor bills",
    challengeText:
      "Contractors billed on their own man-day counts. HR reconciled them in spreadsheets and settled mismatches by negotiation.",
    resolutionTitle: "Evidence-based bill validation",
    resolutionText:
      "Invoices are checked against verified man-days and approved rates before Finance releases payment; exceptions carry the evidence.",
  },
  {
    challengeTitle: "Uninducted workers on the shop floor",
    challengeText:
      "Nothing linked safety induction, zone authorisation and gate access, so an uninducted worker could reach the paint shop or press line.",
    resolutionTitle: "Induction-linked zone access",
    resolutionText:
      "Induction status and zone rights live on each worker's RegX profile and are enforced at the gate. Expired induction means automatic block.",
  },
  {
    challengeTitle: "Late, fragmented leadership reporting",
    challengeText:
      "Headcount and contractor MIS was compiled by hand from each plant's spreadsheets and reached leadership 10–15 days late.",
    resolutionTitle: "Real-time CXO dashboard",
    resolutionText:
      "Live headcount, compliance status and risk flags by plant and contractor, straight from verified gate and RegX data.",
  },
];

const ROLLOUT = [
  {
    weeks: "Weeks 1–2",
    title: "Discovery",
    text: "Process mapping across plants; contractor master clean-up; gate-pass rule book.",
  },
  {
    weeks: "Weeks 3–6",
    title: "Pilot plant",
    text: "Face readers on turnstiles; first workers enrolled; parallel run with old cards.",
  },
  {
    weeks: "Weeks 7–12",
    title: "Phased rollout",
    text: "Remaining plants live; contractor portal opened to all contractors.",
  },
  {
    weeks: "Weeks 13–14",
    title: "Stabilise",
    text: "Bill validation switched on; CXO dashboard launched.",
  },
];

const IMPACT = [
  { area: "Worker onboarding", before: "3–5 days, paper forms", after: "Under 4 hours, fully digital" },
  { area: "Proxy attendance", before: "Frequent shared-card swipes", after: "Near zero — face verified" },
  { area: "PF / ESI verification", before: "Collected months late", after: "100% verified before bill payment" },
  { area: "Contractor billing", before: "Disputed 6–9% mismatches", after: "Paid on verified man-days; 6.8% lower spend" },
  { area: "Uninducted entries", before: "Undetected", after: "Zero — blocked at the gate" },
  { area: "Audit preparation", before: "~3 weeks per inspection", after: "2 days; registers generated on demand" },
  { area: "Leadership reporting", before: "MIS 10–15 days late", after: "Real-time, by plant and contractor" },
];
