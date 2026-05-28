import React, { useContext, useState } from "react";
import { LangContext } from "../../context/LangContext";

const FaqSection = () => {
  const { t } = useContext(LangContext);
  const a = t.about;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="vi-section">
      <div className="vi-container" style={{ maxWidth: 720 }}>
        <span className="vi-overline">{a.faqTitle}</span>
        <h2 style={{ marginBottom: "3rem" }}>{a.faqTitle}</h2>
        {a.faqs.map((faq, i) => (
          <div
            key={i}
            style={{ borderTop: "1px solid var(--border)", overflow: "hidden" }}
          >
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.4rem 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  color: "var(--fg)",
                }}
              >
                {faq.q}
              </span>
              <span
                style={{
                  color: "var(--accent)",
                  fontSize: "1.2rem",
                  transition: "transform 0.3s",
                  transform: openFaq === i ? "rotate(45deg)" : "none",
                  flexShrink: 0,
                  marginLeft: "1rem",
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                maxHeight: openFaq === i ? 200 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
            >
              <p style={{ paddingBottom: "1.4rem", fontSize: "0.92rem" }}>
                {faq.a}
              </p>
            </div>
          </div>
        ))}
        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>
    </section>
  );
};

export default FaqSection;
