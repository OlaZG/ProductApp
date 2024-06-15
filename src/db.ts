import mongoose from 'mongoose';
require('dotenv').config();


const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://test-user:VKdnk7CRB2jd8rHv@cluster0.fc50jdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

export default connectDB;