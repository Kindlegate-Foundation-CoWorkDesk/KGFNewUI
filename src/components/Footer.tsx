import React from 'react';
import Image  from 'next/image';

const Footer: React.FC = () => {
  return (
      <>
      

<div
    id="FOOTER"
    className="overflow-hidden bg-[#1086a0] flex flex-col 
    gap-8 shrink-0 mx-0 py-4
    "
  >
    <div className="flex md:flex-row lg: items-center mb-5 md:ml-24 md:mr-64
      
    ">
      <div className="self-start flex flex-col gap-3 
      items-start">
        <Image alt='logo' width={136} height={144}
          src="https://file.rendit.io/n/G76gGj6jrViojYqDSjhE.png"
          id="Logo2"
          className=""
        />
        <div className="text-lg leading-[32px]  ml-1 w-full">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar
          ultricies,{" "}
        </div>
      </div>
      <div className="relative flex flex-col mr-5 pb-16 w-40 shrink-0 items-start">
        <div
          id="AboutUsContactUs1"
          className="text-xl leading-[16.5px]  
          absolute top-10 left-0 h-20 w-full"
        >
          About Us
          <br />
          <br />
          Contact Us
          <br />
          <div id="AboutUsContactUs" className="contents">
            <br />
          </div>
        </div>
        <div className="text-xl font-bold leading-[32px]  
        relative w-full">
          Reach Us
        </div>
      </div>
      <div className="relative flex flex-col mr-5 pb-16 w-40 shrink-0 items-start">
        <div className="text-xl leading-[16.5px]  absolute top-10 left-0 h-20 w-full">
          Arts
          <br />
          <br />
          SDGs
          <br />
          <br />
          Entrepreneurship
        </div>
        <div className="text-xl  font-bold leading-[32px]  relative w-full">
          Programs
        </div>
      </div>
      <div className="relative flex flex-col mr-5 pb-16 w-40 shrink-0 items-start">
        <div className="text-xl  leading-[16.5px]  absolute top-10 left-0 h-20 w-full">
          Blog
          <br />
          <br />
          Privacy Policy
          <br />
          <br />
          News
        </div>
        <div className="text-xl font-bold leading-[32px]  relative w-full">
          Resource
        </div>
      </div>
      
    </div>
    <div
      id="Line3"
      className="border-solid border-white mr-1 h-px shrink-0 border-t border-b-0 border-x-0"
    />
    <div className="self-center flex flex-row justify-between gap-8 items-start">
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
      </>
  );
};

export default Footer;
