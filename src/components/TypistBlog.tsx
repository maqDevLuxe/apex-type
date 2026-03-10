import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { title: "The Science of Thock: Why Sound Matters", category: "Acoustics", date: "Mar 2, 2026" },
  { title: "Gasket vs. Top Mount: A Builder's Guide", category: "Engineering", date: "Feb 18, 2026" },
  { title: "Why We Chose 6063 Aluminum", category: "Materials", date: "Feb 5, 2026" },
];

const TypistBlog = () => (
  <SectionWrapper>
    <div className="max-w-7xl mx-auto">
      <p className="text-primary text-sm tracking-[0.2em] uppercase text-center mb-4">From The Workshop</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">Typist Blog</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 group hover:glow-border transition-all duration-500 cursor-pointer"
          >
            <span className="text-xs text-primary uppercase tracking-wider">{p.category}</span>
            <h3 className="font-display font-semibold text-lg mt-3 mb-4 group-hover:text-primary transition-colors flex items-start gap-2">
              {p.title}
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary flex-shrink-0 mt-1" />
            </h3>
            <p className="text-sm text-muted-foreground">{p.date}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default TypistBlog;
