"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, User, Phone, Target } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile"),
  goal: z.string().min(1, "Select your goal"),
  timing: z.string().min(1, "Select preferred timing"),
});
type FormData = z.infer<typeof schema>;

const goals = ["Fat Loss", "Muscle Gain", "General Fitness", "Strength", "Competition Prep"];
const timings = ["5–7 AM", "7–10 AM", "4–5 PM (Ladies Only)", "5–8 PM", "8–10 PM"];

const steps = [
  { id: "name", label: "Your Name", icon: User, fields: ["name"] as const },
  { id: "phone", label: "Phone", icon: Phone, fields: ["phone"] as const },
  { id: "details", label: "Goal & Time", icon: Target, fields: ["goal", "timing"] as const },
] as const;

export function TrialForm() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onBlur" });

  const next = async () => {
    const fields = steps[step].fields as readonly (keyof FormData)[];
    const ok = await trigger(fields);
    if (ok) setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const onSubmit = async (data: FormData) => {
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});

    const msg = `Hi ${site.name}! I'd like a free trial.%0A%0AName: ${data.name}%0APhone: ${data.phone}%0AGoal: ${data.goal}%0APreferred Timing: ${data.timing}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${msg}`, "_blank");
    await new Promise((r) => setTimeout(r, 300));
    setSent(true);
  };

  if (sent) return <SuccessState />;

  const Icon = steps[step].icon;

  return (
    <div className="card">
      <div className="mb-5 rounded-lg border border-brand-cyan/15 bg-surface-alt p-4 text-sm text-ink-800">
        Expect a confirmation on WhatsApp or phone after you submit. Your trial includes a floor walk-through, a quick assessment, and a recommended starting plan.
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          {steps.map((s, i) => (
            <div
              key={s.id}
              className={cn(
                "h-1 flex-1 rounded-full transition-colors duration-300",
                i <= step ? "bg-brand-cyan" : "bg-ink-300/40"
              )}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-cyan/15 text-brand-cyan-dim">
              <Icon size={16} />
            </div>
            <span className="text-ink-800 font-semibold">{steps[step].label}</span>
          </div>
          <span className="text-xs text-ink-500">Step {step + 1} of {steps.length}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && (
              <Field label="Full Name" error={errors.name?.message}>
                <input
                  {...register("name")}
                  autoFocus
                  placeholder="e.g. Rahul Sharma"
                  className="form-input"
                />
              </Field>
            )}

            {step === 1 && (
              <Field
                label="Phone Number"
                hint="No spam. We use this only to confirm your trial."
                error={errors.phone?.message}
              >
                <div className="flex">
                  <span className="inline-flex items-center rounded-l-[14px] border border-r-0 border-ink-300 bg-surface-alt px-3 text-sm text-ink-500">
                    +91
                  </span>
                  <input
                    {...register("phone")}
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    autoFocus
                    placeholder="10-digit mobile"
                    className="form-input rounded-l-none"
                  />
                </div>
              </Field>
            )}

            {step === 2 && (
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Fitness Goal" error={errors.goal?.message}>
                  <select {...register("goal")} className="form-input">
                    <option value="">Select goal</option>
                    {goals.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </Field>
                <Field label="Preferred Timing" error={errors.timing?.message}>
                  <select {...register("timing")} className="form-input">
                    <option value="">Select timing</option>
                    {timings.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 pt-2">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="btn-outline min-h-[48px] flex-1"
            >
              <ArrowLeft size={16} /> Back
            </button>
          )}
          {step < steps.length - 1 ? (
            <button type="button" onClick={next} className="btn-primary min-h-[48px] flex-1">
              Continue <ArrowRight size={16} />
            </button>
          ) : (
            <button type="submit" disabled={isSubmitting} className="btn-primary min-h-[48px] flex-1">
              {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : "Book My Free Trial"}
            </button>
          )}
        </div>
        <p className="text-xs text-ink-500 text-center">
          By submitting, you agree to be contacted via WhatsApp or call to confirm your visit.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-ink-500 mb-2">{label}</label>
      {children}
      <div className="mt-1 min-h-[18px]">
        {error ? (
          <p className="text-state-error text-xs" role="alert">{error}</p>
        ) : hint ? (
          <p className="text-ink-500 text-xs">{hint}</p>
        ) : null}
      </div>
    </div>
  );
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="card text-center relative overflow-hidden"
    >
      <Confetti />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
        className="grid place-items-center mx-auto mb-4"
      >
        <CheckCircle2 className="text-state-success" size={56} />
      </motion.div>
      <h3 className="h-display text-3xl text-ink-900">You&rsquo;re all set!</h3>
      <p className="mt-2 text-ink-500 max-w-md mx-auto">
        We&rsquo;ve opened WhatsApp with your details. Hit send and our team will confirm your trial timing, what to bring, and when to arrive.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <a href={waLink()} target="_blank" rel="noopener" className="btn-primary min-h-[48px]">
          Open WhatsApp Again
        </a>
        <a href="/equipment" className="btn-outline min-h-[48px]">
          Explore Equipment
        </a>
      </div>
    </motion.div>
  );
}

function Confetti() {
  const pieces = Array.from({ length: 24 });
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {pieces.map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: -20, x: `${50}%`, opacity: 0 }}
          animate={{
            y: 300,
            x: `${Math.random() * 100}%`,
            opacity: [0, 1, 1, 0],
            rotate: Math.random() * 360,
          }}
          transition={{ duration: 2 + Math.random(), delay: Math.random() * 0.5, ease: "easeOut" }}
          className="absolute top-0 h-2 w-2 rounded-sm"
          style={{ backgroundColor: i % 2 ? "#00D4FF" : "#0B1220" }}
        />
      ))}
    </div>
  );
}
