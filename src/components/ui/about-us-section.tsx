import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface AboutUsSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  id = "whatsetsapart",
  title,
  subtitle,
  bullets,
  ctaLabel,
  ctaHref,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  return (
    <section
      id={id}
      ref={sectionRef}
      className="section bg-secondary relative overflow-hidden"
      aria-labelledby={`${id}-title`}
    >
      {/* Decorative elements using design tokens */}
      <motion.div
        className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-accent/10 blur-2xl"
        style={{ y: y2 }}
      />

      <div className="container-responsive grid md:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={container}>
          <motion.h2 id={`${id}-title`} className="font-display text-3xl md:text-4xl font-bold" variants={item}>
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p className="text-muted-foreground mt-2" variants={item}>
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={container}>
          <ul className="space-y-3 text-foreground/90">
            {bullets.map((b, idx) => (
              <motion.li key={idx} variants={item}>
                • {b}
              </motion.li>
            ))}
          </ul>
          <motion.div className="mt-4" variants={item}>
            <Button asChild variant="link">
              <Link to={ctaHref} className="story-link">
                {ctaLabel}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
