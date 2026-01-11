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
    title: "Insurance Process Outsourcing",
    desc: "Streamline insurance operations with our specialized support services. We handle policy processing, claims management, data entry, and back-office tasks with accuracy and confidentiality.",
    icon: <HubIcon />,
  },
  {
    id: "02",
    title: "Digital Marketing Services",
    desc: "Grow your online presence with data-driven digital marketing solutions, including SEO, social media management, paid advertising, and content marketing tailored to your business goals.",
    icon: <GroupsIcon />,
  },
  {
    id: "03",
    title: "Web Development & IT Services",
    desc: "Build and maintain reliable digital solutions with our web development and IT support services, designed to enhance performance, security, and scalability.",
    icon: <PublicIcon />,
  },
  {
    id: "04",
    title: "Taxation & Compliance Services",
    desc: "Stay compliant and stress-free with expert support for taxation, regulatory filings, and statutory compliance across industries and jurisdictions.",
    icon: <BusinessCenterIcon />,
  },

  {
    id: "05",
    title: "Accounting & Bookkeeping Services",
    desc: "Ensure financial accuracy and transparency with our accounting and bookkeeping services, including daily bookkeeping, reporting, payroll support, and reconciliations.",
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
            OUR SERVICES
          </Typography>

          <Typography component="h2">
            Dedicated Support Designed to Help Your Business Grow Confidently
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
