"use client";

export default function AboutUs() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] py-24 text-[#0A1A2F]">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#E6F0FF] blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#EAF6FF] blur-3xl opacity-60"></div>
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start md:items-center">

          {/* LEFT SIDE -------------------------------------------------------- */}
          <div>
            {/* Main heading */}
            <h1
              className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-4 text-slate-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Drive Luxury Live
              <br />
              Freedom
            </h1>
            {/* decorative underline + car icon under main heading */}
            <div className="relative inline-block mt-1 mb-7">
              <div className="h-[2px] w-44 md:w-56 bg-gradient-to-r from-[#A3BFFA] via-[#D0E3FF] to-transparent rounded-full"></div>
              <span className="absolute -right-1 -top-2 text-[#0057FF]">

                <svg width="32" height="14" viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <g transform="translate(64,0) scale(-1,1)">
                    <path d="M10 18c-2 0-3.5-1.5-3.5-3.5S8 11 10 11h20c4 0 8-6 12-6h6c3 0 6 3 6 6v7c0 1.1-.9 2-2 2H10z" fill="currentColor" opacity="0.9" />
                    <circle cx="18" cy="20" r="3" fill="#0F172A" />
                    <circle cx="46" cy="20" r="3" fill="#0F172A" />
                  </g>
                </svg>
              </span>
            </div>

          </div>

          {/* RIGHT SIDE -------------------------------------------------------- */}
          <div className="w-full">
            {/* Metrics moved to right column */}
            <div className="mt-10 md:mt-0 md:pl-6">
              {/* Paragraphs (moved above stats) */}
              <div className="max-w-xl group">
                <p
                  className="text-[18px] md:text-[20px] leading-[1.9] text-slate-700/95 tracking-[0.01em]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span>Experience premium car rentals crafted for comfort, performance, and style. Whether it&apos;s a quick business trip </span>
                  <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent transition-colors duration-500 group-hover:from-slate-700 group-hover:to-slate-500">or a long weekend getaway, our fleet is designed to elevate your journey.</span>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200"></div>

              <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
                <div className="rounded-xl ring-1 ring-slate-200/70 bg-white/70 backdrop-blur-sm p-3 shadow-[0_6px_18px_rgba(2,6,23,0.06)] transition-transform duration-200 hover:-translate-y-0.5 flex flex-col items-center justify-center text-center min-h-[78px] w-[calc(50%-0.375rem)] sm:w-auto">
                  <div className="text-xl md:text-2xl font-extrabold text-slate-900 leading-none">50+</div>
                  <div className="mt-1 text-[11px] text-slate-500 leading-tight break-words">Luxury Cars</div>
                </div>
                <div className="rounded-xl ring-1 ring-slate-200/70 bg-white/70 backdrop-blur-sm p-3 shadow-[0_6px_18px_rgba(2,6,23,0.06)] transition-transform duration-200 hover:-translate-y-0.5 flex flex-col items-center justify-center text-center min-h-[78px] w-[calc(50%-0.375rem)] sm:w-auto">
                  <div className="text-xl md:text-2xl font-extrabold text-slate-900 leading-none">24/7</div>
                  <div className="mt-1 text-[11px] text-slate-500 leading-tight break-words">Road Assistance</div>
                </div>
                <div className="rounded-xl ring-1 ring-slate-200/70 bg-white/70 backdrop-blur-sm p-3 shadow-[0_6px_18px_rgba(2,6,23,0.06)] transition-transform duration-200 hover:-translate-y-0.5 flex flex-col items-center justify-center text-center min-h-[78px] w-[calc(50%-0.375rem)] sm:w-auto">
                  <div className="text-xl md:text-2xl font-extrabold text-slate-900 leading-none">100%</div>
                  <div className="mt-1 text-[11px] text-slate-500 leading-tight break-words">Service Guarantee</div>
                </div>
                <div className="rounded-xl ring-1 ring-slate-200/70 bg-white/70 backdrop-blur-sm p-3 shadow-[0_6px_18px_rgba(2,6,23,0.06)] transition-transform duration-200 hover:-translate-y-0.5 flex flex-col items-center justify-center text-center min-h-[78px] w-[calc(50%-0.375rem)] sm:w-auto">
                  <div className="text-xl md:text-2xl font-extrabold text-slate-900 leading-none">60+</div>
                  <div className="mt-1 text-[11px] text-slate-500 leading-tight break-words">Pickup Locations</div>
                </div>
                <div className="rounded-xl ring-1 ring-slate-200/70 bg-white/70 backdrop-blur-sm p-3 shadow-[0_6px_18px_rgba(2,6,23,0.06)] transition-transform duration-200 hover:-translate-y-0.5 flex flex-col items-center justify-center text-center min-h-[78px] w-[calc(50%-0.375rem)] sm:w-auto">
                  <div className="text-xl md:text-2xl font-extrabold text-slate-900 leading-none">800+</div>
                  <div className="mt-1 text-[11px] text-slate-500 leading-tight break-words">Satisfied Clients</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}