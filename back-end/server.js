import express from 'express';
import { userRoutes } from './src/api/v1/routes/user-routes.js';
import { error404 } from './src/Utils/middleware/404.js';
import { connectToDB } from './src/Utils/db/connection.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', userRoutes);
app.use(error404);

const PORT = process.env.PORT || 1234;

// Start server first, then connect to DB
const server = app.listen(PORT, (err) => {
  if (err) {
    console.log('Server crash:', err);
  } else {
    console.log('✅ Server up and running on port', server.address().port);
    console.log('🔗 Server URL: http://localhost:' + server.address().port);
  }
});

// Connect to DB after server starts
console.log('🔌 Attempting to connect to MongoDB...');
console.log('📍 DB URL configured:', process.env.DB_URL ? 'Yes' : 'No (CHECK .env FILE!)');

connectToDB()
  .then(() => {
    console.log('✅ DB Connection created successfully!');
  })
  .catch((err) => {
    console.log('❌ DB Connection failed:', err.message);
    console.log('\n⚠️  Server is running but database is not connected.');
    console.log('Please check:');
    console.log('1. Your internet connection');
    console.log('2. MongoDB Atlas cluster is running');
    console.log('3. Your IP address is whitelisted in MongoDB Atlas');
    console.log('4. Database credentials are correct in .env file');
    console.log('\n💡 See FIX_DATABASE_NOW.md for step-by-step instructions\n');
  });

