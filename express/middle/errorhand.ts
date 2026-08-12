import express, { type Application ,type NextFunction,type Request,type Response } from "express"

const app:Application=express()

app.get("/",(req:Request,res:Response,next:NextFunction)=>{
    const error= new Error("something went wrong")
    next(error)
})
app.use((err:Error,req:Request,res:Response)=>{
    res.status(202).json({
        success:false,
        message:err.message
    })
})
app.listen(8000)