"use client";

export default function VisionMission() {
  return (
    <section
      className="relative w-full py-16 md:py-20 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: "url('/missionsection.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section: Title, description, and button */}
        <div className="mb-12 md:mb-16 lg:mb-24">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            We are Luxury Car Rental in UAE
          </h2>

          <p
            className="max-w-2xl text-sm md:text-base lg:text-lg text-white/90 leading-relaxed mb-6 md:mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Experience the pinnacle of automotive luxury with our premium fleet. We deliver exceptional service that transforms every journey into an unforgettable experience, setting new standards in elegance and sophistication.
          </p>

          {/* Contact Now Button - Centered */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] border border-[#6B4FE8] text-white font-semibold text-sm md:text-base rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact Now
            </a>
          </div>
        </div>

        {/* Bottom section: Vision and Mission cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* Vision Card */}
          <div className="group bg-[#1A1A1A]/95 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:bg-[#1A1A1A] transition-all duration-300 ease-out hover:scale-105 border border-white/10 hover:border-white/20">
            <h3
              className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-3 md:mb-4 lg:mb-6 group-hover:text-[#B844E8] transition-colors duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Vision
            </h3>
            <p
              className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              To be the most trusted and preferred luxury car rental service in the UAE, redefining excellence through innovation, sustainability, and creating memorable experiences that inspire our customers to return.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-[#1A1A1A]/95 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:bg-[#1A1A1A] transition-all duration-300 ease-out hover:scale-105 border border-white/10 hover:border-white/20">
            <h3
              className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-3 md:mb-4 lg:mb-6 group-hover:text-[#B844E8] transition-colors duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Mission
            </h3>
            <p
              className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              To provide an unmatched luxury car rental experience by offering an exquisite fleet, personalized service, transparent pricing, and seamless booking processes that consistently exceed our customers' expectations.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}