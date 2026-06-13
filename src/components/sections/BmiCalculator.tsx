"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

type Category = { label: string; color: string; advice: string };

function categorize(bmi: number): Category {
  if (bmi < 18.5) return { label: "Underweight", color: "#60a5fa", advice: "Focus on lean muscle gain with a structured strength + nutrition plan." };
  if (bmi < 25) return { label: "Healthy", color: "#22c55e", advice: "Great range. Train for strength, endurance, or aesthetics — your call." };
  if (bmi < 30) return { label: "Overweight", color: "#f59e0b", advice: "A fat-loss focused plan with consistent cardio and diet can shift this fast." };
  return { label: "Obese", color: "#ef4444", advice: "A structured fat-loss programme with coaching guidance is recommended. Talk to us." };
}

export function BmiCalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const bmi = useMemo(() => {
    const m = height / 100;
    return m > 0 ? weight / (m * m) : 0;
  }, [height, weight]);

  const cat = categorize(bmi);
  const pct = Math.max(0, Math.min(100, ((bmi - 15) / (40 - 15)) * 100));

  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-5">
        <div className="grid h-10 w-10 place-items-center rounded-[12px] bg-brand-cyan/10 text-brand-cyan-dim">
          <Activity size={20} />
        </div>
        <div>
          <h3 className="h-display text-xl text-ink-900 leading-none">Free BMI Check</h3>
          <p className="text-xs text-ink-500 mt-1">Know your starting point in 5 seconds.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Height" unit="cm" value={height} min={120} max={220} step={1} onChange={setHeight} />
        <NumberField label="Weight" unit="kg" value={weight} min={30} max={200} step={1} onChange={setWeight} />
      </div>

      <div className="mt-7">
        <div className="flex items-baseline justify-between mb-2">
          <div>
            <div className="text-xs uppercase tracking-widest text-ink-500">Your BMI</div>
            <div className="h-display text-5xl tabular-nums" style={{ color: cat.color }}>
              {bmi.toFixed(1)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-widest text-ink-500">Category</div>
            <div className="h-display text-2xl" style={{ color: cat.color }}>{cat.label}</div>
          </div>
        </div>

        <div className="relative h-2 rounded-full overflow-hidden bg-surface-alt mt-3">
          <div className="absolute inset-0 flex">
            <div className="flex-1" style={{ background: "#60a5fa" }} />
            <div className="flex-1" style={{ background: "#22c55e" }} />
            <div className="flex-1" style={{ background: "#f59e0b" }} />
            <div className="flex-1" style={{ background: "#ef4444" }} />
          </div>
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-4 w-1 bg-brand-navy shadow-[0_0_8px_rgba(11,18,32,0.5)]"
            animate={{ left: `${pct}%` }}
            transition={{ type: "spring", stiffness: 240, damping: 26 }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-ink-500 mt-1.5 uppercase tracking-wider">
          <span>Under</span><span>Healthy</span><span>Over</span><span>Obese</span>
        </div>

        <p className="mt-5 text-sm text-ink-500">{cat.advice}</p>
      </div>
    </div>
  );
}

function NumberField({
  label, unit, value, min, max, step, onChange,
}: {
  label: string; unit: string; value: number; min: number; max: number; step: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-ink-500 mb-2">{label} ({unit})</label>
      <div className="flex items-center gap-2">
        <button
          aria-label={`Decrease ${label}`}
          onClick={() => onChange(Math.max(min, value - step))}
          className="grid h-11 w-11 place-items-center rounded-[12px] bg-surface-alt border border-ink-300 text-ink-800 hover:border-brand-cyan transition"
        >−</button>
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="form-input text-center tabular-nums [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          aria-label={`Increase ${label}`}
          onClick={() => onChange(Math.min(max, value + step))}
          className="grid h-11 w-11 place-items-center rounded-[12px] bg-surface-alt border border-ink-300 text-ink-800 hover:border-brand-cyan transition"
        >+</button>
      </div>
    </div>
  );
}
