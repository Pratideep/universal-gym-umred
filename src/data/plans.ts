export type Plan = {
  name: string;
  monthly: number;   // ₹/month if paid monthly
  annual: number;    // total ₹ if paid annually (12 mo)
  features: string[];
  highlight?: boolean;
  badge?: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    monthly: 700,
    annual: 6500,
    features: [
      "Full gym access",
      "All equipment included",
      "Locker facility",
      "Free fitness assessment",
    ],
  },
  {
    name: "Pro",
    monthly: 1000,
    annual: 8500,
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Cardio classes included",
      "Monthly progress review",
    ],
  },
  {
    name: "Elite",
    monthly: 1500,
    annual: 13000,
    features: [
      "Everything in Pro",
      "Priority coach sessions",
      "1-on-1 quarterly check-ins",
    ],
  },
];

export function planPrice(plan: Plan, billing: "monthly" | "annual") {
  if (billing === "monthly") {
    return { display: plan.monthly, unit: "/month", save: 0 };
  }
  const fullYear = plan.monthly * 12;
  const save = fullYear - plan.annual;
  return { display: Math.round(plan.annual / 12), unit: "/month", save };
}
