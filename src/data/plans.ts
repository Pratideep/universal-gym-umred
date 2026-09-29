export type Plan = {
  name: string;
  monthly: number;   // ₹/month if paid monthly
  annual: number;    // total ₹ if paid annually (12 mo)
  coupleMonthly?: number; // ₹/month for couples
  coupleAnnual?: number;  // total ₹ for couples annually
  description?: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    monthly: 700,
    annual: 7000,
    coupleMonthly: 1100,
    coupleAnnual: 11000,
    description: "Full gym floor access for students, beginners, and everyday lifters.",
    features: [
      "Full gym access during open hours",
      "All 50+ strength machines & free weights",
      "Locker facility included free",
      "Free initial fitness & machine orientation",
    ],
  },
  {
    name: "Pro",
    monthly: 1200,
    annual: 12000,
    coupleMonthly: 2000,
    coupleAnnual: 20000,
    description: "Full access plus cardio classes and posing room for serious goals.",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything included in Starter",
      "Dedicated cardio classes & endurance zone",
      "Posing room & mobility area access",
      "Periodic workout review & guidance",
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
