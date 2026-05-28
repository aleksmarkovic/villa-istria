import React from "react";
import { GalleryImg } from "../../common/constants/gallery";

interface GalleryLightboxProps {
  image: GalleryImg | null;
  onClose: () => void;
}

const GalleryLightbox = ({ image, onClose }: GalleryLightboxProps) => {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
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
        onClick={onClose}
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
        src={image.src}
        alt={image.label}
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
        {image.label}
      </div>
    </div>
  );
};

export default GalleryLightbox;
