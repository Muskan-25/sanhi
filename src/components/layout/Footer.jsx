import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "../../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-top">
          {/* Brand */}
          <div className="col-lg-4 col-md-12">
            <Typography className="footer-logo">✳ Consult</Typography>
            <Typography className="footer-text">
              Continually plagiarize virtual web service pro with home_one
              maximizing action
            </Typography>

            <div className="subscribe">
              <input type="email" placeholder="Your E-Mail" />
              <Button className="subscribe-btn">Subscribe</Button>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-4">
            <Typography className="footer-title">Company</Typography>
            <ul>
              <li>About Us</li>
              <li>Meet the Team</li>
              <li>Integrations</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Service */}
          <div className="col-lg-3 col-md-4">
            <Typography className="footer-title">Service</Typography>
            <ul>
              <li>Consultant</li>
              <li>Web Development</li>
              <li>UI Design</li>
              <li>Networking</li>
              <li>Search Engine</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-4">
            <Typography className="footer-title">Contact</Typography>

            <div className="contact-item">
              <LocationOnIcon />
              <span>
                Old Westbury 256, New York 11201, United States
              </span>
            </div>

            <div className="divider" />

            <div className="contact-item">
              <CallIcon />
              <span>+880 123 (4567) 890</span>
            </div>

            <div className="contact-item">
              <EmailIcon />
              <span>example@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <Typography>
            © 2024 Consult. Designed & Developed by Dream-IT
          </Typography>

          <div className="socials">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
