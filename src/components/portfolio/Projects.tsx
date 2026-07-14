import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

const filters = ["All", "UI/UX"] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [preview, setPreview] = useState<Project | null>(null);

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              My <span className="text-gradient">Work</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              A growing collection of branding systems and product design — more projects on the way.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-semibold transition-all",
                active === f
                  ? "border-transparent bg-gradient-brand text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "border-border text-muted-foreground hover:border-brand/40 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-14 grid gap-7 md:grid-cols-2 xl:gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[var(--shadow-glow)]"
              >
                <button
                  type="button"
                  onClick={() => setPreview(p)}
                  className="relative block w-full overflow-hidden"
                  aria-label={`Preview ${p.title}`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} project mockup`}
                      width={1280}
                      height={960}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    />
                  </div>
                  <span className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                  <span className="absolute left-4 top-4 inline-flex rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-brand-cyan backdrop-blur">
                    {p.label}
                  </span>
                  <span className="absolute right-4 top-4 grid h-10 w-10 translate-y-1 place-items-center rounded-full bg-background/70 opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Expand className="h-4 w-4" />
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-cyan">
                    {p.category}
                  </span>
                  <h3 className="mt-4 text-xl font-bold leading-snug sm:text-2xl">{p.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-6 flex items-center gap-3 pt-1">
                    <Button asChild variant="hero" size="sm">
                      <a href={p.link} target="_blank" rel="noopener noreferrer">
                        {p.linkLabel} <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => setPreview(p)}>
                      Quick view
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