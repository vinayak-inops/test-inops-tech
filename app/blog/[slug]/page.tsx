import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import BlogPostingJsonLd from "@/app/components/BlogPostingJsonLd";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import HowToJsonLd from "@/app/components/HowToJsonLd";
import { blogPosts, getBlogPost, getBlogPostHref } from "@/app/lib/blogPosts";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { SITE_NAME } from "@/app/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found" };

  return routeMetadata({
    title: `${post.title} | InOps`,
    description: post.description,
    path: `/blog/${post.slug}`,
    extraKeywords: [post.category, "workforce blog", "InOps insights"],
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.tab === post.tab && !p.hideFromListing)
    .slice(0, 3);

  const TAB_PRODUCT_HREF: Record<string, string> = {
    ewa: "/earned-wage-access",
    clms: "/contract-labour-management",
    clra: "/contract-labour-management",
    biometric: "/face-recognition-attendance",
  };

  return (
    <article className="min-h-screen bg-[#eef4f8] text-slate-950">
      <BlogPostingJsonLd post={post} />
      <BreadcrumbJsonLd path={`/blog/${post.slug}`} />
      {post.howTo ? <HowToJsonLd {...post.howTo} /> : null}
      {post.faqs && post.faqs.length > 0 ? <FAQPageJsonLd items={post.faqs} /> : null}

      <header className="border-b border-slate-200/80 bg-white px-4 pt-24 pb-10 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="text-sm font-semibold text-[color:var(--inops-blue)] transition hover:underline"
          >
            ← Back to blog
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--inops-blue)]">
            {post.category}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {post.h1 ?? post.title}
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            <time dateTime={post.dateIso}>{post.date}</time>
            {post.dateModifiedIso && post.dateModifiedIso > post.dateIso ? (
              <>
                <span aria-hidden> · </span>
                <span className="text-blue-600">
                  Updated{" "}
                  <time dateTime={post.dateModifiedIso}>
                    {new Date(post.dateModifiedIso).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
                  </time>
                </span>
              </>
            ) : null}
            <span aria-hidden> · </span>
            {post.readMinutes} min read
            {post.author ? (
              <>
                <span aria-hidden> · </span>
                <span className="font-medium text-slate-700">{post.author}</span>
                {post.personAuthor ? (
                  <span className="text-slate-400">, Founder &amp; CEO, InOps IT Solutions</span>
                ) : null}
              </>
            ) : null}
          </p>
          {post.type === "research" && post.dataSource ? (
            <p className="mt-4 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-xs leading-relaxed text-blue-800">
              <span className="font-semibold">Data source: </span>
              {post.dataSource}
            </p>
          ) : null}
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
        <div className="relative -mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      </div>

      {post.summary ? (
        <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6 lg:px-0">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-5">
            <p className="text-sm font-semibold text-slate-900">Summary</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">{post.summary}</p>
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-0">
        {post.sections.map((section, i) => (
          <div key={i} className="mb-8">
            {section.heading ? (
              <h2 className="mt-2 text-xl font-semibold text-slate-900">{section.heading}</h2>
            ) : null}
            {section.subheading ? (
              <h3 className="mt-5 text-base font-semibold text-[color:var(--inops-blue)]">{section.subheading}</h3>
            ) : null}
            {section.paragraphs.map((p, j) => (
              <p key={j} className="mt-4 text-base leading-8 text-slate-600"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
            {section.list && section.list.length > 0 ? (
              <ul className="mt-4 space-y-2 pl-5">
                {section.list.map((item, k) => (
                  <li key={k} className="flex items-start gap-2 text-base leading-7 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            {section.ctaLabel && section.ctaHref ? (
              <div className="mt-6">
                <Link
                  href={section.ctaHref}
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--inops-navy)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[color:var(--inops-blue)]"
                >
                  {section.ctaLabel}
                </Link>
              </div>
            ) : null}
            {section.table ? (
              <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-[color:var(--inops-navy)]">
                    <tr>
                      {section.table.headers.map((h, k) => (
                        <th
                          key={k}
                          className="px-4 py-3 text-left font-semibold text-white"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {section.table.rows.map((row, k) => (
                      <tr key={k} className={k % 2 === 1 ? "bg-slate-50" : ""}>
                        {row.map((cell, l) => (
                          <td key={l} className="px-4 py-3 text-slate-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        ))}

        {post.faqs && post.faqs.length > 0 ? (
          <section className="no-site-reveal mt-10 border-t border-slate-200 pt-10">
            <h2 className="text-xl font-semibold text-slate-900">Frequently asked questions</h2>
            <dl className="mt-6 space-y-6">
              {post.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {related.length > 0 ? (
          <aside className="mt-14 border-t border-slate-200 pt-10">
            <h2 className="text-lg font-semibold text-slate-900">More from the journal</h2>
            <ul className="mt-6 space-y-4">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={getBlogPostHref(item.slug)}
                    className="group block rounded-xl border border-slate-200/80 bg-white p-4 transition hover:border-[color:var(--inops-blue)]/40 hover:shadow-md"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--inops-blue)]">
                      {item.category}
                    </p>
                    <p className="mt-2 font-semibold text-slate-900 group-hover:text-[color:var(--inops-blue)]">
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            {TAB_PRODUCT_HREF[post.tab] ? (
              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-sm text-slate-600">
                  Explore the product behind this topic:{" "}
                  <Link
                    href={TAB_PRODUCT_HREF[post.tab]}
                    className="font-semibold text-[color:var(--inops-blue)] underline-offset-2 hover:underline"
                  >
                    {post.category} →
                  </Link>
                </p>
              </div>
            ) : null}
          </aside>
        ) : null}
      </div>
    </article>
  );
}
