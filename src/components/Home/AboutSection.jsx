import { Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "../../styles/home.scss";

export default function AboutSection() {
  return (
    <Box className="about-section">
      <Typography className="about-heading">
        Perform Market Research to gain <br />
        Insights into Industry Trends
      </Typography>

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
          <Typography className="small-title">ABOUT COMPANY</Typography>

          <Typography className="title">
            Since 2007, We’re working Consulting agency group of more than
            120+ talented peoples helps companies
          </Typography>

          <Typography className="description">
            Globally engage cross-media leadership skills before cross-media
            innovation develop standardized platforms without robust
            applications. Conveniently go forward collaboration and
            idea-sharing.
          </Typography>

          <Box className="check-list">
            {[
              "Professional Team Member",
              "Professional Team Member",
              "Professional Team Member",
            ].map((item, i) => (
              <Box key={i} className="check-item">
                <CheckIcon />
                <span>{item}</span>
              </Box>
            ))}
          </Box>

          <Box className="actions">
            <Button className="about-btn">More About Us</Button>

            <Box className="email">
              <EmailOutlinedIcon />
              <span>example@gmail.com</span>
            </Box>
          </Box>
        {/* SMALL IMAGE */}
        <Box className="small-image">
          <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/about_shpe.png" alt="Team" />
        </Box>
        </Box>

      </Box>
    </Box>
  );
}
