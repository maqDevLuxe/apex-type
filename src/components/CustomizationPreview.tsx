import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const colors = [
  { name: "Graphite Black", bg: "bg-[hsl(220,12%,12%)]", accent: "hsl(220,12%,12%)" },
  { name: "Space Silver", bg: "bg-[hsl(220,10%,60%)]", accent: "hsl(220,10%,60%)" },
  { name: "Neon Cyan", bg: "bg-primary", accent: "hsl(185,100%,50%)" },
  { name: "Titanium Grey", bg: "bg-[hsl(220,8%,35%)]", accent: "hsl(220,8%,35%)" },
];

const layouts = ["65%", "75%", "TKL", "Full"];

const CustomizationPreview = () => {
  const [activeColor, setActiveColor] = useState(0);
  const [activeLayout, setActiveLayout] = useState(1);

  return (
    <SectionWrapper id="customize" className="bg-surface">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary text-sm tracking-[0.2em] uppercase text-center mb-4">Make It Yours</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
          Customization Studio
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Preview */}
          <motion.div
            key={activeColor}
            initial={{ opacity: 0.5, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[16/10] rounded-2xl border border-border relative overflow-hidden flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, hsl(220 14% 8%), hsl(220 14% 12%))` }}
          >
            <div className="text-center">
              <div
                className="w-64 h-20 rounded-xl mx-auto mb-4 transition-all duration-500"
                style={{ background: colors[activeColor].accent, opacity: 0.8 }}
              />
              <p className="text-sm text-muted-foreground">{layouts[activeLayout]} Layout · {colors[activeColor].name}</p>
            </div>
            <div className="absolute inset-0 border border-primary/10 rounded-2xl" />
          </motion.div>

          {/* Controls */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Case Color</h3>
              <div className="flex gap-3">
                {colors.map((c, i) => (
                  <motion.button
                    key={c.name}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveColor(i)}
                    className={`w-12 h-12 rounded-full ${c.bg} border-2 transition-all ${i === activeColor ? "border-primary glow-box scale-110" : "border-border"}`}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Layout</h3>
              <div className="flex gap-3">
                {layouts.map((l, i) => (
                  <motion.button
                    key={l}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveLayout(i)}
                    className={`px-5 py-2.5 rounded-lg text-sm font-medium border transition-all ${i === activeLayout ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}
                  >
                    {l}
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="text-sm text-muted-foreground mb-2">Starting from</p>
              <p className="text-3xl font-display font-bold gradient-text">$349</p>
              <p className="text-xs text-muted-foreground mt-1">Fully assembled · Ships Q3 2026</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CustomizationPreview;
