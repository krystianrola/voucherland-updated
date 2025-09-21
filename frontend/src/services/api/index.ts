import axios, { type AxiosInstance } from "axios";

export async function getAccessToken() {}

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  responseType: "json",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const api = {
  getAccessToken,
};
