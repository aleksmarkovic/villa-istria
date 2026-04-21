import React, { Component } from "react";
import About from "./AboutSection";
import dynamic from "next/dynamic";
import Map from "./MapSection";

const HomeSlider = dynamic(
  () => import("../Elements/Slider/HomeSliderSection"),
  { ssr: true }
);

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
