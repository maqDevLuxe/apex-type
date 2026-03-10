import { useEffect, useState, useRef } from "react";
import SectionWrapper from "./SectionWrapper";

const stats = [
  { target: 12847, label: "Boards Built", suffix: "+" },
  { target: 98, label: "Countries Shipped", suffix: "" },
  { target: 4.9, label: "Average Rating", suffix: "/5" },
  { target: 23, label: "Design Awards", suffix: "" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current * 10) / 10);
          }
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-display font-bold gradient-text glow-text">
        {target >= 100 ? Math.floor(count).toLocaleString() : count}{suffix}
      </p>
    </div>
  );
};

const BoardsBuilt = () => (
  <SectionWrapper className="bg-surface">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <Counter target={s.target} suffix={s.suffix} />
            <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default BoardsBuilt;
