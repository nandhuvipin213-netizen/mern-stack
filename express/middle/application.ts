import express, { type Application,type Request ,type Response, type NextFunction } from "express"

const app:Application=express()

app.use((req:Request,res:Response,next:NextFunction)=>{
    console.log("application middlewere")
    next()
})
app.get("/",(req:Request,res:Response)=>{
    res.send("home")
})
app.get("/see",(req,res)=>{
    res.send("welcome")
})

const port:number=6000
app.listen(port,()=>{
    console.log(`server listen ${port}`)
})