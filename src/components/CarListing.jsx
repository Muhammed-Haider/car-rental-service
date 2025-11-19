"use client";

import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const cars = [
  {
    id: 1,
    image: "/F1.jpeg",
    name: "McLaren 750S Spider",
    specs: "2 seats, 740 horse power, 4.0l, 0-100: 2.8sec",
    price: 2940,
    durationPrice: 4900,
  },
  {
    id: 2,
    image: "/F2.jpeg",
    name: "McLaren 720S Spider TopCar",
    specs: "2 seats, 710 horse power, 4.0l, 0-100: 2.9sec",
    price: 2580,
    durationPrice: 4300,
  },
  {
    id: 3,
    image: "/F3.jpeg",
    name: "Ferrari 488 Spider",
    specs: "2 seats, 660 horse power, 3.9l, 0-100: 3.0sec",
    price: 3200,
    durationPrice: 5400,
  },
  {
    id: 4,
    image: "/F4.jpeg",
    name: "Lamborghini Huracán Spyder",
    specs: "2 seats, 640 horse power, 5.2l, 0-100: 3.1sec",
    price: 2800,
    durationPrice: 4800,
  },
  {
    id: 5,
    image: "/F5.jpeg",
    name: "Porsche 911 Turbo S",
    specs: "2 seats, 650 horse power, 3.8l, 0-100: 2.7sec",
    price: 2600,
    durationPrice: 4500,
  },
  {
    id: 6,
    image: "/F6.jpeg",
    name: "Aston Martin Vantage Roadster",
    specs: "2 seats, 510 horse power, 4.0l, 0-100: 3.6sec",
    price: 2400,
    durationPrice: 4200,
  },
];

export default function CarListing() {
  return (
    <section className="w-full bg-gradient-to-b from-amber-50 to-slate-900 py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Car Image */}
              <div className="relative w-full h-64 md:h-80 bg-slate-800">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 space-y-4">
                {/* Car Name */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {car.name}
                </h3>

                {/* Specs */}
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  {car.specs}
                </p>

                {/* Pricing Section */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-bold text-teal-400">
                      from {car.price.toLocaleString()}AED
                    </span>
                    <span className="text-sm text-slate-400">per day</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm md:text-base text-slate-400">
                      1-3 days: {car.durationPrice.toLocaleString()}AED
                    </span>
                    <svg
                      className="w-4 h-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Contact Icons */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center justify-center w-11 h-11 bg-teal-500 rounded-full hover:bg-teal-600 transition-colors duration-200"
                    aria-label="Call"
                  >
                    <FiPhone className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-5 h-5 text-white" />
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row gap-3 pt-3">
                  <button className="flex-1 px-4 py-2.5 bg-transparent border border-teal-500 text-white font-semibold text-sm rounded-lg hover:bg-teal-500/10 transition-all duration-200">
                    Rent
                  </button>
                  <button className="flex-1 px-4 py-2.5 bg-teal-500 text-white font-semibold text-sm rounded-lg hover:bg-teal-600 transition-colors duration-200">
                    Details
                  </button>
                  <button className="flex-1 px-4 py-2.5 bg-transparent border border-teal-500 text-white font-semibold text-sm rounded-lg hover:bg-teal-500/10 transition-all duration-200">
                    Compare
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

