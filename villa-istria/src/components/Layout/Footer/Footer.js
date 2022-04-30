import React from "react";
import FooterBottom from "./FooterBottom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-95 position-relative">
      <div
        className="common-shape-wrapper wow slideInRight animated"
        data-wow-delay="0ms"
        data-wow-duration="15000ms"
      >
        <div
          className="common-shape-inner wow slideInRight animated"
          data-wow-delay="0ms"
          data-wow-duration="15000ms"
        ></div>
      </div>
      <div className="footer-area pb-60">
        <div className="container">
          <div className="row justify-content-between mx-5">
            <div className="col-lg-4 col-sm-6">
              <div className="widget mb-30">
                <div className="footer-logo mb-25">
                  <Link href="/">
                    <a>
                      <img
                        src="assets/img/logo/glavni1.svg"
                        className="img-fluid"
                        alt="footer-logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="footer-social">
                  <a href="#" target="_blank">
                    <i>
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </i>
                  </a>
                  <a href="#" target="_blank">
                    <i>
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </i>
                  </a>
                  <a href="#" target="_blank">
                    <i>
                      <FontAwesomeIcon icon={["fab", "pinterest-p"]} />
                    </i>
                  </a>
                  <a href="#" target="_blank">
                    <i>
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="widget mb-30">
                <h4 className="widget-title mb-35">Links</h4>
                <ul>
                  <li>
                    <Link href="/about">
                      <a>Information</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      <a>Photo gallery</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a>Prices</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact Form</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/extra-content">
                      <a>Additional information</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="widget widget-contact mb-30">
                <h4 className="widget-title mb-35">Contact</h4>
                <ul>
                  <li className="pb-10">
                    Ulica Velog Jože 15a <br />
                    Vabriga (Tar-Vabriga, Poreč) 52465, Istria, Croatia
                  </li>
                  <li>
                    <img
                      src="assets/img/icon/footer-icon-1.png"
                      className="img-fluid"
                      alt="icon-img"
                    />
                    <a href="mailto:needhelp@company.com">
                      info@villa-istria.hr
                    </a>
                  </li>
                  {/* <li>
                    <img
                      src="assets/img/icon/footer-icon-2.png"
                      className="img-fluid"
                      alt="icon-img"
                    />
                    <a href="tel:926668880000">92 666 888 0000</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FooterBottom /> */}
    </footer>
  );
};

export default Footer;
