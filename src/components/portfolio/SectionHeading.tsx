import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <Reveal>
      <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan">{eyebrow}</p>
        <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
        {subtitle && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>}
      </div>
    </Reveal>
  );
}