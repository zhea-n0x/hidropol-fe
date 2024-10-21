import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/style.css";
import Navbar from "../../components/privateComponent/navbar";
import Carousels from "../../components/carousel";
import Statistic from "../../components/statistic";
import Weekly from "../../components/weekly";
import { Box } from "@mui/material";
import Footer from "../../components/footer";
import IsAuth from "../../middleware/isAuth";

const Home  = ()=> {
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


export default IsAuth(Home);
