import { Routes, Route, } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login"
import ContactUs from "./pages/ContactUs";
import DashBoard from "./pages/DashBoard";
import DashBoardSideBarPages from "./components/layout/DashBoardSideBarPages";
import AboutUs from "./pages/AboutUs";
import FeedBackPage from "./pages/FeedBackPage";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/feedback-hub" element={<FeedBackPage/>} />
       
        
      </Routes>
      <DashBoardSideBarPages/>
</>
  ) 
}

export default App;
