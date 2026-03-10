import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Switches", "Sound", "Customize", "Process", "Reviews"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          <span className="gradient-text">APEX</span>
          <span className="text-foreground">KEYS</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              {l}
            </a>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium hover:shadow-[0_0_20px_hsl(185_100%_50%/0.4)] transition-shadow"
          >
            Join Group Buy
          </motion.button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden glass border-t border-border px-6 py-4 space-y-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-primary">
              {l}
            </a>
          ))}
          <button className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium w-full">
            Join Group Buy
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
