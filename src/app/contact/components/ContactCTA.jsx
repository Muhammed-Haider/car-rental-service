export default function ContactCTA() {
  return (
    <section className="w-full bg-[#F8FAFC] py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl shadow-md ring-1 ring-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl font-bold text-slate-800 text-center md:text-left" style={{ fontFamily: "Poppins, sans-serif" }}>
            Need instant help?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="tel:+971554079239"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] border border-[#6B4FE8] text-white font-semibold text-sm rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Call Us
            </a>
            <a
              href="https://wa.me/971554079239?text=Welcome%20to%20WTB%20DXB.%0A%0AThank%20you%20for%20contacting%20us.%20Please%20share%20your%20preferred%20car%20and%20rental%20dates%20so%20we%20can%20assist%20you%20right%20away.%0A%0AOur%20team%20is%20ready%20to%20serve%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl hover:border-[#B844E8] hover:text-[#B844E8] transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
