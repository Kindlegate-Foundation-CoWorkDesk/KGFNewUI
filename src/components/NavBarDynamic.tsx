import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Hero from './Hero';
import Link from 'next/link';
import { useState } from 'react';

import { useGlobalContext } from '../../context/GlobalContext';
import { useRouter } from 'next/router';

interface NavItem {
  id: number;
  text: string;
  url: string;
  submenu?: NavItem[];
}

interface NavBarProps {
  links: NavItem[];
}

const NavMenuItem: React.FC<{item: NavItem; closeMenu: () => void}> 
= ({item, closeMenu}) =>{
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!isSubmenuOpen);
  };

  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  const handleClick = () => {
    if (!item.submenu) {
      closeMenu(); // Close the mobile menu
    }
  };
 
  return (

     
      <li className="group">
        <Link href={item.url} className="text-xl font-bold leading-7 " 
        onClick={handleClick}
        >
            {item.text}
        </Link>
      {item.submenu && (
        
        <button onClick={toggleSubmenu} 
        className="w-2.5 h-2.5 transform transition-transform">
        <svg className={`w-2.5 h-2.5 ml-2.5 ${isSubmenuOpen ? 'rotate-180' : ''
        }`}
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 10 6">
          <path 
            stroke="currentColor" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
        </button >
      )}

      {isSubmenuOpen && item.submenu && (
        <ul className=" flex justify-between items-center top-full 
        lg:absolute hidden group-hover:block ">
          {item.submenu.map((subitem) => (
            <li key={subitem.id} >
              <Link href={subitem.url} className="block hover:bg-gray-400 
              dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeSubmenu}>                
                  {subitem.text}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </li>

  );


}

const NavBarDynamic: React.FC<NavBarProps> = ({ links }) => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavigation = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeNavigation = () => {
    setMenuOpen(false);
  };
  
  return (
    <>
  <div className="flex justify-between items-center z-50   
        bg-transparent ">       
        <a href="#" >
          <Image src="/KGFlogo.svg" width={79} height={84} alt="KindleGateFoundation Logo" />
        </a>
        <div className=" flex lg:justify-between lg:order-2
          lg:gap-32 sm:gap-16 md:items-center ">            
            <button
              id="Button1"
              className="border-solid border-white bg-[#00a859] 
              px-6 py-1  border rounded-[31px]
              font-bold leading-[28px] " >
                DONATE
              </button>           
                        
            {!isMenuOpen && (
              <button  onClick={toggleNavigation} type="button" 
              className="sminline-flex items-center p-2 w-10 h-10 
              justify-center absolute right-2
              text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
              focus:outline-none focus:ring-2 focus:ring-gray-200 
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
              aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
             

              </button>

              
            )}
        </div> 

        {/* Display navigation submenu on laptop */}
      <div className=' w-9/12 relative '>
        <ul className={`hidden lg:flex justify-between  
          ${isMenuOpen ? 'block' : 'hidden'}`}>
          {links.map((link) => (
            <NavMenuItem item={link} key={link.id} closeMenu={closeNavigation}  />
            
          ))}
          
        </ul>
        {/* </div> */}
      </div>
      
      {/* display navigation menu on mobile */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
             
        <div className="fixed top-0 left-0 w-full h-full 
      flex flex-col items-center bg-[#1086a0] z-50 justify-between">
         <button onClick={closeNavigation} 
         className="absolute top-8 right-4">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
          </button>
          <ul className="mx-auto text-xl text-center py-8">
            {links.map((link) => (
             
              <NavMenuItem item={link} key={link.id} closeMenu={closeNavigation} />
            ))}
            
          </ul>
        </div>
      </div>
      

  </div>

    </>

  );
};

export default NavBarDynamic;










