// import { UrlModel } from "../models/url-schema.js"

// // User Service - CRUD
// export const addURL = async (urlObject)=>{
//     try {
//         console.log("💾 Attempting to save user to database:", userObject.email);
//         const doc = await UrlModel.create(urlObject);
//         console.log("✅ User saved successfully with ID:", doc._id);
//         return doc;
//     } catch(err) {
//         console.error("❌ Database error:", err.message);
//         if (err.code === 11000) {
//             throw new Error("Email already exists");
//         }
//         throw err;
//     }
// }
import { UrlModel } from "../models/url-schema.js";

export const getsmalltoBig = async(code)=>{

   const doc = await UrlModel.findOne({shortid : code}).exec();
   return doc;
}
export const addURL = async (urlObject)=>{
    try{
        const doc = await UrlModel.create(urlObject);
        return doc;
    }
    catch(err){
        throw err;
    }
}