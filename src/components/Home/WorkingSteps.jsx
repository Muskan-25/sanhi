import React from "react";
import { Box, Typography, Card } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const steps = [
  {
    id: "01",
    title: "Strategic Work Planning",
    desc: "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    icon: <DescriptionOutlinedIcon />,
    dark: true,
  },
  {
    id: "02",
    title: "Monitoring and Evaluation",
    desc: "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    icon: <MonitorOutlinedIcon />,
  },
  {
    id: "03",
    title: "Completed Works",
    desc: "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    icon: <CheckCircleOutlineOutlinedIcon />,
  },
];

const WorkingSteps = () => {
  return (
    <Box className="working_steps_wrapper">
      <Typography className="smallTitle">OUR WORKING STEPS</Typography>

      <Typography className="heading">
        Engaging Consulting's exceptional <br />
        Involves a series of Steps
      </Typography>

      <Typography className="subText">
        Globally engage cross-media leadership skills before cross-media
        innovation forward develop standardized platforms without robust
      </Typography>

      <Box className="cardContainer">
        {steps.map((step) => (
          <Card key={step.id} className="card">
            <Typography className="stepNo">{step.id}</Typography>

            <Box
            className="iconBox"
              sx={{
                backgroundColor: step.dark ? "#0C6E6D" : "#E4F3E3",
                color: step.dark ? "#fff" : "#0C6E6D",
              }}
            >
              {step.icon}
            </Box>

            <Typography className="cardTitle">{step.title}</Typography>
            <Typography className="cardDesc">{step.desc}</Typography>

            <Typography className="arrow">→</Typography>
          </Card>
        ))}
      </Box>

      <Typography className="footerText">
        Feel free to reach out to our consulting{" "}
        <span style={{ textDecoration: "underline", cursor: "pointer" }}>
          Services
        </span>{" "}
        for inquiries and assistance.
      </Typography>
    </Box>
  );
};

export default WorkingSteps;
