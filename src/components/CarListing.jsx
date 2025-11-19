"use client";

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
    <section className="w-full bg-gradient-to-b from-white to-[#F8FAFC] py-16 md:py-24 text-[#0A1A2F]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_6px_18px_rgba(2,6,23,0.06)] ring-1 ring-slate-200/70 transition-all duration-300 hover:shadow-[0_12px_24px_rgba(2,6,23,0.12)] hover:-translate-y-1"
            >
              {/* Car Image */}
              <div className="relative w-full h-64 md:h-72 bg-slate-100 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/car.jpeg';
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 space-y-5">
                {/* Car Name */}
                <h3
                  className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {car.name}
                </h3>

                {/* Specs */}
                <p
                  className="text-sm md:text-base text-slate-600 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {car.specs}
                </p>

                {/* Pricing Section */}
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-3xl md:text-4xl font-bold text-[#0057FF]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      from {car.price.toLocaleString()}AED
                    </span>
                    <span
                      className="text-sm text-slate-500"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      per day
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-sm md:text-base text-slate-600"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
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
                    className="flex items-center justify-center w-12 h-12 bg-[#0057FF] rounded-full hover:bg-[#0048d1] transition-colors duration-200 shadow-md"
                    aria-label="Call"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200 shadow-md"
                    aria-label="WhatsApp"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row gap-3 pt-2">
                  <button
                    className="flex-1 px-4 py-2.5 bg-transparent border border-[#0057FF] text-[#0057FF] font-semibold text-sm rounded-lg hover:bg-[#0057FF]/10 transition-all duration-200"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Rent
                  </button>
                  <button
                    className="flex-1 px-4 py-2.5 bg-[#0057FF] text-white font-semibold text-sm rounded-lg hover:bg-[#0048d1] transition-colors duration-200 shadow-md"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Details
                  </button>
                  <button
                    className="flex-1 px-4 py-2.5 bg-transparent border border-[#0057FF] text-[#0057FF] font-semibold text-sm rounded-lg hover:bg-[#0057FF]/10 transition-all duration-200"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
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

