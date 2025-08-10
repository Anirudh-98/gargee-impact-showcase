import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

const Services = () => {
  const canonical = typeof window !== 'undefined' ? window.location.origin + '/services' : undefined;
  return (
    <main>
      <SEO
        title="Services | Strategy, Campaigns, Content, B2B Growth"
        description="Digital marketing strategy, performance campaigns, content & brand positioning, and B2B e‑commerce enablement."
        canonical={canonical}
      />

      {/* Intro Statement */}
      <section className="section bg-secondary">
        <div className="container-responsive">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold">Built for Impact</h1>
            <p className="text-muted-foreground mt-3 max-w-3xl">
              From positioning to performance — pragmatic strategies that convert.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section">
        <div className="container-responsive grid md:grid-cols-2 gap-8">
          <Reveal className="rounded-lg border p-6">
            <h2 className="font-display text-2xl font-semibold">Digital Marketing Strategy & Execution</h2>
            <p className="text-foreground/80 mt-2">Go-to-market blueprints, content systems, funnel mapping, and iterative growth sprints.</p>
          </Reveal>
          <Reveal className="rounded-lg border p-6">
            <h2 className="font-display text-2xl font-semibold">Social Media & Performance Campaigns</h2>
            <p className="text-foreground/80 mt-2">ROI-focused ads, organic playbooks, and full-funnel reporting with clarity.</p>
          </Reveal>
          <Reveal className="rounded-lg border p-6">
            <h2 className="font-display text-2xl font-semibold">Content Creation & Brand Positioning</h2>
            <p className="text-foreground/80 mt-2">Narratives that resonate — thought leadership, product storytelling, and editorial operations.</p>
          </Reveal>
          <Reveal className="rounded-lg border p-6">
            <h2 className="font-display text-2xl font-semibold">B2B Growth & E‑Commerce Enablement</h2>
            <p className="text-foreground/80 mt-2">Marketplace onboarding, partner ecosystems, and conversion-optimized storefronts.</p>
          </Reveal>
        </div>
      </section>

      {/* What we're building – highlight */}
      <section className="section bg-secondary">
        <div className="container-responsive">
          <Reveal>
            <h2 className="font-display text-3xl font-bold">What We’re Building</h2>
            <p className="text-foreground/80 mt-2">Sustainable, tech-integrated growth engines for brands and communities.</p>
          </Reveal>
        </div>
      </section>

      {/* Partner Profiles – Anchors */}
      <section className="section">
        <div className="container-responsive grid md:grid-cols-2 gap-8">
          <Reveal id="broadway" className="rounded-lg border p-6">
            <h3 className="font-display text-xl font-semibold">Broadway Agri</h3>
            <p className="text-foreground/80 mt-2">Connecting farmers, warehouses, logistics, and retailers with dignified, transparent trade.</p>
          </Reveal>
          <Reveal id="sharesbazaar" className="rounded-lg border p-6">
            <h3 className="font-display text-xl font-semibold">Shares Bazaar</h3>
            <p className="text-foreground/80 mt-2">Making market intelligence accessible for everyday investors.</p>
          </Reveal>
          <Reveal id="where2invest" className="rounded-lg border p-6">
            <h3 className="font-display text-xl font-semibold">Where2Invest</h3>
            <p className="text-foreground/80 mt-2">Guidance that helps investors decide where, when, and how to invest.</p>
          </Reveal>
          <Reveal id="groxdigital" className="rounded-lg border p-6">
            <h3 className="font-display text-xl font-semibold">Gro X Digital</h3>
            <p className="text-foreground/80 mt-2">Creative storytelling with measurable ROI across sectors.</p>
          </Reveal>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section id="collaboration" className="section bg-secondary">
        <div className="container-responsive">
          <Reveal>
            <h2 className="font-display text-3xl font-bold">Collaboration Opportunities</h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {["Warehouse Owners", "Logistics Providers", "Distributors & Retailers"].map((p) => (
              <Reveal key={p} className="rounded-lg border p-6">
                <p className="font-medium">{p}</p>
                <p className="text-muted-foreground mt-2">Let’s build capacity, create access, and scale impact together.</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <Button variant="cta" asChild>
              <a href="/connect">Start a Conversation</a>
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Services;
