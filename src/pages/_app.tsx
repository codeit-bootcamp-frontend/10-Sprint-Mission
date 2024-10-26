import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";
import "@/styles/reset.css";
import "@/styles/variable.css";
import "@/styles/global.css";

export const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
