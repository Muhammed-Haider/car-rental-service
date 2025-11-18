"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [carsOpen, setCarsOpen] = useState(false);

  const navLinkBase =
    "relative inline-flex h-10 items-center rounded-md px-3 text-sm font-medium leading-none text-white/80 hover:text-white transition-colors";
  const underline =
    "relative after:absolute after:left-0 after:bottom-0 after:block after:h-[2px] after:w-0 after:bg-white/90 after:transition-all hover:after:w-full";

  const MenuLinks = (
    <ul className="hidden md:flex items-center gap-2">
      <li>
        <Link href="#" className={`${navLinkBase} ${underline}`}>
          Home
        </Link>
      </li>
      <li className="relative"
          onMouseEnter={() => setCarsOpen(true)}
          onMouseLeave={() => setCarsOpen(false)}>
        <button
          className={`${navLinkBase} gap-1`}
          onClick={() => setCarsOpen((v) => !v)}
          aria-expanded={carsOpen}
        >
          Cars
          <span className="text-white/60">▾</span>
        </button>
        {carsOpen && (
          <div className="absolute left-1/2 top-full z-30 mt-2 w-screen max-w-5xl -translate-x-1/2 rounded-lg border border-white/10 bg-[#0A1A2F] p-6 shadow-xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {/* Column 1: Browse by type */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-white">Browse by Type</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="block rounded px-3 py-2 text-sm text-white/80 hover:bg-white/6 hover:text-white">Sedan</Link>
                  </li>
                  <li>
                    <Link href="#" className="block rounded px-3 py-2 text-sm text-white/80 hover:bg-white/6 hover:text-white">SUV</Link>
                  </li>
                  <li>
                    <Link href="#" className="block rounded px-3 py-2 text-sm text-white/80 hover:bg-white/6 hover:text-white">Sports</Link>
                  </li>
                  <li>
                    <Link href="#" className="block rounded px-3 py-2 text-sm text-white/80 hover:bg-white/6 hover:text-white">Convertible</Link>
                  </li>
                  <li>
                    <Link href="#" className="block rounded px-3 py-2 text-sm text-white/80 hover:bg-white/6 hover:text-white">Luxury</Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Popular models */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-white">Popular Models</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { src: '/lamborghini.png', label: 'Lamborghini' },
                    { src: '/ferrari.png', label: 'Ferrari' },
                    { src: '/porsche.png', label: 'Porsche' },
                    { src: '/mercedes.png', label: 'Mercedes' },
                  ].map((m) => (
                    <Link key={m.label} href="#" className="flex items-center gap-3 rounded p-2 hover:bg-white/6">
                      <img src={m.src} alt={m.label} className="h-10 w-10 object-contain" loading="eager" />
                      <span className="text-sm text-white/80">{m.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 3: Locations & Offers */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-white">Locations & Offers</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="block rounded px-3 py-2 text-sm text-white/80 hover:bg-white/6 hover:text-white">Dubai</Link>
                  </li>
                  <li>
                    <Link href="#" className="block rounded px-3 py-2 text-sm text-white/80 hover:bg-white/6 hover:text-white">Abu Dhabi</Link>
                  </li>
                  <li>
                    <Link href="#" className="block rounded px-3 py-2 text-sm text-white/80 hover:bg-white/6 hover:text-white">Sharjah</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="#" className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white">Special Deals</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Link href="/cars" className="text-sm text-white/80 hover:text-white">View all cars →</Link>
            </div>
          </div>
        )}
      </li>
      <li>
        <Link href="#" className={`${navLinkBase} ${underline}`}>
          Partnership
        </Link>
      </li>
      <li>
        <Link href="#" className={`${navLinkBase} ${underline}`}>
          Services
        </Link>
      </li>
      <li>
        <Link href="#" className={`${navLinkBase} ${underline}`}>
          About
        </Link>
      </li>
      <li>
        <Link href="#" className={`${navLinkBase} ${underline}`}>
          Contact
        </Link>
      </li>
    </ul>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-3 rounded-full border border-white/10 bg-[#0A1A2F]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0A1A2F]/60">
          <nav className="flex items-center justify-between px-4 py-2">
            {/* Left: Brand */}
            <div className="flex items-center gap-3">
              <Link href="/" className="text-white text-lg font-semibold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                WTB DXB
              </Link>
              {/* Mobile toggle */}
              <button
                className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-white/80 hover:text-white"
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-label="Toggle menu"
              >
                <span className="text-xl">☰</span>
              </button>
            </div>

            {/* Center: Links */}
            {MenuLinks}

            {/* Right: Contact + Auth */}
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
                className="ml-2 inline-flex items-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0048d1]"
              >
                Sign In
              </Link>
            </div>
          </nav>

          {/* Mobile drawer */}
          {mobileOpen && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <ul className="flex flex-col py-2">
                <li>
                  <Link href="#" className="block px-2 py-2 text-sm text-white/90">Home</Link>
                </li>
                <li>
                  <details className="px-2 py-2">
                    <summary className="cursor-pointer list-none text-sm text-white/90">Cars</summary>
                    <div className="mt-1 pl-3">
                      <Link href="#" className="block py-1 text-sm text-white/80">Sedan</Link>
                      <Link href="#" className="block py-1 text-sm text-white/80">SUV</Link>
                      <Link href="#" className="block py-1 text-sm text-white/80">Sports</Link>
                    </div>
                  </details>
                </li>
                <li><Link href="#" className="block px-2 py-2 text-sm text-white/90">Partnership</Link></li>
                <li><Link href="#" className="block px-2 py-2 text-sm text-white/90">Services</Link></li>
                <li><Link href="#" className="block px-2 py-2 text-sm text-white/90">About</Link></li>
                <li><Link href="#" className="block px-2 py-2 text-sm text-white/90">Contact</Link></li>
                <li className="mt-2 flex gap-2">
                  <a href="tel:+971554079239" className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/90">☎ Call</a>
                  <a href="https://wa.me/971554079239" className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/90">💬 WhatsApp</a>
                  <Link href="#signin" className="ml-auto inline-flex items-center rounded-full bg-[var(--color-primary)] px-3 py-1.5 text-xs font-medium text-white">Sign In</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
