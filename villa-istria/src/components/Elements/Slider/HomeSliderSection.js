import React, { Component } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";
import Link from "next/link";

const images = [
  "assets/img/images/Villa_Istria-48.webp",
  "assets/img/images/Villa_Istria-34.webp",
  "assets/img/images/Villa_Istria-20.webp",
];

const HomeSlider = () => {
  return (
    <section className="slider-area fix position-relative">
      <div className="slider-active swiper-container">
        <div className="swiper-wrapper">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              EffectFade,
              Autoplay,
            ]}
            effect="fade"
            spaceBetween={30}
            slidesPerView={1}
            autoplaydisableoninteraction={"false"}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: true,
            }}
            // scrollbar={{ draggable: true }}
            // navigation={{ clickable: true }}
            //
            // onSlideChange={() => console.log("slide change")}
          >
            {images.map((image) => (
              <SwiperSlide key={image}>
                <div
                  className="single-slider slider-height swiper-slide"
                  data-swiper-autoplay="10000"
                >
                  <div
                    className="slide-bg"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="kslider z-index">
                          <h5
                            className="kslider--subtitle mb-30"
                            data-animation="fadeInUp"
                            data-delay="0.3s"
                          >
                            Welcome to Vabriga near Poreč, Croatia
                          </h5>
                          <h2
                            className="kslider--title mb-40"
                            data-animation="fadeInUp"
                            data-delay="0.5s"
                          >
                            Villa Istria
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="slider-paginations slide-dots"></div>
      </div>
    </section>
  );
};

export default HomeSlider;
