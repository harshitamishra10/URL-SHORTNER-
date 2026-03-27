import express from 'express';
import { userRoutes } from './src/api/v1/routes/user-routes.js';
import shortRoute from './src/api/v1/routes/url-short-routes.js';
import { error404 } from './src/Utils/middleware/404.js';
import { connectToDB } from './src/Utils/db/connection.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', userRoutes);
app.use('/short', shortRoute);

app.use(error404);

const PORT = process.env.PORT || 1234;

const server = app.listen(PORT, (err) => {
  if (err) {
    console.log('Server crash:', err);
  } else {
    console.log('✅ Server up and running on port', server.address().port);
    console.log('🔗 Server URL: http://localhost:' + server.address().port);
  }
});

connectToDB()
  .then(() => {
    console.log('✅ DB Connection created successfully!');
  })
  .catch((err) => {
    console.log('❌ DB Connection failed:', err.message);
  });