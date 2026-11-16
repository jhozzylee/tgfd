
"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const heroImages = [
  "/images/hero/travel-1.jpeg",
  "/images/hero/travel-2.jpeg",
  "/images/hero/travel-3.jpeg",
  "/images/hero/travel-4.jpeg",
  "/images/hero/travel-5.jpeg",
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate flex min-h-[600px] h-[100svh] max-h-[950px] w-full items-center justify-center overflow-hidden bg-[var(--foreground)]">

      {/* Background slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          aria-hidden="true"
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
            activeImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${image}")` }}
        />
      ))}

      {/* Image overlay */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pt-16 text-center text-white">
        <span className="mb-6 block font-body text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80 sm:text-xs">
          A New Chapter in Travel
        </span>

        <h1 className="mx-auto max-w-3xl font-heading text-5xl font-normal leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl">
          A Better Way To Travel Is Coming.
        </h1>

        <p className="mx-auto mt-7 max-w-xl font-body text-sm leading-7 text-white/85 sm:text-base md:text-lg">
          We're building something amazing, designed to make every trip better.
          Be among the first to experience it 🍁.
        </p>

        <div className="mt-9 flex justify-center">
          <Button href="/survey" variant="primary">
            Take the survey to join the club
          </Button>
        </div>

        {/* Slideshow indicators */}
        <div className="mt-14 flex items-center justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show image ${index + 1}`}
              aria-current={activeImage === index}
              onClick={() => setActiveImage(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                activeImage === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
