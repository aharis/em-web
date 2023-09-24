import axios from "axios";

const baseUrl = "http://localhost:3000/api/r1";

const login = (data) => {
  return axios.post(`${baseUrl}/login`, data);
};

const getUsers = async () => {
  return await axios.get(`${baseUrl}/users`);
};

const getUser = async (userId) => {
  return await axios.get(`${baseUrl}/users/${userId}`);
};

const deleteUser = async (userId) => {
  await axios.delete(`${baseUrl}/users/${userId}`);
};

const addEmployee = async (data) => {
  return await axios.post(`${baseUrl}/employee/create`, data);
};

const getEmployees = async () => {
  return await axios.get(`${baseUrl}/employee`);
};

const deleteEmployee = async (id) => {
  return await axios.delete(`${baseUrl}/employee/${id}`);
};

const getEmployee = (id) => {
  return axios.get(`${baseUrl}/employee/${id}`);
};

const editEmployee = async (id, data) => {
  return await axios.post(`${baseUrl}/employee/${id}`, data);
};

const adminCount = async () => {
  return await axios.get(`${baseUrl}/adminCount`);
};

const employeeCount = async () => {
  return await axios.get(`${baseUrl}/employeeCount`);
};

const getAllSalary = async () => {
  return await axios.get(`${baseUrl}/allSalary`);
};

const apiService = {
  login,
  getUsers,
  addEmployee,
  getEmployees,
  deleteEmployee,
  getEmployee,
  editEmployee,
  deleteUser,
  getUser,
  adminCount,
  employeeCount,
  getAllSalary,
};

export default apiService;
