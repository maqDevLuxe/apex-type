import deskImg from "@/assets/desk-setup.jpg";

const DeskSetup = () => (
  <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
    <img src={deskImg} alt="Premium desk setup" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
    <div className="absolute bottom-12 left-0 right-0 text-center">
      <p className="text-sm text-primary tracking-[0.2em] uppercase mb-2">The Complete Setup</p>
      <h2 className="text-3xl md:text-5xl font-display font-bold">Your Desk. Elevated.</h2>
    </div>
  </section>
);

export default DeskSetup;
