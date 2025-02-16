import { CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import CreateTrip from "./Pages/CreateTrip/CreateTrip";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { RootState } from "./redux/store";
import { darkTheme, lightTheme } from "./theme";

const App: React.FC = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);

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
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
