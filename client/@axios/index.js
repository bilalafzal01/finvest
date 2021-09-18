import axios from "axios";

const headers = {
  "Content-Type": "application/json"
};

const axiosInstance = axios.create({
  baseURL: `http://localhost:5000`,
  headers
});

export default axiosInstance;
