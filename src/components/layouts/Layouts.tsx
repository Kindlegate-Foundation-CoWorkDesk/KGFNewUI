import React, { ReactNode } from "react";
import Image from "next/image";
import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Skeleton from "../Skeleton";
import CarouselSlide from "../CarouselSlide";
import CarouselSlide2 from "../CarouselSlide2";
import CarouselSlide3 from "../CarouselSlide3";
import OurTeam from "../OurTeam";

type LayoutProps = {
    children: ReactNode; // This allows any JSX elements as children
  };
const Layout: React.FC<LayoutProps> = ( {children} ) => {
    const navigationLinks = [
        { text: 'Home', url: '/' },
        { text: 'About', url: '/about' },
        { text: 'Contact', url: '/contact' },
      ]; 
    return (
      // <div className="bg-gray-100 min-h-screen">
        
      //   <header>
      //   <div className="container mx-auto">
      //     <Header links={navigationLinks} />
      //     </div>
      //   </header>
      //   <main className="container mx-auto py-8">
      //   <Skeleton />
      //   {/* <CarouselSlide />
      //   <CarouselSlide2 /> */}
      //   <CarouselSlide3 />
      //   <OurTeam />
      //   </main>
       

      
      //   <footer className="text-white container mx-auto">
      //       <Footer />
      //   </footer>
      //   </div>
      <div id="HOMEPAGERoot" className="bg-white flex flex-col gap-10 w-full">
  <div className="flex flex-col">
    <div className="bg-[url(https://file.rendit.io/n/5MAFpKv2xO99wezo5BMW.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col">
      <div className="bg-black/50 flex flex-col">
        <div className="bg-[linear-gradient(180deg,_rgba(227,_181,_34,_0.25)_0%,rgba(0,_0,_0,_0)_14%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row gap-2 items-start pt-6 pl-8 pr-12">
          <img
            src="https://file.rendit.io/n/XGkm4UCPXd9YwGwdvKjy.png"
            id="Logo1"
            className="mr-16 w-20 shrink-0"
          />
          <div className="font-['Calibri'] font-bold leading-[28px] text-white mt-5 mr-16">
            HOME
          </div>
          <div className="font-['Calibri'] font-bold leading-[28px] text-white mt-5 mr-16">
            OUR MANDATE
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
          </div>
          <div className="flex flex-col justify-between gap-32 items-start mt-6 mb-32">
            <div className="self-end flex flex-row gap-6 w-[440px] items-start">
              <div className="font-['Calibri'] font-bold leading-[28px] text-white mr-6">
                CONTACT US
              </div>
              <div className="font-['Calibri'] font-bold leading-[28px] text-white">
                GET INVOLVED
              </div>
              <img
                src="https://file.rendit.io/n/24OVcGGm1vguyhtW3buM.svg"
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
            <div className="flex flex-col mr-8 gap-4 w-[469px] items-start">
              <div
                id="HowTheIndonesiaYouth"
                className="text-6xl font-['Calibri'] font-bold leading-[64px] text-[#f1f1f1] mb-2"
              >
                KINDLEGATE <br />
                FOUNDATION
              </div>
              <div className="text-justify text-xl font-['Calibri'] leading-[22.5px] text-[#f1f1f1] mb-6 w-full">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est.{" "}
              </div>
              <button
                id="Buttons1"
                className="bg-[#14bde3] self-stretch flex flex-col justify-center h-16 shrink-0 items-center mx-12 rounded-[56px]"
              >
                <div
                  id="StartNow1"
                  className="text-2xl font-['Calibri'] font-bold leading-[28px] text-[#050505]"
                >
                  GET INVOLVED
                </div>
              </button>
              <button
                id="Buttons2"
                className="bg-[#e3b522] self-stretch flex flex-col justify-center h-16 shrink-0 items-center mx-12 rounded-[56px]"
              >
                <div
                  id="StartNow2"
                  className="text-2xl font-['Calibri'] font-bold leading-[28px]"
                >
                  KINDLEGATE CAUSE SHOP
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="BODY"
      className="overflow-hidden bg-[#f1f1f1] flex flex-col justify-center gap-8 items-end pt-10 pb-12 rounded-[40px]"
    >
      <div className="self-stretch flex flex-row mr-16 items-start">
        <div className="relative flex flex-col mb-px w-1/2 items-start">
          <div className="text-3xl font-['Montserrat'] font-bold leading-[72px] text-white absolute top-[141px] left-24 h-16 w-5/6">
            O
          </div>
          <img
            src="https://file.rendit.io/n/XAiOlQFBDBmsRAY04Waa.png"
            id="Asset"
            className="relative"
          />
        </div>
        <div className="self-end flex flex-col gap-2 w-1/2 items-start">
          <div className="self-stretch relative flex flex-col justify-end mb-1 pt-16 items-start">
            <div className="text-3xl font-['Calibri'] font-bold leading-[72px] text-[#14242c] absolute top-0 left-[422.5596008300781px] h-16 w-1/3">
              OUR MANDATE
            </div>
            <div
              id="Line"
              className="border-solid border-[#e3b522] w-40 h-1 absolute top-10 left-[450px] border-t-4 border-b-0 border-x-0"
            />
            <div className="text-sm font-['Calibri'] leading-[32px] text-[#323232] relative w-full">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a
              tellus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. <br />
            </div>
          </div>
          <div className="self-end relative flex flex-col justify-end mr-px w-40 pt-16 pb-2">
            <div
              id="OURMANDATE2"
              className="text-3xl font-['Calibri'] font-bold leading-[72px] text-[#0a2640] absolute top-0 left-0 h-16 w-40"
            >
              OBJECTIVES
            </div>
            <div
              id="Line1"
              className="border-solid border-[#e3b522] relative ml-6 h-1 shrink-0 border-t-4 border-b-0 border-x-0"
            />
          </div>
          <div className="text-sm font-['Calibri'] leading-[32px] text-[#282828] w-full">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. <br />
          </div>
        </div>
      </div>
      <button
        id="Buttons"
        className="bg-[#14bde3] flex flex-col justify-center mr-20 h-16 shrink-0 items-center rounded-[56px]"
      >
        <div
          id="StartNow"
          className="text-2xl font-['Calibri'] font-bold leading-[28px] text-[#1e1e1e] mx-12"
        >
          LEARN MORE
        </div>
      </button>
    </div>
  </div>
  <div className="flex flex-col ml-0 mr-[-126px]">
    <div className="relative flex flex-col ml-1 pt-[458px] pb-[328px] px-24">
      <div
        id="ROADMAP"
        className="border-solid w-[1400px] h-[810px] bg-[#00586b] absolute top-6 left-0 flex flex-col justify-between items-center pt-6 pb-10 pl-32 border-black border rounded-[20px]"
      >
        <div className="self-start relative flex flex-col w-[536px] items-start">
          <div
            id="Line2"
            className="border-solid border-[#e3b522] w-3/5 h-1 absolute top-24 left-0 border-t-4 border-b-0 border-x-0"
          />
          <div className="text-4xl font-['Calibri'] font-bold leading-[49.5px] text-white relative">
            OUR VALUE ADDING ROADMAP <br />
            (HESS MANDATE)
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/nr4FvMNqZMTLewtXuz35.svg"
          id="Dots"
          className="w-20"
        />
      </div>
      <img
        src="https://file.rendit.io/n/4TFTnL6VEZUXJL3NDTRu.png"
        id="Asset1"
        className="w-[346px] h-[343px] absolute top-0 left-[1180px]"
      />
      <img
        src="https://file.rendit.io/n/aRZPdLhNcYlDAecfGzXq.png"
        className="w-[532px] h-[572px] bg-black/15 absolute top-[172px] left-[748px]"
      />
      <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-2/5 h-[354px] bg-[#4b4b4b] absolute top-[316px] left-32 flex flex-col items-start pl-10 py-10 rounded">
        <div className="text-xl font-['Calibri'] leading-[22.5px] text-white ml-2 w-full">
          Healthy communities: <br />
          <br />
          We believe when our communities are healthy and Eco-friendly, people
          thrive. Consequently, often many of the services that keep people
          healthy are difficult to access for the people who need them most. We
          will facilitate enabling environments to promote creativity,
          innovation and collaboration for healthcare causes and objectives. We
          will ensure that through our community networks every Hungry Citizen
          within our reach gets Food Assistance and the Homeless get a clean
          living environment with access to disease prevention medicine.
        </div>
      </div>
      <button
        id="ButtonSlider"
        className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] relative flex flex-row justify-between mr-32 items-start"
      >
        <div
          id="Ellipse"
          className="bg-[#14bde3] mb-px w-12 shrink-0 h-12 rounded-[50%]"
        />
        <img
          src="https://file.rendit.io/n/GIedM53DBwlln10nS2bM.svg"
          className="mt-px w-12 shrink-0"
        />
      </button>
    </div>
    <div className="overflow-hidden bg-white flex flex-col gap-20 h-[767px] shrink-0 items-center ml-1 mr-32 px-24 py-8">
      <div className="text-center text-4xl font-['Calibri'] font-bold leading-[72px] text-[#14242c] w-3/4">
        Featured Programs
      </div>
      <div className="self-stretch flex flex-col ml-3 gap-2">
        <div className="flex flex-row justify-between mb-6 items-start">
          <img
            src="https://file.rendit.io/n/J8pRdHJw5Sc5LRrtQZP2.png"
            className=""
          />
          <img
            src="https://file.rendit.io/n/LxyzzDQcXKKYtUlO7d3A.png"
            className=""
          />
          <img
            src="https://file.rendit.io/n/ttWuu0PWYTMlrbi4DBMX.png"
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
    </div>
    <div
      id="JOIN"
      className="overflow-hidden bg-[#e3b522] flex flex-row justify-between pl-24 items-end ml-1 mr-32"
    >
      <div className="flex flex-col mb-10 gap-8 w-[970px] h-64 items-start">
        <div className="text-2xl font-['Calibri'] font-bold leading-[28px] text-[#1d1d1d] ml-1">
          THE JOURNEY TO BUILDING A BETTER WORLD STARTS HERE WITH YOU
        </div>
        <div className="text-xl font-['Calibri'] leading-[22.5px] mb-6 w-full">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est.
        </div>
        <button
          id="Buttons3"
          className="bg-[#14bde3] flex flex-col justify-center h-16 shrink-0 items-center rounded-[56px]"
        >
          <div
            id="StartNow3"
            className="text-2xl font-['Calibri'] font-bold leading-[28px] text-[#1d1d1d] mx-12"
          >
            GET INVOLVED
          </div>
        </button>
      </div>
      <img
        src="https://file.rendit.io/n/V2PxbY3v6RJ08H0CPq3Y.png"
        id="Asset2"
        className="mt-8"
      />
    </div>
    <div
      id="FOOTER"
      className="overflow-hidden bg-[#1086a0] flex flex-col mr-32 gap-8 h-[496px] shrink-0 py-4"
    >
      <div className="flex flex-row gap-20 items-center mb-5 ml-24 mr-64">
        <div className="self-start flex flex-col gap-3 items-start">
          <img
            src="https://file.rendit.io/n/zmpCXnrGZiJ37D6RH2np.png"
            id="Logo2"
            className=""
          />
          <div className="text-lg font-['Open_Sans'] leading-[32px] text-[#f1f1f1] ml-1 w-full">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar
            ultricies,{" "}
          </div>
        </div>
        <div className="relative flex flex-col mr-5 pb-16 w-40 shrink-0 items-start">
          <div
            id="AboutUsContactUs1"
            className="text-xl font-['Calibri'] leading-[16.5px] text-white absolute top-5 left-0 h-20 w-full"
          >
            About Us
            <br />
            <br />
            Contact Us
            <br />
            <div id="AboutUsContactUs" className="text-[#777777] contents">
              <br />
            </div>
          </div>
          <div className="text-xl font-['Abhaya_Libre'] font-bold leading-[32px] text-white relative w-full">
            Reach Us
          </div>
        </div>
        <div className="relative flex flex-col mr-5 pb-16 w-40 shrink-0 items-start">
          <div className="text-xl font-['Calibri'] leading-[16.5px] text-white absolute top-5 left-0 h-20 w-full">
            Arts
            <br />
            <br />
            SDGs
            <br />
            <br />
            Entrepreneurship
          </div>
          <div className="text-xl font-['Abhaya_Libre'] font-bold leading-[32px] text-white relative w-full">
            Programs
          </div>
        </div>
        <div className="relative flex flex-col pb-16 w-40 shrink-0 items-start">
          <div className="text-xl font-['Calibri'] leading-[16.5px] text-white absolute top-5 left-0 h-20 w-full">
            Blog
            <br />
            <div className="w-40 h-32 relative flex flex-col items-start">
              <div className="text-xl font-['Calibri'] leading-[16.5px] text-[#777777] contents absolute top-0 left-0 h-full w-full">
                <br />
              </div>
              <div className="text-xl font-['Calibri'] leading-[16.5px] text-white contents relative w-full h-full">
                Privacy Policy
                <br />
              </div>
            </div>
            <div className="w-40 h-32 relative flex flex-col items-start">
              <div className="text-xl font-['Calibri'] leading-[16.5px] text-[#777777] contents absolute top-0 left-0 h-full w-full">
                <br />
              </div>
              <div className="text-xl font-['Calibri'] leading-[16.5px] text-white contents relative w-full h-full">
                News
              </div>
            </div>
          </div>
          <div className="text-xl font-['Abhaya_Libre'] font-bold leading-[32px] text-white relative w-full">
            Resources
          </div>
        </div>
      </div>
      <div
        id="Line3"
        className="border-solid border-white mr-1 h-px shrink-0 border-t border-b-0 border-x-0"
      />
      <div className="self-center flex flex-row justify-between gap-8 items-start">
        <img
          src="https://file.rendit.io/n/g1VqThtSGgjtQ17f619C.svg"
          id="Icbaselinefacebook"
          className="w-10 shrink-0"
        />
        <img
          src="https://file.rendit.io/n/v0BQZAGI98JhGL9CIajd.svg"
          id="Mdiinstagram"
          className="w-12 shrink-0"
        />
        <img
          src="https://file.rendit.io/n/NhEKB3HW0WDnlWWggmCY.svg"
          id="Mditwitter"
          className="w-10 shrink-0"
        />
        <img
          src="https://file.rendit.io/n/S5dPwfNwZapxfOCAAgD1.svg"
          id="Biyoutube"
          className="mt-px w-10 shrink-0"
        />
      </div>
    </div>
  </div>
</div>

    )
}

export default Layout;

