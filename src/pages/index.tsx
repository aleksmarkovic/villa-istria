import React, { useContext, useEffect, useState } from "react";
import type { GetStaticProps } from "next";
import Link from "next/link";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Seo from "../components/Common/Seo";
import { LangContext } from "../context/LangContext";

const HERO_SLIDES = [
  "/assets/img/images/Villa_Istria-32.webp",
  "/assets/img/images/Villa_Istria-34.webp",
  "/assets/img/images/Villa_Istria-46.webp",
  "/assets/img/images/Villa_Istria-48.webp",
  "/assets/img/images/Villa_Istria-20.webp",
];

const IMG_ABOUT = "/assets/img/images/Villa_Istria-4.webp";

type IconType = "bed" | "pool" | "park" | "star";
const ICONS: IconType[] = ["bed", "pool", "park", "star"];

const Icon = ({ type }: { type: IconType }) => {
  const s = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none" as const,
  };
  if (type === "bed")
    return (
      <svg {...s}>
        <rect
          x="2"
          y="12"
          width="24"
          height="12"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2 18h24M8 12V8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  if (type === "pool")
    return (
      <svg {...s}>
        <path
          d="M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 22c2-2 4-2 6 0s4 2 6 0 4-2 6 0M14 4a3 3 0 1 1 0-6M14 4v8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  if (type === "park")
    return (
      <svg {...s}>
        <rect
          x="4"
          y="10"
          width="20"
          height="13"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 13l10-9 10 9M10 23v-6h8v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  return (
    <svg {...s}>
      <path
        d="M14 2l3 8h8l-6.5 5 2.5 8L14 18l-7 5 2.5-8L3 10h8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const StarRow = ({ n }: { n: number }) => (
  <div className="vi-stars">{"★".repeat(n)}</div>
);

const HomePage = () => {
  const { t } = useContext(LangContext);
  const h = t.home;

  const [slide, setSlide] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    HERO_SLIDES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  const goSlide = (i: number) => {
    if (i === slide || transitioning) return;
    setPrev(slide);
    setTransitioning(true);
    setSlide(i);
    setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
    }, 1000);
  };

  useEffect(() => {
    const id = setInterval(() => {
      const next = (slide + 1) % HERO_SLIDES.length;
      goSlide(next);
    }, 5000);
    return () => clearInterval(id);
  }, [slide, transitioning]);

  return (
    <div className="vi">
      <Seo
        title="Luxury Villa in Vabriga"
        description="Book Villa Istria in Vabriga: private pool, modern interiors, and a calm location between Porec and Novigrad."
        path="/"
        image="/assets/img/images/Villa_Istria-20.webp"
      />
      <Header />

      <div
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 560,
          overflow: "hidden",
        }}
      >
        {HERO_SLIDES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Villa Istria ${i + 1}`}
            style={{
              position: "absolute",
              inset: 0,
              objectFit: "cover",
              width: "100%",
              height: "100%",
              opacity: i === slide ? 1 : i === prev ? 1 : 0,
              transition: i === slide ? "opacity 1s ease" : "none",
              zIndex: i === slide ? 2 : i === prev ? 1 : 0,
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(26,57,80,0.35) 0%, rgba(26,57,80,0.55) 100%)",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            padding: "0 1.5rem",
            zIndex: 3,
          }}
        >
          <span
            className="vi-overline vi-overline--light vi-fade-up"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {h.eyebrow}
          </span>
          <div className="vi-fade-up-2" style={{ marginBottom: "2.5rem" }}>
            <img
              src="/assets/img/logo/glavni3.svg"
              alt="Villa Istria"
              style={{
                height: "clamp(110px, 12vw, 150px)",
                width: "auto",
                display: "block",
                margin: "0 auto",
                filter: "invert(1) brightness(2)",
              }}
            />
          </div>
          <p
            className="vi-fade-up-3"
            style={{
              fontSize: "clamp(1.05rem, 1.3vw, 1.25rem)",
              color: "rgba(255,255,255,0.85)",
              maxWidth: 560,
              marginBottom: "2.5rem",
              lineHeight: 1.55,
              fontWeight: 300,
              letterSpacing: "0.01em",
            }}
          >
            {h.sub}
          </p>
          <div
            className="vi-fade-up-3"
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link href="/about" className="vi-btn vi-btn--ghost-light">
              {h.cta}
            </Link>
            <Link href="/booking" className="vi-btn vi-btn--primary">
              {h.ctaBook}
            </Link>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textAlign: "center",
            zIndex: 3,
          }}
        >
          <div
            style={{
              width: 1,
              height: 40,
              background: "rgba(255,255,255,0.35)",
              margin: "0 auto 0.6rem",
            }}
          />
          scroll
        </div>

        <button
          onClick={() =>
            goSlide((slide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
          }
          aria-label="Previous slide"
          style={{
            position: "absolute",
            left: "1.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 3,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#fff",
            width: 44,
            height: 44,
            cursor: "pointer",
            fontSize: "1.1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.25)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
          }
        >
          ‹
        </button>
        <button
          onClick={() => goSlide((slide + 1) % HERO_SLIDES.length)}
          aria-label="Next slide"
          style={{
            position: "absolute",
            right: "1.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 3,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#fff",
            width: 44,
            height: 44,
            cursor: "pointer",
            fontSize: "1.1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.25)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
          }
        >
          ›
        </button>

        <div
          style={{
            position: "absolute",
            bottom: "5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "0.5rem",
            zIndex: 3,
          }}
        >
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === slide ? 24 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                cursor: "pointer",
                background: i === slide ? "#fff" : "rgba(255,255,255,0.4)",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <section className="vi-section--muted">
        <div className="vi-container vi-section--sm">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="vi-overline">{h.featuresTitle}</span>
            <div className="vi-divider vi-divider--center" />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {h.features.map((feat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div style={{ color: "var(--accent)", width: 28, height: 28 }}>
                  <Icon type={ICONS[i]} />
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {feat.label}
                </h4>
                <p style={{ fontSize: "0.9rem" }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      </section>

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1119.4025610397325!2d13.611911963085207!3d45.293381990782315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477c9982c1e7761f%3A0x9f82c9aa839c03d2!2sVilla%20Istria!5e1!3m2!1shr!2shr!4v1653915252118!5m2!1shr!2shr"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (max-width: 900px) {
          .vi-home-about {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
