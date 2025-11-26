import AboutHero from "./components/AboutHero";
import LuxuryCarsCTA from "./components/LuxuryCarsCTA";
import VisionMission from "@/components/VisionMission";
import GallerySection from "./components/GallerySection";
import FinalCTA from "./components/FinalCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <LuxuryCarsCTA />
      <VisionMission />
            <GallerySection />
      <FinalCTA />
    </main>
  );
}
