import { motion } from "motion/react";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { socials } from "@/lib/portfolio-data";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden pt-32 pb-24"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 22%, transparent), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="animate-pulse-glow absolute -left-32 top-24 h-80 w-80 rounded-full bg-brand/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-pulse-glow absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-brand-violet/30 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
            AI Website, Mobile App & UI/UX Designer
          </span>

          <h1 className="mt-8 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] text-transparent sm:text-6xl lg:text-[5.5rem]">
            Usama Khatri
          </h1>
          <p className="mt-6 text-balance text-xl font-semibold leading-snug tracking-tight text-muted-foreground sm:text-2xl">
            AI Website &amp; Mobile App Designer —{" "}
            <span className="text-gradient">UI/UX & AI Product Designer</span>
          </p>

          <p className="mt-7 max-w-[62ch] text-base leading-[1.8] text-muted-foreground/90 sm:text-lg">
            I design modern AI-powered websites, mobile apps, landing pages, dashboards, and SaaS
            interfaces. Blending UI/UX best practices with AI-assisted workflows, I help teams ship
            responsive, user-focused digital products faster.
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-3.5">
            <Button asChild variant="hero" size="xl">
              <a href="#work">
                View My Work <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="glow"
              size="xl"
              title="Resume will be available soon."
              aria-disabled="true"
              onClick={(e) => {
                e.preventDefault();
                toast.info("Resume will be available soon.");
              }}
            >
              <Download className="h-4 w-4" /> Download Resume
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href={`mailto:${socials.email}`}>
                <Mail className="h-4 w-4" /> {socials.email}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}