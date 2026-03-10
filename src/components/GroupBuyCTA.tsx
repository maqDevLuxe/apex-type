import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const GroupBuyCTA = () => (
  <section className="section-padding bg-surface relative overflow-hidden">
    {/* Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
    
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Limited to 500 Units</p>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
          Join The <span className="gradient-text glow-text">Group Buy</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
          Secure your APEX One before the window closes. 
          Production begins Q2 2026 with estimated delivery Q3 2026.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-display font-semibold text-lg flex items-center gap-2 hover:shadow-[0_0_40px_hsl(185_100%_50%/0.4)] transition-all"
          >
            Reserve Now — $349 <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
        <p className="text-xs text-muted-foreground">$50 refundable deposit · Full payment on shipping</p>
      </motion.div>
    </div>
  </section>
);

export default GroupBuyCTA;
