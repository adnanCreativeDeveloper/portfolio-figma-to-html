"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../common/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function ProjectSlider({ slider_arr }) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='relative'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        pagination={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}>
        {slider_arr.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col bg-white'>
              <img
                className='w-full h-auto rounded-t-xl'
                src={item.img_url}
                alt={item.alt}
              />
              <div className='pt-10'>
                <h3 className='text-2xl pb-3.5 font-bold text-black font-raleway'>
                  {item.name}
                </h3>
                <p className='mt-1 text-primary mb-6'>{item.text}</p>
                <Button
                  text='Know more'
                  bg='bg-orange-600'
                  bgHover='hover:bg-orange-700'
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className={`absolute top-1/2 left-4 lg:left-0 lg:-translate-x-24 -translate-y-1/2 z-10 p-2 rounded-full text-primary transition-all h-8 w-8 flex items-center justify-center border border-primary ${
          isBeginning ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
        disabled={isBeginning}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className={`absolute top-1/2 right-4 lg:right-0 lg:translate-x-24 -translate-y-1/2 z-10 p-2 rounded-full text-primary transition-all h-8 w-8 flex items-center justify-center border border-primary ${
          isEnd ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
        disabled={isEnd}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default ProjectSlider;
