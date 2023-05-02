import React, { useState } from "react";
import "./Navbar.scss";
import profilepic from "../../Images/Profilepic.png";
import "animate.css";
import { Button, Menu, MenuItem } from "@mui/material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Navbar">
      <div className="left">
        <span>R</span>etainance
      </div>
      <div className="middle">
        <ul>
          <li className="home">Home</li>
          <li>Info</li>
          <li>Features</li>
          <li>Blogs</li>
          <li>Benefits</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="resNav"
        >
          Home
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Info</MenuItem>
          <MenuItem onClick={handleClose}>Features</MenuItem>
          <MenuItem onClick={handleClose}>Blogs</MenuItem>
          <MenuItem onClick={handleClose}>Benefits</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Menu>
      </div>
      <div className="right">
        <img src={profilepic} alt="Profile pic" />
      </div>
    </div>
  );
};

export default Navbar;
