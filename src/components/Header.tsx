import React from 'react';
import Image from 'next/image';
import NavBar from './NavBar';
 import Hero from './Hero';
import NavBarDynamic from './NavBarDynamic';
import { HeroPosition } from '../enums/enums';

interface HeaderProps {
  links: {id: number; text: string; url: string }[];
  backgroundImage: string;

}

const Header: React.FC<HeaderProps> = ({ links
  , backgroundImage
   }) => {
    
    

  return (
    <>
      <div className="flex flex-col ">
        <div 
        className=" 
          bg-cover bg-blend-normal bg-no-repeat flex flex-col" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
          
          >
            {/* <img src={`${backgroundImage}`}  className='w-full absolute z-30'/> */}

            <div className="bg-black/50 flex flex-col ">
              <NavBar links={links}  />
              {/* <NavBarDynamic links={links}  /> */}
              
              <Hero />
              
          
            </div>
        </div>
      </div>
    </>

  );
};

export default Header;
