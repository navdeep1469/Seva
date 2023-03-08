import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginAndSignup/LoginPage";
import SignUp from "./Components/LoginAndSignup/SignUpPage";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
