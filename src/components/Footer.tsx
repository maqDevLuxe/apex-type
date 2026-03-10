const Footer = () => (
  <footer className="border-t border-border px-6 py-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <span className="font-display text-lg font-bold">
          <span className="gradient-text">APEX</span>KEYS
        </span>
        <p className="text-xs text-muted-foreground mt-1">Precision. Perfected.</p>
      </div>
      <div className="flex gap-8 text-sm text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">Discord</a>
        <a href="#" className="hover:text-primary transition-colors">Instagram</a>
        <a href="#" className="hover:text-primary transition-colors">YouTube</a>
        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
      </div>
      <p className="text-xs text-muted-foreground">© 2026 ApexKeys. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
