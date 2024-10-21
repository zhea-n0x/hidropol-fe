import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import "../assets/css/style.css";
import { illust1 } from "../assets/assets";

function Weekly() {
  return (
    <div className="weekly-wrapper">
      <h1 className="head-title">Weekly Chart</h1>
      <Box
        className="weekly-container"
        sx={{
          backgroundColor: "grey.300",
          "&:hover": {
            backgroundColor: "grey.200",
          },
          cursor: "default",
        }}
      >
        <p className="short-desc">
          See Recorded hydroponic progress measurement data.
        </p>
        <center>
          <Button
            variant="contained"
            className="button-week"
            sx={{
              backgroundColor: "#1E6B20",
              width: "75%",
              borderRadius: 3,
              paddingBlock: 2,
            }}
          >
            Check Out The Weekly Summary Here !
          </Button>
        </center>
      </Box>
      <center>
        <Grid container spacing={2} marginTop={3} paddingBottom={10}>
          <Grid item md={6} xs={12}>
            <Typography fontSize={"4rem"} color={"#183A64"} fontWeight={"600"}>
              HIDROPOL
            </Typography>
            <Typography width={"520px"} fontSize={"1.2rem"}>
              Polibatam Hydroponic Farm IoT Based Monitoring System
            </Typography>
            <Button
              variant="contained"
              className="button-week"
              sx={{
                backgroundColor: "#1E6B20",
                width: "65%",
                borderRadius: 3,
                paddingBlock: 2,
                marginTop: 3,
              }}
            >
              Find About Us Here !
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <Image
              alt="illustration"
              priority={true}
              src={illust1}
              width={420}
              height="auto"
              style={{ float: "inline-end !important" }}
            />
          </Grid>
        </Grid>
      </center>
      {/* <Box marginTop={3} marginBottom={3} className="weekly-bottom">
        <Box className="bottom-desc">
          <Typography fontSize={"4rem"} color={"#183A64"} fontWeight={"600"}>
            HIDROPOL
          </Typography>
          <Typography width={"520px"} fontSize={"1.8rem"}>
            Polibatam Hydroponic Farm IoT Based Monitoring System
          </Typography>
          <Button
            variant="contained"
            className="button-week"
            sx={{
              backgroundColor: "#1E6B20",
              width: "65%",
              borderRadius: 3,
              paddingBlock: 2,
              marginTop: 3,
            }}
          >
            Find About Us Here !
          </Button>
        </Box>
        <Box>
          <center>
            <Image src={illust1} width="600" />
          </center>
        </Box>
      </Box> */}
    </div>
  );
}

export default Weekly;
