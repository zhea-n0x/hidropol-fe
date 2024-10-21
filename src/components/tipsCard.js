import Carousels from "../components/carousel";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
// import TipsCard from "@/components/tipsCard";
import { useQuery } from "react-query";
import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import "../assets/css/style.css";
import { img2 } from "../assets/assets";

const url = "../assets/img/illustration";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 300}`;
};

export default function TipsCard() {
  const { isSuccess, isError, isLoading, data } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3009/api/v1/articles");
      return res.data.data;
    },
    refetchInterval: 2000,
  });

//   console.log(data);

  if (isSuccess) {
    return (
      <>
        <Box
          sx={{
            paddingInline: 20,
            paddingBottom: 8
          }}
        >
        <Grid container  spacing={2}> 
          {data.map((i) => {
            return (
              <Grid item xs={12} md={6} xl={3} lg={6} key={i.id}>
                <Box className="tips-card" key={i.id}>
                  <center>
                    <Image
                      loader={myLoader}
                      src={`${i.img_url}`}
                      alt={i.img_url}
                      width={150}
                      height={150}
                    />
                    <Typography
                      className="bold"
                      fontWeight={"bold"}
                      fontSize={14}
                      textAlign={"center"}
                    >
                      {i.title}
                    </Typography>
                    <div
                      style={{ marginTop: "-20px", fontSize: "13px" }}
                      dangerouslySetInnerHTML={{
                        __html: i.content.split(" ").splice(0, 20).join(" ") + '...'
                      }}
                    ></div>
                    <Button variant="contained" sx={{ 
                      backgroundColor: "#1E6B20",
                      width: "100%",
                      paddingBlock: "16px",
                      borderRadius: "16px"
                     }}>
                      Read More
                    </Button>
                  </center>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        {/* <TipsCard /> */}
        </Box>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Navbar />
        {/* <Carousels /> */}
        <Box
          sx={{
            paddingInline: 20,
          }}
        ></Box>
        {/* <TipsCard /> */}

        <h2>Loading !</h2>
        <Footer />
      </>
    );
  }

  return <h1>Article API Doesn't Gives A Response!</h1>;
}
