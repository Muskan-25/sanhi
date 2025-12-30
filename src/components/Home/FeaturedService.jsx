import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import GroupsIcon from "@mui/icons-material/Groups";
import HubIcon from "@mui/icons-material/Hub";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import '../../styles/home.scss';

const services = [
  {
    id: "01",
    title: "Business Planning and Technologist",
    desc: "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    icon: <HubIcon />,
  },
  {
    id: "02",
    title: "Human home ones and Consulting",
    desc: "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    icon: <GroupsIcon />,
  },
  {
    id: "03",
    title: "Opportunities Global Business Service",
    desc: "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    icon: <PublicIcon />,
  },
  {
    id: "04",
    title: "Insurance for Family Consulting",
    desc: "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    icon: <BusinessCenterIcon />,
  },
];

const FeaturedService = () => {
  return (
    <Box className="featured-service">
      <Box className="container">

        {/* Heading */}
        <Box className="section-head">
          <Typography className="sub-title">
            FEATURED SERVICE
          </Typography>

          <Typography component="h2">
            Unlocking Your Business's Potential with
            <br />
            the Best Innovate Consulting active and
            <br />
            Dedicated Customers
          </Typography>
        </Box>

        {/* Cards */}
        <Box className="card_container">
          {services.map((item, index) => (
            <Box className="card" key={index}>
                <Box className="icon">{item.icon}</Box>

                <Typography component="h5">
                  {item.title}
                </Typography>

                <Typography component="p">
                  {item.desc}
                </Typography>

                <Box className="number"><Typography className="text">{item.id}</Typography></Box>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
};

export default FeaturedService;
