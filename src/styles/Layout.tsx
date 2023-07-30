import { Footer } from "@/components/UI/Footer";
import { Header } from "@/components/UI/Header";
import { Container, Toolbar } from "@mui/material";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Header />
        <Toolbar />
        <Container>{children}</Container>
        <Footer />
      </div>
    </>
  );
};
