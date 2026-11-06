import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <>
      <div className="bg-[#F8FAFB] text-[#16222E] antialiased" style={{ paddingTop: "var(--home-nav-offset,4.5rem)" }}>

        {/* Draft banner */}
        {/* <div role="note" className="bg-[#FDF3DC] border-b border-[#E2A01B] text-[#7A5200] text-sm">
          <div className="max-w-[1180px] mx-auto px-6 py-3">
            <strong className="text-[#16222E]">Draft for approval.</strong> One case study (automotive OEM) is drafted and waiting for customer approval. The other four industries have their buttons switched off until a verified case study exists. Remove this notice and the noindex tag once the first case study is approved.
          </div>
        </div> */}

        <main>
          {/* Hero */}
          <section className="bg-white border-b border-[#D6DEE5] pt-10" aria-labelledby="page-h">
            <div className="max-w-[1180px] mx-auto px-6">
              <ol className="flex gap-2 text-sm text-[#425263] mb-6 list-none p-0" aria-label="Breadcrumb">
                <li><Link href="/" className="text-[#425263] hover:underline">Home</Link></li>
                <li className="before:content-['/'] before:mr-2 before:text-[#D6DEE5]"><Link href="/blog" className="text-[#425263] hover:underline">Resources</Link></li>
                <li className="before:content-['/'] before:mr-2 before:text-[#D6DEE5]" aria-current="page">Case studies</li>
              </ol>
              <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-12 items-end pb-10 max-[900px]:grid-cols-1 max-[900px]:gap-6">
                <div>
                  <h1 id="page-h" className="font-bold text-[clamp(2.3rem,5vw,3.8rem)] leading-[1.02] tracking-[-0.024em] mb-4 max-w-[16ch] font-sans">
                    Case studies from Indian plants
                  </h1>
                  <p className="text-[1.18rem] text-[#425263] max-w-[56ch] m-0">
                    How manufacturers run contract workforce management on Iddion RegX and InOps hardware.
                  </p>
                </div>
                <div className="text-[0.95rem] text-[#425263] border-l-[3px] border-[#0E5A78] pl-4 max-w-[44ch]">
                  <p className="mb-2">Every case study is anonymised, published with the customer&#39;s written consent, and reports only figures the customer has measured and approved.</p>
                  <p className="mb-0"><a href="#standards" className="font-semibold text-[#0E5A78]">How we publish case studies</a></p>
                </div>
              </div>
            </div>
          </section>

          {/* Library */}
          <section className="py-10 pb-14" aria-labelledby="lib-h">
            <div className="max-w-[1180px] mx-auto px-6">
              <h2 id="lib-h" className="font-bold text-[clamp(1.55rem,2.6vw,2rem)] leading-[1.15] mb-2 font-sans">All case studies</h2>
              <p className="text-[#425263] mb-7 max-w-[64ch]">Automotive, cement, electronics, metal and steel, and pharma.</p>

              <div className="grid grid-cols-[repeat(auto-fill,minmax(min(440px,100%),1fr))] gap-5 max-[420px]:grid-cols-1">

                {/* AUTOMOTIVE featured */}
                <article
                  className="flex flex-col bg-white border border-[#D6DEE5] rounded-2xl overflow-hidden col-span-full grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] max-[860px]:col-auto max-[860px]:flex max-[860px]:flex-col"
                  data-industry="automotive"
                  aria-labelledby="cs-auto"
                >
                  <div className="relative bg-[#DCEBF2] overflow-hidden min-h-[320px] max-[860px]:aspect-[2/1] max-[860px]:min-h-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=70"
                      alt="Robotic arms working on a car body on an automotive assembly line"
                      width={1000}
                      height={500}
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-[0.45rem] mb-3.5">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#DCEBF2] text-[#0E5A78]">Automotive OEM</span>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#DCEBF2] text-[#0E5A78]">Iddion RegX</span>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#DCEBF2] text-[#0E5A78]">Iddion HRIS</span>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#DCEBF2] text-[#0E5A78]">On-premises</span>
                    </div>
                    <h3 id="cs-auto" className="font-bold text-[clamp(1.45rem,2.4vw,1.85rem)] leading-[1.2] mb-2.5 font-sans">
                      How a Leading Automotive OEM Is Modernising Contract Workforce Management Across Multiple Plants
                    </h3>
                    <p className="mb-4 text-[#425263] text-[0.98rem]">
                      One platform for every worker at every plant. The OEM is replacing its legacy contract labour and HR systems with Iddion RegX and Iddion HRIS, run inside its own data centre so workforce data never leaves its IT perimeter. Plants switch over one at a time, while InOps looks after the application and the face readers at the gates.
                    </p>
                    <ul className="list-none m-0 mb-5 p-0 grid grid-cols-2 gap-x-4 gap-y-2.5">
                      <li className="text-sm text-[#425263] border-t border-[#D6DEE5] pt-2">
                        <strong className="block font-sans font-bold text-[1.15rem] text-[#16222E]">4 plants</strong>
                        Live by October 2026
                      </li>
                      <li className="text-sm text-[#425263] border-t border-[#D6DEE5] pt-2">
                        <strong className="block font-sans font-bold text-[1.15rem] text-[#16222E]">Mar 2027</strong>
                        All existing plants
                      </li>
                    </ul>
                    <div className="mt-auto flex flex-wrap gap-2.5 items-center">
                      <Link
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-[0.95rem] no-underline border-[1.5px] border-[#0E5A78] bg-[#0E5A78] text-white hover:brightness-110"
                        href="/case-studies/automotive-oem-multi-plant-clms"
                      >
                        <svg viewBox="0 0 16 16" aria-hidden width={16} height={16} className="flex-none">
                          <path d="M2 3h5a2 2 0 0 1 2 2v8a1.5 1.5 0 0 0-1.5-1.5H2zM14 3H9a2 2 0 0 0-2 2v8a1.5 1.5 0 0 1 1.5-1.5H14z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                        Read case study
                      </Link>
                      <Link
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-[0.95rem] no-underline border-[1.5px] border-[#0E5A78] bg-transparent text-[#0E5A78] hover:bg-[#DCEBF2]"
                        href="/contact"
                      >
                        <svg viewBox="0 0 16 16" aria-hidden width={16} height={16} className="flex-none">
                          <path d="M8 2v8m-3.5-3.5L8 10l3.5-3.5M3 13h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Request PDF
                      </Link>
                    </div>
                  </div>
                </article>

                {/* Coming soon note */}
                <p className="col-span-full text-sm text-[#425263] border border-dashed border-[#D6DEE5] rounded-xl px-5 py-4">
                  More case studies coming: <span className="font-medium text-[#16222E]">cement, electronics, steel, pharma</span>.{" "}
                  <Link href="/contact" className="text-[#0E5A78] hover:underline">Get in touch</Link> if you&rsquo;d like to speak to a customer in your industry.
                </p>

              </div>
            </div>
          </section>

          {/* How we publish */}
          <div className="py-12 border-t border-[#D6DEE5] bg-white" id="standards">
            <div className="max-w-[1180px] mx-auto px-6">
              <h2 className="font-bold text-[clamp(1.55rem,2.6vw,2rem)] leading-[1.15] mb-2 font-sans">How we publish case studies</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 mt-5 max-w-[1000px]">
                <div>
                  <h3 className="font-semibold text-[1.12rem] mb-1.5 font-sans">Anonymised</h3>
                  <p className="m-0 text-[#425263] text-[0.96rem]">We publish by industry and scale only. Every study needs written sign-off before it goes live.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[1.12rem] mb-1.5 font-sans">Measured</h3>
                  <p className="m-0 text-[#425263] text-[0.96rem]">Every figure is one the customer has measured and approved, with the period it covers. Nothing is estimated.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[1.12rem] mb-1.5 font-sans">Consent-led</h3>
                  <p className="m-0 text-[#425263] text-[0.96rem]">A case study runs only if the customer is willing to own every number in it. We do not ask for logo or brand rights.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[1.12rem] mb-1.5 font-sans">Reference calls</h3>
                  <p className="m-0 text-[#425263] text-[0.96rem]">Where a customer is willing to speak to peers, InOps can arrange it. Contact us with your industry and plant count.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="py-12 border-t border-[#D6DEE5]">
            <div className="max-w-[1180px] mx-auto px-6">
              <h2 className="font-bold text-[clamp(1.55rem,2.6vw,2rem)] leading-[1.15] mb-2 font-sans">Questions about these case studies</h2>
              <div className="max-w-[760px] mt-4">
                <details className="border-b border-[#D6DEE5] border-t group">
                  <summary className="cursor-pointer py-4 pr-8 font-semibold list-none relative [&::-webkit-details-marker]:hidden after:content-['+'] after:absolute after:right-1 after:top-3.5 after:text-xl after:text-[#0E5A78] after:transition-transform group-open:after:rotate-45">
                    Why are InOps case studies anonymised?
                  </summary>
                  <p className="mb-4 text-[#425263]">Most manufacturers prefer not to be named in vendor material. Each case study describes the customer by industry and scale only, and is published with the customer&#39;s written consent.</p>
                </details>
                <details className="border-b border-[#D6DEE5] group">
                  <summary className="cursor-pointer py-4 pr-8 font-semibold list-none relative [&::-webkit-details-marker]:hidden after:content-['+'] after:absolute after:right-1 after:top-3.5 after:text-xl after:text-[#0E5A78] after:transition-transform group-open:after:rotate-45">
                    Are the figures in InOps case studies measured?
                  </summary>
                  <p className="mb-4 text-[#425263]">Yes. A case study only reports figures the customer has measured and approved, with the period they cover. Where no figure is approved yet, the case study says so.</p>
                </details>
                <details className="border-b border-[#D6DEE5] group">
                  <summary className="cursor-pointer py-4 pr-8 font-semibold list-none relative [&::-webkit-details-marker]:hidden after:content-['+'] after:absolute after:right-1 after:top-3.5 after:text-xl after:text-[#0E5A78] after:transition-transform group-open:after:rotate-45">
                    Can I speak to an InOps customer in my industry?
                  </summary>
                  <p className="mb-4 text-[#425263]"><Link href="/contact" className="text-[#0E5A78]">Contact us</Link> with your industry and plant count. InOps can arrange a reference conversation where a customer has agreed to take one.</p>
                </details>
              </div>
            </div>
          </div>
        </main>

        {/* Closing CTA */}
        <div className="bg-[#16222E] text-[#F8FAFB]">
          <div className="max-w-[1180px] mx-auto px-6 py-14 grid grid-cols-[minmax(0,1fr)_auto] gap-8 items-center max-[760px]:grid-cols-1">
            <div>
              <h2 className="font-bold text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.1] mb-2.5 max-w-[24ch] font-sans">Want to speak to a customer in your industry?</h2>
              <p className="m-0 max-w-[56ch] opacity-85">Speak to a specialist about contract workforce management at your plants, or ask us to arrange a reference call.</p>
            </div>
            <Link
              className="inline-block px-5 py-3.5 rounded-lg bg-[#E2A01B] text-[#1A1300] font-semibold no-underline whitespace-nowrap"
              href="/contact"
            >
              Talk to us
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}

