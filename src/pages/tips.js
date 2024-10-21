import Carousels from "../components/carousel";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
// import TipsCard from "@/components/tipsCard";
import { useQuery } from "react-query";
import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import "../assets/css/style.css";
import TipsCard from "../components/tipsCard";


export default function Tips(){

  return(
    <div >
      <Navbar />
      <Carousels />
      <h1 className="head-title" style={{ marginTop: 32 }}>Tips & Articles</h1>
      <TipsCard />
      <Footer />
    </div>
  )

}