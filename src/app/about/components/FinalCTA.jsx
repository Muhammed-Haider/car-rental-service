"use client";
import { useRouter } from 'next/navigation';

export default function FinalCTA() {
  const router = useRouter();

  const handleViewCars = () => {
    router.push('/#car-listings');
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Ready to Experience Luxury?
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600/90 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Book your dream car today or contact our team for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0057FF] border border-[#0057FF] text-white font-semibold text-sm rounded-xl hover:bg-white hover:text-[#0057FF] transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Contact Us
            </a>
            <button
              onClick={handleViewCars}
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl hover:border-[#0057FF] hover:text-[#0057FF] transition-all duration-300"
            >
              View Cars
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
