import React from "react";
import Image from "next/image";
 
interface JoinJourney {
    link: { text: string; url: string }[];
}
const JoinJourney: React.FC = () => {
    return (
        <>
        <div
      id="JOIN"
      className="overflow-hidden bg-[#e3b522] 
      flex flex-row justify-between lg:pl-24 pl-4  items-center text-[#1d1d1d] 
      "
    >
      <div className="flex flex-col lg:mb-10 my-2 gap-0 lg:gap-8  h-auto w-auto
      lg:w-[970px] lg:h-64 items-start">
        <div className="text-2xl font-bold leading-[28px] ml-1">
          THE JOURNEY TO BUILDING A BETTER WORLD STARTS HERE WITH YOU 2
        </div>

        <div className="text-xl leading-[22.5px] mb-6 w-full">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est.
        </div>

        <button
          id="Buttons3"
          className="bg-[#14bde3] flex flex-col justify-center h-16 shrink-0 items-center rounded-[56px]"
        >
          <div
            id="StartNow3"
            className="text-2xl  font-bold leading-[28px]  mx-12"
          >
            GET INVOLVED
          </div>
        </button>
      </div>


      <Image alt="asset" width={326} height={326}
        src="/asset61.png"
        id="Asset2"
        className="flex-inline self-start mt-0
        lg:mt-8 object-contain h-1/4 w-1/4 lg:w-auto lg:h-[326px]"
      />
    </div>
        </>
    );
};

export default JoinJourney;