import express, { type Application ,type Request,type Response} from "express"
import { log } from "node:console"

const app:Application=express()

app.use(express.json())

app.post("/student",(req:Request,res:Response)=>{
    console.log(req.body);
    res.send(req.body)
    
})

const port=6000
app.listen(port,()=>{
    console.log(`server listening a port ${port}`)
})