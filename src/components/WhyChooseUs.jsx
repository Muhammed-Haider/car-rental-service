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
          <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-start gap-6">

            {/* Left feature column (two stacked) */}
            <div className="flex flex-col gap-6 md:gap-8 md:pr-4 lg:pr-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800/90 text-white flex items-center justify-center shadow">
                  {/* trophy icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7 4V2h10v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 6h14v2a4 4 0 01-4 4H9a4 4 0 01-4-4V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 14v4a2 2 0 002 2h0a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Diverse Range of Luxury Vehicles</h4>
                  <p className="mt-1 text-sm text-slate-600">Our fleet includes an array of high-performance, comfortable, and elegant cars tailored to different preferences.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800/90 text-white flex items-center justify-center shadow">
                  {/* road icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 11h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 15h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Reliable & Fast Service</h4>
                  <p className="mt-1 text-sm text-slate-600">Enjoy a seamless rental experience, from an easy booking process to prompt delivery at your preferred location.</p>
                </div>
              </div>
            </div>

            {/* Right feature column (two stacked) */}
            <div className="flex flex-col gap-6 md:gap-8 md:pl-4 lg:pl-8">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">Flexible Rental Plans</h4>
                    <p className="mt-1 text-sm text-slate-600">We offer daily, weekly, and monthly rental options with convenient payment solutions to fit your needs.</p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800/90 text-white flex items-center justify-center shadow">
                    {/* tag icon (moved to outer side) */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M20 10v6a2 2 0 01-2 2h-6l-8-8 8-8h6a2 2 0 012 2v6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 7h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">Commitment to Excellence</h4>
                  <p className="mt-1 text-sm text-slate-600">We prioritize top-tier service and exceptional vehicle quality, ensuring a smooth and luxurious driving experience.</p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800/90 text-white flex items-center justify-center shadow">
                  {/* key icon (moved to outer side) */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M21 13l-6.5-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 11a6 6 0 1012 0 6 6 0 00-12 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
