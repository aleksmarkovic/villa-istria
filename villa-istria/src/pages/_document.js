import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Modern Istrian holiday house with a swimming pool. Located between
            Novigrad and Porec, near the sea."
          />
          <link rel="icon" href="assets/img/logo/znak1.svg" />
          <link
            rel="image_src"
            href="assets/img/images/cropped/Villa_Istria-front.webp"
          />
          <meta charSet="utf-8" />

          {/* Share preview */}
          <meta property="og:url" content="https://www.villa-istria.hr" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Villa Istria Vabriga" />
          <meta
            property="og:description"
            content="Modern, luxury villa in Vabriga, near Poreč, Croatia"
          />
          <meta
            property="og:image"
            content="assets/img/images/Villa_Istria-20.webp"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
