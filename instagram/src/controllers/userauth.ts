import express, { Request, Response } from "express";
import bcrypt from "bcrypt"
import user from "../module/user.js"
import { generateToken } from "../utils/tokengenerate.js"

export const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(202).json({ message: "fill all data" })
        }
        const existing = await user.findOne({email})

        if (existing) {
            return res.status(202).json({ message: "user already existing" })
        }
        const hashedpassword = await bcrypt.hash(password, 10)
        const instagramuser =await user.create({ username, email, password: hashedpassword })
        res.status(202).json({
            message: "user registered",
            token: generateToken(instagramuser.id),
            user: {
                id: instagramuser.id,
                username: instagramuser.username,
                email: instagramuser.email,

            }
        })

    }
    catch(err){
        console.error("REGISTER ERROR",err)
        return res.status(202).json({
            message:"register failed",
            error: err instanceof Error ? err.message:err

        })
    }
    
}

export const login= async(req:Request,res:Response)=>{
    try{
        const{email,password}=req.body
        const newuser=await user.findOne({email})
        if(!newuser){
          return res.json({message:"invalid email"})
        }
        const match=await bcrypt.compare(password,newuser.password)
        if(!match){
          return  res.json({message:"incorrect password"})
        }
        res.status(202).json({
            message:"login successfull",
            token:generateToken(newuser.id),
            user:{
                id:newuser.id,
                username:newuser.username,
                email:newuser.email,
                // password:newuser.password
            }
        })
    }
    catch(err){
          console.error("Login Error",err)
        return res.status(202).json({
            message:"login fail",
            error: err instanceof Error ? err.message:err

        })
    }
}