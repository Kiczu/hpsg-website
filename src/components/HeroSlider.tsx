"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        watchOverflow={false}
        autoplay={{ delay: 6000 }}
        loop={false}
        className="hero-swiper h-[420px] md:h-[520px] lg:h-[620px]"
      >
        <SwiperSlide>
          <div className="relative h-full">
            {/* BGC image */}
            <Image
              src="/images/hero-slider/01-main.png"
              alt="Linia produkcyjna"
              fill
              priority
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0056A5]/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-slate-900/30" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-2xl text-center text-white">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.18em] mb-2">
                    TWÓJ PARTNER
                  </h1>
                  <p className="text-sm md:text-lg font-semibold tracking-[0.32em] mb-4">
                    W ROZWOJU PRODUKCJI
                  </p>

                  <div className="mx-auto mb-8 h-0.5 w-24 bg-white/80" />

                  {/* CTA buttons – separated + orange accent */}
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                      href="#catalog"
                      className="inline-flex items-center justify-center rounded-full px-10 py-4
               text-xs md:text-sm font-semibold uppercase tracking-[0.18em]
               bg-[#FF7A00] text-white
               shadow-[0_14px_40px_rgba(0,0,0,0.45)]
               transition-colors duration-200
               hover:bg-[#FF8C1A] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      POBIERZ KATALOG
                    </a>

                    <a
                      href="#products"
                      className="inline-flex items-center justify-center rounded-full px-10 py-4
               text-xs md:text-sm font-semibold uppercase tracking-[0.18em]
               bg-[#FF7A00] text-white
               shadow-[0_14px_40px_rgba(0,0,0,0.45)]
               transition-colors duration-200
               hover:bg-[#FF8C1A] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      ZOBACZ PRODUKTY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <Image
              src="/images/hero-slider/01-main.png"
              alt="Rozwiązania produkcyjne"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0056A5]/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-slate-900/30" />

            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-2xl text-center text-white">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.18em] mb-2">
                    DRUGI SLAJD
                  </h1>
                  <p className="text-sm md:text-lg font-semibold tracking-[0.32em] mb-4">
                    TEKST POD TYTUŁEM
                  </p>

                  <div className="mx-auto mb-8 h-0.5 w-24 bg-white/80" />

                  {/* CTA buttons – separated + orange accent */}
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                      href="#catalog"
                      className="inline-flex items-center justify-center rounded-full px-10 py-4
               text-xs md:text-sm font-semibold uppercase tracking-[0.18em]
               bg-[#FF7A00] text-white
               shadow-[0_14px_40px_rgba(0,0,0,0.45)]
               transition-colors duration-200
               hover:bg-[#FF8C1A] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      POBIERZ KATALOG
                    </a>

                    <a
                      href="#products"
                      className="inline-flex items-center justify-center rounded-full px-10 py-4
               text-xs md:text-sm font-semibold uppercase tracking-[0.18em]
               bg-[#FF7A00] text-white
               shadow-[0_14px_40px_rgba(0,0,0,0.45)]
               transition-colors duration-200
               hover:bg-[#FF8C1A] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      ZOBACZ PRODUKTY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
