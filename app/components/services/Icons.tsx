
import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

function BaseSvg(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    />
  );
}

/** Manual Verification / Manual Compliance Tracking / Slow Mobilisation */
export function ClockIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </BaseSvg>
  );
}

/** Generic risk / warning triangle: Payroll Leakage, Statutory Exposure, No Early Warning */
export function AlertTriangleIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M10.29 3.86l-8.18 14.18A2 2 0 004.18 21h15.64a2 2 0 001.87-2.96L13.71 3.86a2 2 0 00-3.42 0z" />
      <path d="M12 9v4m0 4h.01" />
    </BaseSvg>
  );
}

/** Forged Documents: ID / card icon */
export function IdCardIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <circle cx="8.5" cy="12" r="2" />
      <path d="M6 16.2c.6-1.2 1.6-1.9 2.5-1.9s1.9.7 2.5 1.9" />
      <path d="M14 9.5h5M14 12.5h5M14 15.5h3" />
    </BaseSvg>
  );
}

/** Compliance Risk shield with x: BGV, CLRA, Fleet Audit */
export function ShieldAlertIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path d="M9.5 9.5l5 5m0-5l-5 5" />
    </BaseSvg>
  );
}

/** Vendor Inconsistency / Fragmented Vendors / Fragmented Sourcing / Fragmented Oversight: stacked layers */
export function LayersIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </BaseSvg>
  );
}

/** Poor Visibility / No Central Visibility / Poor Data Trust / Poor Ram Visibility: eye-off */
export function EyeOffIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M3 3l18 18" />
      <path d="M10.58 10.58a2 2 0 002.83 2.83" />
      <path d="M9.88 5.09A9.77 9.77 0 0112 5c5 0 9 4.5 10 7-.32.9-1.02 2.14-2.06 3.36M6.22 6.22C4.06 7.6 2.52 9.6 2 12c1 2.5 5 7 10 7 1.55 0 3-.42 4.27-1.14" />
    </BaseSvg>
  );
}

/** Device Downtime / warning circle */
export function AlertCircleIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5m0 3h.01" />
    </BaseSvg>
  );
}

/** Reactive Repairs / refresh-cycle */
export function RefreshCwIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M3 12a9 9 0 0115.36-6.36L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 01-15.36 6.36L3 16" />
      <path d="M3 21v-5h5" />
    </BaseSvg>
  );
}

/** Firmware Drift / bug icon */
export function BugIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <rect x="8" y="8" width="8" height="10" rx="4" />
      <path d="M12 8V5m0 0L9.5 3M12 5l2.5-2" />
      <path d="M4 11h4m8 0h4M4 15h4m8 0h4M8 18l-3 2m14-2l3 2" />
    </BaseSvg>
  );
}

/** Unplanned Costs / trending up */
export function TrendingUpIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </BaseSvg>
  );
}

/** Ghost Enrollments / user with plus-x, ghost-like user icon */
export function UserGhostIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <circle cx="10" cy="8" r="3.2" />
      <path d="M4.5 20c.7-3.3 3-5 5.5-5s4.8 1.7 5.5 5" />
      <path d="M17 8l2 2m0-2l-2 2" />
    </BaseSvg>
  );
}

/** Duplicate Identities / two overlapping user icons */
export function UsersIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20c.6-3 2.8-4.7 5.5-4.7s4.9 1.7 5.5 4.7" />
      <circle cx="17" cy="7" r="2.4" />
      <path d="M15 12c2.3.3 3.9 1.9 4.5 4.6" />
    </BaseSvg>
  );
}

/** Unauthorized Access / lock */
export function LockIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M8 10.5V7a4 4 0 018 0v3.5" />
    </BaseSvg>
  );
}

/** No Audit Trail / Poor Documentation / document with check */
export function FileCheckIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M7 3h7l4 4v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14 3v4h4" />
      <path d="M9.5 14.5l1.8 1.8L15 12.7" />
    </BaseSvg>
  );
}

/** Unclear Ownership / briefcase */
export function BriefcaseIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path d="M3 13h18" />
    </BaseSvg>
  );
}

/** Unverified Deployment / shield with x (reuse ShieldAlertIcon visually distinct: shield-off) */
export function ShieldOffIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path d="M3 3l18 18" />
    </BaseSvg>
  );
}

/** Onboarding Friction / fingerprint-esque, using user-check as friendlier fallback */
export function UserCheckIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.7-3.3 3-5 5.5-5s4.8 1.7 5.5 5" />
      <path d="M16 12l2 2 3-3.5" />
    </BaseSvg>
  );
}

export function UploadIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M12 15V4" />
      <path d="M8 8l4-4 4 4" />
      <path d="M4 15v3a2 2 0 002 2h12a2 2 0 002-2v-3" />
    </BaseSvg>
  );
}
 
/** Verify: scan frame / corner brackets */
export function ScanIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M4 8V6a2 2 0 012-2h2" />
      <path d="M16 4h2a2 2 0 012 2v2" />
      <path d="M20 16v2a2 2 0 01-2 2h-2" />
      <path d="M8 20H6a2 2 0 01-2-2v-2" />
      <rect x="9" y="9" width="6" height="6" rx="1" strokeDasharray="2 2" />
    </BaseSvg>
  );
}
 
/** Report: document with checkmark */
export function DocumentCheckIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M6 3.5h9l3 3V19a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 19V5A1.5 1.5 0 017.5 3.5z" />
      <path d="M9 12.5l2 2 4-4.5" />
    </BaseSvg>
  );
}
 
/** Deploy: check inside circle */
export function CheckCircleIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.3l2.4 2.4 4.6-5.4" />
    </BaseSvg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </BaseSvg>
  );
}

/** Ghost Employee Detection / Identity Audit: user with X */
export function UserXIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.7-3.3 3-5 5.5-5s4.8 1.7 5.5 5" />
      <path d="M16 8l4 4m0-4l-4 4" />
    </BaseSvg>
  );
}

/** Bulk De-enrollment: refresh/cycle (reuse RefreshCwIcon visually distinct name) */
export function RefreshIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M3 12a9 9 0 0115.36-6.36L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 01-15.36 6.36L3 16" />
      <path d="M3 21v-5h5" />
    </BaseSvg>
  );
}

/** Attendance Audit Reporting / Contractor Documentation Review: document */
export function FileTextIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M7 3h7l4 4v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14 3v4h4" />
      <path d="M9 12.5h6M9 15.5h6M9 9.5h2" />
    </BaseSvg>
  );
}

/** Principal Employer Compliance: briefcase (reuse BriefcaseIcon, already defined) */

/** Risk Scorecard: gauge/dial */
export function GaugeIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M4.5 17a8 8 0 1115 0" />
      <path d="M12 13l3-3.5" />
      <path d="M12 13a1.5 1.5 0 100 .01" />
    </BaseSvg>
  );
}

export function BarChartIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M4 20V10" />
      <path d="M12 20V4" />
      <path d="M20 20v-7" />
    </BaseSvg>
  );
}

export function CpuIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="2.5" width="4" height="3" />
      <rect x="10" y="18.5" width="4" height="3" />
      <rect x="2.5" y="10" width="3" height="4" />
      <rect x="18.5" y="10" width="3" height="4" />
    </BaseSvg>
  );
}

/** Pre-Employment Screening: pulse/activity */
export function ActivityIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M3 12h4l2.5-7 4 14 2.5-7H21" />
    </BaseSvg>
  );
}

/** Remote Diagnostics: wifi */
export function WifiIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M3.5 9a13 13 0 0117 0" />
      <path d="M6.5 12.5a8.5 8.5 0 0111 0" />
      <path d="M9.5 16a4 4 0 015 0" />
      <path d="M12 19.5h.01" />
    </BaseSvg>
  );
}

export function MaintenanceIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v2.5M12 19v2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2.5 12H5M19 12h2.5M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </BaseSvg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M12 21s7-6.6 7-11.5A7 7 0 105 9.5C5 14.4 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </BaseSvg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4.5" />
    </BaseSvg>
  );
}

/** Contract Labour Deployment: truck */
export function TruckIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <rect x="1.5" y="7" width="13" height="9" rx="1" />
      <path d="M14.5 10h4l3 3v3h-7z" />
      <circle cx="6" cy="18" r="1.7" />
      <circle cx="17" cy="18" r="1.7" />
    </BaseSvg>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" />
      <path d="M4.5 5.5V18c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V5.5" />
      <path d="M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5" />
    </BaseSvg>
  );
}


export const iconRegistry = {
  clock: ClockIcon,
  "alert-triangle": AlertTriangleIcon,
  "id-card": IdCardIcon,
  "shield-alert": ShieldAlertIcon,
  layers: LayersIcon,
  "eye-off": EyeOffIcon,
  "alert-circle": AlertCircleIcon,
  "refresh-cw": RefreshCwIcon,
  bug: BugIcon,
  "trending-up": TrendingUpIcon,
  "user-ghost": UserGhostIcon,
  users: UsersIcon,
  lock: LockIcon,
  "file-check": FileCheckIcon,
  briefcase: BriefcaseIcon,
  "shield-off": ShieldOffIcon,
  "user-check": UserCheckIcon,
  upload: UploadIcon,
  scan: ScanIcon,
  "document-check": DocumentCheckIcon,
  "check-circle": CheckCircleIcon,
  search: SearchIcon,
  "user-x": UserXIcon,
  refresh: RefreshIcon,
  "file-text": FileTextIcon,
  gauge: GaugeIcon,
  "bar-chart": BarChartIcon,
  cpu: CpuIcon,
  activity: ActivityIcon,
  wifi: WifiIcon,
  maintenance: MaintenanceIcon,
  "map-pin": MapPinIcon,
  "shield-check": ShieldCheckIcon,
  truck: TruckIcon,
  database: DatabaseIcon,
} as const;

export type IconName = keyof typeof iconRegistry;

const titleToIconName: Record<string, IconName> = {

  "Manual Verification": "clock",
  "Payroll Leakage": "alert-triangle",
  "Forged Documents": "id-card",
  "Compliance Risk": "shield-alert",
  "Vendor Inconsistency": "layers",
  "Poor Visibility": "eye-off",

  "Device Downtime": "alert-circle",
  "No Central Visibility": "eye-off",
  "Reactive Repairs": "refresh-cw",
  "Fragmented Vendors": "layers",
  "Firmware Drift": "bug",
  "Unplanned Costs": "trending-up",

  "Ghost Enrollments": "user-ghost",
  "Duplicate Identities": "users",
  "Unauthorized Access": "lock",
  "No Audit Trail": "file-check",
  "Poor Data Trust": "eye-off",

  "Manual Compliance Tracking": "clock",
  "Unclear Ownership": "briefcase",
  "Poor Documentation": "file-check",
  "No Early Warning": "alert-triangle",
  "Fragmented Oversight": "layers",

  "Slow Mobilisation": "clock",
  "Unverified Deployment": "shield-off",
  "Onboarding Friction": "user-check",
  "Statutory Exposure": "alert-triangle",
  "Fragmented Sourcing": "layers",
  "Poor Ramp Visibility": "eye-off",

  // process steps (ProcessFlow) — shared across services
  Submit: "upload",
  Verify: "scan",
  Report: "document-check",
  Deploy: "check-circle",

  // capabilities — featured tiles
  "60+ Verification Checks": "shield-check",
  "BGV-cleared Workers": "user-check",
  "Biometric Database Audit": "database",
  "CLRA Compliance Audit": "shield-check",
  "Preventive & Corrective Maintenance": "maintenance",

  "Identity Verification": "id-card",
  "Digital Background Verification": "file-text",
  "Compliance Tracking": "bar-chart",
  "API Integration": "cpu",
  "Pre-Employment Screening": "activity",

  // capabilities — amc
  "Remote Diagnostics": "wifi",
  "On-site Engineer Support": "user-check",
  "Biometric Device Maintenance": "maintenance",
  "Device Health Monitoring": "activity",
  "Access Control Maintenance": "map-pin",

  // capabilities — fleet-audit
  "Duplicate Biometric Cleanup": "search",
  "Ghost Employee Detection": "user-x",
  "Identity Audit": "user-x",
  "Bulk De-enrollment": "refresh",
  "Attendance Audit Reporting": "file-text",

  // capabilities — clra-audit-readiness
  "Contractor Documentation Review": "file-text",
  "Principal Employer Compliance": "briefcase",
  "Gap Analysis": "search",
  "Risk Scorecard": "gauge",
  "Labour Law Compliance Report": "bar-chart",

  // capabilities — workforce-supply
  "Digital Onboarding": "upload",
  "Biometric Enrollment": "scan",
  "Skilled Workforce Matching": "clock",
  "Statutory Compliance": "shield-check",
  "Contract Labour Deployment": "truck",
};

export interface IconProps_ extends IconProps {
  name?: IconName;
  title?: string;
}

export function Icon({ name, title, ...rest }: IconProps_) {
  const resolvedName = name ?? (title ? titleToIconName[title] : undefined);
  const Component = (resolvedName && iconRegistry[resolvedName]) || AlertTriangleIcon;
  return <Component {...rest} />;
}

export function resolveIconName(title: string, explicit?: IconName): IconName {
  return explicit ?? titleToIconName[title] ?? "alert-triangle";
}