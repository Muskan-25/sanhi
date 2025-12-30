import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/header.scss";

const navItems = ["Home", "About", "Service", "Contact"];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        className={`header ${scrolled ? "scrolled" : ""}`}
      >
        <Toolbar className={`toolbar container`}>
          <Typography className="logo">✳ Consult</Typography>

          <Box className="nav-links">
            {navItems.map((item) => (
              <Button key={item} className="nav-btn">
                {item}
              </Button>
            ))}
          </Box>

          <Button className="quote-btn">Get A Quote →</Button>

          <IconButton
            className="menu-icon"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box className="drawer">
          <Typography className="drawer-logo">✳ Consult</Typography>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
