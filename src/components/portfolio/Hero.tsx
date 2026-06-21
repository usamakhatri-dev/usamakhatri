import { motion } from "motion/react";
import { ArrowDown, Download, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_URL } from "@/lib/portfolio-data";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden pt-28 pb-16"
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
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-4 w-4 text-brand-cyan" />
            AI-Powered Designer & Content Creator
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Usama Khatri
          </h1>
          <p className="mt-4 text-balance text-xl font-semibold text-muted-foreground sm:text-2xl">
            AI-Powered Graphic Designer,{" "}
            <span className="text-gradient">UI/UX Designer</span> &amp; Content Creator
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I create impactful brand identities, engaging social media designs, and modern UI/UX
            experiences using creative and AI-powered workflows. My goal is to help businesses and
            individuals communicate their ideas through clean, professional, and user-focused design.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#work">
                View My Work <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="glow" size="xl">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#contact">
                <MessageCircle className="h-4 w-4" /> Let's Talk
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}