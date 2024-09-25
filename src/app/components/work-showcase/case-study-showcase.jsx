import React from "react";
import Button from "../common/button";
import RoundedPill from "../common/rounded-pill";

const work_items = [
  {
    id: "1work_items",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "Design",
    buttonText: "View case study",
    buttonColor: "orange",
    image: "images/case-study-images/case-study-1.png",
    class: "",
  },
  {
    id: "2work_items",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "UIUX",
    buttonText: "View case study",
    buttonColor: "blue",
    image: "images/case-study-images/case-study-2.png",
    class: "",
  },
  {
    id: "3work_items",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "Branding",
    buttonText: "View case study",
    buttonColor: "emerald",
    image: "images/case-study-images/case-study-3.png",
    class: "",
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
          {work_items.map((item, index) => (
            <div
              key={item.id}
              className='flex items-center flex-col md:flex-row gap-8 pt-5 md:pt-16'>
              <div
                className={`w-full md:w-1/2 ${
                  index === 1 ? "md:order-2 order-1" : ""
                }`}>
                <RoundedPill
                  text={item.category}
                  textColor={`text-${item.buttonColor}-500`}
                  bg={`bg-${item.buttonColor}-100`}
                />
                <h1 className='font-raleway text-black text-2xl font-extrabold pt-4'>
                  {item.title}
                </h1>
                <p className='text-primary pt-4 pb-10'>{item.description}</p>
                <Button
                  bg={`bg-${item.buttonColor}-400`}
                  bgHover={`hover:bg-${item.buttonColor}-500`}
                  text={item.buttonText}
                />
              </div>
              <div
                className={`rounded-md overflow-hidden w-full md:w-1/2 ${
                  index === 1 ? "md:order-1 order-2" : ""
                }`}>
                <img src={item.image} className='w-full' alt='work sample' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyShowcase;
