import express from "express"
import type {  Application,request,Request,Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import type {user} from "../types/usertypes.js"
import { users } from "../models/user.js"



 const secretkey="@abcd"

 export const register=async(req:Request,res:Response)=>{
    const{id,name,email,password}=req.body
    if(!id||!name||!email||!password){
        res.json({message:"fill full details"})
    }
    const existing=users.find(h=>h.email===email)
    if(existing){
        res.json({message:"already have"})
    }
    const hashedpassword=await bcrypt.hash(password,10)
    const newuser:user={
        id,name,email,password:hashedpassword
    }
    users.push(newuser)
    res.status(202).json({message:"registration" })
    
 }


 export const login=async(req:Request,res:Response)=>{
    const {name,email,password}=req.body
    const newuser:any=users.find(j=>j.email===email)
    if(!newuser){
        res.json({message:"invalid email"})
    }
    const match=await bcrypt.compare(password,newuser.password)
    if(!match){
        res.json({message:"invalid password"})
    }
    const token=jwt.sign({name:newuser.name},secretkey)
     res.json({message:"login successfull"})


 }


