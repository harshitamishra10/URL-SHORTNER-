// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { loginApiCall } from "../api/user-api";
// import { loginSchema } from "../validation/Login-schema";

// export const useLogin = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(loginSchema),
//     defaultValues:{
//       email : 'sample@example.com';
//       password: ''
//     }
//   });

//   const doSubmit = async (data) => {
//     console.log('🚀 Login Form submit', data);
//     try {
//       const result = await loginApiCall(data);
//       console.log("✅ Registration successful:", result);
      
//       if (result.id || result.message) {
//         alert("Registration Successful! ✅");
//       } else {
//         alert("Registration completed but no confirmation received");
//       }
//     } catch (err) {
//       console.error("❌ Registration Error:", err);
      
//       // Show more specific error message
//       if (err.response) {
//         alert(`Registration failed: ${err.response.data.error || err.response.statusText}`);
//       } else if (err.request) {
//         alert("Cannot reach server. Make sure backend is running on http://localhost:1234");
//       } else {
//         alert("Registration failed: " + err.message);
//       }
//     }
//   };

//   return {
//     register,
//     handleSubmit,
//     doSubmit,
//     errors,
//   };
// };

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { loginApiCall} from '../api/user-api';
import { loginSchema } from '../validation/login-schema';

export const useLogin = ()=>{
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues:{
            email:'sample@example.com',
            password:''

        }
    });

    const doSubmit = async (formData)=>{
        console.log('Login Form Submit ', formData);
        try{
            const response = await loginApiCall(formData);
            console.log('response is ' , response);
            if(response.data.id){
                alert("Login SuccessFully");
            }
            else{
                alert("Login Fails ... ");
            }
        }
        catch(err){
            alert("Login Fails ... ");
            console.log('Error ', err);
        }
    }

    return {doSubmit, register, handleSubmit, errors};
}
