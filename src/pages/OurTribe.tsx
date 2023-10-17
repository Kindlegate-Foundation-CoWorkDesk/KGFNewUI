import React from 'react';
import OurTribiItems from '../components/OurTribiItems';

export default function OurTribe({ Component, pageProps }) {
  return (
    <div className="bg-[#00586B] flex flex-col">
      <div className="text-center text-4xl font-bold 
      leading-72 text-white pt-10">Our Team</div>
      <OurTribiItems />
      <OurTribiItems />
      <OurTribiItems />
      <OurTribiItems />

    </div>
    
  );
}



