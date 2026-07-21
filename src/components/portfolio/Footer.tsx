import { Linkedin, Mail } from "lucide-react";
import { socials } from "@/lib/portfolio-data";
import profileAsset from "@/assets/usama-profile.png.asset.json";

const icons = [
  { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${socials.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-20">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <a href="#home" className="inline-flex items-center gap-3 font-display text-xl font-extrabold tracking-tight">
          <img
            src={profileAsset.url}
            alt="Usama Khatri"
            width={36}
            height={36}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-brand/40 shadow-md"
            style={{ objectPosition: "50% 15%" }}
          />
          Usama Khatri
        </a>
        <p className="mx-auto mt-5 max-w-md text-balance leading-relaxed text-muted-foreground">
          Designed with Creativity. Enhanced by AI. Built for Impact.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          {icons.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-12 w-12 place-items-center rounded-full border border-border/80 bg-card/40 text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:text-foreground hover:shadow-[var(--shadow-glow)]"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
          © 2026 Usama Khatri. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}