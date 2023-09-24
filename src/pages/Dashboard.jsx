import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";

const Dashboard = ({ setIsVisible }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  const handleClickLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className="col-auto col-md-3 col-xl-2 px-sm-2 px-0"
          style={{ backgroundColor: "#D3D3D3" }}
        >
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li>
                <Link
                  to="/"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle typohraphy-style"
                >
                  <i className="fs-4 bi-speedometer2 "></i>{" "}
                  <span className="ms-1 d-none d-sm-inline ">Dashboard</span>{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/employees"
                  className="nav-link px-0 align-middle typohraphy-style"
                >
                  <i className="fs-4 bi-people"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    Manage employees
                  </span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/admin-profile"
                  className="nav-link px-0 align-middle typohraphy-style"
                >
                  <i className="fs-4 bi-person"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Admin profile</span>{" "}
                </Link>
              </li>
              <li
                onClick={handleClickLogout}
                className="nav-link px-0 align-middle cursor-pointer typohraphy-style"
              >
                <i className="fs-4 bi-power"></i>
                <span className="ms-1 d-none d-sm-inline">Logout</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-3 px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
