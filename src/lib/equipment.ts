export type EquipmentItem = {
  src: string;
  name: string;
  subtitle?: string;
  qty?: number;
};

export type EquipmentCategory = {
  slug: string;
  label: string;
  items: EquipmentItem[];
};

const equipmentCatalog: EquipmentCategory[] = [
  {
    slug: "general",
    label: "Gym Floor",
    items: [
      {
        src: "/images/general/gym-floor-plate-loaded-row.jpeg",
        name: "Main Strength Floor",
        subtitle: "Jaguar Series plate-loaded machines row",
      },
      {
        src: "/images/general/gym-floor-cardio-mural.jpeg",
        name: "Cardio & Signature Floor",
        subtitle: "Dedicated cardio row & motivational wall",
      },
      {
        src: "/images/general/gym-floor-free-weights-training.jpeg",
        name: "Free Weights & Dumbbells",
        subtitle: "Complete dumbbell rack and multi-angle benches",
      },
      {
        src: "/images/general/gym-floor-high-ceiling-overview.jpeg",
        name: "Spacious Training Arena",
        subtitle: "High ceiling layout with full mirror wall",
      },
      {
        src: "/images/general/gym-floor-spin-core-zone.jpeg",
        name: "Spin & Conditioning Area",
        subtitle: "Spin bikes, stairmaster, and core stations",
      },
      {
        src: "/images/general/gym-floor-lat-pulldown-squat.jpeg",
        name: "Power & Back Stations",
        subtitle: "Squat racks, power stations, and lat pulldowns",
      },
      {
        src: "/images/general/gym-floor-squat-legpress-station.jpeg",
        name: "Heavy Leg Press Station",
        subtitle: "Plate-loaded 45-degree leg press setup",
      },
      {
        src: "/images/general/gym-floor-cardio-machines.jpeg",
        name: "Cardio & Selectorized Line",
        subtitle: "Cross-trainers, treadmills, and pin-select machines",
      },
      {
        src: "/images/general/gym-reception-lounge.jpeg",
        name: "Front Reception & Lounge",
        subtitle: "Welcoming entrance and member check-in lounge",
      },
    ],
  },
  {
    slug: "chest",
    label: "Chest",
    items: [
      {
        src: "/images/equipment/chest/flat-barbell-press.jpg",
        name: "Flat Barbell Press",
        subtitle: "Heavy compound pressing station",
      },
      {
        src: "/images/equipment/chest/incline-bench.jpg",
        name: "Incline Bench",
        subtitle: "Upper chest dumbbell and barbell work",
      },
      {
        src: "/images/equipment/chest/incline-chest-press.jpg",
        name: "Incline Chest Press",
        subtitle: "Plate-loaded upper chest press",
      },
      {
        src: "/images/equipment/chest/incline-press-machine.jpg",
        name: "Incline Press Machine",
        subtitle: "Guided incline pressing movement",
      },
      {
        src: "/images/equipment/chest/decline-barbell.jpg",
        name: "Decline Barbell Bench",
        subtitle: "Lower chest barbell setup",
      },
      {
        src: "/images/equipment/chest/decline-machine.jpg",
        name: "Decline Press Machine",
        subtitle: "Supported lower chest press",
      },
      {
        src: "/images/equipment/chest/pec-dec-fly.jpg",
        name: "Pec Deck Fly",
        subtitle: "Chest isolation and squeeze work",
      },
      {
        src: "/images/equipment/chest/cable-pully.jpg",
        name: "Cable Pulley Station",
        subtitle: "Adjustable cable fly and crossover setup",
      },
    ],
  },
  {
    slug: "back",
    label: "Back",
    items: [
      {
        src: "/images/equipment/back/assisted-pull-up.jpg",
        name: "Assisted Pull-Up Machine",
        subtitle: "Pull-ups and dips with assistance",
      },
      {
        src: "/images/equipment/back/lat-pulldown-machine.jpg",
        name: "Lat Pulldown Machine",
        subtitle: "Classic vertical pulling station",
      },
      {
        src: "/images/equipment/back/iso-lateral-lat-pulldown.jpg",
        name: "Iso-Lateral Lat Pulldown",
        subtitle: "Independent arm pulldown movement",
      },
      {
        src: "/images/equipment/back/seated-row-machine.jpg",
        name: "Seated Row Machine",
        subtitle: "Mid-back and lat-focused rowing",
      },
      {
        src: "/images/equipment/back/low-row-machine.jpg",
        name: "Low Row Machine",
        subtitle: "Close-line row for thickness",
      },
      {
        src: "/images/equipment/back/chest-supported-tbar-row.jpg",
        name: "Chest-Supported T-Bar Row",
        subtitle: "Heavy row with lower-back support",
      },
      {
        src: "/images/equipment/back/back-extension.jpg",
        name: "Back Extension Bench",
        subtitle: "Posterior chain and lower-back work",
      },
    ],
  },
  {
    slug: "shoulders",
    label: "Shoulders",
    items: [
      {
        src: "/images/equipment/shoulders/dumbell-rack.jpg",
        name: "Dumbbell Rack",
        subtitle: "Full free-weight shoulder pressing range",
      },
      {
        src: "/images/equipment/shoulders/dumbell.jpg",
        name: "Heavy Dumbbells",
        subtitle: "Single-arm raises, presses, and shrugs",
      },
      {
        src: "/images/equipment/shoulders/seated-lateral-raises-machine.jpg",
        name: "Seated Lateral Raise Machine",
        subtitle: "Strict side-delt isolation",
      },
      {
        src: "/images/equipment/shoulders/standing-lateral-raises.jpg",
        name: "Standing Lateral Raise Station",
        subtitle: "Controlled delt-volume work",
      },
    ],
  },
  {
    slug: "legs",
    label: "Legs",
    items: [
      {
        src: "/images/equipment/legs/leg press.jpg",
        name: "Leg Press",
        subtitle: "High-load quad and glute pressing",
      },
      {
        src: "/images/equipment/legs/hack-squat.jpg",
        name: "Hack Squat",
        subtitle: "Stable squat pattern for lower body",
      },
      {
        src: "/images/equipment/legs/belt-squat.jpg",
        name: "Belt Squat",
        subtitle: "Spine-friendly squat loading",
      },
      {
        src: "/images/equipment/legs/power-squat.jpg",
        name: "Power Squat",
        subtitle: "Compound lower-body strength machine",
      },
      {
        src: "/images/equipment/legs/smith-machine.jpg",
        name: "Smith Machine",
        subtitle: "Guided squats, lunges, and presses",
      },
      {
        src: "/images/equipment/legs/leg-extension.jpg",
        name: "Leg Extension",
        subtitle: "Quad isolation finisher",
      },
      {
        src: "/images/equipment/legs/standing-hamstring-curl.jpg",
        name: "Standing Hamstring Curl",
        subtitle: "Single-leg posterior chain isolation",
      },
      {
        src: "/images/equipment/legs/adductor-machine.jpg",
        name: "Adductor Machine",
        subtitle: "Inner-thigh strength and control",
      },
      {
        src: "/images/equipment/legs/seated-calf-raise.jpg",
        name: "Seated Calf Raise",
        subtitle: "Direct soleus and calf work",
      },
    ],
  },
  {
    slug: "arms",
    label: "Arms",
    items: [
      {
        src: "/images/equipment/arms/seated-biceps-curl-machine.jpg",
        name: "Seated Biceps Curl Machine",
        subtitle: "Guided curl with strict elbow position",
      },
      {
        src: "/images/equipment/arms/preacher-curl-machine.jpg",
        name: "Preacher Curl Machine",
        subtitle: "Controlled peak-contraction curls",
      },
      {
        src: "/images/equipment/arms/preacher-curl-plate-loaded.jpg",
        name: "Plate-Loaded Preacher Curl",
        subtitle: "Heavy biceps work with stable support",
      },
    ],
  },
  {
    slug: "core",
    label: "Core",
    items: [
      {
        src: "/images/equipment/core/crunch-machine.jpg",
        name: "Crunch Machine",
        subtitle: "Weighted abdominal flexion",
      },
      {
        src: "/images/equipment/core/crunch.jpg",
        name: "Ab Crunch Station",
        subtitle: "Focused core-volume work",
      },
    ],
  },
  {
    slug: "cardio",
    label: "Cardio",
    items: [
      {
        src: "/images/equipment/cardio/stairmaster.jpg",
        name: "Stairmaster",
        subtitle: "Low-impact endurance and conditioning",
      },
      {
        src: "/images/equipment/cardio/cardio.jpg",
        name: "Cardio Row",
        subtitle: "Dedicated treadmills and steady-state work",
      },
      {
        src: "/images/equipment/cardio/cardio2.jpg",
        name: "Elliptical Zone",
        subtitle: "Joint-friendly calorie burn machines",
      },
      {
        src: "/images/equipment/cardio/cardio3.jpg",
        name: "Mixed Cardio Line",
        subtitle: "Walk, run, warm up, or finish strong",
      },
    ],
  },
];

export function getEquipment(): EquipmentCategory[] {
  return equipmentCatalog;
}
