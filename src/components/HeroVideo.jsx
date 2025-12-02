import Link from 'next/link';
import HeroSearchBar from './HeroSearchBar';

export default function HeroVideo() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: 'center' }}
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F]/30 to-[#0A1A2F]/50" />
        <div className="relative z-[50] mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-semibold text-white sm:text-5xl md:text-6xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Drive Your Dream Car Today
          </h1>
          <HeroSearchBar />
          <p className="mt-4 mb-8 max-w-2xl text-base text-white/90 sm:text-lg sm:mt-0">
            We offer curated luxury cars, quick booking, and seamless delivery for an unforgettable ride.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-3.5 bg-[#0057FF] border border-[#0057FF] text-white font-semibold text-base md:text-lg rounded-xl hover:bg-white hover:text-[#0057FF] transition-all duration-300 shadow-lg hover:shadow-blue-500/25 mb-8"
          >
            Book Your Ride
          </Link>
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
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-black/20 ring-1 ring-white/10 transition-colors transition-shadow duration-300 group-hover:bg-[#0057FF]/20 group-hover:ring-2 group-hover:ring-white/25 group-hover:shadow-lg group-focus:bg-[#0057FF]/20">
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
      <div className="relative z-30 mt-0 sm:mt-0 w-full bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-4 md:p-5 shadow-xl ring-1 ring-black/5">
            <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:items-center md:justify-center md:gap-6" role="list">
              {[
                { label: 'SUV', src: '/suv.png' },
                { label: 'Sports', src: '/sports.png' },
                { label: 'Luxury', src: '/luxury.png' },
                { label: 'Convertible', src: '/convertible-1.png' },
              ].map((item) => (
                <div
                  key={item.label}
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
                  <span className="text-sm font-medium text-[#0A1A2F] group-hover:text-[#0057FF] md:text-base">
                    {item.label}
                  </span>
                </div>
              ))}
              <div
                role="listitem"
                className="col-span-2 flex items-center justify-center gap-2 rounded-lg p-3 transition-transform duration-200 hover:scale-105 focus:scale-105 focus:outline-none md:col-auto md:w-auto md:px-4 md:py-2"
                tabIndex={0}
                aria-label="All categories"
              >
                <span className="font-semibold text-orange-600 text-sm md:text-base">All</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-orange-600">
                  <path d="M7 12h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
