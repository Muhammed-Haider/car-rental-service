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
            We strive to offer an unparalleled luxury car rental experience, combining quality, comfort, and innovation to ensure customer satisfaction and exceed expectations.
          </p>

          {/* Contact Now Button - Centered */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 md:px-8 md:py-3 bg-[#0057FF] border border-[#0057FF] text-white font-semibold text-sm md:text-base rounded-full hover:bg-transparent hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact Now
            </a>
          </div>
        </div>

        {/* Bottom section: Vision and Mission cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* Vision Card */}
          <div className="group bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 ease-out hover:scale-105 border border-white/20 hover:border-white/40">
            <h3
              className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3 md:mb-4 lg:mb-6 group-hover:text-[#0057FF] transition-colors duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Vision
            </h3>
            <p
              className="text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              To become Dubai's leading luxury car rental provider, offering a seamless blend of quality, convenience, and innovation.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 ease-out hover:scale-105 border border-white/20 hover:border-white/40">
            <h3
              className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3 md:mb-4 lg:mb-6 group-hover:text-[#0057FF] transition-colors duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Mission
            </h3>
            <p
              className="text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              To deliver world-class car rental services with a strong focus on customer satisfaction and exceptional experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Social/Nav Bar - Hidden on mobile */}
      <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col gap-3 z-20">
        {/* Up Arrow */}
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M5 12l7-7 7 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Book */}
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Gear (Active) */}
        <button className="w-12 h-12 -ml-1 bg-purple-600 rounded-l-full rounded-r-none flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 relative right-[-4px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* X Icon */}
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Facebook */}
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#1877F2" />
          </svg>
        </button>

        {/* LinkedIn */}
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="#0A66C2" />
            <rect x="2" y="9" width="4" height="12" fill="#0A66C2" />
            <circle cx="4" cy="4" r="2" fill="#0A66C2" />
          </svg>
        </button>
      </div>
    </section>
  );
}