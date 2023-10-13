import React from 'react';
import Image from 'next/image';
import NavBar from './NavBar';
import Hero from './Hero';
import NavBar2 from './NavBar2';

interface HeaderProps {
  links: {id: string; text: string; url: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <>
      
{/* <div className="relative isolate overflow-hidden bg-gray-900 pb-48 sm:pb-64">  */}

{/* <Hero /> */}
  {/* <img  src="../close-up-community-concept-with-hands.svg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" /> */}
  
{/* </div> */}

<div className="flex flex-col  ">
  <div className="bg-[url(https://file.rendit.io/n/itxqeF1WcZuVN9SynbtB.png)] 
    bg-cover bg-blend-normal bg-no-repeat flex flex-col ">
      <div className="bg-black/50 flex flex-col ">
        <NavBar links={links} />
        {/* <NavBar2 /> */}
        <div className="flex flex-col items-end pb-[191px] pr-[20px]">
        <Hero /></div>
     
      </div>
  </div>
</div>
{/* <div className='flex flex-col bg-[#f1f1f1]'>
  <div className='relative'>
    <img src='../close-up-community-concept-with-hands.svg' className='w-full object-cover' />
    <div className=' absolute top-0 left-0'> 
    <NavBar links={links}   /></div>

  </div>

</div> */}


</>

  );
};

export default Header;
