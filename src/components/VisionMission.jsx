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
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section: Title, description, and button */}
        <div className="mb-16 md:mb-20 text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            We are Luxury Car Rental in UAE
          </h2>

          <p
            className="mx-auto max-w-3xl text-sm md:text-base lg:text-lg text-white/90 leading-relaxed mb-8 md:mb-10 font-light"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Experience the pinnacle of automotive luxury. We deliver exceptional service that transforms every journey into an unforgettable experience, setting new standards in elegance and sophistication.
          </p>

          <a
            href="/cars"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] border border-[#6B4FE8] text-white font-semibold text-base rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 hover:-translate-y-1"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Reserve Your Ride
          </a>
        </div>

        {/* Bottom section: 3 Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Pillar 1: Exquisite Fleet */}
          <div className="group bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-8 hover:bg-[#1A1A1A] transition-all duration-300 border border-white/10 hover:border-[#B844E8]/30 shadow-lg hover:shadow-2xl hover:-translate-y-2 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#B844E8]/10 transition-colors duration-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white/80 group-hover:text-[#B844E8] transition-colors duration-300">
                <path d="M7 4V2h10v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 6h14v2a4 4 0 01-4 4H9a4 4 0 01-4-4V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 14v4a2 2 0 002 2h0a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#B844E8] transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>Exquisite Fleet</h3>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Meticulously curated collection of the world's finest automobiles, detailed to perfection.
            </p>
          </div>

          {/* Pillar 2: Transparent Pricing */}
          <div className="group bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-8 hover:bg-[#1A1A1A] transition-all duration-300 border border-white/10 hover:border-[#B844E8]/30 shadow-lg hover:shadow-2xl hover:-translate-y-2 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#B844E8]/10 transition-colors duration-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white/80 group-hover:text-[#B844E8] transition-colors duration-300">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="7" cy="7" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#B844E8] transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>Transparent Pricing</h3>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Honest, upfront rates with no hidden fees. Premium value for a premium experience.
            </p>
          </div>

          {/* Pillar 3: 24/7 VIP Support */}
          <div className="group bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-8 hover:bg-[#1A1A1A] transition-all duration-300 border border-white/10 hover:border-[#B844E8]/30 shadow-lg hover:shadow-2xl hover:-translate-y-2 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#B844E8]/10 transition-colors duration-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white/80 group-hover:text-[#B844E8] transition-colors duration-300">
                <path d="M21 13l-6.5-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 20v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#B844E8] transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>24/7 VIP Support</h3>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Dedicated concierge service available around the clock to ensure your journey is flawless.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}