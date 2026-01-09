import React from "react";
import { Button, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CallIcon from "@mui/icons-material/Call";
import '../../styles/home.scss'
const Banner = () => {
  return (
    <section className="banner container">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12 banner-content">
            <h1>
              Crafting the Digital Solutions for your Business
            </h1>

            <p>
              Continually plagiarize virtual web services with home_one
              maximizing action items. Globally build front-end
            </p>

            <div className="banner-actions">
              <Button className="primary-btn">
                Get Started Now
              </Button>

              <div className="call-info">
                <CallIcon />
                <span>CALL : +123 (45678) 000</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12 banner-image">
            <div className="image-wrapper">
              <img
                src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/hero_thumb.png"
                alt="banner"
                className="img-fluid"
              />

              <IconButton className="play-btn">
                <PlayArrowIcon />
              </IconButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
