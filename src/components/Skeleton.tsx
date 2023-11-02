import React from 'react';
import Image from 'next/image';
import SkeletonPattern from '../../public/Asset71.svg';

const Skeleton: React.FC = () => {
  return (
    <>
    <div
        id="BODY"
        className=" overflow-hidden 
        bg-[#f1f1f1] relative top-0 left-0 
        flex flex-col justify-center items-end pt-10 pb-6 lg:pr-15 pr-12 rounded-[40px]"
      >
        <div className="self-stretch flex flex-row items-center">
          <div className="relative flex flex-col w-1/3 items-start z-30">
            <Image  alt='Asset71'
              src={SkeletonPattern} 
              
              id="Asset"
            />
          </div>

          <div className="flex flex-col gap-2 w-2/3 items-start relative">
            <div className="self-stretch  flex flex-col justify-end mb-1 pt-16 items-start">
              <div className="text-3xl  font-bold leading-[72px] text-[#14242c] 
              absolute top-0 right-0 
              h-16  
              border-solid border-[#e3b522] border-b-4">
                OUR MANDATE
              </div>
              
              <div className="text-sm  leading-[32px] text-[#323232] relative w-full">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est. Vivamus a tellus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. <br />
              </div>
            </div>
            <div className="self-end relative flex flex-col justify-end pt-16 pb-2">
              <div
                id="OURMANDATE2"
                className="text-3xl  font-bold leading-[72px] text-[#0a2640] 
                absolute top-0 right-0 h-16 
                border-solid border-[#e3b522] border-b-4"
              >
                OBJECTIVES
              </div>
              
            
            <div className="text-sm  leading-[32px] text-[#282828] w-full">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a
              tellus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. <br />
            </div></div>
          </div>
        </div>
        <button
          id="Buttons"
          className="bg-[#14bde3] flex flex-col justify-center lg:mr-16 h-16 shrink-0 items-center rounded-[56px]"
        >
          <div
            id="StartNow"
            className="lg:text-2xl  font-bold leading-[28px]  mx-6 lg:mx-12"
          >
            LEARN MORE
          </div>
        </button>
      </div>
    
{/* <div className="rounded-[20px] bg-[#F1F1F1] lg:py-8">
<div className='bg-skeleton-pattern bg-no-repeat bg-contain'>
<div className='container mx-auto '>
<div className="flex justify-end items-center">
    <div className="grid grid-rows-2 lg:w-[604px]">
        <div className="flex flex-col mr-12 mb-2.5 ">
            <div className='flex flex-col items-end'>
                <p className='underline underline-offset-8 decoration-underline-yellow text-2xl leading-8'>OUR MANDATE</p>
            </div>
            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
                purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            </span>
        </div>
        <div className="flex flex-col mr-12 mb-2.5 ">
            <div className='flex flex-col items-end'>
                <p className='underline underline-offset-8 decoration-underline-yellow text-2xl leading-8'>OBJECTIVES</p>
            </div>
            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
                purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            </span>
        </div>
    </div>
</div>
<div className='text-right'>
    <button type="button" className=" mr-12 bg-button-blue py-1 px-7 gap-2.5 rounded-lg text-2xl">LEARN MORE</button>
</div>
</div></div>
</div> */}


</>
  );
};

export default Skeleton;