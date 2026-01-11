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
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

const navItems = [
    {id:1, name:'Home', to:'/'},
    {id:2, name:'About', to:'../about'},
    {id:3, name:'Service', to:'../services'},
    {id:4, name:'Contact', to:'../contact'},
];

const Header = ({home}) => {
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
        className={`${home ? 'header home' : 'header'} ${scrolled ? "scrolled" : ""}`}
      >
        <Toolbar className={`toolbar container`}>
          <Link to="../"> <Box className="logo" component="img" src={logo} alt="logo"/></Link>

          <Box className="nav-links">
            {navItems.map((item) => (
              <Link key={item?.id} className="nav-btn" to={item?.to}>
                {item?.name}
              </Link>
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
              <ListItem button key={item?.id}>
                <Box>
                    <Link to={item?.to}>{item.name}</Link>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;