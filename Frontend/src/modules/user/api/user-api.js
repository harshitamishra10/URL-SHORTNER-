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
//import { apiClient } from "../../../shared/services/api-client";
//import apiClient from "../../../shared/services/api-client";




// export const loginApiCall = async (formData) => {
//   try {
//     console.log("📤 Sending registration request to:", apiClient.defaults.baseURL + "/register");
//     console.log("📦 Form data:", formData);
    
//     const response = await apiClient.post("/register", formData);
    
//     console.log("✅ Registration response:", response.data);
//     return response.data;
//   } catch (err) {
//     console.error("❌ Register API Call Failed");
//     console.error("Error details:", err.response?.data || err.message);
//     console.error("Status code:", err.response?.status);
//     console.error("Full error:", err);
//     throw err;
//   }
// };


//import { apiClient } from "../../../shared/services/api-client"
import apiClient from "../../../shared/services/api-client";
export const registerApiCall = async (formData)=>{
    try{
        const response = await apiClient.post('/register', formData);
        return response;
    }
    catch(err){
        console.log('Register Api Call Fail ', err);
        throw err;
    }
}






export const loginApiCall = async (formData) => {
  try {
    const response = await apiClient.post('/login', formData);
    return response;
  } catch (err) {
    console.log('Login Api call Fail', err);
    throw err;
  }
};