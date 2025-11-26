import SectionHeading from "./SectionHeading";

const galleryImages = [
  { src: "/gallery/ferrari-sf90.jpg", alt: "Ferrari SF90" },
  { src: "/gallery/lamborghini-huracan.jpg", alt: "Lamborghini Huracan" },
  { src: "/gallery/porsche-911.jpg", alt: "Porsche 911" },
  { src: "/gallery/rolls-royce-cullinan.jpg", alt: "Rolls Royce Cullinan" },
  { src: "/gallery/mercedes-g-wagon.jpg", alt: "Mercedes G-Wagon" },
  { src: "/gallery/bentley-continental.jpg", alt: "Bentley Continental" },
  { src: "/gallery/mclaren-720s.jpg", alt: "McLaren 720s" },
  { src: "/gallery/audi-r8.jpg", alt: "Audi R8" },
];

export default function GallerySection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F8FAFC] py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading highlight="Cars">
          Our
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-xl group">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
