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
                Turning Ideas Into{" "}
                <span className="text-gradient">Visual Experiences</span>
              </h2>
              <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Hi, I'm Usama Khatri, an AI-Powered Graphic Designer and UI/UX Designer
                  passionate about creating designs that are both visually appealing and
                  strategically effective.
                </p>
                <p>
                  My expertise includes branding, social media design, and UI/UX design,
                  helping businesses and individuals communicate their ideas through clean,
                  professional and user-focused visuals.
                </p>
                <p>
                  I combine creativity with modern AI-powered tools to streamline workflows, generate
                  ideas faster, and deliver high-quality results efficiently.
                </p>
              </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
}