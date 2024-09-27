import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ClientContactForm from "./ClientContactForm";

function GetInTouch() {
  return (
    <div className='bg-base pt-16 px-4 lg:px-0' id="getIn-touch">
      <div className='w-full lg:w-2/3 mx-auto'>
        <div className='text-center w-full md:w-3/5 mx-auto'>
          <h1 className='font-raleway text-white text-4xl font-extrabold pb-7'>
            Recent Work
          </h1>
          <p className='text-primary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='py-4 md:py-16 w-full md:w-1/2 mx-auto'>
          <ClientContactForm/>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
