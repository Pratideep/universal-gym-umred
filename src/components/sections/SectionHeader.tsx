import { Reveal } from "@/components/motion/Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`eyebrow mb-3 ${dark ? "!text-brand-cyan" : ""}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`h-display text-4xl md:text-[3.25rem] leading-tight ${dark ? "text-white" : "text-ink-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg ${dark ? "text-white/70" : "text-ink-500"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
