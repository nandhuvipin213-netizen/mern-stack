import mongoose,{Schema} from "mongoose";

export type iuser=Document&{
    username:string,
    email:string,
    password:string,
    bio?:string,
    profilepicture?:string,
    followers:mongoose.Types.ObjectId[]
    following:mongoose.Types.ObjectId[]
}

const userSchema=new Schema<iuser>({
    username:{type:String,required:true,unique:true,trim:true},
    email:{type:String,required:true,unique:true,trim:true},
    password:{type:String,required:true},
    bio:{type:String,default:""},
    profilepicture:{type:String,default:""},
    followers:[{type:Schema.Types.ObjectId,ref:"user"}],
    following:[{type:Schema.Types.ObjectId,ref:"user"}]
},{timestamps:true})

export default mongoose.model<iuser>("user",userSchema)