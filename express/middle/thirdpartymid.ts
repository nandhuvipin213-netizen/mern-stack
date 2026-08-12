import express, { type Application } from "express"
import cors from 'cors'

const app:Application=express()

app.use(cors())
app.get("/",(req,res)=>{
    res.send("cors")
})
const port=6000
app.listen(port,()=>{
    console.log(`server listen ${port}`);
    
})