import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { socials } from "@/lib/portfolio-data";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M16.5 3c.3 2.2 1.6 3.8 3.8 4v2.4c-1.4.1-2.7-.3-3.9-1v6.6c0 3.4-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .6 0 .9.1v2.5c-.3-.1-.6-.1-.9-.1-1.9 0-3.5 1.6-3.5 3.5S8.5 18 10.4 18s3.6-1.5 3.6-3.5V3h2.5z" />
  </svg>
);

const icons = [
  { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: socials.youtube, label: "YouTube" },
  { icon: Facebook, href: socials.facebook, label: "Facebook" },
  { icon: Instagram, href: socials.instagram, label: "Instagram" },
  { icon: TikTokIcon, href: socials.tiktok, label: "TikTok" },
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
              target="_blank"
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