import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const metrics = [
  { label: "Actuation Force", value: "45g", unit: "±2g", desc: "Optimal force curve for extended sessions" },
  { label: "Pre-travel", value: "2.0", unit: "mm", desc: "Precise actuation point for competitive play" },
  { label: "Total Travel", value: "3.8", unit: "mm", desc: "Full stroke depth for satisfying bottom-out" },
  { label: "Debounce", value: "5", unit: "ms", desc: "Ultra-fast signal processing" },
  { label: "Polling Rate", value: "8000", unit: "Hz", desc: "8× faster than standard keyboards" },
  { label: "N-Key Rollover", value: "Full", unit: "NKRO", desc: "Every keypress registers, always" },
];

const ActuationMetrics = () => (
  <SectionWrapper>
    <div className="max-w-7xl mx-auto">
      <p className="text-primary text-sm tracking-[0.2em] uppercase text-center mb-4">Engineered Precision</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
        Actuation Metrics
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:glow-border transition-all duration-500"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{m.label}</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-display font-bold gradient-text">{m.value}</span>
              <span className="text-sm text-muted-foreground">{m.unit}</span>
            </div>
            <p className="text-sm text-muted-foreground">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ActuationMetrics;
