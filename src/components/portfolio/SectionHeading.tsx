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
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">{title}</h2>
        {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
      </div>
    </Reveal>
  );
}