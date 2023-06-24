"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import Image from "next/image";

export default function Caroucel({ caroucelSlides, locale }) {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "black",
          "--swiper-pagination-bullet-inactive-color": "white",
          "--swiper-pagination-bullet-inactive-opacity": ".8",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-pagination-bottom": "20px",
        }}
        speed={1000}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1.1}
        loop={true}
        modules={[Parallax, Pagination]}
        initialSlide={locale === "ar" ? 3 : 0}
        className="mySwiper h-full cursor-grab  "
      >
        {caroucelSlides?.map((slide, index) => (
          <SwiperSlide className=" swiperSlide   overflow-hidden" key={index}>
            <div className="relative h-full flex items-end justify-center ">
              <span className="bg-black w-full h-full absolute opacity-20"></span>
              <h1
                className="text-white text-2xl md:text-4xl opacity-85 font-semibold absolute z-10  p-6 mb-28  "
                data-swiper-parallax="-750"
              >
                {slide.slogan}
              </h1>
              <Image
                src={slide.src}
                alt=""
                className={`object-cover h-screen sm:h-full  `}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
