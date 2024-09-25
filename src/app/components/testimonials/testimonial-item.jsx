import React from "react";

function TestimonialItem({ testimonial }) {
  return testimonial.map((item) => (
    <div className='relative'>
      <span className='font-raleway text-8xl absolute -top-6 left-2'>“</span>
      <div className='py-6 px-6 rounded-md border border-neutral'>
        <div className='hidden md:block absolute top-0 right-0 w-full h-full bg-gradient-to-r from-base/0 to-base rounded-md'></div>
        <div className='relative z-10'>
          <p className='pb-10 text-primary'>{item.text}</p>
          <div className='flex items-center gap-5'>
            <div className='h-12 w-12 rounded-full overflow-hidden'>
              <img src={item.img_ulr} alt={item.alt} className='w-full' />
            </div>
            <h3 className='text-white font-bold font-raleway text-lg'>
              {item.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default TestimonialItem;
