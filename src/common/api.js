import axios from "axios";

const baseUrl = "http://localhost:3000/api/r1";

const login = (data) => {
  return axios.post(`${baseUrl}/login`, data)   
};

const apiService = {
  login,
};

export default apiService;
