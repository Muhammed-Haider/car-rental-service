"use client";

const brands = [
  { id: 1, name: 'Mercedes', logo: '/mercedes.png' },
  { id: 2, name: 'BMW', logo: '/bmw.png' },
  { id: 3, name: 'Audi', logo: '/audi.png' },
  { id: 4, name: 'Porsche', logo: '/porsche.png' },
  { id: 5, name: 'Ferrari', logo: '/ferrari.png' },
  { id: 6, name: 'Lamborghini', logo: '/lamborghini.png' },
  { id: 7, name: 'Bentley', logo: '/bentley.png' },
  { id: 8, name: 'Rolls Royce', logo: '/rolls-royce.png' },
];

export default function GallerySection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
            Prestigious Brands in Our Fleet
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            We offer an exclusive collection of top-tier luxury manufacturers
          </p>
          <div className="relative inline-block">
            <div className="h-[2px] w-36 md:w-44 bg-gradient-to-r from-[#A3BFFA] via-[#D0E3FF] to-transparent rounded-full"></div>
            <span className="absolute -right-3 -top-3 text-[#0057FF]">
              <svg width="32" height="14" viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g transform="translate(64,0) scale(-1,1)">
                  <path d="M10 18c-2 0-3.5-1.5-3.5-3.5S8 11 10 11h20c4 0 8-6 12-6h6c3 0 6 3 6 6v7c0 1.1-.9 2-2 2H10z" fill="currentColor" opacity="0.95" />
                  <circle cx="18" cy="20" r="3" fill="#0F172A" />
                  <circle cx="46" cy="20" r="3" fill="#0F172A" />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              tabIndex={0}
              role="button"
              aria-label={`${brand.name} brand logo`}
              className="group cursor-pointer rounded-xl bg-white/5 p-4 ring-1 ring-black/5 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0057FF] focus:ring-offset-2"
            >
              <div className="flex h-24 flex-col items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-black/5 p-2 transition-colors duration-300 group-hover:bg-[#0057FF]/10">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
                    loading="eager"
                  />
                </div>
                <span className="mt-3 block text-sm font-medium text-gray-900 group-hover:text-[#0057FF]">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
