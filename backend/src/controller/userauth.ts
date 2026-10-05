import user from "../model/useauth.js"
import express from "express"

// export const createuser=async(req:Request,res:Response)=>{
//     try{
//         const data=req.body
//         const users=await user.create(data)
//         res.status(202).json({ message:"user created",users})
//     }
//     catch(err){
//         res.status(404).json({message:err })
//     }
// }
export const register=async(req:Request,res:Response)=>{
    const{name,address,email,password,confirmpassword}=req.body
    if(!name||!address||!email||!password||!confirmpassword){
        res.json({message:"fill required datas"})
    }
    const existing=await user.find(h => h.email===email)
    if(existing){
        res.json({message:"already have account"})
    }
    const hashedpassword=await bcrypt.hash(password,10)
    const newuser={
        name,address,email,password,confirmpassword:hashedpassword
    }
    user.create(newuser)
    res.status(202).json({message:"Registration completed"})
}
// export const getuser=async(req:Request,res:Response)=>{
//     const 
// }


