import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark scroll-smooth">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,700&family=Raleway:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
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

export default MyDocument;
