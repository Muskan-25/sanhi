import React, { useEffect } from 'react'
import Header from '../components/layout/Header'
import PageHero from '../components/common/PageHero'
import { Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SchoolIcon from '@mui/icons-material/School';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import '../styles/why-choose-us.scss'
import services_bg from '../assets/services_bg.png'

const features = [
  {
    id: "cost-effective",
    title: "Cost-Effective Outsourcing Solutions",
    icon: <AttachMoneyIcon />,
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png",
    description: "We help businesses optimize operational costs without compromising quality. Our outsourcing models are designed to reduce overhead expenses related to hiring, training, infrastructure, and technology. By leveraging efficient processes and skilled professionals, we deliver high-quality services at a predictable and competitive cost structure.",
    benefits: [
      "Reduced operational and staffing costs",
      "Predictable pricing with no hidden expenses",
      "Better resource utilization and ROI"
    ]
  },
  {
    id: "scalable",
    title: "Scalable Teams That Grow With Your Business",
    icon: <TrendingUpIcon />,
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png",
    description: "Business needs change—and your support structure should adapt accordingly. Our flexible engagement models allow you to scale resources up or down based on workload, seasonality, or business growth. Whether you need a small dedicated team or expanded support across functions, we ensure seamless scaling without disruption.",
    benefits: [
      "Faster response to changing business demands",
      "No long-term staffing commitments",
      "Smooth expansion without operational strain"
    ]
  },
  {
    id: "transparent",
    title: "Transparent Communication & Reporting",
    icon: <VisibilityIcon />,
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png",
    description: "We believe transparency builds trust. Our clients benefit from clear communication, regular updates, and structured reporting that provides full visibility into ongoing operations. Dedicated account managers act as a single point of contact, ensuring clarity, accountability, and timely resolution of concerns.",
    benefits: [
      "Real-time visibility into performance",
      "Regular reports aligned with KPIs",
      "Proactive communication and issue management"
    ]
  },
  {
    id: "expertise",
    title: "Industry-Specific Expertise",
    icon: <SchoolIcon />,
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png",
    description: "Our teams bring domain knowledge across multiple industries, allowing us to understand regulatory requirements, operational nuances, and industry best practices. This expertise enables faster onboarding, fewer errors, and more effective execution from day one.",
    benefits: [
      "Reduced learning curve",
      "Compliance-aware operations",
      "High-quality, industry-aligned delivery"
    ]
  },
  {
    id: "support",
    title: "24/7 Support Options",
    icon: <SupportAgentIcon />,
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png",
    description: "We support businesses operating across time zones and markets. Our flexible support models ensure continuity, responsiveness, and uninterrupted service delivery. Whether it's extended hours, overnight support, or round-the-clock operations, we align availability with your business needs.",
    benefits: [
      "Continuous operations across time zones",
      "Faster turnaround times",
      "Reliable support whenever you need it"
    ]
  }
];

function WhyChooseUs() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle hash navigation on mount
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      <Header home={false} />
      <PageHero title="Why Choose Us" bgImage={services_bg} />

      <Box className="why-choose-us-page">
        {/* Introduction Section */}
        <Box className="intro-section">
          <Box className="container">
            <Typography className="section-title">
              Your Growth Partner, Not Just a Service Provider
            </Typography>
            <Typography className="section-description">
              Choosing the right outsourcing partner is a strategic decision that directly impacts efficiency,
              scalability, and long-term success. At StriveEdge, we go beyond task execution—we work as an
              extension of your team, aligning our services with your business goals and operational priorities.
              Our approach is built on reliability, accountability, and measurable value, ensuring that
              outsourcing becomes a growth enabler rather than a cost center.
            </Typography>
          </Box>
        </Box>

        {/* Features Section */}
        <Box className="features-section">
          <Box className="container">
            {features.map((feature, index) => (
              <Box 
                key={feature.id} 
                id={feature.id} 
                className={`feature-card ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
              >
                <Box className="feature-content">
                  <Box className="feature-icon-wrapper">
                    {feature.icon}
                  </Box>
                  <Typography className="feature-title">{feature.title}</Typography>
                  <Typography className="feature-description">{feature.description}</Typography>
                  <Box className="benefits-section">
                    <Typography className="benefits-title">What this means for you:</Typography>
                    <Box className="benefits-list">
                      {feature.benefits.map((benefit, idx) => (
                        <Box key={idx} className="benefit-item">
                          <CheckIcon className="check-icon" />
                          <Typography>{benefit}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
                <Box className="feature-image-wrapper">
                  <Box className="image-container">
                    <img src={feature.image} alt={feature.title} />
                    <Box className="image-overlay"></Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Partnership Section */}
        <Box className="partnership-section">
          <Box className="container">
            <Typography className="section-title">A Partnership Built on Accountability and Trust</Typography>
            <Typography className="section-description">
              At StriveEdge, every engagement is managed with clear ownership, defined processes, and
              performance accountability. We take responsibility for outcomes, not just activities.
              Our focus is to simplify operations, improve efficiency, and help your business scale with
              confidence.
            </Typography>
          </Box>
        </Box>

        {/* CTA Section */}
        <Box className="cta-section">
          <Box className="container">
            <Typography className="cta-title">Ready to Partner With StriveEdge?</Typography>
            <Typography className="cta-description">
              Discover how a strategic outsourcing partnership can support your business growth.
              Let's build a smarter, stronger, and more scalable operation—together.
            </Typography>
            
            <Box className="cta-button-wrapper">
              <Button
                variant="contained"
                className="cta-button"
                onClick={handleContactClick}
                endIcon={<ArrowForwardIcon />}
              >
                Get In Touch
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default WhyChooseUs
