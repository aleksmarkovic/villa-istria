import React, { Component } from "react";
import CtaTwo from "../HomeTwo/CtaTwoSection";
import Pricing from "./PricingSection";

class PricingMain extends Component {
  render() {
    return (
      <main>
        {/* pricing-start */}
        <Pricing />
        {/* pricing-end */}

        {/* pricing-start */}
        <CtaTwo />
        {/* pricing-end */}
      </main>
    );
  }
}

export default PricingMain;
