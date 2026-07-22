import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";

import { LangContext } from "../../context/LangContext";

/**
 * GDPR cookie consent banner wired to Google Consent Mode v2.
 *
 * Consent defaults to "denied" in _app.tsx (before GA loads), so GA4 runs in
 * cookieless mode until the visitor chooses. Accept upgrades consent to
 * "granted"; Reject leaves it denied. The choice is persisted in a first-party
 * cookie and re-applied on every load (default is denied each page view).
 *
 * Re-open later: any element can dispatch `new Event("vi-open-cookie-consent")`
 * (e.g. the footer "Cookie settings" link) to show the banner again.
 */

const CONSENT_VERSION = 1;
const COOKIE_NAME = "vi-cookie-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 182; // ~6 months, then re-ask
export const OPEN_CONSENT_EVENT = "vi-open-cookie-consent";

type Consent = "granted" | "denied";

const readConsent = (): Consent | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)vi-cookie-consent=([^;]+)/);
  if (!match) return null;
  const [version, choice] = decodeURIComponent(match[1]).split(":");
  if (version !== `v${CONSENT_VERSION}`) return null; // policy bumped → re-ask
  return choice === "granted" ? "granted" : choice === "denied" ? "denied" : null;
};

const writeConsent = (choice: Consent): void => {
  const value = encodeURIComponent(`v${CONSENT_VERSION}:${choice}`);
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
};

const updateGtagConsent = (choice: Consent): void => {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  gtag("consent", "update", {
    analytics_storage: choice,
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
  });
};

const CookieBanner = (): JSX.Element | null => {
  const { t } = useContext(LangContext);
  const c = t.cookie;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored === "granted") {
      updateGtagConsent("granted"); // re-affirm; default is denied each load
    } else if (stored === null) {
      setVisible(true);
    }

    const open = (): void => setVisible(true);
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  const choose = (choice: Consent): void => {
    writeConsent(choice);
    updateGtagConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={c.title}
      className="vi vi-cookie"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="vi-cookie-card"
        style={{
          maxWidth: "var(--max-w)",
          width: "100%",
          background: "var(--bg)",
          border: "1px solid var(--border)",
          boxShadow: "0 8px 40px rgba(26,57,80,0.22)",
          padding: "1.5rem 1.75rem",
          display: "flex",
          alignItems: "center",
          gap: "1.75rem",
        }}
      >
        <div className="vi-cookie-text" style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.05rem",
              color: "var(--fg)",
              marginBottom: "0.4rem",
              letterSpacing: "0.02em",
            }}
          >
            {c.title}
          </div>
          <p
            style={{
              fontSize: "0.82rem",
              lineHeight: 1.65,
              color: "var(--fg-2)",
              margin: 0,
            }}
          >
            {c.message}{" "}
            <Link
              href="/privacy-policy"
              className="vi-cookie-link"
              style={{ color: "var(--accent)", textDecoration: "underline", whiteSpace: "nowrap" }}
            >
              {t.footer.privacy}
            </Link>
          </p>
        </div>

        <div
          className="vi-cookie-actions"
          style={{ display: "flex", gap: "0.75rem", flexShrink: 0, alignItems: "center" }}
        >
          <button
            type="button"
            onClick={() => choose("denied")}
            className="vi-btn vi-btn--outline"
            style={{ padding: "0.7rem 1.6rem", fontSize: "0.65rem" }}
          >
            {c.reject}
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="vi-btn vi-btn--primary"
            style={{ padding: "0.7rem 1.6rem", fontSize: "0.65rem" }}
          >
            {c.accept}
          </button>
        </div>
      </div>

      <style jsx>{`
        .vi-cookie-link:hover {
          color: var(--bg-dark) !important;
        }
        @media (max-width: 720px) {
          :global(.vi-cookie-card) {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 1.1rem !important;
            padding: 1.25rem 1.25rem !important;
          }
          :global(.vi-cookie-actions) {
            justify-content: stretch !important;
          }
          :global(.vi-cookie-actions) button {
            flex: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;
