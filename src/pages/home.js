import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/style.css";
import Navbar from "../components/navbar";
import Carousels from "../components/carousel";
import Statistic from "../components/statistic";
import Weekly from "../components/weekly";
import { Box } from "@mui/material";
import Footer from "../components/footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Carousels />
      <Box
        sx={{
          paddingInline: 20,
        }}
      >
        <Statistic />
        <Weekly />
      </Box>
      <Footer />
    </>
  );
}
