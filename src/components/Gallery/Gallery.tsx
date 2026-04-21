import React from "react";
import ImageComponent from "../Common/Image";

import "react-lazy-load-image-component/src/effects/blur.css";

type ImageModule = { default?: string; src?: string };

const importAll = (r: { keys(): string[]; <T>(id: string): T }) =>
  r.keys().map(r) as Array<string | ImageModule>;

const images = importAll(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (require as any).context(
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
                      : (image as ImageModule)?.default || `gallery-${i}`
                  }
                  className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-xs-1 mb-30 gallery-image-col"
                >
                  <ImageComponent description="image" image={image} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
