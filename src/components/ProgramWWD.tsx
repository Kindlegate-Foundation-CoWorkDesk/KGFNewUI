import React from 'react';

const ProgramWWD: React.FC = () => {
  return (
<div className="flex justify-center items-center 
bg-white ps-20 pe-20 py-5
hover:bg-gray-100 relative
dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className='flex flex-col items-center justify-center shrink-0 '>
        <img  className="object-cover w-[478px] rounded-lg h-[334px]  
        sm:h-auto sm:w-48 sm:rounded-none sm:rounded-l-lg"
        src="./confident-businessman-working-his-laptop.svg" alt="" />

        <div className=" pt-4
        text-black text-xl font-bold leading-72 border-solid border-[#e3b522] border-b-4">LEADERSHIP</div>
    </div>
    
    <div className="flex flex-col justify-between leading-normal ps-20 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <div className=" pe-22 font-normal  text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
            purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant 
            morbi tristique senectus et netus et malesuada fames ac turpis egestas.

            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor 
            congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus 
            malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra 
            imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi 
            tristique senectus et netus et malesuada fames ac turpis egestas. 

            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas 
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus 
            lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc 
            viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant 
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. 

 
        </div>
    </div>
</div>

  )};

export default ProgramWWD;