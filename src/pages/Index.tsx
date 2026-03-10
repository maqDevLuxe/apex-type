import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SwitchPartners from "@/components/SwitchPartners";
import AcousticProfiles from "@/components/AcousticProfiles";
import ActuationMetrics from "@/components/ActuationMetrics";
import CustomizationPreview from "@/components/CustomizationPreview";
import CNCProcess from "@/components/CNCProcess";
import ArtisanKeycaps from "@/components/ArtisanKeycaps";
import DeskSetup from "@/components/DeskSetup";
import BoardsBuilt from "@/components/BoardsBuilt";
import TypistBlog from "@/components/TypistBlog";
import LifetimeWarranty from "@/components/LifetimeWarranty";
import Reviews from "@/components/Reviews";
import GroupBuyCTA from "@/components/GroupBuyCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <CustomCursor />
    <Navbar />
    <HeroSection />
    <SwitchPartners />
    <AcousticProfiles />
    <ActuationMetrics />
    <CustomizationPreview />
    <CNCProcess />
    <ArtisanKeycaps />
    <DeskSetup />
    <BoardsBuilt />
    <TypistBlog />
    <LifetimeWarranty />
    <Reviews />
    <GroupBuyCTA />
    <Footer />
  </div>
);

export default Index;
