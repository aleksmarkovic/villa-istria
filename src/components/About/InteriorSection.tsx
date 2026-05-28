import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";

const IMG_FRONT = "/assets/img/images/cropped/Villa_Istria-front.webp";

const InteriorSection = () => {
  const { t } = useContext(LangContext);
  const a = t.about;

  return (
    <section className="vi-section vi-section--muted">
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
          <div
            style={{
              aspectRatio: "4/3",
              overflow: "hidden",
              background: "var(--bg-2)",
            }}
          >
            <img
              src={IMG_FRONT}
              alt="Villa front"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <span className="vi-overline">{a.intTitle}</span>
            <h2 style={{ marginBottom: "1.2rem" }}>{a.intTitle}</h2>
            <div className="vi-divider" />
            <p style={{ marginBottom: "2.5rem" }}>{a.intText}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {a.rooms.map((r, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1.2rem 0",
                    borderBottom:
                      i < a.rooms.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 500,
                      marginBottom: "0.25rem",
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.05rem",
                    }}
                  >
                    {r.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--fg-3)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {r.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorSection;
