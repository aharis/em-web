import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import AdminProfile from "./pages/AdminProfile";
import EditEmployee from "./pages/EditEmployee";
import Header from "./common/Header";
import EditUser from "./pages/EditUser";

import "./style.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <BrowserRouter>
      {isVisible && <Header />}
      <Routes>
        <Route path="/" element={<Dashboard setIsVisible={setIsVisible} />}>
          <Route index element={<Home />} />
          <Route path="employees" element={<Employees />} />
          <Route path="employees/add" element={<AddEmployee />} />
          <Route path="employees/edit" element={<EditEmployee />} />
          <Route path="/edit" element={<EditUser />} />
          <Route path="admin-profile" element={<AdminProfile />} />
        </Route>
        <Route path="/login" element={<Login setIsVisible={setIsVisible} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
