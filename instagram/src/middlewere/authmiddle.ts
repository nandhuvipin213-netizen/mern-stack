import { Express, NextFunction } from "express";
import jwt from "jsonwebtoken"

interface jwtpayload{
    userId:String
}

export const authmiddleware=(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try{
        const authHeader=req.headers.authorization;
        if(!authHeader){
            return res.status(202).json({
                message:"authorization header missing"
            })
        }
        const token=authHeader.split(" ")[1];
        if(!token){
            return res.status(404).json({
                message:"token is missing"
            })
        }
        const decoded=jwt.verify(
            token,process.env.JWT_SECRETE as string
        )as jwtpayload

        req.userId=decoded.userId;
        next()
    }catch(error){
        return req.status(201).json({
            message:"expired token"
        })
    }
}