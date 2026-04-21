import React from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import AboutMain from "../components/About/AboutMain";
import Seo from "../components/Common/Seo";

class AboutPage extends React.Component {
  render(): JSX.Element {
    return (
      <React.Fragment>
        <Seo
          title="About Villa Istria"
          description="Learn about Villa Istria, a modern family villa in Vabriga near the sea, designed for comfortable stays in Istria."
          path="/about"
          image="/assets/img/images/cropped/Villa_Istria-front.webp"
        />
        <Header />
        <AboutMain />
        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
