import React, { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export interface RoleItem {
  id: string;
  company: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

interface RolesStickyProps {
  roles: RoleItem[];
}

const RolesSticky: React.FC<RolesStickyProps> = ({ roles }) => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = roles.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = roles.map((_, i) => i / cardLength);
    const closestIndex = breakpoints.reduce((acc, bp, i) => {
      const d = Math.abs(latest - bp);
      return d < Math.abs(latest - breakpoints[acc]) ? i : acc;
    }, 0);
    setActive(closestIndex);
  });

  const activeRole = useMemo(() => roles[active], [roles, active]);

  return (
    <section className="section" aria-labelledby="roles-title">
      <div className="container-responsive">
        <motion.div
          ref={ref}
          className="h-[30rem] overflow-y-auto flex justify-center relative gap-10 rounded-lg border bg-background p-6"
        >
          <div className="relative flex-1 max-w-2xl">
            {roles.map((role, index) => (
              <div key={role.id} className="my-20">
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: active === index ? 1 : 0.5 }}
                  className="font-display text-xl md:text-2xl font-semibold"
                >
                  {role.company}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: active === index ? 1 : 0.5 }}
                  className="mt-2 text-primary font-medium"
                >
                  {role.headline}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: active === index ? 1 : 0.5 }}
                  className="mt-3 text-foreground/80"
                >
                  {role.body}
                </motion.p>
                <Button asChild variant="link" className="mt-3 p-0">
                  <Link to={role.ctaHref} className="story-link">
                    {role.ctaLabel}
                  </Link>
                </Button>
              </div>
            ))}
            <div className="h-40" />
          </div>

          <div className="hidden lg:block h-60 w-80 rounded-lg bg-card sticky top-10 overflow-hidden border shadow-sm p-6 animate-enter self-start">
            <p className="text-sm text-muted-foreground">Current Focus</p>
            <h3 id="roles-title" className="font-display text-2xl md:text-3xl font-semibold mt-2">
              {activeRole.company}
            </h3>
            <p className="mt-3 text-foreground/80">{activeRole.headline}</p>
            <Button asChild variant="cta" size="sm" className="mt-4">
              <Link to={activeRole.ctaHref}>{activeRole.ctaLabel}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RolesSticky;
