
import '../styles/globals.css'; // Import global styles
import '../styles/section4.css';
import React from 'react';
import type { AppProps } from 'next/app'; // TypeScript types for App component
import { appWithTranslation } from 'next-i18next';
// import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);
// Define the interface for pageProps (optional, depending on your app)
// interface MyAppProps extends AppProps {
//   pageProps: {
//     // Define any custom properties that pageProps may have
//     [key: string]: any;
//   };
// }

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(App /*, nextI18NextConfig */);
