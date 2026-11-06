import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/lib/blogPosts";
import { SCHEMA_SITE_NAV_PAGES, SITEMAP_LAST_MODIFIED, getSiteUrl } from "@/app/lib/site";

const siteUrl = getSiteUrl();

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

/** Paths Google should treat as primary sitelink candidates (below homepage). */
const SITELINK_PATHS = new Set<string>(SCHEMA_SITE_NAV_PAGES.map((p) => p.path));

const routes: { path: string; priority: number; changeFrequency: ChangeFreq }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.55, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.5, changeFrequency: "weekly" },
  { path: "/brochures", priority: 0.45, changeFrequency: "monthly" },
  { path: "/face-recognition-attendance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/biometric-devices", priority: 0.65, changeFrequency: "monthly" },
  { path: "/self-service-kiosk", priority: 0.65, changeFrequency: "monthly" },
  { path: "/turnstiles-access", priority: 0.65, changeFrequency: "monthly" },
  { path: "/accessories", priority: 0.6, changeFrequency: "monthly" },
  { path: "/cctv-attendance", priority: 0.6, changeFrequency: "monthly" },
  { path: "/canteen-and-visitor", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contract-labour-management", priority: 0.85, changeFrequency: "monthly" },
  { path: "/hris", priority: 0.7, changeFrequency: "monthly" },
  { path: "/mobile-app-attendance", priority: 0.6, changeFrequency: "monthly" },
  { path: "/enterprise-solution", priority: 0.6, changeFrequency: "monthly" },
  { path: "/earned-wage-access", priority: 0.85, changeFrequency: "monthly" },
  { path: "/visitor-management", priority: 0.6, changeFrequency: "monthly" },
  { path: "/fixed-asset-management", priority: 0.55, changeFrequency: "monthly" },
  { path: "/delivery-management", priority: 0.6, changeFrequency: "monthly" },
  { path: "/order-management", priority: 0.6, changeFrequency: "monthly" },
  { path: "/warehouse-management", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  // Services hub + sub-pages (were absent — confirmed missing 2026-09-11)
  { path: "/services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/background-verification", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/biometric-amc", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/biometric-database-audit", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/clra-compliance-audit", priority: 0.65, changeFrequency: "monthly" },
  { path: "/services/industrial-manpower-supply", priority: 0.6, changeFrequency: "monthly" },
  { path: "/glossary", priority: 0.55, changeFrequency: "monthly" },
  { path: "/clms-pricing", priority: 0.6, changeFrequency: "monthly" },
  { path: "/research-insights", priority: 0.6, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.65, changeFrequency: "monthly" },
  { path: "/case-studies/automotive-oem-multi-plant-clms", priority: 0.7, changeFrequency: "monthly" },
];


/** Boost sitemap priority for declared sitelink targets. */
function priorityFor(path: string, base: number): number {
  if (path === "/") return 1;
  return SITELINK_PATHS.has(path) ? Math.max(base, 0.8) : base;
}

const MODULE_SLUGS = [
  "attendance-leave",
  "compliance-report",
  "background-verification",
  "contractor-management",
  "wage-payroll",
  "gate-compliance",
  "cxo-dashboard",
  "ai-assistance",
  "challan-reconciliation",
];

const moduleRoutes = MODULE_SLUGS.map((slug) => ({
  path: `/contract-labour-management/iddion-regx-modules/${slug}`,
  priority: 0.65,
  changeFrequency: "monthly" as ChangeFreq,
}));

const RESEARCH_SLUGS = new Set([
  "state-of-contract-labour-compliance-india-2026",
  "ot-leakage-benchmarks-indian-factories-2026",
  "biometric-attendance-accuracy-report-india-2026",
]);

const PILLAR_SLUGS = new Set([
  "camera-attendance-clra-compliance-manufacturing",
]);

const CLUSTER_SLUGS = new Set([
  "clra-compliance-checklist-india-2026",
  "form-v-form-xiii-clra-guide-india",
  "overtime-cost-leakage-manufacturing-india",
  "9-day-continuous-attendance-clra-risk-india",
  "contractor-attendance-tracking-software-india",
  "biometric-attendance-defence-contractors-india",
  "zkteco-clms-integration-multi-site-attendance-india",
  "contractor-overbilling-prevention-biometric-india",
  "ewa-contract-workers-biometric-attendance-india",
  "10-signs-factory-outgrown-spreadsheet-contractor-management",
]);

const blogRoutes = blogPosts.filter((post) => !post.hideFromListing).map((post) => ({
  path: `/blog/${post.slug}`,
  priority: PILLAR_SLUGS.has(post.slug) ? 0.8
    : RESEARCH_SLUGS.has(post.slug) ? 0.75
    : CLUSTER_SLUGS.has(post.slug) ? 0.65
    : 0.4,
  changeFrequency: (
    PILLAR_SLUGS.has(post.slug) ? "weekly" :
    RESEARCH_SLUGS.has(post.slug) ? "monthly" :
    CLUSTER_SLUGS.has(post.slug) ? "monthly" :
    "yearly"
  ) as ChangeFreq,
  lastModified: post.dateModifiedIso ?? post.dateIso,
}));

function resolveLastModified(path: string, blogDateIso?: string): Date {
  if (blogDateIso) return new Date(blogDateIso);
  const iso = SITEMAP_LAST_MODIFIED[path];
  if (iso) return new Date(iso);
  return new Date("2026-01-15");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: resolveLastModified(path),
    changeFrequency,
    priority: priorityFor(path, priority),
  }));

  const moduleEntries = moduleRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: resolveLastModified(path),
    changeFrequency,
    priority,
  }));

  const blogEntries = blogRoutes.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${siteUrl}${path}`,
    lastModified: resolveLastModified(path, lastModified),
    changeFrequency,
    priority,
  }));

  return [...staticEntries, ...moduleEntries, ...blogEntries];
}
