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
        if (!session) {
          // For now, allow access without auth as requested
          // router.push('/signin');
        }
        setUser(session?.user || { email: 'guest@example.com', user_metadata: { full_name: 'Guest User' } });
        loadUserData();
      } catch (error) {
        console.error('Auth check failed:', error);
        // Continue with guest user
        setUser({ email: 'guest@example.com', user_metadata: { full_name: 'Guest User' } });
        loadUserData();
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
    const matchesCategory = selectedCategory === 'all' || 
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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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

  const handleBookCar = (car) => {
    setSelectedCar(car);
    setShowCalendar(true);
  };

  const handleConfirmBooking = () => {
    const booking = {
      id: Date.now(),
      carId: selectedCar.id,
      carName: selectedCar.name,
      date: selectedDate,
      time: selectedTime,
      status: 'pending',
      createdAt: new Date().toISOString()
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#0D0D0D] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#0D0D0D] text-white pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] py-8 px-8 shadow-lg mt-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Customer Dashboard</h1>
            <p className="text-white/90 text-lg">Welcome back, {user?.user_metadata?.full_name || user?.email}</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm text-white/80">Member Status</p>
              <p className="font-semibold text-yellow-400 text-lg">Premium</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Current Bookings</p>
                <p className="text-2xl font-bold text-white">{currentBookings.length}</p>
              </div>
              <div className="w-12 h-12 bg-[#B844E8]/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#B844E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Favorite Cars</p>
                <p className="text-2xl font-bold text-white">{favoriteCars.length}</p>
              </div>
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Recently Viewed</p>
                <p className="text-2xl font-bold text-white">{recentlyViewed.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Member Tier</p>
                <p className="text-2xl font-bold text-yellow-400">Premium</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm2.86-2h8.28l.96-5.81-3.92 3.42L12 7.4l-1.18 4.21-3.92-3.42.96 5.81z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Current Bookings */}
        {currentBookings.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Current Bookings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentBookings.map(booking => (
                <div key={booking.id} className="bg-[#1A1A1A] rounded-xl p-4 border border-white/10">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{booking.carName}</p>
                      <p className="text-sm text-white/60">{booking.date} at {booking.time}</p>
                      <span className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full mt-2">
                        {booking.status}
                      </span>
                    </div>
                    <button className="text-red-400 hover:text-red-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-[#B844E8] focus:ring-2 focus:ring-[#B844E8]/50 transition-all"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] text-white'
                      : 'bg-[#1A1A1A] border border-white/20 text-white hover:border-[#B844E8]'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        {recentlyViewed.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Recently Viewed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentlyViewed.slice(0, 3).map(carId => {
                const car = getCarById(carId);
                if (!car) return null;
                return (
                  <div key={carId} className="bg-[#1A1A1A] rounded-xl p-4 border border-white/10 hover:border-[#B844E8]/30 transition-all">
                    <div className="flex gap-4">
                      <img src={car.image} alt={car.name} className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{car.name}</h3>
                        <p className="text-sm text-white/60">{car.price} AED/day</p>
                        <button
                          onClick={() => handleBookCar(car)}
                          className="mt-2 px-3 py-1 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] text-white text-sm rounded-lg hover:opacity-90"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Available Cars */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Cars</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentCars.map((car) => (
              <div key={car.id} className="bg-[#1A1A1A] rounded-2xl border border-white/10 overflow-hidden hover:border-[#B844E8]/30 transition-all duration-300">
                {/* Car Image */}
                <div className="relative h-48 bg-[#2B2B2B]">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/car.jpeg';
                    }}
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => handleFavoriteToggle(car.id)}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30"
                    >
                      <svg className={`w-4 h-4 ${favoriteCars.includes(car.id) ? 'text-red-500 fill-current' : 'text-white'}`} fill={favoriteCars.includes(car.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <span className="bg-[#B844E8]/20 text-[#D8A5FF] px-3 py-1 rounded-full text-sm font-medium border border-[#B844E8]/30">
                      Available
                    </span>
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{car.name}</h3>
                  <p className="text-white/70 text-sm mb-4">
                    {car.specs.seats} seats • {car.specs.horsepower}hp • {car.specs.engine}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-white">{car.price.toLocaleString()}</span>
                      <span className="text-white/60 text-sm">AED / day</span>
                    </div>
                    <div className="text-sm text-white/60 mt-1">
                      Weekly: {car.durationPrice.toLocaleString()} AED
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        handleViewCar(car);
                        handleBookCar(car);
                      }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={() => {
                        handleViewCar(car);
                        router.push(`/cars/${car.id}`);
                      }}
                      className="flex-1 px-4 py-2 bg-[#1A1A1A] border border-white/20 text-white font-semibold rounded-xl hover:border-[#B844E8] hover:text-[#B844E8] transition-all duration-300"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                currentPage === 1 
                  ? 'bg-white/10 text-white/50 cursor-not-allowed' 
                  : 'bg-[#1A1A1A] border border-white/20 text-white hover:bg-[#2B2B2B] hover:border-[#B844E8]'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-semibold transition-all duration-200 ${
                    currentPage === pageNumber
                      ? 'bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] text-white shadow-lg'
                      : 'bg-[#1A1A1A] border border-white/20 text-white hover:bg-[#2B2B2B] hover:border-[#B844E8]'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            
            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                currentPage === totalPages 
                  ? 'bg-white/10 text-white/50 cursor-not-allowed' 
                  : 'bg-[#1A1A1A] border border-white/20 text-white hover:bg-[#2B2B2B] hover:border-[#B844E8]'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Booking Calendar Modal */}
      {showCalendar && selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div className="relative m-4 w-full max-w-2xl rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
            {/* Close Button */}
            <button
              onClick={() => setShowCalendar(false)}
              className="absolute -top-4 -right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm text-white transition-all hover:from-white/30 hover:to-white/20 hover:scale-110 active:scale-95 shadow-lg border border-white/20"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white leading-tight mb-4">
                  Book {selectedCar.name}
                </h2>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-2xl font-bold text-white">{selectedCar.price} AED</span>
                  <span className="text-white/60">per day</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-[#B844E8] focus:ring-2 focus:ring-[#B844E8]/50 transition-all"
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Preferred Time</label>
                  <div className="grid grid-cols-5 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 rounded-xl font-medium transition-all duration-200 ${
                          selectedTime === time
                            ? 'bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] text-white shadow-lg'
                            : 'bg-[#1A1A1A] border border-white/20 text-white hover:border-[#B844E8]'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Booking Summary */}
                {selectedDate && (
                  <div className="bg-[#1A1A1A] rounded-xl p-4 border border-white/10">
                    <h3 className="font-semibold text-white mb-2">Booking Summary</h3>
                    <div className="space-y-1 text-sm text-white/80">
                      <p>Car: {selectedCar.name}</p>
                      <p>Date: {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <p>Time: {selectedTime}</p>
                      <p>Customer: {user?.user_metadata?.full_name || user?.email}</p>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleConfirmBooking}
                  disabled={!selectedDate}
                  className="w-full rounded-xl bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] py-4 text-center text-lg font-bold text-white transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}