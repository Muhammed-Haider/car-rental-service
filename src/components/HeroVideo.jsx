import Link from 'next/link';
import HeroSearchBar from './HeroSearchBar';

export default function HeroVideo() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Mobile: hero1.png, Desktop: heroimage.png */}
        <img
          src="/hero1.png"
          alt="Hero Background Mobile"
          className="absolute inset-0 w-full h-full object-cover object-center block sm:hidden"
          style={{ objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.9) contrast(1.05)' }}
        />
        <img
          src="/heroimage.png"
          alt="Hero Background Desktop"
          className="absolute inset-0 w-full h-full object-cover object-center hidden sm:block"
          style={{ objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.9) contrast(1.05)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/30 to-[#000000]/50" />
        <div className="relative z-[50] mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <span
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-2 font-medium"
              style={{ fontFamily: 'Montserrat, Poppins, sans-serif', letterSpacing: '-0.01em' }}
            >
              Welcome to Wtb Dxb
            </span>
            <h1
              className="mb-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl"
              style={{ fontFamily: 'Montserrat, Poppins, sans-serif', letterSpacing: '-0.02em' }}
            >
              Luxury Car Rental Dubai
            </h1>
          </div>
          <HeroSearchBar />
          {/* Info Bar Below Search Bar */}
          <div className="flex flex-col items-center w-full mt-4">
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 text-white text-base sm:text-lg font-semibold">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                4.9 Google Rating
              </span>
              <span className="hidden sm:inline">•</span>
              <span>No Deposit</span>
              <span className="hidden sm:inline">•</span>
              <span>24/7 Available</span>
            </div>
          </div>
          <p className="mt-4 mb-8 max-w-2xl text-base text-white/90 sm:text-lg sm:mt-0">
            We offer curated luxury cars, quick booking, and seamless delivery for an unforgettable ride.
          </p>
          {/* Book Your Ride button removed as requested */}
        </div>

        {/* Brand logos strip pinned to hero bottom; does not affect centered content */}
        <div className="pointer-events-auto absolute inset-x-0 bottom-0 z-20 hidden sm:block">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 items-center gap-3 sm:gap-4 rounded-none bg-white/10 p-3 sm:p-4 backdrop-blur-md ring-1 ring-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
              {[
                { src: '/lamborghini.png', alt: 'Lamborghini' },
                { src: '/ferrari.png', alt: 'Ferrari' },
                { src: '/porsche.png', alt: 'Porsche' },
                { src: '/mercedes.png', alt: 'Mercedes' },
                { src: '/rolls-royce.png', alt: 'Rolls Royce' },
                { src: '/bentley.png', alt: 'Bentley' },
                { src: '/bmw.png', alt: 'BMW' },
                { src: '/nissan.png', alt: 'Nissan' },
                { src: '/audi.png', alt: 'Audi' },
              ].map((b) => (
                <div
                  key={b.alt}
                  tabIndex={0}
                  role="button"
                  aria-label={`${b.alt} brand logo`}
                  className="group cursor-pointer rounded-xl bg-white/5 px-2 py-2 ring-1 ring-white/10 transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1 focus:scale-105 focus:-translate-y-1"
                >
                  <div className="flex h-16 sm:h-20 flex-col items-center justify-center text-center">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-black/20 ring-1 ring-white/10 transition-colors transition-shadow duration-300 group-hover:bg-[#B844E8]/20 group-hover:ring-2 group-hover:ring-white/25 group-hover:shadow-lg group-focus:bg-[#B844E8]/20">
                      <img
                        src={b.src}
                        alt={b.alt}
                        className="h-6 w-6 sm:h-8 sm:w-8 object-contain transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
                        loading="eager"
                      />
                    </div>
                    <span className="mt-2 block truncate text-xs font-medium text-white/90 sm:text-sm group-hover:text-white/100">{b.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories bar under the brand strip */}
      <div className="relative z-30 mt-0 sm:mt-0 w-full bg-gradient-to-br from-[#1A1A1A] to-[#2B2B2B]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#1A1A1A]/80 p-4 md:p-5 shadow-xl ring-1 ring-white/10 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:items-center md:justify-center md:gap-6" role="list">
              {[
                { label: 'SUV', src: '/suv.png' },
                { label: 'Sports', src: '/sports.png' },
                { label: 'Luxury', src: '/luxury.png' },
                { label: 'Convertible', src: '/convertible-1.png' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={`/cars?type=${item.label}`} // Dynamically link to filter
                  role="listitem"
                  className="group flex flex-col items-center justify-center gap-2 rounded-lg p-3 transition-transform duration-200 hover:scale-105 focus:scale-105 focus:outline-none md:flex-row md:w-auto md:px-4 md:py-2"
                  tabIndex={0}
                  aria-label={`${item.label} category`}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110 md:h-12"
                    loading="eager"
                  />
                  <span className="text-sm font-medium text-white/90 group-hover:text-[#B844E8] md:text-base">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
