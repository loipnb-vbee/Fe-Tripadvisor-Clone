import "../styles/globals.css"; // Import global styles
import Layout from "@/containers/Layout"; // Layout component
import React from "react";
import { AppProps } from "next/app"; // TypeScript types for App component
import { appWithTranslation } from "next-i18next";

// Define the interface for pageProps (optional, depending on your app)
// interface MyAppProps extends AppProps {
//   pageProps: {
//     // Define any custom properties that pageProps may have
//     [key: string]: any;
//   };
// }

function App({ Component, pageProps }) {
  console.log("component", Component);
  console.log("Page props", pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);
