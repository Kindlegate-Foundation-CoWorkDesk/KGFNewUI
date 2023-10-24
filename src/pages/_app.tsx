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

  const backgroundImages = {
    '/': '/close-up-community-concept-with-hands.svg',
    '/OurMandate': '/cute-black-baby-home-with-parents.svg',

    '/Program': '/study-group-african-people.svg',
      '/Program/Arts': '/study-group-african-people.svg', // Map both routes to the same image
      '/Program/Leadership':'/study-group-african-people.svg',
      '/Program/Entrepreneurship':'/study-group-african-people.svg',
      '/Program/FoodShelter':'/study-group-african-people.svg',
      '/Program/SBGAwareness':'/study-group-african-people.svg',
      
    '/OurTribe': '/group-happy-african-volunteers-hugs-park-africa-volunteering-charity-people-ecology-concept.svg',

      '/NewsAndEvent': '/man-reading-newspaper-street.svg',
    '/Blog': '/group-afro-americans-working-together.svg',
    '/ContactUs': '/happy-black-businesswoman-taking-phone-while-working-laptop-office.svg',
  };
  
  useEffect(() => {
    const backgroundImageURL = backgroundImages[router.pathname];
    if (backgroundImageURL) {
      setBackgroundImage(backgroundImageURL);
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

