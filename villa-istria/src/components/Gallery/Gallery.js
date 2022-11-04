import React from "react";
import Image from "../Common/Image";
import LazyLoad from "react-lazyload";
import { Table } from "react-bootstrap";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context(
    "../../../public/assets/img/images",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

const Gallery = () => {
  return (
    <main>
      <section className="blog-2 pt-120 pb-115">
        <div className="container">
          {/* <div className="d-flex justify-content-center flex-wrap"> */}
          <div className="row justify-content-center">
            {/* <Table> */}
            {images &&
              images.map((image, i) => (
                <div
                  key={image}
                  className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-xs-1 mb-30"
                >
                  {/* <LazyLoadImage
                    alt="image"
                    effect="blur"
                    src={image}
                  /> */}
                  <LazyLoad
                    key={i}
                    offset={-1}
                    once={true}
                    // height={10}
                    // offset={[-100, 100]}
                    // placeholder={<Spinner />}
                    style={{ cursor: "pointer" }}
                  >
                    <Image description="image" image={image} />
                  </LazyLoad>
                </div>
              ))}
          </div>
        </div>
        {/* </Table> */}
      </section>
    </main>
  );
};

export default Gallery;
