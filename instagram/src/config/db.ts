import mongoose from "mongoose"

export const connectDB= async ():Promise <void>=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/instagram")
        console.log("mongoose connected");
        
    }
    catch(err){
        console.log("error");
        
        
    }
}
 
export default connectDB