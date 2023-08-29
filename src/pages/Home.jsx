import React from "react";

const Home = () => {
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
      <div className="p-3 mx-5 my-5 w-75">
        <h5 className="text-center">List of Admins</h5>
        <table className="table border shadow-sm">
          <thead>
            <th className="w-20">Frst Name</th>
            <th className="w-20">Last Name</th>
            <th className="w-20">Email</th>
            <th className="w-20">Role</th>
            <th className="w-20">Actions</th>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
