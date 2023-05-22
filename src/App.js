// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Demo from "./Component/UserMenagement";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  const [admin, setAdmin] = useState("");

  const [dataRoleUserDetail, setDataRoleUserDetail] = useState([]);
  const [menu, setMenu] = useState({});

  const handleDataFromChild = (data) => {
    setAdmin(data);
  };
  const handleRoleDetail = (data) => {
    setDataRoleUserDetail(data);
  };
  const handleMenu = (data) => {
    setMenu(data);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              onDataFromChild={handleDataFromChild}
              dataMenu={handleMenu}
              dataMenuLevel={handleRoleDetail}
            />
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard listmenu={menu} levelmenu={dataRoleUserDetail} />}
        />
        <Route path="/User" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;
