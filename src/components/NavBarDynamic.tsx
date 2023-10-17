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

const NavMenuItem: React.FC<{item: NavItem}> = ({item}) =>{
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!isSubmenuOpen);
  };

  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  return (

    <li className="relative group ">
      <Link href={item.url} className="text-white text-xl font-['Calibri'] font-bold leading-[28px]">
        {/* <a className="text-white text-xl font-['Calibri'] font-bold leading-[28px]"> */}
          {item.text}
        {/* </a> */}
      </Link>
      {item.submenu && (
        <button
          onClick={toggleSubmenu}
          className="ml-2.5 w-2.5 h-2.5 transform transition-transform"
        >
          <svg
            className={`w-2.5 h-2.5 transform transition-transform ${
              isSubmenuOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1 4 4 4-4"
            />
          </svg>
        </button>
      )}
      {isSubmenuOpen && item.submenu && (
        <ul className="flex justify-between items-center top-full left-0 hidden group-hover:block">
          {item.submenu.map((subitem) => (
            <li key={subitem.id}>
              <Link href={subitem.url} className="block px-4 py-2 text-white hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeSubmenu}>
                {/* <a
                  className="block px-4 py-2 text-white hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeSubmenu}
                > */}
                  {subitem.text}
                {/* </a> */}
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
  <nav className="bg-[linear-gradient(180deg,_rgba(227,_181,_34,_0.25)_0%,rgba(0,_0,_0,_0)_14%)] 
        bg-cover bg-50%_50% 
        bg-blend-normal bg-repeat 
        items-center pt-6 lg:px-5
        flex justify-between ">
        <a href="#" className="flex items-center">
          <Image src="../KGFlogo.svg" width={79} height={84} alt="KindleGateFoundation Logo" />
        </a>
        
        <div className="flex justify-between lg:order-2
          lg:gap-32 items-center ">
            
            <button
              id="Button1"
              className="border-solid border-white bg-[#00a859] 
              flex  items-center justify-center
              px-6 py-1 border rounded-[31px]" 
            >
              <div className="font-['Calibri'] font-bold leading-[28px] text-white">
                DONATE
              </div></button>           
            
            {/* button donate order-2 */}

            {/* toggle button */}
                        
            {!isMenuOpen && (

              <button  onClick={toggleNavigation} type="button" 
              className="inline-flex  items-center p-2 w-10 h-10 
              justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
              focus:outline-none focus:ring-2 focus:ring-gray-200 
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
             

              </button>

              
            )}
        </div>
          

      {/* display navigation menu on mobile */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed top-0 left-0 w-full h-full 
      flex items-center bg-gray-800 z-50 justify-between">
          <ul className="mx-auto text-white text-xl text-center">
            {links.map((link) => (
              <NavMenuItem item={link} key={link.id} />
            ))}
            <li>
              <button onClick={closeNavigation} className="text-red-500">
                Close Navigation
              </button>
            </li>
          </ul>
        </div>
      </div>
          
        {/* Display navigation menu on laptop */}
      <div className='
            justify-between items-center w-full
            md:block md:w-auto lg:order-1'>
        <ul className={`hidden lg:flex mx-auto 
          text-white text-xl text-center justify-between
          ${isMenuOpen ? 'block' : 'hidden'}`}>
          {links.map((link) => (
            <NavMenuItem item={link} key={link.id} />
            
          ))}
          
        </ul>
      </div>
      
      

  </nav>

    </>

  );
};

export default NavBarDynamic;
