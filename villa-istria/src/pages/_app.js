import "./index.scss";
import App from "next/app";
import React from "react";
import { loadIcons } from "../utils/IconLoader";
import "@fortawesome/fontawesome-svg-core/styles.css";

loadIcons();

class MyApp extends App {
  componentDidMount() {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }
  static async getStaticProps({ Component, ctx }) {
    const pageProps = Component.getStaticProps
      ? await Component.getStaticProps(ctx)
      : {};

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps };
  }

  render() {
    //Page props that were returned  from 'getStaticProps' are d in the props i.e. pageprops
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
