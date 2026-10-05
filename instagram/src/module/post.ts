import mongoose, { Schema, Types } from "mongoose";

export type ipost=Document&{
    user:mongoose.Types.ObjectId;
    image:string;
    caption?:string;
    likes:mongoose.Types.ObjectId[];
}

const postSchema=new Schema<ipost>({
    user:{type:Schema.Types.ObjectId},
    image:{type:String,required:true},
    caption:{type:String,default:""},
    likes:[{type:Schema.Types.ObjectId,ref:"user"}]
},{timestamps:true})

export default mongoose.model<ipost>("post",postSchema)