"use client";
import {
  faBehance,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faPlus, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function Header() {
  const [toggleNavItem, setToggleNavItem] = useState(true);
  useEffect(() => {
    const handleClick = (event) => {
      if (!event.target.closest(".nav-dropdown")) {
        console.log("Clicked outside the dropdown");
        setToggleNavItem(false); // Close the dropdown
      } else {
        event.stopPropagation()
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className='container mx-auto px-4 lg:px-0'>
      <nav
        className='px-5 h-16 bg-neutral rounded-b-lg w-full lg:w-11/12 mx-auto flex items-center justify-between relative
      '>
        <div className='shrink-0 block lg:hidden'>
          <img src='images/logo/logo.png' alt='Logo' className='w-8' />
        </div>
        <div className='sm:relative flex-1 lg:mx-0'>
          <ul
            className={`flex items-start lg:items-center justify-between lg:flex-row flex-col w-full bg-neutral rounded-lg lg:h-auto overflow-hidden max-lg:absolute top-full left-0 duration-300 lg:w-10/12 mx-auto nav-dropdown
            ${toggleNavItem ? "h-[306px]" : "h-0 opacity-0 sm:opacity-100"}`}>
            <li className='lg:px-1 cursor-pointer hover:text-white text-primary lg:w-auto w-full'>
              <a href='#yourNameHere' className='py-3 px-3 inline-block w-full'>
              Home
              </a>
            </li>
            <li className='lg:px-1 cursor-pointer hover:text-white text-primary lg:w-auto w-full'>
              <a href='#caseStudies' className='py-3 px-3 inline-block w-full'>
                Case Studies
              </a>
            </li>
            <li className='lg:px-1 cursor-pointer hover:text-white text-primary lg:w-auto w-full'>
              <a href='#testimonials' className='py-3 px-3 inline-block w-full'>
                Testimonials
              </a>
            </li>
            <li className='lg:px-1 cursor-pointer hover:text-white text-primary lg:w-auto w-full'>
              <a href='#recentWork' className='py-3 px-3 inline-block w-full'>
                Recent work
              </a>
            </li>
            <li className='lg:px-1 cursor-pointer hover:text-white text-primary lg:w-auto w-full'>
              <a href='#getInTouch' className='py-3 px-3 inline-block w-full'>
                Get In Touch
              </a>
            </li>
            <li className='cursor-pointer'>
              <a href='#' className='flex items-start gap-5 text-lg py-3 px-3'>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className='hover:text-white text-primary'
                />
                <FontAwesomeIcon
                  icon={faBehance}
                  className='hover:text-white text-primary'
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className='hover:text-white text-primary'
                />
              </a>
            </li>
          </ul>
        </div>
        <div className='block lg:hidden nav-dropdown'>
          <div onClick={() => setToggleNavItem(!toggleNavItem)}>
            {toggleNavItem ? (
              <FontAwesomeIcon
                icon={faPlus}
                className='hover:text-white text-primary text-lg duration-200 rotate-45'
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className='hover:text-white text-primary text-lg duration-200'
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
