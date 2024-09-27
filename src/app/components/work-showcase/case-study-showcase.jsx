import React from "react";
import Button from "../common/button";
import RoundedPill from "../common/rounded-pill";
import Image from "next/image";
import WorkItems from "./work-items";

const work_items = [
  {
    id: "1work_items",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "Design",
    buttonText: "View case study",
    buttonColor: "orange",
    image: "/images/case-study-images/case-study-1.png",
  },
  {
    id: "2work_items",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "UIUX",
    buttonText: "View case study",
    buttonColor: "blue",
    image: "/images/case-study-images/case-study-2.png",
  },
  {
    id: "3work_items",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "Branding",
    buttonText: "View case study",
    buttonColor: "emerald",
    image: "/images/case-study-images/case-study-3.png",
  },
];

function CaseStudyShowcase() {
  return (
    <div className='bg-white py-16 px-4 lg:px-0' id='caseStudies'>
      <div className='w-full lg:w-2/3 mx-auto'>
        <div className='text-center w-full md:w-3/5 mx-auto'>
          <h1 className='font-raleway text-black text-4xl font-extrabold pb-7'>
            Case Studies
          </h1>
          <p className='text-primary'>
            Solving user & business problems since last 15+ years.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div>
          <WorkItems work_items={work_items} />
        </div>
      </div>
    </div>
  );
}

export default CaseStudyShowcase;
