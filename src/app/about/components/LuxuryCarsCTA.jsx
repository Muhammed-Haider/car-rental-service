"use client";
import { useRouter } from 'next/navigation';

export default function LuxuryCarsCTA() {
  const router = useRouter();

  const handleViewVehicles = () => {
    router.push('/#car-listings');
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#000000] to-[#0D0D0D] text-white pt-8 md:pt-12 pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
              80+ Luxury Cars Available
            </h2>
            <button
              onClick={handleViewVehicles}
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] border border-[#6B4FE8] text-white font-semibold text-sm rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              View all vehicles
            </button>
          </div>
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src="/car_black.png" 
              alt="Luxury Car Fleet" 
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
