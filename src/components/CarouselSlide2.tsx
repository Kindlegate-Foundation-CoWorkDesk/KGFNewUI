import { Carousel } from 'flowbite';
import { useEffect } from 'react';
import React from 'react';
import type { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite";



const CarouselSlide2: React.FC = () => {
  

  return (
    <div
  id="ROADMAPRoot"
  className="border-solid bg-carousel-primary flex flex-col pb-10 gap-10 w-full items-center border-black border rounded-[20px]"
>
  <div className="self-stretch relative flex flex-col justify-end pt-12 gap-6 items-start mt-[-23px] ml-24 mr-[-127px]">
    <img
      src="https://file.rendit.io/n/Q6FLNaFJtdlCrYtnCTq4.png"
      id="Asset"
      className="w-[346px] h-[343px] absolute top-0 left-[1080px]"
    />
    {/* line */}
    <div className="relative flex flex-col ml-8 w-[536px] items-start">
      <div
        id="Line"
        className="border-solid border-[#e3b522] w-3/5 h-1 absolute top-24 left-0 border-t-4 border-b-0 border-x-0"
      />
      <div className="text-4xl font-['Calibri'] font-bold leading-[49.5px] text-white relative">
        OUR VALUE ADDING ROADMAP <br />
        (HESS MANDATE)
      </div>
    </div>

{/* caroudel */}
    {/* <!-- Carousel wrapper --> */}
    <div className="self-stretch relative flex flex-col 
    mr-56 pt-[286px] pb-[239px]">
      <img
        src="https://file.rendit.io/n/z4GPcYAwgRG9sykDXLHY.png"
        className="w-[532px] h-[572px] bg-black/15 absolute top-0 
        left-[648px]"
      />
      <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] 
      w-3/5 h-[354px] bg-[#4b4b4b] absolute top-[144px] left-5 flex flex-col items-start pl-10 py-10 rounded">
        <div className="text-xl font-['Calibri'] leading-[22.5px] text-white ml-2 w-full">
          Healthy communities: <br />
          <br />
          We believe when our communities are healthy and Eco-friendly, people
          thrive. Consequently, often many of the services that keep people
          healthy are difficult to access for the people who need them most. We
          will facilitate enabling environments to promote creativity,
          innovation and collaboration for healthcare causes and objectives. We
          will ensure that through our community networks every Hungry Citizen
          within our reach gets Food Assistance and the Homeless get a clean
          living environment with access to disease prevention medicine.
        </div>
      </div>      
    </div>
  </div>

  </div>
  



  );
};

export default CarouselSlide2;