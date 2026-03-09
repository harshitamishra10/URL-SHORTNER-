# Project Setup Guide

## Issues Fixed ✅

1. **Frontend Import Paths** - Fixed incorrect import paths in `register-hook.js`:
   - Changed `../schemas/register-schema` → `../validation/Register-schema`
   - Changed `../services/user-api` → `../api/user-api`

2. **API Client** - Added fallback URL in case environment variable is missing

3. **404 Middleware** - Fixed missing closing HTML tag and added proper status code

4. **Backend Scripts** - Added start and dev scripts to package.json

5. **Server Startup** - Server now starts even if database connection fails

6. **Database Connection** - Added timeout settings and better error handling

## MongoDB Connection Issue ⚠️

If you see `ECONNREFUSED` error, check **MONGODB_FIX.md** for detailed solutions.

**Quick Fix:** Whitelist your IP address in MongoDB Atlas:
1. Go to MongoDB Atlas → Network Access
2. Add your current IP address or use 0.0.0.0/0 for development
3. Wait 1-2 minutes and restart the server

## How to Run

### Backend
```bash
cd back-end
npm install
npm run dev
```
The server will start on `http://localhost:1234`

✅ Server will now start even if MongoDB is not connected!

### Frontend
```bash
cd Frontend
npm install
npm run dev
```
The frontend will start on `http://localhost:5173` (or another port if 5173 is busy)

## Testing the Registration

1. Start both backend and frontend servers
2. Navigate to the Register page in your browser
3. Fill in the form with:
   - Email (valid format)
   - Password (minimum 8 characters)
   - Name (minimum 2 characters)
4. Click Register button
5. Check the console for success/error messages

## Environment Variables

- **Frontend**: `.env` has `VITE_BASE_URL=http://localhost:1234`
- **Backend**: `.env` has your MongoDB connection string

Both are already configured and ready to use.

## Common Issues

### Backend won't connect to MongoDB
See **MONGODB_FIX.md** for detailed troubleshooting steps.

### Frontend can't reach backend
- Make sure backend is running on port 1234
- Check that CORS is enabled (already configured)
- Verify `VITE_BASE_URL` in Frontend/.env

### Registration form doesn't submit
- Open browser console (F12) to see error messages
- Check that both servers are running
- Verify network tab shows the POST request to /register
