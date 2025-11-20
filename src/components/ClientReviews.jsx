"use client";

export default function ClientReviews() {
    const testimonials = [
        {
            id: 1,
            image: "/testimonial1.jpeg",
            name: "Michael Chen",
            title: "Travel Blogger",
            review: "Amazing experience! Professional team, luxury cars, and great prices. The booking process was smooth, and customer support was excellent throughout my rental period.",
        },
        {
            id: 2,
            image: "/testimonial2.jpeg",
            name: "Sarah Johnson",
            title: "Business Executive",
            review: "Excellent service! The car was in perfect condition, and the pickup process was seamless. Highly recommend for anyone looking for a premium rental experience in Dubai!",
        },
        {
            id: 3,
            image: "/testimonial3.jpeg",
            name: "Ahmed Al-Rashid",
            title: "Entrepreneur",
            review: "Highly recommended! Top-notch service with a fantastic selection of luxury vehicles. The staff was friendly and helpful. Will definitely rent again on my next visit to Dubai!",
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] py-16 md:py-24">
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#0057FF]/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0057FF]/5 blur-3xl" />

            <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 md:mb-16 text-center">
                    <p className="text-sm md:text-base text-[#0057FF] font-semibold uppercase tracking-wider mb-3 md:mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                        TESTIMONIALS
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                        Client Reviews
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
                        See what our satisfied customers have to say about their experience
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="group relative overflow-hidden rounded-2xl h-[400px] md:h-[450px] shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            {/* Background Image */}
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                            {/* Quote Icon */}
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg z-10">
                                <svg className="h-6 w-6 text-[#0057FF]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                                {/* Review Text */}
                                <p className="text-sm md:text-base text-white leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                                    "{testimonial.review}"
                                </p>

                                {/* Client Info */}
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-white/80" style={{ fontFamily: "Inter, sans-serif" }}>
                                        {testimonial.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
