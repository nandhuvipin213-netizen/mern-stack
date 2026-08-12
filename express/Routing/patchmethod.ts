import express, { type Application } from "express"

const app:Application=express()
app.use(express.json())

let student={
    id:1,
    name:"ajj",
    age:60
}
app.patch("/student",(req,res)=>{
    if(req.body.name){
        student.name=req.body.name
    }
    res.json(student)
})
const port:number=7000
app.listen(port,()=>{
    console.log(`server listen pon port ${port}`);
    
})
