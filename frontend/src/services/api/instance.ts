import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

const BASE_URL: string = "http://localhost:8000/api/public";

const baseConfig: CreateAxiosDefaults = {
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const baseInstance: AxiosInstance = axios.create(baseConfig);

export const authInstance: AxiosInstance = axios.create(baseConfig);

authInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Brearer ${"TOKEN HERE"}`;

    return config;
  },
  (error) => {
    return error;
  }
);
