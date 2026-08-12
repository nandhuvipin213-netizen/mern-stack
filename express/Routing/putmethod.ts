import express, { type Application } from "express"

const app:Application=express()
app.use(express.json())

let student=
    {id:1,name:"annn",age:24}


app.put("/student",(req,res)=>{
    student=req.body

    res.json(student)
})
let port:number=5000
app.listen(port,()=>{
    console.log(`server listen on port ${port}`)
})