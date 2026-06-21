import { ExternalLink, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socials } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M16.5 3c.3 2.2 1.6 3.8 3.8 4v2.4c-1.4.1-2.7-.3-3.9-1v6.6c0 3.4-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .6 0 .9.1v2.5c-.3-.1-.6-.1-.9-.1-1.9 0-3.5 1.6-3.5 3.5S8.5 18 10.4 18s3.6-1.5 3.6-3.5V3h2.5z" />
  </svg>
);

const platforms = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@usamakhatristudio",
    description: "Design inspiration, behind-the-scenes work, and daily creative updates.",
    href: socials.instagram,
    color: "from-pink-500 via-rose-500 to-orange-500",
  },
  {
    icon: Youtube,
    name: "YouTube",
    handle: "@UsamaKhatriStudio",
    description: "Educational Shorts on graphic design, AI tools, and creative workflows.",
    href: socials.youtube,
    color: "from-red-600 to-red-500",
  },
  {
    icon: Facebook,
    name: "Facebook",
    handle: "Usama Khatri Studio",
    description: "Project updates, design tips, and community engagement.",
    href: socials.facebook,
    color: "from-blue-600 to-blue-500",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "Usama Muhammad Hussain",
    description: "Professional portfolio, career highlights, and industry insights.",
    href: socials.linkedin,
    color: "from-sky-700 to-sky-600",
  },
  {
    icon: TikTokIcon,
    name: "TikTok",
    handle: "@usamakhatri.studio",
    description: "Quick creative tips, design hacks, and trending content.",
    href: socials.tiktok,
    color: "from-cyan-500 to-fuchsia-500",
  },
];

export function ContentCreator() {
  return (
    <section id="content" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Content Creator"
          title={<>Design &amp; <span className="text-gradient">AI Content Creator</span></>}
          subtitle="I create educational short-form content focused on graphic design, AI tools, creative workflows, and productivity tips. Connect with me on any platform."
        />

        <div className="mx-auto mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {platforms.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="flex h-full flex-col justify-between gap-5 rounded-3xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow">
                <div className="flex items-start justify-between">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.color} text-white`}>
                    <p.icon className="h-6 w-6" />
                  </span>
                  <Button asChild variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                    <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.name} profile`}>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.handle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </div>
                <Button asChild variant="outline" className="w-full rounded-xl">
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    Follow on {p.name}
                  </a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
