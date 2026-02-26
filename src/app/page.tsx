import HeroSection from "@/components/HeroSection";
import FirmIntro from "@/components/FirmIntro";
import PracticePreview from "@/components/PracticePreview";
import TeamPreview from "@/components/TeamPreview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FirmIntro />
      <PracticePreview />
      <TeamPreview />
      <ContactSection />
      <Footer />
    </>
  );
}
