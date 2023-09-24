// pages/_app.tsx

import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* Your app content */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
