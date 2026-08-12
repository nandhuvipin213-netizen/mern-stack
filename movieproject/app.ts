import express, { type Application } from "express";
import movieroute from './src/routes/movieroute.js'
const app:Application=express()

app.use(express.json())
app.use("/api",movieroute)


const port=5000
app.listen(port,()=>{
    console.log(`server listen ${port}`);
    
})