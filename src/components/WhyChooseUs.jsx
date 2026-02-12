"use client";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-b from-[#000000] to-[#0D0D0D] text-white pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top label */}
        <div className="text-center mb-6">
          <h2
            className="text-2xl md:text-3xl font-bold tracking-[0.15em] text-white/80 uppercase mb-4"
            style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "0.2em" }}
          >
            Why Choose Us
          </h2>

          {/* decorative underline + car icon */}
          <div className="relative inline-block">
            <div className="h-[2px] w-36 md:w-44 bg-gradient-to-r from-[#8B3FBF] via-[#B844E8] to-transparent rounded-full"></div>
            <span className="absolute -right-3 -top-3 text-[#B844E8]">
              <svg
                width="32"
                height="14"
                viewBox="0 0 64 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <g transform="translate(64,0) scale(-1,1)">
                  <path
                    d="M10 18c-2 0-3.5-1.5-3.5-3.5S8 11 10 11h20c4 0 8-6 12-6h6c3 0 6 3 6 6v7c0 1.1-.9 2-2 2H10z"
                    fill="currentColor"
                    opacity="0.95"
                  />
                  <circle cx="18" cy="20" r="3" fill="#0F172A" />
                  <circle cx="46" cy="20" r="3" fill="#0F172A" />
                </g>
              </svg>
            </span>
          </div>
        </div>

        {/* Main headline */}
        <h3
          className="text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8 text-white px-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Unmatched Service, Superior Cars<br />
          and Hassle-Free Experience
        </h3>

        {/* Supporting paragraph */}
        <p
          className="mx-auto max-w-2xl text-center text-base md:text-lg text-white/80 leading-[1.7] mb-0 px-4"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.01em" }}
        >
          Choosing us means experiencing unparalleled luxury with reliable service, ensuring an exceptional driving experience in every detail.
        </p>

        {/* Layout with feature boxes on left/right of the car (desktop) */}
        {/* Redesigned Layout: Side-by-side balanced columns with central divider */}
        <div className="mt-8 md:mt-12 relative z-10">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0">

            {/* Left Column - Right Aligned Text */}
            <div className="flex-1 flex flex-col gap-10 items-end text-right md:pr-12 md:list-none border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0">
              <div className="group flex items-center justify-end gap-5 w-full md:max-w-md transition-all duration-300 hover:-translate-x-2">
                <div className="flex flex-col">
                  <h4 className="font-bold text-xl text-white mb-1 group-hover:text-[#B844E8] transition-colors">Premium Fleet</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-light">Curated top-tier vehicles for the discerning driver.</p>
                </div>
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(184,68,232,0.15)] group-hover:border-[#B844E8]/30 transition-all duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white/80 group-hover:text-[#B844E8] transition-colors">
                    <path d="M7 4V2h10v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 6h14v2a4 4 0 01-4 4H9a4 4 0 01-4-4V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 14v4a2 2 0 002 2h0a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="group flex items-center justify-end gap-5 w-full md:max-w-md transition-all duration-300 hover:-translate-x-2">
                <div className="flex flex-col">
                  <h4 className="font-bold text-xl text-white mb-1 group-hover:text-[#B844E8] transition-colors">Instant Delivery</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-light">From booking to driving in record time.</p>
                </div>
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(184,68,232,0.15)] group-hover:border-[#B844E8]/30 transition-all duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white/80 group-hover:text-[#B844E8] transition-colors">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column - Left Aligned Text */}
            <div className="flex-1 flex flex-col gap-10 items-start text-left md:pl-12 pt-0 md:pt-0">
              <div className="group flex flex-row-reverse md:flex-row items-center justify-start gap-5 w-full md:max-w-md transition-all duration-300 hover:translate-x-2">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(184,68,232,0.15)] group-hover:border-[#B844E8]/30 transition-all duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white/80 group-hover:text-[#B844E8] transition-colors">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <div className="flex flex-col items-end md:items-start text-right md:text-left">
                  <h4 className="font-bold text-xl text-white mb-1 group-hover:text-[#B844E8] transition-colors">Flexible Terms</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-light">Daily, weekly, or monthly plans tailored to you.</p>
                </div>
              </div>

              <div className="group flex flex-row-reverse md:flex-row items-center justify-start gap-5 w-full md:max-w-md transition-all duration-300 hover:translate-x-2">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(184,68,232,0.15)] group-hover:border-[#B844E8]/30 transition-all duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white/80 group-hover:text-[#B844E8] transition-colors">
                    <path d="M21 13l-6.5-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="flex flex-col items-end md:items-start text-right md:text-left">
                  <h4 className="font-bold text-xl text-white mb-1 group-hover:text-[#B844E8] transition-colors">Pristine Condition</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-light">Every vehicle is detailed to perfection.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}