import { Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socials, videos } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ContentCreator() {
  return (
    <section id="content" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Content Creator"
          title={<>Design &amp; <span className="text-gradient">AI Content Creator</span></>}
          subtitle="I create educational short-form content focused on graphic design, AI tools, creative workflows, and productivity tips."
        />

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.08}>
              <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <div className="aspect-[9/16] w-full bg-black">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <figcaption className="p-5 text-center font-semibold">{v.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="glow" size="xl">
              <a href={socials.youtube} target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" /> Visit My YouTube Channel
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}