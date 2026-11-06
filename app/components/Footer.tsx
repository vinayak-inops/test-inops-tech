"use client";

import Image from "next/image";
import BrandLogoImage from "@/app/components/BrandLogoImage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OFFICE_ADDRESS_LINE, SOCIAL_LINKS } from "@/app/lib/site";

const services = [
  { label: "Background Verification", href: "/services/background-verification" },
  { label: "Biometric AMC", href: "/services/biometric-amc" },
  { label: "Biometric Database Audit", href: "/services/biometric-database-audit" },
  { label: "CLRA Compliance Audit", href: "/services/clra-compliance-audit" },
  { label: "Industrial Manpower Supply", href: "/services/industrial-manpower-supply" },
];

const products = [
  { label: "Face Reader", href: "/face-recognition-attendance" },
  { label: "Biometric Devices", href: "/biometric-devices" },
  { label: "Accessories", href: "/accessories" },
  { label: "Gate Access Control", href: "/turnstiles-access" },
  { label: "Self-Service Kiosk", href: "/self-service-kiosk" },
];

const solutions = [
  { label: "Contract Labour Management", href: "/contract-labour-management" },
  { label: "HR Information System", href: "/hris" },
  { label: "Canteen & Visitor Management", href: "/canteen-and-visitor" },
  { label: "Mobile App", href: "/mobile-app-attendance" },
  { label: "CCTV Attendance", href: "/cctv-attendance" },
  // { label: "Supply Chain Management", href: "/enterprise-solution" },
  { label: "EWA (Earned Wage Access)", href: "/earned-wage-access" },
];

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Brochures", href: "/brochures" },
  { label: "Glossary", href: "/glossary" },
  { label: "CLMS Pricing", href: "/clms-pricing" },
];

const socialLinks = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: "linkedin" as const },
  { label: "Twitter / X", href: SOCIAL_LINKS.twitter, icon: "twitter" as const },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, icon: "facebook" as const },
];

type NavItem = { label: string; href: string };

function orderWithActiveFirst(items: NavItem[], pathname: string) {
  const activeIndex = items.findIndex((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));
  if (activeIndex <= 0) return items;
  return [items[activeIndex], ...items.slice(0, activeIndex), ...items.slice(activeIndex + 1)];
}

function uniqueByLabel(items: NavItem[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.label)) return false;
    seen.add(item.label);
    return true;
  });
}

function SocialIcon({ icon }: { icon: "facebook" | "twitter" | "linkedin" }) {
  const paths: Record<typeof icon, React.ReactElement> = {
    facebook: (
      <path fill="currentColor" d="M24 12.073c0-5.989-4.848-10.861-10.861-10.861S2.278 6.084 2.278 12.073c0 5.412 3.965 9.903 9.144 10.854v-7.673h-2.754V12.07h2.754V9.414c0-2.716 1.62-4.22 4.096-4.22 1.186 0 2.427.212 2.427.212v2.67h-1.367c-1.347 0-1.767.836-1.767 1.694v2.034h3.01l-.48 3.184h-2.53v7.673c5.179-.951 9.144-5.442 9.144-10.854z" />
    ),
    twitter: (
      <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    linkedin: (
      <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  };
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      {paths[icon]}
    </svg>
  );
}

function FooterLink({ href, children, isActive = false }: { href: string; children: React.ReactNode; isActive?: boolean }) {
  return (
    <Link
      href={href}
      className={`text-sm underline-offset-4 transition-[color,transform] duration-200 hover:translate-x-0.5 hover:text-white hover:underline ${
        isActive ? "font-medium text-blue-300" : "text-slate-400"
      }`}
    >
      {children}
    </Link>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{children}</h3>;
}

export default function Footer() {
  const pathname = usePathname();
  const solutionItems = uniqueByLabel(orderWithActiveFirst(solutions, pathname));
  const activeSolutionLabel =
    solutionItems.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))?.label ?? null;

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-slate-950 via-slate-950 to-black font-sans text-slate-300">
      {/* Accent + grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.18),transparent)]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-[0.35]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-10 lg:px-12 lg:pt-18 lg:pb-12 xl:pt-20 2xl:pt-22">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12 2xl:gap-14">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-90">
              <BrandLogoImage
                width={192}
                height={60}
                className="h-12 w-auto object-contain sm:h-[3.25rem] xl:h-14 2xl:h-[3.75rem]"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400 xl:max-w-md xl:text-[0.98rem] 2xl:text-[1.03rem]">
              Enterprise workforce compliance and hardware, integrated so your teams run operations, not spreadsheets.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600 xl:px-6 xl:py-3 xl:text-[0.96rem] 2xl:text-base"
              >
                Schedule a demo
              </Link>
              <a
                href="tel:+918027745220"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10 xl:px-6 xl:py-3 xl:text-[0.96rem] 2xl:text-base"
              >
                Call sales
              </a>
            </div>
            <div className="mt-7 flex max-w-lg flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300 active:scale-95 xl:h-11 xl:w-11 2xl:h-12 2xl:w-12"
                    aria-label={s.label}
                  >
                    <SocialIcon icon={s.icon} />
                  </a>
                ))}
              </div>
              <div className="w-full max-w-[220px] shrink-0 sm:max-w-[260px] xl:max-w-[290px] 2xl:max-w-[320px]">
                <Image
                  src="/images/162d25e8-2734-49f7-a567-df2fc8f37e3d.png"
                  alt="Certifications: ISO 27001, SOC 2 Type 2, GDPR & DPDP, India data privacy, and Make in India"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 640px) 220px, 260px"
                  className="h-auto w-full max-h-14 object-contain object-left sm:max-h-16 md:max-h-[4.25rem] xl:max-h-[4.6rem] 2xl:max-h-[5rem]"
                />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <SectionTitle>Services</SectionTitle>
            <ul className="mt-5 grid gap-3">
              {services.map((item) => (
                <li key={item.href} className="min-w-0">
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <SectionTitle>Products</SectionTitle>
            <ul className="mt-5 grid gap-3">
              {products.map((item) => (
                <li key={item.href} className="min-w-0">
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <SectionTitle>Solutions</SectionTitle>
            <ul className="mt-5 grid gap-3">
              {solutionItems.map((item) => (
                <li key={`${item.href}-${item.label}`} className="min-w-0">
                  <FooterLink href={item.href} isActive={activeSolutionLabel === item.label}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact card */}
          <div className="lg:col-span-3">
            <SectionTitle>Head office</SectionTitle>
            <div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 shadow-xl shadow-black/20 backdrop-blur-sm xl:p-6 2xl:p-7">
              <div className="space-y-4 text-sm text-slate-400 xl:text-[0.96rem] 2xl:text-base">
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <p className="leading-relaxed text-slate-300 hover:text-white">
                    {OFFICE_ADDRESS_LINE}
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <a href="mailto:contact@inops.tech" className="text-slate-300 transition hover:text-white">
                    contact@inops.tech
                  </a>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <a href="tel:+918027745220" className="font-medium text-slate-300 transition hover:text-white">
                    +91 80277 45220
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <SectionTitle>Resources</SectionTitle>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {resources.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left xl:mt-14 xl:pt-9">
          <p className="text-xs text-slate-500 xl:text-sm">
            © {new Date().getFullYear()} InOps Solutions. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 xl:text-sm" aria-label="Footer">
            <Link href="/blog" className="transition hover:text-slate-300">
              Resources
            </Link>
            <Link href="/#solutions" className="transition hover:text-slate-300">
              Platform overview
            </Link>
            <a href="mailto:contact@inops.tech" className="transition hover:text-slate-300">
              Partner enquiries
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
