"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import RentalModal from './RentalModal';
import { cars } from '../lib/cardata';
import { useHighlight } from '@/context/HighlightContext';

export default function CarListing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRef = useRef(null);
  const { highlight } = useHighlight();
  
  const carsPerPage = 6;
  const totalPages = Math.ceil(cars.length / carsPerPage);
  
  // Get current page cars
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

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
        <section id="car-listings" className="w-full bg-gradient-to-b from-white to-[#F8FAFC] py-16 md:py-24 text-[#0A1A2F]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading Block */}
        <div className="text-center mb-12 md:mb-16">
          {/* Top label */}
          <div className="text-center mb-6">
            <h2
              className="text-2xl md:text-3xl font-bold tracking-[0.15em] text-slate-700 uppercase mb-4"
              style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "0.2em" }}
            >
              Featured Cars
            </h2>

            {/* decorative underline + car icon */}
            <div className="relative inline-block">
              <div className="h-[2px] w-36 md:w-44 bg-gradient-to-r from-[#A3BFFA] via-[#D0E3FF] to-transparent rounded-full"></div>
              <span className="absolute -right-3 -top-3 text-[#0057FF]">
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
              className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              DRIVE LUXURY LIVE FREEDOM
            </p>
            <h3
            className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.02em] mb-6 text-slate-900 px-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Vehicle Fleet
          </h3>

            {/* Supporting paragraph */}
            <p
              className="mx-auto max-w-2xl text-center text-base md:text-lg text-slate-600/90 leading-[1.7] mb-0 px-4"
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
              className="group car-card bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Car Image */}
              <div className="relative w-full h-64 md:h-72 bg-slate-50 overflow-hidden">
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
                    className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-[#0057FF] transition-colors duration-300"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {car.name}
                  </h3>
                  {/* Specs */}
                  <p
                    className="text-sm md:text-base text-slate-500 leading-relaxed font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {car.specs.seats} seats, {car.specs.horsepower}hp, {car.specs.engine}, 0-100: {car.specs.acceleration}s
                  </p>
                </div>

                {/* Pricing Section */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-3xl md:text-4xl font-bold text-slate-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {car.price.toLocaleString()} <span className="text-lg text-slate-400 font-medium">AED</span>
                    </span>
                    <span
                      className="text-sm text-slate-400 font-medium uppercase tracking-wide"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      / day
                    </span>
                  </div>
                  <div className={`flex items-center gap-2 text-slate-500 bg-slate-50 w-fit px-3 py-1 rounded-lg ${highlight ? 'animate-pulse ring-2 ring-blue-500' : ''}`}>
                    <span
                      className="text-sm font-medium"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Weekly: {car.durationPrice.toLocaleString()} AED
                    </span>
                  </div>
                </div>

                {/* Contact Icons - WhatsApp & Call */}
                <div className="flex gap-3 justify-start">
                  {/* Call Button */}
                  <a
                    href="tel:+971554079239"
                    className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-[#0057FF] text-white shadow-lg transition-all duration-200 hover:bg-[#0048d1] hover:scale-110 active:scale-95"
                    aria-label="Call us"
                  >
                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/971554079239"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:bg-[#20BA5A] hover:scale-110 active:scale-95"
                    aria-label="WhatsApp us"
                  >
                    <svg className="h-6 w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
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
                    className="flex-1 px-4 py-3 bg-white border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl hover:border-[#0057FF] hover:text-[#0057FF] transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Rent
                  </button>
                  <Link
                    href={`/cars/${car.id}`}
                    className="shine-button flex-[2] text-center px-4 py-3 bg-[#0057FF] border border-[#0057FF] text-white font-semibold text-sm rounded-xl hover:bg-white hover:text-[#0057FF] transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Details
                  </Link>
                  <Link
                    href="/compare"
                    className="flex-1 text-center px-4 py-3 bg-white border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl hover:border-[#0057FF] hover:text-[#0057FF] transition-all duration-300"
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
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-[#0057FF]'
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
                    ? 'bg-[#0057FF] text-white shadow-lg'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-[#0057FF]'
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
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-[#0057FF]'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <RentalModal car={selectedCar} show={isModalOpen} onClose={closeModal} />
    </section>
  );
}
