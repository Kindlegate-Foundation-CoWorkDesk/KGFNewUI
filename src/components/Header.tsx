import React from 'react';
import Image from 'next/image';
import NavBar from './NavBar';
 import Hero from './Hero';
 import Hero2 from './Hero2';
import NavBarDynamic from './NavBarDynamic';
import { HeroPosition } from '../enums/enums';

interface HeaderProps {
  links: {id: number; text: string; url: string }[];

}

const Header: React.FC<HeaderProps> = ({ links
   }) => {
    
    

  return (
    <>
      <div className="flex flex-col ">
        <div 
        className="bg-cover bg-blend-normal bg-no-repeat flex flex-col" 
          // style={{ backgroundImage: `url(${backgroundImage})` }}
          
          >
            {/* <img src={`${backgroundImage}`}  className='w-full absolute z-30'/> */}

            <div className="bg-black/50 flex flex-col ">
             
              
              {/* <Hero /> */}
              <Hero2 />
              
          
            </div>
        </div>
      </div>
    </>

  );
};

export default Header;
