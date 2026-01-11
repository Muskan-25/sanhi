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
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Service */}
          <div className="col-lg-3 col-md-4">
            <Typography className="footer-title">Service</Typography>
            <ul>
              <li>Insurance Process Outsourcing</li>
              <li>Digital Marketing</li>
              <li>Web Development & IT</li>
              <li>Taxation & Compliance</li>
              <li>Accounting & Bookkeeping</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-4">
            <Typography className="footer-title">Contact</Typography>

            <div className="contact-item">
              <LocationOnIcon />
              <span>
                Gurgaon, India
              </span>
            </div>

            <div className="divider" />

            <div className="contact-item">
              <CallIcon />
              <span>+91 82830-03828</span>
            </div>

            <div className="contact-item">
              <EmailIcon />
              <span>info@striveedge.in</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <Typography>
            © 2020 StriveEdge. Designed & Developed by StriveEdge Team
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
