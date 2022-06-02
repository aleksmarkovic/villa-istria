import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Interior = ({}) => {
  return (
    <section className="why-we bg-grey pb-75 position-relative fix">
      <div className="container z-index">
        <div className="row justify-content-between">
          <div className="col-xl-5 col-lg-5 col-md-12 mt-100">
            <div
              className="choose-right"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseInteriorOne"
                      aria-expanded="true"
                      aria-controls="collapseInteriorOne"
                    >
                      Does my bedroom have a separate bathroom?
                    </button>
                  </h2>
                  <div
                    id="collapseInteriorOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>Each bedroom has its own fully equipped bathroom.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseInteriorTwo"
                      aria-expanded="false"
                      aria-controls="collapseInteriorTwo"
                    >
                      Does my bedroom have a TV?
                    </button>
                  </h2>
                  <div
                    id="collapseInteriorTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Each bedroom has its own Smart TV with satellite
                        programs and Netflix included.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseInteriorThree"
                      aria-expanded="false"
                      aria-controls="collapseInteriorThree"
                    >
                      How there are many variations of passages
                    </button>
                  </h2>
                  <div
                    id="collapseInteriorThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Front-end and design are remarkably complex these days.
                        That’s why we invite kind, smart folks from the
                        community to run online workshops for all of us to learn
                        together. And we have new ones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div
              className="choose-left mb-40 mr-xs-0 mr-md-0 mr-lg-0"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <div className="section-title-wrapper">
                <h2 className="section-title mb-35">Interior</h2>
              </div>
              <p>
                The interior consists exclusively of modern and functional
                elements:
              </p>
              <div className="why-tab-list">
                <ul>
                  <li>
                    <i>
                      <FontAwesomeIcon
                        className="about-minus-bullet"
                        icon={["fas", "minus"]}
                      />
                    </i>
                    An open space containing the kitchen, dining and living room
                    with direct exits to the swimming pool area. A big TV with
                    satellite programs and Netflix are included.
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon
                        className="about-minus-bullet"
                        icon={["fas", "minus"]}
                      />
                    </i>
                    Bedroom 1 - king size bed, direct exit to the swimming pool
                    area.
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon
                        className="about-minus-bullet"
                        icon={["fas", "minus"]}
                      />
                    </i>
                    Bedroom 2 - king size bed, its own terrace with a direct
                    sight of the Adriatic sea.
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon
                        className="about-minus-bullet"
                        icon={["fas", "minus"]}
                      />
                    </i>
                    Bedroom 3 - 2 single beds joinable into a king size bed.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interior;
