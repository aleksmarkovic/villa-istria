import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { LangContext } from "../../context/LangContext";

const HERO_SLIDES = [
  "/assets/img/images/Villa_Istria-32.webp",
  "/assets/img/images/Villa_Istria-34.webp",
  "/assets/img/images/Villa_Istria-46.webp",
  "/assets/img/images/Villa_Istria-48.webp",
  "/assets/img/images/Villa_Istria-20.webp",
];

const HeroSlider = () => {
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
  );
};

export default HeroSlider;
