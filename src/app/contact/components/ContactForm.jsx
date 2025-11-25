import ContactInfo from "./ContactInfo";
import BusinessHours from "./BusinessHours";

export default function ContactForm() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F8FAFC] to-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side: Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg ring-1 ring-slate-100">
            <h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              We will contact you in a minute
            </h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0057FF]/50 focus:border-[#0057FF]/50 text-sm transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0057FF]/50 focus:border-[#0057FF]/50 text-sm transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0057FF]/50 focus:border-[#0057FF]/50 text-sm transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0057FF]/50 focus:border-[#0057FF]/50 text-sm transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3.5 bg-[#0057FF] border border-[#0057FF] text-white font-semibold text-sm rounded-xl hover:bg-white hover:text-[#0057FF] transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Info & Hours */}
          <div className="space-y-8">
            <ContactInfo />
            <BusinessHours />
          </div>
        </div>
      </div>
    </section>
  );
}
