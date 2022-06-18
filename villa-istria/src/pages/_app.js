import "./index.scss";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";
import Script from "next/script";

import { loadIcons } from "../utils/IconLoader";

import "@fortawesome/fontawesome-svg-core/styles.css";

loadIcons();

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

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
      <Component {...pageProps} />
    </>
  );
};

export async function getStaticProps({ Component, ctx }) {
  const pageProps = Component.getStaticProps
    ? await Component.getStaticProps(ctx)
    : {};

  //Anything returned here can be accessed by the client
  return { pageProps: pageProps };
}

export default App;
