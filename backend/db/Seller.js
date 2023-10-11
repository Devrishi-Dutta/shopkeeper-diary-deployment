import mongoose from 'mongoose';

const sellerSchema= new mongoose.Schema({
    name:String,
    contact:String,
    paymentDue:String,
    userId:String,
    company:String
});

export default mongoose.model("sellers",sellerSchema);
