import { Express } from "express";
import user from "../module/user";
import { authmiddleware } from "../middlewere/authmiddle";
import { JwtPayload } from "jsonwebtoken";

export const getprofile=async (req:JwtPayload,res:Response):Promise<void>=>{
    const user=await user.findById(req.params.id).select("-password")
    if(!user){
        res.status(404).json({
            message:"user not found"
        })
    }
    res.json(user)
}