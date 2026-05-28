import React from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Seo from "../components/Common/Seo";
import HeroSlider from "../components/Home/HeroSlider";
import FeaturesSection from "../components/Home/FeaturesSection";
import AboutPreview from "../components/Home/AboutPreview";
import ReviewsSection from "../components/Home/ReviewsSection";
import LocationSection from "../components/Home/LocationSection";

const HomePage = () => (
  <div className="vi">
    <Seo
      page="home"
      image="/assets/img/images/Villa_Istria-20.webp"
      preloadImage="/assets/img/images/Villa_Istria-32.webp"
    />
    <Header />
    <HeroSlider />
    <FeaturesSection />
    <AboutPreview />
    <ReviewsSection />
    <LocationSection />
    <Footer />
  </div>
);

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
