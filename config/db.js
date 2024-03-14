const mongoose = require('mongoose');

const connectDB = async () => {
  const DB_URI = "<mongodb+srv://admin:admin@cluster0.iahkfrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0>"; // Replace "your-mongodb-uri" with your actual MongoDB URI

  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
