"use client";
import { useRouter } from 'next/navigation';

export default function LuxuryCarsCTA() {
  const router = useRouter();

  const handleViewVehicles = () => {
    router.push('/#car-listings');
  };

  return (
    <section className="w-full bg-white pt-8 md:pt-12 pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
              80+ Luxury Cars Available
            </h2>
            <button
              onClick={handleViewVehicles}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0057FF] border border-[#0057FF] text-white font-semibold text-sm rounded-xl hover:bg-white hover:text-[#0057FF] transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              View all vehicles
            </button>
          </div>
          <div>
            <img src="aboutuscar.png" alt="Luxury Car Fleet" className="w-full h-auto rounded-xl shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
