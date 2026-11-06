/**
 * Solutions mega-menu: 4 columns per row. Accent = first column (light blue).
 */

export type SolutionsMegaCell =
  | { type: "empty" }
  | {
      type: "tile";
      title: string;
      subtitle? : string;
      description: string;
      href: string;
      accent?: boolean;
    };

export const solutionsMegaRows: SolutionsMegaCell[][] = [
  [
    {
      type: "tile",
      accent: true,
      title: "Contract Labour Management Solution",
      description: "End-to-end platform for Contract Labour Management, time, and attendance.",
      href: "/contract-labour-management",
    },
    {
      type: "tile",
      title: "Iddion RegX- External",
      subtitle: "Contract Labour Management Solution",
      description: "Contract Labour Management with compliance, attendance & payroll.",
      href: "/contract-labour-management",
    },
    {
      type: "tile",
      title: "Iddion RegX- Core",
      subtitle: "Human Resource Information System",
      description: "Central employee records and labour workflows for your organisation.",
      href: "/hris",
    },
    {
      type: "tile",
      title: "Vizion",
      subtitle: "Canteen and visitor managemnt",
      description: "Canteen operations and visitor flow across your premises.",
      href: "/canteen-and-visitor",
    },
  ],
  [
    {
      type: "tile",
      accent: true,
      title: "Identity & Face Solution",
      description: "Mobile and hardware identity for attendance, access, and verification.",
      href: "/mobile-app-attendance",
    },
    {
      type: "tile",
      title: "Mobile App",
      description: "Employee self-service and identity on the go.",
      href: "/mobile-app-attendance",
    },
    {
      type: "tile",
      title: "CCTV Attendance",
      description: "Attendance backed by CCTV and vision workflows.",
      href: "/cctv-attendance",
    },
    {
      type: "tile",
      title: "Face Recognition Attendance",
      description: "Face recognition attendance system and biometric attendance machines for factory gates.",
      href: "/face-recognition-attendance",
    },
  ],
  // [
  //   {
  //     type: "tile",
  //     accent: true,
  //     title: "Products",
  //     description: "Hardware and accessories for access, attendance, and perimeter control.",
  //     href: "/face",
  //   },
  //   {
  //     type: "tile",
  //     title: "Biometric Access Control",
  //     description: "Readers, controllers, and integrations for secure entry and identity.",
  //     href: "/face",
  //   },
  //   {
  //     type: "tile",
  //     title: "Turnstiles",
  //     description: "Speed gates and turnstiles for orderly, high-throughput access.",
  //     href: "/turnstiles-access",
  //   },
  //   {
  //     type: "tile",
  //     title: "Accessories",
  //     description: "Mounts, cards, cables, and add-ons to complete your deployment.",
  //     href: "/accessories",
  //   },
  // ],
  [
    {
      type: "tile",
      accent: true,
      title: "Enterprise Solution",
      description: "Enterprise-wide visibility for assets and operations.",
      href: "/enterprise-solution",
    },
    {
      type: "tile",
      title: "Warehouse Management",
      description: "Advanced inventory control with barcode scanning and real-time visibility.",
      href: "/warehouse-management",
    },
    {
      type: "tile",
      title: "Delivery Management",
      description: "Optimize deliveries with route planning, and real-time shipment visibility.",
      href: "/delivery-management",
    },
    {
      type: "tile",
      title: "Order Management",
      description: "Automate order processing and returns with complete end-to-end visibility.",
      href: "/order-management",
    },
  ],
  [
    {
      type: "tile",
      accent: true,
      title: "EWA (Earned Wage Access)",
      description: "Early access to earned wages when employees need financial flexibility.",
      href: "/earned-wage-access",
    },
    {
      type: "tile",
      title: "CLMS Pricing",
      subtitle: "Iddion RegX",
      description: "How Iddion RegX is scoped and quoted for your sites.",
      href: "/clms-pricing",
    },
    // {
    //   type: "tile",
    //   title: "Biometric Access Control",
    //   description: "Readers, controllers, and integrations for secure entry and identity.",
    //   href: "/face",
    // },
    // {
    //   type: "tile",
    //   title: "Turnstiles",
    //   description: "Speed gates and turnstiles for orderly, high-throughput access.",
    //   href: "/turnstiles-access",
    // },
    // {
    //   type: "tile",
    //   title: "Accessories",
    //   description: "Mounts, cards, cables, and add-ons to complete your deployment.",
    //   href: "/accessories",
    // },

  ],
];
