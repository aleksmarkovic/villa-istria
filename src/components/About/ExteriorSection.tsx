import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";

const IMG_TERRACE = "/assets/img/images/cropped/Villa Istria-37-terrace.webp";

const ExteriorSection = () => {
  const { t } = useContext(LangContext);
  const a = t.about;

  return (
    <section className="vi-section">
      <div className="vi-container">
        <div
          className="vi-about-row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <span className="vi-overline">{a.extTitle}</span>
            <h2 style={{ marginBottom: "1.2rem" }}>{a.extTitle}</h2>
            <div className="vi-divider" />
            <p>{a.extText}</p>
          </div>
          <div
            style={{
              aspectRatio: "4/3",
              overflow: "hidden",
              background: "var(--bg-2)",
            }}
          >
            <img
              src={IMG_TERRACE}
              alt="Villa terrace"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExteriorSection;
