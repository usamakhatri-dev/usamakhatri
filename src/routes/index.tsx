import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { WhyMe } from "@/components/portfolio/WhyMe";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const DESC =
  "Portfolio of Usama Khatri — AI-powered graphic designer and UI/UX designer specializing in branding, social media design and modern product interfaces.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Usama Khatri — AI-Powered Graphic & UI/UX Designer" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Usama Khatri — AI-Powered Graphic & UI/UX Designer" },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Usama Khatri — AI-Powered Graphic & UI/UX Designer" },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Usama Khatri",
          jobTitle: "AI-Powered Graphic Designer & UI/UX Designer",
          email: "mailto:usamakhatri150@gmail.com",
          url: "/",
          sameAs: [
            "https://www.linkedin.com/in/usama-muhammad-hussain-81711935b/",
            "https://www.behance.net/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-background"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="grid h-16 w-16 animate-float-slow place-items-center rounded-2xl bg-gradient-brand text-xl font-extrabold text-primary-foreground">
          UK
        </div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-secondary">
          <motion.div
            className="h-full w-1/2 bg-gradient-brand"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-dvh bg-background">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
