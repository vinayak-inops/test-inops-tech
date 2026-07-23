"use client";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import NavbarBrandLogo from "@/app/components/NavbarBrandLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SolutionsMegaMenuDesktop, SolutionsMegaMenuMobile } from "./SolutionsMegaMenu";
import { ServicesMegaMenuDesktop, ServicesMegaMenuMobile } from "./ServicesMegaMenu";

type NavItem =
  | { label: string; href: string }
  | { label: string; href: string; dropdown: string[] }
  | { label: "Solutions"; href: string; solutionsMega: true }
  | { label: "Services"; href: string; servicesMega: true };

const SOLUTIONS_MENU_PANEL_ID = "nav-solutions-menu-panel";
const SERVICES_MENU_PANEL_ID = "nav-services-menu-panel";

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "#solutions", solutionsMega: true },
  { label: "Resources", href: "#resources", dropdown: ["Blog", "Brochures"] },
  {label: "Services", href: "#services", servicesMega: true},
  { label: "Contact", href: "/contact" },
];

function hasDropdown(item: NavItem): item is NavItem & { dropdown: string[] } {
  return "dropdown" in item && Array.isArray(item.dropdown);
}

function hasSolutionsMega(item: NavItem): item is Extract<NavItem, { solutionsMega: true }> {
  return "solutionsMega" in item && item.solutionsMega === true;
}

function hasServicesMega(item: NavItem): item is Extract<NavItem, { servicesMega: true }> {
  return "servicesMega" in item && item.servicesMega === true;
}

const headerTransition = { type: "tween" as const, duration: 0.45, ease: [0.33, 1, 0.68, 1] as const };
const dropdownTransition = { type: "spring" as const, stiffness: 300, damping: 28 };
const linkStagger = 0.05;

const productRoutes: Record<string, string> = {
  "Biometric Access Control": "/face",
  "Turnstiles": "/turnstiles",
  "Accessories": "/accessories",
};

const resourceRoutes: Record<string, string> = {
  Blog: "/blog",
  Brochures: "/brochures",
};

const serviceRoutes: Record<string, string> = {
  "BG Services": "/services/bgv",
  "Managed Hardware Services": "/services/amc",
  "Biometric": "/services/fleet-audit",
  "Compliance Health Check": "/services/clra-audit-readiness",
  "Verified Workforce Supply": "/services/workforce-supply",
};

function pathUsesSolidNavBar(path: string) {
  return (
    path.startsWith("/contact") ||
    path.startsWith("/ewa") ||
    path.startsWith("/about") ||
    path.startsWith("/product") ||
    path.startsWith("/blog") ||
    path.startsWith("/brochures") ||
    path.startsWith("/canteen-and-visitor") ||
    path.startsWith("/cctv") ||
    path.startsWith("/clms") ||
    path.startsWith("/enterprise-solution") ||
    path.startsWith("/ewa") ||
    path.startsWith("/fixed-asset-management") ||
    path.startsWith("/hris") ||
    path.startsWith("/mobile-app") ||
    path.startsWith("/visitor-management") ||
    path.startsWith("/accessories") ||
    path.startsWith("/face") ||
    path.startsWith("/turnstiles") ||
    path.startsWith("/warehouse-management") ||
    path.startsWith("/delivery-management") ||
    path.startsWith("/order-management") ||
    path.startsWith("/services") ||
    path.startsWith("/industries")
  );
}

export default function Navbar() {
  const pathname = usePathname();
  /** White bar + fixed sticky (true after home hero ends, or inner pages after small scroll). */
  const [scrolled, setScrolled] = useState(() => pathUsesSolidNavBar(pathname));
  /** Home only: navbar in document flow while hero is on screen ,  scrolls up with the page. */
  const [navStaticHero, setNavStaticHero] = useState(pathname === "/");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const resolveHref = (itemLabel: string, raw: string) => {
    const key = raw.trim();
    if (itemLabel === "Resources" && resourceRoutes[key]) return resourceRoutes[key];
    return `#${key.toLowerCase().replace(/\s+/g, "-")}`;
  };

  const updateNavLayout = useCallback(() => {
    if (pathUsesSolidNavBar(pathname)) {
      setScrolled(true);
      setNavStaticHero(false);
      return;
    }

    if (pathname === "/") {
      const hero = document.getElementById("home-hero");
      if (hero) {
        const pastHero = hero.getBoundingClientRect().bottom <= 0;
        setScrolled(pastHero);
        setNavStaticHero(!pastHero);
        return;
      }
    }
    setScrolled(window.scrollY > 24);
    setNavStaticHero(false);
  }, [pathname]);

  useLayoutEffect(() => {
    updateNavLayout();
  }, [updateNavLayout]);

  useEffect(() => {
    window.addEventListener("scroll", updateNavLayout, { passive: true });
    window.addEventListener("resize", updateNavLayout, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateNavLayout);
      window.removeEventListener("resize", updateNavLayout);
    };
  }, [updateNavLayout]);

  useEffect(() => {
    if (!mobileOpen) setMobileSection(null);
  }, [mobileOpen]);

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
    <motion.header
      initial={false}
      style={{
        position: navStaticHero ? "static" : "fixed",
        ...(navStaticHero ? {} : { top: 0, left: 0, right: 0 }),
      }}
      animate={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(0, 0, 0, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderBottomColor: scrolled ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0)",
        boxShadow: scrolled ? "0 1px 3px 0 rgba(0,0,0,0.06)" : "0 0 0 0 transparent",
      }}
      transition={headerTransition}
      className={`navbar-fixed-header h-[var(--home-nav-offset)] w-full shrink-0 overflow-visible border-b border-transparent px-6 font-sans lg:px-12 ${navStaticHero ? "relative" : ""}`}
    >
      <div className="mx-auto flex h-full min-w-0 max-w-7xl items-center justify-between gap-2 xl:gap-3 2xl:gap-4">
        <motion.div
          className="min-w-0 shrink-0"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Link
            href="/"
            className={`navbar-brand-link block shrink-0 transition-opacity duration-300 hover:opacity-90 ${scrolled ? "opacity-90" : "opacity-95"}`}
            aria-label="InOps Solutions home"
          >
            <NavbarBrandLogo
              className={scrolled ? "" : "drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"}
            />
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-3 md:flex xl:gap-4 2xl:gap-5" aria-label="Primary">
          {navItems.map((item, i) =>
            hasSolutionsMega(item) ? (
              <motion.div
                key={item.label}
                className="relative"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 + i * linkStagger, ease: "easeOut" }}
              >
                <div
                  className="group relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <motion.button
                    type="button"
                    id="nav-solutions-menu-button"
                    className={`relative flex items-center gap-1 px-4 py-2.5 text-base font-medium tracking-wide rounded-lg transition-colors xl:px-[1.125rem] xl:py-2.5 xl:text-[1.03rem] 2xl:px-5 2xl:py-3 2xl:text-[1.08rem] ${
                      scrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" : "text-white hover:text-white/90 hover:bg-white/10"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-expanded={openDropdown === "Solutions"}
                    aria-haspopup="true"
                    aria-controls={SOLUTIONS_MENU_PANEL_ID}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {openDropdown === item.label ? (
                      <SolutionsMegaMenuDesktop
                        key="solutions-mega"
                        menuId={SOLUTIONS_MENU_PANEL_ID}
                        onNavigate={() => setOpenDropdown(null)}
                      />
                    ) : null}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : hasServicesMega(item) ? (
              <motion.div
                key={item.label}
                className="relative"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 + i * linkStagger, ease: "easeOut" }}
              >
                <div
                  className="group relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <motion.button
                    type="button"
                    id="nav-services-menu-button"
                    className={`relative flex items-center gap-1 px-4 py-2.5 text-base font-medium tracking-wide rounded-lg transition-colors xl:px-[1.125rem] xl:py-2.5 xl:text-[1.03rem] 2xl:px-5 2xl:py-3 2xl:text-[1.08rem] ${
                      scrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" : "text-white hover:text-white/90 hover:bg-white/10"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-expanded={openDropdown === "Services"}
                    aria-haspopup="true"
                    aria-controls={SERVICES_MENU_PANEL_ID}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {openDropdown === item.label ? (
                      <ServicesMegaMenuDesktop
                        key="services-mega"
                        menuId={SERVICES_MENU_PANEL_ID}
                        onNavigate={() => setOpenDropdown(null)}
                      />
                    ) : null}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : hasDropdown(item) ? (
              <motion.div
                key={item.label}
                className="relative"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 + i * linkStagger, ease: "easeOut" }}
              >
                <div
                  className="group relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <motion.button
                    type="button"
                    className={`relative flex items-center gap-1 px-4 py-2.5 text-base font-medium tracking-wide rounded-lg transition-colors xl:px-[1.125rem] xl:py-2.5 xl:text-[1.03rem] 2xl:px-5 2xl:py-3 2xl:text-[1.08rem] ${
                      scrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" : "text-white hover:text-white/90 hover:bg-white/10"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    aria-controls={`nav-dropdown-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        id={`nav-dropdown-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                        role="group"
                        aria-label={`${item.label} submenu`}
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={dropdownTransition}
                        className="absolute left-0 top-full z-[100] min-w-[220px] origin-top-left pt-2"
                      >
                        <div className="rounded-xl border border-slate-200/90 bg-white py-2 shadow-lg shadow-slate-900/[0.06] ring-1 ring-slate-950/[0.03]">
                          {item.dropdown.map((d, j) => {
                            const href = resolveHref(item.label, d);
                            return (
                              <motion.div
                                key={d}
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: 0.03 * j }}
                              >
                                <Link
                                  href={href}
                                  className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
                                >
                                  {d}
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 + i * linkStagger, ease: "easeOut" }}
              >
                <Link href={item.href} className="relative block px-4 py-2.5 xl:px-[1.125rem] xl:py-2.5 2xl:px-5 2xl:py-3">
                  <motion.span
                    className={`relative inline-block text-base font-medium tracking-wide transition-colors xl:text-[1.03rem] 2xl:text-[1.08rem] ${
                      scrolled ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-white/90"
                    }`}
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                    variants={{
                      hover: { scale: 1.02 },
                    }}
                  >
                    {item.label}
                    <motion.span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${scrolled ? "bg-blue-500" : "bg-white"}`}
                      style={{ transformOrigin: "left" }}
                      variants={{
                        hover: { scaleX: 1 },
                      }}
                      initial={{ scaleX: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    />
                  </motion.span>
                </Link>
              </motion.div>
            )
          )}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          <motion.button
            type="button"
            className={`flex min-h-11 min-w-11 items-center justify-center rounded-full border shadow-sm transition-colors md:hidden ${
              scrolled ? "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-blue-200 hover:text-blue-600" : "border-white/40 bg-white/10 text-white hover:bg-white/20"
            }`}
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
          <Link href="/contact">
            <motion.span
              className={`flex min-h-11 min-w-11 items-center justify-center rounded-full border shadow-sm transition-colors md:hidden ${
                scrolled ? "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-blue-200 hover:text-blue-600" : "border-white/40 bg-white/10 text-white hover:bg-white/20"
              }`}
              aria-label="Contact us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.span>
          </Link>
          <Link href="/contact">
            <motion.span
              className={`hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold shadow-sm transition-all xl:px-5 xl:py-2.5 xl:text-[0.96rem] 2xl:px-6 2xl:py-3 2xl:text-base ${
                scrolled ? "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md" : "border-2 border-white text-white hover:bg-white hover:text-gray-900"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.span>
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-50 bg-gray-900/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-[100dvh] max-h-[100dvh] w-[88vw] max-w-sm flex-col border-l border-gray-200 bg-white shadow-xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: [0.33, 1, 0.68, 1] as const }}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-5 py-4">
                <span className="text-sm font-semibold tracking-wide text-gray-800">Menu</span>
                <button
                  type="button"
                  className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain bg-gray-50/80 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <div className="space-y-2">
                  {navItems.map((item) => {
                    if (hasSolutionsMega(item)) {
                      const isOpen = mobileSection === item.label;
                      return (
                        <div key={item.label} className="rounded-xl border border-gray-200 bg-white shadow-sm">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800"
                            aria-expanded={isOpen}
                            aria-controls="mobile-solutions-mega-panel"
                            onClick={() => setMobileSection((prev) => (prev === item.label ? null : item.label))}
                          >
                            <span>{item.label}</span>
                            <span className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden>
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                id="mobile-solutions-mega-panel"
                                role="region"
                                aria-label="Solutions"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="overflow-hidden"
                              >
                                <SolutionsMegaMenuMobile onNavigate={() => setMobileOpen(false)} />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    if (hasServicesMega(item)) {
                        const isOpen = mobileSection === item.label;
                        return (
                          <div key={item.label} className="rounded-xl border border-gray-200 bg-white shadow-sm">
                            <button
                              type="button"
                              className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800"
                              aria-expanded={isOpen}
                              aria-controls="mobile-services-mega-panel"
                              onClick={() => setMobileSection((prev) => (prev === item.label ? null : item.label))}
                            >
                              <span>{item.label}</span>
                              <span className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden>
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </span>
                            </button>
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  id="mobile-services-mega-panel"
                                  role="region"
                                  aria-label="Services"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2, ease: "easeOut" }}
                                  className="overflow-hidden"
                                >
                                  <ServicesMegaMenuMobile onNavigate={() => setMobileOpen(false)} />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      }

                    if (!hasDropdown(item)) {
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:border-blue-200 hover:bg-blue-50/50"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                          <span className="text-gray-400" aria-hidden>
                            →
                          </span>
                        </Link>
                      );
                    }

                    const isOpen = mobileSection === item.label;
                    return (
                      <div key={item.label} className="rounded-xl border border-gray-200 bg-white shadow-sm">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800"
                          onClick={() => setMobileSection((prev) => (prev === item.label ? null : item.label))}
                        >
                          <span>{item.label}</span>
                          <span className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden>
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-1 border-t border-gray-100 px-2 pb-3 pt-1">
                                {item.dropdown.map((d) => {
                                  const href = resolveHref(item.label, d);
                                  return (
                                    <Link
                                      key={d}
                                      href={href}
                                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {d}
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href="/all-pages"
                  className="mt-4 flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:border-blue-200 hover:bg-blue-50/50"
                  onClick={() => setMobileOpen(false)}
                >
                  All Pages
                  <span className="text-gray-400" aria-hidden>
                    →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
    {pathname === "/" && scrolled ? <div className="h-[var(--home-nav-offset)] w-full shrink-0" aria-hidden /> : null}
    </>
  );
}
