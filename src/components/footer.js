import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#183A64",
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
              About
            </Typography>
            <Typography variant="body2" color="white">
              Hidropol is an application for monitoring and controlling
              Polibatam IoT Based Hydroponic Farm
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" color="white" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Grid sx={{ 
              gap: 3,
              display: "flex",
              flexDirection: "column"
             }}>
              <Typography variant="body2" sx={{ lineHeight: "27px" }} color="white">
                Jl. Ahmad Yani, Tlk. Tering, Kec. Batam Kota, Kota Batam,
                Kepulauan Riau 29461, Politeknik Negeri Batam
              </Typography>
              <Typography variant="body2" color="white">
                Email: hidropol@polibatam.ac.id
              </Typography>
              <Typography variant="body2" color="white">
                Phone: +628 8279606321
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="#ffffff">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="#ffffff"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="#ffffff">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="#ffffff" href="https://hidropol.batam/">
              Hidropol Batam
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
