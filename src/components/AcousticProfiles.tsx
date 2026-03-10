import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const profiles = [
  { name: "Thock", freq: "Low", bars: [0.9, 0.7, 0.4, 0.2, 0.1], desc: "Deep, resonant bass with a satisfying bottom-out" },
  { name: "Clack", freq: "Mid", bars: [0.3, 0.6, 0.9, 0.7, 0.3], desc: "Sharp, crisp mid-range feedback for precision typists" },
  { name: "Pop", freq: "High", bars: [0.1, 0.3, 0.5, 0.8, 0.95], desc: "Bright, airy top-end with pronounced actuation point" },
];

const AcousticProfiles = () => (
  <SectionWrapper id="sound" className="bg-surface">
    <div className="max-w-7xl mx-auto">
      <p className="text-primary text-sm tracking-[0.2em] uppercase text-center mb-4">Tuned To Perfection</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Acoustic Profiles</h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
        Three signature sound profiles, adjustable via internal foam layers and gasket tension.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {profiles.map((p) => (
          <div key={p.name} className="bg-card rounded-2xl p-8 border border-border hover:glow-border transition-all duration-500 group">
            <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">{p.freq} Frequency</span>
            <div className="flex items-end gap-2 h-24 mt-6 mb-4">
              {p.bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-primary/20 rounded-t-sm relative overflow-hidden"
                  style={{ height: `${h * 100}%` }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-colors" />
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AcousticProfiles;
