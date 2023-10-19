import React from "react";
import Image from "next/image";
 import { useGlobalContext } from "../../context/GlobalContext";

const Hero: React.FC = () => {

    const {state} = useGlobalContext();

    return (
        <>
        {/* <div className={`flex flex-col ${position} py-[100px] px-[100px] `}> */}
        <div className={`flex flex-col py-[200px] px-[100px] items-end `}>
          <div className="flex flex-col mr-8 gap-4 w-[469px] items-start">
            <div
              id="HowTheIndonesiaYouth"
              className="text-6xl font-bold  text-[#f1f1f1] inline-block"
            >
              <span className=" tracking-widest"> {state.heroTitle} </span><br />
              <span className=" tracking-widest" >  </span>
            </div>
            <div className="text-justify text-xl leading-[22.5px] text-[#f1f1f1] mb-6 w-full">
              {state.heroContent}
            </div>
            <button
              id="Buttons1"
              className="bg-[#14bde3] self-stretch flex flex-col justify-center h-16 shrink-0 items-center mx-12 rounded-[56px]"
            >
              <div
                id="StartNow1"
                className="text-2xl font-['Calibri'] font-bold leading-[28px] text-[#050505]"
              >
                GET INVOLVED
              </div>
            </button>
            <button
              id="Buttons2"
              className="bg-[#e3b522] self-stretch flex flex-col justify-center h-16 shrink-0 items-center mx-12 rounded-[56px]"
            >
              <div
                id="StartNow2"
                className="text-2xl font-bold leading-[28px]"
              >
                KINDLEGATE CAUSE SHOP 
                
              </div>
            </button>
            
          </div>
        </div>
        </>
    );
};

export default Hero;