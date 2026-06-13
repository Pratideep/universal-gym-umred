export type Plan = {
  name: string;
  monthly: number;   // ₹/month if paid monthly
  annual: number;    // total ₹ if paid annually (12 mo)
  coupleMonthly?: number; // ₹/month for couples
  coupleAnnual?: number;  // total ₹ for couples annually
  features: string[];
  highlight?: boolean;
  badge?: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    monthly: 700,
    annual: 0,
    coupleMonthly: 1100,
    coupleAnnual: 0,
    features: [
      "Full gym access",
      "All equipment included",
      "Locker facility",
      "Free fitness assessment",
    ],
  },
  {
    name: "Pro",
    monthly: 1200,
    annual: 0,
    coupleMonthly: 2000,
    coupleAnnual: 0,
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Cardio classes included",
    ],
  },
];

export function planPrice(plan: Plan, billing: "monthly" | "annual", membership: "individual" | "couple" = "individual") {
  const m = membership === "couple" && plan.coupleMonthly ? plan.coupleMonthly : plan.monthly;
  const a = membership === "couple" && plan.coupleAnnual !== undefined ? plan.coupleAnnual : plan.annual;

  if (billing === "monthly") {
    return { display: m, unit: "/month", save: 0, annualTotal: a };
  }
  
  if (!a) {
    return { display: "-", unit: "/month", save: 0, annualTotal: 0 };
  }

  const fullYear = m * 12;
  const save = fullYear - a;
  return { display: Math.round(a / 12), unit: "/month", save, annualTotal: a };
}
