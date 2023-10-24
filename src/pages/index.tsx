import React from 'react';
import Skeleton from '../components/Skeleton';
import Skeleton2 from '../components/Skeleton2';
import OurTeam from '../components/OurTeam';
import OurTeam2 from '../components/OurTeam2';
import CarouselSlide3 from '../components/CarouselSlide3';
import CarouselSlide from '../components/CarouselSlide';

export default function Home({ Component, pageProps }) {
  return (
    <>
    <Skeleton2 />    
    <CarouselSlide  />
    {/* <CarouselSlide4 /> */}
    {/* <OurTeam /> */}
    <OurTeam2 />
  </>
  );
}



