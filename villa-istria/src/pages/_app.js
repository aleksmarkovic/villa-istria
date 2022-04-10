import "./index.scss";
import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import { loadIcons } from "../utils/IconLoader";

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
    //Page props that were returned  from 'getStaticProps' are stored in the props i.e. pageprops
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
