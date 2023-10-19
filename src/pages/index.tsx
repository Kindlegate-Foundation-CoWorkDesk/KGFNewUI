import React from 'react';
import Skeleton from '../components/Skeleton';
import OurTeam from '../components/OurTeam';
import CarouselSlide3 from '../components/CarouselSlide3';

export default function Home({ Component, pageProps }) {
  return (
    <>
    <Skeleton />    
    <CarouselSlide3 />
    <OurTeam />
  </>
  );
}



