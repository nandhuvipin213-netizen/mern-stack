import express, { type Application } from "express"

const app:Application=express()

const student=[
    "snu",
    "anu",
    "vinu"
]

app.get("/student",(req,res)=>{
    res.json(student)
})

const port:number=7000
app.listen(port,()=>{
    console.log(`server listen on port ${port}`);
    
})
    
