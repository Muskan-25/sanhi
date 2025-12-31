import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../../styles/services.scss";

const services = [
  {
    tag: "INSURANCE",
    title: "Insurance Services",
    desc: "Secure your future with customized insurance solutions tailored to your needs.",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_3/service_1.png",
  },
  {
    tag: "MARKETING",
    title: "Digital Marketing",
    desc: "Grow your brand visibility and engagement with result-driven digital strategies.",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_3/service_1.png",
  },
  {
    tag: "DEVELOPMENT",
    title: "Web Development",
    desc: "High-performance websites and applications built for scalability and speed.",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_3/service_1.png",
  },
  {
    tag: "TAXATION",
    title: "Taxation Services",
    desc: "Accurate tax planning, filing, and compliance services.",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_3/service_1.png",
  },
  {
    tag: "ACCOUNTING",
    title: "Accounting Services",
    desc: "End-to-end accounting and bookkeeping services.",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_3/service_1.png",
  },
];

const ServicesSlider = () => {
  return (
    <Box className="services-section">
      <Typography className="section-tag">SERVICES WE PROVIDE</Typography>
      <Typography className="section-title">
        Individuals Professional Offer
      </Typography>
      <span className="title-underline" />

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="services-swiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <Box className="service-card">
              <Box
                className="card-image"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              <Box className="card-content">
                <span className="tag">{service.tag}</span>

                <Typography className="card-title">
                  {service.title}
                </Typography>

                <Typography className="card-desc">
                  {service.desc}
                </Typography>

                <Button
                  className="details-btn"
                  endIcon={<ArrowForwardIcon />}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ServicesSlider;
