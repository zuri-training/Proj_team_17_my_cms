import { Routes, Route, } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login"
import ContactUs from "./pages/ContactUs";
import DashBoard from "./pages/DashBoard";
import Error from "./pages/Error";


function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="dashboard" element={<DashBoard/>} />
        <Route path="error" element={<Error/>} />
      </Routes>
  );
}

export default App;
