import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Hero from './Hero';
import Link from 'next/link';
import { useState } from 'react';
interface NavBarProps {
  links: {id: string; text: string; url: string }[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {

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
 
    {/* <header> */}
    {/* <nav className="bg-transparent border-b px-2 lg:px-4 py-1 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center 
              mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
                <Image src="../KGFlogo.svg" width={79} height={84} alt="KindleGateFoundation Logo" />
            </a>
            <div className="flex items-center lg:order-2">
                <button type="button" 
                className="text-white bg-button-green py-1 px-7 
                gap-2.5 rounded-lg">DONATE</button>
            </div>
            <div className="hidden justify-between items-center
            w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col 
                mt-4 font-medium 
                lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" className="block  pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">HOME</a>
                    </li>
                    <li>
                        <a href="#" className="block  pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">OUR MANDATE</a>
                    </li>
                    <li>
                        <a href="#" className="block  pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">PROGRAMS</a>
                    </li>
                    <li>
                        <a href="#" className="block  pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">OUR TRIBE</a>
                    </li>
                    <li>
                        <a href="#" className="block  pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">NEWS</a>
                    </li>
                    <li>
                        <a href="#" className="block  pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">BLOG</a>
                    </li>
                    <li>
                        <a href="#" className="block  pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                        lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">CONTACT US</a>
                    </li>
                    
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" 
                        className="flex items-center justify-between w-full  pl-3 pr-4 text-white hover:bg-gray-50 
                        lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-white md:dark:hover:text-blue-500 
                        dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">GET INVOLVED 
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        </button>
                        <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg 
                        shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className=" text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#" className="block px-4  
                                    hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">AS A SPONSOR</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4  
                                    hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">AS A MENTOR</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4  
                                    hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">AS A VOLUNTEER</a>
                                </li>
                            </ul>
                            
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav> */}


    



    {/* </header> */}

    
        {/* <div className="bg-[linear-gradient(180deg,_rgba(227,_181,_34,_0.25)_0%,rgba(0,_0,_0,_0)_14%)] 
        bg-cover bg-50%_50% bg-blend-normal bg-repeat 
        flex flex-wrap items-start pt-6 px-5
        justify-between">
          <a href="#" className="flex items-center">
            <Image src="../KGFlogo.svg" width={79} height={84} alt="KindleGateFoundation Logo" />
          </a>
          <div className='hidden justify-between items-center w-full lg:flex lg:mt-0' id="mobile-menu-2">
            <ul className='flex flex-col lg:flex-row'></ul>
          </div>
          {links.map((link) => (
              
              <div key={link.id} 
              className="font-['Calibri'] font-bold leading-[28px] 
              text-white mt-5 mr-16">
              <Link key={link.id} href={link.url}> {link.text}</Link>
            </div>
          ))}
          <div className="flex flex-col justify-between gap-32 items-start mt-6 mb-32">
            <div className="self-end flex flex-row gap-6 w-[440px] items-start">
              <div className="font-['Calibri'] font-bold leading-[28px] text-white mr-6">
                CONTACT US
              </div>
              <div className="font-['Calibri'] font-bold leading-[28px] text-white">
                GET INVOLVED
              </div>
              

              <img
                src="https://file.rendit.io/n/m4eEgPuWV1ZxjWDC3ka8.svg"
                id="Polygon"
                className="w-3 shrink-0 mt-3 mr-10"
              />
              

              <button
                id="Button1"
                className="border-solid border-white bg-[#00a859] flex flex-col items-center px-6 py-1 border rounded-[31px]"
              >
                <div className="font-['Calibri'] font-bold leading-[28px] text-white">
                  DONATE
                </div>
              </button>
            </div>
                        

          </div>
  </div> */}

<nav className="bg-[linear-gradient(180deg,_rgba(227,_181,_34,_0.25)_0%,rgba(0,_0,_0,_0)_14%)] 
        bg-cover bg-50%_50% bg-blend-normal bg-repeat 
        lg:flex items-start pt-6 lg:px-5
        justify-between ">

{/* <nav className="bg-gradient-to-b from-yellow-200 to-transparent bg-cover bg-center bg-no-repeat bg-50% 
sm:flex sm:items-start sm:pt-6 lg:px-5 justify-between">
  <!-- Your navigation menu content here -->
</nav> */}


        <a href="#" className="flex items-center">
          <Image src="../KGFlogo.svg" width={79} height={84} alt="KindleGateFoundation Logo" />
        </a>
          
        <div className="flex justify-between lg:order-2
          lg:gap-32 items-start mt-6 mb-32 ">
            
            <button
              id="Button1"
              className="border-solid border-white bg-[#00a859] 
              flex flex-col items-center 
              px-6 py-1 border rounded-[31px]"
            >
              <div className="font-['Calibri'] font-bold leading-[28px] text-white">
                DONATE
              </div>
            </button> 
            {/* button donate order-2 */}

            {/* toggle button */}
                        
            {!isMenuOpen && (
              

              <button  onClick={toggleNavigation} type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
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
              <li key={link.id} className="mb-4">
                <Link href={link.url} onClick={toggleNavigation}>
                  {link.text}
                </Link>
              </li>
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
          text-white text-xl text-center 
          ${isMenuOpen ? 'block' : 'hidden'}`}>
          {links.map((link) => (
            <li key={link.id} className="font-['Calibri'] font-bold leading-[28px] 
            text-white mt-5 mr-16">
              <Link href={link.url}>{link.text}</Link>
            </li>
            
          ))}
          <li className="font-['Calibri'] font-bold leading-[28px] 
            text-white mt-5 ">
            <button className='flex items-center' onClick={() => setDropdownOpen(!isDropdownOpen)}>GET INVOLVED 
            <svg className={`w-2.5 h-2.5 ml-2.5 ${isDropdownOpen ? 'rotate-180' : ''}`}

            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button >
                    {/* <!-- Dropdown menu --> */}
                    <div id="dropdownNavbar" 
                    className={`z-10 absolute ${isDropdownOpen ? 'block' : 'hidden'} font-normal border
                    divide-y divide-gray-100  shadow w-44 `}
                    
                    >
                        <ul className="py-2 font-['Calibri'] font-bold leading-[28px]" aria-labelledby="dropdownLargeButton">
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-400 
                            dark:hover:bg-gray-600 dark:hover:text-white">AS A SPONSOR</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-400 
                            dark:hover:bg-gray-600 dark:hover:text-white">AS A MENTOR</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-400 
                            dark:hover:bg-gray-600 dark:hover:text-white">AS VOLUNTEER</a>
                          </li>
                        </ul>
                        
                    </div>
                </li>
        </ul>
      </div>
      
      

  </nav>

    </>

  );
};

export default NavBar;
