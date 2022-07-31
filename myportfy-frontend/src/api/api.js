import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ?? "http://localhost:8080",
  headers: {'Authorization': `Bearer ${localStorage.getItem("my-portfy:_section")}`}
});