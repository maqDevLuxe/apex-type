import SectionWrapper from "./SectionWrapper";

const partners = [
  { name: "Cherry MX", desc: "German Precision" },
  { name: "Gateron", desc: "Smooth Action" },
  { name: "Kailh", desc: "Innovation First" },
  { name: "Durock", desc: "Premium Feel" },
  { name: "JWK", desc: "Enthusiast Grade" },
];

const SwitchPartners = () => (
  <SectionWrapper id="switches" className="border-t border-border">
    <div className="max-w-7xl mx-auto">
      <p className="text-primary text-sm tracking-[0.2em] uppercase text-center mb-4">Compatible With</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
        World-Class Switch Partners
      </h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {partners.map((p) => (
          <div key={p.name} className="text-center group">
            <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mb-3 mx-auto group-hover:glow-border transition-all duration-300">
              <span className="text-2xl font-display font-bold text-primary">{p.name[0]}</span>
            </div>
            <p className="font-display font-semibold text-sm text-foreground">{p.name}</p>
            <p className="text-xs text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default SwitchPartners;
