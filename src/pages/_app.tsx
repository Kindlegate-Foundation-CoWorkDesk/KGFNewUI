// pages/_app.tsx

import React, {useEffect, useState} from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Script from 'next/script';
import Layout from '../components/layouts/Layouts';
import { HeroPosition } from '../enums/enums';
import { GlobalProvider } from '../../context/GlobalContext';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [backgroundImage, setBackgroundImage] = useState('');
  
  useEffect(() => {
    if (router.pathname === "/") {
      setBackgroundImage("/close-up-community-concept-with-hands.svg");
    } else if (router.pathname === "/OurMandate") {
      setBackgroundImage("/cute-black-baby-home-with-parents.svg");
    }else if (router.pathname === "/Program"){
      setBackgroundImage("/study-group-african-people.svg");
    } else if (router.pathname === "/OurTribe"){
      setBackgroundImage("/group-happy-african-volunteers-hugs-park-africa-volunteering-charity-people-ecology-concept.svg");
    } else if (router.pathname === "/NewsAndEvent"){
      setBackgroundImage("/man-reading-newspaper-street.svg");
    } else if (router.pathname === "/Blog"){
      setBackgroundImage("/group-afro-americans-working-together.svg");
    } else if (router.pathname === "/ContactUs"){
      setBackgroundImage("/happy-black-businesswoman-taking-phone-while-working-laptop-office.svg");
    }


  }, [router.pathname]);

  

  return (
    <GlobalProvider>
    <Layout backgroundImage={backgroundImage}>
      
      <Component {...pageProps} />
      <Script src='../node_modules/flowbite/dist/flowbite.min.js' />
    </Layout>
    </GlobalProvider>
  );
}

