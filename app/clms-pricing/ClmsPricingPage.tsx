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
.cp-wrap{max-width:var(--wrap);margin:0 auto;padding:0 1.25rem}
.cp-skip{position:absolute;left:-9999px;top:0;background:var(--brand);color:var(--brand-ink);padding:.6rem 1rem;z-index:100;border-radius:0 0 8px 0}
.cp-skip:focus{left:0}
.cp-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.cp-site-header{position:sticky;top:0;z-index:50;background:var(--bg);border-bottom:1px solid var(--line);padding-top:env(safe-area-inset-top,0px)}
.cp-bar{display:flex;align-items:center;justify-content:space-between;gap:1rem;height:72px}
.cp-logo img{height:36px;width:auto;display:block}
.cp-nav{display:flex;align-items:center;gap:.25rem}
.cp-nav>ul{list-style:none;margin:0;padding:0;display:flex;align-items:center;gap:.25rem}
.cp-nav a.cp-top,.cp-nav button.cp-top{font:inherit;font-weight:550;font-size:.95rem;color:var(--ink);text-decoration:none;background:none;border:0;padding:.55rem .8rem;border-radius:8px;cursor:pointer;display:inline-flex;align-items:center;gap:.35rem}
.cp-nav a.cp-top:hover,.cp-nav button.cp-top:hover{background:var(--bg-soft)}
.cp-nav button.cp-top svg{width:12px;height:12px;transition:transform .15s}
.cp-nav button.cp-top[aria-expanded="true"] svg{transform:rotate(180deg)}
.cp-has-menu{position:relative}
.cp-menu{position:absolute;top:calc(100% + 6px);left:0;min-width:260px;background:var(--bg);border:1px solid var(--line);border-radius:var(--radius);box-shadow:0 12px 32px rgba(15,30,51,.12);padding:.5rem;list-style:none;margin:0}
.cp-menu[hidden]{display:none}
.cp-menu a{display:block;padding:.5rem .7rem;border-radius:8px;color:var(--ink);text-decoration:none;font-size:.93rem}
.cp-menu a:hover{background:var(--bg-soft)}
.cp-btn{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;font:inherit;font-weight:650;font-size:.95rem;text-decoration:none;border-radius:10px;padding:.75rem 1.2rem;border:1.5px solid transparent;cursor:pointer;line-height:1.2}
.cp-btn-primary{background:var(--brand);color:var(--brand-ink)}
.cp-btn-primary:hover{filter:brightness(1.08)}
.cp-btn-ghost{border-color:currentColor;color:var(--ink);background:transparent}
.cp-menu-toggle{display:none;font:inherit;background:none;border:1.5px solid var(--line);border-radius:8px;padding:.5rem .7rem;color:var(--ink);cursor:pointer}
.cp-crumbs{font-size:.875rem;color:var(--ink-2);padding:1.25rem 0 0}
.cp-crumbs ol{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:.35rem}
.cp-crumbs li+li::before{content:"/";margin-right:.35rem;color:var(--line)}
.cp-crumbs a{color:var(--ink-2)}
.cp-hero{padding:2.5rem 0 3.25rem}
.cp-eyebrow{display:inline-block;font-size:.85rem;font-weight:650;color:var(--brand);background:var(--brand-soft);padding:.3rem .7rem;border-radius:999px;margin-bottom:1rem}
.cp-hero h1{font-size:clamp(2rem,4.4vw,3.25rem);line-height:1.1;letter-spacing:-.02em;margin:0 0 1rem;max-width:20ch}
.cp-lede{font-size:1.15rem;color:var(--ink-2);max-width:64ch;margin:0 0 1.75rem}
.cp-hero-actions{display:flex;flex-wrap:wrap;gap:.75rem}
.cp-hero-note{margin-top:1.25rem;font-size:.9rem;color:var(--ink-2)}
section.cp-block{padding:3.5rem 0;border-top:1px solid var(--line)}
section.cp-soft{background:var(--bg-soft)}
.cp-kicker{font-size:.85rem;font-weight:650;color:var(--brand);margin:0 0 .5rem}
.cp-block h2{font-size:clamp(1.6rem,3vw,2.2rem);line-height:1.2;letter-spacing:-.015em;margin:0 0 .75rem}
.cp-block h3{font-size:1.1rem;line-height:1.35;margin:0 0 .4rem}
.cp-intro{color:var(--ink-2);max-width:68ch;margin:0 0 2rem}
.cp-grid{display:grid;gap:1rem}
.cp-g3{grid-template-columns:repeat(3,minmax(0,1fr))}
.cp-g2{grid-template-columns:repeat(2,minmax(0,1fr))}
.cp-card{background:var(--bg);border:1px solid var(--line);border-radius:var(--radius);padding:1.4rem}
section.cp-soft .cp-card{background:var(--bg)}
.cp-card p{margin:.35rem 0 0;color:var(--ink-2);font-size:.97rem}
.cp-card ul{margin:.6rem 0 0;padding-left:1.1rem;color:var(--ink-2);font-size:.95rem}
.cp-card li{margin:.25rem 0}
.cp-num{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;background:var(--brand-soft);color:var(--brand);font-weight:700;font-size:.9rem;margin-bottom:.75rem}
.cp-modules{columns:2;column-gap:2rem;padding-left:1.1rem;margin:.6rem 0 0}
.cp-modules li{break-inside:avoid;margin:.3rem 0}
.cp-table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:var(--radius);background:var(--bg)}
.cp-table-wrap table{border-collapse:collapse;width:100%;min-width:640px;font-size:.96rem}
.cp-table-wrap caption{text-align:left;padding:1rem 1.1rem .25rem;font-weight:650}
.cp-table-wrap th,.cp-table-wrap td{text-align:left;vertical-align:top;padding:.85rem 1.1rem;border-bottom:1px solid var(--line)}
.cp-table-wrap thead th{font-size:.85rem;color:var(--ink-2);font-weight:650;background:var(--bg-soft)}
.cp-table-wrap tbody tr:last-child td,.cp-table-wrap tbody tr:last-child th{border-bottom:0}
.cp-table-wrap tbody th{font-weight:650}
.cp-note{background:var(--note);color:var(--note-ink);border-radius:var(--radius);padding:1rem 1.2rem;font-size:.95rem;margin-top:1.5rem}
.cp-steps{list-style:none;counter-reset:s;margin:0;padding:0;display:grid;gap:1rem;grid-template-columns:repeat(4,minmax(0,1fr))}
.cp-steps li{counter-increment:s;background:var(--bg);border:1px solid var(--line);border-radius:var(--radius);padding:1.3rem}
.cp-steps li::before{content:counter(s);display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--brand);color:var(--brand-ink);font-weight:700;margin-bottom:.7rem}
.cp-steps p{margin:.3rem 0 0;color:var(--ink-2);font-size:.95rem}
.cp-checklist{list-style:none;padding:0;margin:0;display:grid;gap:.6rem;grid-template-columns:repeat(2,minmax(0,1fr))}
.cp-checklist li{position:relative;padding-left:1.7rem}
.cp-checklist li::before{content:"";position:absolute;left:0;top:.45em;width:1rem;height:1rem;border-radius:4px;border:2px solid var(--brand)}
.cp-faq{max-width:860px}
.cp-faq details{border-bottom:1px solid var(--line)}
.cp-faq summary{list-style:none;cursor:pointer;padding:1.1rem 2.5rem 1.1rem 0;font-weight:650;font-size:1.05rem;position:relative}
.cp-faq summary::-webkit-details-marker{display:none}
.cp-faq summary::after{content:"+";position:absolute;right:.25rem;top:50%;transform:translateY(-50%);font-size:1.5rem;font-weight:400;color:var(--brand)}
.cp-faq details[open] summary::after{content:"–"}
.cp-faq details p{margin:0 0 1.2rem;color:var(--ink-2);max-width:72ch}
.cp-cta{background:var(--bg-deep);color:var(--ink-on-deep);padding:3.5rem 0}
.cp-cta h2{color:var(--ink-on-deep)}
.cp-cta p{color:var(--ink-on-deep-2);max-width:62ch;margin:0 0 1.5rem}
.cp-cta .cp-btn-ghost{color:var(--ink-on-deep)}
.cp-cta-row{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center}
.cp-site-footer{background:var(--bg-soft);border-top:1px solid var(--line);padding:3rem 0 2rem;font-size:.93rem}
.cp-f-top{display:grid;grid-template-columns:1.4fr repeat(4,1fr);gap:2rem}
.cp-f-brand img{height:34px;width:auto}
.cp-f-brand p{color:var(--ink-2);margin:.9rem 0 1rem;max-width:34ch}
.cp-f-links{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:.9rem}
.cp-f-links a{color:var(--ink-2)}
.cp-site-footer h2{font-size:.95rem;margin:0 0 .75rem;letter-spacing:0}
.cp-site-footer ul{list-style:none;margin:0;padding:0}
.cp-site-footer li{margin:.4rem 0}
.cp-site-footer a{color:var(--ink);text-decoration:none}
.cp-site-footer a:hover{color:var(--brand);text-decoration:underline}
.cp-site-footer address{font-style:normal;color:var(--ink-2)}
.cp-f-bottom{margin-top:2.5rem;padding-top:1.25rem;border-top:1px solid var(--line);color:var(--ink-2);display:flex;justify-content:space-between;flex-wrap:wrap;gap:.75rem}
@media (max-width:1000px){.cp-g3{grid-template-columns:repeat(2,minmax(0,1fr))}.cp-steps{grid-template-columns:repeat(2,minmax(0,1fr))}.cp-f-top{grid-template-columns:repeat(2,1fr)}.cp-f-brand{grid-column:1 / -1}.cp-modules{columns:1}}
@media (max-width:860px){.cp-menu-toggle{display:inline-flex}.cp-nav{position:absolute;left:0;right:0;top:100%;background:var(--bg);border-bottom:1px solid var(--line);padding:.75rem 1.25rem 1.25rem;display:none;flex-direction:column;align-items:stretch}.cp-nav.open{display:flex}.cp-nav>ul{flex-direction:column;align-items:stretch}.cp-menu{position:static;box-shadow:none;border:0;padding:0 0 .5rem .75rem;min-width:0}.cp-nav .cp-btn{margin-top:.5rem}}
@media (max-width:640px){.cp-g3,.cp-g2,.cp-steps,.cp-checklist{grid-template-columns:1fr}.cp-f-top{grid-template-columns:1fr}.cp-hero{padding:1.75rem 0 2.5rem}section.cp-block{padding:2.75rem 0}}
@media (prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}
@media print{.cp-site-header,.cp-cta,.cp-site-footer{display:none}}
`;

const jsonLd = `{
  "@context":"https://schema.org",
  "@graph":[
    {"@type":"WebPage","@id":"https://inops.tech/clms-pricing#webpage","url":"https://inops.tech/clms-pricing","name":"CLMS Software Pricing in India | Iddion RegX by InOps","description":"How Iddion RegX contract labour management software (CLMS) is priced in India.","inLanguage":"en-IN","dateModified":"2026-10-24","isPartOf":{"@id":"https://inops.tech/#website"},"publisher":{"@id":"https://inops.tech/#organization"}},
    {"@type":"SoftwareApplication","@id":"https://inops.tech/clms-pricing#software","name":"Iddion RegX","alternateName":"Iddion RegX CLMS","applicationCategory":"BusinessApplication","description":"Contract labour management system (CLMS) for Indian manufacturing and industrial sites.","url":"https://inops.tech/contract-labour-management","publisher":{"@id":"https://inops.tech/#organization"}},
    {"@type":"Organization","@id":"https://inops.tech/#organization","name":"InOps Solutions","url":"https://inops.tech/","logo":"https://inops.tech/logo.png","email":"contact@inops.tech","telephone":"+91-80-2774-5220","address":{"@type":"PostalAddress","streetAddress":"60A, Bommasandra Link Road, Bommasandra Industrial Area","addressLocality":"Bengaluru","addressRegion":"Karnataka","postalCode":"560099","addressCountry":"IN"}}
  ]
}`;

export default function ClmsPricingPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />


      <main id="cp-main">
        <div className="cp-wrap">
          <nav className="cp-crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/contract-labour-management">Contract Labour Management</Link></li>
              <li><span aria-current="page">CLMS Pricing</span></li>
            </ol>
          </nav>
          <section className="cp-hero" aria-labelledby="cp-h1">
            <span className="cp-eyebrow">Iddion RegX · Pricing</span>
            <h1 id="cp-h1">CLMS Software Pricing in India</h1>
            <p className="cp-lede">Iddion RegX, InOps&apos;s contract labour management system, is quoted for each deployment rather than sold from a public price list. What you pay depends on how many contract workers and sites you manage, the modules you choose, where the system is hosted, what it connects to, and whether you need gate or biometric hardware.</p>
            <div className="cp-hero-actions">
              <Link
                className="cp-btn cp-btn-primary"
                href="/contact"
                onClick={() => {
                  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
                  gtag?.("event", "generate_lead", { source: "clms_pricing_hero" });
                }}
              >
                Get a Quote
              </Link>
              <Link className="cp-btn cp-btn-ghost" href="/contact">Book a demo</Link>
            </div>
            <p className="cp-hero-note">This page explains how pricing is worked out. It does not publish rates; a quote applies only when InOps issues it to you in writing.</p>
          </section>
        </div>

        <section className="cp-block" aria-labelledby="cp-h-why">
          <div className="cp-wrap">
            <p className="cp-kicker">How pricing works</p>
            <h2 id="cp-h-why">Why a CLMS is quoted, not listed</h2>
            <p className="cp-intro">A contract labour management system sits between your gates, your contractors, your payroll and your compliance records. Two plants with the same headcount can need very different setups: one may use a hosted system with a few modules, another an on-premises system with gate hardware and integrations at every site. A scoped quote reflects what you actually deploy.</p>
            <div className="cp-grid cp-g3">
              <div className="cp-card"><h3>Software</h3><p>Iddion RegX itself: the modules you choose, for the workforce and sites in scope.</p></div>
              <div className="cp-card"><h3>Services</h3><p>Implementation, configuration, data migration, integrations, training and ongoing support.</p></div>
              <div className="cp-card"><h3>Hardware</h3><p>Any biometric terminals, gate barriers, kiosks and accessories, with installation and maintenance, quoted separately.</p></div>
            </div>
          </div>
        </section>

        <section className="cp-block cp-soft" aria-labelledby="cp-h-factors">
          <div className="cp-wrap">
            <p className="cp-kicker">Cost factors</p>
            <h2 id="cp-h-factors">What affects the price of Iddion RegX</h2>
            <p className="cp-intro">These are the inputs a quote is built from. The more of them you can share up front, the faster and more accurate the quote.</p>
            <div className="cp-grid cp-g3">
              <div className="cp-card"><span className="cp-num" aria-hidden="true">1</span><h3>Contract workforce size</h3><p>How many contract workers and contractors the system will manage, including seasonal peaks.</p></div>
              <div className="cp-card"><span className="cp-num" aria-hidden="true">2</span><h3>Sites and gates</h3><p>The number of plants, offices or project sites, and the entry points at each, in this phase and later ones.</p></div>
              <div className="cp-card"><span className="cp-num" aria-hidden="true">3</span><h3>Hosting</h3><p>A hosted deployment, or on-premises in your own data centre, where your IT team typically provides servers, network, operating system, database and backups.</p></div>
              <div className="cp-card"><span className="cp-num" aria-hidden="true">4</span><h3>Integrations</h3><p>Connections to your ERP, payroll, HR or access-control systems, and how data needs to flow between them.</p></div>
              <div className="cp-card"><span className="cp-num" aria-hidden="true">5</span><h3>Data migration</h3><p>Moving contractor, worker, licence and attendance records from spreadsheets or an existing system.</p></div>
              <div className="cp-card"><span className="cp-num" aria-hidden="true">6</span><h3>Support and maintenance</h3><p>Ongoing support and annual maintenance for the application, plus on-site engineers if your operations need them.</p></div>
            </div>
            <div className="cp-card" style={{ marginTop: "1rem" }}>
              <span className="cp-num" aria-hidden="true">7</span>
              <h3>Modules you choose</h3>
              <p>Iddion RegX is modular, so you can start with the modules you need and add others later. Available modules:</p>
              <ul className="cp-modules">
                <li><Link href="/contract-labour-management/iddion-regx-modules/attendance-leave">Attendance management</Link></li>
                <li><Link href="/contract-labour-management/iddion-regx-modules/wage-payroll">Contractor payroll</Link></li>
                <li><Link href="/contract-labour-management/iddion-regx-modules/contractor-management">Vendor and contractor management</Link></li>
                <li><Link href="/contract-labour-management/iddion-regx-modules/cxo-dashboard">HR dashboard and workforce analytics</Link></li>
                <li><Link href="/contract-labour-management/iddion-regx-modules/background-verification">Worker verification and BGV</Link></li>
                <li><Link href="/contract-labour-management/iddion-regx-modules/ai-assistance">AI assistance</Link></li>
                <li><Link href="/contract-labour-management/iddion-regx-modules/compliance-report">Compliance management and registers</Link></li>
                <li><Link href="/contract-labour-management/iddion-regx-modules/challan-reconciliation">Challan reconciliation</Link></li>
                <li><Link href="/contract-labour-management/iddion-regx-modules/gate-compliance">Gate compliance and auto-blocking</Link></li>
                <li><Link href="/contract-labour-management/iddion-regx-modules/onboarding-offboarding">Contractor onboarding and offboarding</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cp-block" aria-labelledby="cp-h-quote">
          <div className="cp-wrap">
            <p className="cp-kicker">Inside a quote</p>
            <h2 id="cp-h-quote">What an Iddion RegX quote typically covers</h2>
            <p className="cp-intro">Every line depends on your scope, and not every quote has every line. The commercial model, for example a one-time licence with annual maintenance or a recurring fee, is set out in the quote for your deployment.</p>
            <div className="cp-table-wrap">
              <table>
                <caption className="cp-sr">Typical line items in an Iddion RegX quote</caption>
                <thead><tr><th scope="col">Line item</th><th scope="col">What it covers</th><th scope="col">Mainly depends on</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Software</th><td>Use of Iddion RegX and the modules in scope</td><td>Workforce size, sites, modules, hosting</td></tr>
                  <tr><th scope="row">Implementation</th><td>Setup and configuration of your sites, contractors, shifts and rules</td><td>Sites, modules, how much your rules vary by site</td></tr>
                  <tr><th scope="row">Data migration</th><td>Importing existing contractor, worker and licence records</td><td>Data volume and the quality of current records</td></tr>
                  <tr><th scope="row">Integrations</th><td>Connecting to ERP, payroll, HR or access-control systems</td><td>Number of systems and the data each one exchanges</td></tr>
                  <tr><th scope="row">Training</th><td>Training for HR, compliance, security and plant teams</td><td>Number of sites and user groups</td></tr>
                  <tr><th scope="row">Hardware</th><td>Terminals, barriers, kiosks, accessories and installation</td><td>Gates, throughput, existing devices</td></tr>
                  <tr><th scope="row">Support and maintenance</th><td>Ongoing application support and annual maintenance</td><td>Support coverage and any on-site engineers</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="cp-block cp-soft" aria-labelledby="cp-h-impl">
          <div className="cp-wrap">
            <p className="cp-kicker">Implementation and integration</p>
            <h2 id="cp-h-impl">What to plan for before rollout</h2>
            <p className="cp-intro">Most of the effort in a CLMS rollout goes into getting sites, data and connections ready. Settling these points early keeps the quote and the project plan accurate.</p>
            <div className="cp-grid cp-g2">
              <div className="cp-card"><h3>Phasing across sites</h3><p>Multi-plant organisations can roll out site by site, so each plant moves when it is ready. The order and timing of each phase are agreed in the project plan, and the timeline depends on your sites, modules, integrations and data readiness.</p></div>
              <div className="cp-card"><h3>On-premises prerequisites</h3><ul><li>Servers sized to your workforce and sites, provided by your IT team</li><li>Network, operating system, database and backup ownership agreed</li><li>Secure remote access for application support, such as a VPN</li><li>Time for your security and infrastructure review</li></ul></div>
              <div className="cp-card"><h3>Data readiness</h3><ul><li>Contractor master list, with licence and work-order details</li><li>Worker records and identity documents</li><li>Shift, overtime and wage rules for each site</li><li>Historical attendance, if it needs to carry over</li></ul></div>
              <div className="cp-card"><h3>Systems to connect</h3><p>List the ERP, payroll, HR and access-control systems Iddion RegX must exchange data with, and which system is the source of truth for each record. Each integration is scoped separately in the quote.</p><p>See how RegX and an HR system fit together: <Link href="/blog/clms-vs-hrms-difference">CLMS vs HRMS</Link> and <Link href="/hris">Iddion HRIS</Link>.</p></div>
            </div>
          </div>
        </section>

        <section className="cp-block" aria-labelledby="cp-h-hw">
          <div className="cp-wrap">
            <p className="cp-kicker">Hardware costs</p>
            <h2 id="cp-h-hw">Biometric and gate hardware is priced separately</h2>
            <p className="cp-intro">You may not need new hardware at all. Iddion RegX works with ZKTeco face and fingerprint terminals, CCTV-based attendance, QR code readers and card systems, so compatible devices you already own can often stay. Where new hardware is needed, InOps supplies and installs it, and each item appears on your quote as its own line.</p>
            <div className="cp-grid cp-g3">
              <div className="cp-card"><h3>Attendance terminals</h3><p><Link href="/face-recognition-attendance">Face readers</Link> and <Link href="/biometric-devices">biometric devices</Link>, sized to gate throughput and shift changes.</p></div>
              <div className="cp-card"><h3>Gate barriers</h3><p><Link href="/turnstiles-access">Turnstiles and gate access control</Link> where entry needs to be physically controlled.</p></div>
              <div className="cp-card"><h3>Kiosks and accessories</h3><p><Link href="/self-service-kiosk">Self-service kiosks</Link> and <Link href="/accessories">accessories</Link> such as mounts and enclosures.</p></div>
              <div className="cp-card"><h3>Camera and mobile options</h3><p><Link href="/cctv-attendance">CCTV attendance</Link> and the <Link href="/mobile-app-attendance">mobile app</Link> can reduce the number of dedicated terminals at some sites.</p></div>
              <div className="cp-card"><h3>Installation</h3><p>Site survey, cabling, mounting and commissioning, which vary with each gate&apos;s layout.</p></div>
              <div className="cp-card"><h3>Device maintenance</h3><p>Ongoing upkeep through a <Link href="/services/biometric-amc">biometric AMC</Link>, quoted separately from software support.</p></div>
            </div>
            <p className="cp-note"><strong>Tip:</strong> include the make, model and number of your current devices when you ask for a quote, so compatibility can be checked before any new hardware is priced.</p>
          </div>
        </section>

        <section className="cp-block cp-soft" aria-labelledby="cp-h-compare">
          <div className="cp-wrap">
            <p className="cp-kicker">Comparing quotes</p>
            <h2 id="cp-h-compare">Questions to ask any CLMS vendor</h2>
            <p className="cp-intro">Whichever system you choose, these questions make quotes comparable and avoid surprises after go-live.</p>
            <ul className="cp-checklist">
              <li>What exactly does the software fee cover, and for how many workers and sites?</li>
              <li>Which costs are one-time, and which recur every year?</li>
              <li>Are implementation, data migration and training included or extra?</li>
              <li>How is each integration scoped and priced?</li>
              <li>What does annual support or maintenance cover, and during what hours?</li>
              <li>Which of our existing devices can we keep?</li>
              <li>What happens to cost when we add sites, modules or workers?</li>
              <li>Who owns the servers, backups and security patches if we host on-premises?</li>
            </ul>
          </div>
        </section>

        <section className="cp-block" aria-labelledby="cp-h-steps">
          <div className="cp-wrap">
            <p className="cp-kicker">Getting a quote</p>
            <h2 id="cp-h-steps">How to get an Iddion RegX quote</h2>
            <ol className="cp-steps">
              <li><h3>Contact us</h3><p><Link href="/contact">Fill in the contact form</Link> with the details below and we&apos;ll follow up within one business day.</p></li>
              <li><h3>Scoping call</h3><p>The InOps team follows up to understand your sites, contractors and compliance needs.</p></li>
              <li><h3>Demo</h3><p>See the modules you&apos;re considering, mapped to your own workflow.</p></li>
              <li><h3>Written quote</h3><p>You receive a quote with each line item set out.</p></li>
            </ol>
            <div className="cp-card" style={{ marginTop: "1.5rem" }}>
              <h3>What to include in your email</h3>
              <ul>
                <li>Number of sites, and which you would start with</li>
                <li>Approximate number of contract workers and contractors</li>
                <li>Modules you&apos;re interested in</li>
                <li>Hosted or on-premises preference</li>
                <li>Systems to integrate (ERP, payroll, HR, access control)</li>
                <li>Existing biometric or gate devices (make, model, count)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cp-block cp-soft" aria-labelledby="cp-h-faq">
          <div className="cp-wrap">
            <p className="cp-kicker">FAQs</p>
            <h2 id="cp-h-faq">CLMS pricing questions</h2>
            <div className="cp-faq">
              <details><summary>Does InOps publish a price list for Iddion RegX?</summary><p>No. Iddion RegX is quoted per deployment, because the cost depends on your workforce size, sites, modules, hosting, integrations and hardware. Email contact@inops.tech to start a scoping conversation.</p></details>
              <details><summary>What affects the cost of a CLMS in India?</summary><p>The main factors are the number of contract workers and contractors managed, the number of sites and gates, the modules you need, whether you host on-premises or use a hosted deployment, integrations with existing systems, data migration, support coverage and any biometric or gate hardware.</p></details>
              <details><summary>Is biometric or gate hardware included in the software price?</summary><p>Hardware is scoped separately from the software. Your quote lists any face readers, fingerprint terminals, turnstiles, kiosks, accessories, installation and device maintenance as their own items, based on your gates and existing devices.</p></details>
              <details><summary>Can Iddion RegX be deployed on-premises?</summary><p>Yes. Iddion RegX can run in your own data centre. In an on-premises deployment your IT team typically provides the servers, network, operating system, database and backups, and the support arrangement for the application is agreed in the contract.</p></details>
              <details><summary>Can we start with one site and add more later?</summary><p>Phased, site-by-site rollouts are possible, and the scope of each phase is agreed during scoping. Tell us how many sites you plan to cover and in what order when you request a quote.</p></details>
              <details><summary>Can we reuse our existing biometric devices?</summary><p>Often, if they are compatible. Iddion RegX works with ZKTeco face and fingerprint terminals, CCTV-based attendance, QR code readers and card systems. Share your current device makes and models so compatibility can be checked before you are quoted for new hardware.</p></details>
              <details><summary>How do I get a quote for Iddion RegX?</summary><p>Email contact@inops.tech with your number of sites, approximate contract workforce, modules of interest, preferred hosting and the systems you want to integrate. The InOps team will follow up to scope the requirement and then share a quote.</p></details>
            </div>
          </div>
        </section>

        <section className="cp-cta" aria-labelledby="cp-h-cta">
          <div className="cp-wrap">
            <h2 id="cp-h-cta">Get a CLMS quote for your plants</h2>
            <p>Tell us about your sites, contract workforce and systems, and we&apos;ll scope Iddion RegX for your operation.</p>
            <div className="cp-cta-row">
              <Link
                className="cp-btn cp-btn-primary"
                href="/contact"
                onClick={() => {
                  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
                  gtag?.("event", "generate_lead", { source: "clms_pricing_cta" });
                }}
              >
                Get a quote
              </Link>
              <Link className="cp-btn cp-btn-ghost" href="/contact">Book a demo</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="cp-site-footer">
        <div className="cp-wrap">
          <div className="cp-f-top">
            <div className="cp-f-brand">
              <Link href="/" aria-label="InOps Solutions home"><img src="https://inops.tech/logo.png" alt="InOps Solutions" height={34} /></Link>
              <p>Enterprise workforce compliance and hardware, integrated so your teams run operations, not spreadsheets.</p>
              <div className="cp-cta-row">
                <Link className="cp-btn cp-btn-primary" href="/contact">Schedule a demo</Link>
                <a className="cp-btn cp-btn-ghost" href="tel:+918027745220">Call sales</a>
              </div>
              <div className="cp-f-links">
                <a href="https://in.linkedin.com/company/inops-it-solutions-pvt-ltd" rel="noopener">LinkedIn</a>
                <a href="https://x.com/InOpstweets" rel="noopener">X</a>
                <a href="https://www.facebook.com/people/InOps-Solutions/61552352699183/" rel="noopener">Facebook</a>
              </div>
            </div>
            <nav aria-labelledby="cp-f-services">
              <h2 id="cp-f-services">Services</h2>
              <ul>
                <li><Link href="/services/background-verification">Background Verification</Link></li>
                <li><Link href="/services/biometric-amc">Biometric AMC</Link></li>
                <li><Link href="/services/biometric-database-audit">Biometric Database Audit</Link></li>
                <li><Link href="/services/clra-compliance-audit">CLRA Compliance Audit</Link></li>
                <li><Link href="/services/industrial-manpower-supply">Industrial Manpower Supply</Link></li>
              </ul>
            </nav>
            <nav aria-labelledby="cp-f-products">
              <h2 id="cp-f-products">Products</h2>
              <ul>
                <li><Link href="/face-recognition-attendance">Face Reader</Link></li>
                <li><Link href="/biometric-devices">Biometric Devices</Link></li>
                <li><Link href="/accessories">Accessories</Link></li>
                <li><Link href="/turnstiles-access">Gate Access Control</Link></li>
                <li><Link href="/self-service-kiosk">Self-Service Kiosk</Link></li>
              </ul>
            </nav>
            <nav aria-labelledby="cp-f-solutions">
              <h2 id="cp-f-solutions">Solutions</h2>
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
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="cp-f-bottom">
            <span>© 2026 InOps Solutions. All rights reserved.</span>
            <span>Prices are quoted per deployment and apply only when issued in writing by InOps.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
