"use client";

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaHeart, FaRegHeart, FaChevronDown, FaSearch, FaTimes, FaSlidersH, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { cars } from '@/lib/cardata';

/* ── helpers ── */
const brands = [...new Set(cars.map(c => c.name.split(' ')[0]))].sort();
const engineTypes = [...new Set(cars.map(c => c.specs.engine.split(' ').pop()))].sort();
const carTypes = [...new Set(cars.map(c => c.type))].sort();
const maxPrice = Math.max(...cars.map(c => c.price));
const minPrice = Math.min(...cars.map(c => c.price));

/* ── Calendar Components ── */
const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function Calendar({ monthOffset, currentMonth, year, selectedStart, selectedEnd, onDateClick, hoveringDate, setHoveringDate }) {
    const monthIndex = (currentMonth + monthOffset) % 12;
    const yearOffset = Math.floor((currentMonth + monthOffset) / 12);
    const displayYear = year + yearOffset;

    const firstDay = new Date(displayYear, monthIndex, 1).getDay();
    const daysInMonth = new Date(displayYear, monthIndex + 1, 0).getDate();

    const dates = [];
    for (let i = 0; i < firstDay; i++) dates.push(null);
    for (let i = 1; i <= daysInMonth; i++) dates.push(new Date(displayYear, monthIndex, i));

    return (
        <div className="w-full">
            <div className="text-center font-bold text-white mb-4">
                {months[monthIndex]} {displayYear}
            </div>
            <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map(day => (
                    <div key={day} className="text-center text-xs text-gray-500 font-medium">{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {dates.map((date, i) => {
                    if (!date) return <div key={i} className="h-8" />;

                    const isSelectedStart = selectedStart && date.toDateString() === selectedStart.toDateString();
                    const isSelectedEnd = selectedEnd && date.toDateString() === selectedEnd.toDateString();
                    const isInRange = selectedStart && selectedEnd && date > selectedStart && date < selectedEnd;
                    const isHoverRange = selectedStart && !selectedEnd && hoveringDate && date > selectedStart && date <= hoveringDate;

                    return (
                        <button
                            key={i}
                            onClick={() => onDateClick(date)}
                            onMouseEnter={() => setHoveringDate(date)}
                            className={`h-8 w-8 rounded-full text-xs flex items-center justify-center transition-all relative z-10
                ${isSelectedStart || isSelectedEnd ? 'bg-purple-600 text-white font-bold shadow-lg shadow-purple-500/30' : 'text-gray-300 hover:bg-white/10'}
                ${(isInRange || isHoverRange) && !(isSelectedStart || isSelectedEnd) ? 'bg-purple-500/20 text-purple-200 rounded-none' : ''}
                ${isSelectedStart && (isInRange || isHoverRange) ? 'rounded-r-none' : ''}
                ${isSelectedEnd && isInRange ? 'rounded-l-none' : ''}
              `}
                        >
                            {date.getDate()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

function DatePickerModal({ isOpen, onClose, filters, setFilters }) {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [hoveringDate, setHoveringDate] = useState(null);

    const handleDateClick = (date) => {
        if (!filters.startDate || (filters.startDate && filters.endDate)) {
            setFilters(f => ({ ...f, startDate: date, endDate: null }));
        } else {
            if (date < filters.startDate) {
                setFilters(f => ({ ...f, startDate: date, endDate: null }));
            } else {
                setFilters(f => ({ ...f, endDate: date }));
                // Optional: Close on end date selection
                // onClose(); 
            }
        }
    };

    const quickPick = (days) => {
        const start = new Date();
        const end = new Date();
        end.setDate(start.getDate() + days);
        setFilters(f => ({ ...f, startDate: start, endDate: end }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 m-auto w-fit h-fit bg-[#141414] border border-white/10 rounded-3xl p-6 shadow-2xl z-[60] flex flex-col gap-6"
                    >
                        {/* Quick Picks */}
                        <div className="flex gap-2 pb-4 border-b border-white/5 overflow-x-auto">
                            <button onClick={() => quickPick(1)} className="px-3 py-1.5 bg-white/5 hover:bg-purple-600/20 text-xs rounded-full text-gray-300 hover:text-purple-300 transition-colors whitespace-nowrap">Today</button>
                            <button onClick={() => quickPick(2)} className="px-3 py-1.5 bg-white/5 hover:bg-purple-600/20 text-xs rounded-full text-gray-300 hover:text-purple-300 transition-colors whitespace-nowrap">This Weekend</button>
                            <button onClick={() => quickPick(7)} className="px-3 py-1.5 bg-white/5 hover:bg-purple-600/20 text-xs rounded-full text-gray-300 hover:text-purple-300 transition-colors whitespace-nowrap">Next Week</button>
                            <button onClick={() => quickPick(30)} className="px-3 py-1.5 bg-white/5 hover:bg-purple-600/20 text-xs rounded-full text-gray-300 hover:text-purple-300 transition-colors whitespace-nowrap">Next Month</button>
                        </div>

                        {/* Calendars */}
                        <div className="flex flex-col md:flex-row gap-8 relative">
                            <button
                                onClick={() => setCurrentMonth(prev => prev - 1)}
                                className="absolute left-0 top-0 p-2 hover:text-purple-400 z-10"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                onClick={() => setCurrentMonth(prev => prev + 1)}
                                className="absolute right-0 top-0 p-2 hover:text-purple-400 z-10"
                            >
                                <FaChevronRight />
                            </button>

                            <Calendar
                                monthOffset={0} currentMonth={currentMonth} year={year}
                                selectedStart={filters.startDate} selectedEnd={filters.endDate}
                                onDateClick={handleDateClick} hoveringDate={hoveringDate} setHoveringDate={setHoveringDate}
                            />
                            <div className="hidden md:block w-px bg-white/5" />
                            <Calendar
                                monthOffset={1} currentMonth={currentMonth} year={year}
                                selectedStart={filters.startDate} selectedEnd={filters.endDate}
                                onDateClick={handleDateClick} hoveringDate={hoveringDate} setHoveringDate={setHoveringDate}
                            />
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-center pt-4 border-t border-white/5">
                            <div className="text-xs text-gray-400">
                                {filters.startDate ? filters.startDate.toLocaleDateString() : 'Select start'}
                                {' - '}
                                {filters.endDate ? filters.endDate.toLocaleDateString() : 'Select end'}
                            </div>
                            <div className="flex gap-3">
                                <button onClick={onClose} className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">Cancel</button>
                                <button
                                    onClick={onClose}
                                    disabled={!filters.startDate || !filters.endDate}
                                    className="px-6 py-2 bg-purple-600 text-white text-sm font-bold rounded-xl hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

/* ── Sidebar Filters ── */
function Sidebar({ filters, setFilters, mobileOpen, setMobileOpen, onOpenCalendar }) {
    const sidebarContent = (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white tracking-wide">Filter by</h2>
                <button
                    onClick={() => setFilters({ brand: 'All', type: 'All', priceRange: maxPrice, seats: 'All', engine: 'All', search: '', startDate: null, endDate: null })}
                    className="text-xs text-gray-500 hover:text-purple-400 transition-colors cursor-pointer"
                >
                    Reset all
                </button>
            </div>

            {/* Date Range Picker Trigger */}
            <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.15em] mb-4">Availability</p>
                <button
                    onClick={onOpenCalendar}
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 flex items-center justify-between group hover:border-purple-500/30 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                            <FaCalendarAlt className="text-purple-400 w-3.5 h-3.5" />
                        </div>
                        <div className="text-left">
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Trip Dates</div>
                            <div className="text-sm text-white font-medium truncat max-w-[140px]">
                                {filters.startDate && filters.endDate
                                    ? `${filters.startDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} - ${filters.endDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`
                                    : 'Add dates'
                                }
                            </div>
                        </div>
                    </div>
                    <FaChevronDown className="text-gray-600 w-3 h-3 group-hover:text-purple-400 transition-colors" />
                </button>
            </div>

            {/* Price Range */}
            <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.15em] mb-4">Price Range / Day</p>
                <div className="h-12 flex items-end gap-[3px] mb-3">
                    {[...Array(24)].map((_, i) => {
                        const ratio = i / 24;
                        const isActive = ratio <= filters.priceRange / maxPrice;
                        return (
                            <div
                                key={i}
                                className={`flex-1 rounded-t-sm transition-colors duration-200 ${isActive ? 'bg-purple-500/60' : 'bg-white/5'}`}
                                style={{ height: `${20 + Math.sin(i * 0.7) * 40 + ((i * 13) % 30)}%` }}
                            />
                        );
                    })}
                </div>
                <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={filters.priceRange}
                    onChange={(e) => setFilters(f => ({ ...f, priceRange: +e.target.value }))}
                    className="w-full h-1 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between mt-2">
                    <span className="text-[11px] text-gray-500 bg-[#1A1A1A] px-2.5 py-1 rounded-lg border border-white/5">{minPrice} AED</span>
                    <span className="text-[11px] text-gray-500 bg-[#1A1A1A] px-2.5 py-1 rounded-lg border border-white/5">{filters.priceRange.toLocaleString()} AED</span>
                </div>
            </div>

            {/* Brand */}
            <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.15em] mb-3">Car Brand</p>
                <select
                    value={filters.brand}
                    onChange={(e) => setFilters(f => ({ ...f, brand: e.target.value }))}
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500/50 appearance-none cursor-pointer"
                >
                    <option value="All">All Brands</option>
                    {brands.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
            </div>

            {/* Car Type (New) */}
            <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.15em] mb-3">Car Type</p>
                <div className="flex flex-wrap gap-2">
                    {['All', ...carTypes].map(t => (
                        <button
                            key={t}
                            onClick={() => setFilters(f => ({ ...f, type: t }))}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${filters.type === t
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                                : 'bg-[#1A1A1A] text-gray-400 border border-white/5 hover:border-purple-500/30'
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Seats */}
            <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.15em] mb-3">Seats</p>
                <div className="flex flex-wrap gap-2">
                    {['All', '2', '4', '5', '7'].map(s => (
                        <button
                            key={s}
                            onClick={() => setFilters(f => ({ ...f, seats: s }))}
                            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${filters.seats === s
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                                : 'bg-[#1A1A1A] text-gray-400 border border-white/5 hover:border-purple-500/30'
                                }`}
                        >
                            {s === 'All' ? 'Any' : `${s} seats`}
                        </button>
                    ))}
                </div>
            </div>

            {/* Engine */}
            <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.15em] mb-3">Engine Type</p>
                <div className="flex flex-wrap gap-2">
                    {['All', ...engineTypes].map(e => (
                        <button
                            key={e}
                            onClick={() => setFilters(f => ({ ...f, engine: e }))}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${filters.engine === e
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                                : 'bg-[#1A1A1A] text-gray-400 border border-white/5 hover:border-purple-500/30'
                                }`}
                        >
                            {e === 'All' ? 'Any' : e}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0 bg-[#0D0D0D] border-r border-white/5 p-6 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar">
                {sidebarContent}
            </aside>

            {/* Mobile Filter Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="fixed top-0 left-0 w-80 h-full bg-[#0D0D0D] z-50 p-6 overflow-y-auto lg:hidden"
                        >
                            <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                                <FaTimes className="w-5 h-5" />
                            </button>
                            {sidebarContent}
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

/* ── Car Card with Video Preview ── */
function CarCard({ car, index, days }) {
    const [fav, setFav] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/cars/${car.id}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03, duration: 0.4 }}
            className="group bg-[#141414] rounded-2xl border border-white/5 overflow-hidden hover:border-purple-500/20 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 relative cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick}
        >
            {/* Top Info Bar */}
            <div className="flex items-center justify-between px-5 pt-4 z-10 relative">
                <div className="flex items-center gap-3 text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        {car.specs.engine}
                    </span>
                    <span className="text-yellow-500/80">★ 4.8</span>
                </div>
                <button
                    onClick={(e) => { e.stopPropagation(); setFav(!fav); }}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                >
                    {fav ? <FaHeart className="w-3.5 h-3.5 text-red-500" /> : <FaRegHeart className="w-3.5 h-3.5 text-gray-600" />}
                </button>
            </div>

            {/* Image / Video Container */}
            <div className="relative h-40 mx-4 my-2 flex items-center justify-center overflow-hidden rounded-lg">
                {/* Driving Animation Background */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            style={{
                                backgroundSize: '200% 100%',
                                animation: 'speedLines 1s linear infinite'
                            }}
                        />
                    )}
                </AnimatePresence>

                {/* Car Image with Suspension Effect */}
                <motion.img
                    src={car.image}
                    alt={car.name}
                    className="max-w-full max-h-full object-contain z-10 relative"
                    animate={isHovered ? {
                        y: [0, -3, 0, 1, 0],
                        scale: 1.05,
                    } : {
                        y: 0,
                        scale: 1,
                    }}
                    transition={isHovered ? {
                        y: {
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut"
                        },
                        scale: { duration: 0.3 }
                    } : { duration: 0.3 }}
                    onError={(e) => { e.target.src = '/car.jpeg'; }}
                />

                {/* Speed Lines Animation Styles */}
                {isHovered && (
                    <style jsx="true">{`
             @keyframes speedLines {
               0% { background-position: 200% 0; }
               100% { background-position: -200% 0; }
             }
           `}</style>
                )}
            </div>

            {/* Details */}
            <div className="px-5 pb-5 space-y-3 relative z-10 bg-[#141414]">
                <div>
                    <h3 className="text-base font-bold text-white truncate group-hover:text-purple-400 transition-colors">
                        {car.name}
                    </h3>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                        {car.specs.seats} Seats • {car.specs.horsepower} HP • {car.specs.acceleration}s 0-100
                    </p>
                </div>

                <div className="flex items-end justify-between pt-3 border-t border-white/5">
                    <div>
                        {days > 0 ? (
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white">{(car.price * days).toLocaleString()} <span className="text-sm font-normal text-gray-400">AED</span></span>
                                <span className="text-[10px] text-gray-500">Total for {days} days</span>
                            </div>
                        ) : (
                            <div>
                                <span className="text-xl font-bold text-white">{car.price.toLocaleString()}</span>
                                <span className="text-[10px] text-gray-500 ml-1">AED/day</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Phone */}
                        <a
                            href="tel:+971554079239"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white transition-all duration-200"
                        >
                            <FaPhoneAlt className="w-3 h-3" />
                        </a>
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/971554079239"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600/10 hover:bg-green-600 text-green-400 hover:text-white transition-all duration-200"
                        >
                            <FaWhatsapp className="w-3.5 h-3.5" />
                        </a>
                        {/* Details */}
                        <Link
                            href={`/cars/${car.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="px-4 py-1.5 bg-purple-600/10 hover:bg-purple-600 text-purple-400 hover:text-white text-[11px] font-bold rounded-lg transition-all duration-200"
                        >
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ── Main Page ── */
export default function AllCarsPage() {
    const searchParams = useSearchParams();
    const router = useRouter(); // Use main router

    // Initialize filters, potentially from URL
    const [filters, setFilters] = useState({
        brand: 'All',
        type: 'All', // New Type Filter
        priceRange: maxPrice,
        seats: 'All',
        engine: 'All',
        search: '',
        startDate: null,
        endDate: null
    });

    // Effect: Handle URL Search Params for "type"
    useEffect(() => {
        const typeParam = searchParams.get('type');
        if (typeParam) {
            setFilters(prev => ({ ...prev, type: typeParam }));
        }
    }, [searchParams]);

    const [sortBy, setSortBy] = useState('default');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const filtered = useMemo(() => {
        let result = cars.filter(car => {
            if (filters.brand !== 'All' && !car.name.startsWith(filters.brand)) return false;
            if (filters.type !== 'All' && car.type !== filters.type) return false;
            if (car.price > filters.priceRange) return false;
            if (filters.seats !== 'All' && car.specs.seats !== +filters.seats) return false;
            if (filters.engine !== 'All' && !car.specs.engine.includes(filters.engine)) return false;
            if (filters.search && !car.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
            return true;
        });

        if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
        if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
        if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
        if (sortBy === 'hp') result.sort((a, b) => b.specs.horsepower - a.specs.horsepower);

        return result;
    }, [filters, sortBy]);

    // Calculate days
    const days = useMemo(() => {
        if (!filters.startDate || !filters.endDate) return 0;
        const diffTime = Math.abs(filters.endDate - filters.startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }, [filters.startDate, filters.endDate]);

    return (
        <div className="flex min-h-screen bg-[#0A0A0A] text-white pt-20">
            <DatePickerModal
                isOpen={isCalendarOpen}
                onClose={() => setIsCalendarOpen(false)}
                filters={filters}
                setFilters={setFilters}
            />

            <Sidebar
                filters={filters}
                setFilters={setFilters}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
                onOpenCalendar={() => setIsCalendarOpen(true)}
            />

            {/* Main Content */}
            <main className="flex-1 p-5 lg:p-8 flex flex-col min-h-screen">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold">
                            <span className="text-purple-400">{filtered.length}</span> vehicles to rent
                        </h1>
                        <p className="text-xs text-gray-500 mt-1">Find your perfect luxury ride</p>
                    </div>

                    <div className="flex items-center gap-3">

                        {/* Mobile filter toggle */}
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] border border-white/5 rounded-xl text-sm hover:border-purple-500/30 transition-colors cursor-pointer"
                        >
                            <FaSlidersH className="w-3.5 h-3.5 text-purple-400" />
                            Filters
                        </button>

                        {/* Sort */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-2 pr-8 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500/30 cursor-pointer"
                            >
                                <option value="default">Default</option>
                                <option value="price-asc">Price: Low → High</option>
                                <option value="price-desc">Price: High → Low</option>
                                <option value="name">Name A-Z</option>
                                <option value="hp">Horsepower</option>
                            </select>
                            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1">
                    <div className="flex gap-6">
                        {/* Car Grid / List */}
                        <div className="flex-1 w-full">
                            {/* Search */}
                            <div className="relative mb-6 sticky top-20 z-20 bg-[#0A0A0A] pb-4 pt-2">
                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 -mt-1 w-4 h-4 text-gray-600" />
                                <input
                                    type="text"
                                    placeholder="Search by brand, model or year..."
                                    value={filters.search}
                                    onChange={(e) => setFilters(f => ({ ...f, search: e.target.value }))}
                                    className="w-full bg-[#121212] border border-white/5 rounded-2xl pl-11 pr-5 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500/20 transition-all"
                                />
                            </div>

                            {/* Grid */}
                            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pb-20">
                                {filtered.map((car, i) => (
                                    <CarCard key={car.id} car={car} index={i} days={days} />
                                ))}
                            </div>

                            {/* Empty State */}
                            {filtered.length === 0 && (
                                <div className="flex flex-col items-center justify-center py-24 text-center">
                                    <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-4">
                                        <FaSearch className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <h2 className="text-lg font-bold mb-1">No vehicles found</h2>
                                    <p className="text-sm text-gray-500 mb-4">Try adjusting your filters</p>
                                    <button
                                        onClick={() => setFilters({ brand: 'All', type: 'All', priceRange: maxPrice, seats: 'All', engine: 'All', search: '', startDate: null, endDate: null })}
                                        className="px-5 py-2 bg-purple-600 text-white text-sm rounded-xl hover:bg-purple-700 transition-colors cursor-pointer"
                                    >
                                        Reset Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
