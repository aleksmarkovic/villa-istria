import React from "react";
import Header from "../components/Layout/Header/Header";
import FooterTwo from "../components/Layout/Footer/FooterTwo";
import PricingMain from "../components/Pricing/PricingMain";

class PricingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <PricingMain />
        <FooterTwo />
      </React.Fragment>
    );
  }
}

export default PricingPage;

export async function getStaticProps({ store }) {
  return {
    props: {},
  };
}
