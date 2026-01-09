import { useEffect, useState } from "react";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import Footer from "./components/layout/Footer";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loader from "./pages/Loader"; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // loader duration (sync with animation)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // 👈 blocks app until animation finishes
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