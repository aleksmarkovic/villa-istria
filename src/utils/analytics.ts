/**
 * Lightweight GA4 event helper.
 *
 * The global `gtag` shim is defined in _document.tsx (the Consent Mode bootstrap)
 * before GA4 loads, so events queue safely even on early clicks and are processed
 * once gtag.js is ready. Under Consent Mode v2 these fire for everyone — as
 * anonymous cookieless pings until the visitor accepts, full events after.
 */

type Gtag = (...args: unknown[]) => void;

export const trackEvent = (name: string, params: Record<string, unknown> = {}): void => {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, params);
};
