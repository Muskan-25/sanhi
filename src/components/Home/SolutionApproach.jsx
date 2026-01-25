// SolutionApproach.jsx
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import "../../styles/home.scss";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useNavigate } from "react-router-dom";
import industry_specific from '../../assets/industry_specific_expertise.jpeg'
import scalable_teams from '../../assets/scalable_teams_as_business_grows.jpeg'
import transparent_communication from '../../assets/transparent_communication_and_reporting.jpeg'
import twenty_four_seven_support from '../../assets/24_7_support.jpeg'
import cost_effective from '../../assets/cost_effective_outsourcing_solutions.jpeg'

const cards = [
  {
    id: "cost-effective",
    title: "Cost-effective outsourcing solutions",
    image: cost_effective,
  },
  {
    id: "scalable",
    title: "Scalable teams as your business grows",
    image: scalable_teams,
  },
  {
    id: "transparent",
    title: "Transparent communication & reporting",
    image: transparent_communication,
  },
  {
    id: "expertise",
    title: "Industry-specific expertise",
    image: industry_specific,
  },
  {
    id: "support",
    title: "24/7 support options",
    image: twenty_four_seven_support,
  },
];

const SolutionApproach = () => {
  const navigate = useNavigate();

  const handleCardClick = (cardId) => {
    navigate(`/why-choose-us#${cardId}`);
  };

  return (
    <Box className="solution-section">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="ac-unit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e0f7fa" />
            <stop offset="100%" stopColor="#b2ebf2" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Top notch shape */}
      <Box className="top-notch">
        <Box className="close-icon">
          <AcUnitIcon className="ac-unit-icon" />
        </Box>
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
