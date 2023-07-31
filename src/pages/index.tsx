import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Reserba</title>
        {/* // TODO: update meta description */}
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
            Reserba: Restaurant reservations for small- and medium-sized
            restaurants
          </Typography>
          <Typography variant="h2">
            Overview: Reserba: Restaurant reservations for small- and
            medium-sized restaurants Reserba: Restaurant reservations for small-
            and medium-sized restaurants Reserba: Restaurant reservations for
            small- and medium-sized restaurants Reserba: Restaurant reservations
            for small- and medium-sized restaurants Reserba: Restaurant
            reservations for small- and medium-sized restaurants Reserba:
            Restaurant reservations for small- and medium-sized restaurants
            Reserba: Restaurant reservations for small- and medium-sized
            restaurants
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
