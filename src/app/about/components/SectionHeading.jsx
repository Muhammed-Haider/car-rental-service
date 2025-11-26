export default function SectionHeading({ children, highlight }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
        {children} <span className="text-[#0057FF]">{highlight}</span>
      </h2>
      <div className="flex justify-center items-center">
        <div className="relative w-24 h-px bg-slate-300">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white flex items-center justify-center">
            <svg className="h-5 w-5 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
