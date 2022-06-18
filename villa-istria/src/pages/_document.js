import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Villa Istria</title>
          <meta
            name="description"
            content="Modern Istrian holiday house with a swimming pool. Located between
            Novigrad and Porec, near the sea."
          />
          <link rel="icon" href="assets/img/logo/znak1.svg" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Share preview */}
          <meta property="og:url" content="https://villa-istria.hr" />
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
