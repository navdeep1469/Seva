import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Servics/Services";
import { createTheme, ThemeProvider } from "@mui/material";
import LoginAndSignUp from "./Components/LoginAndSignup/LoginAndSignUp";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7BA9",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App scale-up-center'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/loginOrSignup' element={<LoginAndSignUp />} />
            {/* <Route path='/signUp' element={<LoginAndSignUp />} /> */}
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contact />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
