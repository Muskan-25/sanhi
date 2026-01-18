import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "../../styles/footer.scss";
import logo_dark from "../../assets/logo_light2.png";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-top">
          {/* Brand */}
          <div className="col-lg-4 col-md-12">
            <Typography className="footer-logo">
              <Box
                component="img"
                src={logo_dark}
                className="logo"
                alt="striveedge"
              />
            </Typography>
            <Typography className="footer-text">
              Continually plagiarize virtual web service pro
            </Typography>

            <div className="social_icons">
  <Link
    to="https://facebook.com"
    target="_blank"
    rel="noreferrer"
    className="icon"
  >
    <i className="fa-brands fa-facebook-f"></i>
  </Link>

  <Link
    to="https://instagram.com"
    target="_blank"
    rel="noreferrer"
    className="icon"
  >
    <i className="fa-brands fa-instagram"></i>
  </Link>

  <Link
    to="https://linkedin.com"
    target="_blank"
    rel="noreferrer"
    className="icon"
  >
    <i className="fa-brands fa-linkedin"></i>
  </Link>

  <Link
    to="https://twitter.com"
    target="_blank"
    rel="noreferrer"
    className="icon"
  >
    <i className="fa-brands fa-x-twitter"></i>
  </Link>
</div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-4">
            <Typography className="footer-title">Company</Typography>
            <ul>
              <li>
                <Link to="../about"> About </Link>
              </li>
              <li>
                <Link to="../services"> Services </Link>
              </li>
              <li>
                <Link to="../contact"> Contact </Link>
              </li>
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
              <li>Financial Advisory</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-4">
            <Typography className="footer-title">Contact</Typography>

            <Link
              className="contact-item"
              to="https://maps.app.goo.gl/8WxTWM2m25hWW9ZV8"
              target="_blank"
            >
              <LocationOnIcon />
              <span>Gurgaon, India</span>
            </Link>

            <div className="divider" />

            <Link className="contact-item" to="tel:+918283003828">
              <CallIcon />
              <span>+91 82830-03828</span>
            </Link>

            <Link className="contact-item" to="mailto:info@striveedge.in">
              <EmailIcon />
              <span>info@striveedge.in</span>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <Typography>
            © {new Date().getFullYear()} StriveEdge. Designed & Developed by
            StriveEdge Team
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
