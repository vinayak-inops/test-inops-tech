"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ModuleData } from "@/app/lib/module";
import {
  AnimatedSection,
  AnimatedHeading,
  AnimatedParagraph,
  AnimatedCardGrid,
  AnimatedCardItem,
} from "../AnimatedSection";

interface Props {
  data: ModuleData;
}

interface StatusCard {
  icon: (props: { className?: string }) => React.JSX.Element;
  label: string;
  value?: string;
  iconBg: string;
  iconColor: string;
}

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BarChartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M4 20V10M12 20V4M20 20v-7"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="currentColor"
      strokeWidth={1.8}
    />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloudIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M7 18a4.5 4.5 0 0 1-.5-8.97A5.5 5.5 0 0 1 17.3 8.02 4 4 0 0 1 17 16H7Z"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 3 4.5 6v5.5c0 4.5 3.2 7.6 7.5 9 4.3-1.4 7.5-4.5 7.5-9V6L12 3Z"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
    <path
      d="m9.5 12 1.8 1.8L14.8 10"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={1.8} />
    <path
      d="M12 11v5.5M12 8v.01"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </svg>
);

const statusCards: StatusCard[] = [
  {
    icon: CheckCircleIcon,
    label: "All Systems Active",
    value: "100% Uptime",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: BarChartIcon,
    label: "Total Records",
    value: "1.2M",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: SettingsIcon,
    label: "API Requests",
    value: "50k / hr",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: CloudIcon,
    label: "Data Synchronization",
    value: "All Nodes Synced",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    icon: ShieldCheckIcon,
    label: "Active Audits",
    value: "3",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: InfoIcon,
    label: "Integration Map",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

export default function HeroSection({ data }: Props) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-50 to-white">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/modules/Module-Page.jpeg"
              alt="Module background"
              fill
              priority
              className="object-cover object-right"
            />
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 bg-linear-to-r from-white from-25% via-white/60 via-55% to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white" />
      </div>

      <motion.div
        className="pointer-events-none absolute right-0 top-0 z-0 h-125 w-125 rounded-full bg-blue-500 opacity-30 blur-[80px]"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:px-8 relative z-10">
        <AnimatedSection className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex w-max items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            {data.badge}
          </motion.div>

          <AnimatedHeading as="h1" className="text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 md:text-5xl">
            {data.title}
          </AnimatedHeading>

          <AnimatedParagraph className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
            {data.description}
          </AnimatedParagraph>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/contact" className="group rounded-xl bg-[var(--inops-blue)] px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:to-blue-500">
              Book a Demo
            </Link>
            <Link href="/contract-labour-management" className="group flex items-center gap-2 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm px-5 py-3 text-sm font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:-translate-y-0.5 hover:border-blue-200">
              All CLMS Modules
              <span className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-blue-600">→</span>
            </Link>
          </motion.div>

          <AnimatedCardGrid className="mt-10 grid grid-cols-3 gap-3">
            {data.metrics.map((metric) => {
              const parts = metric.split(" ");
              const num = parts[0];
              const label = parts.slice(1).join(" ");
              return (
                <AnimatedCardItem key={metric} direction="bottom">
                  <div className="h-full rounded-2xl border border-gray-100 bg-white/60 backdrop-blur-md px-3 py-4 shadow-sm transition-shadow hover:shadow-md">
                    <div className="text-xl font-extrabold text-gray-900">
                      {num}
                    </div>
                    <div className="mt-1 text-xs text-gray-500">{label}</div>
                  </div>
                </AnimatedCardItem>
              );
            })}
          </AnimatedCardGrid>
        </AnimatedSection>
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="w-full max-w-md"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-xl"
            >
              <div className="flex items-center gap-5 border-b border-gray-100 text-sm font-semibold">
                <button className="border-b-2 border-blue-400 pb-3 text-blue-600">
                  Status
                </button>
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900">
                Real-time System Insights
              </h3>
              <p className="mt-1 text-sm! text-gray-500">
                Monitor Key Metrics and Integration Status Across Your Organization
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {statusCards.map(({ icon: Icon, label, value, iconBg, iconColor }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-full ${iconBg}`}>
                      <Icon className={`h-4 w-4 ${iconColor}`} />
                    </div>
                    <div className="text-[11px]! text-gray-500">{label}</div>
                    {value && (
                      <div className="mt-0.5 text-sm! font-bold text-gray-900">
                        {value}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}