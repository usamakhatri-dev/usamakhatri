import { Bot, Megaphone, PenTool, Sparkles, Video } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: PenTool,
    title: "Brand Identity Design",
    desc: "Complete logo systems, visual identities and brand guidelines that are bold, consistent and memorable.",
  },
  {
    icon: Megaphone,
    title: "Social Media Design",
    desc: "Scroll-stopping posts, stories and campaign creatives crafted to grow engagement and recognition.",
  },
  {
    icon: Sparkles,
    title: "UI/UX Design",
    desc: "Intuitive, modern interfaces with clear user flows, wireframes and polished, mobile-first layouts.",
  },
  {
    icon: Bot,
    title: "AI-Assisted Design Solutions",
    desc: "Faster ideation and production using AI-powered workflows without compromising on craft or quality.",
  },
  {
    icon: Video,
    title: "Content Creation",
    desc: "Educational short-form content on design, AI tools and creative workflows for growing audiences.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I Do"
          title={<>Services Built for <span className="text-gradient">Impact</span></>}
          subtitle="From first concept to final delivery — design that looks great and performs even better."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40">
                <div
                  aria-hidden
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-25"
                />
                <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 text-xl font-bold">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}