import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";
import { MediaProvider } from "@/store/MediaContext";
import Layout from "@/components/layout/Layout";
import "@/styles/reset.css";
import "@/styles/variable.css";
import "@/styles/global.css";

export const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

type MyAppProps = AppProps & {
  Component: { isNotLayout?: boolean };
};

export default function App({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <MediaProvider>
        {Component.isNotLayout ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </MediaProvider>
    </>
  );
}
