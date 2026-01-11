import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import "../../styles/contact.scss";

const ContactSection = () => {
  return (
    <Box className="contact-section">
      <Box className="contact-wrapper container">
        {/* LEFT CONTENT */}
        <Box className="contact-info">
          <Typography className="small-title">GET IN TOUCH</Typography>

          <Typography className="title">
            Trusted By the Genius <br /> People with Strive Edge
          </Typography>

          <Typography className="description">
            Media leadership skills before cross-media innovation main
            technology develop standardized platforms without consult.
          </Typography>

          <Box className="info-card">
            <Box className="info-row">
              <Box className="icon-circle">
                <PhoneIcon />
              </Box>
              <Box>
                <Typography className="label">Call us Anytime</Typography>
                <Typography className="value">+91 82830-03828</Typography>
              </Box>
            </Box>

            <Box className="divider" />

            <Box className="info-row">
              <Box className="icon-circle">
                <EmailIcon />
              </Box>
              <Box>
                <Typography className="label">Call us Anytime</Typography>
                <Typography className="value">
                  info@striveedge.in
                </Typography>
              </Box>
            </Box>

            <Box className="divider" />

            <Box className="info-row">
              <Box className="icon-circle">
                <LocationOnIcon />
              </Box>
              <Box>
                <Typography className="label">Our Locations</Typography>
                <Typography className="value">
                  Gurgaon, India
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* RIGHT FORM */}
        <Box className="contact-form">
          <Typography className="small-title">CONTACT US</Typography>

          <Typography className="title">
            Get In Touch with Consult
          </Typography>

          <span className="underline" />

          <Box className="form-fields">
            <TextField placeholder="Your Name" />
            <TextField placeholder="Phone No" />
            <TextField placeholder="E-Mail Address" />
            <TextField placeholder="Subject" />
            <TextField
              placeholder="Write Message"
              multiline
              rows={4}
              className="full"
            />

            {/* <Box className="checkbox-row">
              <input type="checkbox" />
              <span>I have a bike</span>
            </Box> */}

            <Button
              className="submit-btn"
              startIcon={<ThumbUpIcon />}
            >
              Request Call Back
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
