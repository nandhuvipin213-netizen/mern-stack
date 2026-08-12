import express, { type Application } from "express"

const app:Application=express()

app.get("/users",(req,res)=>{
    res.send("fetch all student")
})

app.get("/users/:course/:id",(req,res)=>{
    const {course,id}=req.params
    res.json({course,id})
})

app.post("/users",(req,res)=>{
    res.send("new student added")
})

app.put("/user",(req,res)=>{
    
})

const port:number=5000
app.listen(port,()=>{
    console.log(`server listen ${port}`);  
})