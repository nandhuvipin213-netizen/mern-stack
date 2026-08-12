import express, { type Application } from 'express'
import { log } from 'node:console'

const app:Application=express()

app.use(express.json())

let student:any[]=[]
app.post("/student",(req,res)=>{
    student.push(req.body)

    res.status(202).json({"message":"student added",student})
})

const port:number=7000
app.listen(port,()=>{
    console.log(`server listen on port ${port}`);
    
})
app.get("/student",(req,res)=>{
    res.status(202).json({"message":"student details viewed",student})
})

