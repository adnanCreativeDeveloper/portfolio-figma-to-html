import Image from 'next/image';
import React from 'react'
import Button from '../common/button';
import RoundedPill from '../common/rounded-pill';

function WorkItems({ work_items }) {
  return (
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
              textColor={`${
                item.buttonColor === "orange"
                  ? "text-orange-500"
                  : item.buttonColor === "blue"
                  ? "text-blue-500"
                  : "text-emerald-500"
              }`}
              bg={`${
                item.buttonColor === "orange"
                  ? "bg-orange-100"
                  : item.buttonColor === "blue"
                  ? "bg-blue-100"
                  : "bg-emerald-100"
              }`}
            />
            <h1 className='font-raleway text-black text-2xl font-extrabold pt-4'>
              {item.title}
            </h1>
            <p className='text-primary pt-4 pb-10'>{item.description}</p>
            <Button
              bg={`${
                item.buttonColor === "orange"
                  ? "bg-orange-400"
                  : item.buttonColor === "blue"
                  ? "bg-blue-700"
                  : "bg-emerald-500"
              }`}
              bgHover={`${
                item.buttonColor === "orange"
                  ? "hover:bg-orange-500"
                  : item.buttonColor === "blue"
                  ? "hover:bg-blue-800"
                  : "hover:bg-emerald-600"
              }`}
              text={item.buttonText}
            />
          </div>
          <div
            className={`rounded-md overflow-hidden w-full md:w-1/2 ${
              index === 1 ? "md:order-1 order-2" : ""
            }`}>
            <Image
              height={451}
              width={304}
              src={item.image}
              className='w-full'
              alt='work sample'
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkItems