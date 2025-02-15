import { Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/newLogo.png";
import { ColorButton } from "../../Styles/Styles";
import "./Navbar.css";
const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-name">
        <img src={logo} alt="" className="navbar-img" />
        <Typography variant="h3" style={{ fontWeight: 550 }}>
          Travela
        </Typography>
      </div>
      <div>
        <ColorButton variant="contained">Sign In</ColorButton>
      </div>
    </div>
  );
};

export default Navbar;
