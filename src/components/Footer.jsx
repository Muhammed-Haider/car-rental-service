"use client";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#0A1A2F] via-[#0E1B2E] to-[#050D1A]">
            {/* Sophisticated Background Overlays */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#0057FF]/15 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gradient-to-tl from-[#0057FF]/15 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
                <div className="absolute left-1/3 top-1/3 h-80 w-80 rounded-full bg-[#0057FF]/5 blur-3xl" />
            </div>

            {/* Main Footer Content */}
            <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 mb-16">

                    {/* Column 1 - Brand & Contact */}
                    <div className="space-y-6 lg:pr-4 text-center md:text-left">
                        <div className="space-y-3">
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">WTB</span>
                                <span className="bg-gradient-to-r from-[#0057FF] to-[#0080FF] bg-clip-text text-transparent">DXB</span>
                            </h3>
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <div className="h-0.5 w-12 bg-gradient-to-r from-[#0057FF] via-[#0080FF] to-transparent rounded-full" />
                                <div className="h-0.5 w-6 bg-gradient-to-r from-[#0057FF]/50 to-transparent rounded-full" />
                            </div>
                        </div>

                        <p className="text-[15px] leading-relaxed text-slate-400 font-light" style={{ fontFamily: "Inter, sans-serif", letterSpacing: '0.01em' }}>
                            Experience unparalleled luxury with Dubai's premier exotic car rental service. From Lamborghinis to Ferraris, we deliver excellence.
                        </p>

                        <div className="pt-2 flex flex-col items-center md:items-start">
                            <div className="space-y-3 w-fit">
                                <a href="tel:+971554079239" className="group flex items-center gap-3 text-slate-400 hover:text-[#0057FF] transition-all duration-300 text-left">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#0057FF]/10 group-hover:border-[#0057FF]/30 transition-all duration-300">
                                        <svg className="h-5 w-5 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium" style={{ fontFamily: "Inter, sans-serif" }}>Call Us 24/7</p>
                                        <p className="text-sm font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>+971 55 407 9239</p>
                                    </div>
                                </a>

                                <a href="mailto:info@wtbdxb.ae" className="group flex items-center gap-3 text-slate-400 hover:text-[#0057FF] transition-all duration-300 text-left">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#0057FF]/10 group-hover:border-[#0057FF]/30 transition-all duration-300">
                                        <svg className="h-5 w-5 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium" style={{ fontFamily: "Inter, sans-serif" }}>Email Us</p>
                                        <p className="text-sm font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>info@wtbdxb.ae</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Explore */}
                    <div className="space-y-6 text-center md:text-left">
                        <div className="space-y-3">
                            <h4 className="text-lg font-bold text-white tracking-wide" style={{ fontFamily: "Poppins, sans-serif" }}>
                                Explore
                            </h4>
                            <div className="h-0.5 w-10 bg-gradient-to-r from-[#0057FF] to-transparent rounded-full mx-auto md:mx-0" />
                        </div>
                        <ul className="space-y-3.5">
                            {[
                            { text: 'About WTB DXB', link: '/about' },
                            { text: 'Our Premium Fleet', link: '/compare' },
                            { text: 'Luxury Services', link: '/#car-listings' },
                            { text: 'Testimonials', link: '/#clientreview' },
                            { text: 'Contact & Location', link: '/contact' }
                        ].map((item) => (
                            <li key={item.text}>
                                <Link
                                    href={item.link}
                                    className="group flex items-center gap-3 text-[15px] text-slate-400 hover:text-white transition-all duration-300 justify-center md:justify-start"
                                    style={{ fontFamily: "Inter, sans-serif" }}
                                >
                                    <svg className="h-1.5 w-1.5 text-[#0057FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 8 8">
                                        <circle cx="4" cy="4" r="3" />
                                    </svg>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.text}</span>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Support */}
                    <div className="space-y-6 text-center md:text-left">
                        <div className="space-y-3">
                            <h4 className="text-lg font-bold text-white tracking-wide" style={{ fontFamily: "Poppins, sans-serif" }}>
                                Support
                            </h4>
                            <div className="h-0.5 w-10 bg-gradient-to-r from-[#0057FF] to-transparent rounded-full mx-auto md:mx-0" />
                        </div>
                        <ul className="space-y-3.5">
                            {['Help Center & FAQ', 'Booking Guide', 'Insurance Coverage', 'Terms of Service', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="group flex items-center gap-3 text-[15px] text-slate-400 hover:text-white transition-all duration-300 justify-center md:justify-start"
                                        style={{ fontFamily: "Inter, sans-serif" }}
                                    >
                                        <svg className="h-1.5 w-1.5 text-[#0057FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 8 8">
                                            <circle cx="4" cy="4" r="3" />
                                        </svg>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - Newsletter & Social */}
                    <div className="space-y-6 text-center md:text-left">
                        <div className="space-y-3">
                            <h4 className="text-lg font-bold text-white tracking-wide" style={{ fontFamily: "Poppins, sans-serif" }}>
                                Stay Updated
                            </h4>
                            <div className="h-0.5 w-10 bg-gradient-to-r from-[#0057FF] to-transparent rounded-full mx-auto md:mx-0" />
                        </div>

                        <p className="text-[15px] text-slate-400 leading-relaxed font-light" style={{ fontFamily: "Inter, sans-serif" }}>
                            Subscribe for exclusive deals, new arrivals, and luxury car insights.
                        </p>

                        {/* Newsletter Form */}
                        <div className="space-y-3">
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0057FF]/50 focus:border-[#0057FF]/50 focus:bg-white/[0.05] text-sm backdrop-blur-xl transition-all duration-300"
                                    style={{ fontFamily: "Inter, sans-serif" }}
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0057FF]/0 to-[#0057FF]/0 group-hover:from-[#0057FF]/5 group-hover:to-transparent pointer-events-none transition-all duration-300" />
                            </div>
                            <button className="w-full md:w-auto flex items-center justify-center px-6 py-3.5 bg-[#0057FF] border border-[#0057FF] text-white font-semibold text-sm rounded-xl hover:bg-white hover:text-[#0057FF] transition-all duration-300 shadow-lg hover:shadow-blue-500/25 md:px-8" style={{ fontFamily: "Poppins, sans-serif" }}>
                                Subscribe Now
                            </button>
                        </div>

                        {/* Social Media */}
                        <div className="pt-2">
                            <p className="text-xs font-medium text-slate-500 mb-4 tracking-wide uppercase" style={{ fontFamily: "Inter, sans-serif", letterSpacing: '0.1em' }}>Connect With Us</p>
                            <div className="flex gap-3 justify-center md:justify-start">
                                {[
                                    { icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', label: 'Facebook' },
                                    { icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z', label: 'Instagram' },
                                    { icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', label: 'Twitter' },
                                    { icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', label: 'LinkedIn' }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 hover:bg-gradient-to-br hover:from-[#0057FF] hover:to-[#0048d1] hover:border-[#0057FF] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0057FF]/40"
                                        aria-label={social.label}
                                    >
                                        <svg className="h-[18px] w-[18px] text-slate-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={social.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Elegant Divider */}
                <div className="relative my-12">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gradient-to-r from-transparent via-white/10 to-transparent" style={{ borderImage: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent) 1' }} />
                    </div>
                    <div className="relative flex justify-center">
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#0057FF]/50" />
                            <div className="h-2 w-2 rounded-full bg-[#0057FF] ring-4 ring-[#0A1A2F] shadow-lg shadow-[#0057FF]/50" />
                            <div className="h-1.5 w-1.5 rounded-full bg-[#0057FF]/50" />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6">
                    <p className="text-sm text-slate-500 font-light" style={{ fontFamily: "Inter, sans-serif", letterSpacing: '0.02em' }}>
                        © 2025 <span className="text-slate-300 font-semibold bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent">WTB DXB</span>. Handcrafted with passion in Dubai, UAE.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item, idx, arr) => (
                            <div key={item} className="flex items-center gap-4">
                                <a
                                    href="#"
                                    className="text-sm text-slate-500 hover:text-[#0057FF] transition-colors duration-200 font-light"
                                    style={{ fontFamily: "Inter, sans-serif" }}
                                >
                                    {item}
                                </a>
                                {idx < arr.length - 1 && <span className="text-slate-700 text-xs">•</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
