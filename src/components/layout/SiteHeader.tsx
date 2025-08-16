import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blogs", label: "Blogs" },
  { to: "/connect", label: "Connect" },
];

type SiteHeaderProps = {
  /** Optional: pass the page's scroll state. If omitted, header will detect scroll itself (50px). */
  hasScrolled?: boolean;
};

const SiteHeader: React.FC<SiteHeaderProps> = ({ hasScrolled }) => {
  const [internalScrolled, setInternalScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effective state: prefer prop, else internal
  const scrolled = hasScrolled ?? internalScrolled;

  // Auto-detect scroll only when prop is NOT provided
  useEffect(() => {
    if (hasScrolled !== undefined) return;

    const onScroll = () => setInternalScrolled(window.scrollY > 50);
    // initialize immediately
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasScrolled]);

  return (
    <header
      aria-hidden={!scrolled}
      className={[
        "sticky top-0 z-40 site-navbar transition-all",
        scrolled
          ? "bg-background/80 backdrop-blur border-b"
          : "bg-transparent border-transparent pointer-events-none",
      ].join(" ")}
    >
      {/* Only render content when scrolled — nothing shows in split-screen */}
      {scrolled && (
        <div className="container-responsive flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-wide">Gargee Singha</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm ${
                    isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button asChild variant="cta" size="sm" className="hover:bg-rose-500">
              <Link to="/connect">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle and Links */}
          <div className="md:hidden">
            {/* Mobile menu toggle button (hamburger icon) */}
            <Button
              variant="outline"
              size="icon"
              aria-label="Toggle mobile menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {/* Replace with your hamburger icon */}
              ☰
            </Button>

            {/* Mobile menu container */}
            {isMobileMenuOpen && (
              <nav 
                className="absolute top-16 left-0 w-full bg-background border-b flex flex-col items-center gap-4 py-4" 
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <NavLink 
                    key={item.to} 
                    to={item.to} 
                    className="text-sm text-foreground/80 hover:text-foreground" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Button 
                  asChild 
                  variant="cta" 
                  size="sm" 
                  className="hover:bg-rose-500 mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to="/connect">Get in Touch</Link>
                </Button>
              </nav>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
