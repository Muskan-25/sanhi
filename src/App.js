import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loader from "./pages/Loader";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";

import Footer from "./components/layout/Footer";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // show loader on every route change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // ⏱ sync with loader animation

    return () => clearTimeout(timer);
  }, [location.pathname]); // 👈 route change detection

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      {/* Scroll Top */}
      <IconButton
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </>
  );
}

export default App;
