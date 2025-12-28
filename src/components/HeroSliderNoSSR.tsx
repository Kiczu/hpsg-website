"use client";

import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("./HeroSlider"), {
  ssr: false,
  loading: () => (
    <section className="relative">
      <div className="hero-swiper h-[420px] md:h-[520px] lg:h-[620px]" />
    </section>
  ),
});

export default HeroSlider;
