import React from "react";
import Image from "../Common/Image";
import LazyLoad from "react-lazyload";

const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context(
    "../../../public/assets/img/images",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const Spinner = () => (
  <div className="post loading">
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#49d1e0"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(275.845 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

const Gallery = () => {
  return (
    <main>
      <section className="blog-2 pt-120 pb-115">
        <div className="container">
          <div className="row">
            {images &&
              images.map((image, i) => (
                <div
                  key={image.default.src}
                  className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30"
                >
                  <LazyLoad
                    key={i}
                    // height={10}
                    // offset={[-100, 100]}
                    placeholder={<Spinner />}
                  >
                    <Image description="image" image={image.default.src} />
                  </LazyLoad>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
