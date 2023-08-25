import React, { useState } from "react";

import apiService from "../common/api";

import Image from "../assets/employee ms.jpeg";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const styles = {
    loginPage: {
      background: `url(${Image}) !important`,
      background: `
            linear-gradient(
                rgba(11, 11, 11, 0.5),
                rgba(10, 10, 10, 0.5)
            ),
            url(${Image})
        `,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat !important",
      backgroundSize: "100% 120%",
      marginTop: "10%",
    },
    loginForm: {
      backgroundColor: "rgba(1, 32, 93, 0.6)",
      color: "white",
    },
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      apiService.login(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-50"
      style={styles.loginPage}
    >
      <div
        className="bg-white p-3 rounded w-25 border"
        style={styles.loginForm}
      >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="email"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            {" "}
            Log in
          </button>
          <p>You are agree to our terms and polices</p>
          {/* <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Create Account
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
