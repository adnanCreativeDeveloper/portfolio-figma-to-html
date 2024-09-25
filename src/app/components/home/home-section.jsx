import React from "react";

function HomeSection({ children }) {
  return (
    <div
      className='w-full lg:w-2/3 mx-auto py-20 px-4 lg:px-0'
      id='yourNameHere'>
      {children}
    </div>
  );
}

export default HomeSection;
