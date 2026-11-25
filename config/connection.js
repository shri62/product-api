// Import mongoose so we can talk to MongoDB
const mongoose = require('mongoose');

// Function that connects to the database
const connectDB = async () => {
  try {
    // Connect using the connection string from .env
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // Success message
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Error message, then stop the app
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

// Export so server.js can use it
module.exports = connectDB;
