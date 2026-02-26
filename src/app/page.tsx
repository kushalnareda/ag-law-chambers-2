import HeroSection from "@/components/HeroSection";
import OurFirmSection from "@/components/OurFirmSection";
import ServicesSection from "@/components/ServicesSection";
import TeamPreview from "@/components/TeamPreview";
import OurCoreSection from "@/components/OurCoreSection";
import IntegritySection from "@/components/IntegritySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OurFirmSection />
      <ServicesSection />
      <TeamPreview />
      <OurCoreSection />
      <IntegritySection />
      <ContactSection />
      <Footer />
    </>
  );
}
