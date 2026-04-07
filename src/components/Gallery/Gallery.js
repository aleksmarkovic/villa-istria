import React from "react";
import Image from "../Common/Image";

import "react-lazy-load-image-component/src/effects/blur.css";

const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context(
    "../../../public/assets/img/images",
    false,
    /\.(png|jpe?g|svg|webp)$/,
  ),
);

const Gallery = () => {
  return (
    <main>
      <section className="blog-2 pt-120 pb-115">
        <div className="container">
          <div className="row justify-content-center">
            {images &&
              images.map((image, i) => (
                <div
                  key={
                    typeof image === "string"
                      ? image
                      : image?.default || `gallery-${i}`
                  }
                  className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-xs-1 mb-30 gallery-image-col"
                >
                  <Image description="image" image={image} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
