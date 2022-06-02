import React, { Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class About extends Component {
  render() {
    return (
      <section className="about-area pt-120 pb-70 fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="kabout-img mb-50 mr-70"
                data-aos="zoom-out-up"
                data-swiper-autoplay="10000"
              >
                <div className="kabout-img-shape"></div>
                <img
                  src="assets/img/about/about-img-1.jpg"
                  className="img-fluid z-index"
                  alt="about-img"
                />
                <div className="kabout-img-small">
                  <img
                    src="assets/img/about/about-img-2.jpg"
                    className="img-fluid"
                    alt="about-img"
                  />
                  <div className="kabout-img-small-icon play_btn">
                    <span>
                      <img
                        src="assets/img/icon/about-icon.png"
                        className="img-fluid"
                        alt="about-icon"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="kabout mb-50"
                data-aos="zoom-out-down"
                data-swiper-autoplay="10000"
              >
                <div className="section-title-wrapper mb-45">
                  <h5 className="section-subtitle mb-20">
                    Important information
                  </h5>
                  <h2 className="section-title mb-35">
                    Welcome to <br />
                    Villa Istria
                  </h2>
                  <p>
                    A family villa located in Vabriga, a small town in the
                    Tar-Vabriga community which stands in the middle between
                    Poreč and Novigrad, 10 kilometers from each and with just 2
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
                      <h4 className="kabout-service-title">
                        Big swimming pool
                      </h4>
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
                        Modern style TODO
                      </h4>
                      <p>Equipped with modern forniture and devices.</p>
                      {/* <h4 className="kabout-service-title">A stone touch</h4>
                      <p>A stone touch in Istrian style</p> */}
                    </div>
                  </div>
                </div>
                {/* <ul className="mt-20 mb-55">
                  <li>
                    <i>
                      <FontAwesomeIcon icon={["fas", "check"]} />
                    </i>{" "}
                    Entum estibulum dignissim posuere.
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon icon={["fas", "check"]} />
                    </i>{" "}
                    If you are going to use a passage.
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon icon={["fas", "check"]} />
                    </i>{" "}
                    Lorem Ipsum generators on the tend to repeat.
                  </li>
                </ul> */}
                <div className="kabout-btn">
                  <Link href="/service">
                    <a className="theme-btn border-btn">Discover more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
