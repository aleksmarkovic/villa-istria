import React from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import HomeMain from "../components/Home/HomeMain";
import Seo from "../components/Common/Seo";

const Index = () => {
  return (
    <React.Fragment>
      <Seo
        title="Luxury Villa in Vabriga"
        description="Book Villa Istria in Vabriga: private pool, modern interiors, and a calm location between Porec and Novigrad."
        path="/"
        image="/assets/img/images/Villa_Istria-20.webp"
      />
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

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
