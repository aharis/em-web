import axios from "axios";

const baseUrl = "http://localhost:3000/api/r1";

const login = (data) => {
  return axios.post(`${baseUrl}/login`, data);
};

const getUsers = async () => {
  return await axios.get(`${baseUrl}/users`);
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

const apiService = {
  login,
  getUsers,
  addEmployee,
  getEmployees,
  deleteEmployee,
  getEmployee,
  editEmployee,
};

export default apiService;
