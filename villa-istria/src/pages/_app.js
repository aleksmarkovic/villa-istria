import "./index.scss";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";

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

  return <Component {...pageProps} />;
};

export async function getStaticProps({ Component, ctx }) {
  const pageProps = Component.getStaticProps
    ? await Component.getStaticProps(ctx)
    : {};

  //Anything returned here can be accessed by the client
  return { pageProps: pageProps };
}

export default App;
