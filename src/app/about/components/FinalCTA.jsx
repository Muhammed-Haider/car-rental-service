"use client";
import { useRouter } from 'next/navigation';

export default function FinalCTA() {
  const router = useRouter();

  const handleViewCars = () => {
    router.push('/#car-listings');
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#000000] to-[#0D0D0D] text-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Ready to Experience Luxury?
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/80 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Book your dream car today or contact our team for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] border border-[#6B4FE8] text-white font-semibold text-sm rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Contact Us
            </a>
            <button
              onClick={handleViewCars}
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl hover:border-[#B844E8] hover:text-[#B844E8] transition-all duration-300"
            >
              View Cars
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
