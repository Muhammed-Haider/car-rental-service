"use client";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-20 text-[#0A1A2F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE -------------------------------------------------------- */}
          <div>
            {/* About Us — elegant & minimal */}
            <h2
              className="text-3xl md:text-4xl font-medium tracking-tight mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              About Us
            </h2>

            {/* Main heading */}
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
              style={{ fontFamily: "Poppins, sans-serif", color: "#0057FF" }}
            >
              Luxury Car Rental with
              <br />
              Excellence in Service & Quality
            </h1>

            {/* Paragraphs */}
            <p
              className="text-lg mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We specialize in premium car rentals in Dubai, offering both residents and visitors an unparalleled driving experience. Our fleet features the latest models, meticulously selected to provide ultimate comfort and style.
            </p>

            <p
              className="text-lg"
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
                    className="flex items-center gap-3 px-6 py-3.5 rounded-full"
                    style={{
                      backgroundColor: "#0057FF",
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
                          className="object-cover w-full h-full" 
                        />
                      </div>
                      <div 
                        className="w-11 h-11 rounded-full overflow-hidden shadow-lg"
                        style={{ border: "3px solid white" }}
                      >
                        <img 
                          src="/user2.png" 
                          alt="user2" 
                          className="object-cover w-full h-full" 
                        />
                      </div>
                      <div 
                        className="w-11 h-11 rounded-full overflow-hidden shadow-lg"
                        style={{ border: "3px solid white" }}
                      >
                        <img 
                          src="/user3.png" 
                          alt="user3" 
                          className="object-cover w-full h-full" 
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="text-left">
                      <p
                        className="text-base font-bold leading-tight"
                        style={{ 
                          fontFamily: "Poppins, sans-serif", 
                          color: "#FFFFFF",
                          marginBottom: "1px"
                        }}
                      >
                        300K+
                      </p>
                      <p
                        className="text-xs leading-tight font-medium"
                        style={{ 
                          fontFamily: "Inter, sans-serif", 
                          color: "#FFFFFF",
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