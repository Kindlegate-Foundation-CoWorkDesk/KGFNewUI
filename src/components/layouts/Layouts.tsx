import React, { ReactNode, useEffect } from "react";
import Header from "../Header";
import Skeleton from "../Skeleton";
import JoinJourney from "../JoinJourney";
import {HeroPosition} from "../../enums/enums";
import { useRouter } from 'next/router';
import { useGlobalContext } from "../../../context/GlobalContext";
import { navigationDynamicLinks } from "../../services/navigationDynamicData";
import NavBarDynamic from "../NavBarDynamic";
import NavBar2 from "../NavBar2";
import { getNavigationHeroData } from "../../services/navigationHeroData";
import Footer from "../Footer";



type LayoutProps = {
    children: ReactNode; // This allows any JSX elements as children
  };
const Layout: React.FC<LayoutProps> = ( {children} ) => {

    
      const { dispatch } = useGlobalContext();

      const router = useRouter();

      const {state} = useGlobalContext();
    
      const handleNavigationChanged = (heroTitle:string, heroContent: string, backgroundImageUrl: string) => {
        dispatch({type: 'NAVIGATION_ITEM_CHANGED', payload: {heroTitle, heroContent, backgroundImageUrl}});
      }
        // Create event handlers for each navigation link
      

      useEffect(() => {
          const currentPathname = router.pathname;
          const {heroTitle, heroContent, backgroundImageUrl} = getNavigationHeroData(currentPathname);
          handleNavigationChanged(heroTitle, heroContent, backgroundImageUrl)
      }, [router.pathname]);
      
    return (
      
      <>
      <div className="container mx-auto w-full relative">
        <div className=" absolute top-0 w-full p-4">
          <NavBarDynamic links={navigationDynamicLinks}   />
         
        </div>
        {/* <NavBar2 /> */}
      <div className="bg-black/50 flex flex-col bg-cover bg-blend-normal bg-no-repeat " 
      style={{ backgroundImage: `url(${state.backgroundImageUrl})` }}
      >
      <Header links={navigationDynamicLinks}/>
      </div>
      <div className="relative">
      {children}
      </div>
        
        {/* <JoinJourney /> */}
        <JoinJourney />

        {/* <Footer /> */}
        <Footer />
      </div>
      </>

    )
}

export default Layout;

