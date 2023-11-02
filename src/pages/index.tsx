import React from 'react';
import Skeleton from '../components/Skeleton';
import OurTeam from '../components/OurTeam';
import OurTeam2 from '../components/OurTeam2';
import CarouselSlide from '../components/CarouselSlide';

export default function Home({ Component, pageProps }) {
  return (
    <>
    <Skeleton />    
    <CarouselSlide  />
    {/* <OurTeam /> */}
    <OurTeam2 />
  </>
  );
}



