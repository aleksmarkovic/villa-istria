import React, { useContext } from "react";

import { LangContext } from "../../context/LangContext";

interface PolicyContentProps {
  type: "terms" | "privacy";
}

const PolicyContent = ({ type }: PolicyContentProps) => {
  const { t } = useContext(LangContext);
  const doc = type === "terms" ? t.legal.terms : t.legal.privacy;

  return (
    <div className="vi-page">
      <div style={{ background: "var(--bg-dark)", color: "#fff", padding: "7rem 0 5rem", textAlign: "center" }}>
        <div className="vi-container">
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "0.06em" }}>{doc.title}</h1>
          {doc.intro && (
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                maxWidth: 600,
                margin: "1.5rem auto 0",
                fontSize: "0.9rem",
                lineHeight: 1.7,
              }}
            >
              {doc.intro}
            </p>
          )}
        </div>
      </div>

      <section className="vi-section">
        <div className="vi-container" style={{ maxWidth: 760 }}>
          {doc.sections.map((s, i) => (
            <div
              key={i}
              style={{
                marginBottom: "2.5rem",
                paddingBottom: "2.5rem",
                borderBottom: i < doc.sections.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  marginBottom: "0.8rem",
                  color: "var(--accent)",
                }}
              >
                {s.heading}
              </h4>
              {s.body.split("\n\n").map((para, j) => (
                <p key={j} style={{ marginBottom: "0.8rem", fontSize: "0.9rem", lineHeight: 1.8 }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PolicyContent;
