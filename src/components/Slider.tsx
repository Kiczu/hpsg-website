"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
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
            {/* Background */}
            <Image
              src="/images/clients-slider/clients.png"
              alt="Linia produkcyjna"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#104F77]/53" />

            {/* CONTENT */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-white text-center pointer-events-none">
              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-[0.18em] uppercase mb-1">
                Ponad 300
              </h2>

              {/* Subtitle */}
              <p className="text-sm md:text-4xl opacity-90 tracking-[0.08em] mb-6">
                zadowolonych klientów!
              </p>

              {/* Button */}
              <a
                href="#realizacje"
                className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-black/70 hover:bg-black/80 transition-colors px-8 py-3 text-xs md:text-sm font-bold tracking-[0.16em]"
              >
                ZOBACZ NASZE REALIZACJE
              </a>

              {/* Quote */}
              <p className="mt-10 max-w-2xl text-xs md:text-lg italic opacity-90 leading-relaxed">
                “Profesjonalna firma z dużą wiedzą techniczną. Doradzili nam
                przy modernizacji linii produkcyjnej i pomogli zoptymalizować
                proces”
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
