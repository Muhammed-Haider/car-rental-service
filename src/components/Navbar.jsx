"use client";
import { useState, useContext } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useHighlight } from "@/context/HighlightContext";

// Map car types to their corresponding car IDs for navigation
const carTypeToIdMap = {
  'Sedan': 1,        // Ferrari Roma
  'SUV': 2,          // Lamborghini Urus
  'Sports': 3,       // McLaren Artura
  'Luxury': 4,       // Rolls-Royce Cullinan
  'Convertible': 5   // McLaren 750S Spider
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [carsOpen, setCarsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { triggerHighlight } = useHighlight();

  const handleHomeClick = (e) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      router.refresh();
    }
  };

  const navLinkBase =
    "relative inline-flex h-10 items-center rounded-md px-3 text-sm font-medium leading-none text-white/80 hover:text-white transition-colors";
  const underline =
    "relative after:absolute after:left-0 after:bottom-0 after:block after:h-[2px] after:w-0 after:bg-white/90 after:transition-all hover:after:w-full";

  const MenuLinks = (
    <ul className="hidden md:flex items-center gap-2">
      <li>
        <Link 
          href="/" 
          className={`${navLinkBase} ${underline}`}
          onClick={handleHomeClick}
        >
          Home
        </Link>
      </li>
      <li
        className="relative"
        onMouseEnter={() => setCarsOpen(true)}
        onMouseLeave={() => setCarsOpen(false)}
      >
        <button
          className={`${navLinkBase} gap-1 group`}
          onClick={() => setCarsOpen((v) => !v)}
          aria-expanded={carsOpen}
        >
          Cars
          <span className={`text-white/60 transition-transform duration-300 ${carsOpen ? 'rotate-180' : ''}`}>▾</span>
        </button>

        {/* Dropdown Menu */}
        <div
          className={`fixed left-1/2 top-[80px] z-40 w-[90vw] max-w-5xl -translate-x-1/2 transform transition-all duration-300 ease-out ${carsOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
            }`}
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0A1A2F]/95 backdrop-blur-xl shadow-2xl ring-1 ring-black/5">
            <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-12">
              {/* Column 1: Browse by type (3 cols) */}
              <div className="sm:col-span-3">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/50">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  Browse by Type
                </h4>
                <ul className="space-y-1">
                  {['Sedan', 'SUV', 'Sports', 'Convertible', 'Luxury'].map((type) => {
                    const carId = carTypeToIdMap[type];
                    return (
                      <li key={type}>
                        <Link
                          href={`/cars/${carId}`}
                          className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white hover:pl-5"
                          onClick={() => setCarsOpen(false)}
                        >
                          {type}
                          <span className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Column 2: Popular Models (5 cols) */}
              <div className="sm:col-span-5 border-l border-white/5 pl-8">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/50">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Popular Models
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { src: '/lamborghini.png', label: 'Lamborghini' },
                    { src: '/ferrari.png', label: 'Ferrari' },
                    { src: '/porsche.png', label: 'Porsche' },
                    { src: '/mercedes.png', label: 'Mercedes' },
                  ].map((m) => (
                    <Link
                      key={m.label}
                      href="#"
                      className="group flex flex-col items-center gap-3 rounded-xl bg-white/5 p-4 text-center transition-all hover:bg-white/10 hover:scale-105"
                    >
                      <div className="h-12 w-12 flex items-center justify-center">
                        <img src={m.src} alt={m.label} className="max-h-full max-w-full object-contain drop-shadow-lg" loading="lazy" />
                      </div>
                      <span className="text-sm font-medium text-white/90 group-hover:text-white">{m.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 3: Locations & Offers (4 cols) */}
              <div className="sm:col-span-4 border-l border-white/5 pl-8">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/50">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Locations & Offers
                </h4>
                <ul className="space-y-2">
                  {['Dubai', 'Abu Dhabi', 'Sharjah'].map((loc) => (
                    <li key={loc}>
                      <Link href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0057FF]"></span>
                        {loc}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-6">
                    <Link
                      href="/compare"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0057FF] to-[#0048d1] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:shadow-blue-500/25 hover:scale-[1.02]"
                      onClick={() => setCarsOpen(false)}
                    >
                      <span>View Special Deals</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <Link href="#" className={`${navLinkBase} ${underline}`}>
          Partnership
        </Link>
      </li>
      <li
        className="relative"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <button
          className={`${navLinkBase} gap-1 group`}
          onClick={() => setServicesOpen((v) => !v)}
          aria-expanded={servicesOpen}
        >
          Services
          <span className={`text-white/60 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}>▾</span>
        </button>

        {/* Services Dropdown Menu */}
        <div
          className={`fixed left-1/2 top-[80px] z-40 w-[90vw] max-w-md -translate-x-1/2 transform transition-all duration-300 ease-out ${servicesOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
            }`}
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A1A2F]/95 backdrop-blur-xl">
            <div className="p-6">
              <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/50">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Rental Services
              </h4>
              <ul className="space-y-2">
                {[
                  {
                    label: 'Daily Basis Rental',
                    icon: 'M17 8.5L12 3.5L7 8.5M12 3.5V16.5M3 12H21M5 16H19C20.1046 16 21 16.8954 21 18V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V18C3 16.8954 3.89543 16 5 16Z',
                    action: () => {
                      document.getElementById('car-listings')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  },
                  {
                    label: 'Weekly Basis Rental',
                    icon: 'M8 7V3M8 3L5 6M8 3L11 6M16 17V21M16 21L13 18M16 21L19 18M3 12H21M5 16H19C20.1046 16 21 16.8954 21 18V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V18C3 16.8954 3.89543 16 5 16Z',
                    action: () => {
                      document.getElementById('car-listings')?.scrollIntoView({ behavior: 'smooth' });
                      triggerHighlight();
                    }
                  },
                  { label: 'Monthly Basis Rental', icon: 'M3 8L7 4L11 8M7 4V16M13 16L17 12L21 16M17 12V16M3 20H21M5 16H19C20.1046 16 21 16.8954 21 18V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V18C3 16.8954 3.89543 16 5 16Z' },
                  { label: 'Daily Rental with Chauffeuring', icon: 'M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM16 14H8C6.89543 14 6 14.8954 6 16V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V16C18 14.8954 17.1046 14 16 14ZM20 8L22 10L20 12M12 11V14' }
                ].map((service, index) => (
                  <li key={index} onClick={service.action}>
                    <div className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white">
                      <div className="flex items-center gap-3">
                        <svg className="h-5 w-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                        </svg>
                        {service.label}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <Link href="/about" className={`${navLinkBase} ${underline}`}>
          About
        </Link>
      </li>
      <li>
        <Link 
          href="/#clientreview" 
          className={`${navLinkBase} ${underline}`}
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              document.getElementById('clientreview')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Testimonials
        </Link>
      </li>
      <li>
        <Link href="/contact" className={`${navLinkBase} ${underline}`}>
          Contact
        </Link>
      </li>
    </ul>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 rounded-2xl md:rounded-full border border-white/10 bg-[#0A1A2F]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0A1A2F]/60">
          <nav className="relative flex items-center justify-between px-4 py-2 md:px-4 md:py-2">
            {/* Desktop: Brand on left */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/" className="text-white text-lg font-semibold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                WTB DXB
              </Link>
            </div>

            {/* Mobile: Centered Brand */}
            <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link href="/" className="text-white text-lg font-semibold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                WTB DXB
              </Link>
            </div>

            {/* Center: Links (Desktop only) */}
            {MenuLinks}

            {/* Right: Contact + Auth (Desktop only) */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="tel:+971554079239"
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/90 hover:bg-white/10"
              >
                ☎ +971 55 407 9239
              </a>
              <a
                href="https://wa.me/971554079239"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/90 hover:bg-white/10"
              >
                💬 WhatsApp
              </a>
              <Link
                href="#signin"
                className="ml-2 inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 bg-[#0057FF] border border-[#0057FF] text-white font-semibold text-xs md:text-sm rounded-full hover:bg-white hover:text-[#0057FF] transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Sign In
              </Link>
            </div>

            {/* Mobile: Menu Toggle (Right) */}
            <button
              className="md:hidden ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              <span className="text-xl">{mobileOpen ? '✕' : '☰'}</span>
            </button>
          </nav>

          {/* Mobile drawer with smooth expansion */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-4 pb-4 pt-2">
              <ul className="flex flex-col space-y-1">
                <li>
                  <Link 
                    href="/" 
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/5 transition-colors"
                    onClick={(e) => {
                      if (pathname === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        router.refresh();
                      }
                      setMobileOpen(false);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <div className="rounded-lg bg-white/5 px-3 py-2.5">
                    <button
                      onClick={() => setCarsOpen(!carsOpen)}
                      className="flex w-full items-center justify-between text-sm font-medium text-white/90"
                    >
                      Cars
                      <span className={`transition-transform duration-300 ${carsOpen ? 'rotate-180' : ''}`}>▾</span>
                    </button>
                    <div className={`grid transition-all duration-300 ease-in-out ${carsOpen ? 'grid-rows-[1fr] mt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        {/* Browse by Type */}
                        <div className="mb-3">
                          <h5 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/50">Browse by Type</h5>
                          <div className="grid grid-cols-2 gap-2">
                            {['Sedan', 'SUV', 'Sports', 'Luxury'].map((type) => {
                              const carId = carTypeToIdMap[type];
                              return (
                                <Link 
                                  key={type} 
                                  href={`/cars/${carId}`} 
                                  className="rounded-lg bg-white/5 px-2 py-1.5 text-center text-xs text-white/80 hover:bg-white/10 transition-colors"
                                  onClick={() => {
                                    setCarsOpen(false);
                                    setMobileOpen(false);
                                  }}
                                >
                                  {type}
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Popular Models with Logos */}
                        <div className="mb-3">
                          <h5 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/50">Popular Models</h5>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              { src: '/lamborghini.png', label: 'Lamborghini' },
                              { src: '/ferrari.png', label: 'Ferrari' },
                              { src: '/porsche.png', label: 'Porsche' },
                              { src: '/mercedes.png', label: 'Mercedes' },
                            ].map((m) => (
                              <Link
                                key={m.label}
                                href="#"
                                className="flex flex-col items-center gap-1.5 rounded-lg bg-white/5 p-2 text-center transition-all hover:bg-white/10"
                              >
                                <div className="h-6 w-full flex items-center justify-center">
                                  <img src={m.src} alt={m.label} className="max-h-full max-w-full object-contain" loading="lazy" />
                                </div>
                                <span className="text-[10px] font-medium text-white/90">{m.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li><Link href="#" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/5 transition-colors">Partnership</Link></li>
                <li>
                  <div className="rounded-lg bg-white/5 px-3 py-2.5">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex w-full items-center justify-between text-sm font-medium text-white/90"
                    >
                      Services
                      <span className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}>▾</span>
                    </button>
                    <div className={`grid transition-all duration-300 ease-in-out ${servicesOpen ? 'grid-rows-[1fr] mt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <h5 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/50">Rental Services</h5>
                        <div className="space-y-1">
                          {[
                            { label: 'Daily Basis Rental', icon: 'M17 8.5L12 3.5L7 8.5M12 3.5V16.5M3 12H21M5 16H19C20.1046 16 21 16.8954 21 18V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V18C3 16.8954 3.89543 16 5 16Z' },
                            { label: 'Weekly Basis Rental', icon: 'M8 7V3M8 3L5 6M8 3L11 6M16 17V21M16 21L13 18M16 21L19 18M3 12H21M5 16H19C20.1046 16 21 16.8954 21 18V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V18C3 16.8954 3.89543 16 5 16Z' },
                            { label: 'Monthly Basis Rental', icon: 'M3 8L7 4L11 8M7 4V16M13 16L17 12L21 16M17 12V16M3 20H21M5 16H19C20.1046 16 21 16.8954 21 18V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V18C3 16.8954 3.89543 16 5 16Z' },
                            { label: 'Daily Rental with Chauffeuring', icon: 'M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM16 14H8C6.89543 14 6 14.8954 6 16V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V16C18 14.8954 17.1046 14 16 14ZM20 8L22 10L20 12M12 11V14' }
                          ].map((service, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1.5 text-xs text-white/80 hover:bg-white/10 transition-colors"
                            >
                              <svg className="h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                              </svg>
                              {service.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li><Link href="/about" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/5 transition-colors">About</Link></li>
                <li><Link href="/contact" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/5 transition-colors">Contact</Link></li>
              </ul>

              {/* Contact buttons */}
              <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                <a href="tel:+971554079239" className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-xs font-medium text-white hover:bg-white/10 transition-colors">
                  <span>☎</span> Call
                </a>
                <a href="https://wa.me/971554079239" className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-xs font-medium text-white hover:bg-white/10 transition-colors">
                  <span>💬</span> WhatsApp
                </a>
                <Link href="#signin" className="col-span-2 flex items-center justify-center px-4 py-2.5 bg-[#0057FF] border border-[#0057FF] text-white font-semibold text-xs rounded-lg hover:bg-white hover:text-[#0057FF] transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
