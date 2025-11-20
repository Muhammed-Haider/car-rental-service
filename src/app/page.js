import HeroVideo from "@/components/HeroVideo";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import VisionMission from "@/components/VisionMission";
import CarListing from "@/components/CarListing";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <AboutUs />
      <div className="relative isolate z-0">
        <WhyChooseUs />
      </div>
      <VisionMission />
      <CarListing />
    </>
  );
}
