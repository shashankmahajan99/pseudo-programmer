import axios from "axios";

//create axios to use a basepath

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

export default axiosInstance;
