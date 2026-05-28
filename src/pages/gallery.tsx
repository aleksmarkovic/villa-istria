import React, { useContext, useState } from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Seo from "../components/Common/Seo";
import PageHero from "../components/Common/PageHero";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import GalleryLightbox from "../components/Gallery/GalleryLightbox";
import { GalleryImg } from "../common/constants/gallery";
import { LangContext } from "../context/LangContext";

const GalleryPage = () => {
  const { t } = useContext(LangContext);
  const g = t.gallery;
  const [lightbox, setLightbox] = useState<GalleryImg | null>(null);

  return (
    <div className="vi">
      <Seo
        title="Gallery"
        description="Browse photos of Villa Istria, including rooms, pool, terrace, and details of the accommodation."
        path="/gallery"
        image="/assets/img/images/Villa_Istria-48.webp"
      />
      <Header />
      <div className="vi-page">
        <PageHero eyebrow={g.eyebrow} title={g.title} />
        <GalleryGrid onSelect={setLightbox} />
        <GalleryLightbox image={lightbox} onClose={() => setLightbox(null)} />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
