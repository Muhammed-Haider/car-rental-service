"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { cars } from '@/lib/cardata';
import { getUserSession } from '@/app/auth/actions';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [currentBookings, setCurrentBookings] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('10:00');
  const router = useRouter();

  const carsPerPage = 6;
  const categories = ['all', 'SUV', 'Sports', 'Luxury', 'Sedan', 'Convertible'];
  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await getUserSession();
        if (!session) { router.push('/signin'); return; }
        setUser(session?.user);
        loadUserData();
      } catch {
        router.push('/signin');
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  const loadUserData = () => {
    const savedFavorites = localStorage.getItem('favoriteCars');
    const savedViewed = localStorage.getItem('recentlyViewed');
    const savedBookings = localStorage.getItem('currentBookings');
    if (savedFavorites) setFavoriteCars(JSON.parse(savedFavorites));
    if (savedViewed) setRecentlyViewed(JSON.parse(savedViewed));
    if (savedBookings) setCurrentBookings(JSON.parse(savedBookings));
  };

  const filteredCars = cars.filter(car => {
    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'SUV' && car.specs?.seats >= 5) ||
      (selectedCategory === 'Sports' && car.specs?.horsepower >= 400) ||
      (selectedCategory === 'Luxury' && car.price >= 1000) ||
      (selectedCategory === 'Sedan' && car.specs?.seats === 4) ||
      (selectedCategory === 'Convertible' && car.specs?.seats === 2);
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const handleFavoriteToggle = (carId) => {
    const newFavorites = favoriteCars.includes(carId)
      ? favoriteCars.filter(id => id !== carId)
      : [...favoriteCars, carId];
    setFavoriteCars(newFavorites);
    localStorage.setItem('favoriteCars', JSON.stringify(newFavorites));
  };

  const handleViewCar = (car) => {
    const newViewed = [car.id, ...recentlyViewed.filter(id => id !== car.id)].slice(0, 5);
    setRecentlyViewed(newViewed);
    localStorage.setItem('recentlyViewed', JSON.stringify(newViewed));
  };

  const handleBookCar = (car) => { setSelectedCar(car); setShowCalendar(true); };

  const handleConfirmBooking = () => {
    const booking = {
      id: Date.now(),
      carId: selectedCar.id,
      carName: selectedCar.name,
      date: selectedDate,
      time: selectedTime,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    const newBookings = [...currentBookings, booking];
    setCurrentBookings(newBookings);
    localStorage.setItem('currentBookings', JSON.stringify(newBookings));
    const message = `Booking confirmed!\n\nCar: ${selectedCar.name}\nDate: ${selectedDate}\nTime: ${selectedTime}\nCustomer: ${user?.user_metadata?.full_name || user?.email}\nEmail: ${user?.email}`;
    window.open(`https://wa.me/971554079239?text=${encodeURIComponent(message)}`, '_blank');
    setShowCalendar(false);
    setSelectedCar(null);
    setSelectedDate('');
    setSelectedTime('10:00');
  };

  const getCarById = (id) => cars.find(car => car.id === id);

  /* ─── Loading ─── */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #1a0a2e 0%, #000000 60%)' }}>
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/20" />
            <div className="absolute inset-0 rounded-full border-t-2 border-[#B844E8] animate-spin" />
            <div className="absolute inset-2 rounded-full border-t-2 border-purple-400/60 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
          </div>
          <p className="text-white/50 text-sm tracking-widest uppercase">Loading Dashboard</p>
        </div>
      </div>
    );
  }

  const firstName = user?.user_metadata?.full_name?.split(' ')[0] || user?.email?.split('@')[0] || 'Driver';

  return (
    <div className="min-h-screen text-white" style={{ background: 'radial-gradient(ellipse at 50% 0%, #12052a 0%, #000000 55%)' }}>

      {/* ── Ambient background orbs ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #B844E8 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(ellipse, #6B4FE8 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* ── Hero Header ── */}
      <div className="relative z-10 pt-20 pb-0">
        <div className="relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(107,79,232,0.15) 0%, rgba(184,68,232,0.08) 100%)', borderBottom: '1px solid rgba(184,68,232,0.2)' }}>
          {/* Shimmer line */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #B844E8, transparent)' }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              {/* Greeting */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 animate-pulse" />
                  <span className="text-white/50 text-xs tracking-widest uppercase">Active Session</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
                  Welcome back, <span style={{ background: 'linear-gradient(135deg, #B844E8 0%, #9D5FFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{firstName}</span>
                </h1>
                <p className="text-white/50 text-sm">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>

              {/* Right side */}
              <div className="flex items-center gap-4">
                {/* Member badge */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,165,0,0.05) 100%)', border: '1px solid rgba(255,215,0,0.25)' }}>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                  </svg>
                  <span className="text-yellow-400 text-sm font-semibold">Premium</span>
                </div>
                {/* Avatar */}
                <div className="relative w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: 'linear-gradient(135deg, #6B4FE8 0%, #B844E8 100%)', boxShadow: '0 0 20px rgba(184,68,232,0.4)' }}>
                  {firstName[0].toUpperCase()}
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* ── Stat Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: 'Active Bookings',
              value: currentBookings.length,
              sub: currentBookings.length === 0 ? 'No active bookings' : 'View below',
              color: '#B844E8',
              bg: 'rgba(184,68,232,0.08)',
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              label: 'Saved Cars',
              value: favoriteCars.length,
              sub: 'Favourited',
              color: '#f43f5e',
              bg: 'rgba(244,63,94,0.08)',
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              ),
            },
            {
              label: 'Recently Viewed',
              value: recentlyViewed.length,
              sub: 'Last session',
              color: '#3b82f6',
              bg: 'rgba(59,130,246,0.08)',
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ),
            },
            {
              label: 'Member Tier',
              value: 'Gold',
              sub: 'Premium access',
              color: '#f59e0b',
              bg: 'rgba(245,158,11,0.08)',
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                </svg>
              ),
            },
          ].map(({ label, value, sub, color, bg, icon }) => (
            <div key={label} className="group relative rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${color}18 0%, transparent 70%)` }} />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white/50 text-xs font-medium tracking-wide uppercase">{label}</p>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: bg, color }}>
                    {icon}
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">{value}</p>
                <p className="text-white/30 text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Current Bookings ── */}
        {currentBookings.length > 0 && (
          <section>
            <SectionHeader title="Your Bookings" count={currentBookings.length} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentBookings.map(booking => (
                <div key={booking.id} className="group relative rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'radial-gradient(circle at 50% 0%, rgba(184,68,232,0.07) 0%, transparent 70%)' }} />
                  <div className="relative flex justify-between items-start">
                    <div className="space-y-1.5">
                      <p className="font-semibold text-white">{booking.carName}</p>
                      <div className="flex items-center gap-1.5 text-white/50 text-sm">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {booking.date} · {booking.time}
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium"
                        style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        {booking.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Search & Filter ── */}
        <div className="space-y-4">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, model, or brand..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white placeholder-white/30 text-sm transition-all outline-none"
              style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)', boxShadow: 'none' }}
              onFocus={e => e.target.style.borderColor = '#B844E8'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button key={cat} onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={selectedCategory === cat
                  ? { background: 'linear-gradient(135deg, #6B4FE8 0%, #B844E8 100%)', color: '#fff', border: '1px solid transparent', boxShadow: '0 4px 15px rgba(107,79,232,0.35)' }
                  : { background: '#111111', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* ── Recently Viewed ── */}
        {recentlyViewed.length > 0 && (
          <section>
            <SectionHeader title="Recently Viewed" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentlyViewed.slice(0, 3).map(carId => {
                const car = getCarById(carId);
                if (!car) return null;
                return (
                  <div key={carId} className="group flex gap-4 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                    style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}
                    onClick={() => { handleViewCar(car); router.push(`/cars/${car.id}`); }}>
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                      <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(0,0,0,0.4) 100%)' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm truncate mb-0.5">{car.name}</h3>
                      <p className="text-white/40 text-xs mb-3">{car.price.toLocaleString()} AED/day</p>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleBookCar(car); }}
                        className="px-3 py-1 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
                        style={{ background: 'linear-gradient(135deg, #6B4FE8 0%, #9D5FFF 100%)', color: '#fff' }}>
                        Book Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ── Available Cars ── */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <SectionHeader title="Available Cars" />
              <p className="text-white/30 text-sm -mt-2">{filteredCars.length} cars found</p>
            </div>
          </div>

          {currentCars.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center"
                style={{ background: 'rgba(184,68,232,0.1)', border: '1px solid rgba(184,68,232,0.2)' }}>
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-white/60 font-medium">No cars found</p>
              <p className="text-white/30 text-sm mt-1">Try a different search or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCars.map(car => (
                <CarCard
                  key={car.id}
                  car={car}
                  isFav={favoriteCars.includes(car.id)}
                  onFav={() => handleFavoriteToggle(car.id)}
                  onBook={() => { handleViewCar(car); handleBookCar(car); }}
                  onDetails={() => { handleViewCar(car); router.push(`/cars/${car.id}`); }}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              <PagBtn onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </PagBtn>
              {[...Array(totalPages)].map((_, i) => {
                const p = i + 1;
                return (
                  <button key={p} onClick={() => setCurrentPage(p)}
                    className="w-9 h-9 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={currentPage === p
                      ? { background: 'linear-gradient(135deg, #6B4FE8 0%, #9D5FFF 100%)', color: '#fff', boxShadow: '0 4px 12px rgba(107,79,232,0.4)' }
                      : { background: '#111111', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {p}
                  </button>
                );
              })}
              <PagBtn onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </PagBtn>
            </div>
          )}
        </section>
      </div>

      {/* ── Booking Modal ── */}
      {showCalendar && selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}>
          <div className="relative w-full max-w-lg rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(145deg, #13091f 0%, #0a0a0a 100%)', border: '1px solid rgba(184,68,232,0.2)', boxShadow: '0 25px 80px rgba(107,79,232,0.3)' }}>

            {/* Top accent line */}
            <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, #B844E8, #6B4FE8, transparent)' }} />

            {/* Close */}
            <button onClick={() => setShowCalendar(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              {/* Car info */}
              <div className="flex items-center gap-4 mb-8 p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = '/car.jpeg'; }} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{selectedCar.name}</h2>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-lg font-bold" style={{ color: '#B844E8' }}>{selectedCar.price.toLocaleString()}</span>
                    <span className="text-white/40 text-sm">AED / day</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-2 tracking-widest uppercase">Select Date</label>
                  <input type="date" value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', colorScheme: 'dark' }}
                    onFocus={e => e.target.style.borderColor = '#B844E8'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-3 tracking-widest uppercase">Preferred Time</label>
                  <div className="grid grid-cols-5 gap-2">
                    {timeSlots.map(time => (
                      <button key={time} onClick={() => setSelectedTime(time)}
                        className="py-2 rounded-xl text-xs font-semibold transition-all duration-150"
                        style={selectedTime === time
                          ? { background: 'linear-gradient(135deg, #6B4FE8 0%, #9D5FFF 100%)', color: '#fff', boxShadow: '0 4px 12px rgba(107,79,232,0.35)' }
                          : { background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                {selectedDate && (
                  <div className="rounded-xl p-4 space-y-2" style={{ background: 'rgba(107,79,232,0.08)', border: '1px solid rgba(107,79,232,0.2)' }}>
                    <p className="text-xs font-semibold text-purple-300/60 tracking-widest uppercase mb-3">Booking Summary</p>
                    {[
                      ['Car', selectedCar.name],
                      ['Date', new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })],
                      ['Time', selectedTime],
                      ['Customer', user?.user_metadata?.full_name || user?.email],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between text-sm">
                        <span className="text-white/40">{k}</span>
                        <span className="text-white/80 font-medium text-right max-w-[65%] truncate">{v}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button onClick={handleConfirmBooking} disabled={!selectedDate}
                  className="w-full py-4 rounded-xl font-bold text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 active:scale-[0.98] shine-button"
                  style={{ background: 'linear-gradient(135deg, #6B4FE8 0%, #B844E8 100%)', boxShadow: '0 8px 25px rgba(107,79,232,0.4)' }}>
                  Confirm Booking via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Sub-components ─── */

function SectionHeader({ title, count }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-1 h-5 rounded-full" style={{ background: 'linear-gradient(180deg, #B844E8 0%, #6B4FE8 100%)' }} />
      <h2 className="text-xl font-bold text-white">{title}</h2>
      {count !== undefined && (
        <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
          style={{ background: 'rgba(184,68,232,0.15)', color: '#D8A5FF', border: '1px solid rgba(184,68,232,0.25)' }}>
          {count}
        </span>
      )}
    </div>
  );
}

function PagBtn({ children, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}
      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
      style={{ background: '#111111', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
      {children}
    </button>
  );
}

function CarCard({ car, isFav, onFav, onBook, onDetails }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl car-card"
      style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.target.src = '/car.jpeg'; }} />
        {/* gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.2) 50%, transparent 100%)' }} />

        {/* Top badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(16,185,129,0.15)', color: '#34d399', border: '1px solid rgba(16,185,129,0.3)', backdropFilter: 'blur(8px)' }}>
            Available
          </span>
          <button onClick={onFav}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <svg className="w-4 h-4 transition-colors" fill={isFav ? '#f43f5e' : 'none'} stroke={isFav ? '#f43f5e' : 'rgba(255,255,255,0.8)'} strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Bottom price tag on image */}
        <div className="absolute bottom-3 left-3">
          <span className="text-2xl font-bold text-white">{car.price.toLocaleString()}</span>
          <span className="text-white/50 text-xs ml-1">AED/day</span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-1 truncate">{car.name}</h3>

        {/* Specs pills */}
        <div className="flex gap-2 flex-wrap mb-4">
          {[
            { icon: '💺', val: `${car.specs.seats} seats` },
            { icon: '⚡', val: `${car.specs.horsepower}hp` },
            { icon: '🔧', val: car.specs.engine },
          ].map(({ icon, val }) => (
            <span key={val} className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs text-white/50"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {icon} {val}
            </span>
          ))}
        </div>

        {/* Weekly price */}
        <p className="text-white/30 text-xs mb-4">Weekly: {car.durationPrice.toLocaleString()} AED</p>

        {/* Actions */}
        <div className="flex gap-2">
          <button onClick={onBook}
            className="flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90 active:scale-[0.97] shine-button"
            style={{ background: 'linear-gradient(135deg, #6B4FE8 0%, #9D5FFF 100%)', color: '#fff', boxShadow: '0 4px 14px rgba(107,79,232,0.3)' }}>
            Book Now
          </button>
          <button onClick={onDetails}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:text-[#B844E8]"
            style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
