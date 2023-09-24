import React, { useState, useEffect } from "react";
import apiService from "../common/api";
import CustomButton from "../components/button/CustomButton";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [adminCount, setAdminCount] = useState([]);
  const [employeeCount, setEmployeeCount] = useState([]);
  const [allSalary, setAllSalary] = useState(0);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await apiService.getUsers();
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
          setError("An unexpected error occurred while getting users.");
        }
      }
    };

    const employeeCount = async () => {
      try {
        const { data } = await apiService.employeeCount();
        const dataResult = data.result;
        setEmployeeCount(dataResult);
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError("An unexpected error occurred while deleting the user.");
        }
      }
    };

    const userCount = async () => {
      try {
        const { data } = await apiService.adminCount();
        setAdminCount(data);
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError("An unexpected error occurred while deleting the user.");
        }
      }
    };

    const getAllSalary = async () => {
      try {
        const { data } = await apiService.getAllSalary();
        const dataResult = data.result;
        setAllSalary(dataResult);
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError("An unexpected error occurred while deleting the user.");
        }
      }
    };
    getUsers();
    userCount();
    employeeCount();
    getAllSalary();
  }, []);

  const handleClickDelete = async (userId) => {
    try {
      await apiService.deleteUser(userId);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred while deleting the user.");
      }
    }
  };

  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3 ">
        <div className="px-3 pt-2 pb-3 border shadow-sm info-box">
          <div className="text-center pb-1">
            <h4>Superadmin</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total: {adminCount?.superadmin}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm info-box">
          <div className="text-center pb-1">
            <h4>Admin</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total: {adminCount?.admin}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm info-box">
          <div className="text-center pb-1">
            <h4>Employee</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total: {employeeCount[0]?.employee}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm info-box">
          <div className="text-center pb-1">
            <h4>Salary</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total: {allSalary}</h5>
          </div>
        </div>
      </div>
      <div className="p-3 mx-auto my-5 w-75">
        <h5 className="text-center">Admins List</h5>
        <table className="table border shadow-sm">
          <thead>
            <tr>
              <th className="border">Frst Name</th>
              <th className="border">Last Name</th>
              <th className="border">Email</th>
              <th className="border">Role</th>
              <th className="border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.firstName}</td>
                  <td>{element.lastName}</td>
                  <td>{element.email}</td>
                  <td>{element.roles}</td>
                  <td>
                    <CustomButton
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => console.log("edit")}
                    >
                      edit
                    </CustomButton>
                    <CustomButton
                      className="btn btn-danger btn-sm"
                      onClick={() => handleClickDelete(element.userId)}
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
    </div>
  );
};

export default Home;
