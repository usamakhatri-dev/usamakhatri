import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import profileAsset from "@/assets/usama-profile.png.asset.json";

const DESC =
  "Portfolio of Usama Khatri — AI Website Designer, AI Mobile App Designer, and UI/UX Designer building landing pages, dashboards, SaaS interfaces, and AI-powered digital products.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Usama Khatri — AI Website, Mobile App & UI/UX Designer" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Usama Khatri — AI Website, Mobile App & UI/UX Designer" },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Usama Khatri — AI Website, Mobile App & UI/UX Designer" },
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
          jobTitle: "AI Website Designer, AI Mobile App Designer & UI/UX Designer",
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
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] grid place-items-center bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative h-20 w-20">
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full border border-brand/25"
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full border border-brand/20"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
          <img
            src={profileAsset.url}
            alt="Usama Khatri"
            width={80}
            height={80}
            className="relative h-20 w-20 rounded-full object-cover ring-2 ring-brand/40"
            style={{ objectPosition: "50% 15%" }}
          />
        </div>
        <div className="h-px w-24 overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full w-1/3 bg-foreground/60"
            initial={{ x: "-100%" }}
            animate={{ x: "300%" }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
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
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
