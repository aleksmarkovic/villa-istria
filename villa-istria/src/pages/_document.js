import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
