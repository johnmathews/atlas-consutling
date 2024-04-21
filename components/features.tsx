"use client";

import { useEffect } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration.svg";
import FeaturesIcon01 from "@/public/images/features-icon-01.svg";
import FeaturesIcon02 from "@/public/images/features-icon-02.svg";
import FeaturesIcon03 from "@/public/images/features-icon-03.svg";
import FeaturesIcon04 from "@/public/images/features-icon-04.svg";

// Import Swiper
import Swiper, { Autoplay, Navigation } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Autoplay, Navigation]);

export default function Features() {
  useEffect(() => {
    const carousel = new Swiper(".carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  }, []);

  return (
    <section className="relative">
      {/* Bg illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -mt-20 -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width="1440"
          height="440"
          alt="Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-5xl mx-auto text-center pb-12 md:pb-18">
            <h2 className="h3 font-hkgrotesk mb-4">
              We specialize in helping businesses unlock the potential of their
              data. With extensive experience in data engineering, we provide
              consulting services to navigate data strategy, infrastructure, and
              analysis.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
