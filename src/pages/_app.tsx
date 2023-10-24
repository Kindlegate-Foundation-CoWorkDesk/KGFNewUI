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

  
  
  
  

  return (
    <GlobalProvider>
    <Layout>
      
      <Component {...pageProps} />
      <Script src='../node_modules/flowbite/dist/flowbite.min.js' />
    </Layout>
    </GlobalProvider>
  );
}

