import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import RolesSticky from "@/components/home/RolesSticky";
import { Link } from "react-router-dom";
import { TrendingUp, Share2, PencilRuler, Boxes } from "lucide-react";
import AboutUsSection from "@/components/ui/about-us-section";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gargee Singha",
    jobTitle: "Director, Head of Digital",
    url: typeof window !== 'undefined' ? window.location.origin : undefined,
    worksFor: [
      { "@type": "Organization", name: "Broadway Agri Ecom Tech Pvt. Ltd." },
      { "@type": "Organization", name: "Shares Bazaar" },
      { "@type": "Organization", name: "Where2Invest" },
      { "@type": "Organization", name: "Gro X Digital" },
    ],
  };

  const roles = [
    {
      id: "broadway",
      company: "Director @ Broadway Agri Ecom Tech Pvt. Ltd.",
      headline: "Connecting Farmers to Markets with Tech & Trust",
      body:
        "Building a tech-integrated agri-commerce ecosystem that links farmers, warehouses, logistics, and retailers. Focused on simplifying B2B trade and empowering India’s agri-value chain with transparency, dignity, and speed.",
      ctaLabel: "Discover Broadway Agri",
      ctaHref: "/services#broadway",
    },
    {
      id: "sharesbazaar",
      company: "Digital Marketing Head @ Shares Bazaar",
      headline: "Making Finance Simple & Accessible",
      body:
        "Leading digital strategies to make market intelligence more relatable for everyday investors. Through campaigns, tools, and content, helping people navigate the world of finance with clarity and confidence.",
      ctaLabel: "Explore Shares Bazaar",
      ctaHref: "/services#sharesbazaar",
    },
    {
      id: "where2invest",
      company: "Digital Marketing Head @ Where2Invest",
      headline: "Guiding Smart Investment Choices",
      body:
        "Crafting user-focused content and campaigns that help individuals discover where, when, and how to invest. Bringing financial literacy closer to both first-time and seasoned investors.",
      ctaLabel: "Learn About Where2Invest",
      ctaHref: "/services#where2invest",
    },
    {
      id: "groxdigital",
      company: "Co-founder @ Gro X Digital",
      headline: "Creativity Meets ROI",
      body:
        "Driving brand strategy, campaign performance, and meaningful storytelling for diverse clients. At Gro X Digital, creativity is paired with measurable impact, ensuring every campaign delivers results.",
      ctaLabel: "Visit Gro X Digital",
      ctaHref: "/services#groxdigital",
    },
  ];

  return (
    <main>
      <SEO
        title="Gargee Singha | Agri-Commerce & Digital Marketing Leader"
        description="A multi-passionate leader shaping the future of agri-commerce, digital marketing, and investor communication."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/' : undefined}
        jsonLd={jsonLd}
      />

      {/* Hero: Impact Statement */}
      <section className="relative overflow-hidden bg-secondary">
        <img
          src={heroBg}
          alt="Abstract brand background in bold red and charcoal"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="container-responsive section relative">
          <Reveal>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Don’t wait for the opportunity.
              <br />
              <span className="text-primary">Create it! and Own it!</span>
            </h1>
          </Reveal>
          <Reveal className="max-w-3xl">
            <p className="mt-4 text-lg text-foreground/80">
              A multi-passionate leader shaping the future of agri-commerce, digital marketing, and investor communication.
            </p>
            <p className="mt-2 text-muted-foreground">
              Director @ Broadway Agri | Head of Digital @ Shares Bazaar & Where2Invest | Director @ Gro X Digital
              <br />
              EMBA Scholar @ IIM Bodh Gaya – building brands | driving impact | believing in growth with purpose.
            </p>
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="cta" size="xl">
              <Link to="/connect">Get in Touch</Link>
            </Button>
            <Button asChild variant="ctaOutline" size="xl">
              <Link to="/about">Know More About Her</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Dynamic Roles: Fixed Card + Scroll Swap */}
      <RolesSticky roles={roles} />

      {/* What Sets Her Apart */}
      <AboutUsSection
        id="whatsetsapart"
        title="What Sets Her Apart"
        subtitle="A rare blend of strategy and soul"
        bullets={[
          "A rare blend of strategy, storytelling, and social sensitivity",
          "Industry exposure from farmland to fintech",
          "Builds scalable systems with a creative soul",
          "Deep understanding of both digital transformation and grassroots realities",
          "Leads with clarity, warmth, and results",
          "Turns complex problems into simple, action-based solutions",
        ]}
        ctaLabel="Know More"
        ctaHref="/about#whatsetsapart"
      />

      {/* Services Preview – Four Icon Grid */}
      <section className="section">
        <div className="container-responsive">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Services</h2>
            <p className="text-muted-foreground mt-2">Strategy to execution, built for growth</p>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <Reveal className="rounded-lg border p-6 hover-scale">
              <TrendingUp className="text-primary" />
              <h3 className="font-display text-xl mt-3">Digital Marketing Strategy & Execution</h3>
            </Reveal>
            <Reveal className="rounded-lg border p-6 hover-scale">
              <Share2 className="text-primary" />
              <h3 className="font-display text-xl mt-3">Social Media & Performance Campaigns</h3>
            </Reveal>
            <Reveal className="rounded-lg border p-6 hover-scale">
              <PencilRuler className="text-primary" />
              <h3 className="font-display text-xl mt-3">Content Creation & Brand Positioning</h3>
            </Reveal>
            <Reveal className="rounded-lg border p-6 hover-scale">
              <Boxes className="text-primary" />
              <h3 className="font-display text-xl mt-3">B2B Growth & E-Commerce Enablement</h3>
            </Reveal>
          </div>
          <Reveal className="mt-8">
            <Button asChild variant="cta" size="lg">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="section bg-secondary">
        <div className="container-responsive grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Collaboration Opportunities</h2>
            <p className="text-muted-foreground mt-2">We believe in shared growth</p>
          </Reveal>
          <Reveal>
            <ul className="space-y-3 text-foreground/90">
              <li>• Warehouse Owners: Build tech-integrated storage & delivery clusters.</li>
              <li>• Logistics Providers: First-mile to last-mile delivery network expansion.</li>
              <li>• Distribution Agents & Retailers: Add value to farmers, retailers & consumers.</li>
            </ul>
            <div className="mt-4">
              <Button asChild variant="cta">
                <Link to="/services#collaboration">Partner With Her</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Preview – Short Story Card */}
      <section className="section">
        <div className="container-responsive grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold">About Gargee</h2>
            <p className="text-muted-foreground mt-2">A short story</p>
          </Reveal>
          <Reveal>
            <div className="rounded-lg border p-6">
              <p>
                A purpose-driven leader, storyteller, and social soul. From rural Bengal to boardrooms, Gargee bridges tradition with transformation. She balances entrepreneurship, digital innovation, and community service—always leading with empathy and strategy.
              </p>
              <Button asChild variant="link" className="mt-3 p-0">
                <Link to="/about" className="story-link">Read Her Story</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
