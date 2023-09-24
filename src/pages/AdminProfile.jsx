import React, { useEffect, useState } from "react";
import apiService from "../common/api";
import Image from "../assets/images.jpg";

const AdminProfile = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await apiService.getUser(userId);
        const dataResult = data.result;
        setData(dataResult);
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError("An unexpected error occurred while deleting the employee.");
        }
      }
    };
    getUser();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="p-3 rounded w-75 text-center">
        <div className="row">
          <div className="col-md-4">
            {/* Admin Image */}
            <div className="text-center">
              <img src={Image} alt="Admin" className="img-fluid user_image" />
            </div>
            <div className="text-center my-3">
              <p className="my-1">{data[0]?.firstName}</p>
              <p>{data[0]?.lastName}</p>
            </div>
          </div>
          <div className="col-md-8">
            <table className="table border">
              <thead>
                <tr>
                  <th className="border">Admin profile</th>
                </tr>
              </thead>
              {data?.map((user, index) => (
                <tbody key={index} className="text-start">
                  <tr>
                    <td>First Name: {user.firstName}</td>
                  </tr>
                  <tr>
                    <td>Last Name: {user.lastName}</td>
                  </tr>
                  <tr>
                    <td>Email: {user.email}</td>
                  </tr>
                  <tr>
                    <td>Roles: {user.roles}</td>
                  </tr>
                  <tr>
                    <td>Salary: {user.salary} KM</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="text-danger small text-start">
              {error && <p>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
