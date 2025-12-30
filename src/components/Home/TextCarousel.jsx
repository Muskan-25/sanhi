import { Box, Typography } from "@mui/material";
import "../../styles/home.scss";

const words = [
  "Consulting",
  "Business",
  "Marketing",
  "Strategy",
  "Solutions",
  "Growth",
];

export default function TextMarquee() {
  return (
    <Box className="marquee-wrapper">
      <Box className="marquee-track">
        {[...words, ...words].map((text, i) => (
          <Typography key={i} className="marquee-text">
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
