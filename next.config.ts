import type { NextConfig } from "next";

const staticAssetCache = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.elimparcial.com",
        pathname: "/resizer/**",
      },
    ],
  },
  experimental: {},
  async redirects() {
    return [
      // ── Canonical host: www → non-www ──────────────────────────────────
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.inops.tech" }],
        destination: "https://inops.tech/:path*",
        permanent: true,
      },
      // ── Old/duplicate URLs ─────────────────────────────────────────────
      { source: "/payroll-solution", destination: "/contract-labour-management", permanent: true },
      { source: "/payroll-solution/", destination: "/contract-labour-management", permanent: true },
      { source: "/labour-management-system", destination: "/contract-labour-management", permanent: true },
      { source: "/labour-management-system/", destination: "/contract-labour-management", permanent: true },
      { source: "/biometric-reader", destination: "/biometric-devices", permanent: true },
      { source: "/face-based-access-control", destination: "/face-recognition-attendance", permanent: true },
      { source: "/face-based-access-control/:path*", destination: "/face-recognition-attendance/:path*", permanent: true },
      { source: "/early-wage-access", destination: "/earned-wage-access", permanent: true },
      { source: "/early-wage-access/:path*", destination: "/earned-wage-access/:path*", permanent: true },
      { source: "/solutions/labourmanagement", destination: "/hris", permanent: true },
      { source: "/solutions/labourmanagement/:path*", destination: "/hris", permanent: true },
      { source: "/clms", destination: "/contract-labour-management", permanent: true },
      { source: "/clms/modules/:slug", destination: "/contract-labour-management/iddion-regx-modules/:slug", permanent: true },
      { source: "/clms/:path*", destination: "/contract-labour-management/:path*", permanent: true },
      { source: "/solutions/payroll-solutions", destination: "/contract-labour-management", permanent: true },
      { source: "/solutions/payroll-solutions/:path*", destination: "/contract-labour-management", permanent: true },
      { source: "/cctv", destination: "/cctv-attendance", permanent: true },
      { source: "/solutions/time-and-attendance", destination: "/cctv-attendance", permanent: true },
      { source: "/solutions/time-and-attendance/:path*", destination: "/cctv-attendance", permanent: true },
      { source: "/solutions/canteen-management", destination: "/canteen-and-visitor", permanent: true },
      { source: "/solutions/canteen-management/:path*", destination: "/canteen-and-visitor", permanent: true },
      { source: "/product/biometric-access-control", destination: "/face-recognition-attendance", permanent: true },
      { source: "/product/biometric-access-control/:path*", destination: "/face-recognition-attendance", permanent: true },
      { source: "/product/turnstiles-access", destination: "/turnstiles-access", permanent: true },
      { source: "/product/turnstiles-access/:path*", destination: "/turnstiles-access", permanent: true },
      { source: "/product/accessories", destination: "/accessories", permanent: true },
      { source: "/product/accessories/:path*", destination: "/accessories", permanent: true },
      { source: "/solutions/ewa", destination: "/earned-wage-access", permanent: true },
      { source: "/solutions/ewa/:path*", destination: "/earned-wage-access", permanent: true },
      { source: "/ewa", destination: "/earned-wage-access", permanent: true },
      { source: "/ewa/:path*", destination: "/earned-wage-access", permanent: true },
      { source: "/mobile-app", destination: "/mobile-app-attendance", permanent: true },
      { source: "/solutions/mobile-app", destination: "/mobile-app-attendance", permanent: true },
      { source: "/solutions/mobile-app/:path*", destination: "/mobile-app-attendance", permanent: true },
      { source: "/solutions/enterprise-solution", destination: "/enterprise-solution", permanent: true },
      { source: "/solutions/enterprise-solution/:path*", destination: "/enterprise-solution", permanent: true },
      { source: "/solutions/visitor-management", destination: "/visitor-management", permanent: true },
      { source: "/solutions/visitor-management/:path*", destination: "/visitor-management", permanent: true },
      {
        source: "/solutions/fixed-asset-management",
        destination: "/fixed-asset-management",
        permanent: true,
      },
      {
        source: "/solutions/fixed-asset-management/:path*",
        destination: "/fixed-asset-management",
        permanent: true,
      },
      // ── Broken redirect chain fixes ────────────────────────────────────
      { source: "/turnstiles", destination: "/turnstiles-access", permanent: true },
      { source: "/turnstiles/", destination: "/turnstiles-access", permanent: true },
      // ── Legacy WordPress-era URLs ──────────────────────────────────────
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/services/", destination: "/services", permanent: true },
      { source: "/visitor-management-system", destination: "/visitor-management", permanent: true },
      { source: "/visitor-management-system/", destination: "/visitor-management", permanent: true },
      { source: "/time-and-attendance", destination: "/cctv-attendance", permanent: true },
      { source: "/time-and-attendance/", destination: "/cctv-attendance", permanent: true },
      { source: "/biometric-access-control", destination: "/face-recognition-attendance", permanent: true },
      { source: "/biometric-access-control/", destination: "/face-recognition-attendance", permanent: true },
      { source: "/product/turnstiles", destination: "/turnstiles-access", permanent: true },
      { source: "/product/turnstiles/:path*", destination: "/turnstiles-access", permanent: true },
      { source: "/tinker-series", destination: "/biometric-devices", permanent: true },
      { source: "/tinker-series/", destination: "/biometric-devices", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/blog/access-control-trends-2024", destination: "/turnstiles-access", permanent: true },
      { source: "/blog/access-control-trends-2024/", destination: "/turnstiles-access", permanent: true },
      // ── Missing pages / asset aliases ─────────────────────────────────
      { source: "/blog/clms-vs-hrms", destination: "/blog/clms-vs-hrms-difference", permanent: true },
      { source: "/blog/clms-vs-hrms/", destination: "/blog/clms-vs-hrms-difference", permanent: true },
      { source: "/content-management-system", destination: "/contract-labour-management", permanent: true },
      { source: "/content-management-system/", destination: "/contract-labour-management", permanent: true },
      { source: "/favicon.ico", destination: "/favicon.png", permanent: false },
      { source: "/site.webmanifest", destination: "/manifest.webmanifest", permanent: false },
      // ── Merged blog posts ─────────────────────────────────────────────────────
      { source: "/blog/labour-management-system-software-guide", destination: "/contract-labour-management", permanent: true },
      { source: "/blog/labour-management-system-software-guide/", destination: "/contract-labour-management", permanent: true },
      // ── Dead WordPress blog posts → /blog ─────────────────────────────
      { source: "/top-8-access-control-technology-trends-for-2024", destination: "/blog/access-control-trends-manufacturing", permanent: true },
      { source: "/top-8-access-control-technology-trends-for-2024/", destination: "/blog/access-control-trends-manufacturing", permanent: true },
      { source: "/the-future-of-work-how-biometric-attendance-systems-are-shaping-the-workplace", destination: "/blog/biometric-attendance-future-of-work", permanent: true },
      { source: "/the-future-of-work-how-biometric-attendance-systems-are-shaping-the-workplace/", destination: "/blog/biometric-attendance-future-of-work", permanent: true },
      {
        source: "/maximizing-employee-efficiency-and-engagement-6-ways-hr-technology-drives-success",
        destination: "/blog/hr-technology-efficiency-engagement",
        permanent: true,
      },
      {
        source: "/maximizing-employee-efficiency-and-engagement-6-ways-hr-technology-drives-success/",
        destination: "/blog/hr-technology-efficiency-engagement",
        permanent: true,
      },
      {
        source: "/maximizing-employee-efficiency-and-engagement-6-ways-hr-technology-drives-success/feed",
        destination: "/blog/hr-technology-efficiency-engagement",
        permanent: true,
      },
      {
        source: "/maximizing-employee-efficiency-and-engagement-6-ways-hr-technology-drives-success/feed/",
        destination: "/blog/hr-technology-efficiency-engagement",
        permanent: true,
      },
      {
        source: "/maximizing-employee-efficiency-and-engagement-6-ways-hr-technology-drives-success/blog-details.html",
        destination: "/blog/hr-technology-efficiency-engagement",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/:path*.mp4",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/clients/:path*",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/logo.png",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/logo1.png",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/favicon.png",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/favicon-16x16.png",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/favicon-32x32.png",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/apple-touch-icon.png",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/opengraph-image",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;
