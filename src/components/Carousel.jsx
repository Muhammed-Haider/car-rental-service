"use client";
import { useEffect, useRef, useState } from "react";

export default function Carousel() {
  const slides = [
    {
      img: "/rollsroycecarasoul.png",
      title: "ROLLS-ROYCE",
      model: "PHANTOM",
      year: 2022,
      pax: 5,
      miles: 100,
    },
    {
      img: "/rollsroycecarasoul.png",
      title: "ROLLS-ROYCE",
      model: "CULLINA",
      year: 2023,
      pax: 5,
      miles: 100,
    },
    {
      img: "/lambocarasoul.png",
      title: "LAMBORGHINI",
      model: "URUS",
      color: "MATTE BLACK",
      year: 2023,
      pax: 5,
      miles: 100,
    },
    {
      img: "/mercedezcarasoul.png",
      title: "MERCEDES BENZ",
      model: "G63",
      color: "GUNMETAL",
      year: 2024,
      pax: 5,
      miles: 100,
    },
    {
      img: "/lambocarasoul.png",
      title: "LAMBORGHINI",
      model: "REVUELTO",
      color: "NERO NOCTIS",
      year: 2024,
      pax: 2,
      miles: 100,
    },
  ];

  const trackRef = useRef(null);
  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardWidth, setCardWidth] = useState(340);
  const autoplayRef = useRef(null);
  const pointerRef = useRef({ startX: 0, currentX: 0, dragging: false });

  // Cloned slides for seamless loop
  const extended = [slides[slides.length - 1], ...slides, slides[0]];

  // Responsive sizing on mount and resize
  useEffect(() => {
    const updateCardWidth = () => {
      const container = trackRef.current?.parentElement;
      if (!container) return;
      const w = container.clientWidth;
      let cw = 340;
      if (w < 640) cw = Math.round(w * 0.85);
      else if (w < 1024) cw = 300;
      setCardWidth(cw);
      requestAnimationFrame(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          trackRef.current.style.transform = `translateX(${-cw * current}px)`;
        }
      });
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  function startAutoplay() {
    stopAutoplay();
    autoplayRef.current = setInterval(() => moveTo(current + 1), 4000);
  }

  function stopAutoplay() {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }

  function moveTo(index) {
    if (isAnimating) return;
    setIsAnimating(true);
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = "transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    track.style.transform = `translateX(${-cardWidth * index}px)`;
    setCurrent(index);

    const onEnd = () => {
      track.removeEventListener("transitionend", onEnd);
      setIsAnimating(false);
      if (index === 0) {
        track.style.transition = "none";
        track.style.transform = `translateX(${-cardWidth * slides.length}px)`;
        setCurrent(slides.length);
      } else if (index === slides.length + 1) {
        track.style.transition = "none";
        track.style.transform = `translateX(${-cardWidth * 1}px)`;
        setCurrent(1);
      }
    };
    track.addEventListener("transitionend", onEnd);
  }

  function prev() {
    moveTo(current - 1);
  }

  function next() {
    moveTo(current + 1);
  }

  // Touch/drag support
  function onPointerDown(e) {
    stopAutoplay();
    pointerRef.current.dragging = true;
    pointerRef.current.startX = e.clientX ?? e.touches?.[0].clientX;
    pointerRef.current.currentX = pointerRef.current.startX;
    if (trackRef.current) trackRef.current.style.transition = "none";
  }

  function onPointerMove(e) {
    if (!pointerRef.current.dragging) return;
    const x = e.clientX ?? e.touches?.[0].clientX;
    const dx = x - pointerRef.current.startX;
    pointerRef.current.currentX = x;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-cardWidth * current + dx}px)`;
    }
  }

  function onPointerUp() {
    if (!pointerRef.current.dragging) return;
    pointerRef.current.dragging = false;
    const dx = pointerRef.current.currentX - pointerRef.current.startX;
    if (dx > 50) {
      prev();
    } else if (dx < -50) {
      next();
    } else {
      moveTo(current);
    }
    startAutoplay();
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-black via-black to-slate-950 py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-white" style={{ fontFamily: "var(--font-heading)" }}>
            THE FLEET
          </h2>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel container */}
        <div className="relative overflow-hidden rounded-3xl">
          <div
            ref={trackRef}
            className="flex gap-6 touch-pan-y will-change-transform"
            onMouseDown={onPointerDown}
            onMouseMove={onPointerMove}
            onMouseUp={onPointerUp}
            onMouseLeave={onPointerUp}
            onTouchStart={onPointerDown}
            onTouchMove={onPointerMove}
            onTouchEnd={onPointerUp}
            style={{
              transform: `translateX(${-cardWidth * current}px)`,
            }}
          >
            {extended.map((slide, idx) => (
              <article
                key={idx}
                className="group relative flex-shrink-0 transition-transform"
                style={{ width: `${cardWidth}px` }}
              >
                {/* Card wrapper with elevated effect */}
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-slate-900 via-black to-slate-950 border border-white/10 shadow-2xl overflow-hidden">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Image container */}
                  <div className="relative h-56 md:h-64 overflow-hidden flex items-center justify-center bg-black/40">
                    <img
                      src={slide.img}
                      alt={`${slide.title} ${slide.model}`}
                      className="h-full w-full object-contain drop-shadow-lg"
                      loading="eager"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 text-center">
                    {/* Title & Model */}
                    <h3 className="text-xs md:text-sm font-light tracking-widest text-white/90 uppercase">
                      {slide.title}
                    </h3>
                    <h4 className="mt-2 text-lg md:text-xl font-light tracking-wider text-white uppercase">
                      {slide.model}
                    </h4>

                    {/* Color indicator (if present) */}
                    {slide.color && (
                      <p className="mt-2 text-xs text-white/60 uppercase tracking-wide">{slide.color}</p>
                    )}

                    {/* Specs row */}
                    <div className="mt-6 flex items-center justify-between gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-sm">
                      <div className="flex-1 text-center">
                        <p className="text-sm md:text-base font-light text-white">{slide.year}</p>
                        <p className="text-xs text-white/50 uppercase tracking-wide">Year</p>
                      </div>
                      <div className="w-px h-4 bg-white/20" />
                      <div className="flex-1 text-center">
                        <p className="text-sm md:text-base font-light text-white">{slide.pax}</p>
                        <p className="text-xs text-white/50 uppercase tracking-wide">Passengers</p>
                      </div>
                      <div className="w-px h-4 bg-white/20" />
                      <div className="flex-1 text-center">
                        <p className="text-sm md:text-base font-light text-white">{slide.miles}</p>
                        <p className="text-xs text-white/50 uppercase tracking-wide">Miles/Day</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile nav buttons */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 md:hidden z-10">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur text-white hover:bg-white/20"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 md:hidden z-10">
            <button
              onClick={next}
              aria-label="Next slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur text-white hover:bg-white/20"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Pagination dots (optional) */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => moveTo(i + 1)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                current === i + 1 ? "bg-white w-8" : "bg-white/30 w-2 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
