export default function SectionHeading({ children }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
        {children}
      </h2>
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
  );
}
