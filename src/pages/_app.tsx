import "../styles/villa.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import Script from "next/script";

import { LangProvider } from "../context/LangContext";
import CookieBanner from "../components/Common/CookieBanner";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER;
    if (gtmId) {
      TagManager.initialize({ gtmId });
    }
  }, []);

  return (
    <>
      {GA_ID && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');`}
          </Script>
        </>
      )}
      <LangProvider>
        <Component {...pageProps} />
        <CookieBanner />
      </LangProvider>
    </>
  );
};

export default App;
