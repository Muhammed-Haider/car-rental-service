import HeroVideo from "@/components/HeroVideo";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import VisionMission from "@/components/VisionMission";
import CarListing from "@/components/CarListing";
import HowItWorks from "@/components/HowItWorks";
import ClientReviews from "@/components/ClientReviews";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroVideo />
      <div className="relative z-10">
        <WhyChooseUs />
      </div>
      <AboutUs />
      <VisionMission />
      <CarListing />
      <HowItWorks />
      <ClientReviews />
      <FAQ />
    </main>
  );
}
