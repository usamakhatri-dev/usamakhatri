import { Linkedin, Mail } from "lucide-react";
import { socials } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const contactLinks = [
  { icon: Mail, label: socials.email, href: `mailto:${socials.email}` },
  { icon: Linkedin, label: "LinkedIn", href: socials.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's Build Your Next <span className="text-gradient">AI Product</span></>}
          subtitle="Websites, mobile apps, landing pages, dashboards, or full UI/UX design systems — if you're shipping an AI-powered digital product, I'd love to help design it."
        />

        <div className="mx-auto mt-16 grid max-w-xl gap-4 sm:grid-cols-2">
          {contactLinks.map((c) => (
            <Reveal key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border/80 bg-card/70 p-5 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[var(--shadow-glow)]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-md transition-transform duration-300 group-hover:scale-105">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 truncate text-sm font-semibold text-muted-foreground transition-colors group-hover:text-foreground sm:text-base">
                  {c.label}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}