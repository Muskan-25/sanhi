import React from "react";
import { Box, Typography, Card } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { Link } from "react-router-dom";
const steps = [
  {
    id: "01",
    title: "Requirement Assessment",
    desc: "We begin by understanding your business objectives, operational challenges, and specific outsourcing requirements to ensure complete alignment.",
    icon: <DescriptionOutlinedIcon />,
    dark: true,
  },
  {
    id: "02",
    title: "Customized Solution Design",
    desc: "Based on your needs, we develop a tailored outsourcing strategy, defining scope, resources, timelines, and performance benchmarks.",
    icon: <MonitorOutlinedIcon />,
  },
  {
    id: "03",
    title: "Seamless Team Integration",
    desc: "Our dedicated professionals are onboarded and integrated into your existing workflows, ensuring continuity, efficiency, and collaboration.",
    icon: <CheckCircleOutlineOutlinedIcon />,
  },

  {
    id: "04",
    title: "Performance Monitoring &amp; Scaling",
    desc: "We continuously monitor performance, provide regular updates, and scale resources as your business evolves.",
    icon: <CheckCircleOutlineOutlinedIcon />,
  },
];

const WorkingSteps = () => {
  return (
    <Box className="working_steps_wrapper">
      <Typography className="smallTitle">HOW IT WORKS</Typography>

      <Typography className="heading">
        Our Structured Approach to Delivering Reliable Outsourcing Solutions
      </Typography>

      <Typography className="subText">
        We follow a clear and well-defined process to ensure smooth collaboration, transparency, and measurable results at every stage of engagement.
      </Typography>

      <Box className="cardContainer">
        {steps.map((step) => (
          <Card key={step.id} className="card">
            <Typography className="stepNo">{step.id}</Typography>

            <Box className="iconBox">{step.icon}</Box>

            <Typography className="cardTitle">{step.title}</Typography>
            <Typography className="cardDesc">{step.desc}</Typography>

            <Typography className="arrow">
              <ArrowRightAltOutlinedIcon />
            </Typography>
          </Card>
        ))}
      </Box>

      <Typography className="footerText">
        Partner with us to experience a streamlined outsourcing process designed to support long-term business growth.
        {/* <Link to="services">Services</Link> for inquiries and assistance. */}
      </Typography>
    </Box>
  );
};

export default WorkingSteps;
