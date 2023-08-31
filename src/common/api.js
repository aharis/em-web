import axios from "axios";

const baseUrl = "http://localhost:3000/api/r1";

const login = (data) => {
  return axios.post(`${baseUrl}/login`, data);
};

const addEmployee = async (data) => {
  return await axios.post(`${baseUrl}/employee/create`, data);
};

const getEmployees = async () => {
 return await axios.get(`${baseUrl}/employee`);
};
const apiService = {
  login,
  addEmployee,
  getEmployees,
};

export default apiService;
