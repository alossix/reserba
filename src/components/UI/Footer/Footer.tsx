import { BottomNavigation, Container } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <BottomNavigation
      sx={{
        bgcolor: "tomato",
        py: 4,
      }}
    >
      <Container maxWidth="xl">Hey</Container>
    </BottomNavigation>
  );
};
