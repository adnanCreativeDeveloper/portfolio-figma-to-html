import { faQuoteLeftAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TestimonialItem from "./testimonial-item";

const testimonial = [
  {
    id: "testimonial_1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    img_ulr: "images/testimonial-images/testimonial-1.png",
    alt: "Author Img",
  },
  {
    id: "testimonial_2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    img_ulr: "images/testimonial-images/testimonial-2.png",
    alt: "Author Img",
  },
  {
    id: "testimonial_3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    img_ulr: "images/testimonial-images/testimonial-3.png",
    alt: "Author Img",
  },
  {
    id: "testimonial_4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    img_ulr: "images/testimonial-images/testimonial-4.png",
    alt: "Author Img",
  },
];

function Testimonial() {
  return (
    <div className='bg-base py-10 md:py-16 px-4 lg:px-0' id="testimonials">
      <div className='w-full lg:w-2/3 mx-auto'>
        <div className='text-center w-full md:w-3/5 mx-auto'>
          <h1 className='font-raleway text-white text-4xl font-extrabold pb-7'>
            Testimonials
          </h1>
          <p className='text-primary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <dir className='grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-16 pt-5 md:pt-16 pl-0'>
          <TestimonialItem testimonial={testimonial} />
        </dir>
      </div>
    </div>
  );
}

export default Testimonial;
