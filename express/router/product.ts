import express, { type NextFunction } from "express"

const router=express.Router()

function checkuser(req:Request,res:Response,next:NextFunction){
    console.log("user")
    next()
}

router.get("/profile",(req,res)=>{
    res.send("profile")
})

router.get("/about",(req,res)=>{
    res.send("about")
})

export default router