const locations = [
  {
    title: "Dubai Marina",
    subtitle: "Pickup & Drop-off Available",
    icon: (
      <svg className="h-6 w-6 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Dubai Airport",
    subtitle: "VIP Service Available",
    icon: (
      <svg className="h-6 w-6 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function OfficeLocations() {
  return (
    <section className="w-full bg-[#F8FAFC] pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div key={location.title} className="bg-white p-8 rounded-xl shadow-md ring-1 ring-slate-100 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0057FF]/10 border border-[#0057FF]/20">
                {location.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800" style={{ fontFamily: "Poppins, sans-serif" }}>{location.title}</h3>
                <p className="text-sm text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>{location.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
