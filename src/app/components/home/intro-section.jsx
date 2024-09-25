import React from "react";
import Button from "../common/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function IntroSection() {
  return (
    <div>
      <div className='flex items-center justify-between md:flex-row flex-col'>
        <div className='w-full md:w-1/2 pr-6 order-2 lg:order-1'>
          <h1 className='text-5xl text-white font-raleway font-semibold pb-7'>
            Your Name Here
          </h1>
          <p className='text-primary text-justify pb-7'>
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <a href='#getInTouch'>
            <button
              className={`mb-7 py-4 px-10 md:w-80 bg-lime-600 hover:bg-lime-800 group rounded-md mt-5 drop-shadow-2xl shadow-accent duration-200 active:scale-95`}>
              Let’s get started{" "}
              <FontAwesomeIcon
                icon={faAngleRight}
                className='relative top-px group-hover:translate-x-2 duration-200'
              />
            </button>
          </a>
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center lg:justify-end order-1 lg:order-2 mb-7'>
          <div className='w-72 h-72 md:h-80 md:w-80 rounded-full overflow-hidden'>
            <img
              src='images/user-png.avif'
              alt='User img'
              className='shrink-0'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
