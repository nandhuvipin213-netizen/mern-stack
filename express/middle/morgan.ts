import express, { type Application } from 'express'
import morgan from 'morgan'

const app:Application=express()

app.use(morgan("dev"))

app.get("/",(req,res)=>{
    res.send("heloo")
})
const port=5000
app.listen(port,()=>{
    console.log(`server listen ${port}`);
    
})