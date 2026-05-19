export default function ContactHeader() {
  return (
    <section className="w-full bg-white pt-28 pb-12 md:pt-32 md:pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            We will contact you in a minute
          </h1>
          <p
            className="mx-auto max-w-2xl md:mx-0 text-base md:text-lg text-slate-600/90 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Share your phone number with us so we can give you a call back.
          </p>
        </div>
      </div>
    </section>
  );
}
