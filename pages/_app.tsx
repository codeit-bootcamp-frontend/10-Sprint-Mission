import "@/styles/reset.css";
import "@/styles/variables.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다 마켓</title>
      </Head>
      <Header />
      <Container page>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
