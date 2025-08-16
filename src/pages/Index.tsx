import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import RolesSticky from "@/components/home/RolesSticky";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import { TrendingUp, Share2, PencilRuler, Boxes } from "lucide-react";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const full = text;
    const typingSpeed = isDeleting ? 50 : 100;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (!isDeleting && currentIndex === full.length) {
      timeoutRef.current = window.setTimeout(() => setIsDeleting(true), 2000);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }
    if (isDeleting && currentIndex === 0) {
      timeoutRef.current = window.setTimeout(() => setIsDeleting(false), 400);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    timeoutRef.current = window.setTimeout(() => {
      const next = isDeleting ? currentIndex - 1 : currentIndex + 1;
      setDisplayedText(full.slice(0, next));
      setCurrentIndex(next);
    }, typingSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isDeleting, text]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gargee Singha",
    jobTitle: "Director, Head of Digital",
    url: typeof window !== "undefined" ? window.location.origin : undefined,
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
        "Building a tech-integrated agri-commerce ecosystem that links farmers, warehouses, logistics, and retailers. Focused on simplifying B2B trade and empowering India's agri-value chain with transparency, dignity, and speed.",
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

  const HERO_DESKTOP_SRC = "/main2.png";
  const HERO_MOBILE_SRC = "/hero.png";

  const [hasScrolled, setHasScrolled] = useState(false);
  const [desktopError, setDesktopError] = useState(false);
  const [mobileError, setMobileError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const d = new Image();
    d.src = HERO_DESKTOP_SRC;
    const m = new Image();
    m.src = HERO_MOBILE_SRC;
  }, []);

  const halfTextVariants = {
    initial: { y: 0 },
    scrolledUp: {
      y: "-100%",
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
    },
    scrolledDown: {
      y: "100%",
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const imageVariants = {
    initial: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <main>
      <SEO
        title="Gargee Singha | Agri-Commerce & Digital Marketing Leader"
        description="A multi-passionate leader shaping the future of agri-commerce, digital marketing, and investor communication."
        canonical={typeof window !== "undefined" ? window.location.origin + "/" : undefined}
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#ffd6ba] h-screen">
        <div className="fixed inset-0 w-full h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            {hasScrolled && (
              <motion.div
                key="hero-background-image"
                className="absolute inset-0 overflow-hidden z-10 hidden lg:block"
                initial="initial"
                animate="visible"
                exit="exit"
              >
                <motion.img
                  src={desktopError ? HERO_MOBILE_SRC : HERO_DESKTOP_SRC}
                  alt="Hero Background"
                  className="w-full h-screen object-cover object-center"
                  variants={imageVariants}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                  loading="eager"
                  onError={() => setDesktopError(true)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="absolute inset-0 bg-[#ffd6ba] z-0 h-screen"
            animate={{ opacity: hasScrolled ? 0 : 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          />

          <div className="absolute inset-0 flex flex-col z-20 pointer-events-none">
            <motion.div
              className="flex-1 flex items-end justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
              variants={halfTextVariants}
              initial="initial"
              animate={hasScrolled ? "scrolledUp" : "initial"}
            >
              <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[10vw] xl:text-[8vw] font-black text-red-500 leading-none pb-2 sm:pb-4 text-center">
                GARGEE
              </h1>
            </motion.div>

            <motion.div
              className="flex-1 flex items-start justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
              variants={halfTextVariants}
              initial="initial"
              animate={hasScrolled ? "scrolledDown" : "initial"}
            >
              <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[10vw] xl:text-[8vw] font-black text-red-500 leading-none pt-2 sm:pt-4 text-center">
                SINGHA
              </h1>
            </motion.div>
          </div>

          {!hasScrolled && (
            <>
              <motion.div
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a href="#" className="flex items-center text-red-500 space-x-1 sm:space-x-2">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-medium uppercase hidden sm:inline">Instagram</span>
                </a>
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a href="#" className="flex items-center text-red-500 space-x-1 sm:space-x-2">
                  <span className="text-xs sm:text-sm font-medium uppercase hidden sm:inline">Email Me</span>
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6 lg:bottom-8 z-30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex flex-col items-center text-red-500/60">
                  <span className="text-xs sm:text-sm mb-1 sm:mb-2 hidden sm:block">Scroll to explore</span>
                  <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-red-500/30 rounded-full flex justify-center">
                    <motion.div
                      className="w-1 h-2 sm:h-3 bg-red-500/40 rounded-full mt-1 sm:mt-2"
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            </>
          )}

          {hasScrolled && (
            <motion.div
              key="hero-foreground"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute z-30 top-0 left-0 h-full w-full flex items-center px-4 sm:px-8 lg:px-16 lg:w-1/2"
            >
              <div className="w-full max-w-2xl space-y-6 sm:space-y-8 p-6 sm:p-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  <span className="text-red-500">Don't wait for the opportunity. </span>
                  <span className="text-black drop-shadow-lg">Create it! and Own it!</span>
                </h1>

                <p className="text-black drop-shadow-lg text-base sm:text-lg lg:text-xl max-w-2xl">
                  A multi-passionate leader shaping the future of agri-commerce,
                  digital marketing, and investor communication.
                </p>

                <p className="text-black/70 drop-shadow-lg text-sm sm:text-base max-w-2xl">
                  Director @ Broadway Agri | Head of Digital @ Shares Bazaar & Where2Invest | Director @ Gro X Digital
                  <br />
                  EMBA Scholar @ IIM Bodh Gaya – building brands | driving impact | believing in growth with purpose.
                </p>

                <div className="border-l-4 border-red-500 pl-4 sm:pl-6">
                  <p className="text-red-400 drop-shadow-lg text-base sm:text-lg lg:text-xl font-medium italic min-h-[1.5em]">
                    <TypewriterText text="Let's connect, collaborate, or create something meaningful." />
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <Button asChild variant="cta" size="xl">
                    <Link to="/connect">Get in Touch</Link>
                  </Button>
                  <Button asChild variant="ctaOutline" size="xl">
                    <Link to="/about">Know More About Her</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {hasScrolled && (
            <div className="lg:hidden absolute inset-0 z-20">
              <motion.img
                src={mobileError ? HERO_DESKTOP_SRC : HERO_MOBILE_SRC}
                alt="Hero Background"
                className="w-full h-full object-cover object-right"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                loading="eager"
                onError={() => setMobileError(true)}
              />
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-30 mt-[100vh] bg-white">
        <RolesSticky roles={roles} />

        <section id="whatsetsapart" className="section bg-secondary">
          <div className="container-responsive grid md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold">What Sets Her Apart</h2>
              <p className="text-muted-foreground mt-2">A rare blend of strategy and soul</p>
            </Reveal>
            <Reveal>
              <ul className="space-y-3 text-foreground/90">
                <li>• A rare blend of strategy, storytelling, and social sensitivity</li>
                <li>• Industry exposure from farmland to fintech</li>
                <li>• Builds scalable systems with a creative soul</li>
                <li>• Deep understanding of both digital transformation and grassroots realities</li>
                <li>• Leads with clarity, warmth, and results</li>
                <li>• Turns complex problems into simple, action-based solutions</li>
              </ul>
              <div className="mt-4">
                <Button asChild variant="link">
                  <Link to="/about#whatsetsapart" className="story-link">
                    Know More
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container-responsive">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Services</h2>
              <p className="text-muted-foreground mt-2">Strategy to execution, built for growth</p>
            </Reveal>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <Reveal className="rounded-lg border p-6 hover-scale">
                <TrendingUp className="text-primary" />
                <h3 className="font-display text-xl mt-3">Digital Marketing Strategy &amp; Execution</h3>
              </Reveal>
              <Reveal className="rounded-lg border p-6 hover-scale">
                <Share2 className="text-primary" />
                <h3 className="font-display text-xl mt-3">Social Media &amp; Performance Campaigns</h3>
              </Reveal>
              <Reveal className="rounded-lg border p-6 hover-scale">
                <PencilRuler className="text-primary" />
                <h3 className="font-display text-xl mt-3">Content Creation &amp; Brand Positioning</h3>
              </Reveal>
              <Reveal className="rounded-lg border p-6 hover-scale">
                <Boxes className="text-primary" />
                <h3 className="font-display text-xl mt-3">B2B Growth &amp; E-Commerce Enablement</h3>
              </Reveal>
            </div>
            <Reveal className="mt-8">
              <Button asChild variant="cta" size="lg">
                <Link to="/services">Explore All Services</Link>
              </Button>
            </Reveal>
          </div>
        </section>

        <section className="section bg-secondary">
          <div className="container-responsive grid md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Collaboration Opportunities</h2>
              <p className="text-muted-foreground mt-2">We believe in shared growth</p>
            </Reveal>
            <Reveal>
              <ul className="space-y-3 text-foreground/90">
                <li>• Warehouse Owners: Build tech-integrated storage &amp; delivery clusters.</li>
                <li>• Logistics Providers: First-mile to last-mile delivery network expansion.</li>
                <li>• Distribution Agents &amp; Retailers: Add value to farmers, retailers &amp; consumers.</li>
              </ul>
              <div className="mt-4">
                <Button asChild variant="cta">
                  <Link to="/services#collaboration">Partner With Her</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container-responsive grid md:grid-cols-2 gap-8 items-center">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold">About Gargee</h2>
              <p className="text-muted-foreground mt-2">A short story</p>
            </Reveal>
            <Reveal>
              <div className="rounded-lg border p-6">
                <p>
                  A purpose-driven leader, storyteller, and social soul. From rural Bengal to boardrooms, Gargee bridges
                  tradition with transformation. She balances entrepreneurship, digital innovation, and community
                  service—always leading with empathy and strategy.
                </p>
                <Button asChild variant="link" className="mt-3 p-0">
                  <Link to="/about">Read Her Story</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-responsive grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Gargee Singha</h3>
            <p className="text-gray-400">A multi-passionate leader shaping the future of agri-commerce and digital marketing.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/connect" className="text-gray-400 hover:text-white">Connect</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white flex items-center gap-2"><Instagram size={16} /> Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white flex items-center gap-2"><Mail size={16} /> Email</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe for updates and insights</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l text-gray-900 w-full" />
              <button className="bg-red-500 px-4 py-2 rounded-r">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="container-responsive mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Gargee Singha. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
