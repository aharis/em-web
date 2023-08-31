import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService from "../common/api.js";

const Employees = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    const getAllEmployees = async () => {
      try {
        const { data } = await apiService.getEmployees();
        const dataResult = data.result;
        setData(dataResult);
      } catch (error) {
        if(error.response){
          setError(error.response.data.message)
        }
      }
    };
    getAllEmployees();
  }, []);

  return (
    <div className="px-5 py-3">
      <div className="d-flex justify-content-start">
        <h3>Employee List</h3>
      </div>
      <div className="d-flex justify-content-end my-1">
        <Link to="/employees/add" className="d-flex btn btn-success mb-2 ">
          Add employee
        </Link>
      </div>
      <table className="table border">
        <thead className="bg-info">
          <tr>
            <th className="border">First Name</th>
            <th className="border">Last Name</th>
            <th className="border">Email</th>
            <th className="border">Address</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.firstName}</td>
                <td>{element.lastName}</td>
                <td>{element.email}</td>
                <td>{element.address}</td>
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
