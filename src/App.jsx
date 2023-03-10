import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/LoginAndSignup/LoginPage";
import SignUp from "./Components/LoginAndSignup/SignUpPage";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Servics/Services";
import theme from "./theme";

function App() {
  return (
    <>
      <Router>
        <div
          className='App'
          style={{ backgroundColor: theme.backGroundPrimary }}
        >
          <Navbar />

          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contact />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
