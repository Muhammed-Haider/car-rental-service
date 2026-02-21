import { cars } from '@/lib/cardata';
import CompareTable from '@/components/CompareTable';
import Link from 'next/link';

export default function ComparePage() {
  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#0D0D0D] text-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Compare Our Fleet
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Analyze the specs and find the perfect vehicle for your next adventure.
          </p>
        </div>

        <CompareTable cars={cars} />

        <div className="mt-12 text-center">
          <Link href="/#car-listings" className="px-8 py-3 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-purple-500/25">
            Back to Listings
          </Link>
        </div>
      </div>
    </div>
  );
}
