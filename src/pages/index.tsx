import React from 'react';
import Skeleton from '../components/Skeleton';
import OurTeam from '../components/OurTeam';
import CarouselSlide3 from '../components/CarouselSlide3';
import CarouselSlide2 from '../components/CarouselSlide2';
import Layout from '../components/layouts/Layouts';

export default function Home({ Component, pageProps }) {
  return (
    <>
    <Skeleton />    
    <CarouselSlide3 />
    {/* Our Team */}
    <OurTeam />
  </>
  );
}



