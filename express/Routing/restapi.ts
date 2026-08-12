import express, { type Application, type Request,type Response } from "express"

const app:Application=express()

app.get("/product",(req:Request,res:Response)=>{
    res.send("view product")
})

app.post("/product",(req:Request,res:Response)=>{
    res.send("product added")
})

app.put("/product",(req:Request,res:Response)=>{
    res.send("product updated")
})

app.delete("/product",(req:Request,res:Response)=>{
    res.send("product removed")
})

app.use((req:Request,res:Response)=>{
    res.status(402).send("page not found")
})

const port:number=5000
app.listen(port,()=>{
    console.log(`server listen on port  ${port}`);
    
})