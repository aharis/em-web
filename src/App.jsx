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
import Redirect from "./components/auth/Redirect.jsx"
import CheckIfLoged from "./components/auth/CheckIfLoged";
import ProtectedRoute from "./components/auth/ProtecterdRoute.";
import "./style.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <BrowserRouter>
      {isVisible && <Header />}
      <ProtectedRoute />
      <Routes>
			<Route path="/" element={<Redirect />} />
      <Route element={<CheckIfLoged />}>
      <Route path="/login" element={<Login setIsVisible={setIsVisible} />} />
			</Route>
        <Route path="dashboard" element={<Dashboard setIsVisible={setIsVisible} />}>
          <Route index element={<Home />} />
          <Route path="/dashboard/employees" element={<Employees />} />
          <Route path="/dashboard/employees/add" element={<AddEmployee />} />
          <Route path="/dashboard/employees/edit" element={<EditEmployee />} />
          <Route path="/dashboard/edit" element={<EditUser />} />
          <Route path="/dashboard/admin-profile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
