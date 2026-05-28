import React, { useContext } from "react";
import Link from "next/link";

import { LangContext } from "../../../context/LangContext";

type FooterLink = { key: string; href: string; labelKey: keyof typeof labelMap };

const labelMap = {
  home: "home",
  about: "about",
  gallery: "gallery",
  booking: "booking",
  contactUs: "contactUs",
} as const;

const navLinks: FooterLink[] = [
  { key: "home", href: "/", labelKey: "home" },
  { key: "about", href: "/about", labelKey: "about" },
  { key: "gallery", href: "/gallery", labelKey: "gallery" },
  { key: "booking", href: "/booking", labelKey: "booking" },
  { key: "contact", href: "/contact", labelKey: "contactUs" },
];

const Footer = () => {
  const { t } = useContext(LangContext);
  const f = t.footer;

  return (
    <footer style={{ background: "var(--bg-dark)", color: "rgba(255,255,255,0.5)" }}>
      <div className="vi-container" style={{ padding: "2.25rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }} className="vi-footer-grid">
          <div>
            <div
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent-l)",
                marginBottom: "0.9rem",
                fontWeight: 500,
              }}
            >
              {f.explore}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {navLinks.map((l) => (
                <Link
                  key={l.key}
                  href={l.href}
                  className="vi-footer-link"
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.82rem",
                    padding: "0.3rem 0",
                    textAlign: "left",
                    fontFamily: "var(--font-sans)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    transition: "color 0.2s",
                  }}
                >
                  {f[l.labelKey]}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent-l)",
                marginBottom: "0.9rem",
                fontWeight: 500,
              }}
            >
              {f.contact}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>
                Ulica Velog Jože 15a<br />
                Vabriga (Tar-Vabriga, Poreč)<br />
                52465, Istria, Croatia
              </div>
              <a
                href="mailto:info@villa-istria.hr"
                className="vi-footer-contact"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.85rem",
                  borderBottom: "1px solid rgba(255,255,255,0.15)",
                  paddingBottom: "0.2rem",
                  display: "inline-block",
                  transition: "color 0.2s",
                }}
              >
                info@villa-istria.hr
              </a>
              <a
                href="tel:+385919304368"
                className="vi-footer-contact"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.85rem",
                  transition: "color 0.2s",
                }}
              >
                +385 91 930 4368
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent-l)",
                marginBottom: "0.9rem",
                fontWeight: 500,
              }}
            >
              {f.availability}
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.6,
                marginBottom: "1rem",
              }}
            >
              {f.availabilityText}
            </p>
            <Link href="/booking" className="vi-btn vi-btn--primary" style={{ fontSize: "0.7rem" }}>
              {f.availabilityCta}
            </Link>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "1.5rem 0" }}>
        <div
          className="vi-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.9rem",
            textAlign: "center",
          }}
        >
          <img
            src="/assets/img/logo/glavni3.svg"
            alt="Villa Istria"
            style={{
              height: 52,
              width: "auto",
              filter: "invert(1) brightness(2)",
              opacity: 0.9,
              display: "block",
            }}
          />
          <span style={{ fontSize: "0.68rem", letterSpacing: "0.06em", color: "rgba(255,255,255,0.28)" }}>
            {f.copyright}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/terms-of-service"
              className="vi-footer-policy"
              style={{
                fontSize: "0.68rem",
                color: "rgba(255,255,255,0.28)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                transition: "color 0.2s",
              }}
            >
              {f.terms}
            </Link>
            <Link
              href="/privacy-policy"
              className="vi-footer-policy"
              style={{
                fontSize: "0.68rem",
                color: "rgba(255,255,255,0.28)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                transition: "color 0.2s",
              }}
            >
              {f.privacy}
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vi-footer-link:hover { color: #fff !important; }
        .vi-footer-contact:hover { color: #fff !important; }
        .vi-footer-policy:hover { color: rgba(255,255,255,0.7) !important; }
        @media (max-width: 820px) {
          :global(.vi-footer-grid) { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
