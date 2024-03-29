import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

import logo from "../assets/logo.jpg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Enroll a student", icon: <HomeIcon /> },
    { text: "Become a tutor", icon: <HomeIcon /> },
    { text: "Partner with us", icon: <HomeIcon /> },
    { text: "About", icon: <HomeIcon /> },
    { text: "Services", icon: <HomeIcon /> },
    { text: "Testimonies", icon: <HomeIcon /> },
    { text: "Contact", icon: <HomeIcon /> },
  ];
  return (
    <>
      <nav>
        <div className="nav-logo-container">
          {/* <h4>Tutorials</h4> */}
          <img src={logo} alt="" />
        </div>
        <div className="navbar-links-container">
          <a href={"/"} className="active">
            Home
          </a>
          <a href={"/student"}>Enroll a student</a>

          <a href={"/tutor"}>Become a tutor</a>
          <a href="">Tutorial Services</a>
          <a href="">Testimonies</a>
          <a href="">Contact</a>
          <a
            className="primary-button"
            href={"/sign-in"}
            style={{ backgroundColor: "#ffb413" }}
          >
            Sign in
          </a>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
    </>
  );
};

export default Header;
