import React, { useContext, useState } from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Seo from "../components/Common/Seo";
import { LangContext } from "../context/LangContext";

const IMG_TERRACE = "/assets/img/images/cropped/Villa Istria-37-terrace.webp";
const IMG_FRONT = "/assets/img/images/cropped/Villa_Istria-front.webp";

const AboutPage = () => {
  const { t } = useContext(LangContext);
  const a = t.about;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="vi">
      <Seo
        title="About Villa Istria"
        description="Learn about Villa Istria, a modern family villa in Vabriga near the sea, designed for comfortable stays in Istria."
        path="/about"
        image="/assets/img/images/cropped/Villa_Istria-front.webp"
      />
      <Header />
      <div className="vi-page">
        <div style={{ background: "var(--bg-dark)", color: "#fff", padding: "7rem 0 5rem", textAlign: "center" }}>
          <div className="vi-container">
            <span className="vi-overline vi-overline--light">{a.eyebrow}</span>
            <h1
              style={{
                whiteSpace: "pre-line",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "0.06em",
              }}
            >
              {a.title}
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                maxWidth: 520,
                margin: "1.5rem auto 0",
                fontSize: "1rem",
              }}
            >
              {a.subtitle}
            </p>
          </div>
        </div>

        <section className="vi-section">
          <div className="vi-container">
            <div
              className="vi-about-row"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
            >
              <div>
                <span className="vi-overline">{a.extTitle}</span>
                <h2 style={{ marginBottom: "1.2rem" }}>{a.extTitle}</h2>
                <div className="vi-divider" />
                <p>{a.extText}</p>
              </div>
              <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "var(--bg-2)" }}>
                <img src={IMG_TERRACE} alt="Villa terrace" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>

        <section className="vi-section vi-section--muted">
          <div className="vi-container">
            <div
              className="vi-about-row"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
            >
              <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "var(--bg-2)" }}>
                <img src={IMG_FRONT} alt="Villa front" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
                        borderBottom: i < a.rooms.length - 1 ? "1px solid var(--border)" : "none",
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
                      <div style={{ fontSize: "0.82rem", color: "var(--fg-3)", letterSpacing: "0.04em" }}>{r.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vi-section">
          <div className="vi-container" style={{ maxWidth: 720 }}>
            <span className="vi-overline">{a.faqTitle}</span>
            <h2 style={{ marginBottom: "3rem" }}>{a.faqTitle}</h2>
            {a.faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid var(--border)", overflow: "hidden" }}>
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
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--fg)" }}>
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
                  <p style={{ paddingBottom: "1.4rem", fontSize: "0.92rem" }}>{faq.a}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </section>
      </div>
      <Footer />

      <style jsx>{`
        @media (max-width: 900px) {
          .vi-about-row {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
