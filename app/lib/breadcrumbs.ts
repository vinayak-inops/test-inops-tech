import { SITE_NAME } from "@/app/lib/site";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

const HOME: BreadcrumbItem = { name: SITE_NAME, path: "/" };

/** Human-readable labels for breadcrumb trails (visible + JSON-LD). */
const LABEL_BY_PATH: Record<string, string> = {
  "/about": "About",
  "/contact": "Contact",
  "/blog": "Blog",
  "/brochures": "Brochures",
  "/case-studies": "Case Studies",
  "/glossary": "Glossary",
  "/research-insights": "Research & Insights",
  "/clms-pricing": "CLMS Pricing",
  "/face-recognition-attendance": "Face Recognition Attendance",
  "/turnstiles-access": "Turnstiles",
  "/accessories": "Accessories",
  "/contract-labour-management": "Contract Labour Management",
  "/hris": "HR Information System",
  "/earned-wage-access": "Earned Wage Access (EWA)",
  "/cctv-attendance": "Time & Attendance",
  "/canteen-and-visitor": "Canteen & Visitor Management",
  "/mobile-app-attendance": "Mobile Workforce App",
  "/enterprise-solution": "Enterprise Solution",
  "/visitor-management": "Visitor Management",
  "/fixed-asset-management": "Fixed Asset Management",
  "/biometric-devices":"Biometric Devices"
};

export function getBreadcrumbsForPath(pathname: string): BreadcrumbItem[] {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (normalized === "/") return [HOME];

  const blogMatch = /^\/blog\/([^/]+)$/.exec(normalized);
  if (blogMatch) {
    const slug = blogMatch[1];
    const title = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return [HOME, { name: "Blog", path: "/blog" }, { name: title, path: normalized }];
  }

  const label = LABEL_BY_PATH[normalized];
  if (!label) return [HOME];

  const solutionPaths = new Set([
    "/contract-labour-management",
    "/hris",
    "/earned-wage-access",
    "/cctv-attendance",
    "/canteen-and-visitor",
    "/mobile-app-attendance",
    "/enterprise-solution",
    "/visitor-management",
    "/fixed-asset-management",
    "/biometric-devices"
  ]);
  const productPaths = new Set(["/face-recognition-attendance", "/turnstiles-access", "/accessories"]);
  const resourcePaths = new Set([
    "/brochures",
    "/case-studies",
    "/glossary",
    "/research-insights",
  ]);

  if (solutionPaths.has(normalized)) {
    return [HOME, { name: "Solutions", path: "/#solutions" }, { name: label, path: normalized }];
  }
  if (productPaths.has(normalized)) {
    return [HOME, { name: "Products", path: "/face-recognition-attendance" }, { name: label, path: normalized }];
  }
  if (resourcePaths.has(normalized)) {
    return [HOME, { name: "Resources", path: "/blog" }, { name: label, path: normalized }];
  }
  if (normalized === "/clms-pricing") {
    return [
      HOME,
      { name: "Contract Labour Management", path: "/contract-labour-management" },
      { name: label, path: normalized },
    ];
  }

  return [HOME, { name: label, path: normalized }];
}
