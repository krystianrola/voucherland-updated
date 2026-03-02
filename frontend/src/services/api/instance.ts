import { useAuthStore } from "@/store/AuthStore";
import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

const BASE_URL = "http://localhost:8000/api";

const baseConfig: CreateAxiosDefaults = {
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const baseInstance: AxiosInstance = axios.create(baseConfig);

// export const publicInstance: AxiosInstance = axios.create({
//   baseURL: `${BASE_URL}/api/public`,
// });

export const authInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

authInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;

    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error),
);
