import React from "react";
import { Box, Typography, Card } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import TuneIcon from '@mui/icons-material/Tune';
import { Link } from "react-router-dom";

const steps = [
  {
    id: "01",
    title: "Requirement Assessment",
    desc: "We begin by understanding your business objectives, current processes, operational challenges, and outsourcing expectations to ensure practical alignment.",
    icon: <DescriptionOutlinedIcon />,
    dark: true,
  },
  {
    id: "03",
    title: "Customized Solution Design",
    desc: "Based on the defined scope, we design an outsourcing model that includes team structure, timelines, reporting methods, and performance expectations.",
    icon: <TuneIcon />,
  },
  {
    id: "06",
    title: "Review, Optimization & Scaling",
    desc: "We conduct periodic reviews, improve processes where required, and scale resources based on workload and business growth.",
    icon: <MonitorHeartOutlinedIcon />,
  },
  {
    id: "02",
    title: "Process Mapping & Scope Definition",
    desc: "We document workflows, define responsibilities, set service scope, and identify key deliverables to avoid ambiguity and ensure clarity from the start.",
    icon: <MonitorOutlinedIcon />,
  },
  {
    id: "04",
    title: "Knowledge Transfer & Team Onboarding",
    desc: "Our team undergoes structured knowledge transfer, documentation review, and training to ensure readiness before full-scale execution.",
    icon: <CheckCircleOutlineOutlinedIcon />,
  },
  {
    id: "05",
    title: "Service Execution & Performance Tracking",
    desc: "We begin service delivery with continuous monitoring, regular updates, and performance tracking against agreed metrics.",
    icon: <AutoGraphIcon />,
  },
];

const WorkingSteps = () => {
  return (
    <Box className="working_steps_wrapper">
      <Typography className="smallTitle">HOW WE WORK</Typography>

      <Typography className="heading">
        Our Structured Approach to Delivering Reliable Outsourcing Solutions
      </Typography>

      <Typography className="subText">
        We follow a clear and well-defined process to ensure smooth collaboration, transparency, and measurable results at every stage of engagement.
      </Typography>

      <Box className="cardContainer container">
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
