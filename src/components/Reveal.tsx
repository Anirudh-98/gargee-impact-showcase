import React, { useEffect, useRef, useState } from "react";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({
  as: Tag = "div",
  threshold = 0.2,
  className = "",
  children,
  ...rest
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current as Element | null;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const Comp: any = Tag;
  return (
    <Comp
      ref={ref as any}
      className={`${visible ? "animate-enter" : "opacity-0 translate-y-2"} ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
