import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { isMobile } from "react-device-detect";

const About = () => {
  return (
    <section className="about-area pt-50 pb-70 fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-100 kabout-image-container">
            <div className="kabout-img mb-50 mr-70">
              <Image
                src="assets/img/images/cropped/Villa_Istria-46-front.webp"
                className="img-thumbnail z-index"
                alt="about-img"
              />
            </div>
            <div className="kabout-img-small">
              <Image
                src="assets/img/images/cropped/Villa_Istria-front.webp"
                className="img-thumbnail"
                alt="about-img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="kabout mb-50">
              <div className="section-title-wrapper mb-45">
                <h1 className="section-title mb-35">
                  Welcome to <br />
                  Villa Istria
                </h1>
                <p>
                  A family villa located in Vabriga, a small town in the
                  Tar-Vabriga community which stands in the middle between Poreč
                  and Novigrad, 10 kilometers from each and with just 2
                  kilometers away from the sea, it's a perfect place to be.
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="kabout-service mb-30">
                    <h4 className="kabout-service-title">3 rooms</h4>
                    <p>With king size beds and separate bathrooms.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="kabout-service mb-30">
                    <h4 className="kabout-service-title">Big swimming pool</h4>
                    <p>A big illuminated swimming pool with dynamic depth.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="kabout-service mb-30">
                    <h4 className="kabout-service-title">Private parking</h4>
                    <p>A spacious private parking for 2 vehicles.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="kabout-service mb-30">
                    <h4 className="kabout-service-title">
                      Modern and newly built
                    </h4>
                    <p>Equipped with modern furniture and devices.</p>
                  </div>
                </div>
              </div>
              <div className="kabout-btn">
                <Link href="/about">
                  <a className="theme-btn border-btn">Discover more</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
