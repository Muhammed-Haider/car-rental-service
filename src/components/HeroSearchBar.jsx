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
      {/* Elegant Search Input with Zoom Animation */}
      <motion.div
        animate={{
          scale: isFocused && window.innerWidth >= 640 ? 1.25 : 1,
          transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
        }}
        className="relative"
      >
        <div className="relative group">
          {/* Search Icon */}
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white/70 transition-colors duration-300"
              animate={{
                color: isFocused ? "#ffffff" : "#ffffff70"
              }}
            >
              <path
                d="M21 21l-3.5-3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
            </motion.svg>
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search luxury cars, models, or brands..."
            className={`
              h-10 sm:h-12 w-full rounded-full pl-10 sm:pl-12 pr-28 sm:pr-36 
              text-xs sm:text-sm font-bold
              placeholder:text-[#9D5FFF] placeholder:font-bold shadow-lg ring-1 ring-white/20 backdrop-blur-md
              transition-all duration-400 ease-out focus:outline-none
              ${isFocused 
                ? 'bg-white/95 text-[#6B4FE8] ring-2 ring-[#B844E8] shadow-2xl shadow-purple-500/25' 
                : 'bg-white/90 text-[#9D5FFF] hover:bg-white hover:ring-white/30'
              }
            `}
          />

          {/* Search Button */}
          <motion.button
            type="button"
            onClick={() => setShowResults(true)}
            className={`
              absolute right-2 top-1/2 -translate-y-1/2 inline-flex 
              h-7 sm:h-9 items-center justify-center rounded-full 
              px-2 sm:px-4 text-xs sm:text-sm font-medium text-white shadow-md 
              transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/70
              ${isFocused 
                ? 'bg-[#6B4FE8] hover:bg-[#8B3FBF]' 
                : 'bg-[#B844E8] hover:bg-[#6B4FE8]'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.button>

          {/* Clear Button */}
          <AnimatePresence>
            {searchQuery && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSearchQuery('')}
                className="absolute right-12 sm:right-16 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              >
                <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

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
