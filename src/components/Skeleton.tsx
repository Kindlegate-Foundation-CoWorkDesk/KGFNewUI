import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <>
    <div
        id="BODY"
        className=" h-[684px] overflow-hidden 
        bg-[#f1f1f1] relative top-0 left-0 
        flex flex-col justify-center gap-8 items-end pt-10 pb-12 rounded-[40px]"
      >
        <div className="self-stretch flex flex-row mr-16 items-start">
          <div className="relative flex flex-col mb-px w-1/2 items-start">
            <img
              src="https://file.rendit.io/n/0lGHvBiG9HMl2LJ47hrh.png"
              id="Asset"
              className="relative"
            />
          </div>
          <div className="self-end flex flex-col gap-2 w-1/2 items-start">
            <div className="self-stretch relative flex flex-col justify-end mb-1 pt-16 items-start">
              <div className="text-3xl font-['Calibri'] font-bold leading-[72px] text-[#14242c] absolute top-0 left-[422.5596008300781px] h-16 w-1/3">
                OUR MANDATE
              </div>
              <div
                id="Line"
                className="border-solid border-[#e3b522] w-40 h-1 absolute top-10 left-[450px] border-t-4 border-b-0 border-x-0"
              />
              <div className="text-sm font-['Calibri'] leading-[32px] text-[#323232] relative w-full">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est. Vivamus a tellus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. <br />
              </div>
            </div>
            <div className="self-end relative flex flex-col justify-end mr-px w-40 pt-16 pb-2">
              <div
                id="OURMANDATE2"
                className="text-3xl font-['Calibri'] font-bold leading-[72px] text-[#0a2640] absolute top-0 left-0 h-16 w-40"
              >
                OBJECTIVES
              </div>
              <div
                id="Line1"
                className="border-solid border-[#e3b522] relative ml-6 h-1 shrink-0 border-t-4 border-b-0 border-x-0"
              />
            </div>
            <div className="text-sm font-['Calibri'] leading-[32px] text-[#282828] w-full">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a
              tellus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. <br />
            </div>
          </div>
        </div>
        <button
          id="Buttons"
          className="bg-[#14bde3] flex flex-col justify-center mr-20 h-16 shrink-0 items-center rounded-[56px]"
        >
          <div
            id="StartNow"
            className="text-2xl font-['Calibri'] font-bold leading-[28px] text-[#1e1e1e] mx-12"
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