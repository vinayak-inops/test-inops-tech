"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type MegaMenuItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const iconProps = {
  className: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  viewBox: "0 0 24 24",
} as const;

const ShieldCheckIcon = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>
);

const ServerIcon = () => (
  <svg {...iconProps}>
    <rect x="4" y="4" width="16" height="6" rx="1.5" />
    <rect x="4" y="14" width="16" height="6" rx="1.5" />
    <path strokeLinecap="round" d="M7.5 7h.01M7.5 17h.01" />
  </svg>
);

const FingerprintIcon = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a8 8 0 018 8c0 2.5-.5 4.5-1.5 6.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a8 8 0 00-8 8c0 1.8.3 3.2.8 4.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5a4.5 4.5 0 014.5 4.5c0 3-1 5.5-2.3 7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5A4.5 4.5 0 007.5 12c0 2 .3 3.6.9 5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v1c0 3-.7 5.3-1.8 7" />
  </svg>
);

const ClipboardCheckIcon = () => (
  <svg {...iconProps}>
    <rect x="6" y="4" width="12" height="16" rx="1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.5h6v2H9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 13l1.8 1.8 3.2-3.6" />
  </svg>
);

const UsersIcon = () => (
  <svg {...iconProps}>
    <circle cx="9" cy="8" r="3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 4.5a3 3 0 010 6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 14c2.5.3 4.5 2.2 4.5 5" />
  </svg>
);

const FactoryIcon = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V11l5 3.5V11l5 3.5V9l6 4v7H4z" />
    <path strokeLinecap="round" d="M8 20v-3M13 20v-3M18 20v-3" />
  </svg>
);

const TruckIcon = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v9H3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4l3 3v3h-7z" />
    <circle cx="7.5" cy="18" r="1.6" />
    <circle cx="17.5" cy="18" r="1.6" />
  </svg>
);

const CarIcon = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l1.5-5A2 2 0 017.4 9.5h9.2A2 2 0 0118.5 11L20 16" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16h16v2.5a1 1 0 01-1 1h-1.5a1 1 0 01-1-1V17h-9v1.5a1 1 0 01-1 1H5a1 1 0 01-1-1V16z" />
    <circle cx="8" cy="16.5" r="1.4" />
    <circle cx="16" cy="16.5" r="1.4" />
  </svg>
);

const BuildingIcon = () => (
  <svg {...iconProps}>
    <rect x="5" y="3" width="9" height="18" rx="1" />
    <rect x="14" y="9" width="5" height="12" rx="1" />
    <path strokeLinecap="round" d="M8 7h1M11 7h1M8 11h1M11 11h1M8 15h1M11 15h1M16.5 12.5h1M16.5 16h1" />
  </svg>
);

const ChipIcon = () => (
  <svg {...iconProps}>
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <path strokeLinecap="round" d="M9 4v3M12 4v3M15 4v3M9 17v3M12 17v3M15 17v3M4 9h3M4 12h3M4 15h3M17 9h3M17 12h3M17 15h3" />
  </svg>
);

const serviceItems: MegaMenuItem[] = [
  { label: "BG Services", href: "/services/bgv", icon: <ShieldCheckIcon /> },
  { label: "Managed Hardware Services", href: "/services/amc", icon: <ServerIcon /> },
  { label: "Biometric", href: "/services/fleet-audit", icon: <FingerprintIcon /> },
  { label: "Compliance Health Check", href: "/services/clra-audit-readiness", icon: <ClipboardCheckIcon /> },
  { label: "Verified Workforce Supply", href: "/services/workforce-supply", icon: <UsersIcon /> },
];

const industryItems: MegaMenuItem[] = [
  { label: "Manufacturing", href: "/industries/manufacturing", icon: <FactoryIcon /> },
  { label: "Automobile", href: "/industries/automotive", icon: <CarIcon /> },
  { label: "Electronics", href: "/industries/electronics", icon: <ChipIcon /> },
  { label: "Logistics", href: "/industries/logistics-warehousing", icon: <TruckIcon /> },
  { label: "Pharmaceutical", href: "/industries/pharmaceutical", icon: <BuildingIcon /> },
];

function MegaMenuGroup({
  eyebrow,
  heading,
  items,
  onNavigate,
  delayOffset,
}: {
  eyebrow: string;
  heading: string;
  items: MegaMenuItem[];
  onNavigate?: () => void;
  delayOffset: number;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
        {eyebrow} <span className="text-slate-300">{">"}</span>{" "}
        <span className="text-slate-600">{heading}</span>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: delayOffset + i * 0.03 }}
          >
            <Link
              href={item.href}
              onClick={onNavigate}
              className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all hover:border-blue-100 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white hover:shadow-md hover:shadow-blue-900/[0.06]"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center text-[var(--inops-blue)]">
                {item.icon}
              </span>
              <span className="text-[0.95rem] font-bold text-[#0f172a] transition-colors">
                {item.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ServicesMegaMenuDesktop({
  menuId,
  onNavigate,
}: {
  menuId: string;
  onNavigate?: () => void;
}) {
  return (
    <motion.div
      id={menuId}
      role="group"
      aria-label="Services submenu"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className="fixed left-4 right-4 top-[var(--home-nav-offset)] z-[100] w-screen"
    >
      <div className="border-t border-slate-100 bg-white shadow-2xl shadow-slate-900/[0.12]">
        <div className="mx-auto max-w-7xl px-6 py-9 lg:px-12">
          <div className="mb-7 border-b border-slate-100 pb-6">
            <h3 className="text-xl font-bold text-slate-900">Services</h3>
            <p className="mt-1.5 text-sm text-slate-500">
              Hardware, compliance, and workforce services built for industrial sites.
            </p>
          </div>
          <div className="space-y-8">
            <MegaMenuGroup
              eyebrow="SERVICES"
              heading="BY OFFERING"
              items={serviceItems}
              onNavigate={onNavigate}
              delayOffset={0}
            />
            <MegaMenuGroup
              eyebrow="SERVICES"
              heading="BY INDUSTRIES"
              items={industryItems}
              onNavigate={onNavigate}
              delayOffset={0.1}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesMegaMenuMobile({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="space-y-6 border-t border-gray-100 px-2 pb-4 pt-3">
      <div>
        <p className="px-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          Services <span className="text-slate-300">{">"}</span>{" "}
          <span className="text-slate-600">By offering</span>
        </p>
        <div className="mt-2 space-y-1">
          {serviceItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50 text-[var(--inops-blue)]">
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="px-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          Services <span className="text-slate-300">{">"}</span>{" "}
          <span className="text-slate-600">By industries</span>
        </p>
        <div className="mt-2 space-y-1">
          {industryItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50 text-[var(--inops-blue)]">
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}