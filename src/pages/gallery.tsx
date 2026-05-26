import React, { useContext, useState } from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Seo from "../components/Common/Seo";
import { LangContext } from "../context/LangContext";

type GalleryImg = { src: string; label: string; span: number };

const GALLERY_IMGS: GalleryImg[] = [
  {
    src: "/assets/img/images/Villa_Istria.webp",
    label: "Villa exterior",
    span: 1,
  },
  { src: "/assets/img/images/Villa_Istria-2.webp", label: "Exterior", span: 1 },
  { src: "/assets/img/images/Villa_Istria-3.webp", label: "Exterior", span: 1 },
  { src: "/assets/img/images/Villa_Istria-4.webp", label: "Exterior", span: 1 },
  {
    src: "/assets/img/images/Villa_Istria-5.webp",
    label: "Pool area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-6.webp",
    label: "Pool area",
    span: 1,
  },
  { src: "/assets/img/images/Villa_Istria-7.webp", label: "Garden", span: 1 },
  { src: "/assets/img/images/Villa_Istria-8.webp", label: "Garden", span: 2 },
  {
    src: "/assets/img/images/Villa_Istria-9.webp",
    label: "Outdoor area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-10.webp",
    label: "Outdoor area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-11.webp",
    label: "Outdoor area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-12.webp",
    label: "Outdoor area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-13.webp",
    label: "Outdoor area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-14.webp",
    label: "Outdoor area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-15.webp",
    label: "Kitchen & dining",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-16.webp",
    label: "Interior",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-17.webp",
    label: "Interior",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-18.webp",
    label: "Interior",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-19.webp",
    label: "Interior",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-20.webp",
    label: "Living room",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-21.webp",
    label: "Living room",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-22.webp",
    label: "Bedroom — pool access",
    span: 1,
  },
  { src: "/assets/img/images/Villa_Istria-24.webp", label: "Bedroom", span: 1 },
  {
    src: "/assets/img/images/Villa_Istria-25.webp",
    label: "Bedroom — sea view",
    span: 1,
  },
  { src: "/assets/img/images/Villa_Istria-26.webp", label: "Bedroom", span: 1 },
  { src: "/assets/img/images/Villa_Istria-27.webp", label: "Bedroom", span: 1 },
  {
    src: "/assets/img/images/Villa_Istria-28.webp",
    label: "Bedroom detail",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-29.webp",
    label: "Bedroom detail",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-30.webp",
    label: "Bathroom",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-31.webp",
    label: "Bathroom",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-32.webp",
    label: "Bathroom",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-33.webp",
    label: "Interior detail",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-34.webp",
    label: "Swimming pool",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-35.webp",
    label: "Pool area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-36.webp",
    label: "Pool area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-37.webp",
    label: "Outdoor grill area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-38.webp",
    label: "Outdoor area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-39.webp",
    label: "Outdoor area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-40.webp",
    label: "Outdoor area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-41.webp",
    label: "Outdoor area",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-42.webp",
    label: "Outdoor area",
    span: 1,
  },
  { src: "/assets/img/images/Villa_Istria-43.webp", label: "View", span: 1 },
  { src: "/assets/img/images/Villa_Istria-44.webp", label: "View", span: 1 },
  {
    src: "/assets/img/images/Villa_Istria-46.webp",
    label: "Aerial view",
    span: 1,
  },
  { src: "/assets/img/images/Villa_Istria-48.webp", label: "View", span: 1 },
  {
    src: "/assets/img/images/Villa_Istria-49.webp",
    label: "Surroundings",
    span: 1,
  },
  {
    src: "/assets/img/images/Villa_Istria-50.webp",
    label: "Surroundings",
    span: 1,
  },
  {
    src: "/assets/img/images/award-2025.png",
    label: "Award 1",
    span: 1,
  },
  {
    src: "/assets/img/images/award-2026.png",
    label: "Award 1",
    span: 1,
  },
];

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
        <div
          style={{
            background: "var(--bg-dark)",
            color: "#fff",
            padding: "7rem 0 5rem",
            textAlign: "center",
          }}
        >
          <div className="vi-container">
            <span className="vi-overline vi-overline--light">{g.eyebrow}</span>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "0.06em",
              }}
            >
              {g.title}
            </h1>
          </div>
        </div>

        <section className="vi-section">
          <div className="vi-container">
            <div
              className="vi-gallery-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridAutoRows: 260,
                gap: "1rem",
              }}
            >
              {GALLERY_IMGS.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightbox(img)}
                  style={{
                    gridColumn: `span ${img.span}`,
                    overflow: "hidden",
                    background: "var(--bg-2)",
                    cursor: "zoom-in",
                    position: "relative",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s",
                      display: "block",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.04)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {lightbox && (
          <div
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 500,
              background: "rgba(10,8,6,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "2rem",
                color: "rgba(255,255,255,0.7)",
                fontSize: "1.8rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.label}
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                objectFit: "contain",
                display: "block",
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
              }}
            >
              {lightbox.label}
            </div>
          </div>
        )}
      </div>
      <Footer />

      <style jsx>{`
        @media (max-width: 700px) {
          .vi-gallery-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 220px !important;
          }
          .vi-gallery-grid > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
