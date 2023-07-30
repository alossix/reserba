import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Reserba</title>
        // TODO: update meta description
        <meta
          name="description"
          content="Reserba: Reservation system for small and medium-sized restaurants"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Box sx={{ p: 1 }}>
          <Typography variant="h1" sx={{ my: 4, textAlign: "center" }}>
            Services
          </Typography>
          <Typography variant="h2">Overview</Typography>
        </Box>
      </Container>
    </>
  );
}
