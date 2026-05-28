import React from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  note?: string;
  preserveLineBreaks?: boolean;
}

const PageHero = ({ eyebrow, title, subtitle, note, preserveLineBreaks }: PageHeroProps) => (
  <div
    style={{
      background: "var(--bg-dark)",
      color: "#fff",
      padding: "7rem 0 5rem",
      textAlign: "center",
    }}
  >
    <div className="vi-container">
      <span className="vi-overline vi-overline--light">{eyebrow}</span>
      <h1
        style={{
          whiteSpace: preserveLineBreaks ? "pre-line" : "normal",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          letterSpacing: "0.06em",
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            maxWidth: 520,
            margin: "1.5rem auto 0",
            fontSize: "1rem",
          }}
        >
          {subtitle}
        </p>
      )}
      {note && (
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            marginTop: "1rem",
            fontSize: "0.9rem",
          }}
        >
          {note}
        </p>
      )}
    </div>
  </div>
);

export default PageHero;
