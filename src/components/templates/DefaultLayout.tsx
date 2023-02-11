import { Container, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

function DefaultLayout() {
  return (
    <Paper
      sx={{
        minHeight: "calc(100vh + 1px)",
        bgcolor: "grey.300",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      elevation={0}
    >
      <Container maxWidth="md">
        <Header />
        <Outlet />
      </Container>
      <Footer />
    </Paper>
  );
}

export default DefaultLayout;
