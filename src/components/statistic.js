import * as React from "react";
import Box from "@mui/material/Box";
import "../assets/css/style.css";
import { nutrition, ph, temp, uv, water } from "../assets/icon";
import Image from "next/image";
import axios from "axios";
import {useQuery} from "react-query";

function Statistic() {
  const {isSuccess, isError, isLoading, data} = useQuery({
    queryKey: ["sensor"],
    queryFn: async () => {
      const res = await axios.get("https://eyjlbmrwb2ludci6imhpzhjvcg9slwdhdgv3yxkifq.vercel.app/latest_sensor");
      return res.data;
    },
    refetchInterval: 2000
  })

  console.log(data);

  if(isSuccess){
    return (
      <div className="monitoring-container">
        <center>
          <h1 className="head-title">Monitoring Panel</h1>
        </center>
        <div className="statistic-container">
          <Box
            sx={{
              backgroundColor: "grey.300",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
            className="monitor"
          >
            <Image src={temp} className="icon-stats" alt="temp"/>
            <p className="parameter">Water Temp.</p>
            <p className="value">{data.water_temp_sensor} °C</p>
          </Box>
          <Box
            sx={{
              backgroundColor: "grey.300",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
            className="monitor"
          >
            <Image src={temp} className="icon-stats" alt="temp" />
            <p className="parameter">Room Temp.</p>
            <p className="value">{data.outer_temp_sensor} °C</p>
          </Box>
          <Box
            sx={{
              backgroundColor: "grey.300",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
            className="monitor"
          >
            <Image src={nutrition} className="icon-stats" alt="nutrition" />
            <p className="parameter">Nutrition</p>
            <p className="value">{data.nutrition_sensor < 1 ? 'Still Reading' : data.nutrition_sensor + 'ppm'} </p>
          </Box>
          <Box
            sx={{
              backgroundColor: "grey.300",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
            className="monitor"
          >
            <Image src={water} className="icon-stats" alt="water height" />
            <p className="parameter">Water Height</p>
            <p className="value">{data.water_height_sensor} cm</p>
          </Box>
          <Box
            sx={{
              backgroundColor: "grey.300",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
            className="monitor"
          >
            <Image src={water} className="icon-stats" alt="water height" />
            <p className="parameter">PH Value</p>
            <p className="value">{data.ph_sensor} </p>
          </Box>
          {/* <Box
            sx={{
              backgroundColor: "grey.300",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
            className="monitor"
          >
            <Image src={uv} className="icon-stats" alt="uv" />
            <p className="parameter">UV Light</p>
            <p className="value">On</p>
          </Box> */}
        </div>
      </div>
    );
  }

  if(isLoading){
    return (
      <div className="monitoring-container">
        <center>
          <h1 className="head-title">Monitoring Panel</h1>
        </center>
        <div className="statistic-container">
          <Box
            sx={{
              backgroundColor: "grey.300",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
            className="monitor"
          >
            <Image src={temp} className="icon-stats" alt="temp"/>
            <p className="parameter">Water Temp.</p>
            <p className="value">Loading Value</p>
          </Box>
          <Box
            sx={{
              backgroundColor: "grey.300",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
            className="monitor"
          >
            <Image src={temp} className="icon-stats" alt="temp" />
            <p className="parameter">Room Temp.</p>
            <p className="value">Loading Value</p>
          </Box>
          <Box
            sx={{
              backgroundColor: "grey.300",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
            className="monitor"
          >
            <Image src={nutrition} className="icon-stats" alt="nutrition" />
            <p className="parameter">Nutrition</p>
            <p className="value">Loading Value</p>
          </Box>
          <Box
            sx={{
              backgroundColor: "grey.300",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
            className="monitor"
          >
            <Image src={water} className="icon-stats" alt="water height" />
            <p className="parameter">Water Height</p>
            <p className="value">Loading Value</p>
          </Box>
          <Box
            sx={{
              backgroundColor: "grey.300",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
            className="monitor"
          >
            <Image src={water} className="icon-stats" alt="water height" />
            <p className="parameter">PH Value</p>
            <p className="value">Loading Value</p>
          </Box>
          {/* <Box
            sx={{
              backgroundColor: "grey.300",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
            className="monitor"
          >
            <Image src={uv} className="icon-stats" alt="uv" />
            <p className="parameter">UV Light</p>
            <p className="value">On</p>
          </Box> */}
        </div>
      </div>
    );
  }

  
}

export default Statistic;
