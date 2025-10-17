import axios, { type AxiosInstance } from "axios";

export async function getAccessToken() {}

const instance: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  responseType: "json",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const api = {
  getAccessToken,
};
