import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                About Me
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Designing Modern{" "}
                <span className="text-gradient">AI-Powered Products</span>
              </h2>
              <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Hi, I'm Usama Khatri — an AI Website Designer, Mobile App Designer, and
                  UI/UX Designer focused on building modern digital products that feel
                  intuitive, responsive, and premium.
                </p>
                <p>
                  I specialize in designing websites, mobile apps, landing pages, dashboards,
                  and SaaS interfaces using UI/UX best practices — from research and
                  wireframing to prototyping and high-fidelity design systems.
                </p>
                <p>
                  My workflow is powered by AI. Tools like Figma, Framer, Claude, and Lovable
                  let me move from idea to interface faster, ship cleaner user experiences,
                  and deliver AI-assisted product design that scales.
                </p>
              </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
}