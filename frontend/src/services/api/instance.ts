import { AuthContext } from "@/context/AuthContext";
import { useAuth } from "@/hooks/useAuth";
import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

const BASE_URL: string = "http://localhost:8000/api";

const baseConfig: CreateAxiosDefaults = {
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const baseInstance: AxiosInstance = axios.create(baseConfig);

export const publicInstance: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/api/public`,
});

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
    const { authToken } = useAuth();

    config.headers["Authorization"] = `Bearer ${authToken}`;

    return config;
  },
  (error) => {
    return error;
  }
);
