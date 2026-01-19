// SolutionApproach.jsx
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import "../../styles/home.scss";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: "cost-effective",
    title: "Costeffective outsourcing solutions",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png",
  },
  {
    id: "scalable",
    title: "Scalable teams as your business grows",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png",
  },
  {
    id: "transparent",
    title: "Transparent communication & reporting",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png",
  },
  {
    id: "expertise",
    title: "Industryspecific expertise",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png",
  },
  {
    id: "support",
    title: "24/7 support options",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png",
  },
];

const SolutionApproach = () => {
  const navigate = useNavigate();

  const handleCardClick = (cardId) => {
    navigate(`/why-choose-us#${cardId}`);
  };

  return (
    <Box className="solution-section">
      
      {/* Top notch shape */}
      <Box className="top-notch">
        <Box className="close-icon"><AcUnitIcon/></Box>
      </Box>

      <Typography className="subtitle">
        Why Choose Us
      </Typography>

      <Typography className="title">
        Your Growth Partner, Not Just a Service Provider
      </Typography>

      <Box className="cards-wrapper">
        {cards.map((item, index) => (
          <Card 
            className="solution-card" 
            key={index}
            onClick={() => handleCardClick(item.id)}
            sx={{ cursor: 'pointer' }}
          >
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography className="card-title">
                {item.title}
              </Typography>
              <span className="arrow"><ArrowRightAltOutlinedIcon/></span>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default SolutionApproach;
