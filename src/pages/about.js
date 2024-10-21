import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/navbar";
import Carousels from "../components/carousel";
import Footer from "../components/footer";
import About from "../components/about";
import { Box } from "@mui/material";

export default function Dashboard() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Carousels />
      <Box sx={{ paddingInline: 20, paddingBottom: 10 }}>
        <About />
      </Box>
      <Footer />
    </>
  );
}
