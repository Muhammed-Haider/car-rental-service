const features = [
  {
    num: "01",
    title: "Luxury Fleet",
    text: "An extensive selection of high-end vehicles.",
    icon: (
      <svg className="h-8 w-8 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.364l7.071 7.072-7.07 7.07-7.072-7.07 7.07-7.07z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "VIP Service",
    text: "Personalized services for a seamless experience.",
    icon: (
      <svg className="h-8 w-8 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.87 14.13a4 4 0 105.66 5.66 4 4 0 00-5.66-5.66zM18.87 4.13a4 4 0 10-5.66 5.66 4 4 0 005.66-5.66z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Easy Booking",
    text: "A streamlined process for quick reservations.",
    icon: (
      <svg className="h-8 w-8 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Flexible Options",
    text: "Rentals by the day, week, or month.",
    icon: (
      <svg className="h-8 w-8 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "24/7 Support",
    text: "Round-the-clock assistance for any needs.",
    icon: (
      <svg className="h-8 w-8 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m12.728 0L12 12l-6.364-6.364" />
      </svg>
    ),
  },
];

export default function AboutHero() {
  return (
    <section className="w-full bg-white text-slate-900 pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            About Us
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-600/90" style={{ fontFamily: "Inter, sans-serif" }}>
            We are a premier luxury car rental service dedicated to providing an unparalleled driving experience. Our fleet features the latest models from the world's most prestigious brands, ensuring that you travel in style and comfort.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature) => (
            <div key={feature.num} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center flex flex-col items-center">
              <div className="mb-4">{feature.icon}</div>
              <p className="text-sm font-semibold text-slate-500 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{`<${feature.num}>`}</p>
              <h3 className="text-lg font-bold text-slate-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{feature.title}</h3>
              <p className="text-sm text-slate-600/80" style={{ fontFamily: "Inter, sans-serif" }}>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
