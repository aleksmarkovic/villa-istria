import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Seo from "../components/Common/Seo";

class ServicePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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

export async function getStaticProps({}) {
  return {
    props: {},
  };
}
