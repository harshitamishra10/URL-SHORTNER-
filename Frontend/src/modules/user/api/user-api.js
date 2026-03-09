// import { apiClient } from "../../../shared/services/api-client"

// export const registerApiCall = async(formData)=> {
//   try{
//     const response = await apiClient.post('/register', formData);
//     return response;
//   }
//   catch(err){
//     console.log('Register Api Call Fail', err);
//     throw err;
//   }
  
// }
import { apiClient } from "../../../shared/services/api-client";

export const registerApiCall = async (formData) => {
  try {
    console.log("📤 Sending registration request to:", apiClient.defaults.baseURL + "/register");
    console.log("📦 Form data:", formData);
    
    const response = await apiClient.post("/register", formData);
    
    console.log("✅ Registration response:", response.data);
    return response.data;
  } catch (err) {
    console.error("❌ Register API Call Failed");
    console.error("Error details:", err.response?.data || err.message);
    console.error("Status code:", err.response?.status);
    console.error("Full error:", err);
    throw err;
  }
};
