import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

interface NavBarProps {
  links: { text: string; url: string }[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <>
 
    <header>
    <nav className="bg-transparent border-b px-2 lg:px-4 py-1 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
                <Image src="../KGFlogo.svg" width={79} height={84} alt="KindleGateFoundation Logo" />
            </a>
            <div className="flex items-center lg:order-2">
                <button type="button" className="text-white bg-button-green py-1 px-7 gap-2.5 rounded-lg">DONATE</button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
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
                        className="flex items-center justify-between w-full  pl-3 pr-4 text-white rounded hover:bg-gray-50 
                        lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-white md:dark:hover:text-blue-500 
                        dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">GET INVOLVED 
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg 
                        shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className=" text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#" className="block px-4  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 
                                dark:text-gray-400 dark:hover:text-white">Sign out</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    



</header>

    </>

  );
};

export default NavBar;
