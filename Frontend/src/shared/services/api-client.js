// import axios from 'axios';
// export const apiClient = axios.create({
//   BASEURL : import.meta.env.VITE_BASE_URL || "http://localhost:1234",
//   timeout : 10000,
//   headers:{
//     'Content-Type': 'application/json'
//   }
//   })
import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:1234",
  headers: {
    "Content-Type": "application/json",
  },
});
