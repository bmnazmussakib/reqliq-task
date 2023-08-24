import axios from "axios";
// import { getCookie, hasCookie } from "cookies-next";

export const axiosClient = (tokenServer = null) => {
  const defaultOptions = {
    baseURL:
      process.env.NEXT_PUBLIC_API_URL ||
      "https://fakestoreapi.com",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  // instance.interceptors.request.use(function (config) {
  //   const token = hasCookie("token") ? getCookie("token") : tokenServer;
  //   config.headers.Authorization = token ? `Bearer ${token}` : "";
  //   return config;
  // });

  return instance;
};



