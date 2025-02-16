import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/newLogo.png";
import { ColorButton } from "../../Styles/Styles";
import "./Navbar.css";
const Navbar: React.FC = () => {
  const token = localStorage.getItem("token");
  const [isLogin, setIsLogIn] = useState<boolean>(false);

  const logout = (): void => {
    localStorage.clear();
    setIsLogIn(false);
  };

  useEffect(() => {
    if (token) {
      setIsLogIn(true);
    } else {
      setIsLogIn(false);
    }
  }, [token]);
  return (
    <div className="navbar">
      <div className="navbar-name">
        <img src={logo} alt="" className="navbar-img" />
        <Typography variant="h3" style={{ fontWeight: 550 }}>
          Travela
        </Typography>
      </div>
      <div>
        {isLogin ? (
          <ColorButton variant="contained" onClick={logout}>
            Sign Out
          </ColorButton>
        ) : (
          <ColorButton variant="contained">Sign In</ColorButton>
        )}
      </div>
    </div>
  );
};

export default Navbar;
