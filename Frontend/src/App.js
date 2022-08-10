import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import DashBoard from "./pages/DashBoard";

import Template1 from "./Templates/Template";
import AboutUs from "./pages/AboutUs";
import FeedBackPage from "./pages/FeedBackPage";
import Error from "./pages/Error";
import { useSelector } from 'react-redux'


function App() {
  const { access_token } = useSelector(state=> state.auth)
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="login" element={!access_token ? <Login /> : <Navigate to='/dashboard' />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="dashboard" element={access_token ? <DashBoard/> : <Navigate to='/login' />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/feedback-hub" element={<FeedBackPage />} />
        
        <Route path="/template1" element={<Template1 />} />
        
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
