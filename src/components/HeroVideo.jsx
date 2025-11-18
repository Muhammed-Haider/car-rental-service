export default function HeroVideo() {
  return (
    <>
    <section className="relative min-h-svh w-full overflow-hidden">
      <img
        src="/hero.png"
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[#0A1A2F]/40" />
      <div className="relative z-10 mx-auto flex min-h-svh max-w-5xl flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-4xl font-semibold text-white sm:text-5xl md:text-6xl" style={{ fontFamily: 'var(--font-heading)' }}>
          Luxury Car Rental In Dubai
        </h1>
        <form role="search" action="#search" className="mb-6 w-full max-w-2xl">
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/70">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <input
              type="text"
              name="q"
              placeholder="Search luxury cars, models, or brands..."
              className="h-12 w-full rounded-full bg-white/90 pl-12 pr-36 text-sm text-[#0A1A2F] placeholder:text-[#0A1A2F]/60 shadow-lg ring-1 ring-white/20 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0057FF]"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 items-center justify-center rounded-full bg-[#0057FF] px-4 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#0048d1] focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              Search
            </button>
          </div>
        </form>
        <p className="mb-8 max-w-2xl text-base text-white/90 sm:text-lg">
          Your perfect ride - premium quality and affordable prices, ready to blend seamlessly with your lifestyle and make every occasion special.
        </p>
        <a
          href="#get-started"
          className="inline-flex items-center rounded-full bg-[#0057FF] px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-[#0048d1] focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0A1A2F]"
        >
          Get Started
        </a>
      </div>

      {/* Brand logos strip pinned to hero bottom; does not affect centered content */}
      <div className="pointer-events-auto absolute inset-x-0 bottom-0 z-20">
        <div className="w-full">
          <div className="grid grid-cols-9 items-center gap-4 rounded-none bg-white/10 p-4 backdrop-blur-md ring-1 ring-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
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
              <div key={b.alt} className="rounded-xl bg-white/5 px-3 py-3 ring-1 ring-white/10">
                <div className="flex h-20 flex-col items-center justify-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/20 ring-1 ring-white/10">
                    <img
                      src={b.src}
                      alt={b.alt}
                      className="h-8 w-8 object-contain"
                      loading="eager"
                    />
                  </div>
                  <span className="mt-2 block truncate text-xs font-medium text-white/90 sm:text-sm">{b.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Categories bar under the brand strip */}
    <div className="relative z-30 -mt-3 w-full">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5">
          <div className="flex items-center justify-between gap-2">
            {[
              { label: 'SUV', src: '/suv.png' },
              { label: 'Sports', src: '/sports.png' },
              { label: 'Luxury', src: '/luxury.png' },
              { label: 'Convertible', src: '/convertible-1.png' },
              { label: 'All', isAll: true },
            ].map((item, idx, arr) => (
              <div key={item.label} className="flex items-center gap-2">
                {/* Icon/Image */}
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.label}
                    className="h-8 w-auto object-contain"
                    loading="eager"
                  />
                ) : null}
                {/* Label */}
                <span className={`${item.isAll ? 'font-semibold text-orange-600' : 'text-[#0A1A2F]'} text-sm`}>{item.label}</span>
                {/* Arrow for All */}
                {item.isAll && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-orange-600">
                    <path d="M7 12h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {/* Divider except last */}
                {idx < arr.length - 1 && (
                  <span className="ml-2 hidden h-8 w-px bg-black/10 last:hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
