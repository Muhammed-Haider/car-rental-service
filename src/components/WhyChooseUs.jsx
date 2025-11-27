"use client";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F8FAFC] text-[#0A1A2F] pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top label */}
        <div className="text-center mb-6">
          <h2
            className="text-2xl md:text-3xl font-bold tracking-[0.15em] text-slate-700 uppercase mb-4"
            style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "0.2em" }}
          >
            Why Choose Us
          </h2>

          {/* decorative underline + car icon */}
          <div className="relative inline-block">
            <div className="h-[2px] w-36 md:w-44 bg-gradient-to-r from-[#A3BFFA] via-[#D0E3FF] to-transparent rounded-full"></div>
            <span className="absolute -right-3 -top-3 text-[#0057FF]">
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
          className="text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8 text-slate-900 px-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Unmatched Service, Superior Cars<br />
          and Hassle-Free Experience
        </h3>

        {/* Supporting paragraph */}
        <p
          className="mx-auto max-w-2xl text-center text-base md:text-lg text-slate-600/90 leading-[1.7] mb-0 px-4"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.01em" }}
        >
          Choosing us means experiencing unparalleled luxury with reliable service, ensuring an exceptional driving experience in every detail.
        </p>

        {/* Layout with feature boxes on left/right of the car (desktop) */}
        <div className="mt-2 md:mt-4 lg:mt-6">
          <div className="relative flex flex-col md:flex-row items-center justify-center py-0">
            {/* Left features - order-2 on mobile, order-1 on desktop */}
            <div className="flex flex-col gap-6 md:gap-10 items-end md:pr-12 lg:pr-20 flex-1 justify-center z-20 order-2 md:order-1">
              <div className="group flex items-start gap-4 text-left max-w-xs md:max-w-sm transition-all duration-300 hover:-translate-x-1">
                <span className="flex items-center justify-center w-14 h-14 bg-white border border-slate-100 rounded-xl shadow-sm flex-shrink-0 transition-all duration-300 group-hover:shadow-md group-hover:border-[#0057FF]/20 group-hover:bg-[#0057FF]/5">
                  {/* Trophy icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-600 transition-colors duration-300 group-hover:text-[#0057FF]">
                    <path d="M7 4V2h10v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 6h14v2a4 4 0 01-4 4H9a4 4 0 01-4-4V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 14v4a2 2 0 002 2h0a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="flex flex-col justify-center text-left pt-1">
                  <h4 className="font-semibold text-lg text-slate-900 tracking-tight mb-1 leading-snug group-hover:text-[#0057FF] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Premium Fleet</h4>
                  <p className="text-[15px] text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Top-tier luxury vehicles for every preference.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-4 text-left max-w-xs md:max-w-sm transition-all duration-300 hover:-translate-x-1">
                <span className="flex items-center justify-center w-14 h-14 bg-white border border-slate-100 rounded-xl shadow-sm flex-shrink-0 transition-all duration-300 group-hover:shadow-md group-hover:border-[#0057FF]/20 group-hover:bg-[#0057FF]/5">
                  {/* Speed icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-600 transition-colors duration-300 group-hover:text-[#0057FF]">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="flex flex-col justify-center text-left pt-1">
                  <h4 className="font-semibold text-lg text-slate-900 tracking-tight mb-1 leading-snug group-hover:text-[#0057FF] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Fast Service</h4>
                  <p className="text-[15px] text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Seamless booking and prompt delivery.</p>
                </div>
              </div>
            </div>

            {/* Car image centered - order-1 on mobile, order-2 on desktop */}
            <div className="flex-[2] flex justify-center items-center px-4 md:px-0 relative z-10 order-1 md:order-2">
              <img
                src="/car_black.png"
                alt="Luxury car"
                className="mx-auto w-full h-auto object-contain scale-110 md:scale-135 drop-shadow-2xl"
              />
            </div>

            {/* Right features - order-3 on both mobile and desktop */}
            <div className="flex flex-col gap-6 md:gap-10 items-start md:pl-12 lg:pl-20 flex-1 justify-center z-20 order-3">
              <div className="group flex items-start gap-4 text-left max-w-xs md:max-w-sm transition-all duration-300 hover:translate-x-1">
                <span className="flex items-center justify-center w-14 h-14 bg-white border border-slate-100 rounded-xl shadow-sm flex-shrink-0 transition-all duration-300 group-hover:shadow-md group-hover:border-[#0057FF]/20 group-hover:bg-[#0057FF]/5">
                  {/* Tag icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-600 transition-colors duration-300 group-hover:text-[#0057FF]">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
                  </svg>
                </span>
                <div className="flex flex-col justify-center text-left pt-1">
                  <h4 className="font-semibold text-lg text-slate-900 tracking-tight mb-1 leading-snug group-hover:text-[#0057FF] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Flexible Plans</h4>
                  <p className="text-[15px] text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Daily, weekly, or monthly options.</p>
                </div>
              </div>
              <div className="group flex items-start gap-4 text-left max-w-xs md:max-w-sm transition-all duration-300 hover:translate-x-1">
                <span className="flex items-center justify-center w-14 h-14 bg-white border border-slate-100 rounded-xl shadow-sm flex-shrink-0 transition-all duration-300 group-hover:shadow-md group-hover:border-[#0057FF]/20 group-hover:bg-[#0057FF]/5">
                  {/* Key icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-600 transition-colors duration-300 group-hover:text-[#0057FF]">
                    <path d="M21 13l-6.5-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <div className="flex flex-col justify-center text-left pt-1">
                  <h4 className="font-semibold text-lg text-slate-900 tracking-tight mb-1 leading-snug group-hover:text-[#0057FF] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Excellence</h4>
                  <p className="text-[15px] text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Pristine vehicles, guaranteed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}