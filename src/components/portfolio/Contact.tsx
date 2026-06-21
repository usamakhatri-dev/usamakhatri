import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, Send, Youtube } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { socials } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M16.5 3c.3 2.2 1.6 3.8 3.8 4v2.4c-1.4.1-2.7-.3-3.9-1v6.6c0 3.4-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .6 0 .9.1v2.5c-.3-.1-.6-.1-.9-.1-1.9 0-3.5 1.6-3.5 3.5S8.5 18 10.4 18s3.6-1.5 3.6-3.5V3h2.5z" />
  </svg>
);

const contactLinks = [
  { icon: Mail, label: socials.email, href: `mailto:${socials.email}` },
  { icon: Linkedin, label: "LinkedIn", href: socials.linkedin },
  { icon: Youtube, label: "YouTube", href: socials.youtube },
  { icon: Facebook, label: "Facebook", href: socials.facebook },
  { icon: Instagram, label: "Instagram", href: socials.instagram },
  { icon: TikTokIcon, label: "TikTok", href: socials.tiktok },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app to send the message!");
    form.reset();
    setSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's Work <span className="text-gradient">Together</span></>}
          subtitle="Whether you need branding, social media design, UI/UX design, or creative content, I'd love to hear about your project."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal>
            <div className="flex flex-col gap-3">
              {contactLinks.map((c) => (
                <a
                  key={c.label}
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
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form
              onSubmit={onSubmit}
              className="glass-card rounded-3xl p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" autoComplete="name" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="xl" disabled={submitting}>
                  Send Message <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}