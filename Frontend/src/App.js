// import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import LandingPage from "./pages/LandingPage";
import ForgotPassword from "./pages/ForgotPassword";

import { Routes, Route, } from "react-router-dom";


function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
  );
}

export default App;
