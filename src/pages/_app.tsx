import "../styles/villa.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import Script from "next/script";

import { LangProvider } from "../context/LangContext";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    TagManager.initialize({
      gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER,
    });
  }, []);

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-230750039-1"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-230750039-1');`}
      </Script>
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </>
  );
};

export default App;
