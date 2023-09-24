import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/button/CustomButton.jsx";
import apiService from "../common/api.js";

const Employees = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [updateDataState, setUpdateDataState] = useState(false);

  useEffect(() => {
    const getAllEmployees = async () => {
      try {
        const { data } = await apiService.getEmployees();
        const dataResult = data.result;
        setData(dataResult);
        if (dataResult.length === 0) {
          setError(data.message);
        }
      } catch (error) {
        if (error.response) {
          setError(error.response.data.message);
        }
      }
    };
    getAllEmployees();
  }, [updateDataState]);

  const handleClickDelete = async (id) => {
    try {
      const dataResult = await apiService.deleteEmployee(id);
      if (dataResult.status === 200) {
        setMessage(dataResult.data.message);
        setUpdateDataState(!updateDataState);
        setTimeout(() => {
          setMessage("");
        }, 1500);
      }
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

  return (
    <div className="px-5 py-3">
      <div className="d-flex justify-content-end bg-light text-info">
        {message && (
          <p className="w-20 border border-success px-2 border-opacity-25 rounded">
            {message}
          </p>
        )}
      </div>
      <div className="d-flex justify-content-start">
        <h3>Employee List</h3>
      </div>
      <div className="d-flex justify-content-end my-1">
        <CustomButton
          onClick={() => navigate("/employees/add")}
          className="d-flex btn btn-success mb-2 "
        >
          Add employee
        </CustomButton>
      </div>
      <table className="table border">
        <thead>
          <tr>
            <th className="border">Image</th>
            <th className="border">First Name</th>
            <th className="border">Last Name</th>
            <th className="border">Email</th>
            <th className="border">Address</th>
            <th className="border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={`http://localhost:3000/api/images/${element.image}`}
                    alt="Image"
                    className="employee_image"
                  />
                </td>
                <td>{element.firstName}</td>
                <td>{element.lastName}</td>
                <td>{element.email}</td>
                <td>{element.address}</td>
                <td>
                  <CustomButton
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => navigate(`edit/${element.employeeId}`)}
                  >
                    edit
                  </CustomButton>
                  <CustomButton
                    className="btn btn-danger btn-sm"
                    onClick={() => handleClickDelete(element.employeeId)}
                  >
                    delete
                  </CustomButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-danger small">{error && <p>{error}</p>}</div>
    </div>
  );
};

export default Employees;
