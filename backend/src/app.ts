import express, {type Application } from "express"
import router from "./routes/useroute.js"
import connectDB from "./config/db.js"

const app:Application=express()
connectDB()


app.use(express.json())

app.use("/api",router)

app.listen(7000,()=>{
   console.log(`server listen`);
   
})