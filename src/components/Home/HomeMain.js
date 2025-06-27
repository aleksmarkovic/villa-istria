import React, { Component } from "react";
import About from "./AboutSection";
import dynamic from "next/dynamic";
const HomeSlider = dynamic(
  () => import("../Elements/Slider/HomeSliderSection"),
  {
    ssr: false,
  }
);

import Map from "./MapSection";

class HomeMain extends Component {
  render() {
    return (
      <main>
        <HomeSlider />
        <About />
        <Map />
      </main>
    );
  }
}

export default HomeMain;
