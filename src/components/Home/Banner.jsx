import React from "react";
import { Button, IconButton } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import '../../styles/home.scss'
import { Link, useNavigate } from "react-router-dom";
import banner from '../../assets/banner.png';

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="banner container">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="logo-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e0f7fa" />
            <stop offset="100%" stopColor="#b2ebf2" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12 banner-content">
            <h1>
              Empowering Your Business to Scale with Trusted Outsourcing
            </h1>

            <p>
              We provide skilled offshore teams so you can focus on growth, innovation, and customers — not operations.
            </p>

            <div className="banner-actions">
              <Button className="btn_primary" onClick={(e)=>navigate('contact')}>
                Get a Free Consultation
              </Button>

              <Link className="call-info" to='tel:+918283003828'>
                <CallIcon />
                <span>CALL : +91 82830-03828</span>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12 banner-image">
            <div className="image-wrapper">
              <img
                src={banner}
                alt="banner"
                className="img-fluid"
              />

              <IconButton className="play-btn">
                <AutoAwesomeIcon className="logo-icon" />
              </IconButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
