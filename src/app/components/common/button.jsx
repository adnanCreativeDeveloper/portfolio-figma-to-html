import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Button({ bg, bgHover, text }) {
  return (
    <button
      className={`rounded-md ${bg} text-white shadow-lg w-48 py-2 group ${bgHover} duration-300 active:scale-95`}>
      {text}
      <FontAwesomeIcon
        icon={faAngleRight}
        className='group-hover:translate-x-2 duration-200 text-xs pl-1'
      />
    </button>
  );
}

export default Button;
