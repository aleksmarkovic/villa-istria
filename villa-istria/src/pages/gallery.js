import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";

class ServicePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
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
