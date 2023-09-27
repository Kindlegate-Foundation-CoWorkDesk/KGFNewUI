import React, { ReactNode } from "react";
import Image from "next/image";
import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Skeleton from "../Skeleton";

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
        <>
        <Header links={navigationLinks} />
        <Skeleton />
        <Footer />
        </>
    )
}

export default Layout;

