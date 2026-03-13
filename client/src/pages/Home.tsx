import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import CoverageMap from "@/components/CoverageMap";
import EquipmentSection from "@/components/EquipmentSection";
import SecuritySection from "@/components/SecuritySection";
import ISPSection from "@/components/ISPSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { GlowDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <StarField />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <StatsBar />
        <GlowDivider />
        <AboutSection />
        <GlowDivider />
        <SolutionsSection />
        <GlowDivider />
        <AdvantagesSection />
        <GlowDivider />
        <CoverageMap />
        <GlowDivider />
        <EquipmentSection />
        <SecuritySection />
        <GlowDivider />
        <ISPSection />
        <GlowDivider />
        <FAQSection />
        <GlowDivider />
        <ContactSection />
        <CTABanner />
        <Footer />
      </div>
    </div>
  );
}
