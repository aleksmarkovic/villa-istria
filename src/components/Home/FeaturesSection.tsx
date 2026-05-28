import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";

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

const FeaturesSection = () => {
  const { t } = useContext(LangContext);
  const h = t.home;

  return (
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
  );
};

export default FeaturesSection;
