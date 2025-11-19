"use client";

export default function AboutUs() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F8FAFC] py-24 text-[#0A1A2F]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* LEFT SIDE -------------------------------------------------------- */}
          <div>
            {/* About Us — elegant & minimal */}
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-600"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              About Us
            </h2>
            <div className="relative inline-block mt-1 mb-6">
              <div className="h-[2px] w-40 md:w-48 bg-gradient-to-r from-slate-300 to-transparent rounded-full"></div>
              <span className="absolute -right-1 -top-2 text-[#0057FF]">
                <svg width="32" height="14" viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <g transform="translate(64,0) scale(-1,1)">
                    <path d="M10 18c-2 0-3.5-1.5-3.5-3.5S8 11 10 11h20c4 0 8-6 12-6h6c3 0 6 3 6 6v7c0 1.1-.9 2-2 2H10z" fill="currentColor" opacity="0.9"/>
                    <circle cx="18" cy="20" r="3" fill="#0F172A"/>
                    <circle cx="46" cy="20" r="3" fill="#0F172A"/>
                  </g>
                </svg>
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 bg-gradient-to-r from-[#0057FF] to-[#00C2FF] bg-clip-text text-transparent"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Luxury Car Rental with
              <br />
              Excellence in Service & Quality
            </h1>

            {/* Paragraphs */}
            <p
              className="text-lg mb-5 leading-relaxed text-slate-600/90 max-w-2xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We specialize in premium car rentals in Dubai, offering both residents and visitors an unparalleled driving experience. Our fleet features the latest models, meticulously selected to provide ultimate comfort and style.
            </p>

            <p
              className="text-lg leading-relaxed text-slate-600/90 max-w-2xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Whether you're a UAE resident or a visitor seeking a seamless and luxurious transport solution, we ensure a smooth rental process from booking to delivery, so you can enjoy your journey with ease.
            </p>
          </div>

          {/* RIGHT SIDE -------------------------------------------------------- */}
          <div className="relative w-full flex justify-center md:justify-end">
            {/* Outer container with border and shadow */}
            <div
              className="relative rounded-[32px] overflow-visible"
              style={{
                border: "2px solid #E5E7EB",
                boxShadow: "0 25px 50px rgba(10,26,47,0.12)",
                background: "white",
              }}
            >
              {/* Image container - no padding to eliminate gaps */}
              <div className="relative w-full rounded-[32px] overflow-hidden">
                <img
                  src="/aboutus.png"
                  alt="Mercedes G-Wagon"
                  className="w-full h-[400px] md:h-[450px] object-cover"
                  loading="lazy" decoding="async"
                  style={{ display: "block", margin: 0, padding: 0, verticalAlign: "bottom" }}
                />

                {/* Badge positioned at bottom with NO GAP - inside image */}
                <div 
                  className="absolute left-1/2 -translate-x-1/2 z-20"
                  style={{ 
                    bottom: "28px"
                  }}
                >
                  <div
                    className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0057FF] to-[#00C2FF] backdrop-blur-sm"
                    style={{
                      boxShadow: "0 12px 30px rgba(0,87,255,0.3)",
                      border: "2px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    {/* Avatars */}
                    <div className="flex -space-x-2.5">
                      <div 
                        className="w-11 h-11 rounded-full overflow-hidden shadow-lg"
                        style={{ border: "3px solid white" }}
                      >
                        <img 
                          src="/user1.png" 
                          alt="user1" 
                          className="object-cover w-full h-full" loading="lazy" decoding="async"
                        />
                      </div>
                      <div 
                        className="w-11 h-11 rounded-full overflow-hidden shadow-lg"
                        style={{ border: "3px solid white" }}
                      >
                        <img 
                          src="/user2.png" 
                          alt="user2" 
                          className="object-cover w-full h-full" loading="lazy" decoding="async"
                        />
                      </div>
                      <div 
                        className="w-11 h-11 rounded-full overflow-hidden shadow-lg"
                        style={{ border: "3px solid white" }}
                      >
                        <img 
                          src="/user3.png" 
                          alt="user3" 
                          className="object-cover w-full h-full" loading="lazy" decoding="async"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="text-left">
                      <p
                        className="text-base font-bold leading-tight text-white"
                        style={{ 
                          fontFamily: "Poppins, sans-serif", 
                          marginBottom: "1px"
                        }}
                      >
                        300K+
                      </p>
                      <p
                        className="text-xs leading-tight font-medium text-white/95"
                        style={{ 
                          fontFamily: "Inter, sans-serif", 
                          opacity: 0.95
                        }}
                      >
                        Users in UAE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}