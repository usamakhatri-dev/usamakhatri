import { Brain, Palette, Wand2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    icon: Palette,
    title: "Design Tools",
    items: ["Canva", "Adobe Photoshop", "Adobe Illustrator", "Figma"],
  },
  {
    icon: Wand2,
    title: "AI Tools",
    items: ["Claude AI", "ChatGPT", "Canva AI", "Adobe Firefly", "Gemini", "Other AI Design Tools"],
  },
  {
    icon: Brain,
    title: "Design Skills",
    items: [
      "Branding",
      "Social Media Design",
      "Typography",
      "Color Theory",
      "Visual Hierarchy",
      "UI Design",
      "UX Design",
      "Content Creation",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title={<>Tools &amp; <span className="text-gradient">Skills</span></>}
          subtitle="A modern toolkit blending classic design craft with AI-powered workflows."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}