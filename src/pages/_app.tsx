// pages/_app.tsx

import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import Script from 'next/script';
import Layout from '../components/layouts/Layouts';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>

      <Component {...pageProps} />
      <Script src='../node_modules/flowbite/dist/flowbite.min.js' />
    </Layout>
  );
}

