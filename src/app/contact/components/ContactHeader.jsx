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
          <p
            className="max-w-2xl text-base md:text-lg text-slate-600/90 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Fill out the form below or schedule a meeting with us at your convenience.
          </p>
        </div>
      </div>
    </section>
  );
}
