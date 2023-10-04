import React from 'react';

const Skeleton: React.FC = () => {
  return (
    
<div className="rounded-[20px] bg-[#F1F1F1] lg:py-8">
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
</div>

  );
};

export default Skeleton;