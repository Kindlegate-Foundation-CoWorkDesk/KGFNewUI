import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Hero from './Hero';
import Link from 'next/link';

interface NavBarProps {
  links: {id: string; text: string; url: string }[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {

  

  return (
    <>
 
    {/* <header> */}
    {/* <nav className="bg-transparent border-b px-2 lg:px-4 py-1 dark:bg-gray-800">
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

    
        <div className="bg-[linear-gradient(180deg,_rgba(227,_181,_34,_0.25)_0%,rgba(0,_0,_0,_0)_14%)] 
        bg-cover bg-50%_50% bg-blend-normal bg-repeat 
        flex flex-row items-start pt-6 px-5">
          <img
            src="https://file.rendit.io/n/BtD3T75ciOcAEFpbd0Ws.png"
            id="Logo1"
            className="mr-16 w-20 shrink-0"
          />
          {links.map((link) => (
              
              <div key={link.id} className="font-['Calibri'] font-bold leading-[28px] text-white mt-5 mr-16">
              <Link key={link.id} href={link.url}> {link.text}</Link>
              {/* <Link href={`/blog/${encodeURIComponent(link.url)}`}>
                {link.text}
              </Link> */}
            </div>
          ))}
          {/* <div className="font-['Calibri'] font-bold leading-[28px] text-white mt-5 mr-16">
            HOME
          </div>
          <div className="font-['Calibri'] font-bold leading-[28px] text-white mt-5 mr-16">
            <Link href="/OurMandate"> OUR MANDATE</Link>
           
          </div>
          <div className="font-['Calibri'] font-bold leading-[28px] text-white mt-5 mr-12">
            PROGRAMS
          </div>
          <div className="font-['Calibri'] font-bold leading-[28px] text-white mt-5 mr-8">
            OUR TRIBE
          </div>
          <div className="font-['Calibri'] font-bold leading-[28px] text-white mt-5 mr-16">
            NEWS
          </div>
          <div className="font-['Calibri'] font-bold leading-[28px] text-white mt-6">
            BLOG
          </div> */}
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
          
        

     

    {/* <div className="overflow-hidden bg-white flex flex-col mr-32 gap-20 h-[767px] shrink-0 items-center px-24 py-8">
      <div className="text-center text-4xl font-['Calibri'] font-bold leading-[72px] text-[#14242c] w-3/4">
        Featured Programs
      </div>
      <div className="self-stretch flex flex-col ml-3 gap-2">
        <div className="flex flex-row justify-between mb-6 items-start">
          <img
            src="https://file.rendit.io/n/ZIx6gw4skZ1jksZbz1y4.png"
            className=""
          />
          <img
            src="https://file.rendit.io/n/XGewv1ySQMXB2japrpB9.png"
            className=""
          />
          <img
            src="https://file.rendit.io/n/SJBYudhXg3vgLo02ZzTA.png"
            id="Pexelsstevejohnson"
            className=""
          />
        </div>
        <div className="flex flex-row gap-64 items-start mb-8 mr-[323px]">
          <div className="text-center text-2xl font-['Calibri'] font-bold leading-[28px] text-[#0a2640] mb-2 mr-12">
            Leadership
          </div>
          <div className="text-center text-2xl font-['Calibri'] font-bold leading-[28px] text-[#0a2640] mt-2">
            Entrpreneurship
          </div>
          <div className="text-center text-2xl font-['Calibri'] font-bold leading-[28px] text-[#0a2640] mt-1">
            Arts
          </div>
        </div>
        <div className="flex flex-row mr-32 gap-10 items-start">
          <div className="text-xl font-['Calibri'] leading-[22.5px] w-1/3 mb-1 mr-6">
            Promoting thought based Leadership in the Community
          </div>
          <div className="text-xl font-['Calibri'] leading-[22.5px] mt-1">
            Engage in entrepreneurial activities and learn
            <br />
            the necessary skills to make it
          </div>
          <div className="text-justify text-xl font-['Calibri'] leading-[22.5px] mt-px">
            We engage the community in
            <br />
            recreational activities....
          </div>
        </div>
        <div className="flex flex-row justify-between mr-64 items-start">
          <div className="text-2xl font-['Calibri'] underline leading-[32px] text-[#00a859] mb-1">
            Read more
          </div>
          <div className="text-2xl font-['Calibri'] underline leading-[32px] text-[#00a859] mt-1">
            Read more
          </div>
          <div className="text-2xl font-['Calibri'] underline leading-[32px] text-[#00a859] mt-px">
            Read more
          </div>
        </div>
      </div>
    </div> */}

    
  </div>

    </>

  );
};

export default NavBar;
