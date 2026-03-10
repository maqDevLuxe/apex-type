import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Star } from "lucide-react";

const reviews = [
  { name: "Alex K.", role: "Competitive Typist", text: "The acoustics on this board are unmatched. Deep, consistent thock on every keystroke. This is endgame.", rating: 5 },
  { name: "Mika T.", role: "Software Engineer", text: "I've tried 20+ customs. The APEX One's gasket mount and build quality put everything else to shame.", rating: 5 },
  { name: "Jordan L.", role: "Content Creator", text: "The CNC machining is flawless. The weight, the finish, the sound—everything screams premium.", rating: 5 },
  { name: "Sarah P.", role: "UI Designer", text: "Beautiful in every way. The artisan keycap alone is worth the price of admission. Absolutely stunning board.", rating: 5 },
];

const Reviews = () => (
  <SectionWrapper id="reviews">
    <div className="max-w-7xl mx-auto">
      <p className="text-primary text-sm tracking-[0.2em] uppercase text-center mb-4">Community</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">Enthusiast Reviews</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 hover:glow-border transition-all duration-500"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground mb-6 leading-relaxed">"{r.text}"</p>
            <div>
              <p className="font-display font-semibold text-sm">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Reviews;
