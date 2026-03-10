import { motion } from "framer-motion";
import heroImg from "@/assets/hero-keyboard.png";

const FloatingKeycap = ({ className, delay }: { className: string; delay: number }) => (
  <motion.div
    className={`absolute w-10 h-10 md:w-14 md:h-14 rounded-lg border border-border bg-card opacity-20 ${className}`}
    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Floating keycaps parallax */}
    <FloatingKeycap className="top-[15%] left-[8%]" delay={0} />
    <FloatingKeycap className="top-[25%] right-[12%]" delay={1} />
    <FloatingKeycap className="bottom-[20%] left-[15%]" delay={2} />
    <FloatingKeycap className="top-[60%] right-[8%]" delay={0.5} />
    <FloatingKeycap className="top-[10%] left-[50%]" delay={1.5} />
    <FloatingKeycap className="bottom-[10%] right-[25%]" delay={3} />

    {/* Glow bg */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-6"
      >
        Group Buy — Limited Edition
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-6"
      >
        Precision.{" "}
        <span className="gradient-text glow-text">Perfected.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
      >
        CNC-machined 6063 aluminum. Gasket-mounted. Endgame-level acoustics. 
        The APEX One is engineered for those who accept nothing less.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium text-base hover:shadow-[0_0_30px_hsl(185_100%_50%/0.4)] transition-all"
        >
          Reserve Yours — $349
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="border border-border text-foreground px-8 py-3.5 rounded-lg font-medium text-base hover:border-primary/50 transition-colors"
        >
          Explore Specs
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="mt-16 relative"
      >
        <img src={heroImg} alt="APEX One Custom Mechanical Keyboard" className="w-full max-w-4xl mx-auto rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
