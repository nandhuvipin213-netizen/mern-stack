import express, { type Application } from "express"
import connectDB from "./config/db.js"
import router from "./routes/userroute.js"

const app:Application=express()
 connectDB()

 app.use(express.json())

 app.use("/api",router)

 app.listen(5000,()=>{
    console.log("server listen");
    
 })