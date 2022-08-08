import { Routes, Route } from "react-router-dom";
import Posts from "../../pages/dashboardRoutes/Posts";
import Templates from "../../pages/dashboardRoutes/Templates";
import Accounts from "../../pages/dashboardRoutes/Accounts";
import Pages from "../../pages/dashboardRoutes/Pages";
import ViewPage from "../../pages/dashboardRoutes/ViewPage";
import Insights from "../../pages/dashboardRoutes/Insights";
import Settings from "../../pages/dashboardRoutes/Settings";
import DashBoard from "../../pages/DashBoard";


const DashBoardSideBarPages = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/dashboard" element={<DashBoard />} />

      
          <Route path="/templates" element={<Templates />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="pages" element={<Pages />} />
          <Route path="insights" element={<Insights />} />
          <Route path="view-page" element={<ViewPage />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
};

export default DashBoardSideBarPages;
