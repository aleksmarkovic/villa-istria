import React, { useContext } from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Seo from "../components/Common/Seo";
import PageHero from "../components/Common/PageHero";
import ExteriorSection from "../components/About/ExteriorSection";
import InteriorSection from "../components/About/InteriorSection";
import FaqSection from "../components/About/FaqSection";
import { LangContext } from "../context/LangContext";

const AboutPage = () => {
  const { t } = useContext(LangContext);
  const a = t.about;

  return (
    <div className="vi">
      <Seo
        title="About Villa Istria"
        description="Learn about Villa Istria, a modern family villa in Vabriga near the sea, designed for comfortable stays in Istria."
        path="/about"
        image="/assets/img/images/cropped/Villa_Istria-front.webp"
      />
      <Header />
      <div className="vi-page">
        <PageHero
          eyebrow={a.eyebrow}
          title={a.title}
          subtitle={a.subtitle}
          preserveLineBreaks
        />
        <ExteriorSection />
        <InteriorSection />
        <FaqSection />
      </div>
      <Footer />

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.vi-about-row) {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
