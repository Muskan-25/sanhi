import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import "../styles/NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box className="notFound">
      <Box className="content">
        <ErrorOutlineIcon className="icon" />

        <Typography variant="h1" className="code">
          404
        </Typography>

        <Typography variant="h4" className="title">
          Page Not Found
        </Typography>

        <Typography className="description">
          The page you are looking for doesn’t exist or has been moved.
        </Typography>

        <Button
          variant="contained"
          className="homeBtn"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
