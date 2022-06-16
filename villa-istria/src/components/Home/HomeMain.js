import React, { Component } from "react";
import About from "./AboutSection";
import dynamic from "next/dynamic";
const HomeSlider = dynamic(
  () => import("../Elements/Slider/HomeSliderSection"),
  {
    ssr: false,
  }
);
// const Testimonial = dynamic(
//   () => import("../Elements/Testimonials/TestimonialsSection"),
//   {
//     ssr: false,
//   }
// );
// const Brand = dynamic(() => import("../Elements/Brand/BrandSection"), {
//   ssr: false,
// });
// import Trust from "./TrustSection";
// import Quality from "./QualitySection";
import Map from "./MapSection";
// import Surroundings from "./SurroundingsSection";

class HomeMain extends Component {
  render() {
    return (
      <main>
        {/* slider-start */}
        <HomeSlider />
        {/* slider-end */}

        {/* about-start */}
        <About />
        {/* about-end */}

        {/* project-start */}
        {/* <Surroundings /> */}
        {/* project-end */}

        {/* quality-start */}
        {/* <Quality /> */}
        {/* quality-end */}

        {/* map-start */}
        <Map />
        {/* map-end */}
      </main>
    );
  }
}

export default HomeMain;
