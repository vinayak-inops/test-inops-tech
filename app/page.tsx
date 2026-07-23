"use client"

import HomePageClient from "@/app/HomePageClient";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import HomePageJsonLd from "@/app/components/HomePageJsonLd";
import { homeFaqItems } from "@/app/lib/homeFaqItems";

/**
 * Server shell: homepage metadata comes from root `layout.tsx`;
 * JSON-LD for the home `WebPage` + primary `SoftwareApplication` is emitted here for indexing.
 */
export default function HomePage() {
  return (
    <>
      <HomePageJsonLd />
      <FAQPageJsonLd items={homeFaqItems} />
      <HomePageClient />
    </>
  );
}
