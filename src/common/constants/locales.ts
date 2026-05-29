export type Lang = "en" | "hr" | "sl" | "de" | "it" | "fr" | "nl" | "pl";

export const LANG_CODES: Lang[] = ["en", "hr", "sl", "de", "it", "fr", "nl", "pl"];
export const isLang = (v: unknown): v is Lang =>
  typeof v === "string" && (LANG_CODES as string[]).includes(v);

type Feature = { label: string; desc: string };
type Review = { name: string; origin: string; text: string; rating: number };
type Room = { name: string; desc: string };
type Faq = { q: string; a: string };
type SeoEntry = { title: string; description: string };
type Amenities = { pool: string; parking: string; ac: string; wifi: string; grill: string; tv: string };

export type SeoPage = "home" | "about" | "gallery" | "booking" | "contact" | "privacy" | "terms";

export type Translation = {
  seo: Record<SeoPage, SeoEntry> & { amenities: Amenities };
  nav: { home: string; about: string; gallery: string; booking: string; contact: string; book: string };
  home: {
    eyebrow: string;
    headline: string;
    sub: string;
    cta: string;
    ctaBook: string;
    featuresTitle: string;
    features: Feature[];
    aboutEyebrow: string;
    aboutTitle: string;
    aboutText: string;
    reviewsEyebrow: string;
    reviewsTitle: string;
    reviews: Review[];
    locEyebrow: string;
    locTitle: string;
    locText: string;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    extTitle: string;
    extText: string;
    intTitle: string;
    intText: string;
    rooms: Room[];
    faqTitle: string;
    faqs: Faq[];
  };
  calendar: { months: string[]; days: string[] };
  gallery: { eyebrow: string; title: string };
  booking: {
    eyebrow: string;
    title: string;
    calNote: string;
    formTitle: string;
    f: {
      name: string;
      email: string;
      phone: string;
      guests: string;
      checkin: string;
      checkout: string;
      msg: string;
      submit: string;
      success: string;
      error: string;
    };
    bcEyebrow: string;
    bcTitle: string;
    bcText: string;
    bcCta: string;
    bcCta2: string;
    legendSelected: string;
    legendBooked: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    addr: string;
    email: string;
    phone: string;
    f: { name: string; email: string; msg: string; submit: string; success: string; error: string };
  };
  footer: {
    explore: string;
    contact: string;
    availability: string;
    availabilityText: string;
    availabilityCta: string;
    home: string;
    about: string;
    gallery: string;
    booking: string;
    contactUs: string;
    terms: string;
    privacy: string;
    copyright: string;
  };
};

import en from "./locales/en.json";
import hr from "./locales/hr.json";
import sl from "./locales/sl.json";
import de from "./locales/de.json";
import it from "./locales/it.json";
import fr from "./locales/fr.json";
import nl from "./locales/nl.json";
import pl from "./locales/pl.json";

export const translations: Record<Lang, Translation> = { en, hr, sl, de, it, fr, nl, pl };

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "hr", label: "Hrvatski" },
  { code: "sl", label: "Slovenščina" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "fr", label: "Français" },
  { code: "nl", label: "Nederlands" },
  { code: "pl", label: "Polski" },
];
