import Layout from "@/components/layout/Layout";
import GlobalStyle from "@/styles/GlobalStyle";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
