import React, { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "../Footer";
import Skeleton from "../Skeleton";
import OurTeam from "../OurTeam";
import JoinJourney from "../JoinJourney";
import {HeroPosition} from "../../enums/enums";
import { useRouter } from 'next/router';
import { useGlobalContext } from "../../../context/GlobalContext";




type LayoutProps = {
    children: ReactNode; // This allows any JSX elements as children
    backgroundImage: string;
  };
const Layout: React.FC<LayoutProps> = ( {children, backgroundImage} ) => {

    const navigationLinks = [
        { id: 1, text: 'HOME', url: '/', identifier: 'home' },
        { id: 2, text: 'OUR MANDATE', url: '/OurMandate', identifier: 'ourMandate' },
        { id: 3, text: 'PROGRAM', url: '/Program', identifier: 'program' },
        { id: 4, text: 'OUR TRIBE', url: '/OurTribe', identifier: 'ourTribe' },
        { id: 5, text: 'NEWS', url: '/NewsAndEvent', identifier: 'newsAndEvent' },
        { id: 6, text: 'BLOG', url: '/Blog', identifier: 'blog' },
        { id: 7, text: 'CONTACT US', url: '/ContactUs', identifier: 'contactUs' },
      ]; 
      const { dispatch } = useGlobalContext();

      const router = useRouter();
    
      const handleNavigationChanged = (heroTitle:string, heroContent: string) => {
        dispatch({type: 'NAVIGATION_ITEM_CHANGED', payload: {heroTitle, heroContent}});
      }
        // Create event handlers for each navigation link
      

      useEffect(() => {
        if (router.pathname === "/") {
          handleNavigationChanged('KINDLEGATE FOUNDATION', `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Maecenas porttitor congue massa. Fusce posuere, magna sed
          pulvinar ultricies, purus lectus malesuada libero, sit amet
          commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
          est.`);
        } else if (router.pathname === "/OurMandate") {
          handleNavigationChanged('OUR MANDATE', `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Maecenas porttitor congue massa. 
          Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
          sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `);
        }
        else if (router.pathname === "/Program"){
          handleNavigationChanged('PROGRAMS',`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Maecenas porttitor congue massa. 
          Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
          sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `);
        } else if (router.pathname === "/OurTribe"){
          handleNavigationChanged('OUR TRIBE',`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Maecenas porttitor congue massa. 
          Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
          sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `);
        } else if (router.pathname === "/NewsAndEvent"){
          handleNavigationChanged('NEWS AND EVENT',`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Maecenas porttitor congue massa. 
          Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
          sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `);
        } else if (router.pathname === "/Blog"){
          handleNavigationChanged('BLOG',`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Maecenas porttitor congue massa. 
          Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
          sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `);
        } else if (router.pathname === "/ContactUs"){
          handleNavigationChanged('REACH US',`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Maecenas porttitor congue massa. 
          Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
          sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `);
        }
    
    
      }, [router.pathname]);
      
    return (
      
      <>
      <div className="container mx-auto ">
        <Header links={navigationLinks} 
        backgroundImage={backgroundImage} 
        />
      
        {children}

        <JoinJourney />
      
        <Footer />
      </div>
      </>

    )
}

export default Layout;

