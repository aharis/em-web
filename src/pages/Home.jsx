import React, { useState, useEffect } from "react";
import apiService from "../common/api";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

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
    getUsers();
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
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Admin</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total: {}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Employee</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total: {}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Salary</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total: {}</h5>
          </div>
        </div>
      </div>
      <div className="p-3 mx-auto my-5 w-75">
        <h5 className="text-center">Admins List</h5>
        <table className="table border shadow-sm">
          <thead>
            <tr>
              <th className="w-20 border">Frst Name</th>
              <th className="w-20 border">Last Name</th>
              <th className="w-20 border">Email</th>
              <th className="w-20 border">Role</th>
              <th className="w-20 border">Actions</th>
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
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => console.log("edit")}
                    >
                      edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleClickDelete(element.userId)}
                    >
                      delete
                    </button>
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
