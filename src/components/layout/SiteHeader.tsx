import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blogs", label: "Blogs" },
  { to: "/connect", label: "Connect" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b">
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
                `text-sm ${isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button asChild variant="cta" size="sm">
            <Link to="/connect">Get in Touch</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button asChild variant="outline" size="icon" aria-label="Go to contact">
            <Link to="/connect">✉️</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
