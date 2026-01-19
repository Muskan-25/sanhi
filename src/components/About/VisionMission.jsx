import React from "react";
import { Box, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FlagIcon from "@mui/icons-material/Flag";
import "../../styles/about.scss";

const VisionMission = () => {
  return (
    <Box className="vision-mission">
      <Box className="container">
        <Typography className="section-subtitle">OUR FOUNDATION</Typography>
        <Typography className="section-title">
          Vision & Mission
        </Typography>

        <Box className="cards-wrapper">
          {/* VISION CARD */}
          <Box className="card vision-card">
            <Box className="icon-wrapper">
              <VisibilityIcon className="icon" />
            </Box>
            <Typography className="card-title">Our Vision</Typography>
            <Typography className="card-description">
              To be the leading partner for businesses seeking clarity in complex markets, 
              empowering organizations worldwide with actionable insights and strategic guidance 
              that drive sustainable growth and long-term success.
            </Typography>
          </Box>

          {/* MISSION CARD */}
          <Box className="card mission-card">
            <Box className="icon-wrapper">
              <FlagIcon className="icon" />
            </Box>
            <Typography className="card-title">Our Mission</Typography>
            <Typography className="card-description">
              To deliver exceptional market research and consulting services that transform 
              data into strategic advantage. We commit to understanding our clients' unique 
              challenges and providing tailored solutions that enable confident decision-making 
              and measurable results.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VisionMission;
