"use client";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F8FAFC] text-[#0A1A2F] py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
        {/* Top label */}
        <h2
          className="text-xl md:text-2xl font-semibold tracking-tight text-slate-700"
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
          a Hassle-Free Experience
        </h3>

        {/* Supporting paragraph */}
        <p
          className="mx-auto max-w-3xl text-base md:text-lg text-slate-600/90 leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Choosing us means experiencing unparalleled luxury with reliable service, ensuring an exceptional driving experience in every detail.
        </p>
      </div>
    </section>
  );
}
