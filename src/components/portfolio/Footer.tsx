import { Linkedin, Mail } from "lucide-react";
import { socials } from "@/lib/portfolio-data";

const icons = [
  { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${socials.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <a href="#home" className="inline-flex items-center gap-2 font-display text-xl font-extrabold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-sm text-primary-foreground">
            UK
          </span>
          Usama Khatri
        </a>
        <p className="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
          Designed with Creativity. Enhanced by AI. Built for Impact.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          {icons.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-foreground"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          © 2026 Usama Khatri. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}