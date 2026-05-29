import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1119.4025610397325!2d13.611911963085207!3d45.293381990782315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477c9982c1e7761f%3A0x9f82c9aa839c03d2!2sVilla%20Istria!5e1!3m2!1shr!2shr!4v1653915252118!5m2!1shr!2shr";

const LocationSection = () => {
  const { t } = useContext(LangContext);
  const h = t.home;

  return (
    <section
      className="vi-section vi-section--sm"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="vi-container">
        <div style={{ marginBottom: "2.5rem" }}>
          <span className="vi-overline">{h.locEyebrow}</span>
          <h2 style={{ marginBottom: "0.5rem" }}>{h.locTitle}</h2>
          <p style={{ fontSize: "0.9rem" }}>{h.locText}</p>
        </div>
        <div
          style={{
            width: "100%",
            height: 400,
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          <iframe
            title="map"
            src={MAP_SRC}
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
