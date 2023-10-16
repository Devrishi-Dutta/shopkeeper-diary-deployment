import mongoose from 'mongoose';
const connectDB = async () =>{
    const DB_URL = `${process.env.MONGO_URL}`;
  try {
     const conn = await mongoose.connect(DB_URL,{useNewUrlParser: true});
    console.log("database connected successfully");
  } catch (error){
    console.log("error while connecting with database" , error.message);
  }
}
export default connectDB;
