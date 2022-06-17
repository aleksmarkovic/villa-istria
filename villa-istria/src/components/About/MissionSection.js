import React, { Component } from "react";
import Link from "next/link";

class Mission extends Component {
  render() {
    return (
      <section className="mission-area pt-120 mt-50 fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div
                className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="section-title-wrapper mb-25">
                  <h2 className="section-title mb-35">
                    A modern house with a dose of tradition
                  </h2>
                </div>
                <p className="mb-45">
                  Modern style furniture, equipment and devices match today's
                  standards, while the traditional Istrian stone style is
                  preserved through the exterior elements.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div
                className="kintro-img mb-30"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <img
                  src="assets/img/images/Villa Istria-37-terrace.webp"
                  className="img-fluid"
                  alt="about-img"
                  width={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Mission;
