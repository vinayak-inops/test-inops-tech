"use client";

import React from "react";
import Link from "next/link";

const css = `
:root{
  --font:"Inter",system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  --bg:#FFFFFF;--bg-soft:#F4F7FB;--bg-deep:#0F2A4A;
  --ink:#0F1E33;--ink-2:#4A5A70;--ink-on-deep:#F1F5FA;--ink-on-deep-2:#B7C4D6;
  --line:#DCE3EC;--brand:#1557D6;--brand-ink:#FFFFFF;--brand-soft:#E7EFFD;
  --note:#FFF6DD;--note-ink:#5C4300;
  --radius:12px;--wrap:1200px;
  box-sizing:border-box;
  padding-top:env(safe-area-inset-top,0px);
  padding-bottom:env(safe-area-inset-bottom,0px);
  color-scheme:light;
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0B1524;--bg-soft:#111F33;--bg-deep:#071021;--ink:#E8EEF6;--ink-2:#A7B5C8;--ink-on-deep:#F1F5FA;--ink-on-deep-2:#A7B5C8;--line:#22334B;--brand:#5B93FF;--brand-ink:#071021;--brand-soft:#16294A;--note:#33290C;--note-ink:#FFD98A;color-scheme:dark;}}
:root[data-theme="dark"]{--bg:#0B1524;--bg-soft:#111F33;--bg-deep:#071021;--ink:#E8EEF6;--ink-2:#A7B5C8;--ink-on-deep:#F1F5FA;--ink-on-deep-2:#A7B5C8;--line:#22334B;--brand:#5B93FF;--brand-ink:#071021;--brand-soft:#16294A;--note:#33290C;--note-ink:#FFD98A;color-scheme:dark;}
*,*::before,*::after{box-sizing:inherit}
html{scroll-padding-top:calc(env(safe-area-inset-top,0px) + 84px);-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--font);font-size:1rem;line-height:1.65;-webkit-font-smoothing:antialiased}
img{max-width:100%;height:auto}
a{color:var(--brand);text-underline-offset:3px}
a:hover{text-decoration-thickness:2px}
:focus-visible{outline:3px solid var(--brand);outline-offset:3px;border-radius:6px}
.ri-wrap{max-width:var(--wrap);margin:0 auto;padding:0 1.25rem}
.ri-skip{position:absolute;left:-9999px;top:0;background:var(--brand);color:var(--brand-ink);padding:.6rem 1rem;z-index:100;border-radius:0 0 8px 0}
.ri-skip:focus{left:0}
.ri-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.ri-site-header{position:sticky;top:0;z-index:50;background:var(--bg);border-bottom:1px solid var(--line);padding-top:env(safe-area-inset-top,0px)}
.ri-bar{display:flex;align-items:center;justify-content:space-between;gap:1rem;height:72px}
.ri-logo img{height:36px;width:auto;display:block}
.ri-nav{display:flex;align-items:center;gap:.25rem}
.ri-nav>ul{list-style:none;margin:0;padding:0;display:flex;align-items:center;gap:.25rem}
.ri-nav a.ri-top,.ri-nav button.ri-top{font:inherit;font-weight:550;font-size:.95rem;color:var(--ink);text-decoration:none;background:none;border:0;padding:.55rem .8rem;border-radius:8px;cursor:pointer;display:inline-flex;align-items:center;gap:.35rem}
.ri-nav a.ri-top:hover,.ri-nav button.ri-top:hover{background:var(--bg-soft)}
.ri-nav button.ri-top svg{width:12px;height:12px;transition:transform .15s}
.ri-nav button.ri-top[aria-expanded="true"] svg{transform:rotate(180deg)}
.ri-has-menu{position:relative}
.ri-menu{position:absolute;top:calc(100% + 6px);left:0;min-width:260px;background:var(--bg);border:1px solid var(--line);border-radius:var(--radius);box-shadow:0 12px 32px rgba(15,30,51,.12);padding:.5rem;list-style:none;margin:0}
.ri-menu[hidden]{display:none}
.ri-menu a{display:block;padding:.5rem .7rem;border-radius:8px;color:var(--ink);text-decoration:none;font-size:.93rem}
.ri-menu a:hover{background:var(--bg-soft)}
.ri-btn{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;font:inherit;font-weight:650;font-size:.95rem;text-decoration:none;border-radius:10px;padding:.75rem 1.2rem;border:1.5px solid transparent;cursor:pointer;line-height:1.2}
.ri-btn-primary{background:var(--brand);color:var(--brand-ink)}
.ri-btn-primary:hover{filter:brightness(1.08)}
.ri-btn-ghost{border-color:currentColor;color:var(--ink);background:transparent}
.ri-menu-toggle{display:none;font:inherit;background:none;border:1.5px solid var(--line);border-radius:8px;padding:.5rem .7rem;color:var(--ink);cursor:pointer}
.ri-crumbs{font-size:.875rem;color:var(--ink-2);padding:1.25rem 0 0}
.ri-crumbs ol{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:.35rem}
.ri-crumbs li+li::before{content:"/";margin-right:.35rem;color:var(--line)}
.ri-crumbs a{color:var(--ink-2)}
.ri-hero{padding:2.5rem 0 3.25rem}
.ri-eyebrow{display:inline-block;font-size:.85rem;font-weight:650;color:var(--brand);background:var(--brand-soft);padding:.3rem .7rem;border-radius:999px;margin-bottom:1rem}
.ri-hero h1{font-size:clamp(2rem,4.4vw,3.25rem);line-height:1.1;letter-spacing:-.02em;margin:0 0 1rem;max-width:20ch}
.ri-lede{font-size:1.15rem;color:var(--ink-2);max-width:64ch;margin:0 0 1.75rem}
.ri-hero-actions{display:flex;flex-wrap:wrap;gap:.75rem}
.ri-hero-note{margin-top:1.25rem;font-size:.9rem;color:var(--ink-2)}
section.ri-block{padding:3.5rem 0;border-top:1px solid var(--line)}
section.ri-soft{background:var(--bg-soft)}
.ri-kicker{font-size:.85rem;font-weight:650;color:var(--brand);margin:0 0 .5rem}
.ri-block h2{font-size:clamp(1.6rem,3vw,2.2rem);line-height:1.2;letter-spacing:-.015em;margin:0 0 .75rem}
.ri-block h3{font-size:1.1rem;line-height:1.35;margin:0 0 .4rem}
.ri-intro{color:var(--ink-2);max-width:68ch;margin:0 0 2rem}
.ri-grid{display:grid;gap:1rem}
.ri-g3{grid-template-columns:repeat(3,minmax(0,1fr))}
.ri-g2{grid-template-columns:repeat(2,minmax(0,1fr))}
.ri-card{background:var(--bg);border:1px solid var(--line);border-radius:var(--radius);padding:1.4rem}
section.ri-soft .ri-card{background:var(--bg)}
.ri-card p{margin:.35rem 0 0;color:var(--ink-2);font-size:.97rem}
.ri-card ul{margin:.6rem 0 0;padding-left:1.1rem;color:var(--ink-2);font-size:.95rem}
.ri-card li{margin:.25rem 0}
.ri-num{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;background:var(--brand-soft);color:var(--brand);font-weight:700;font-size:.9rem;margin-bottom:.75rem}
.ri-table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:var(--radius);background:var(--bg)}
.ri-table-wrap table{border-collapse:collapse;width:100%;min-width:640px;font-size:.96rem}
.ri-table-wrap caption{text-align:left;padding:1rem 1.1rem .25rem;font-weight:650}
.ri-table-wrap th,.ri-table-wrap td{text-align:left;vertical-align:top;padding:.85rem 1.1rem;border-bottom:1px solid var(--line)}
.ri-table-wrap thead th{font-size:.85rem;color:var(--ink-2);font-weight:650;background:var(--bg-soft)}
.ri-table-wrap tbody tr:last-child td,.ri-table-wrap tbody tr:last-child th{border-bottom:0}
.ri-table-wrap tbody th{font-weight:650}
.ri-note{background:var(--note);color:var(--note-ink);border-radius:var(--radius);padding:1rem 1.2rem;font-size:.95rem;margin-top:1.5rem}
.ri-steps{list-style:none;counter-reset:s;margin:0;padding:0;display:grid;gap:1rem;grid-template-columns:repeat(3,minmax(0,1fr))}
.ri-steps li{counter-increment:s;background:var(--bg);border:1px solid var(--line);border-radius:var(--radius);padding:1.3rem}
.ri-steps li::before{content:counter(s);display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--brand);color:var(--brand-ink);font-weight:700;margin-bottom:.7rem}
.ri-steps p{margin:.3rem 0 0;color:var(--ink-2);font-size:.95rem}
.ri-faq{max-width:860px}
.ri-faq details{border-bottom:1px solid var(--line)}
.ri-faq summary{list-style:none;cursor:pointer;padding:1.1rem 2.5rem 1.1rem 0;font-weight:650;font-size:1.05rem;position:relative}
.ri-faq summary::-webkit-details-marker{display:none}
.ri-faq summary::after{content:"+";position:absolute;right:.25rem;top:50%;transform:translateY(-50%);font-size:1.5rem;font-weight:400;color:var(--brand)}
.ri-faq details[open] summary::after{content:"–"}
.ri-faq details p{margin:0 0 1.2rem;color:var(--ink-2);max-width:72ch}
.ri-cta{background:var(--bg-deep);color:var(--ink-on-deep);padding:3.5rem 0}
.ri-cta h2{color:var(--ink-on-deep)}
.ri-cta p{color:var(--ink-on-deep-2);max-width:62ch;margin:0 0 1.5rem}
.ri-cta .ri-btn-ghost{color:var(--ink-on-deep)}
.ri-cta-row{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center}
.ri-site-footer{background:var(--bg-soft);border-top:1px solid var(--line);padding:3rem 0 2rem;font-size:.93rem}
.ri-f-top{display:grid;grid-template-columns:1.4fr repeat(4,1fr);gap:2rem}
.ri-f-brand img{height:34px;width:auto}
.ri-f-brand p{color:var(--ink-2);margin:.9rem 0 1rem;max-width:34ch}
.ri-f-links{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:.9rem}
.ri-f-links a{color:var(--ink-2)}
.ri-site-footer h2{font-size:.95rem;margin:0 0 .75rem;letter-spacing:0}
.ri-site-footer ul{list-style:none;margin:0;padding:0}
.ri-site-footer li{margin:.4rem 0}
.ri-site-footer a{color:var(--ink);text-decoration:none}
.ri-site-footer a:hover{color:var(--brand);text-decoration:underline}
.ri-site-footer address{font-style:normal;color:var(--ink-2)}
.ri-f-bottom{margin-top:2.5rem;padding-top:1.25rem;border-top:1px solid var(--line);color:var(--ink-2);display:flex;justify-content:space-between;flex-wrap:wrap;gap:.75rem}
.ri-status{display:flex;gap:.8rem;align-items:flex-start;background:var(--note);color:var(--note-ink);border-radius:var(--radius);padding:1rem 1.2rem;margin:0 0 1.25rem;max-width:72ch}
.ri-status-dot{flex:none;width:12px;height:12px;border-radius:50%;background:currentColor;margin-top:.45rem}
.ri-two-col{display:grid;grid-template-columns:1.6fr 1fr;gap:2.5rem;align-items:start}
.ri-two-col p{color:var(--ink-2);max-width:66ch}
.ri-facts{background:var(--bg-soft);border:1px solid var(--line);border-radius:var(--radius);padding:1.4rem}
.ri-facts h3{margin-bottom:.75rem}
.ri-facts dl{margin:0;display:grid;grid-template-columns:auto 1fr;gap:.55rem 1rem;font-size:.95rem}
.ri-facts dt{color:var(--ink-2)}
.ri-facts dd{margin:0;font-weight:600}
.ri-timeline{list-style:none;margin:0;padding:0;border-left:3px solid var(--brand);max-width:860px}
.ri-timeline li{display:grid;grid-template-columns:220px 1fr;gap:1rem;align-items:baseline;padding:.85rem 0 .85rem 1.25rem;border-bottom:1px solid var(--line);position:relative}
.ri-timeline li::before{content:"";position:absolute;left:-8px;top:1.15rem;width:13px;height:13px;border-radius:50%;background:var(--bg);border:3px solid var(--brand)}
.ri-t-stage{font-weight:700}
.ri-link-card{display:block;text-decoration:none;color:var(--ink);transition:border-color .15s,transform .15s}
.ri-link-card:hover{border-color:var(--brand);transform:translateY(-2px)}
.ri-link-card h3{color:var(--ink)}
.ri-tag{display:inline-block;font-size:.78rem;font-weight:650;color:var(--brand);background:var(--brand-soft);padding:.2rem .55rem;border-radius:999px;margin-bottom:.6rem}
@media (max-width:1000px){.ri-g3{grid-template-columns:repeat(2,minmax(0,1fr))}.ri-steps{grid-template-columns:repeat(2,minmax(0,1fr))}.ri-f-top{grid-template-columns:repeat(2,1fr)}.ri-f-brand{grid-column:1 / -1}}
@media (max-width:860px){.ri-menu-toggle{display:inline-flex}.ri-nav{position:absolute;left:0;right:0;top:100%;background:var(--bg);border-bottom:1px solid var(--line);padding:.75rem 1.25rem 1.25rem;display:none;flex-direction:column;align-items:stretch}.ri-nav.open{display:flex}.ri-nav>ul{flex-direction:column;align-items:stretch}.ri-menu{position:static;box-shadow:none;border:0;padding:0 0 .5rem .75rem;min-width:0}.ri-nav .ri-btn{margin-top:.5rem}.ri-two-col{grid-template-columns:1fr}.ri-timeline li{grid-template-columns:1fr;gap:.2rem}}
@media (max-width:640px){.ri-g3,.ri-g2,.ri-steps{grid-template-columns:1fr}.ri-f-top{grid-template-columns:1fr}.ri-hero{padding:1.75rem 0 2.5rem}section.ri-block{padding:2.75rem 0}}
@media (prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}
@media print{.ri-site-header,.ri-cta,.ri-site-footer{display:none}}
`;

const jsonLd = `{
  "@context":"https://schema.org",
  "@graph":[
    {"@type":"CollectionPage","@id":"https://inops.tech/research-insights#webpage","url":"https://inops.tech/research-insights","name":"Contract Labour Compliance Research & Insights (India) | InOps","description":"InOps research and insights on contract labour compliance in Indian manufacturing.","inLanguage":"en-IN","dateModified":"2026-10-24","isPartOf":{"@id":"https://inops.tech/#website"},"publisher":{"@id":"https://inops.tech/#organization"}},
    {"@type":"ResearchProject","@id":"https://inops.tech/research-insights#study","name":"Contract Labour Compliance Gaps in 50 Indian Plants","description":"Proposed InOps research study to assess contract labour compliance across 50 manufacturing plants in India under the Labour Codes.","url":"https://inops.tech/research-insights#study","parentOrganization":{"@id":"https://inops.tech/#organization"},"areaServed":{"@type":"Country","name":"India"}},
    {"@type":"Organization","@id":"https://inops.tech/#organization","name":"InOps Solutions","url":"https://inops.tech/","logo":"https://inops.tech/logo.png","email":"contact@inops.tech","telephone":"+91-80-2774-5220","address":{"@type":"PostalAddress","streetAddress":"60A, Bommasandra Link Road, Bommasandra Industrial Area","addressLocality":"Bengaluru","addressRegion":"Karnataka","postalCode":"560099","addressCountry":"IN"}}
  ]
}`;

function fireResearchLead(name: string, company: string, email: string) {
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", "generate_lead", { lead_type: "research", name, company, email });
}

function RegisterInterestForm() {
  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <div className="ri-status" role="alert" style={{ maxWidth: "520px" }}>
        <span className="ri-status-dot" aria-hidden="true" style={{ background: "var(--ok, #1E6E48)" }}></span>
        <div><strong>Interest registered.</strong> We&apos;ll notify you when findings are published or recruitment opens.</div>
      </div>
    );
  }

  return (
    <form
      id="ri-interest-form"
      style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "480px" }}
      onSubmit={(e) => {
        e.preventDefault();
        fireResearchLead(name, company, email);
        setSubmitted(true);
      }}
    >
      <style>{`.ri-field{font:inherit;font-size:1rem;padding:.65rem .9rem;border:1.5px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink);width:100%}.ri-field:focus{border-color:var(--brand);outline:none;box-shadow:0 0 0 3px var(--brand-soft)}`}</style>
      <label style={{ display: "flex", flexDirection: "column", gap: "0.3rem", fontSize: "0.9rem", fontWeight: 600 }}>
        Your name
        <input className="ri-field" type="text" required autoComplete="name" placeholder="e.g. Priya Sharma" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: "0.3rem", fontSize: "0.9rem", fontWeight: 600 }}>
        Company
        <input className="ri-field" type="text" required autoComplete="organization" placeholder="e.g. Tata Motors" value={company} onChange={e => setCompany(e.target.value)} />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: "0.3rem", fontSize: "0.9rem", fontWeight: 600 }}>
        Work email
        <input className="ri-field" type="email" required autoComplete="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <button type="submit" className="ri-btn ri-btn-primary" style={{ alignSelf: "flex-start", marginTop: "0.25rem" }}>
        Register interest
      </button>
      <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--ink-2)" }}>
        We&apos;ll only use this to notify you about the study. No spam.
      </p>
    </form>
  );
}

export default function ResearchInsightsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />


      <main id="ri-main">
        <div className="ri-wrap">
          <nav className="ri-crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Resources</Link></li>
              <li><span aria-current="page">Research &amp; Insights</span></li>
            </ol>
          </nav>
          <section className="ri-hero" aria-labelledby="ri-h1">
            <span className="ri-eyebrow">Coming soon · Research &amp; Insights</span>
            <h1 id="ri-h1">Contract Labour Compliance Research for India</h1>
            <p className="ri-lede">Research and practical guidance on how Indian manufacturing plants manage contract labour compliance under the Labour Codes. Our first planned study will assess 50 plants against one checklist, to show which compliance gaps are common and what closes them.</p>
            <div className="ri-hero-actions">
              <a className="ri-btn ri-btn-primary" href="#ri-interest-form">Register Interest</a>
              <a className="ri-btn ri-btn-ghost" href="#ri-study">See the Planned Study</a>
            </div>
          </section>
        </div>

        <section className="ri-block" id="ri-study" aria-labelledby="ri-h-study">
          <div className="ri-wrap ri-two-col">
            <div>
              <p className="ri-kicker">Featured study</p>
              <h2 id="ri-h-study">Contract Labour Compliance Gaps in 50 Indian Plants</h2>
              <div className="ri-status" role="note" aria-label="Study status">
                <span className="ri-status-dot" aria-hidden="true"></span>
                <div><strong>Proposed study.</strong> This research has not yet been conducted. No plant data has been collected and no findings have been published.</div>
              </div>
              <p>India's four Labour Codes came into force on 21 November 2025. Contract labour, previously governed by the Contract Labour (Regulation and Abolition) Act, 1970, now falls under the Occupational Safety, Health and Working Conditions Code, 2020, and states are notifying their own rules.</p>
              <p>Plants are updating licences, registers, wage records and gate processes at the same time. Individual audits show where one plant slips, but they are rarely compared. This study is designed to assess 50 plants with one method, so the common patterns can be seen.</p>
            </div>
            <aside className="ri-facts" aria-label="Study at a glance">
              <h3>At a glance</h3>
              <dl>
                <dt>Status</dt><dd>Proposed</dd>
                <dt>Planned sample</dt><dd>50 manufacturing plants in India</dd>
                <dt>Unit of analysis</dt><dd>The plant (principal employer site)</dd>
                <dt>Focus</dt><dd>Contract labour compliance under the Labour Codes</dd>
                <dt>Reporting</dt><dd>Aggregated and anonymised; no plant named</dd>
                <dt>Fieldwork</dt><dd>Not yet scheduled</dd>
                <dt>Publication</dt><dd>Not yet scheduled</dd>
              </dl>
            </aside>
          </div>
        </section>

        <section className="ri-block ri-soft" aria-labelledby="ri-h-objectives">
          <div className="ri-wrap">
            <p className="ri-kicker">Research objectives</p>
            <h2 id="ri-h-objectives">What the study is designed to answer</h2>
            <div className="ri-grid ri-g3">
              <div className="ri-card"><span className="ri-num" aria-hidden="true">1</span><h3>Where gaps occur</h3><p>How many of the 50 plants show a gap in each compliance area examined.</p></div>
              <div className="ri-card"><span className="ri-num" aria-hidden="true">2</span><h3>Why they occur</h3><p>Whether each gap is a documentation, process or system gap, so fixes target the actual cause.</p></div>
              <div className="ri-card"><span className="ri-num" aria-hidden="true">3</span><h3>Who is most exposed</h3><p>How results differ by plant size, sector, state and how contract labour is managed (paper, spreadsheets or software), where group sizes allow.</p></div>
              <div className="ri-card"><span className="ri-num" aria-hidden="true">4</span><h3>Readiness for the Labour Codes</h3><p>How far plants have moved their contractor licences, registers and records onto the new framework.</p></div>
              <div className="ri-card"><span className="ri-num" aria-hidden="true">5</span><h3>What good looks like</h3><p>Which practices are common to plants with the fewest gaps.</p></div>
              <div className="ri-card"><span className="ri-num" aria-hidden="true">6</span><h3>A reusable benchmark</h3><p>A published checklist that any plant can use to score itself on the same basis.</p></div>
            </div>
          </div>
        </section>

        <section className="ri-block" id="ri-methodology" aria-labelledby="ri-h-method">
          <div className="ri-wrap">
            <p className="ri-kicker">Planned methodology</p>
            <h2 id="ri-h-method">How the study is designed to run</h2>
            <p className="ri-intro">This is the planned design. It will be finalised before any data is collected, and any change will be disclosed in the published report.</p>
            <div className="ri-table-wrap">
              <table>
                <caption className="ri-sr">Planned study design</caption>
                <thead><tr><th scope="col">Element</th><th scope="col">Planned approach</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Sample</th><td>50 manufacturing plants in India that engage contract labour through one or more contractors.</td></tr>
                  <tr><th scope="row">Recruitment</th><td>By invitation and written consent. Open to InOps customers and non-customers; the mix will be reported with the results.</td></tr>
                  <tr><th scope="row">Assessment</th><td>One structured checklist applied to every plant, covering the compliance areas below, through document review and walkthroughs of the gate and attendance process.</td></tr>
                  <tr><th scope="row">Interviews</th><td>Short structured interviews with each plant's HR, compliance or security lead, to understand the causes of any gaps.</td></tr>
                  <tr><th scope="row">System data</th><td>Only where a plant gives specific consent, and only in aggregated, anonymised form. No individual worker data will be published.</td></tr>
                  <tr><th scope="row">Scoring</th><td>Each checklist item recorded as met, partly met, not met or not applicable, using written definitions shared with every assessor.</td></tr>
                  <tr><th scope="row">Review</th><td>Legal review of the checklist against the Labour Codes and state rules in force, and independent review of the analysis before publication.</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ri-grid ri-g2" style={{ marginTop: "1rem" }}>
              <div className="ri-card">
                <h3>Privacy and anonymisation</h3>
                <ul>
                  <li>No plant, company or contractor will be named in any publication.</li>
                  <li>Results will be reported only for groups large enough that no single plant can be identified.</li>
                  <li>Personal data will be kept to a minimum and handled in line with the Digital Personal Data Protection Act, 2023.</li>
                  <li>Participating plants will be able to withdraw before analysis begins.</li>
                </ul>
              </div>
              <div className="ri-card">
                <h3>Limitations and disclosure</h3>
                <ul>
                  <li>Plants will choose to take part, so the sample will not be random and results will not represent every Indian plant.</li>
                  <li>Each assessment will be a snapshot at one point in time.</li>
                  <li>InOps sells contract labour management software and services. The method, checklist and limitations will be published so readers can judge the results for themselves.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="ri-block ri-soft" aria-labelledby="ri-h-areas">
          <div className="ri-wrap">
            <p className="ri-kicker">Compliance areas examined</p>
            <h2 id="ri-h-areas">What each plant will be assessed on</h2>
            <p className="ri-intro">The checklist covers the obligations a principal employer and its contractors carry for contract labour, plus the gate and data controls that support them. Final wording will follow legal review.</p>
            <div className="ri-grid ri-g3">
              <div className="ri-card"><h3>Contractor licensing</h3><p>Whether each contractor that needs a licence holds a valid one, and whether headcount on site stays within the licensed limit.</p></div>
              <div className="ri-card"><h3>Establishment registration</h3><p>Whether the plant's registration is in place and its particulars are up to date under the new framework.</p></div>
              <div className="ri-card"><h3>Registers and records</h3><p>Employee registers, attendance and muster rolls, and wage registers: whether they are complete, current and available for inspection.</p></div>
              <div className="ri-card"><h3>Wages</h3><p>Whether contract workers are paid at least the applicable minimum wage, on time, with wage slips, and whether the principal employer checks this.</p></div>
              <div className="ri-card"><h3>PF and ESI</h3><p>Whether eligible contract workers are enrolled and contributions are remitted, and how the plant checks contractors' challans and returns.</p></div>
              <div className="ri-card"><h3>Working hours and overtime</h3><p>Whether working hours, overtime approval and overtime payment are recorded and match attendance.</p></div>
              <div className="ri-card"><h3>Appointment letters</h3><p>Whether contract workers receive appointment letters from their employer.</p></div>
              <div className="ri-card"><h3>Welfare facilities</h3><p>Whether facilities such as drinking water, toilets, first aid and canteens are provided where contract labour works.</p></div>
              <div className="ri-card"><h3>Gate and attendance controls</h3><p>Whether entry checks such as identity, induction and licence validity run before a worker enters, and whether attendance data is reliable enough for wages and billing.</p></div>
            </div>
          </div>
        </section>

        <section className="ri-block" aria-labelledby="ri-h-report">
          <div className="ri-wrap">
            <p className="ri-kicker">Findings</p>
            <h2 id="ri-h-report">What the published report will include</h2>
            <p className="ri-intro">There are no findings yet. When the study is complete and reviewed, the report and its findings will be published on this page. It is planned to include:</p>
            <div className="ri-grid ri-g2">
              <div className="ri-card"><h3>Gaps by compliance area</h3><p>For each area above, how many plants were assessed and how many showed a gap.</p></div>
              <div className="ri-card"><h3>Causes</h3><p>Whether the most common gaps came from missing documents, broken processes or system limits.</p></div>
              <div className="ri-card"><h3>Comparisons</h3><p>Differences by plant size, sector, state and management approach, reported only where groups are large enough.</p></div>
              <div className="ri-card"><h3>The checklist and method</h3><p>The full assessment checklist, scoring definitions and limitations, so the work can be checked and reused.</p></div>
            </div>
            <p className="ri-note">Want to know when findings are published? <Link href="/contact">Contact us</Link> and ask to be notified.</p>
          </div>
        </section>

        <section className="ri-block ri-soft" aria-labelledby="ri-h-impl">
          <div className="ri-wrap">
            <p className="ri-kicker">Business implications</p>
            <h2 id="ri-h-impl">Why these areas matter to a principal employer</h2>
            <p className="ri-intro">The study will measure how often gaps occur. Why each area matters does not depend on its results: the principal employer carries responsibilities for contract labour on its site, even though the contractor is the direct employer.</p>
            <div className="ri-grid ri-g2">
              <div className="ri-card"><h3>Inspection exposure</h3><p>Licences, registers and wage records are core documents in a labour inspection, and the principal employer is responsible for its own site.</p></div>
              <div className="ri-card"><h3>Wage liability</h3><p>If a contractor fails to pay wages, the principal employer can be required to pay them and recover the amount from the contractor.</p></div>
              <div className="ri-card"><h3>Cost leakage</h3><p>When attendance, overtime and headcount are not reconciled with contractor invoices, a plant can pay for work that was not done.</p></div>
              <div className="ri-card"><h3>Operational and reputational risk</h3><p>Disputes over wages, hours or welfare can disrupt production and draw attention from customers and auditors.</p></div>
            </div>
          </div>
        </section>

        <section className="ri-block" aria-labelledby="ri-h-recs">
          <div className="ri-wrap">
            <p className="ri-kicker">Recommendations</p>
            <h2 id="ri-h-recs">What plants can do now</h2>
            <p className="ri-intro">These are general preparation steps, not study results. The published report will add recommendations based on its own findings.</p>
            <ol className="ri-steps">
              <li><h3>Map contractors and licences</h3><p>List every contractor on site, its licence status and its licensed headcount.</p></li>
              <li><h3>Check headcount daily</h3><p>Compare people at the gate with each licence limit, not only at month end.</p></li>
              <li><h3>Verify PF and ESI monthly</h3><p>Ask contractors for challans and returns, and match them to the workers on site.</p></li>
              <li><h3>Move registers to the new framework</h3><p>Confirm which registers and forms your state now prescribes, and update yours.</p></li>
              <li><h3>Reconcile before paying</h3><p>Match contractor invoices with verified attendance and approved overtime.</p></li>
              <li><h3>Control the gate</h3><p>Run identity, induction and licence checks before entry, not after.</p></li>
            </ol>
            <p className="ri-note">To review your own plant now, see the <Link href="/services/clra-compliance-audit">compliance audit service</Link> and <Link href="/contract-labour-management">Iddion RegX contract labour management</Link>.</p>
          </div>
        </section>

        <section className="ri-block ri-soft" aria-labelledby="ri-h-timeline">
          <div className="ri-wrap">
            <p className="ri-kicker">Study stages</p>
            <h2 id="ri-h-timeline">How the study will progress</h2>
            <p className="ri-intro">Dates have not been set. Each stage will be announced on this page as it begins.</p>
            <ol className="ri-timeline">
              <li><span className="ri-t-stage">1. Design</span><span>Checklist, scoring definitions and legal review</span></li>
              <li><span className="ri-t-stage">2. Recruitment</span><span>Invitations and written consent from 50 plants</span></li>
              <li><span className="ri-t-stage">3. Fieldwork</span><span>Assessments and interviews</span></li>
              <li><span className="ri-t-stage">4. Analysis and review</span><span>Scoring, aggregation and independent review</span></li>
              <li><span className="ri-t-stage">5. Publication</span><span>Report, checklist and findings on this page</span></li>
            </ol>
          </div>
        </section>

        <section className="ri-block" aria-labelledby="ri-h-guides">
          <div className="ri-wrap">
            <p className="ri-kicker">Insights</p>
            <h2 id="ri-h-guides">Practical guides from InOps</h2>
            <p className="ri-intro">Guidance for plant HR, compliance and security teams while the study is planned.</p>
            <div className="ri-grid ri-g3">
              <Link className="ri-card ri-link-card" href="/blog/factory-gate-entry-rules-contract-workers"><span className="ri-tag">Gate compliance</span><h3>Factory gate entry rules for contract workers</h3><p>The checks that should run before a contract worker walks in.</p></Link>
              <Link className="ri-card ri-link-card" href="/blog/vendor-management-contractors-manufacturing"><span className="ri-tag">Contractors</span><h3>Vendor management for contractors in manufacturing</h3><p>Licences, renewals, headcount caps and performance.</p></Link>
              <Link className="ri-card ri-link-card" href="/blog/what-is-contract-labour-management-system"><span className="ri-tag">CLMS</span><h3>Contract labour management system (CLMS) explained</h3><p>What a CLMS does and how it differs from an HRMS.</p></Link>
              <Link className="ri-card ri-link-card" href="/blog/clms-vs-hrms-difference"><span className="ri-tag">CLMS</span><h3>CLMS vs HRMS</h3><p>Why manufacturers usually need both, and where each fits.</p></Link>
              <Link className="ri-card ri-link-card" href="/contract-labour-management"><span className="ri-tag">Buyer&apos;s guide</span><h3>Contract labour management system (CLMS) software</h3><p>What to look for across permanent and contract workforces.</p></Link>
              <Link className="ri-card ri-link-card" href="/blog/10-signs-factory-outgrown-spreadsheet-contractor-management"><span className="ri-tag">Operations</span><h3>10 signs you&apos;ve outgrown spreadsheets</h3><p>When contractor management needs a system.</p></Link>
            </div>
            <p className="ri-note">More articles on the <Link href="/blog">InOps blog</Link>.</p>
          </div>
        </section>

        <section className="ri-block ri-soft" aria-labelledby="ri-h-faq">
          <div className="ri-wrap">
            <p className="ri-kicker">FAQs</p>
            <h2 id="ri-h-faq">About the study</h2>
            <div className="ri-faq">
              <details><summary>Has this research been conducted?</summary><p>Not yet. Contract Labour Compliance Gaps in 50 Indian Plants is a proposed InOps study. No plant data has been collected and no findings have been published.</p></details>
              <details><summary>When will results be published?</summary><p>No publication date has been set. Findings will be published on this page only after fieldwork, analysis and review are complete. <a href="#ri-interest-form">Register interest</a> to be notified.</p></details>
              <details><summary>Which plants can take part?</summary><p>The study is planned for manufacturing plants in India that engage contract labour through contractors. Inclusion criteria will be published before recruitment opens. <a href="#ri-interest-form">Register interest</a> to be notified when recruitment opens.</p></details>
              <details><summary>Will participating plants be named?</summary><p>No. Results will be reported only in aggregate, and only for groups large enough that no single plant can be identified.</p></details>
              <details><summary>Do participants need to use InOps software?</summary><p>No. The study is planned to include InOps customers and non-customers, and the mix will be reported with the results.</p></details>
              <details><summary>Which laws will the study assess against?</summary><p>The Labour Codes in force since 21 November 2025, mainly the Occupational Safety, Health and Working Conditions Code, 2020, the Code on Wages, 2019 and the Code on Social Security, 2020, together with the rules in force in each plant's state at the time of assessment.</p></details>
            </div>
          </div>
        </section>

        <section className="ri-cta" aria-labelledby="ri-h-cta">
          <div className="ri-wrap">
            <h2 id="ri-h-cta">Register interest in the study</h2>
            <p>Leave your details and we&apos;ll notify you when fieldwork opens or findings are published.</p>
            <RegisterInterestForm />
            <p style={{ marginTop: "1.25rem", fontSize: "0.95rem", color: "var(--ink-on-deep-2)" }}>
              Or <Link href="/contact" style={{ color: "var(--ink-on-deep-2)", fontWeight: 600 }}>talk to our team</Link> about the study or Iddion RegX.
            </p>
          </div>
        </section>
      </main>

      <footer className="ri-site-footer">
        <div className="ri-wrap">
          <div className="ri-f-top">
            <div className="ri-f-brand">
              <Link href="/" aria-label="InOps Solutions home"><img src="https://inops.tech/logo.png" alt="InOps Solutions" height={34} /></Link>
              <p>Enterprise workforce compliance and hardware, integrated so your teams run operations, not spreadsheets.</p>
              <div className="ri-cta-row">
                <Link className="ri-btn ri-btn-primary" href="/contact">Schedule a demo</Link>
                <a className="ri-btn ri-btn-ghost" href="tel:+918027745220">Call sales</a>
              </div>
              <div className="ri-f-links">
                <a href="https://in.linkedin.com/company/inops-it-solutions-pvt-ltd" rel="noopener">LinkedIn</a>
                <a href="https://x.com/InOpstweets" rel="noopener">X</a>
                <a href="https://www.facebook.com/people/InOps-Solutions/61552352699183/" rel="noopener">Facebook</a>
              </div>
            </div>
            <nav aria-labelledby="ri-f-services">
              <h2 id="ri-f-services">Services</h2>
              <ul>
                <li><Link href="/services/background-verification">Background Verification</Link></li>
                <li><Link href="/services/biometric-amc">Biometric AMC</Link></li>
                <li><Link href="/services/biometric-database-audit">Biometric Database Audit</Link></li>
                <li><Link href="/services/clra-compliance-audit">CLRA Compliance Audit</Link></li>
                <li><Link href="/services/industrial-manpower-supply">Industrial Manpower Supply</Link></li>
              </ul>
            </nav>
            <nav aria-labelledby="ri-f-products">
              <h2 id="ri-f-products">Products</h2>
              <ul>
                <li><Link href="/face-recognition-attendance">Face Reader</Link></li>
                <li><Link href="/biometric-devices">Biometric Devices</Link></li>
                <li><Link href="/accessories">Accessories</Link></li>
                <li><Link href="/turnstiles-access">Gate Access Control</Link></li>
                <li><Link href="/self-service-kiosk">Self-Service Kiosk</Link></li>
              </ul>
            </nav>
            <nav aria-labelledby="ri-f-solutions">
              <h2 id="ri-f-solutions">Solutions</h2>
              <ul>
                <li><Link href="/contract-labour-management">Contract Labour Management</Link></li>
                <li><Link href="/hris">HR Information System</Link></li>
                <li><Link href="/canteen-and-visitor">Canteen &amp; Visitor Management</Link></li>
                <li><Link href="/mobile-app-attendance">Mobile App</Link></li>
                <li><Link href="/cctv-attendance">CCTV Attendance</Link></li>
                <li><Link href="/earned-wage-access">EWA (Earned Wage Access)</Link></li>
              </ul>
            </nav>
            <div>
              <h2>Head office</h2>
              <address>60A, Bommasandra Link Road,<br />Bommasandra Industrial Area,<br />Bengaluru, Karnataka 560099<br /><a href="mailto:contact@inops.tech">contact@inops.tech</a><br /><a href="tel:+918027745220">+91 80277 45220</a></address>
              <h2 style={{ marginTop: "1.25rem" }}>Company</h2>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/brochures">Brochures</Link></li>
                <li><Link href="/research-insights">Research &amp; Insights</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="ri-f-bottom">
            <span>© 2026 InOps Solutions. All rights reserved.</span>
            <span>The study described on this page is proposed and has not yet been conducted.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
