import { Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "../../styles/home.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function AboutSection() {

  const location = useLocation();

  const [showBtn, setShowBtn] = useState(true);

  useEffect(()=>{
    if(location?.pathname.includes('about')){
      setShowBtn(false);
    }else{
      setShowBtn(true);
    }

  }, [location.pathname]);
  return (
    <Box className="about-section">

      <Box className="about-content">
        {/* LEFT IMAGE */}
        <Box className="image-wrapper">
          <img
            src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/about_thumb.png"
            alt="About"
            className="main-image"
          />

          <Box className="badge-circle">
            <svg viewBox="0 0 120 120">
              <defs>
                <path
                  id="circlePath"
                  d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
                />
              </defs>

              <text>
                <textPath href="#circlePath">
                  BUSINESS • CONSULTING • MARKETING •
                </textPath>
              </text>
            </svg>
          </Box>

          {/* <Box className="badge-circle">
            <span>BUSINESS</span>
            <span>CONSULTING</span>
            <span>MARKETING</span>
          </Box> */}
        </Box>

        {/* RIGHT CONTENT */}
        <Box className="text-content">
          <Typography className="small-title">ABOUT</Typography>

          <Typography className="title">
            Turning Market Insights into Confident Business Decisions
          </Typography>

          <Typography className="description">
            Since 2020, we have been helping businesses navigate complex markets with clarity and confidence. Our team of 50+ dedicated professionals delivers practical insights and reliable support that enable smarter planning and sustainable growth.
          </Typography>

          <Typography className="description">
            By combining research, consulting, and execution, we assist organizations in understanding their industry landscape, identifying opportunities, and building strategies that deliver long-term value. We work as a trusted partner, focused on your success at every stage.
          </Typography>

          <Box className="row">
            <Box className="col">
              <Box className="check-list">
                {[
                  "Experienced Consultants",
                  "Market Insight Specialists",
                  "Client-Focused Support Team",
                ].map((item, i) => (
                  <Box key={i} className="check-item">
                    <CheckIcon />
                    <span>{item}</span>
                  </Box>
                ))}
              </Box>

              <Box className="actions">
                {showBtn && <Button className="about-btn">More About Us</Button>}

                <Box className="email">
                  <EmailOutlinedIcon />
                  <span>info@striveedge.in</span>
                </Box>
              </Box>
            </Box>

            <Box className="col">
              <Box className="small-image">
                <img
                  src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/about_shpe.png"
                  alt="Team"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
