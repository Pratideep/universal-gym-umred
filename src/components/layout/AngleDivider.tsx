export function AngleDivider({
  flip = false,
  from = "#F8FAFC",
  to = "#EEF2F7",
}: {
  flip?: boolean;
  from?: string;
  to?: string;
}) {
  return (
    <div className="relative w-full overflow-hidden leading-[0]" aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-12 md:h-20"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <polygon points="0,80 1440,0 1440,80" fill={to} />
      </svg>
    </div>
  );
}
