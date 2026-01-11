import { Box, Typography, Button } from "@mui/material";

export default function CtaStats() {
  return (
    <Box className="cta-stats-wrapper">
      <Box className="cta-stats">
        {/* TOP CONTENT */}
        <Box className="cta-header">
          <Typography className="cta-title">
            Perform Market Research to gain <br />
            Insights into Industry Trends
          </Typography>

          <Button className="cta-btn">Get Started Now</Button>
        </Box>

        <div className="divider" />

        {/* STATS */}
        <Box className="stats-row">
          <Box className="stat-item">
            <Typography className="stat-value">1500+</Typography>
            <Typography className="stat-label">
              TOTAL PROJECTS <br /> COMPLATED
            </Typography>
          </Box>

          <span className="star">✦</span>

          <Box className="stat-item">
            <Typography className="stat-value">300+</Typography>
            <Typography className="stat-label">
              SATIFIED ACTIVE <br /> CUSTOMERS
            </Typography>
          </Box>

          <span className="star">✦</span>

          <Box className="stat-item">
            <Typography className="stat-value">
              4.7<span>*</span>
            </Typography>
            <Typography className="stat-label">
              AVERAGE CLIENTS <br /> RATINGS
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
