require('dotenv').config();
import mongoose from 'mongoose';

//const dbUrl = process.env.DB_URL
//${dbUrl}
//

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/productApp`);
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

export default connectDB;