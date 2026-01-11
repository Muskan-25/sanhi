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
    title: "Insurance Process Outsourcing",
    desc: "Insurance operations involve high volumes of data, strict compliance requirements, and time-sensitive workflows. Managing these processes in-house can be resource-intensive and costly. Our Insurance Process Outsourcing services help insurance providers streamline operations while maintaining accuracy and confidentiality. We support insurance companies, brokers, and agencies by handling critical back-office functions, allowing internal teams to focus on customer engagement and strategic growth.",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_3/service_1.png",
  },
  {
    tag: "MARKETING",
    title: "Digital Marketing Services",
    desc: "In today’s competitive digital landscape, consistent online visibility and targeted marketing are essential for growth. Our Digital Marketing Services help businesses connect with the right audience through data-driven strategies and measurable campaigns. We work closely with you to understand your brand, goals, and market, delivering customized marketing solutions that drive engagement and results.",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_3/service_1.png",
  },
  {
    tag: "DEVELOPMENT",
    title: "Web Development & IT Services",
    desc: "Reliable technology is the backbone of modern businesses. Our Web Development & IT Services are designed to build, support, and maintain secure, scalable digital solutions aligned with your business objectives. Whether you need a new digital platform or ongoing technical support, our team ensures performance, stability, and user experience.",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_3/service_1.png",
  },
  {
    tag: "TAXATION",
    title: "Taxation & Compliance Services",
    desc: "Managing taxation and regulatory compliance can be complex and time-consuming, especially across changing regulations. Our Taxation & Compliance Services help businesses stay compliant while minimizing risk and administrative burden. We support organizations with accurate filings, documentation, and ongoing compliance monitoring.",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_3/service_1.png",
  },
  {
    tag: "ACCOUNTING",
    title: "Accounting & Bookkeeping Services",
    desc: "Accurate financial records are critical for informed decision-making and sustainable growth. Our Accounting & Bookkeeping Services provide clarity, transparency, and control over your financial operations. We act as a reliable financial support partner, helping businesses maintain organized records and consistent reporting.",
    image: "https://html.tf.dreamitsolution.net/consalt/assets/images/home_3/service_1.png",
  },
];

const ServicesSlider = () => {
  return (
    <Box className="services-section container">
      <Typography className="small-title">OUR OUTSOURCING SERVICES</Typography>
      <Typography className="title">
        Dedicated Support Designed to Help Your Business Grow Confidently
      </Typography>
      <Typography className="description">
        We provide specialized outsourcing solutions designed to support business efficiency, reduce
operational complexity, and enable long-term growth. Our experienced teams work as an
extension of your organization, delivering accuracy, reliability, and measurable results.
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
