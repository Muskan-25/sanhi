import React, { useState } from "react";
import { Box, Typography, Button, TextField, CircularProgress } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import "../../styles/contact.scss";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
  open: false,
  message: "",
  severity: "success", // success | error | warning | info
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);
    const response = await axios.post(
      "http://localhost:5000/api/contact",
      formData
    );

setSnackbar({
      open: true,
      message: "Your message has been sent successfully!",
      severity: "success",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    setSnackbar({
      open: true,
      message: "Something went wrong. Please try again.",
      severity: "error",
    });

  }finally{
    setLoading(false);
  }
};


  return (
    <Box className="contact-section">
      {loading && <Box className="loading"><CircularProgress/></Box> }
      <Box className="contact-wrapper container">
        {/* LEFT CONTENT */}
        <Box className="contact-info">
          <Typography className="small-title">GET IN TOUCH</Typography>

          <Typography className="title">
            Let’s Build Success Together with StriveEdge
          </Typography>

          <Typography className="description">
            We’d love to hear from you. Whether you’re looking to outsource a specific function, explore a partnership, or simply have a question about our services, our team is here to help.
          </Typography>

          <Typography className="description">
Reach out to us today and let’s discuss how StriveEdge can support your business goals with
reliable and scalable outsourcing solutions.
          </Typography>

          <Box className="info-card">
            <Box className="info-row">
              <Box className="icon-circle">
                <PhoneIcon />
              </Box>
              <Box>
                <Typography className="label">Call us Anytime</Typography>
                <Link to='tel:+918283003828' className="value">+91 82830-03828</Link>
              </Box>
            </Box>

            <Box className="divider" />

            <Box className="info-row">
              <Box className="icon-circle">
                <EmailIcon />
              </Box>
              <Box>
                <Typography className="label">Email Address</Typography>
                <Link to='mailto:info@striveedge.in' className="value">info@striveedge.in</Link>
              </Box>
            </Box>

            <Box className="divider" />

            <Box className="info-row">
              <Box className="icon-circle">
                <LocationOnIcon />
              </Box>
              <Box>
                <Typography className="label">Our Location</Typography>
                <Link className="value" to='https://maps.app.goo.gl/8WxTWM2m25hWW9ZV8' target="_blank">Gurgaon, India</Link>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* RIGHT FORM */}
        <Box className="contact-form">
          <Typography className="small-title">CONTACT US</Typography>
          <Typography className="title">Get In Touch with StriveEdge</Typography>
          <span className="underline" />

          {/* 🔥 FORM */}
          <Box
            component="form"
            className="form-fields"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Your Name"
              name="name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
              size="small"
            />

            <TextField
              label="Phone Number"
              name="phone"
              variant="outlined"
              fullWidth
              value={formData.phone}
              size="small"
              onChange={handleChange}
            />

            <TextField
              label="Email Address"
              name="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
              size="small"
            />

            <TextField
              label="Subject"
              name="subject"
              variant="outlined"
              fullWidth
              value={formData.subject}
              onChange={handleChange}
              size="small"
            />

            <TextField
              label="Write Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={formData.message}
              onChange={handleChange}
              required
              size="small"
            />
            <Box className="submitBtn">
            <Button
              type="submit"
              className="btn_primary"
              startIcon={<ThumbUpIcon />}
              disabled={loading}
            >
              {loading ? "Sending..." : "Request Call Back"}
            </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      

<Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
        // action={action}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />

    </Box>
  );
};

export default ContactSection;
