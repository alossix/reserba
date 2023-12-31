import { Layout } from "@/styles/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
}
