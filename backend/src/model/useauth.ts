import mongoose from "mongoose"
import { strict } from "node:assert"


const userschema=new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    confirmpassword:{type:String}
})

const user=mongoose.model("user",userschema)

export default user
 
