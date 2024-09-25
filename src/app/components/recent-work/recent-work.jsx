import React from "react";
import Button from "../common/button";
import ProjectSlider from "./project-slider";

const slider_arr = [
  {
    id: "",
    text: "Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    name: "Work name here",
    img_url: "images/work-sampls/work-image-1.png",
    alt: "Project thumbnail",
  },
  {
    id: "",
    text: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",
    name: "Work name here",
    img_url: "images/work-sampls/work-image-2.png",
    alt: "Project thumbnail",
  },
  {
    id: "",
    text: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",
    name: "Work name here",
    img_url: "images/work-sampls/work-image-2.png",
    alt: "Project thumbnail",
  },
  {
    id: "",
    text: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",
    name: "Work name here",
    img_url: "images/work-sampls/work-image-2.png",
    alt: "Project thumbnail",
  },
];

function RecentWork() {
  return (
    <div className='bg-white py-10 md:py-16 px-4 lg:px-0' id="recentWork">
      <div className='w-full lg:w-2/3 mx-auto'>
        <div className='text-center w-full md:w-3/5 mx-auto'>
          <h1 className='font-raleway text-black text-4xl font-extrabold pb-7'>
            Recent Work
          </h1>
          <p className='text-primary'>
            Solving user & business problems since last 15+ years.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='pt-5 md:pt-16'>
          <ProjectSlider slider_arr={slider_arr} />          
        </div>
      </div>
    </div>
  );
}

export default RecentWork;
