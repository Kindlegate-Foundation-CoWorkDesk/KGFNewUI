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
      <div className="bg-gray-100 min-h-screen">
        
        <header>
        <div className="container mx-auto">
          <Header links={navigationLinks} />
          </div>
        </header>
        <main className="container mx-auto py-8">
        <Skeleton />
        {/* <CarouselSlide />
        <CarouselSlide2 /> */}
        <CarouselSlide3 />
        <OurTeam />
        </main>
       

      
        <footer className="text-white container mx-auto">
            <Footer />
        </footer>
        </div>
    )
}

export default Layout;

