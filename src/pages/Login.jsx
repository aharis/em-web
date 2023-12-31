import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../common/api";

import Image from "../assets/employee ms.jpeg";
import CustomButton from "../components/button/CustomButton";
import useAuth from "../hooks/useAuth";

const Login = ({ setIsVisible }) => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [error, setError] = useState("");
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
      color: "#506690",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (values.email.trim() === "" || values.password.trim() === "")
        return setError("Email and password cannot be left blank.");
      const { data } = await apiService.login(values);
      const dataResult = data.result;
      if (dataResult.token && dataResult.user) {
        const data = {
          token: dataResult.token,
          user: dataResult.user,
        };
        for (const key in data) {
          localStorage.setItem(key, JSON.stringify(data[key]));
        }
        setAuth({ user: dataResult.user, token: dataResult.token });
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };

  useEffect(() => {  
  setIsVisible(false);
  }, []);

  return (
    <div className="vh-100" onClick={() => setError("")}>
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
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
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
            {error && (
              <p className="small text-danger mb-2 text-center">{error}</p>
            )}
            <CustomButton
              type="submit"
              className="btn btn-success w-100 rounded-0"
            >
              {" "}
              Log in
            </CustomButton>

            <p className="small text-center mt-1">
              You are agree to our terms and polices
            </p>
            {/* <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Create Account
          </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
