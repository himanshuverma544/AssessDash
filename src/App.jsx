import { HashRouter, Routes, Route } from "react-router-dom";

import { DASHBOARD, ASSESSMENT, MY_LIBRARY, ADMIN, ROUND_STATUS, NO_PAGE } from "./constants";

import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import MyLibrary from "./pages/MyLibrary";
import Admin from "./pages/Admin";
import RoundStatus from "./pages/RoundStatus";
import NoPage from "./pages/NoPage";

import './App.css';


function App() {

  return (
   <HashRouter basename="">
      <Routes>
        <Route path={ASSESSMENT.path} element={<Layout/>}>
          <Route path={DASHBOARD.path} element={<Dashboard/>}/>
          <Route index element={<Assessment/>}/>
          <Route path={MY_LIBRARY.path} element={<MyLibrary/>}/>
          <Route path={ADMIN.path} element={<Admin/>}/>
          <Route path={ROUND_STATUS.path} element={<RoundStatus/>}/>
          <Route path={NO_PAGE.path} element={<NoPage/>}/>
        </Route>
      </Routes>
   </HashRouter>
  );
}

export default App;