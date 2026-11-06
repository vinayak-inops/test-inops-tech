"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FlyInText } from "@/app/components/FlyInText";
import { blogPosts, getBlogPostHref, type BlogTabId } from "@/app/lib/blogPosts";
import { inopsUi } from "@/app/lib/inopsUi";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.12 };

const TABS = [
  { id: "all",       label: "All" },
  { id: "ewa",       label: "Earned Wage Access (EWA)" },
  { id: "clra",      label: "CLRA Compliance" },
  { id: "biometric", label: "Biometric Attendance" },
  { id: "clms",      label: "Contract Labour Management" },
] as const;

type TabId = BlogTabId;

const TAB_LABEL: Record<TabId, string> = Object.fromEntries(
  TABS.map((t) => [t.id, t.label])
) as Record<TabId, string>;

const allPosts = [...blogPosts].filter((p) => !p.hideFromListing).sort((a, b) => b.dateIso.localeCompare(a.dateIso));

const blogBanner = {
  src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1920&q=85",
  alt: "Editorial workspace — professional typing on a laptop",
  tagline: "Practical guides on CLRA compliance, biometric attendance, contract labour management, and early wage access — written for Indian manufacturers and HR leaders.",
} as const;

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
    </svg>
  );
}

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const posts = activeTab === "all" ? allPosts : allPosts.filter((p) => p.tab === activeTab);
  const [featured, ...rest] = posts;
  console.log("BlogPage: activeTab", activeTab, "posts.length", posts.length, "featured", featured?.title, "rest.length", rest.length);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eef4f8] text-slate-950">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(57,189,232,0.16),transparent_28%),radial-gradient(circle_at_86%_8%,rgba(29,95,191,0.12),transparent_24%),linear-gradient(180deg,#eef4f8_0%,#f8fbfd_56%,#eef4f8_100%)]"
        aria-hidden
      />

      {/* ── Banner ── */}
      <section className="no-site-reveal relative z-[1] px-4 pb-12 pt-24 sm:px-6 sm:pt-28 lg:px-12 lg:pb-16 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Home</Link>
            <span aria-hidden> / </span>
            <span aria-current="page">Blog</span>
          </nav>
          <motion.header
            className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            <div className="overflow-hidden border-b border-slate-200/90 shadow-[0_28px_80px_-36px_rgba(15,47,87,0.55)]">
              <div className="relative aspect-[3/1] min-h-[120px] w-full sm:aspect-[16/5] sm:min-h-[140px] lg:min-h-[160px]">
                <Image
                  src={blogBanner.src}
                  alt={blogBanner.alt}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/35 to-slate-950/80" aria-hidden />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-5 sm:py-6">
                  <p className={inopsUi.heroKicker}>Blog</p>
                  <h1 className="home-display-heading inops-type-hero mt-4 text-center text-white">
                    Contract Labour Compliance &amp; Workforce Technology Insights
                  </h1>
                  <p className={`${inopsUi.heroBannerDesc} mt-3 max-w-xl text-center`}>{blogBanner.tagline}</p>
                </div>
              </div>
            </div>
          </motion.header>

          {/* ── Tab filter ── */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45, ease: smoothEase }}
            aria-label="Filter articles by topic"
            role="tablist"
          >
            <span className="mr-1 self-center text-xs font-semibold uppercase tracking-widest text-slate-400">Topics:</span>
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "border-[var(--inops-blue)] bg-[var(--inops-blue)] text-white shadow-md shadow-blue-500/20"
                      : "border-slate-200 bg-white text-slate-700 shadow-sm hover:border-[var(--inops-blue)] hover:text-[var(--inops-blue)]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          {posts.length === 0 && (
            <p className="mt-12 text-center text-slate-500">No articles found for this topic yet.</p>
          )}

          {/* ── Featured card ── */}
          {featured && (
          <>
          <div className="mb-8 mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={inopsUi.eyebrowBrand}>Featured story</p>
              <h2 className={`mt-3 ${inopsUi.sectionHeading} !text-black`}>Start with the signal</h2>
            </div>
            <p className={`max-w-lg ${inopsUi.lead}`}>
              Our editor&apos;s pick on what is changing in contract labour compliance, CLRA enforcement, and workforce technology for Indian manufacturers.
            </p>
          </div>

          <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_30px_90px_-55px_rgba(15,47,87,0.65)] ring-1 ring-slate-900/[0.04]">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#39bde8]/15 blur-3xl" aria-hidden />
            <div className="grid gap-0 lg:grid-cols-12">
              <Link
                href={getBlogPostHref(featured.slug)}
                className="relative block aspect-[16/11] overflow-hidden bg-slate-100 lg:col-span-7 lg:aspect-auto lg:min-h-[440px]"
                aria-label={`Read featured article: ${featured.title}`}
              >
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--inops-navy)]/55 via-transparent to-[#39bde8]/10 opacity-90 transition group-hover:opacity-75" />
                <span className="absolute left-5 top-5 inline-flex rounded-full border border-white/40 bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-[var(--inops-navy)] shadow-sm backdrop-blur-sm">
                  {TAB_LABEL[featured.tab]}
                </span>
              </Link>

              <div className="relative flex flex-col justify-center border-t border-slate-100 bg-gradient-to-br from-white via-slate-50/80 to-[#eaf7fc] p-8 sm:p-10 lg:col-span-5 lg:border-l lg:border-t-0">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {featured.author}
                  </span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline" aria-hidden />
                  <time dateTime={featured.dateIso}>{featured.date}</time>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline" aria-hidden />
                  <span>{featured.readMinutes} min read</span>
                </div>
                <h3 className="mt-5 text-black">
                  <Link href={getBlogPostHref(featured.slug)} className="transition-colors hover:text-[var(--inops-blue)]">
                    {featured.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-4 text-base leading-8 text-slate-600">{featured.description}</p>
                <div className="mt-8">
                  <Link
                    href={getBlogPostHref(featured.slug)}
                    className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--inops-navy)] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-[var(--inops-blue)] hover:shadow-blue-600/25"
                  >
                    Read article
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
          </>
          )}
        </div>
      </section>

      {/* ── Article grid ── */}
      <section className="no-site-reveal relative border-y border-slate-200/80 bg-[#f8fbfd] px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(29,95,191,0.06)_0%,transparent_36%),radial-gradient(circle_at_80%_20%,rgba(57,189,232,0.12),transparent_30%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--inops-blue)]">More articles</p>
            <h2 className="mt-3 !text-black">Latest from the journal</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Workforce tech, compliance, and secure access curated for operators and people leaders.
            </p>
          </div>

          <div className="relative mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-white bg-white shadow-[0_18px_55px_-36px_rgba(15,47,87,0.5)] ring-1 ring-slate-900/[0.04] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_70px_-40px_rgba(15,47,87,0.58)]"
              >
                <Link
                  href={getBlogPostHref(post.slug)}
                  className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
                  aria-label={post.title}
                >
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--inops-navy)]/55 via-transparent to-transparent opacity-75" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/95 px-3 py-1 text-xs font-semibold text-[var(--inops-navy)] backdrop-blur-sm">
                    {TAB_LABEL[post.tab]}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
                    <time dateTime={post.dateIso}>{post.date}</time>
                    <span className="text-slate-300" aria-hidden>·</span>
                    <span>{post.readMinutes} min read</span>
                  </div>
                  <h3 className="mt-4 text-black">
                    <Link href={getBlogPostHref(post.slug)} className="transition-colors hover:text-[var(--inops-blue)]">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 line-clamp-3 text-sm leading-7 text-slate-600">{post.description}</p>
                  <div className="mt-6">
                    <Link
                      href={getBlogPostHref(post.slug)}
                      className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[var(--inops-blue)] transition hover:gap-3 hover:border-[var(--inops-blue)] hover:bg-blue-50 hover:text-[var(--brand-hover)]"
                    >
                      Continue reading
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="no-site-reveal relative px-4 pb-20 pt-10 sm:px-6 lg:px-12 lg:pt-14">
        <motion.div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/15 bg-[var(--inops-navy)] px-8 py-12 shadow-[0_35px_90px_-45px_rgba(6,20,40,0.9)] sm:px-12 lg:py-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease: smoothEase }}
        >
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#39bde8]/25 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-[var(--inops-blue)]/40 blur-3xl" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:42px_42px]"
            aria-hidden
          />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-2xl">
              <FlyInText as="p" direction="down" className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7dd3fc]">
                Need an operator view?
              </FlyInText>
              <FlyInText as="h2" direction="left" delay={0.06} className="mt-4 text-white">
                Bring clarity to your workforce stack
              </FlyInText>
              <FlyInText as="p" direction="up" delay={0.12} className="mt-4 text-base leading-8 text-slate-300">
                Talk to our team about biometric attendance, access control, and HR integrations tailored to your sites.
              </FlyInText>
            </div>
            <FlyInText as="div" direction="up" delay={0.16} className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--inops-navy)] shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Contact us
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                Explore solutions
              </Link>
            </FlyInText>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
