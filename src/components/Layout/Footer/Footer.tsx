import React from "react";
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
                    <img
                      src="assets/img/logo/glavni1.svg"
                      className="img-fluid"
                      alt="footer-logo"
                    />
                  </Link>
                </div>
                <div className="footer-social">
                  <a
                    title="facebook"
                    href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                    target="_blank"
                  >
                    <i>
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </i>
                  </a>
                  <a
                    title="instagram"
                    href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                    target="_blank"
                  >
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
                    <Link href="/about">About Villa Istria</Link>
                  </li>
                  <li>
                    <Link href="/gallery">Photo gallery</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Form</Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
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
                      className="img-fluid footer-icon"
                      alt="icon-img"
                    />
                    <a href={`mailto: ${process.env.NEXT_PUBLIC_INFO_EMAIL}`}>
                      {process.env.NEXT_PUBLIC_INFO_EMAIL}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
