import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Shield, Wrench, Package } from "lucide-react";

const features = [
  { icon: Shield, title: "Lifetime Warranty", desc: "Full coverage on structural and electrical defects, forever." },
  { icon: Wrench, title: "Free Repairs", desc: "We fix it or replace it. No questions, no hidden fees." },
  { icon: Package, title: "Global Shipping", desc: "Covered return shipping to 98+ countries worldwide." },
];

const LifetimeWarranty = () => (
  <SectionWrapper className="bg-surface">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Our Promise</p>
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
        Built To Last. <span className="gradient-text">Guaranteed.</span>
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-16">
        Every APEX One is backed by our unconditional lifetime warranty. 
        Because endgame should mean forever.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default LifetimeWarranty;
