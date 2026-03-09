import {registerUser} from "../services/User-services.js"; 

export const home = (request, response)=>{
    response.send('<h1>URL Shortener Project </h1>');
}

export const login = (request, response)=>{
    response.send('<h1> Login </h1>');
}

export const register = async (request, response)=>{
    console.log("📥 Register endpoint hit");
    console.log("📦 Request body:", request.body);
    
    const userInfo = request.body;
    
    // Validate request body
    if (!userInfo.email || !userInfo.password || !userInfo.name) {
        console.log("❌ Missing required fields");
        return response.status(400).json({
            error: 'Missing required fields',
            required: ['email', 'password', 'name']
        });
    }
    
    try {
        const doc = await registerUser(userInfo);
        console.log("✅ User registered successfully:", doc._id);
        response.status(201).json({
            message: 'Register Successfully', 
            id: doc._id
        });
    } catch(err) {
        console.error("❌ Registration failed:", err.message);
        response.status(500).json({
            error: 'Something Went Wrong During Register', 
            details: err.message
        });
    }
}

