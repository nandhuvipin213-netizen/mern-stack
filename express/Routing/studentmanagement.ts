import express, { type Application } from "express"
import { log } from "node:console"

const app:Application=express()
app.use(express.json())

const student:any=[
    {id:1,name:"anvi",age:80},
    {id:2,name:"anuu",age:90}
]

app.post("/student",(req,res)=>{
    const newstudent={
        id:student.length+1,
        name:req.body.name,
        age:req.body.age
    }
    student.push(newstudent)
    res.status(202).json({"message":"student add",student})
})

app.get("/student",(req,res)=>{
    res.status(202).json({"message":"student",student})
})
app.put("/student",(req,res)=>{
    student [0]={
        id:1,
        name:req.body.name,
        age:req.body.age
    }
    res.json(student)
})
app.patch("/student",(req,res)=>{
    if(req.body.age){
        student[0].age=req.body.age
    }
    res.json(student)
})
app.delete("/student",(req,res)=>{
    student.splice(0,1)
    res.json(student)
})
    

let port:number=4000

app.listen(port,()=>{
    console.log(`server listen on port ${port}`)
})
