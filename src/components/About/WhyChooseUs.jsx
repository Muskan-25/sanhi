import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "../../styles/about.scss";

const features = [
  "Cost effective outsourcing solutions",
  "Industry specific expertise",
  "Scalable teams as your business grows",
  "Transparent communication & reporting",
  "24/7 support options"
];

const WhyChooseUs = () => {
  return (
    <Box className="why-choose-us">
      {/* Cube Icon */}
      <Box className="cube-icon" />

      {/* LEFT */}
      <Box className="left">
        <Box className="dots dots-top" />
        <img
          src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_3/choose_thumb.png"
          alt="team"
          className="image image-one"
        />

        <Box className="dots dots-bottom" />
        {/* <img
          src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_3/choose_thumb.png"
          alt="team"
          className="image image-two"
        /> */}
      </Box>

      {/* RIGHT */}
      <Box className="right">
        <Typography className="subtitle">WHY CHOOSE US</Typography>

        <Typography className="title">
          Your Growth Partner,<br></br> Not Just a Service Provider
        </Typography>

        <Typography className="description">
          Globally engage cross-media leadership skills before cross-media
          innovation develop standardized platforms without robust
          applications.
        </Typography>

        <Box className="features">
          {features.map((item, i) => (
            <Box key={i} className="feature-card">
              <CheckCircleOutlineIcon />
              <span>{item}</span>
            </Box>
          ))}
        </Box>

        <Button className="watch-btn">
          <span className="play">
            <PlayArrowIcon />
          </span>
          Watch Video
        </Button>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
