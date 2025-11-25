"use client";

import Image from 'next/image';
import Link from 'next/link';

const specMeta = {
  price: { name: 'Price (AED/day)', higherIsBetter: false },
  horsepower: { name: 'Horsepower', higherIsBetter: true },
  acceleration: { name: '0-100km/h (s)', higherIsBetter: false },
  seats: { name: 'Seats', higherIsBetter: true },
  engine: { name: 'Engine' },
};

export default function CompareTable({ cars }) {
  const bestValues = Object.keys(specMeta).reduce((acc, key) => {
    if (specMeta[key].higherIsBetter !== undefined) {
      const values = cars.map(car => car.specs[key] || car[key]);
      acc[key] = specMeta[key].higherIsBetter ? Math.max(...values) : Math.min(...values);
    }
    return acc;
  }, {});

  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden lg:block w-full bg-transparent rounded-2xl p-0">
        <table className="w-full table-auto text-left">
          <thead className="bg-white/5">
            <tr>
              <th className="p-4 border-b border-white/10 sticky left-0 bg-[#0A1A2F]/95 z-20 w-40">
                <span className="font-bold text-lg text-white">Model</span>
              </th>
              {cars.map((car) => (
                <th key={car.id} className="p-4 border-b border-white/10 text-center">
                  <Link href={`/cars/${car.id}`} className="group hover:text-white transition-colors">
                    <div className="w-32 h-20 mx-auto mb-2 relative group-hover:scale-105 transition-transform">
                      <Image src={car.image} alt={car.name} layout="fill" objectFit="contain" />
                    </div>
                    <span className="font-bold text-sm group-hover:text-[#0057FF] transition-colors block min-h-[2.5rem]">{car.name}</span>
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(specMeta).map(([key, meta]) => (
              <tr key={key} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white/70 sticky left-0 bg-[#0A1A2F]/95 z-10">
                  {meta.name}
                </td>
                {cars.map((car) => {
                  const value = car.specs[key] || car[key];
                  const isBest = value === bestValues[key];
                  return (
                    <td key={car.id} className="p-4 text-center font-mono text-base relative">
                      <div className={`relative inline-block px-3 py-1 rounded-md ${isBest ? 'bg-[#00E0B8]/10' : ''}`}>
                        <span className={`${isBest ? 'font-bold text-[#00E0B8]' : 'text-white/80'}`}>
                          {value}{key === 'acceleration' ? 's' : ''}{key === 'horsepower' ? 'hp' : ''}
                        </span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr className="bg-white/10">
              <td className="p-4 font-semibold text-white sticky left-0 bg-[#0A1A2F]/95 z-10">Rent Now</td>
              {cars.map(car => (
                <td key={car.id} className="p-4 text-center">
                  <Link href={`/cars/${car.id}`} className="inline-block px-6 py-2.5 text-sm font-bold bg-[#0057FF] rounded-lg hover:bg-white hover:text-[#0057FF] transition-colors">
                    Details
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block lg:hidden space-y-6">
        {cars.map(car => (
          <div key={car.id} className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <Link href={`/cars/${car.id}`} className="block mb-4">
              <div className="w-full h-48 relative rounded-lg overflow-hidden">
                <Image src={car.image} alt={car.name} layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-2xl font-bold mt-4 text-center text-white hover:text-[#0057FF] transition-colors">{car.name}</h3>
            </Link>
            <div className="space-y-2">
              {Object.entries(specMeta).map(([key, meta]) => {
                const value = car.specs[key] || car[key];
                const isBest = value === bestValues[key];
                return (
                  <div key={key} className="flex justify-between items-center text-sm p-2 rounded-md hover:bg-white/5">
                    <span className="text-white/60 font-medium">{meta.name}</span>
                    <div className={`relative px-2 py-1 rounded-md ${isBest ? 'bg-[#00E0B8]/10' : ''}`}>
                      <span className={`font-mono font-semibold ${isBest ? 'text-[#00E0B8]' : 'text-white'}`}>
                        {value}{key === 'acceleration' ? 's' : ''}{key === 'horsepower' ? 'hp' : ''}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4">
              <Link href={`/cars/${car.id}`} className="block w-full text-center px-6 py-3 text-base font-bold bg-[#0057FF] rounded-lg hover:bg-white hover:text-[#0057FF] transition-colors">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
