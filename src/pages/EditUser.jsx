import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CustomButton from "../components/button/CustomButton";

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [errorValidation, setErrorValidation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    console.log("Submit edit form");
  };

  return (
    <div className="d-flex justify-contet-center col-12">
      <div className="py-5 px-3 w-50 m-auto">
        <h4 className="text-center">Edit User</h4>
        <form className="row g-2" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputFirstName1" className="form-label">
              First name
            </label>
            <input
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
              type="text"
              className="form-control"
              value={location.state.firstName}
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
              value={location.state.lastName}
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
              value={location.state.email}
              id="inputEmail1"
              placeholder="Enter Email"
            />
            {errorValidation.email && (
              <small className="text-danger">{errorValidation.email}</small>
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
              value={location.state.address}
              id="inputAddress"
              placeholder="Address123"
            />
            {errorValidation.address && (
              <small className="text-danger">{errorValidation.address}</small>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Role
            </label>
            <input
              onChange={(e) => setData({ ...data, role: e.target.value })}
              type="text"
              className="form-control"
              value={location.state.roles}
              id="inputROle"
              placeholder="Role"
            />
            {errorValidation.role && (
              <small className="text-danger">{errorValidation.role}</small>
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
              // value={location?.state?.image}
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

export default EditUser;
