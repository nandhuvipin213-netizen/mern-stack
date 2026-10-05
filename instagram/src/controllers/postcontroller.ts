import { Express } from "express";
import post from "../module/post";
import { JwtPayload } from "jsonwebtoken";

export const createpost= async(req:JwtPayload,res:Response):Promise<void>=>{
    const {image,caption}=req.body;

    if(!image){
        res.status(400).json({
            message:"image URL is required"
        })
        return
    }

    const Post=await post.create({
        user:req.userId,
        image,
        caption
    });
    res.status(202).json(Post)
}


export const getpost=async(req:JwtPayload,res:Response):Promise<void>=>{
    const posts=await post.find()
    .populate("user","username profilepicture")
    .sort({createdAt:-1})
    res.json(posts)
}