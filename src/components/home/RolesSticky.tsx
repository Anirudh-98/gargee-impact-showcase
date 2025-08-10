import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            setActive(index);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.0 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeRole = useMemo(() => roles[active], [roles, active]);

  return (
    <section className="section" aria-labelledby="roles-title">
      <div className="container-responsive grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2 md:sticky md:top-24 self-start">
          <div className="rounded-lg border bg-card shadow-sm p-6 animate-enter">
            <p className="text-sm text-muted-foreground">Current Focus</p>
            <h3 id="roles-title" className="font-display text-2xl md:text-3xl font-semibold mt-2">
              {activeRole.company}
            </h3>
            <p className="mt-3 text-foreground/80">{activeRole.headline}</p>
            <Button asChild variant="cta" size="sm" className="mt-4">
              <Link to={activeRole.ctaHref}>{activeRole.ctaLabel}</Link>
            </Button>
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col gap-16">
          {roles.map((role, i) => (
            <div
              key={role.id}
              data-index={i}
              ref={(el) => (refs.current[i] = el)}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <h4 className="font-display text-xl md:text-2xl font-semibold">{role.company}</h4>
              <p className="mt-2 text-primary font-medium">{role.headline}</p>
              <p className="mt-3 text-foreground/80">{role.body}</p>
              <Button asChild variant="link" className="mt-3 p-0">
                <Link to={role.ctaHref} className="story-link">{role.ctaLabel}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSticky;
