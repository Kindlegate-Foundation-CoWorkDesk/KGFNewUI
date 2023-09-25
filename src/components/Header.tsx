import React from 'react';
import Image from 'next/image';
import NavBar from './NavBar';
import Hero from './Hero';

interface HeaderProps {
  links: { text: string; url: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <>
      
<div className="relative isolate overflow-hidden bg-gray-900 pb-48 sm:pb-64"> 
<NavBar links={links} />
<Hero />
  <img  src="../close-up-community-concept-with-hands.svg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
  
</div>
</>

  );
};

export default Header;
