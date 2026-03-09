import { UserModel } from "../models/user-schema.js"

// User Service - CRUD
export const registerUser = async (userObject)=>{
    try {
        console.log("💾 Attempting to save user to database:", userObject.email);
        const doc = await UserModel.create(userObject);
        console.log("✅ User saved successfully with ID:", doc._id);
        return doc;
    } catch(err) {
        console.error("❌ Database error:", err.message);
        if (err.code === 11000) {
            throw new Error("Email already exists");
        }
        throw err;
    }
}