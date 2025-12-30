// SolutionApproach.jsx
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import "../../styles/home.scss";

const cards = [
  {
    title: "Globally Enable Accurate System Sustainable",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png",
  },
  {
    title: "Cultivate Exceptional Net Works Markets",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png",
  },
  {
    title: "Communicate Technically Sound Infrastructure",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png",
  },
];

const SolutionApproach = () => {
  return (
    <Box className="solution-section">
      
      {/* Top notch shape */}
      <Box className="top-notch">
        <Box className="close-icon">✕</Box>
      </Box>

      <Typography className="subtitle">
        SOLUTION APPROACH
      </Typography>

      <Typography className="title">
        Individuals offer Professional Services <br />
        in the field of business Consulting
      </Typography>

      <Box className="cards-wrapper">
        {cards.map((item, index) => (
          <Card className="solution-card" key={index}>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography className="card-title">
                {item.title}
              </Typography>
              <span className="arrow">→</span>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default SolutionApproach;
