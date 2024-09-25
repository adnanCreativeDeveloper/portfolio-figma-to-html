import React from "react";

function RoundedPill({ text, textColor, bg }) {
  return (
    <span
      className={`text-xs rounded-3xl py-1.5 px-3 ${bg} ${textColor} font-semibold font-raleway`}>
      {text}
    </span>
  );
}

export default RoundedPill;
