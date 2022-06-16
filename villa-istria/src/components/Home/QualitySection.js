import React, { Component } from "react";
import Link from "next/link";

class Quality extends Component {
  render() {
    return (
      <section className="quality-area pt-120 pb-90 fix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="kquality mb-30" data-aos="zoom-in-right">
                <div className="kquality-text fix">
                  <h3 className="mb-20 kquality-text-title">Check out more</h3>
                  <p>
                    Istria has to offer more than just villas. Nice old towns,
                    the best Mediterranean food and drinks, a perfect climate,
                    clean sea and of course good people.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-lg-end mb-30" data-aos="zoom-in-left">
                <div className="kabout-btn">
                  <Link href="/extra-content">
                    <a className="theme-btn border-btn">More content</a>
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

export default Quality;
