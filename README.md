# URL Shortener Project

A full-stack URL shortener application with user registration and authentication.

## 🚀 Tech Stack

**Frontend:**
- React + Vite
- Radix UI (Components)
- React Hook Form + Zod (Form validation)
- Axios (API calls)

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- CORS enabled

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (Local or Atlas account)
- npm or yarn

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd URL-Shortern-Project
```

### 2. Install Backend Dependencies
```bash
cd back-end
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../Frontend
npm install
```

### 4. Setup Environment Variables

**Backend (.env):**
```bash
cd back-end
cp .env.example .env
```
Edit `.env` and add your MongoDB connection string.

**Frontend (.env):**
```bash
cd Frontend
cp .env.example .env
```
Edit `.env` if needed (default: http://localhost:1234).

## 🏃 Running the Project

### Start Backend (Terminal 1)
```bash
cd back-end
npm run dev
```
Server runs on: http://localhost:1234

### Start Frontend (Terminal 2)
```bash
cd Frontend
npm run dev
```
App runs on: http://localhost:5173

## 📁 Project Structure

```
URL-Shortern-Project/
├── back-end/
│   ├── src/
│   │   ├── api/v1/routes/     # API routes
│   │   ├── controllers/       # Request handlers
│   │   ├── models/           # MongoDB schemas
│   │   ├── services/         # Business logic
│   │   └── Utils/            # Utilities & middleware
│   ├── server.js             # Entry point
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── modules/user/     # User module
│   │   │   ├── api/         # API calls
│   │   │   ├── hooks/       # Custom hooks
│   │   │   ├── pages/       # React pages
│   │   │   └── validation/  # Form schemas
│   │   ├── shared/          # Shared utilities
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

## 🔧 Available Scripts

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run test-db` - Test MongoDB connection

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🗄️ Database Setup

### Option 1: Local MongoDB
1. Install MongoDB Compass
2. Connect to `mongodb://localhost:27017`
3. Database will be created automatically

### Option 2: MongoDB Atlas
1. Create account at https://cloud.mongodb.com/
2. Create a cluster
3. Whitelist your IP (Network Access)
4. Get connection string
5. Update `.env` with connection string

## 🌟 Features

- ✅ User Registration
- ✅ Form Validation (Zod)
- ✅ MongoDB Integration
- ✅ RESTful API
- ✅ CORS enabled
- ✅ Error handling
- ✅ Responsive UI

## 🔐 Security Notes

- Never commit `.env` files
- Use environment variables for sensitive data
- Whitelist IPs in MongoDB Atlas
- Use strong passwords

## 📝 API Endpoints

### User Routes
- `GET /` - Home endpoint
- `POST /register` - Register new user
- `POST /login` - User login (placeholder)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Harshita Mishra

## 🐛 Known Issues

- Login functionality is placeholder only
- Password is stored in plain text (should be hashed)

## 🚧 Future Enhancements

- [ ] Password hashing (bcrypt)
- [ ] JWT authentication
- [ ] URL shortening functionality
- [ ] User dashboard
- [ ] Analytics
