import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../common/api";
import CustomButton from "../components/button/CustomButton";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [errorValidation, setErrorValidation] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    image: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (data.firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
    } else if (!/^[A-Za-zćđčš\s]+$/.test(data.firstName)) {
      newErrors.firstName = "First Name should contain only letters and spaces";
    }

    if (data.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
    } else if (!/^[A-Za-zćđčš\s]+$/.test(data.lastName)) {
      newErrors.lastName = "Last Name should contain only letters and spaces";
    }

    if (data.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(data.email)
    ) {
      newErrors.email = "Email should be in a valid format";
    }

    if (data.password.trim() === "") {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (data.confirmPassword.trim() === "") {
      newErrors.confirmPassword = "ConfirmPassword is required";
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword =
        "Oops! It looks like the passwords don't match. Please make sure both passwords are the same.";
    }

    if (data.address.trim() === "") {
      newErrors.address = "Address is required";
    }

    if (data.image === "") {
      newErrors.image = "Image is required";
    }

    setErrorValidation(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (validateForm()) {
        const formData = new FormData();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("email", data.email);
        formData.append("password", data?.password);
        formData.append("address", data.address);
        formData.append("image", data.image);

        const dataResult = await apiService.addEmployee(formData);
        if (dataResult.status === 201) {
          navigate("/employees");
        }
        setError("");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div
      className="d-flex justify-contet-center col-12"
      onClick={() => setError("")}
    >
      <div className="py-5 px-3 w-50 m-auto">
        <h4 className="text-center">Add Employee</h4>
        <form className="row g-2" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputFirstName1" className="form-label">
              First name
            </label>
            <input
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
              type="text"
              className="form-control"
              value={data.firstName}
              id="inputFirstName1"
              placeholder="First Name"
            />
            {errorValidation.firstName && (
              <small className="text-danger">{errorValidation.firstName}</small>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="inputLastName1" className="form-label">
              Last name
            </label>
            <input
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
              type="text"
              className="form-control"
              value={data.lastName}
              id="inputLastName1"
              placeholder="Last Name"
            />
            {errorValidation.lastName && (
              <small className="text-danger">{errorValidation.lastName}</small>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              className="form-control"
              value={data.email}
              id="inputEmail1"
              placeholder="Enter Email"
            />
            {errorValidation.email && (
              <small className="text-danger">{errorValidation.email}</small>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setData({ ...data, password: e.target.value })}
              type="password"
              className="form-control"
              value={data.password}
              id="inputPassword1"
              placeholder="Enter Password"
            />
            {errorValidation.password && (
              <small className="text-danger">{errorValidation.password}</small>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword2" className="form-label">
              Confirm Password
            </label>
            <input
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
              type="password"
              className="form-control"
              value={data.confirmPassword}
              id="inputPassword2"
              placeholder="Confirm Password"
            />
            {errorValidation.confirmPassword && (
              <small className="text-danger">
                {errorValidation.confirmPassword}
              </small>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              onChange={(e) => setData({ ...data, address: e.target.value })}
              type="text"
              className="form-control"
              value={data.address}
              id="inputAddress"
              placeholder="Address123"
            />
            {errorValidation.address && (
              <small className="text-danger">{errorValidation.address}</small>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="inputGroupFile04" className="form-label">
              Select image
            </label>
            <input
              onChange={(e) => setData({ ...data, image: e.target.files[0] })}
              type="file"
              className="form-control"
              id="inputGroupFile04"
              placeholder="Select Image"
            />
            {errorValidation.image && (
              <small className="text-danger">{errorValidation.image}</small>
            )}
          </div>
          <div className="text-danger small">{error && <p>{error}</p>}</div>
          <div className="d-flex justify-content-end">
            <CustomButton
              className="btn btn-light w-25 mx-1"
              onClick={() => navigate(-1)}
            >
              Cancel
            </CustomButton>
            <CustomButton type="submit" className="btn btn-primary w-25 mx-1">
              Submit
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
