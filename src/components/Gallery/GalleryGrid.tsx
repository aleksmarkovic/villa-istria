import React from "react";
import { GalleryImg, GALLERY_IMGS } from "../../common/constants/gallery";

interface GalleryGridProps {
  onSelect: (img: GalleryImg) => void;
}

const GalleryGrid = ({ onSelect }: GalleryGridProps) => (
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
            onClick={() => onSelect(img)}
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

    <style jsx>{`
      @media (max-width: 700px) {
        :global(.vi-gallery-grid) {
          grid-template-columns: 1fr !important;
          grid-auto-rows: 220px !important;
        }
        :global(.vi-gallery-grid > div) {
          grid-column: span 1 !important;
        }
      }
    `}</style>
  </section>
);

export default GalleryGrid;
