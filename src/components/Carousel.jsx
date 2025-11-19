"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Carousel() {
  const slides = [
    {
      img: "/lamborghini-hero.png",
      title: "Lamborghini Urus",
      color: "Matte Black",
      year: 2023,
      pax: 5,
      miles: 100,
    },
    {
      img: "/rolls-royce.png",
      title: "Rolls-Royce Cullina",
      color: "Gunmetal",
      year: 2023,
      pax: 5,
      miles: 100,
    },
    {
      img: "/mercedes.png",
      title: "Mercedes Benz G63",
      color: "Gunmetal",
      year: 2024,
      pax: 5,
      miles: 100,
    },
    {
      img: "/bentley.png",
      title: "Bentley Bentayga",
      color: "Alpine Green",
      year: 2024,
      pax: 4,
      miles: 100,
    },
    {
      img: "/porsche.png",
      title: "Porsche 911",
      color: "Black",
      year: 2022,
      pax: 4,
      miles: 100,
    },
  ];

  const trackRef = useRef(null);
  const [current, setCurrent] = useState(1); // start from first real slide when using clones
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);
  const autoplayRef = useRef(null);
  const pointer = useRef({ startX: 0, currentX: 0, dragging: false });

  // Prepare slides with clones for seamless loop
  const extended = [slides[slides.length - 1], ...slides, slides[0]];

  useEffect(() => {
    const resize = () => {
      const container = trackRef.current?.parentElement;
      if (!container) return;
      const w = container.clientWidth;
      // card size responsive: mobile smaller
      const cw = w < 640 ? Math.round(w * 0.8) : w < 1024 ? 300 : 340;
      setCardWidth(cw);
      // set initial translate to show first real slide
      requestAnimationFrame(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          trackRef.current.style.transform = `translateX(${-cw * current}px)`;
        }
      });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  function startAutoplay() {
    stopAutoplay();
    autoplayRef.current = setInterval(() => moveTo(current + 1), 3500);
  }
  function stopAutoplay() {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }

  function moveTo(index) {
    if (isAnimating) return;
    setIsAnimating(true);
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = "transform 500ms cubic-bezier(.2,.9,.2,1)";
    track.style.transform = `translateX(${-cardWidth * index}px)`;
    setCurrent(index);
    // after transition handle loop reset
    const onEnd = () => {
      track.removeEventListener("transitionend", onEnd);
      setIsAnimating(false);
      if (index === 0) {
        // jumped to clone of last -> reset to real last
        track.style.transition = "none";
        track.style.transform = `translateX(${-cardWidth * (slides.length)}px)`;
        setCurrent(slides.length);
      } else if (index === slides.length + 1) {
        // jumped to clone of first -> reset to real first
        track.style.transition = "none";
        track.style.transform = `translateX(${-cardWidth * 1}px)`;
        setCurrent(1);
      }
    };
    track.addEventListener("transitionend", onEnd);
  }

  // Controls
  function prev() {
    moveTo(current - 1);
  }
  function next() {
    moveTo(current + 1);
  }

  // Pointer / touch support
  function onPointerDown(e) {
    stopAutoplay();
    pointer.current.dragging = true;
    pointer.current.startX = e.clientX ?? e.touches?.[0].clientX;
    pointer.current.currentX = pointer.current.startX;
    trackRef.current.style.transition = "none";
  }
  function onPointerMove(e) {
    if (!pointer.current.dragging) return;
    const x = e.clientX ?? e.touches?.[0].clientX;
    const dx = x - pointer.current.startX;
    pointer.current.currentX = x;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${ -cardWidth * current + dx }px)`;
    }
  }
  function onPointerUp() {
    if (!pointer.current.dragging) return;
    pointer.current.dragging = false;
    const dx = pointer.current.currentX - pointer.current.startX;
    // threshold for swipe
    if (dx > 50) {
      prev();
    } else if (dx < -50) {
      next();
    } else {
      // snap back
      moveTo(current);
    }
    startAutoplay();
  }

  return (
    <section className="relative z-20 -mt-3 w-full">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="rounded-2xl bg-[#0A1A2F] p-6 shadow-xl ring-1 ring-black/5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">The Fleet</h3>
            <div className="hidden sm:flex items-center gap-2">
              <button
                aria-label="Previous"
                onClick={prev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/6 text-white/90 hover:bg-white/10"
              >
                ‹
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/6 text-white/90 hover:bg-white/10"
              >
                ›
              </button>
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden">
            <div
              className="flex items-stretch gap-6 touch-pan-y"
              ref={trackRef}
              onMouseDown={onPointerDown}
              onMouseMove={onPointerMove}
              onMouseUp={onPointerUp}
              onMouseLeave={onPointerUp}
              onTouchStart={onPointerDown}
              onTouchMove={onPointerMove}
              onTouchEnd={onPointerUp}
              style={{ transform: `translateX(${-cardWidth * current}px)` }}
            >
              {extended.map((s, idx) => (
                <article
                  key={idx}
                  className="relative flex-shrink-0 rounded-2xl bg-black/60 shadow-xl"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="h-44 overflow-hidden rounded-t-2xl bg-black/40">
                    <img src={s.img} alt={s.title} className="h-full w-full object-cover" loading="eager" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                    <p className="mt-1 text-xs text-white/70">{s.color}</p>

                    <div className="mt-4 flex gap-3">
                      <div className="flex w-1/3 flex-col items-start gap-1 rounded-lg bg-white/5 p-2 text-xs text-white/80">
                        <span className="text-[10px]">{s.year}</span>
                        <span className="text-[10px] text-white/60">Year</span>
                      </div>
                      <div className="flex w-1/3 flex-col items-start gap-1 rounded-lg bg-white/5 p-2 text-xs text-white/80">
                        <span className="text-[10px]">{s.pax}</span>
                        <span className="text-[10px] text-white/60">Passengers</span>
                      </div>
                      <div className="flex w-1/3 flex-col items-start gap-1 rounded-lg bg-white/5 p-2 text-xs text-white/80">
                        <span className="text-[10px]">{s.miles}</span>
                        <span className="text-[10px] text-white/60">Miles/Day</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <Link href="#" className="text-sm text-white/80 hover:text-white">View</Link>
                      <Link href="#" className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-3 py-1 text-sm font-medium text-white">Book</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Mobile arrows */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 sm:hidden">
              <button onClick={prev} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/6 text-white/90">‹</button>
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 sm:hidden">
              <button onClick={next} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/6 text-white/90">›</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
