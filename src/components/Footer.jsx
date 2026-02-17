"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const SupercarIcon = () => (
    <svg width="32" height="14" viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[#B844E8]">
        <g transform="translate(64,0) scale(-1,1)">
            <path d="M10 18c-2 0-3.5-1.5-3.5-3.5S8 11 10 11h20c4 0 8-6 12-6h6c3 0 6 3 6 6v7c0 1.1-.9 2-2 2H10z" fill="currentColor" opacity="0.95" />
            <circle cx="18" cy="20" r="3" fill="#0F172A" />
            <circle cx="46" cy="20" r="3" fill="#0F172A" />
        </g>
    </svg>
);

const HeaderUnderline = () => (
    <div className="relative w-full max-w-[140px] mt-2 mb-6 mx-auto md:mx-0">
        <div className="h-[2px] w-full bg-gradient-to-r from-[#8B3FBF] via-[#B844E8] to-transparent rounded-full" />
        <motion.div 
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 100, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
            className="absolute -top-3 left-0"
        >
            <SupercarIcon />
        </motion.div>
    </div>
);

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-neutral-950/80 backdrop-blur-md border-t border-white/10">
            {/* Sophisticated Background Overlays */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#8B3FBF]/10 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gradient-to-tl from-[#B844E8]/10 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
            </div>

            {/* Main Footer Content */}
            <div className="relative mx-auto w-full max-w-7xl px-6 pt-16 md:pt-20 pb-8 md:pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-12 gap-x-12 mb-12 md:mb-16 items-start">

                    {/* Column 1 - Brand & Contact */}
                    <div className="space-y-3 md:space-y-6 text-center md:text-left flex flex-col items-center md:items-start text-balance">
                        <div className="space-y-0">
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter pb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent uppercase">WTB</span>
                                <span className="bg-gradient-to-r from-[#8B3FBF] to-[#B844E8] bg-clip-text text-transparent uppercase">DXB</span>
                            </h3>
                            <HeaderUnderline />
                        </div>

                        <p className="text-[14px] md:text-[15px] leading-relaxed text-slate-400 font-light max-w-[280px] sm:max-w-md mx-auto md:mx-0" style={{ fontFamily: "Inter, sans-serif", letterSpacing: '0.01em' }}>
                            Experience unparalleled luxury with Dubai's premier exotic car rental service. From Lamborghinis to Ferraris, we deliver excellence.
                        </p>

                        <div className="pt-1 md:pt-2 flex flex-col items-center md:items-start w-full">
                            <div className="space-y-4 w-full max-w-xs">
                                <a href="tel:+971554079239" className="group flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-slate-400 hover:text-white transition-all duration-300">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#B844E8]/50 transition-all duration-300">
                                        <svg className="h-4 w-4 text-[#B844E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">24/7 Helpline</p>
                                        <p className="text-sm font-semibold">+971 55 407 9239</p>
                                    </div>
                                </a>

                                <a href="mailto:info@wtbdxb.ae" className="group flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-slate-400 hover:text-white transition-all duration-300">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#B844E8]/50 transition-all duration-300">
                                        <svg className="h-4 w-4 text-[#B844E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Inquiries</p>
                                        <p className="text-sm font-semibold">info@wtbdxb.ae</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Explore */}
                    <div className="space-y-3 md:space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
                        <div className="space-y-0">
                            <h4 className="text-sm font-bold text-white uppercase tracking-[0.3em] pb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                                Explore
                            </h4>
                            <HeaderUnderline />
                        </div>
                        <ul className="space-y-4">
                            {[
                                { text: 'About WTB DXB', link: '/about' },
                                { text: 'Our Premium Fleet', link: '/compare' },
                                { text: 'Luxury Services', link: '/#car-listings' },
                                { text: 'Testimonials', link: '/#clientreview' },
                                { text: 'Contact & Location', link: '/contact' }
                            ].map((item) => (
                                <li key={item.text} className="relative group overflow-hidden">
                                    <Link
                                        href={item.link}
                                        className="inline-block text-[14px] text-slate-400 hover:text-white transition-all duration-300"
                                        style={{ fontFamily: "Inter, sans-serif" }}
                                    >
                                        {item.text}
                                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Newsletter & Social */}
                    <div className="space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
                        <div className="space-y-0">
                            <h4 className="text-sm font-bold text-white uppercase tracking-[0.3em] pb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                                Stay Updated
                            </h4>
                            <HeaderUnderline />
                        </div>

                        <div className="space-y-6 w-full text-center md:text-left">
                            <p className="text-sm text-slate-400 leading-relaxed font-light" style={{ fontFamily: "Inter, sans-serif" }}>
                                Subscribe for exclusive deals and luxury insights.
                            </p>

                            <div className="flex flex-col gap-4 items-center md:items-start">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    aria-label="Email for newsletter"
                                    className="w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 text-sm"
                                />
                                <div className="w-full flex justify-center">
                                    <button className="w-full sm:w-2/3 md:w-1/2 px-8 py-3 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] text-white font-bold text-[10px] uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-105 transition-all duration-300">
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="pt-2 w-full">
                            <div className="flex gap-6 justify-center md:justify-start">
                                {[
                                    { icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', label: 'Facebook' },
                                    { icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z', label: 'Instagram' },
                                    { icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', label: 'Twitter' },
                                    { icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', label: 'LinkedIn' }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="text-slate-500 hover:text-[#B844E8] transition-all duration-300 transform hover:scale-110"
                                        aria-label={social.label}
                                    >
                                        <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={social.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dubai Status Bar */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 border-t border-white/5">
                    <div className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase">
                        <span className="text-slate-400">Dubai, UAE</span>
                        <span className="text-slate-800">|</span>
                        <div className="flex items-center gap-2.5">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-slate-300 font-medium tracking-[0.2em]">Operational</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
                    <p className="text-[11px] md:text-[12px] text-slate-500 font-light text-center md:text-left" style={{ fontFamily: "Inter, sans-serif" }}>
                        © 2025 <span className="text-white font-medium uppercase tracking-wider">WTB DXB</span>. Exotic Car Rentals Dubai.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {[
                            { text: 'Privacy Policy', link: '/privacy-policy' },
                            { text: 'Terms of Service', link: '/terms-of-service' },
                            { text: 'Cookie Policy', link: '/cookie-policy' }
                        ].map((item) => (
                            <Link
                                key={item.text}
                                href={item.link}
                                className="text-[10px] md:text-xs text-slate-500 hover:text-white transition-colors duration-200 font-light tracking-[0.2em] uppercase"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}