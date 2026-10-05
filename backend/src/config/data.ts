import mongoose from "mongoose"

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/")
        console.log("connected successfully")
    }
    catch(error){
        console.log("connection fail")
    }
}
export default connectDB