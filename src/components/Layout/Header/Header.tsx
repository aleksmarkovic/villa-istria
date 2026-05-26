import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { LangContext } from "../../../context/LangContext";
import LangDropdown from "../../LangDropdown";

type LinkDef = { key: string; href: string; label: string };

const Header = () => {
  const { t } = useContext(LangContext);
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    router.events.on("routeChangeComplete", close);
    return () => router.events.off("routeChangeComplete", close);
  }, [router.events]);

  const links: LinkDef[] = [
    { key: "home", href: "/", label: t.nav.home },
    { key: "about", href: "/about", label: t.nav.about },
    { key: "gallery", href: "/gallery", label: t.nav.gallery },
    { key: "booking", href: "/booking", label: t.nav.booking },
    { key: "contact", href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  const onHome = router.pathname === "/";
  const transparent = onHome && !scrolled;

  const navBg = transparent ? "transparent" : "var(--bg)";
  const navBorder = transparent ? "none" : "1px solid var(--border)";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: "var(--nav-h)",
          background: navBg,
          borderBottom: navBorder,
          backdropFilter: transparent ? "none" : "blur(12px)",
          WebkitBackdropFilter: transparent ? "none" : "blur(12px)",
          transition: "background 0.45s, border-color 0.45s",
        }}
      >
        <div
          style={{
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            padding: "0 2rem",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <img
              src={transparent ? "/assets/img/logo/horizontala4.svg" : "/assets/img/logo/horizontala3.svg"}
              alt="Villa Istria"
              style={{ height: 36, width: "auto", display: "block", transition: "opacity 0.3s" }}
            />
          </Link>

          <div
            style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
            className="vi-nav-desktop"
          >
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.key}
                  href={l.href}
                  className={`vi-nav-link ${active ? "is-active" : ""} ${transparent ? "on-dark" : "on-light"}`}
                >
                  <span className="vi-nav-link__label">{l.label}</span>
                  <span className="vi-nav-link__underline" aria-hidden="true" />
                </Link>
              );
            })}

            <span
              style={{
                width: 1,
                height: 18,
                background: transparent ? "rgba(255,255,255,0.2)" : "var(--border)",
                margin: "0 0.6rem",
              }}
            />

            <LangDropdown light={transparent} />

            <Link
              href="/booking"
              className="vi-btn vi-btn--primary"
              style={{ padding: "0.62rem 1.6rem", fontSize: "0.7rem", marginLeft: "0.4rem" }}
            >
              {t.nav.book}
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              color: transparent ? "#fff" : "var(--fg)",
              fontSize: "1.4rem",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            className="vi-nav-mobile-btn"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 190,
          background: "var(--bg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.35s",
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <img
            src="/assets/img/logo/glavni3.svg"
            alt="Villa Istria"
            style={{ height: 60, width: "auto", display: "block", margin: "0 auto" }}
          />
        </div>
        {links.map((l) => (
          <Link
            key={l.key}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.6rem",
              letterSpacing: "0.06em",
              color: isActive(l.href) ? "var(--accent)" : "var(--fg)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {l.label}
          </Link>
        ))}
        <LangDropdown />
        <Link
          href="/booking"
          onClick={() => setMenuOpen(false)}
          className="vi-btn vi-btn--primary"
        >
          {t.nav.book}
        </Link>
      </div>
    </>
  );
};

export default Header;
