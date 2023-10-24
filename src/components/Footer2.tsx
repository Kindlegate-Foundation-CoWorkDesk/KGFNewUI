import React from 'react';
import Image  from 'next/image';
const Footer2: React.FC = () => {
  return (
      <>
      
      

      <div
    id="FOOTER" className="bg-[#1086a0] dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl ">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 items-center justify-center">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase 
            dark:text-white"><Image alt='logo' width={136} height={144}
            src="../KGFFooterLogo.svg"
            id="Logo2"
            className=""
          /></h2>
            <ul className="dark:text-gray-400 text-lg leading-[32px]">
                <li className="mb-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar
          ultricies,
                </li>
                
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-xl font-bold
            dark:text-white">Reach Us</h2>
            <ul className="text-xl leading-[16.5px]
            dark:text-gray-400 ">
                <li className="mb-4">
                    <a href="#" className="hover:underline">About Us</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Contact Us</a>
                </li>
                
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-xl font-bold dark:text-white">Programs</h2>
            <ul className="text-xl leading-[16.5px] dark:text-gray-400 ">
                <li className="mb-4">
                    <a href="/Program/Arts" className="hover:underline">Arts</a>
                </li>
                <li className="mb-4">
                    <a href="/Program/SBGAwareness" className="hover:underline">SDGs</a>
                </li>
                <li className="mb-4">
                    <a href="/Program/Entrepreneurship" className="hover:underline">Entrepreneurship &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-xl font-bold dark:text-white">Resource</h2>
            <ul className="text-xl leading-[16.5px] dark:text-gray-400">
                <li className="mb-4">
                    <a href="/Blog" className="hover:underline">Blog</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">News</a>
                </li>
                
            </ul>
        </div>
      </div>

    <div
      id="Line3"
      className="border-solid border-white mr-1 h-px shrink-0 border-t border-b-0 border-x-0"
    />

    <div className="px-4 py-6 dark:bg-gray-700 flex items-center justify-center ">
        
        <div className="flex mt-4 space-x-9 justify-center md:mt-0">
          <Image alt='facebook' width={40} height={40}
            src="https://file.rendit.io/n/1ROVdiAIm7XuC4Dm4szm.svg"
            id="Icbaselinefacebook"
            className="w-10 shrink-0"
          />
          <Image alt='instagram' width={40} height={40}
            src="https://file.rendit.io/n/k6aOe0hbvjiqZYwLq06i.svg"
            id="Mdiinstagram"
            className="w-12 shrink-0"
          />
          <Image alt='twitter' width={40} height={40}
            src="https://file.rendit.io/n/4sYkvmtwIFFWlNwPtjqF.svg"
            id="Mditwitter"
            className="w-10 shrink-0"
          />
          <Image alt='youtube' width={40} height={40}
            src="https://file.rendit.io/n/XYOHQE6kAdbBmcyvFUXZ.svg"
            id="Biyoutube"
            className="mt-px w-10 shrink-0"
          />
        </div>
      </div>
    </div>
</div>




      </>
  );
};

export default Footer2;
