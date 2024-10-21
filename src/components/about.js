import "../assets/css/style.css";
import { illust2 } from "../assets/assets";
import { Grid } from "@mui/material";
import Image from "next/image";

export default function About() {
  return (
    <>
      <h1 className="head-title" style={{ marginTop: 32 }}>About Hidropol</h1>
      <Grid
        sx={{
          alignItems: "center",
        }}
        container
        spacing={2}
        marginTop={1}
      >
        <Grid item md={6} xs={12}>
          <p className="about-hidropol">
            <b className="bold">Hidropol</b> is a Hydroponic with IoT-Based
            System to monitoring, controlling, and learning about Hydropononic.
            Consist of 7 Members, and 2 Project Manager, this system based on
            Agile Method for system development.
          </p>
          <hr />
          <h3 className="bold">Project Manager</h3>
          <ol>
            <li>Dodi Prima Resda, S.Pd., M.Kom (Project Manager)</li>
            <li>Rizki H. P (Co-Project Manager)</li>
          </ol>
          <h3 className="bold">Member</h3>
          <ol>
            <li>
              Adam Firdaus - 4311901038 - (Back-End Engineer & Front-End
              Engineer)
            </li>
            <li>Ana Mufida - 4311901033 - (Hardware Engineer)</li>
            <li>Amira Afiqa Ardi - 4311901068 - (UI Design)</li>
            <li>Kirani - 4311901036 - (Hardware Engineer)</li>
            <li>Moh. Zain Abdul Mazjid - 4311901043 - (Asset Designer)</li>
            <li>
              Muhammad Ibnu Farhan - 4311901085 - (Asset Designer & Front-End
              Engineer)
            </li>
            <li>Samudra Abriliawan - 4311901093 - (Hardware Engineer)</li>
          </ol>
        </Grid>
        <Grid item md={6} xs={12}>
          <center>
            <Image src={illust2} width={420} height="auto" alt="illustration" />
          </center>
        </Grid>
      </Grid>
    </>
  );
}
