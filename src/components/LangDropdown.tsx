import React, { useContext, useState, useRef, useEffect } from "react";
import { LangContext, Lang } from "../context/LangContext";

interface LangDropdownProps {
  light?: boolean;
}

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "hr", label: "Hrvatski" },
];

const LangDropdown = ({ light = false }: LangDropdownProps) => {
  const { lang, setLang } = useContext(LangContext);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = LANGS.find((l) => l.code === lang) || LANGS[0];
  const baseFg = light ? "rgba(255,255,255,0.7)" : "var(--fg-2)";
  const hoverFg = light ? "#fff" : "var(--fg)";
  const fg = open || hover ? hoverFg : baseFg;
  const border = light ? "rgba(255,255,255,0.2)" : "var(--border)";
  const dropBg = light ? "var(--bg-dark)" : "var(--bg)";

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.35rem",
          fontSize: "0.88rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: fg,
          border: "none",
          padding: "0.5rem 0.9rem",
          background: "none",
          cursor: "pointer",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          transition: "color 0.25s ease",
        }}
      >
        {current.code.toUpperCase()}
        <span
          style={{
            fontSize: "0.7rem",
            opacity: 0.7,
            transform: open ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.25s",
          }}
        >
          ▾
        </span>
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            background: dropBg,
            border: `1px solid ${border}`,
            minWidth: 120,
            zIndex: 300,
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              style={{
                display: "block",
                width: "100%",
                padding: "0.6rem 1rem",
                textAlign: "left",
                background:
                  l.code === lang
                    ? light
                      ? "rgba(255,255,255,0.08)"
                      : "var(--bg-2)"
                    : "none",
                border: "none",
                cursor: "pointer",
                color: baseFg,
                fontSize: "0.78rem",
                fontFamily: "var(--font-sans)",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangDropdown;
