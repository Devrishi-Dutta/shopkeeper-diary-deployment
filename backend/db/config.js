import mongoose from 'mongoose';
const connectDB =  () =>{
    const DB_URL = `${process.env.MONGO_URL}`;
  try {
    mongoose.connect(DB_URL,{useNewUrlParser: true});
    console.log("database connected successfully");
  } catch (error){
    console.log("error while connecting with database" , error.message);
  }
}
export default connectDB;
