// import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import LandingPage from "./pages/LandingPage";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login"

import { Routes, Route, } from "react-router-dom";


function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
  );
}

export default App;
