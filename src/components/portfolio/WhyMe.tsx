import { GraduationCap, Lightbulb, Sparkles, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    desc: "Design solutions tailored to project goals.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Workflow",
    desc: "Faster execution and efficient design processes.",
  },
  {
    icon: Users,
    title: "User-Focused Approach",
    desc: "Designs that balance aesthetics and functionality.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    desc: "Always exploring new design trends, tools, and technologies.",
  },
];

export function WhyMe() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Work With Me"
          title={<>A Partner Who <span className="text-gradient">Delivers</span></>}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}