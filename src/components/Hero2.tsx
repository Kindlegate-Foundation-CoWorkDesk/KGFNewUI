import React from "react";
import Image from "next/image";
 import { useGlobalContext } from "../../context/GlobalContext";

const Hero2: React.FC = () => {

    const {state} = useGlobalContext();

    return (
        <>
        {/* <div className={`flex flex-col ${position} py-[100px] px-[100px] `}> */}
        <div className={`flex flex-col py-[100px] lg:py-[200px] lg:px-[100px] lg:items-end items-center `}>
          <div className="flex flex-col lg:mr-8 lg:gap-4 gap-2 w-100% lg:w-[469px] items-start">
            <div
              id="HowTheIndonesiaYouth"
              className="lg:text-6xl text-3xl font-bold  text-[#f1f1f1] inline-block"
            >
              <span className=" lg:tracking-widest"> {state.heroTitle} 2</span><br />
            </div>

            <div className="text-justify lg:text-xl leading-[22.5px] text-[#f1f1f1] lg:mb-6 w-full">
              {state.heroContent}
            </div>

            <button
              id="Buttons1"
              className="bg-[#14bde3] self-stretch flex flex-col 
              justify-center h-16 shrink-0 items-center mx-12 rounded-[56px]"
            >
              <div
                id="StartNow1"
                className="lg:text-2xl font-['Calibri'] font-bold leading-[28px] text-[#050505]"
              >
                GET INVOLVED
              </div>
            </button>

            <button
              id="Buttons2"
              className="bg-[#e3b522] self-stretch flex flex-col justify-center 
              h-16 shrink-0 items-center mx-12 rounded-[56px]"
            >
              <div
                id="StartNow2"
                className="lg:text-2xl font-bold leading-[28px]"
              >
                KINDLEGATE CAUSE SHOP 
                
              </div>
            </button>
            
          </div>
        </div>
        </>
    );
};

export default Hero2;