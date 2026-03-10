import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import artisanImg from "@/assets/artisan-keycap.png";

const ArtisanKeycaps = () => (
  <SectionWrapper className="bg-surface">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Limited Artisan Collection</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Hand-Sculpted Artisan Keycaps
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Each APEX One ships with an exclusive artisan keycap from our collaboration 
          with master sculptors. Resin-cast, hand-painted, and individually numbered.
        </p>
        <div className="flex gap-6">
          <div>
            <p className="text-2xl font-display font-bold gradient-text">500</p>
            <p className="text-xs text-muted-foreground">Units Available</p>
          </div>
          <div>
            <p className="text-2xl font-display font-bold gradient-text">12</p>
            <p className="text-xs text-muted-foreground">Unique Designs</p>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <img src={artisanImg} alt="Artisan keycap" className="w-80 rounded-2xl glow-box" />
      </motion.div>
    </div>
  </SectionWrapper>
);

export default ArtisanKeycaps;
