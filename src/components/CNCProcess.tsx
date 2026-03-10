import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import cncImg from "@/assets/cnc-exploded.png";

const steps = [
  { num: "01", title: "Raw Billet", desc: "6063-T6 aluminum alloy sourced from certified mills" },
  { num: "02", title: "5-Axis CNC", desc: "Precision machining with ±0.01mm tolerance" },
  { num: "03", title: "Anodizing", desc: "Type III hard anodize for extreme durability" },
  { num: "04", title: "Assembly", desc: "Hand-assembled gasket mount with QC at every step" },
];

const CNCProcess = () => (
  <SectionWrapper id="process">
    <div className="max-w-7xl mx-auto">
      <p className="text-primary text-sm tracking-[0.2em] uppercase text-center mb-4">Craftsmanship</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
        CNC Machining Process
      </h2>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.img
          src={cncImg}
          alt="CNC machined keyboard exploded view"
          className="w-full rounded-2xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-5 group"
            >
              <span className="text-3xl font-display font-bold text-primary/30 group-hover:text-primary transition-colors">{s.num}</span>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default CNCProcess;
