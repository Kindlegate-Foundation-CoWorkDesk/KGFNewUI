import React from "react";
import Image from "next/image";
 
interface HeroProps {
    link: { text: string; url: string }[];
}
const Hero: React.FC = () => {
    return (
        <>
{/* <section className="bg-transparent dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
        </div>
        <div className="mr-auto place-self-center lg:col-span-5">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            KINDLEGATE FOUNDATION</h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.     
            </p>
            <div className='text-center'>
            <button type="button" className=" w-[361px] mr-12 bg-button-blue py-1 px-7 gap-2.5 rounded-lg text-2xl">GET INVOLVED</button>
            <button type="button" className="text-button-blue mt-2 w-[361px] mr-12 bg-transparent border border-button-blue py-1 px-7 gap-2.5 rounded-lg text-2xl">KINDLEGATE CAUSE SHOP</button>
            </div>
            
        </div>
                        
        </div>
</section> */}
          <div className="flex flex-col mr-8 gap-4 w-[469px] items-start">
              <div
                id="HowTheIndonesiaYouth"
                className="text-6xl font-['Calibri'] font-bold leading-[64px] text-[#f1f1f1] mb-2"
              >
                KINDLEGATE <br />
                FOUNDATION
              </div>
              <div className="text-justify text-xl font-['Calibri'] leading-[22.5px] text-[#f1f1f1] mb-6 w-full">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est.{" "}
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
                  className="text-2xl font-['Calibri'] font-bold leading-[28px]"
                >
                  KINDLEGATE CAUSE SHOP
                </div>
              </button>
            </div>
        </>
    );
};

export default Hero;