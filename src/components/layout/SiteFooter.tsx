import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container-responsive py-8 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-display text-lg font-semibold">Gargee Singha</h4>
          <p className="text-sm text-muted-foreground mt-2">
            Building brands, driving impact, and believing in growth with purpose.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-4" aria-label="Footer navigation">
          <Link to="/about" className="text-sm hover:text-primary">About</Link>
          <Link to="/services" className="text-sm hover:text-primary">Services</Link>
          <Link to="/blogs" className="text-sm hover:text-primary">Blogs</Link>
          <Link to="/connect" className="text-sm hover:text-primary">Connect</Link>
        </nav>
        <div className="text-sm text-muted-foreground md:text-right">
          © {new Date().getFullYear()} Gargee Singha. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
