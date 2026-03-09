import mongoose from "mongoose";

export function connectToDB(){
  const options = {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  };
  return mongoose.connect(process.env.DB_URL, options);
}




