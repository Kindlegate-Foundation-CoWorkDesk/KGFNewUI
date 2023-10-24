import React, { ReactNode, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Skeleton from "../Skeleton";
import JoinJourney from "../JoinJourney";
import {HeroPosition} from "../../enums/enums";
import { useRouter } from 'next/router';
import { useGlobalContext } from "../../../context/GlobalContext";
import { navigationDynamicLinks } from "../../services/navigationDynamicData";
import NavBarDynamic from "../NavBarDynamic";
import { getNavigationHeroData } from "../../services/navigationHeroData";
import Footer2 from "../Footer2";
import JoinJourney2 from "../JoinJourne2";



type LayoutProps = {
    children: ReactNode; // This allows any JSX elements as children
    backgroundImage: string;
  };
const Layout: React.FC<LayoutProps> = ( {children, backgroundImage} ) => {

    
      const { dispatch } = useGlobalContext();

      const router = useRouter();
    
      const handleNavigationChanged = (heroTitle:string, heroContent: string) => {
        dispatch({type: 'NAVIGATION_ITEM_CHANGED', payload: {heroTitle, heroContent}});
      }
        // Create event handlers for each navigation link
      

      useEffect(() => {
          const currentPathname = router.pathname;
          const {heroTitle, heroContent} = getNavigationHeroData(currentPathname);
          handleNavigationChanged(heroTitle, heroContent)
      }, [router.pathname]);
      
    return (
      
      <>
      <div className="container mx-auto w-full relative">
        <div className="bg-gray-500 absolute top-0 w-full p-4">
          {/* <NavBarDynamic links={navigationDynamicLinks}   /> */}
        </div>
      <div className="bg-black/50 flex flex-col bg-cover bg-blend-normal bg-no-repeat " 
      // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      {/* <Header links={navigationDynamicLinks}/> */}
      </div>
      <div className="relative">
      {/* {children} */}
      </div>
        
        {/* <JoinJourney /> */}
        <JoinJourney2 />

        {/* <Footer /> */}
        <Footer2 />
      </div>
      </>

    )
}

export default Layout;

