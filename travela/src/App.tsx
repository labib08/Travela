import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import CreateTrip from "./Pages/CreateTrip/CreateTrip";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ViewTrip from "./Pages/ViewTrip/ViewTrip";
import { RootState } from "./redux/store";
import { setTheme } from "./redux/themeSlice";
import { darkTheme, lightTheme } from "./theme";

const App: React.FC = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <ToastContainer />
      <CssBaseline />
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Header/>} />
      <Route path="/create-trip" element={<CreateTrip/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path = "/view-trip" element = {<ViewTrip/>} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
