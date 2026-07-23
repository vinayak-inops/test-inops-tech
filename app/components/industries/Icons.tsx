import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M20 13c0 5-3.5 7.5-7.5 8.5-.5.1-1 .1-1.5 0C6.5 20.5 3 18 3 13V6a2 2 0 0 1 1-1.7l7-3.5a2 2 0 0 1 2 0l7 3.5A2 2 0 0 1 20 6z" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export function ShieldOffIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M19.69 14a6.9 6.9 0 00.31-2V5l-8-3-3.16 1.18" />
      <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 005.62-4.38" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export function ScanFaceIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M3 7V5a2 2 0 012-2h2" />
      <path d="M17 3h2a2 2 0 012 2v2" />
      <path d="M21 17v2a2 2 0 01-2 2h-2" />
      <path d="M7 21H5a2 2 0 01-2-2v-2" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
      <path d="M9 15c.5.8 1.5 1.3 3 1.3s2.5-.5 3-1.3" />
    </svg>
  );
}

export function ClockAlertIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  );
}

export function AlertCircleIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="13" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export function AlertTriangleIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M10.29 3.86l-8.18 14.18A2 2 0 004 21h16a2 2 0 001.89-2.96L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export function TimerIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <line x1="10" y1="2" x2="14" y2="2" />
      <line x1="12" y1="14" x2="15" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  );
}

export function ClipboardCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M1 3h15v13H1z" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z" />
    </svg>
  );
}

export function NetworkIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <circle cx="12" cy="4" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M12 6v4M12 10L6 16M12 10l6 6" />
    </svg>
  );
}

export function FingerprintIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M12 11a2 2 0 00-2 2c0 4-1 6-2 7" />
      <path d="M8 12a4 4 0 018 0c0 3 .5 5 1.5 6.5" />
      <path d="M4 10a8 8 0 0116 0v1" />
      <path d="M12 3a9 9 0 00-9 9" />
      <path d="M12 3a9 9 0 019 9" />
    </svg>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

export function HistoryIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M3 3v5h5" />
      <path d="M3.05 13a9 9 0 106.06-8.62" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

export function CircleDotIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function ScanIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M3 7V5a2 2 0 012-2h2" />
      <path d="M17 3h2a2 2 0 012 2v2" />
      <path d="M21 17v2a2 2 0 01-2 2h-2" />
      <path d="M7 21H5a2 2 0 01-2-2v-2" />
    </svg>
  );
}

export function UserCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M17 11l2 2 4-4" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export function ActivityIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function BarChartIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <line x1="4" y1="20" x2="4" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="20" y1="20" x2="20" y2="13" />
    </svg>
  );
}

export function LayoutGridIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export function CogIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <line x1="9" y1="6" x2="9" y2="6.01" />
      <line x1="15" y1="6" x2="15" y2="6.01" />
      <line x1="9" y1="10" x2="9" y2="10.01" />
      <line x1="15" y1="10" x2="15" y2="10.01" />
      <line x1="9" y1="14" x2="9" y2="14.01" />
      <line x1="15" y1="14" x2="15" y2="14.01" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function ZapIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function ShieldCheckSmallIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

// export function ClipboardIcon(props: IconProps) {
//   return (
//     <svg {...base} {...props} aria-hidden>
//       <rect x="8" y="2" width="8" height="4" rx="1" />
//       <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
//     </svg>
//   );
// }

export function DatabaseIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

export function UsersSmallIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function TriangleAlertIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M10.29 3.86l-8.18 14.18A2 2 0 004 21h16a2 2 0 001.89-2.96L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export function TrendingUpIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

export function ArrowUpSmallIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M12 19V5m0 0l-6 6m6-6l6 6" />
    </svg>
  );
}

/** Maps a semantic key (stored in industries.ts) to its icon component. */
export const riskIconMap = {
  users: UsersIcon,
  shield: ShieldIcon,
  "shield-off": ShieldOffIcon,
  "scan-face": ScanFaceIcon,
  "clock-alert": ClockAlertIcon,
  "file-text": FileTextIcon,
  "alert-circle": AlertCircleIcon,
  "alert-triangle": AlertTriangleIcon,
  timer: TimerIcon,
  "clipboard-check": ClipboardCheckIcon,
  briefcase: BriefcaseIcon,
  truck: TruckIcon,
  globe: GlobeIcon,
  network: NetworkIcon,
  fingerprint: FingerprintIcon,
  "graduation-cap": GraduationCapIcon,
  lock: LockIcon,
  history: HistoryIcon,
  "circle-dot": CircleDotIcon,
  scan: ScanIcon,
} as const;

export const governanceIconMap = {
  "user-check": UserCheckIcon,
  fingerprint: FingerprintIcon,
  search: SearchIcon,
  camera: CameraIcon,
  activity: ActivityIcon,
  "shield-check": ShieldCheckIcon,
  "file-text": FileTextIcon,
  "bar-chart": BarChartIcon,
  "layout-grid": LayoutGridIcon,
  cog: CogIcon,
  building: BuildingIcon,
  calendar: CalendarIcon,
  shield: ShieldIcon,
} as const;

export const outcomeIconMap = {
  zap: ZapIcon,
  "shield-check": ShieldCheckSmallIcon,
  clipboard: ClipboardCheckIcon,
  database: DatabaseIcon,
  users: UsersSmallIcon,
  "map-pin": MapPinIcon,
  "triangle-alert": TriangleAlertIcon,
  "trending-up": TrendingUpIcon,
  "arrow-up": ArrowUpSmallIcon,
} as const;


export type GovernanceIconKey = keyof typeof governanceIconMap;
export type RiskIconKey = keyof typeof riskIconMap;
export type OutcomeIconKey = keyof typeof outcomeIconMap;