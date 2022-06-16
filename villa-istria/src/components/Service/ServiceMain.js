import React, { Component } from "react";
import Quality from "../Home/QualitySection";
import ServiceFour from "./ServiceSectionFour";
import ServiceThree from "./ServiceSectionThree";
import WhyWeThree from "./WhyWeThree";
import dynamic from "next/dynamic";
const BrandFour = dynamic(() => import("../Elements/Brand/BrandSectionFour"), {
  ssr: false,
});

class ServiceMain extends Component {
  render() {
    return (
      <main>
        {/* service-start */}
        <ServiceThree />
        {/* service-end */}

        {/* whywe-start */}
        <WhyWeThree />
        {/* whywe-end */}

        {/* service-start */}
        <ServiceFour />
        {/* service-end */}

        {/* brand-start */}
        <BrandFour />
        {/* brand-end */}

        {/* Quality-start */}
        <Quality />
        {/* Quality-end */}
      </main>
    );
  }
}

export default ServiceMain;
