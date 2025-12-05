export default function ContactHeader() {
  return (
    <section className="w-full bg-white pt-28 pb-12 md:pt-32 md:pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
            CONTACT US
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Get in touch with us
          </h1>
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
      </div>
    </section>
  );
}
