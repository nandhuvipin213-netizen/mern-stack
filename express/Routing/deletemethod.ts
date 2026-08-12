import express, { type Application } from 'express'

const app:Application=express()

let student=[
    {id:1,name:"anu"},
    {id:2,name:"anvi"}
]

app.delete('/student',(req,res)=>{
    student=student.filter(student=>student.id!==2)
    res.json(student)
})
const port:number=6000
app.listen(port,()=>{
    console.log(`server listen on port ${port}`);
    
})