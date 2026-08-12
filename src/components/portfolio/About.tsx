import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                About Me
              </p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Designing Modern{" "}
                <span className="text-brand">AI-Powered Products</span>
              </h2>
              <div className="mt-8 max-w-3xl space-y-5 text-base leading-[1.8] text-muted-foreground sm:text-lg">
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
                <p>
                  Right now, I'm focused on designing AI-powered websites and mobile
                  applications, and actively shipping real-world products like{" "}
                  <a
                    href="https://cityvoice-demo.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand underline-offset-4 hover:underline"
                  >
                    CityVoice
                  </a>
                  {" "}— an AI civic reporting platform built to solve real community problems.
                </p>
              </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
}