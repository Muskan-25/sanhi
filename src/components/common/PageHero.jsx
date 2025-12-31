import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const PageHero = ({ title, bgImage }) => {
  return (
    <Box
      className="pageHero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Box className="overlay" />

      <Box className="content">
        <Typography variant="h3" className="title">
          {title}
        </Typography>

        <Box className="breadcrumb">
          <HomeOutlinedIcon className="homeIcon" />
          <Link to="/">Home</Link>
          <span>/</span>
          <Typography component="span">{title}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PageHero;
