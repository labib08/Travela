import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/newLogo.png";
import { RootState } from "../../redux/store";
import { toggleTheme } from "../../redux/themeSlice";
import { ColorButton } from "../../Styles/Styles";
import "./Navbar.css";
const Navbar: React.FC = () => {
  const token = localStorage.getItem("token");
  const [isLogin, setIsLogIn] = useState<boolean>(false);

  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

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
      <Button color="inherit" onClick={() => dispatch(toggleTheme())}>
          Switch to {mode === "light" ? "Dark" : "Light"} Mode
        </Button>
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
