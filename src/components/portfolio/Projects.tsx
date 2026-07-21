import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Expand, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { projects, type Project } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

const placeholderCards = [
  { id: "p1", label: "AI Website 01", title: "AI SaaS Landing Page", tag: "Web Design" },
  { id: "p2", label: "Mobile App 01", title: "AI Mobile App UI", tag: "Mobile App" },
  { id: "p3", label: "Dashboard 01", title: "AI Analytics Dashboard", tag: "UI/UX" },
  { id: "p4", label: "AI Product 01", title: "AI Product Design Case Study", tag: "AI Product" },
];

export function Projects() {
  const [preview, setPreview] = useState<Project | null>(null);
  const hasProjects = projects.length > 0;

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan">Selected Work</p>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              My <span className="text-gradient">Work</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A growing collection of AI website, mobile app, and UI/UX design work — new
              case studies coming soon.
            </p>
          </div>
        </Reveal>

        <motion.div layout className="mt-16 grid gap-8 md:grid-cols-2 xl:gap-10">
          <AnimatePresence mode="popLayout">
            {hasProjects && projects.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-border/70 glass-card shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-2 hover:border-brand/50 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--brand) 25%, transparent), transparent 40%, color-mix(in oklab, var(--brand-violet) 25%, transparent))" }} aria-hidden />

                <button
                  type="button"
                  onClick={() => setPreview(p)}
                  className="relative block w-full overflow-hidden p-3 pb-0"
                  aria-label={`Preview ${p.title}`}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={p.image}
                      alt={`${p.title} project mockup`}
                      width={1280}
                      height={960}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-70" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-background/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-cyan backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                      {p.category}
                    </span>
                    <span className="absolute right-3 top-3 grid h-9 w-9 translate-y-1 place-items-center rounded-full border border-white/15 bg-background/60 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Expand className="h-4 w-4" />
                    </span>
                  </div>
                </button>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-bold leading-[1.25] tracking-[-0.02em] sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 max-w-prose text-sm leading-[1.7] text-muted-foreground/90">
                    {p.description}
                  </p>

                  {p.tech && p.tech.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border/70 bg-secondary/50 px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground/90 backdrop-blur transition-colors hover:border-brand/40 hover:text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-between gap-3 pt-1">
                    <Button asChild variant="hero" size="sm" className="group/btn">
                      <a href={p.link} target="_blank" rel="noopener noreferrer">
                        {p.linkLabel}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                      </a>
                    </Button>
                    <button
                      type="button"
                      onClick={() => setPreview(p)}
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Quick view
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}

            {!hasProjects && placeholderCards.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-brand opacity-20" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--brand)_30%,transparent),transparent_60%),radial-gradient(circle_at_80%_70%,color-mix(in_oklab,var(--brand-violet)_30%,transparent),transparent_60%)]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="flex flex-col items-center gap-3 text-center">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-background/70 backdrop-blur">
                        <Sparkles className="h-6 w-6 text-brand-cyan" />
                      </span>
                      <span className="rounded-full bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-cyan backdrop-blur">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  <span className="absolute left-4 top-4 inline-flex rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-brand-cyan backdrop-blur">
                    {p.label}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-cyan">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-bold leading-snug sm:text-2xl">{p.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    A new AI-powered {p.tag.toLowerCase()} case study is on the way — full
                    design breakdown, UI/UX flow, and live preview coming soon.
                  </p>
                  <div className="mt-6 flex items-center gap-3 pt-1">
                    <Button variant="hero" size="sm" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!preview} onOpenChange={(o) => !o && setPreview(null)}>
        <DialogContent className="max-w-3xl overflow-hidden p-0">
          {preview && (
            <div>
              <img
                src={preview.image}
                alt={`${preview.title} project mockup`}
                width={1280}
                height={960}
                className="max-h-[60vh] w-full object-cover"
              />
              <div className="p-6">
                <DialogTitle className="text-2xl font-bold">{preview.title}</DialogTitle>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {preview.description}
                </p>
                <Button asChild variant="hero" className="mt-5">
                  <a href={preview.link} target="_blank" rel="noopener noreferrer">
                    {preview.linkLabel} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}