import { Html, Head, Main, NextScript } from "next/document";
import { pretendard } from "@/pages/_app";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/meta/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="🐼판다마켓" />
        <meta
          property="og:description"
          content="일상의 모든 물건을 거래해 보세요"
        />
        <meta property="og:image" content="/meta/opengraph_image.png" />
        <meta
          property="og:url"
          content="https://codeit-fe10-pandamarket.vercel.app"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="🐼판다마켓" />
        <meta
          name="twitter:description"
          content="일상의 모든 물건을 거래해 보세요"
        />
        <meta name="twitter:image" content="/meta/twitter_image.png" />
        <meta
          property="twitter:url"
          content="https://codeit-fe10-pandamarket.vercel.app"
        />
      </Head>
      <body className={pretendard.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
