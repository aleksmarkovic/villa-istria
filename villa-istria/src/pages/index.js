import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import HomeMain from "../components/Home/HomeMain";

const Index = (props) => {
  return (
    <React.Fragment>
      <Header />
      <HomeMain />
      <Footer />

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WMDKJTD"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`,
        }}
      />
    </React.Fragment>
  );
};

export default Index;

export async function getStaticProps({}) {
  return {
    props: {},
  };
}
