import { Layout } from "@/styles/Layout";
import "@/styles/globals.css";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { authOptions } from "./api/auth/[...nextauth]";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
    },
  };
}
