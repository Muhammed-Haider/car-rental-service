"use client";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F8FAFC] text-[#0A1A2F] py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
        {/* Top label */}
        <h2
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-700 uppercase"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Why Choose Us
        </h2>

        {/* decorative underline + car icon */}
        <div className="relative inline-block mt-2 mb-8">
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

        {/* Main headline */}
        <h3
          className="text-3xl md:text-5xl font-extrabold leading-tight md:leading-[1.15] tracking-tight mb-5 text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Unmatched Service, Superior Cars &
          <br className="hidden md:block" />
           Hassle-Free Experience
        </h3>

        {/* Supporting paragraph */}
        <p
          className="mx-auto max-w-3xl text-base md:text-lg text-slate-600/90 leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Choosing us means experiencing unparalleled luxury with reliable service, ensuring an exceptional driving experience in every detail.
        </p>

        {/* Layout with feature boxes on left/right of the car (desktop) */}
        <div className="mt-10 md:mt-12">
          <div className="relative flex flex-col md:flex-row items-center justify-center py-8">
            {/* Left features */}
            <div className="flex flex-col gap-8 md:gap-12 items-end md:pr-24 flex-1">
              <div className="flex items-center gap-4 text-left">
                <div className="flex items-center gap-5 w-full">
                  <span className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white shadow-xl rounded-lg">
                    {/* Trophy icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M7 4V2h10v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 6h14v2a4 4 0 01-4 4H9a4 4 0 01-4-4V6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14v4a2 2 0 002 2h0a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div className="flex flex-col justify-center text-left">
                    <h4 className="font-semibold text-lg md:text-xl text-slate-900 tracking-tight mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Diverse Range of Luxury Vehicles</h4>
                    <p className="text-sm md:text-base text-slate-600/90 leading-relaxed whitespace-pre-line" style={{fontFamily: 'Inter, sans-serif'}}>
                      Our fleet includes an array of high-performance, comfortable, and elegant cars
tailored to different preferences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left">
                <div className="flex items-center gap-5 w-full">
                  <span className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-400 via-teal-400 to-blue-400 text-white shadow-xl rounded-lg">
                    {/* Speed icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div className="flex flex-col justify-center text-left">
                    <h4 className="font-semibold text-lg md:text-xl text-slate-900 tracking-tight mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Reliable & Fast Service</h4>
                    <p className="text-sm md:text-base text-slate-600/90 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>Experience seamless booking and prompt delivery for a truly hassle-free journey.</p>
                  </div>
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
            <div className="flex flex-col gap-8 md:gap-12 items-start md:pl-40 flex-1">
              <div className="flex items-center gap-4 text-left">
                <div className="flex items-center gap-5 w-full">
                  <span className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 text-white shadow-xl rounded-lg">
                    {/* Tag icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M20 10v6a2 2 0 01-2 2h-6l-8-8 8-8h6a2 2 0 012 2v6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 7h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div className="flex flex-col justify-center text-left">
                    <h4 className="font-semibold text-lg md:text-xl text-slate-900 tracking-tight mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Flexible Rental Plans</h4>
                    <p className="text-sm md:text-base text-slate-600/90 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>Daily, weekly, or monthly—choose a plan that fits your lifestyle, with easy payment options.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left">
                <div className="flex items-center gap-5 w-full">
                  <span className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-400 via-indigo-400 to-blue-400 text-white shadow-xl rounded-lg">
                    {/* Key icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M21 13l-6.5-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="15" r="3" stroke="currentColor" strokeWidth="2"/></svg>
                  </span>
                  <div className="flex flex-col justify-center text-left">
                    <h4 className="font-semibold text-lg md:text-xl text-slate-900 tracking-tight mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Commitment to Excellence</h4>
                    <p className="text-sm md:text-base text-slate-600/90 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>Expect top-tier service and pristine vehicles—your luxury experience is our promise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
