import React from "react";
import Head from "next/head";

const SITE_NAME = "Villa Istria Vabriga";
const DEFAULT_URL = "https://www.villa-istria.hr";
const DEFAULT_DESCRIPTION =
  "Modern Istrian villa with a private pool in Vabriga, between Porec and Novigrad, close to the sea.";
const DEFAULT_IMAGE = "/assets/img/images/cropped/Villa_Istria-front.webp";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  robots?: string;
  type?: string;
  schema?: Record<string, unknown>;
}

const toAbsoluteUrl = (path?: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_URL;

  if (!path) {
    return baseUrl;
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  robots = "index, follow, max-image-preview:large",
  type = "website",
  schema,
}: SeoProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(image);

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_NAME,
    description,
    url: canonicalUrl,
    image: imageUrl,
    telephone: "+385919304368",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ulica Velog Joze 15a",
      postalCode: "52465",
      addressLocality: "Tar-Vabriga",
      addressRegion: "Istria",
      addressCountry: "HR",
    },
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema || baseSchema),
        }}
      />
    </Head>
  );
};

export default Seo;
