"use client";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F8FAFC] text-[#0A1A2F] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
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
          className="text-center text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8 text-slate-900 px-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Unmatched Service,<br className="hidden md:block" />
          <span className="block md:inline"> Superior Cars &</span><br className="hidden md:block" />
          <span className="block md:inline"> Hassle-Free Experience</span>
        </h3>

        {/* Supporting paragraph */}
        <p
          className="mx-auto max-w-2xl text-center text-base md:text-lg text-slate-600/90 leading-[1.7] mb-12 md:mb-16 px-4"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.01em" }}
        >
          Choosing us means experiencing unparalleled luxury with reliable service, ensuring an exceptional driving experience in every detail.
        </p>

        {/* Layout with feature boxes on left/right of the car (desktop) */}
        <div className="mt-10 md:mt-12">
          <div className="relative flex flex-col md:flex-row items-center justify-center py-8">
            {/* Left features */}
            <div className="flex flex-col gap-8 md:gap-12 items-end md:pr-20 lg:pr-28 flex-1 justify-center">
              <div className="flex items-start gap-4 text-left max-w-md">
                <span className="flex items-center justify-center w-12 h-12 bg-slate-50 border border-slate-200/60 rounded-lg shadow-sm flex-shrink-0">
                  {/* Trophy icon - Vercel style */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-700">
                    <path d="M7 4V2h10v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 6h14v2a4 4 0 01-4 4H9a4 4 0 01-4-4V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 14v4a2 2 0 002 2h0a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="flex flex-col justify-center text-left">
                  <h4 className="font-semibold text-base md:text-lg text-slate-900 tracking-tight mb-1.5 leading-snug" style={{fontFamily: 'Inter, sans-serif'}}>Diverse Range of Luxury Vehicles</h4>
                  <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                    Our fleet offers high-performance, comfortable, and elegant cars for every preference
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 text-left max-w-md">
                <span className="flex items-center justify-center w-12 h-12 bg-slate-50 border border-slate-200/60 rounded-lg shadow-sm flex-shrink-0">
                  {/* Speed icon - Vercel style */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-700">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="flex flex-col justify-center text-left">
                  <h4 className="font-semibold text-base md:text-lg text-slate-900 tracking-tight mb-1.5 leading-snug" style={{fontFamily: 'Inter, sans-serif'}}>Reliable & Fast Service</h4>
                  <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>Experience seamless booking and prompt delivery for a truly hassle-free journey.</p>
                </div>
              </div>
            </div>

            {/* Car image centered */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/car_black.png"
                alt="Luxury car"
                className="mx-auto max-w-[220%] md:max-w-[200%] lg:max-w-[180%] h-auto object-contain"
              />
            </div>

            {/* Right features */}
            <div className="flex flex-col gap-8 md:gap-12 items-start md:pl-20 lg:pl-28 flex-1 justify-center">
              <div className="flex items-start gap-4 text-left max-w-md">
                <span className="flex items-center justify-center w-12 h-12 bg-slate-50 border border-slate-200/60 rounded-lg shadow-sm flex-shrink-0">
                  {/* Tag icon - Vercel style */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-700">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
                  </svg>
                </span>
                <div className="flex flex-col justify-center text-left">
                  <h4 className="font-semibold text-base md:text-lg text-slate-900 tracking-tight mb-1.5 leading-snug" style={{fontFamily: 'Inter, sans-serif'}}>Flexible Rental Plans</h4>
                  <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>Daily, weekly, or monthly—choose a plan that fits your lifestyle, with easy payment options.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 text-left max-w-md">
                <span className="flex items-center justify-center w-12 h-12 bg-slate-50 border border-slate-200/60 rounded-lg shadow-sm flex-shrink-0">
                  {/* Key icon - Vercel style */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-700">
                    <path d="M21 13l-6.5-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="15" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </span>
                <div className="flex flex-col justify-center text-left">
                  <h4 className="font-semibold text-base md:text-lg text-slate-900 tracking-tight mb-1.5 leading-snug" style={{fontFamily: 'Inter, sans-serif'}}>Commitment to Excellence</h4>
                  <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>Expect top-tier service and pristine vehicles—your luxury experience is our promise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}