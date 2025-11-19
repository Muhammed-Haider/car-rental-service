import HeroVideo from "@/components/HeroVideo";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <AboutUs />
      <div className="relative isolate z-0 mt-8 md:mt-12">
        <WhyChooseUs />
      </div>
    </>
  );
}
