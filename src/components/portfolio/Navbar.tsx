import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-card border-b py-3 shadow-card" : "border-b border-transparent py-5",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-extrabold">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-brand text-sm font-extrabold text-primary-foreground">
            UK
          </span>
          <span>Usama Khatri</span>
        </a>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          className="rounded-full"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </nav>
    </header>
  );
}