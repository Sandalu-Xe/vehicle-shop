import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("mongo_uri: ",process.env.MONGO_URI)  // The `uri` parameter to `openUri()` must be a string,
    
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message);
    process.exit(1); // 1 is failure, 0 status code is success
  }
};
 