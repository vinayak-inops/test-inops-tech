import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME } from "@/app/lib/site";

export const metadata: Metadata = {
  title: `Page not found | ${SITE_NAME}`,
  description: "The page you requested could not be found. Explore CLMS, EWA, biometrics, and contact InOps.",
  robots: { index: false, follow: true },
  alternates: {},
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center" style={{ paddingTop: "calc(var(--home-nav-offset,4.5rem) + 6rem)" }}>
      <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Page not found</h1>
      <p className="mt-4 text-slate-600">
        This URL is not on our site. Try our workforce compliance solutions or book a demo.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-xl bg-[color:var(--inops-blue)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
