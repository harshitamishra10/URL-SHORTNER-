// import axios from "axios";

// export const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:1234",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

import axios from "axios";


const apiClient = axios.create({
  baseURL: "http://localhost:1234",
});

export default apiClient;