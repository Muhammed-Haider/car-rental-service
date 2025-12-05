import { cars } from '../../../lib/cardata';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CarDetailPage({ params }) {
  const resolvedParams = use(params);
  const car = cars.find((c) => c.id.toString() === resolvedParams.id);

  if (!car) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0A1A2F] text-white">
        <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
        <p className="text-lg mb-8">Sorry, we couldn't find the car you're looking for.</p>
        <Link href="/" className="px-6 py-3 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-purple-500/25">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#0D0D0D] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Back to listings link */}
        <div className="mb-8">
          <Link href="/#car-listings" className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Listings
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left & Center Column: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <div className="relative w-full pt-[62.5%]"> {/* 16:10 Aspect Ratio */}
                <Image
                  src={car.image}
                  alt={car.name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Title & Specs (for mobile) */}
            <div className="lg:hidden">
              <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{car.name}</h1>
              <p className="text-lg text-white/60">{car.specs.seats} seats, {car.specs.horsepower}hp, {car.specs.engine}</p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-semibold text-white/80 mb-4 border-b border-white/10 pb-3" style={{ fontFamily: 'var(--font-heading)' }}>Description</h2>
              <p className="text-white/70 leading-relaxed">
                Experience the thrill of driving the {car.name}, a masterpiece of engineering and design. With its powerful engine and luxurious interior, this car is perfect for making a statement on the roads of Dubai. Whether for a business trip or a weekend getaway, the {car.name} delivers an unforgettable driving experience.
              </p>
            </div>
          </div>

          {/* Right Column: Sticky Rental Box */}
          <div className="lg:sticky top-24 space-y-8">
            {/* Title & Specs (for desktop) */}
            <div className="hidden lg:block">
              <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{car.name}</h1>
              <p className="text-lg text-white/60">{car.specs.seats} seats, {car.specs.horsepower}hp, {car.specs.engine}</p>
            </div>

            {/* Pricing & Rent Box */}
            <div className="bg-white/5 rounded-2xl p-6 space-y-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white/80" style={{ fontFamily: 'var(--font-heading)' }}>Pricing</h2>
              <div className="flex justify-between items-baseline">
                <span className="text-base text-white/70">Per Day</span>
                <span className="text-2xl font-bold text-white">{car.price.toLocaleString()} AED</span>
              </div>
              <div className="flex justify-between items-baseline border-t border-white/10 pt-4">
                <span className="text-base text-white/70">Per Week</span>
                <span className="text-2xl font-bold text-white">{car.durationPrice.toLocaleString()} AED</span>
              </div>
              <div className="pt-4">
                <button className="w-full py-4 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] rounded-xl text-lg font-bold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
