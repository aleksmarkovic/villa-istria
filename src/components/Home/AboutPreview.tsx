import React, { useContext } from "react";
import Link from "next/link";
import { LangContext } from "../../context/LangContext";

const IMG_ABOUT = "/assets/img/images/Villa_Istria-4.webp";

const AboutPreview = () => {
  const { t } = useContext(LangContext);
  const h = t.home;

  return (
    <section className="vi-section">
      <div className="vi-container">
        <div
          className="vi-home-about"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              aspectRatio: "3/4",
              overflow: "hidden",
              background: "var(--bg-2)",
            }}
          >
            <img
              src={IMG_ABOUT}
              alt="Villa Istria front"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <span className="vi-overline">{h.aboutEyebrow}</span>
            <h2
              style={{
                whiteSpace: "pre-line",
                marginBottom: "1.5rem",
                letterSpacing: "0.05em",
              }}
            >
              {h.aboutTitle}
            </h2>
            <div className="vi-divider" />
            <p style={{ marginBottom: "2rem" }}>{h.aboutText}</p>
            <Link href="/about" className="vi-btn vi-btn--outline">
              {t.nav.about} →
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.vi-home-about) {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutPreview;
