import "@/styles/reset.css";
import "@/styles/variables.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다 마켓</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
