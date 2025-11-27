"use client";

import Image from 'next/image';
import Link from 'next/link';

const specMeta = {
  price: { name: 'Price (AED/day)', higherIsBetter: false, icon: '💰' },
  horsepower: { name: 'Horsepower', higherIsBetter: true, icon: '⚡' },
  acceleration: { name: '0-100km/h (s)', higherIsBetter: false, icon: '🚀' },
  seats: { name: 'Seats', higherIsBetter: true, icon: '👥' },
  engine: { name: 'Engine', higherIsBetter: false, icon: '⚙️' },
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
      <div className="hidden lg:block">
        <div className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 rounded-3xl shadow-2xl border border-white/10 overflow-hidden backdrop-blur-xl">
          <div className="overflow-x-auto custom-scrollbar">
            <div className="min-w-[800px]">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/10">
                    <th className="p-6 text-left sticky left-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 backdrop-blur-xl z-30 w-48 border-r border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <span className="font-bold text-xl text-white">Specifications</span>
                      </div>
                    </th>
                    {cars.map((car, index) => (
                      <th key={car.id} className="p-6 text-center min-w-[200px] border-r border-white/5 last:border-r-0">
                        <Link href={`/cars/${car.id}`} className="group block">
                          <div className="relative">
                            <div className="w-40 h-28 mx-auto mb-4 relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-2 group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
                              <div className="relative w-full h-full rounded-lg overflow-hidden">
                                <Image src={car.image} alt={car.name} layout="fill" objectFit="cover" className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                                {car.name}
                              </h3>
                              <div className="flex items-center justify-center space-x-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                  Car {index + 1}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {Object.entries(specMeta).map(([key, meta], rowIndex) => (
                    <tr key={key} className={`hover:bg-white/5 transition-all duration-200 ${rowIndex % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                      <td className="p-6 sticky left-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 backdrop-blur-xl z-20 border-r border-white/10">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center text-lg">
                            {meta.icon}
                          </div>
                          <div>
                            <span className="font-semibold text-white">{meta.name}</span>
                            {meta.higherIsBetter !== undefined && (
                              <span className="block text-xs text-blue-400 mt-1">
                                {meta.higherIsBetter ? 'Higher is better' : 'Lower is better'}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      {cars.map((car) => {
                        const value = car.specs[key] || car[key];
                        const isBest = value === bestValues[key];
                        return (
                          <td key={car.id} className="p-6 text-center border-r border-white/5 last:border-r-0">
                            <div className="relative inline-block">
                              {isBest && (
                                <div className="absolute -top-2 -right-2 z-10">
                                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  </div>
                                </div>
                              )}
                              <div className={`px-4 py-2 rounded-xl font-mono font-semibold text-lg transition-all duration-300 ${
                                isBest 
                                  ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 shadow-lg shadow-green-500/20' 
                                  : 'bg-white/5 text-white/80 border border-white/10'
                              }`}>
                                {value}
                                <span className="text-sm ml-1 opacity-70">
                                  {key === 'acceleration' ? 's' : key === 'horsepower' ? 'hp' : ''}
                                </span>
                              </div>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr className="bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                    <td className="p-6 sticky left-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 backdrop-blur-xl z-20 border-r border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="font-bold text-white">Action</span>
                      </div>
                    </td>
                    {cars.map(car => (
                      <td key={car.id} className="p-6 text-center border-r border-white/5 last:border-r-0">
                        <div className="flex flex-col space-y-3">
                          <Link 
                            href={`/cars/${car.id}`} 
                            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Details
                          </Link>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="block lg:hidden space-y-6">
        {cars.map((car, index) => (
          <div key={car.id} className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 rounded-3xl shadow-2xl border border-white/10 overflow-hidden backdrop-blur-xl">
            <div className="p-6">
              <Link href={`/cars/${car.id}`} className="block mb-6">
                <div className="relative">
                  <div className="w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-2 shadow-lg">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image src={car.image} alt={car.name} layout="fill" objectFit="cover" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm">
                      Car {index + 1}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mt-4 text-center text-white hover:text-blue-400 transition-colors duration-300">
                  {car.name}
                </h3>
              </Link>
              
              <div className="space-y-3">
                {Object.entries(specMeta).map(([key, meta]) => {
                  const value = car.specs[key] || car[key];
                  const isBest = value === bestValues[key];
                  return (
                    <div key={key} className="flex justify-between items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/5">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{meta.icon}</span>
                        <div>
                          <span className="text-white/80 font-medium text-sm">{meta.name}</span>
                          {meta.higherIsBetter !== undefined && (
                            <span className="block text-xs text-blue-400">
                              {meta.higherIsBetter ? 'Higher is better' : 'Lower is better'}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="relative">
                        {isBest && (
                          <div className="absolute -top-2 -right-2 z-10">
                            <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          </div>
                        )}
                        <div className={`px-3 py-1.5 rounded-lg font-mono font-semibold text-base ${
                          isBest 
                            ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-white/10 text-white border border-white/20'
                        }`}>
                          {value}
                          <span className="text-sm ml-1 opacity-70">
                            {key === 'acceleration' ? 's' : key === 'horsepower' ? 'hp' : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6">
                <Link 
                  href={`/cars/${car.id}`} 
                  className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #2563eb, #7c3aed);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
