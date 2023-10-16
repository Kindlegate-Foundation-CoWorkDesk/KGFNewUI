import React from 'react';
import Image from 'next/image';
import NavBar from './childs/NavBar';
import Hero from './childs/Hero';
import NavBar2 from '../NavBar2';
import { HeroPosition } from '../../enums/enums';

interface HeaderProps {
  links: {id: number; text: string; url: string }[];
  backgroundImage: string;

}

const Header: React.FC<HeaderProps> = ({ links
  , backgroundImage
   }) => {
    
    

  return (
    <>
      <div className="flex flex-col  ">
        <div className=" 
          bg-cover bg-blend-normal bg-no-repeat flex flex-col " 
          style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="bg-black/50 flex flex-col ">
              <NavBar links={links}  />
              
              <Hero />
              
          
            </div>
        </div>
      </div>
    </>

  );
};

export default Header;
