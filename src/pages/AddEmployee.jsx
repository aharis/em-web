import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../common/api";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (data.password.length < 6) {
        return setError("Password must be at least 6 characters long.");
      }

      if (data.password !== data.confirmPassword) {
        return setError(
          "Oops! It looks like the passwords don't match. Please make sure both passwords are the same."
        );
      }
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("password", data?.password);
      formData.append("address", data.address);
      formData.append("image", data.image);

      const dataResult = await apiService.addEmployee(formData);
      if (dataResult.data.message) {
        navigate("/employees");
      }
      setError("");
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
              id="inputFirstName1"
              placeholder="First Name"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputLastName1" className="form-label">
              Last name
            </label>
            <input
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
              type="text"
              className="form-control"
              id="inputLastName1"
              placeholder="Last Name"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              className="form-control"
              id="inputEmail1"
              placeholder="Enter Email"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setData({ ...data, password: e.target.value })}
              type="password"
              className="form-control"
              id="inputPassword1"
              placeholder="Enter Password"
            />
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
              id="inputPassword2"
              placeholder="Confirm Password"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              onChange={(e) => setData({ ...data, address: e.target.value })}
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Address123"
            />
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
          </div>
          <div className="text-danger small">{error && <p>{error}</p>}</div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
