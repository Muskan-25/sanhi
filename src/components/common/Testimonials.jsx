import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import StarRoundedIcon from '@mui/icons-material/StarRounded';

import "swiper/css";

const testimonials = [
  {
    name: "John D. Alexon",
    role: "UX Engineer",
    text: `Conveniently transform error-free architectures by maximizing
    collaboration and idea-sharing. Seamlessly enable team-driven web-readiness
    vis-a-vis extensible applications.`,
    image:
      "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/testi_thumb.png",
    avatar: "/images/avatar1.png",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    text: `Intrinsicly enable optimal collaboration through future-proof
    solutions without compromising scalability and performance.`,
    image:
      "https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/testi_thumb.png",
    avatar: "/images/avatar2.png",
  },
];

const Testimonials = () => {
  return (
    <Box className="testimonials">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <Box className="testimonial-slide">
              <Box className="testimonial_left">
                {/* LEFT IMAGE */}
                <img
                  src={item.image}
                  alt="team"
                  className="testimonial-image"
                />
                {/* RATING BADGE */}
                <Box className="rating-badge">
                  <StarRoundedIcon />
                  <span>Avg Ratings 4.9</span>
                </Box>
              </Box>

              {/* RIGHT CONTENT */}
              <Box className="testimonial-content">
                <FormatQuoteIcon className="quote-icon" />

                <Box className="stars">
                  {[...Array(5)].map((_, i) => (
                    <StarRoundedIcon key={i} />
                  ))}
                </Box>

                <Typography className="testimonial-text">
                  {item.text}
                </Typography>

                <Box className="testimonial-user">
                  <Avatar src={item.avatar} />
                  <Box>
                    <Typography className="name">{item.name}</Typography>
                    <Typography className="role">{item.role}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
