"use client";
import { useState, useEffect, useRef } from 'react';
import { cars } from '../lib/cardata';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  // Real-time search filtering
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    
    const filtered = cars.filter(car => {
      const carName = car.name.toLowerCase();
      
      // Direct name match
      const nameMatch = carName.includes(query);
      
      // Brand match - check if query matches any brand and car contains that brand
      const brandMatch = 
        (query.includes('bmw') && carName.includes('bmw')) ||
        (query.includes('bentley') && carName.includes('bentley')) ||
        (query.includes('mercedes') && carName.includes('mercedes')) ||
        (query.includes('ferrari') && carName.includes('ferrari')) ||
        (query.includes('lamborghini') && carName.includes('lamborghini')) ||
        (query.includes('mclaren') && carName.includes('mclaren')) ||
        (query.includes('porsche') && carName.includes('porsche')) ||
        (query.includes('audi') && carName.includes('audi')) ||
        (query.includes('rolls') && carName.includes('rolls')) ||
        (query.includes('nissan') && carName.includes('nissan')) ||
        (query.includes('corvette') && carName.includes('corvette')) ||
        (query.includes('range') && carName.includes('range')) ||
        (query.includes('golf') && carName.includes('golf'));
      
      // Partial brand match - if query is "b" and car starts with "b" in brand names
      const partialBrandMatch = 
        (query === 'b' && (carName.includes('bmw') || carName.includes('bentley'))) ||
        (query === 'm' && (carName.includes('mercedes') || carName.includes('mclaren'))) ||
        (query === 'f' && carName.includes('ferrari')) ||
        (query === 'l' && carName.includes('lamborghini')) ||
        (query === 'p' && carName.includes('porsche')) ||
        (query === 'a' && carName.includes('audi')) ||
        (query === 'r' && (carName.includes('rolls') || carName.includes('range'))) ||
        (query === 'n' && carName.includes('nissan')) ||
        (query === 'c' && (carName.includes('corvette') || carName.includes('cullinan')));
      
      // Engine match
      const engineMatch = car.specs.engine.toLowerCase().includes(query);
      
      // Number matches
      const horsepowerMatch = car.specs.horsepower.toString().includes(query);
      const priceMatch = car.price.toString().includes(query);
      const seatsMatch = car.specs.seats.toString().includes(query);
      const accelerationMatch = car.specs.acceleration.toString().includes(query);
      
      return nameMatch || brandMatch || partialBrandMatch || engineMatch || 
             horsepowerMatch || priceMatch || seatsMatch || accelerationMatch;
    }).slice(0, 8);

    setSearchResults(filtered);
    setShowResults(true);
  }, [searchQuery]);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setTimeout(() => {
      setShowResults(false);
    }, 200);
  };

  const handleResultClick = () => {
    setSearchQuery('');
    setShowResults(false);
    setIsFocused(false);
  };

  return (
    <div
      ref={searchRef}
      className="relative w-full max-w-2xl px-2 sm:px-0 z-[70]"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
        {/* Search Bar Group */}
        <div className="flex flex-row items-center w-full sm:w-auto bg-[#444]/60 rounded-full p-1 shadow-lg max-w-full">
          <div className="flex items-center w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Search for Cars"
              className="h-12 w-full bg-transparent rounded-full pl-5 pr-2 text-base sm:text-lg font-medium text-white placeholder:text-white/80 focus:outline-none"
              style={{ minWidth: 0 }}
            />
          </div>
          {/* Arrow Button */}
          <button
            type="button"
            onClick={() => setShowResults(true)}
            className="ml-2 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow transition hover:bg-gray-200 focus:outline-none"
            aria-label="Search"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        {/* View Collection Button */}
        <Link
          href="/#car-listings"
          className="flex items-center justify-center h-12 px-6 bg-white text-black font-semibold text-lg rounded-full shadow transition hover:bg-gray-100 whitespace-nowrap"
        >
          View Collection
        </Link>
      </div>
      {/* ...existing code for dropdown/results... */}

      {/* Elegant Search Results Dropdown */}
      <AnimatePresence>
        {showResults && searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-0 right-0 mt-2 sm:mt-3 bg-[#1A1A1A]/95 backdrop-blur-xl 
                     border border-white/10 rounded-2xl shadow-2xl shadow-black/20 
                     overflow-hidden z-[60]"
          >
            <div className="max-h-64 sm:max-h-96 overflow-y-auto">
              {/* Results Header */}
              <div className="px-4 py-3 border-b border-white/10 bg-gradient-to-r from-[#1A1A1A] to-[#2B2B2B]">
                <p className="text-sm font-medium text-white/90">
                  {searchResults.length} luxury car{searchResults.length !== 1 ? 's' : ''} found
                </p>
              </div>

              {/* Results List */}
              <div className="p-2">
                {searchResults.map((car, index) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/cars/${car.id}`}
                      onClick={handleResultClick}
                      className="block p-3 hover:bg-gradient-to-r hover:from-[#2B2B2B] hover:to-[#1A1A1A] 
                               rounded-xl transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2 sm:gap-4">
                        {/* Car Image */}
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-white/20 group-hover:ring-[#B844E8]/50 transition-colors">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              e.target.src = '/car.jpeg';
                            }}
                          />
                        </div>
                        
                        {/* Car Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs sm:text-sm truncate group-hover:text-[#B844E8] transition-colors">
                            {car.name}
                          </h4>
                          <p className="text-white/70 text-xs truncate mt-0.5">
                            {car.specs.engine} • {car.specs.horsepower}hp • {car.specs.seats} seats
                          </p>
                        </div>
                        
                        {/* Price */}
                        <div className="text-right flex-shrink-0">
                          <p className="font-bold text-white text-xs sm:text-sm">
                            {car.price.toLocaleString()}
                            <span className="text-xs text-white/70 font-normal"> AED/day</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* View All Results */}
              <div className="border-t border-white/10 p-3 bg-gradient-to-r from-[#1A1A1A] to-[#2B2B2B]">
                <Link
                  href="/#car-listings"
                  onClick={handleResultClick}
                  className="block w-full text-center py-2 text-[#B844E8] hover:text-[#9D5FFF] 
                           font-medium text-sm transition-colors"
                >
                  View all luxury cars →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results Message */}
      <AnimatePresence>
        {showResults && searchQuery && searchResults.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-0 right-0 mt-2 sm:mt-3 bg-[#1A1A1A]/95 backdrop-blur-xl 
                     border border-white/10 rounded-2xl shadow-2xl shadow-black/20 p-4 sm:p-6 z-[60]"
          >
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-medium">
                No luxury cars found matching "<span className="text-white">{searchQuery}</span>"
              </p>
              <p className="text-white/60 text-xs mt-1 px-2">Try searching for brands like Ferrari, Lamborghini, or Porsche</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
