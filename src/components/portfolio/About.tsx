import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Briefcase, Layout, Share2, Video } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: Briefcase, value: 2, suffix: "+", label: "Branding Projects" },
  { icon: Layout, value: 1, suffix: "", label: "UI/UX App Project" },
  { icon: Share2, value: 12, suffix: "+", label: "Social Media Designs" },
  { icon: Video, value: 100, suffix: "%", label: "Educational Content" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                About Me
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Turning Ideas Into{" "}
                <span className="text-gradient">Visual Experiences</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Hi, I'm Usama Khatri, an AI-Powered Graphic Designer, UI/UX Designer, and Content
                  Creator passionate about creating designs that are both visually appealing and
                  strategically effective.
                </p>
                <p>
                  My expertise includes branding, social media design, and UI/UX design. I also
                  create educational content focused on graphic design, AI tools, and creative
                  workflows.
                </p>
                <p>
                  I combine creativity with modern AI-powered tools to streamline workflows, generate
                  ideas faster, and deliver high-quality results efficiently.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <s.icon className="h-7 w-7 text-brand" />
                  <p className="mt-4 font-display text-4xl font-extrabold">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}