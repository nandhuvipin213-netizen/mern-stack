import express, { type Application,type Request,type Response } from "express"
import type { request } from "node:http"

const app:Application=express()

app.get("/",(req:Request,res:Response)=>{
    res.status(202).json({"message":"welcome to home page"})
})

app.get("/",(req:Request,res:Response)=>{
    res.status(202).send("about page")
})

app.use("/",(req:Request,res:Response)=>{
    res.status(404).send("page not found")
})

const port:number=7000
app.listen(port,()=>{

    console.log(`server listen on port ${port}`)

    
})