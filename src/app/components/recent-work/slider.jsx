import React from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image"; // Add this import
import Button from "../common/button";

function Slider({ slider_arr }) {
  return (
    <div>
      {slider_arr.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='flex flex-col bg-white'>
            <Image
              height={48}
              width={48}
              src={item.img_url} // Make sure this property name matches your data
              alt={item.alt}
              className='w-full'
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
    </div>
  );
}

export default Slider;
