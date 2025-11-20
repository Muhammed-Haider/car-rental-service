"use client";

const cars = [
  {
    id: 1,
    image: "/F1.jpeg",
    name: "Ferrari Roma",
    specs: "2 seats, 612 horse power, 3.9l, 0-100: 3.4sec",
    price: 2940,
    durationPrice: 4900,
  },
  {
    id: 2,
    image: "/F2.jpeg",
    name: "Lamborghini Urus",
    specs: "5 seats, 641 horse power, 4.0l, 0-100: 3.6sec",
    price: 2580,
    durationPrice: 4300,
  },
  {
    id: 3,
    image: "/F3.jpeg",
    name: "McLaren Artura",
    specs: "2 seats, 671 horse power, 3.0l, 0-100: 3.0sec",
    price: 3200,
    durationPrice: 5400,
  },
  {
    id: 4,
    image: "/F4.jpeg",
    name: "Rolls-Royce Cullinan",
    specs: "5 seats, 563 horse power, 6.75l, 0-100: 5.2sec",
    price: 2800,
    durationPrice: 4800,
  },
  {
    id: 5,
    image: "/F5.jpeg",
    name: "McLaren 750S Spider",
    specs: "2 seats, 740 horse power, 4.0l, 0-100: 2.8sec",
    price: 2600,
    durationPrice: 4500,
  },
  {
    id: 6,
    image: "/F6.jpeg",
    name: "Mercedes G63 Black 2025",
    specs: "5 seats, 577 horse power, 4.0l, 0-100: 4.5sec",
    price: 2400,
    durationPrice: 4200,
  },
];

export default function CarListing() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F8FAFC] py-16 md:py-24 text-[#0A1A2F]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-2"
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
                    {car.specs}
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
                  <div className="flex items-center gap-2 text-slate-500 bg-slate-50 w-fit px-3 py-1 rounded-lg">
                    <span
                      className="text-sm font-medium"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Weekly: {car.durationPrice.toLocaleString()} AED
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row gap-3 pt-2">
                  <button
                    className="flex-1 px-4 py-3 bg-white border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl hover:border-[#0057FF] hover:text-[#0057FF] transition-all duration-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Rent
                  </button>
                  <button
                    className="flex-[2] px-4 py-3 bg-[#0057FF] border border-[#0057FF] text-white font-semibold text-sm rounded-xl hover:bg-white hover:text-[#0057FF] transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Details
                  </button>
                  <button
                    className="flex-1 px-4 py-3 bg-white border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl hover:border-[#0057FF] hover:text-[#0057FF] transition-all duration-300"
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

