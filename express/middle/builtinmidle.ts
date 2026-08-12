import express, {type Application } from "express"


const app:Application=express()

app.use(express.json())

app.post("/student",(req,res)=>{
    res.json(req.body)
})
app.listen(6000)