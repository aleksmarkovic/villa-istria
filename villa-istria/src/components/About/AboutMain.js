import React, { Component } from "react";
import dynamic from "next/dynamic";
import Mission from "./MissionSection";
import Exterior from "./Exterior";
import Interior from "./Interior";
const BrandThree = dynamic(
  () => import("../Elements/Brand/BrandSectionThree"),
  {
    ssr: false,
  }
);
const Testimonial = dynamic(
  () => import("../Elements/Testimonials/TestimonialsSection"),
  {
    ssr: false,
  }
);

class AboutMain extends Component {
  render() {
    return (
      <main>
        {/* mission-start */}
        <Mission />
        {/* mission-end */}

        {/* testimonial-start */}
        {/* <div className="mt--30">
          <Testimonial />
        </div> */}
        {/* testimonial-end */}

        {/* fact-start */}
        {/* <FactTwo /> */}
        {/* fact-end */}

        <Exterior />
        <Interior />
      </main>
    );
  }
}

export default AboutMain;
