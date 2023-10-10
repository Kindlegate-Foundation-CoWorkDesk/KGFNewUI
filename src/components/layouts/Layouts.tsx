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
import JoinJourney from "../JoinJourney";

type LayoutProps = {
    children: ReactNode; // This allows any JSX elements as children
  };
const Layout: React.FC<LayoutProps> = ( {children} ) => {
    const navigationLinks = [
        { id: 1, text: 'HOME', url: '/' },
        { id: 2, text: 'OUR MANDATE', url: '/OurMandate' },
        { id: 3, text: 'PROGRAM', url: '/Program' },
        { id: 4, text: 'OUR TRIBE', url: '/OurTribe' },
        { id: 5, text: 'NEWS', url: '/News' },
        { id: 6, text: 'BLOG', url: '/Blog' },
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

      // <div className="bg-gray-100 min-h-screen">
      //   <Footer />
      // </div>
      <>
      <div className="container mx-auto ">
        <Header links={navigationLinks} />

      
      
      {children}

      <JoinJourney />
     
      <Footer />
      </div>
      </>

    )
}

export default Layout;

