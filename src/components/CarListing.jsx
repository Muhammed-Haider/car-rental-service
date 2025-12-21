"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import RentalModal from './RentalModal';
import { cars } from '../lib/cardata';
import { useHighlight } from '@/context/HighlightContext';

export default function CarListing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const paginationRef = useRef(null);
  const { highlight } = useHighlight();
  
  const carsPerPage = 6;
  const totalPages = Math.ceil(cars.length / carsPerPage);
  
  // Get current page cars or all cars
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = showAll ? cars : cars.slice(indexOfFirstCar, indexOfLastCar);

  const openModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  // Store scroll position before page change
  const handlePageChange = (newPage) => {
    // Store current scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Change page
    setCurrentPage(newPage);
    
    // Use requestAnimationFrame to ensure DOM is updated before restoring scroll
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPosition);
      
      // Double-check after a small delay to ensure it stays
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 50);
    });
  };

  useEffect(() => {
    const cards = document.querySelectorAll('.car-card');
    const handleMouseMove = (e) => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [currentPage]);
  return (
        <section id="car-listings" className="w-full bg-gradient-to-b from-[#000000] to-[#0D0D0D] py-16 md:py-24 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading Block */}
        <div className="text-center mb-12 md:mb-16">
          {/* Top label */}
          <div className="text-center mb-6">
            <h2
              className="text-2xl md:text-3xl font-bold tracking-[0.15em] text-white/80 uppercase mb-4"
              style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "0.2em" }}
            >
              Featured Cars
            </h2>

            {/* decorative underline + car icon */}
            <div className="relative inline-block mx-auto sm:mx-0">
              <div className="h-[2px] w-36 md:w-44 bg-gradient-to-r from-[#8B3FBF] via-[#B844E8] to-transparent rounded-full"></div>
              <span className="absolute -right-3 -top-3 text-[#B844E8] sm:right-auto sm:left-1/2 sm:-translate-x-1/2">
                <svg
                  width="32"
                  height="14"
                  viewBox="0 0 64 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g transform="translate(64,0) scale(-1,1)">
                    <path
                      d="M10 18c-2 0-3.5-1.5-3.5-3.5S8 11 10 11h20c4 0 8-6 12-6h6c3 0 6 3 6 6v7c0 1.1-.9 2-2 2H10z"
                      fill="currentColor"
                      opacity="0.95"
                    />
                    <circle cx="18" cy="20" r="3" fill="#0F172A" />
                    <circle cx="46" cy="20" r="3" fill="#0F172A" />
                  </g>
                </svg>
              </span>
            </div>
          </div>

          {/* Main headline */}
          <div className="text-center mb-12 md:mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              DRIVE LUXURY LIVE FREEDOM
            </p>
            <h3
            className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.02em] mb-6 text-white px-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Vehicle Fleet
          </h3>

            {/* Supporting paragraph */}
            <p
              className="mx-auto max-w-2xl text-center text-base md:text-lg text-white/80 leading-[1.7] mb-0 px-4"
              style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.01em" }}
            >
              Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 min-h-[800px]">
          {currentCars.map((car) => (
            <div
              key={car.id}
              className="group car-card bg-[#1A1A1A] rounded-3xl shadow-sm hover:shadow-2xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Car Image */}
              <div className="relative w-full h-64 md:h-72 bg-[#2B2B2B] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/car.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Car Name */}
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight group-hover:text-[#B844E8] transition-colors duration-300"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {car.name}
                  </h3>
                  {/* Specs */}
                  <p
                    className="text-sm md:text-base text-white/70 leading-relaxed font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {car.specs.seats} seats, {car.specs.horsepower}hp, {car.specs.engine}, 0-100: {car.specs.acceleration}s
                  </p>
                </div>

                {/* Pricing Section */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-3xl md:text-4xl font-bold text-white"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {car.price.toLocaleString()} <span className="text-lg text-white/60 font-medium">AED</span>
                    </span>
                    <span
                      className="text-sm text-white/60 font-medium uppercase tracking-wide"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      / day
                    </span>
                  </div>
                  <motion.div
                    className="relative flex items-center gap-2 text-white/70 bg-[#2B2B2B] w-fit px-3 py-1 rounded-lg"
                    animate={highlight ? "highlighted" : "initial"}
                    variants={{
                      initial: { scale: 1, zIndex: 1, boxShadow: '0px 0px 0px rgba(0,0,0,0)' },
                      highlighted: { scale: 1.25, zIndex: 20, boxShadow: '0px 15px 25px rgba(0,0,0,0.15)' },
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Weekly: {car.durationPrice.toLocaleString()} AED
                    </span>
                  </motion.div>
                </div>

                {/* Contact Icons - WhatsApp & Call */}
                <div className="flex gap-3 justify-start relative z-20">
                  {/* Call Button */}
                  <a
                    href="tel:+971554079239"
                    onClick={(e) => e.stopPropagation()}
                    className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-[#007AFF] text-white shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                    aria-label="Call us"
                  >
                    <FaPhoneAlt className="w-4 h-4 md:w-5 md:h-5" />
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/971554079239"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                    aria-label="WhatsApp us"
                  >
                    <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row gap-3 pt-2 relative z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Rent button clicked for:', car.name);
                      openModal(car);
                    }}
                    className="flex-1 px-4 py-3 bg-[#1A1A1A] border border-white/20 text-white font-semibold text-sm rounded-xl hover:border-[#B844E8] hover:text-[#B844E8] transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 cursor-pointer"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Rent
                  </button>
                  <Link
                    href={`/cars/${car.id}`}
                    className="shine-button flex-[2] text-center px-4 py-3 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] border border-[#6B4FE8] text-white font-semibold text-sm rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Details
                  </Link>
                  <Link
                    href="/compare"
                    className="flex-1 text-center px-4 py-3 bg-[#1A1A1A] border border-white/20 text-white font-semibold text-sm rounded-xl hover:border-[#B844E8] hover:text-[#B844E8] transition-all duration-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Compare
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        {!showAll && (
        <div ref={paginationRef} className="flex justify-center items-center mt-12 space-x-2">
          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handlePageChange(Math.max(currentPage - 1, 1));
              return false;
            }}
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
          
          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handlePageChange(pageNumber);
                  return false;
                }}
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
          
          {/* Next Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handlePageChange(Math.min(currentPage + 1, totalPages));
              return false;
            }}
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
        )}

        {/* View All Cars Button */}
        {!showAll && (
          <div className="flex justify-center mt-12 md:mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-3.5 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] border border-[#6B4FE8] text-white font-semibold text-base md:text-lg rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              View All Cars
            </button>
          </div>
        )}
      </div>
      <RentalModal car={selectedCar} show={isModalOpen} onClose={closeModal} />
    </section>
  );
}
