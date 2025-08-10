import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";

const About = () => {
  const canonical = typeof window !== 'undefined' ? window.location.origin + '/about' : undefined;
  return (
    <main>
      <SEO
        title="About Gargee Singha | Full Bio, Journey & Impact"
        description="Explore Gargee Singha’s story: early roots, education, professional journey, skills, social impact, and beliefs."
        canonical={canonical}
      />
      <header className="section bg-secondary">
        <div className="container-responsive">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold">About Gargee</h1>
            <p className="text-muted-foreground mt-3 max-w-3xl">
              A purpose-driven leader, storyteller, and social soul — bridging tradition with transformation.
            </p>
          </Reveal>
        </div>
      </header>

      {/* 1. Full Bio Intro */}
      <section className="section">
        <div className="container-responsive grid md:grid-cols-2 gap-8">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Full Bio</h2>
            <p className="text-foreground/80 mt-3">
              From rural Bengal to modern boardrooms, Gargee’s journey is shaped by empathy, curiosity, and resilience. She blends business strategy with creative storytelling and has worked across agri-commerce, digital marketing, and investor communication.
            </p>
          </Reveal>
          <Reveal>
            <div className="rounded-lg border p-6">
              <p>
                She believes in systems that scale with dignity — empowering farmers, educating investors, and enabling brands to speak with clarity. Her leadership style is rooted in warmth, focus, and action.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Early Roots & Purpose – Two-Column Story */}
      <section className="section" id="roots">
        <div className="container-responsive grid md:grid-cols-2 gap-8 items-start">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Early Roots & Purpose</h2>
            <p className="text-foreground/80 mt-3">
              Growing up close to the soil taught her humility and systems-thinking. That perspective continues to guide her in work and life.
            </p>
          </Reveal>
          <Reveal>
            <ul className="space-y-2 text-foreground/80">
              <li>• Community-first mindset</li>
              <li>• Respect for grassroots realities</li>
              <li>• Focus on scalable, human-centered solutions</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 3. Education Journey – Timeline Blocks */}
      <section className="section" id="education">
        <div className="container-responsive">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Education Journey</h2>
          </Reveal>
          <div className="mt-6 grid gap-4">
            <Reveal className="rounded-lg border p-4">
              <p className="text-primary font-medium">EMBA Scholar – IIM Bodh Gaya</p>
              <p className="text-muted-foreground">Brand building, growth strategy, leadership</p>
            </Reveal>
            <Reveal className="rounded-lg border p-4">
              <p className="text-primary font-medium">Bachelor’s – Communications & Marketing</p>
              <p className="text-muted-foreground">Storytelling, digital, research</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Professional Journey – Role & Impact */}
      <section className="section" id="journey">
        <div className="container-responsive grid md:grid-cols-2 gap-8">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Professional Journey</h2>
            <p className="text-foreground/80 mt-3">Roles across agri-commerce and finance-tech, leading digital initiatives and growth mandates.</p>
          </Reveal>
          <Reveal>
            <ul className="space-y-2 text-foreground/80">
              <li>• Director – Broadway Agri</li>
              <li>• Head of Digital – Shares Bazaar</li>
              <li>• Head of Digital – Where2Invest</li>
              <li>• Director – Gro X Digital</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 5. Skills & Strengths – Pillars Grid */}
      <section className="section" id="skills">
        <div className="container-responsive">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Skills & Strengths</h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              "Strategy & Positioning",
              "Performance Marketing",
              "Content & Storytelling",
              "Community & Partnerships",
              "Operations & Systems",
              "Leadership & Culture",
            ].map((s) => (
              <Reveal key={s} className="rounded-lg border p-4">
                <p className="font-medium">{s}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Social Impact – Story & Moments */}
      <section className="section" id="impact">
        <div className="container-responsive grid md:grid-cols-2 gap-8 items-start">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Social Impact</h2>
            <p className="text-foreground/80 mt-3">Projects that celebrate dignity, create access, and build capability.</p>
          </Reveal>
          <Reveal>
            <div className="rounded-lg border p-6">
              <p>
                From grassroots training to digital literacy, her initiatives focus on enabling communities to thrive — not just survive.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Personal Beliefs – Culture & Creativity */}
      <section className="section" id="beliefs">
        <div className="container-responsive">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Personal Beliefs</h2>
            <p className="text-foreground/80 mt-3">Growth with purpose, clarity with kindness, and creativity grounded in truth.</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default About;
