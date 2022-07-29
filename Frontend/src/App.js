// import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import LandingPage from "./pages/LandingPage";
import { Routes, Route, } from "react-router-dom";


function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
  );
}

export default App;
