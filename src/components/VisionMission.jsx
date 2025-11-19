"use client";

export default function VisionMission() {
  return (
    <section
      className="relative w-full py-20 md:py-32 overflow-hidden"
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

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {/* Top section: Title, description, and button */}
        <div className="mb-16 md:mb-24">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            We are Luxury Car Rental in UAE
          </h2>

          <p
            className="max-w-2xl text-base md:text-lg text-white/90 leading-relaxed mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We strive to offer an unparalleled luxury car rental experience, combining quality, comfort, and innovation to ensure customer satisfaction and exceed expectations.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#0057FF] px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-[#0048d1] focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0A1A2F]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Contact Now
          </a>
        </div>

        {/* Bottom section: Vision and Mission cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Vision Card */}
          <div className="group bg-white/95 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 ease-out hover:scale-105 border border-white/20 hover:border-white/40">
            <h3
              className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-[#0057FF] transition-colors duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Vision
            </h3>
            <p
              className="text-base md:text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              To become Dubai's leading luxury car rental provider, offering a seamless blend of quality, convenience, and innovation.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-white/95 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 ease-out hover:scale-105 border border-white/20 hover:border-white/40">
            <h3
              className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-[#0057FF] transition-colors duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Mission
            </h3>
            <p
              className="text-base md:text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              To deliver world-class car rental services with a strong focus on customer satisfaction and exceptional experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}