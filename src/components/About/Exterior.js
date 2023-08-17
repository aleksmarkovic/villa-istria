import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Exterior = ({}) => {
  return (
    <section className="why-we bg-grey pt-125 pb-75 position-relative fix">
      <div className="container z-index">
        <div className="row justify-content-between">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div
              className="choose-left mb-40 mr-xs-0 mr-md-0 mr-lg-0"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <div className="section-title-wrapper">
                <h2 className="section-title mb-35">Exterior</h2>
              </div>
              <p>
                The Villa's exterior is an Istrian style house with native stone
                details, whereas the garden consists of the following elements:
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
                    Parking space in front of the house closed by an electronic
                    gate.
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon
                        className="about-minus-bullet"
                        icon={["fas", "minus"]}
                      />
                    </i>
                    Big swimming pool with a lightened relax area all around it,
                    sunbeds and solar shower included. The pool has a dynamic
                    depth going from a more shallow depth to a more deep one.
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon
                        className="about-minus-bullet"
                        icon={["fas", "minus"]}
                      />
                    </i>
                    Roofed terrace with a big table and chairs for eating or
                    socializing.
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon
                        className="about-minus-bullet"
                        icon={["fas", "minus"]}
                      />
                    </i>
                    An outdoor fireplace to prepare your favourite grill dishes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
                      data-bs-target="#collapseExteriorOne"
                      aria-expanded="true"
                      aria-controls="collapseExteriorOne"
                    >
                      Do you have a direct access from the road?
                    </button>
                  </h2>
                  <div
                    id="collapseExteriorOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, the entrance to the property is right beside the
                        road, so you don't have to take uncomfortable side
                        roads.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExteriorTwo"
                      aria-expanded="false"
                      aria-controls="collapseExteriorTwo"
                    >
                      How many cars/vehicles can you park in the property?
                    </button>
                  </h2>
                  <div
                    id="collapseExteriorTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Ideally 2 cars/vehicles (ex. van) can be parked in the
                        property.
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
                      data-bs-target="#collapseExteriorThree"
                      aria-expanded="false"
                      aria-controls="collapseExteriorThree"
                    >
                      What is the configuration of the property?
                    </button>
                  </h2>
                  <div
                    id="collapseExteriorThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Right after the main entrance is the parking space and
                        the front door of the Villa. On the opposite side of
                        building is the swimming pool area and under it, it's
                        the outdoor fireplace/grill area. The other areas are
                        decorated with herbs and other bushy plants
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exterior;
