import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";

const StarRow = ({ n }: { n: number }) => (
  <div className="vi-stars">{"★".repeat(n)}</div>
);

const ReviewsSection = () => {
  const { t } = useContext(LangContext);
  const h = t.home;

  return (
    <section className="vi-section vi-section--dark">
      <div className="vi-container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="vi-overline vi-overline--light">
            {h.reviewsEyebrow}
          </span>
          <h2 style={{ color: "var(--bg)" }}>{h.reviewsTitle}</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {h.reviews.map((r, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "2.2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              <StarRow n={r.rating} />
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>
              <div>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: "0.85rem",
                    color: "var(--bg)",
                  }}
                >
                  {r.name}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {r.origin}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
