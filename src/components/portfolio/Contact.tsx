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
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's Build Your Next <span className="text-gradient">AI Product</span></>}
          subtitle="Websites, mobile apps, landing pages, dashboards, or full UI/UX design systems — if you're shipping an AI-powered digital product, I'd love to help design it."
        />

        <div className="mx-auto mt-14 grid max-w-xl gap-3 sm:grid-cols-2">
          {contactLinks.map((c) => (
            <Reveal key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 truncate font-medium text-muted-foreground transition-colors group-hover:text-foreground">
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