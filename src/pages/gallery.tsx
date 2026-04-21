import React from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Seo from "../components/Common/Seo";

class ServicePage extends React.Component {
  render(): JSX.Element {
    return (
      <React.Fragment>
        <Seo
          title="Gallery"
          description="Browse photos of Villa Istria, including rooms, pool, terrace, and details of the accommodation."
          path="/gallery"
          image="/assets/img/images/Villa_Istria-48.webp"
        />
        <Header />
        <Gallery />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ServicePage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
