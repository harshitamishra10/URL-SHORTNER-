// Quick test script to check MongoDB connection
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log('🧪 Testing MongoDB Connection...\n');
console.log('📍 DB_URL:', process.env.DB_URL ? 'Found in .env' : '❌ NOT FOUND in .env');
console.log('🔗 Connecting to:', process.env.DB_URL?.substring(0, 30) + '...\n');

const options = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

mongoose.connect(process.env.DB_URL, options)
  .then(() => {
    console.log('✅ SUCCESS! MongoDB connection works!');
    console.log('✅ You can now use registration in your app\n');
    process.exit(0);
  })
  .catch((err) => {
    console.log('❌ FAILED! Cannot connect to MongoDB\n');
    console.log('Error:', err.message);
    console.log('\n📋 Troubleshooting:');
    
    if (err.message.includes('ECONNREFUSED') || err.message.includes('querySrv')) {
      console.log('  → Your IP is NOT whitelisted in MongoDB Atlas');
      console.log('  → Go to: https://cloud.mongodb.com/');
      console.log('  → Network Access → Add IP Address → Allow Access from Anywhere');
      console.log('  → Wait 2-3 minutes and try again');
    } else if (err.message.includes('authentication failed')) {
      console.log('  → Wrong username or password in .env file');
      console.log('  → Check your MongoDB Atlas credentials');
    } else if (err.message.includes('buffering timed out')) {
      console.log('  → Connection timeout - IP not whitelisted');
      console.log('  → Or MongoDB Atlas cluster is paused');
    } else {
      console.log('  → Unknown error, check your internet connection');
      console.log('  → Or try local MongoDB (see USE_LOCAL_MONGODB.md)');
    }
    
    console.log('\n💡 Quick fix: Use local MongoDB instead');
    console.log('   See USE_LOCAL_MONGODB.md for instructions\n');
    
    process.exit(1);
  });
