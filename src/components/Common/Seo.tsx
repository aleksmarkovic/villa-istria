import React, { useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { LangContext } from "../../context/LangContext";
import {
  LANG_CODES,
  Lang,
  SeoPage,
  translations,
} from "../../common/constants/locales";

const SITE_NAME = "Villa Istria Vabriga";
const DEFAULT_URL = "https://www.villa-istria.hr";
const DEFAULT_LOCALE: Lang = "en";
const DEFAULT_IMAGE = "/assets/img/images/cropped/Villa_Istria-front.webp";

const OG_LOCALES: Record<Lang, string> = {
  en: "en_US",
  hr: "hr_HR",
  sl: "sl_SI",
  de: "de_DE",
  it: "it_IT",
  fr: "fr_FR",
  nl: "nl_NL",
  pl: "pl_PL",
};

const HREFLANG: Record<Lang, string> = {
  en: "en",
  hr: "hr-HR",
  sl: "sl-SI",
  de: "de-DE",
  it: "it-IT",
  fr: "fr-FR",
  nl: "nl-NL",
  pl: "pl-PL",
};

const SITE_URL = (): string =>
  (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_URL).replace(/\/$/, "");

const buildLocalePath = (pathname: string, locale: Lang): string => {
  const clean = pathname === "/" ? "" : pathname;
  if (locale === DEFAULT_LOCALE) return clean || "/";
  return `/${locale}${clean}`;
};

const toAbsoluteUrl = (path: string): string => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL()}${path.startsWith("/") ? path : `/${path}`}`;
};

const baseLodgingSchema = (
  lang: Lang,
  url: string,
  image: string,
  description: string,
) => ({
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": `${SITE_URL()}/#lodging`,
  name: SITE_NAME,
  description,
  url,
  image,
  inLanguage: lang,
  telephone: "+385919304368",
  email: "info@villa-istria.hr",
  priceRange: "€€€",
  numberOfRooms: 3,
  starRating: { "@type": "Rating", ratingValue: "5" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ulica Velog Jože 15a",
    postalCode: "52465",
    addressLocality: "Tar-Vabriga",
    addressRegion: "Istria",
    addressCountry: "HR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.293382,
    longitude: 13.611912,
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Private pool",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Free parking",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Air conditioning",
      value: true,
    },
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
    {
      "@type": "LocationFeatureSpecification",
      name: "Outdoor grill",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Smart TV & Netflix",
      value: true,
    },
  ],
});

const faqSchema = (lang: Lang): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: lang,
  mainEntity: translations[lang].about.faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const breadcrumbSchema = (
  page: SeoPage,
  lang: Lang,
  url: string,
): Record<string, unknown> => {
  const home = `${SITE_URL()}${buildLocalePath("/", lang)}`;
  const items: { name: string; item: string }[] = [
    { name: translations[lang].nav.home, item: home },
  ];
  if (page !== "home") {
    const navMap: Record<Exclude<SeoPage, "home">, string> = {
      about: translations[lang].nav.about,
      gallery: translations[lang].nav.gallery,
      booking: translations[lang].nav.booking,
      contact: translations[lang].nav.contact,
      privacy: translations[lang].footer.privacy,
      terms: translations[lang].footer.terms,
    };
    items.push({ name: navMap[page], item: url });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
};

interface SeoProps {
  page: SeoPage;
  image?: string;
  preloadImage?: string;
  robots?: string;
  extraSchema?: Record<string, unknown>;
}

const PAGE_TO_PATH: Record<SeoPage, string> = {
  home: "/",
  about: "/about",
  gallery: "/gallery",
  booking: "/booking",
  contact: "/contact",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
};

const UNTRANSLATED_PAGES: SeoPage[] = ["privacy", "terms"];

const Seo = ({
  page,
  image = DEFAULT_IMAGE,
  preloadImage,
  robots = "index, follow, max-image-preview:large",
  extraSchema,
}: SeoProps) => {
  const { lang } = useContext(LangContext);
  const router = useRouter();

  const pathname = PAGE_TO_PATH[page] || router.pathname;
  const untranslated = UNTRANSLATED_PAGES.includes(page);
  const canonicalLang: Lang = untranslated ? DEFAULT_LOCALE : lang;
  const canonicalPath = buildLocalePath(pathname, canonicalLang);
  const canonicalUrl = toAbsoluteUrl(canonicalPath);
  const imageUrl = toAbsoluteUrl(image);
  const t = translations[lang].seo[page];
  const fullTitle = `${t.title} | ${SITE_NAME}`;

  const schemas: Record<string, unknown>[] = [
    baseLodgingSchema(lang, canonicalUrl, imageUrl, t.description),
    breadcrumbSchema(page, lang, canonicalUrl),
  ];
  if (page === "about") schemas.push(faqSchema(lang));
  if (extraSchema) schemas.push(extraSchema);

  return (
    <Head>
      {preloadImage && <link rel="preload" as="image" href={preloadImage} />}
      <title>{fullTitle}</title>
      <meta name="description" content={t.description} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="canonical" href={canonicalUrl} />
      {untranslated ? (
        <link
          rel="alternate"
          hrefLang="en"
          href={toAbsoluteUrl(buildLocalePath(pathname, "en"))}
        />
      ) : (
        LANG_CODES.map((code) => (
          <link
            key={code}
            rel="alternate"
            hrefLang={HREFLANG[code]}
            href={toAbsoluteUrl(buildLocalePath(pathname, code))}
          />
        ))
      )}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={toAbsoluteUrl(buildLocalePath(pathname, DEFAULT_LOCALE))}
      />

      <meta property="og:locale" content={OG_LOCALES[lang]} />
      {LANG_CODES.filter((c) => c !== lang).map((c) => (
        <meta key={c} property="og:locale:alternate" content={OG_LOCALES[c]} />
      ))}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={t.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={t.description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </Head>
  );
};

export default Seo;
