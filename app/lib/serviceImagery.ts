/**
 * Curated Unsplash imagery aligned with industrial workforce, CLMS, biometrics, and access.
 * Centralised so homepage sliders and modules stay consistent with real services.
 */

/** Stable homepage H1 for SEO on legacy hero slide (slide 3 — EWA). */
export const HOME_HERO_SEO_H1 =
  "Contract Workforce Governance, CLMS & Biometric Attendance";

export type HeroSlide =
  | {
      layout: "seo-stack";
      src: string;
      alt: string;
      /** Small visible H1 — primary SEO keyword line for this slide */
      seoHeading: string;
      /** `tag` = short uppercase label; `line` = longer single-row sentence */
      seoHeadingVariant?: "tag" | "line";
      /** Main hero message (H2) */
      headline: string;
      /** Supporting line (H3), optional */
      subheadline?: string;
      solutionHref: string;
    }
  | {
      layout: "legacy";
      src: string;
      alt: string;
      headline: string;
      solutionHref: string;
    };

/** Homepage hero slides — copy order: small H1 (SEO) → big H2 → big H3 (slide 1 only). Slide 3 uses legacy layout. */
export const heroSlides: readonly HeroSlide[] = [
  {
    layout: "seo-stack",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1280&q=75",
    alt: "Operations team reviewing contract workforce compliance and CLMS dashboards in an enterprise control room",
    seoHeading: "Contract Labour Management System (CLMS) & CLRA Compliance Platform for Indian Manufacturing",
    seoHeadingVariant: "line",
    headline: "India's Contract Workforce Compliance Platform",
    subheadline: "Single Source of Truth for Workforce Governance",
    solutionHref: "/contract-labour-management",
  },
  {
    layout: "seo-stack",
    src: "/WhatsApp Image 2026-05-04 at 11.55.24 AM.jpeg",
    alt: "Face recognition and biometric access across mobile, CCTV, and on-ground devices in enterprise operations",
    seoHeading: "Biometric CLMS That Eliminates Contractor Payroll Leakage",
    seoHeadingVariant: "line",
    headline: "Face Recognition Across Mobile, CCTV & Reader",
    solutionHref: "/mobile-app-attendance",
  },
  {
    layout: "legacy",
    src: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1280&q=70",
    alt: "Employee reviewing earnings and financial planning documents",
    headline: "Building Financial Resilience for the Workforce",
    solutionHref: "/earned-wage-access",
  },
];

/**
 * Trusted clients shown directly under the homepage hero (single-row marquee).
 * Replace files in `/public/clients/` with official brand assets when licensed.
 */
export const heroTrustedManufacturingClients: { name: string; logoSrc: string }[] = [
  { name: "Ashok Leyland", logoSrc: "/clients/ashok-leyland.svg" },
  { name: "HAL", logoSrc: "/clients/hal.svg" },
  { name: "Midhani", logoSrc: "/clients/midhani.svg" },
  { name: "Automotive Axle", logoSrc: "/clients/automotive-axle.svg" },
  { name: "Wheels India", logoSrc: "/clients/wheels-india.svg" },
  { name: "BFW", logoSrc: "/clients/bfw.svg" },
  { name: "SEG", logoSrc: "/clients/seg.svg" },
  { name: "BHEL", logoSrc: "/clients/bhel.svg" },
  { name: "SKF", logoSrc: "/clients/skf.svg" },
  { name: "Foxconn", logoSrc: "/clients/foxconn.svg" },
];

/** Order matches `whyCards` in `app/page.tsx`: [0] Identity, [1] HRIS, [2] Contract workforce governance, [3] Logistics, [4] EWA, [5] spare */
export const whySectionCardImages = [
  "/WhatsApp Image 2026-05-04 at 12.13.21 PM.jpeg",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
  "/images/payroll-solutions-hero.png",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=85",
] as const;

export const moduleCarouselImages = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
] as const;

/**
 * Paired hover imagery for `moduleCarouselImages`.
 * Same order, but each image is a different (related) scene for the same module.
 */
export const moduleCarouselHoverImages = [
  // Time, Attendance & Leave
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=85",
  // KYE ,  Employee verification
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
  // Visitor Management
  "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=85",
  // Contractor & Payroll
  "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=900&q=85",
  // Compliance & Reporting
  "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=85",
  // Access Control & Security
  "https://images.unsplash.com/photo-1557597774-9d16d2f8c8f9?auto=format&fit=crop&w=900&q=85",
  // Shift & Roster Management
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=85",
  // Analytics & Dashboards
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
] as const;

export const featuresSliderImages = {
  clms: "/WhatsApp Image 2026-04-20 at 3.24.40 PM.jpeg",
  visibility: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
} as const;

export const industriesImagery = [
  { name: "Manufacturing", imageUrl: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=600&q=80" },
  { name: "Logistics", imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" },
  { name: "Automobile", imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80" },
  { name: "Construction", imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
  {
    name: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
] as const;

/** Extra scenes for solution pages (spec panels) */
export const solutionPageImagery = {
  payroll: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
  canteen: "https://images.unsplash.com/photo-1555396273-367f5e9c2826?auto=format&fit=crop&w=1200&q=85",
  fixedAsset: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
} as const;

export const productPageImagery = {
  biometricHeroDevice:
    "/images/bio_new.png",
  biometricSpecScene:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q5",
  turnstileHero:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=85",
  accessoryExit:
    "/images/Wireless-Exit-Button-.png",
  accessoryIndustrial:
    "/images/SL-600.png",
  fingerprintSensor:
    "/images/1.png",
  rfCards:
    "/images/2.png",
} as const;
