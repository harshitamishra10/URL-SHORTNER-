// import {useForm} from 'react-hook-form';
// import {zodResolver} from '@hookform/resolvers/zod';
// import { RegisterSchema } from '../validation/Register-schema';
// import { registerApiCall } from '../api/user-api';


// export const useRegister =()=>{
//   const {register, handleSubmit, formState:{errors}}  = useForm({
//     resolver : zodResolver(RegisterSchema),
//     defaultValues :{
//       email: 'sample@example.com',
//       password : '',
//       name : ''
//     }
//   }
// );
//  const doSubmit = async(formdata)=>{


//   console.log('Registration Form Submit', formdata);
//   try{
//   const response = await registerApiCall(formdata)
//   console.log('response is', response);
//   if(response.data.id){
//     alert ("Register successfully");
//   }
//   else{
//     alert("register fails...");
//   }
// }
// catch
//   (err){
//     alert("Registration fails...");
//     console.log("Error", err);
//   }

//  }

//  return{doSubmit , register, handleSubmit, errors};
//}
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../validation/Register-schema";
import { registerApiCall } from "../api/user-api";

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const doSubmit = async (data) => {
    console.log("🚀 Form submitted with data:", data);
    try {
      const result = await registerApiCall(data);
      console.log("✅ Registration successful:", result);
      
      if (result.id || result.message) {
        alert("Registration Successful! ✅");
      } else {
        alert("Registration completed but no confirmation received");
      }
    } catch (err) {
      console.error("❌ Registration Error:", err);
      
      // Show more specific error message
      if (err.response) {
        alert(`Registration failed: ${err.response.data.error || err.response.statusText}`);
      } else if (err.request) {
        alert("Cannot reach server. Make sure backend is running on http://localhost:1234");
      } else {
        alert("Registration failed: " + err.message);
      }
    }
  };

  return {
    register,
    handleSubmit,
    doSubmit,
    errors,
  };
};
